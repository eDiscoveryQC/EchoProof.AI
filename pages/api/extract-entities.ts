import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { transcript } = req.body;

  if (!transcript || transcript.length < 20) {
    return res.status(400).json({ error: 'Transcript required' });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'You are a surveillance analyst. Extract structured named entities from the following transcript. Return a JSON object like: { people: [], locations: [], objects: [], topics: [], dates: [] }.',
        },
        {
          role: 'user',
          content: transcript,
        },
      ],
      temperature: 0.2,
    });

    const raw = completion.choices[0].message?.content || '{}';
    const parsed = JSON.parse(raw);

    res.status(200).json({ entities: parsed });
  } catch (err: any) {
    console.error('Entity extraction failed:', err.message);
    res.status(500).json({ error: 'Entity extraction failed' });
  }
}