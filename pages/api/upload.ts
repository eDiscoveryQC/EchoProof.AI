import type { NextApiRequest, NextApiResponse } from 'next';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import unzipper from 'unzipper';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const config = {
  api: {
    bodyParser: false,
  },
};

const upload = multer({ dest: '/tmp' });
const runMiddleware = (req: NextApiRequest, res: NextApiResponse, fn: any) =>
  new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) return reject(result);
      return resolve(result);
    });
  });

export default async function handler(req: any, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  await runMiddleware(req, res, upload.single('file'));

  const uploadedPath = req.file.path;
  const originalName = req.file.originalname;
  const results: any[] = [];

  const processFile = async (filePath: string, filename: string) => {
    try {
      const transcription = await openai.audio.transcriptions.create({
        file: fs.createReadStream(filePath),
        model: 'whisper-1',
      });

      const transcriptText = transcription.text;

      const summaryResponse = await openai.chat.completions.create({
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content: 'You are a legal discovery assistant. Summarize this call or video with key moments, names, and legal relevance.',
          },
          {
            role: 'user',
            content: transcriptText,
          },
        ],
        temperature: 0.3,
      });

      const summaryText = summaryResponse.choices[0].message.content ?? '';
      results.push({ name: filename, summary: summaryText, transcript: transcriptText });
    } catch (err: any) {
      results.push({ name: filename, summary: '', transcript: '', error: 'Processing failed', details: err.message });
    }
  };

  if (originalName.endsWith('.zip')) {
    const extractDir = path.join('/tmp', `extracted_${Date.now()}`);
    fs.mkdirSync(extractDir);

    await fs.createReadStream(uploadedPath)
      .pipe(unzipper.Extract({ path: extractDir }))
      .promise();

    const files = fs.readdirSync(extractDir);
    for (const filename of files) {
      const fullPath = path.join(extractDir, filename);
      if (/\.(mp3|mp4|wav|m4a)$/i.test(filename)) {
        await processFile(fullPath, filename);
      }
    }

    fs.rmSync(extractDir, { recursive: true, force: true });
    fs.unlinkSync(uploadedPath);
    return res.status(200).json({ zip: originalName, results });
  }

  await processFile(uploadedPath, originalName);
  fs.unlinkSync(uploadedPath);
  return res.status(200).json({ success: true, results });
}