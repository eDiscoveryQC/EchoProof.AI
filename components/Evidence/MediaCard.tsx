'use client';
import React from 'react';
import styled from 'styled-components';
import { FaFileAudio, FaFileVideo, FaFileImage } from 'react-icons/fa';

const Card = styled.div`
  background: #1e293b;
  border-radius: 12px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
`;

const FileName = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #f8fafc;
`;

const Summary = styled.p`
  font-size: 0.9rem;
  color: #cbd5e1;
  margin: 0;
`;

const TagList = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  background: #0284c7;
  color: #e0f2fe;
  padding: 0.3rem 0.6rem;
  font-size: 0.75rem;
  border-radius: 999px;
`;

const TypeIcon = styled.div`
  align-self: flex-end;
  font-size: 1.25rem;
  color: #00ffe4;
`;

export default function MediaCard({ file }: { file: any }) {
  const renderIcon = () => {
    switch (file.type) {
      case 'audio':
        return <FaFileAudio />;
      case 'video':
        return <FaFileVideo />;
      case 'image':
        return <FaFileImage />;
      default:
        return <FaFileAlt />;
    }
  };

  return (
    <Card>
      <FileName>{file.name}</FileName>
      <Summary>{file.summary}</Summary>
      <TagList>
        {file.tags.map((tag: string, idx: number) => (
          <Tag key={idx}>{tag}</Tag>
        ))}
      </TagList>
      <TypeIcon>{renderIcon()}</TypeIcon>
    </Card>
  );
}
