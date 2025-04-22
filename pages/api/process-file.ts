
import type { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import fs from 'fs';
import { Configuration, OpenAIApi } from 'openai';

export const config = {
  api: {
    bodyParser: false,
  },
};

const whisperEndpoint = 'https://api.openai.com/v1/audio/transcriptions';
const openai = new OpenAIApi(new Configuration({ apiKey: process.env.OPENAI_API_KEY }));

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const form = formidable({ multiples: false });

  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ error: 'File upload error' });

    const file = files.file[0];
    const audioStream = fs.createReadStream(file.filepath);

    try {
      // Step 1: Whisper transcription
      const whisperRes = await fetch(whisperEndpoint, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: (() => {
          const data = new FormData();
          data.append('file', audioStream, file.originalFilename);
          data.append('model', 'whisper-1');
          return data;
        })(),
      });

      const whisperJson = await whisperRes.json();
      const transcriptText = whisperJson.text;

      // Step 2: Entity + Tag Extraction via GPT
      const gptRes = await openai.createChatCompletion({
        model: 'gpt-4',
        messages: [
          { role: 'system', content: 'You are a legal evidence analysis assistant. Extract tags, people, places, and summary from transcripts.' },
          { role: 'user', content: `Transcript: ${transcriptText}` },
        ],
      });

      const responseText = gptRes.data.choices[0].message?.content || '';
      return res.status(200).json({
        transcript: transcriptText,
        analysis: responseText,
      });
    } catch (error: any) {
      return res.status(500).json({ error: 'Processing failed', details: error.message });
    }
  });
}
