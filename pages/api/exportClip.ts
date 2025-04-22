// File: /pages/api/exportClip.ts

import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import formidable from 'formidable';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const form = new formidable.IncomingForm();
  form.uploadDir = './tmp';
  form.keepExtensions = true;

  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ error: 'File parsing error' });

    const file = files.file?.[0];
    const { start, end, name } = fields;

    if (!file || !start || !end) {
      return res.status(400).json({ error: 'Missing fields or file' });
    }

    const inputPath = file.filepath;
    const outputFilename = `${name || 'clip'}.mp4`;
    const outputPath = path.join('./public/clips', outputFilename);

    // Ensure output directory exists
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });

    const ffmpeg = spawn('ffmpeg', [
      '-i', inputPath,
      '-ss', start,
      '-to', end,
      '-c', 'copy',
      outputPath,
    ]);

    ffmpeg.stderr.on('data', (data) => console.error(data.toString()));

    ffmpeg.on('close', (code) => {
      if (code === 0) {
        return res.status(200).json({ url: `/clips/${outputFilename}` });
      } else {
        return res.status(500).json({ error: 'Failed to generate clip' });
      }
    });
  });
}
