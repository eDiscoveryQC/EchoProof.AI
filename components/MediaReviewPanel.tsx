'use client';
import React, { useState } from 'react';

interface MediaEntry {
  name: string;
  summary: string;
  transcript: string;
}

interface EntityResult {
  people: string[];
  locations: string[];
  objects: string[];
  topics: string[];
  dates: string[];
}

interface MediaReviewPanelProps {
  entries: MediaEntry[];
}

const MediaReviewPanel: React.FC<MediaReviewPanelProps> = ({ entries }) => {
  const [tagsMap, setTagsMap] = useState<Record<string, string[]>>({});
  const [assignedProjects, setAssignedProjects] = useState<Record<string, string>>({});
  const [entitiesMap, setEntitiesMap] = useState<Record<string, EntityResult>>({});
  const [loadingMap, setLoadingMap] = useState<Record<string, boolean>>({});

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const handleDownload = (name: string, content: string, type = 'txt') => {
    const blob = new Blob([content], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${name}.${type}`;
    link.click();
  };

  const handleAddTag = (name: string, tag: string) => {
    setTagsMap(prev => ({
      ...prev,
      [name]: [...(prev[name] || []), tag]
    }));
  };

  const handleAssignProject = (name: string, project: string) => {
    setAssignedProjects(prev => ({ ...prev, [name]: project }));
  };

  const handleAnalyzeEntities = async (entry: MediaEntry) => {
    setLoadingMap(prev => ({ ...prev, [entry.name]: true }));
    try {
      const res = await fetch('/api/extract-entities', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ transcript: entry.transcript }),
      });

      const data = await res.json();
      setEntitiesMap(prev => ({ ...prev, [entry.name]: data.entities }));
    } catch (err) {
      console.error('Entity analysis failed', err);
    } finally {
      setLoadingMap(prev => ({ ...prev, [entry.name]: false }));
    }
  };

  return (
    <div style={{ marginTop: '40px' }}>
      <h2 style={{ color: '#00ffe4', marginBottom: '20px' }}>📂 Media Review Panel</h2>
      {entries.map((entry, idx) => (
        <div key={idx} style={{ background: '#0f172a', padding: '20px', borderRadius: '10px', marginBottom: '30px' }}>
          <h3 style={{ color: '#e2e8f0' }}>{entry.name}</h3>
          <p style={{ color: '#00ffe4' }}><strong>Summary:</strong> {entry.summary}</p>
          <p style={{ color: '#94a3b8' }}>
            <strong>Transcript:</strong> {entry.transcript.slice(0, 500)}{entry.transcript.length > 500 ? '...' : ''}
          </p>

          <div style={{ marginTop: '15px' }}>
            <button onClick={() => handleCopy(entry.summary)}>📋 Copy Summary</button>
            <button onClick={() => handleDownload(entry.name, entry.transcript)}>⬇ Download Transcript</button>
            <button onClick={() => handleAnalyzeEntities(entry)} disabled={loadingMap[entry.name]}>
              {loadingMap[entry.name] ? 'Analyzing…' : '🧠 Analyze Entities'}
            </button>
          </div>

          <div style={{ marginTop: '10px' }}>
            <input
              type="text"
              placeholder="Add tag..."
              onKeyDown={e => {
                if (e.key === 'Enter') handleAddTag(entry.name, (e.target as HTMLInputElement).value);
              }}
            />
            <span style={{ color: '#cbd5e1', marginLeft: '10px' }}>
              Tags: {(tagsMap[entry.name] || []).join(', ') || 'None'}
            </span>
          </div>

          <div style={{ marginTop: '10px' }}>
            <input
              type="text"
              placeholder="Assign to project..."
              onBlur={e => handleAssignProject(entry.name, e.target.value)}
            />
            <span style={{ color: '#cbd5e1', marginLeft: '10px' }}>
              Assigned: {assignedProjects[entry.name] || 'None'}
            </span>
          </div>

          {entitiesMap[entry.name] && (
            <div style={{ marginTop: '20px', background: '#1e293b', padding: '15px', borderRadius: '6px' }}>
              <h4 style={{ color: '#7dd3fc' }}>🧠 Entities Detected:</h4>
              {Object.entries(entitiesMap[entry.name]).map(([type, items]) => (
                <p key={type} style={{ color: '#f8fafc' }}>
                  <strong>{type.charAt(0).toUpperCase() + type.slice(1)}:</strong> {items.join(', ') || 'None'}
                </p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MediaReviewPanel;