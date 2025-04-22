'use client';
import React, { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import UploadDropzone from '../../components/UploadDropzone';

export default function UploadPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [results, setResults] = useState<
    { name: string; summary: string; transcript: string; error?: string; details?: string }[]
  >([]);

  const handleUpload = async (selectedFiles: File[]) => {
    setFiles(selectedFiles);
    const newResults = [];

    for (const file of selectedFiles) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const res = await fetch('/api/process-file', {
          method: 'POST',
          body: formData,
        });

        const data = await res.json();
        newResults.push({
          name: file.name,
          summary: data.analysis || 'No summary generated.',
          transcript: data.transcript || 'No transcript returned.',
        });
      } catch (err: any) {
        newResults.push({
          name: file.name,
          summary: '',
          transcript: '',
          error: 'Processing failed',
          details: err.message,
        });
      }
    }

    setResults(newResults);
  };

  return (
    <DashboardLayout>
      <div style={{ padding: '40px', background: '#0a0f1c', color: '#e2e8f0', minHeight: '100vh' }}>
        <h1 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: '#00ffe4' }}>
          📤 Upload Multimedia Evidence
        </h1>
        <UploadDropzone onFiles={handleUpload} />

        {results.length > 0 && (
          <div style={{ marginTop: '40px' }}>
            <h2 style={{ color: '#00ffe4', marginBottom: '1rem' }}>🧠 AI-Powered Results</h2>

            {results.map((res, idx) => (
              <div
                key={idx}
                style={{
                  marginBottom: '30px',
                  background: '#1e293b',
                  padding: '20px',
                  borderRadius: '12px',
                  boxShadow: '0 0 10px rgba(0,255,228,0.05)',
                }}
              >
                <h3 style={{ color: '#e2e8f0', fontSize: '1.1rem' }}>{res.name}</h3>
                {res.error ? (
                  <p style={{ color: 'red' }}>⚠️ {res.error}: {res.details}</p>
                ) : (
                  <>
                    <p style={{ color: '#00ffe4', marginTop: '0.5rem' }}>
                      <strong>Summary:</strong> {res.summary}
                    </p>
                    <p style={{ color: '#94a3b8', marginTop: '0.5rem' }}>
                      <strong>Transcript:</strong> {res.transcript.slice(0, 400)}
                      {res.transcript.length > 400 ? '...' : ''}
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
