'use client';
import React, { useState } from 'react';
import styled from 'styled-components';

const ClipWrapper = styled.div`
  background: #1e293b;
  padding: 1rem;
  border-radius: 8px;
  color: #e2e8f0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TimeRow = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  label {
    font-size: 0.9rem;
  }

  input {
    width: 100px;
    padding: 0.25rem;
    border-radius: 4px;
    border: 1px solid #334155;
    background: #0f172a;
    color: #e2e8f0;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border-radius: 6px;
  background: #0f172a;
  border: 1px solid #334155;
  color: #f1f5f9;
`;

const ClipButton = styled.button`
  background: #3b82f6;
  color: #fff;
  font-weight: bold;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #2563eb;
  }
`;

const ClipList = styled.ul`
  margin-top: 1rem;
  list-style: none;
  padding: 0;
`;

const ClipItem = styled.li`
  background: #0f172a;
  padding: 0.75rem;
  border: 1px solid #334155;
  border-radius: 6px;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
`;

type Clip = {
  start: number;
  end: number;
  label: string;
};

type Props = {
  currentTime: number;
};

export default function ClipControls({ currentTime }: Props) {
  const [start, setStart] = useState<number | null>(null);
  const [end, setEnd] = useState<number | null>(null);
  const [label, setLabel] = useState('');
  const [clips, setClips] = useState<Clip[]>([]);

  const handleSave = () => {
    if (start !== null && end !== null && end > start) {
      const newClip: Clip = { start, end, label };
      setClips((prev) => [...prev, newClip]);
      setStart(null);
      setEnd(null);
      setLabel('');
    } else {
      alert('Invalid start/end time');
    }
  };

  return (
    <ClipWrapper>
      <h3>🎬 Clip Builder</h3>
      <TimeRow>
        <label>Start:</label>
        <input
          type="text"
          value={start !== null ? start.toFixed(2) : ''}
          placeholder="00:00"
          readOnly
        />
        <ClipButton onClick={() => setStart(currentTime)}>Set Start</ClipButton>
      </TimeRow>
      <TimeRow>
        <label>End:</label>
        <input
          type="text"
          value={end !== null ? end.toFixed(2) : ''}
          placeholder="00:00"
          readOnly
        />
        <ClipButton onClick={() => setEnd(currentTime)}>Set End</ClipButton>
      </TimeRow>
      <TextArea
        rows={2}
        placeholder="Add optional label or note..."
        value={label}
        onChange={(e) => setLabel(e.target.value)}
      />
      <ClipButton onClick={handleSave}>💾 Save Clip</ClipButton>

      <ClipList>
        {clips.map((clip, idx) => (
          <ClipItem key={idx}>
            <strong>{clip.label || `Clip ${idx + 1}`}</strong> – {clip.start.toFixed(2)}s → {clip.end.toFixed(2)}s
          </ClipItem>
        ))}
      </ClipList>
    </ClipWrapper>
  );
}