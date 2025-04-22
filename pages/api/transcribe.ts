import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import fs from 'fs';
import OpenAI from 'openai';

export const config = {
  api: {
    bodyParser: false,
  },
};

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

  const form = formidable({ uploadDir: './tmp', keepExtensions: true, multiples: true });

  form.parse(req, async (err, fields, files) => {
    if (err || !files.file) {
      return res.status(400).json({ error: 'File upload failed.' });
    }

    const fileArray = Array.isArray(files.file) ? files.file : [files.file];

    const results = await Promise.all(
      fileArray.map(async (file) => {
        const filePath = file.filepath;
        try {
          const transcription = await openai.audio.transcriptions.create({
            file: fs.createReadStream(filePath),
            model: 'whisper-1',
          });

          const summaryResponse = await openai.chat.completions.create({
            model: 'gpt-4-0125-preview',
            messages: [
              {
                role: 'system',
                content: 'You are an expert legal assistant. Summarize the key points, speaker identities, and any legal relevance from the following transcript. Highlight named entities and evidence indicators.',
              },
              {
                role: 'user',
                content: transcription.text,
              },
            ],
            temperature: 0.5,
          });

          fs.unlink(filePath, () => {}); // Clean up temp file

          return {
            file: file.originalFilename || 'unknown_file',
            text: transcription.text,
            summary: summaryResponse.choices[0].message.content,
          };
        } catch (err) {
          console.error(`Error processing file ${file.originalFilename}:`, err);
          return {
            file: file.originalFilename || 'unknown_file',
            error: 'Failed to process file.',
          };
        }
      })
    );

    res.status(200).json({ results });
  });
}
