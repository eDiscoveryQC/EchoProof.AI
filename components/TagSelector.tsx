'use client';
import React from 'react';
import styled from 'styled-components';

const Modal = styled.div`
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -30%);
  background: #1e293b;
  border: 1px solid #334155;
  padding: 1.5rem;
  border-radius: 12px;
  z-index: 50;
  width: 320px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.5);
`;

const Title = styled.h3`
  color: #f8fafc;
  margin-bottom: 1rem;
  font-size: 1.1rem;
`;

const TagButton = styled.button`
  display: block;
  width: 100%;
  text-align: left;
  background: #0f172a;
  color: #e2e8f0;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  cursor: pointer;

  &:hover {
    background: #3b82f6;
    color: white;
  }
`;

const CloseButton = styled.button`
  background: transparent;
  color: #64748b;
  border: none;
  font-size: 0.85rem;
  margin-top: 1rem;
  cursor: pointer;

  &:hover {
    color: #e2e8f0;
  }
`;

type Props = {
  onSelectTag: (tag: string) => void;
  onClose: () => void;
};

const predefinedTags = ['Person of Interest', 'Sensitive Info', 'Alibi Mention', 'Redact'];

export default function TagSelector({ onSelectTag, onClose }: Props) {
  return (
    <Modal>
      <Title>Select a Tag</Title>
      {predefinedTags.map((tag) => (
        <TagButton key={tag} onClick={() => onSelectTag(tag)}>
          {tag}
        </TagButton>
      ))}
      <CloseButton onClick={onClose}>Cancel</CloseButton>
    </Modal>
  );
}