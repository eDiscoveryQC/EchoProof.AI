
'use client';
import React, { useState } from 'react';
import styled from 'styled-components';

const PanelWrapper = styled.div`
  background: #1e293b;
  padding: 20px;
  border-radius: 10px;
  color: #e2e8f0;
  font-size: 0.95rem;
  max-height: 500px;
  overflow-y: auto;
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 6px;
  border: 1px solid #334155;
  background: #0f172a;
  color: #f8fafc;
  font-size: 0.95rem;

  &::placeholder {
    color: #94a3b8;
  }
`;

const Line = styled.div<{ active?: boolean }>`
  margin-bottom: 8px;
  cursor: pointer;
  background: ${({ active }) => (active ? '#334155' : 'transparent')};
  padding: 4px 6px;
  border-radius: 6px;

  &:hover {
    background: #334155;
  }

  span.highlight {
    background: #0e7490;
    color: #e0f2fe;
    padding: 0 4px;
    border-radius: 4px;
    margin: 0 2px;
  }
`;

type TranscriptLine = {
  timestamp: number;
  text: string;
};

type Props = {
  transcript: TranscriptLine[];
  currentTime: number;
  onSeek: (time: number) => void;
  filters: string[];
};

export default function TranscriptPanel({ transcript = [], currentTime, onSeek, filters }: Props) {
  const [search, setSearch] = useState('');

  const filtered = transcript.filter(line => {
    const text = line.text.toLowerCase();
    const matchesSearch = search ? text.includes(search.toLowerCase()) : true;
    const matchesFilter = filters.length
      ? filters.some(tag => text.includes(tag.toLowerCase()))
      : true;
    return matchesSearch && matchesFilter;
  });

  const highlightText = (text: string) => {
    if (!filters.length) return text;

    const parts = text.split(new RegExp(`(${filters.join('|')})`, 'gi'));
    return parts.map((part, i) =>
      filters.some(tag => tag.toLowerCase() === part.toLowerCase()) ? (
        <span className="highlight" key={i}>{part}</span>
      ) : (
        part
      )
    );
  };

  return (
    <PanelWrapper>
      <SearchBar
        placeholder="Search transcript..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filtered.map((line, idx) => (
        <Line key={idx} onClick={() => onSeek(line.timestamp)}>
          <strong>[{new Date(line.timestamp * 1000).toISOString().substr(14, 5)}]</strong>{' '}
          {highlightText(line.text)}
        </Line>
      ))}
    </PanelWrapper>
  );
}
