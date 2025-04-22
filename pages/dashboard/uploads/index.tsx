'use client';
import React, { useState } from 'react';
import DashboardLayout from '../../../components/DashboardLayout';
import UploadDropzone from '../../../components/UploadDropzone';
import MediaReviewPanel from '../../../components/MediaReviewPanel';

export default function UploadPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [results, setResults] = useState<
    { name: string; summary: string; transcript: string }[]
  >([]);
  const [zipName, setZipName] = useState<string | null>(null);

  const handleUpload = async (selectedFiles: File[]) => {
    setFiles(selectedFiles);
    const allResults = [];

    for (const file of selectedFiles) {
      const formData = new FormData();
      formData.append('file', file);

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (data.zip) {
        setZipName(data.zip);
        allResults.push(...data.results);
      } else if (data.success) {
        setZipName(null);
        allResults.push(...data.results);
      }
    }

    setResults(allResults);
  };

  return (
    <DashboardLayout>
      <div style={{ padding: '40px', background: '#0a0f1c', color: '#e2e8f0', minHeight: '100vh' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '20px', color: '#00ffe4' }}>
          Upload Multimedia Evidence
        </h1>

        <UploadDropzone onFiles={handleUpload} />

        {results.length > 0 && (
          <div style={{ marginTop: '40px' }}>
            {zipName && <h2 style={{ color: '#00ffe4' }}>🗂 Results from ZIP: {zipName}</h2>}
            {!zipName && <h2 style={{ color: '#00ffe4' }}>AI Results</h2>}

            <MediaReviewPanel entries={results} />
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
