
'use client';
import React, { useState } from 'react';
import styled from 'styled-components';

const SidebarWrapper = styled.div`
  background: #1e293b;
  padding: 20px;
  border-radius: 10px;
  color: #e2e8f0;
  font-size: 0.9rem;
  width: 250px;
`;

const TagTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 10px;
  color: #00ffe4;
`;

const TagList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TagItem = styled.li<{ active: boolean }>`
  padding: 8px 12px;
  margin-bottom: 8px;
  border-radius: 8px;
  background: ${({ active }) => (active ? '#0e7490' : '#334155')};
  color: ${({ active }) => (active ? '#e0f2fe' : '#f8fafc')};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #0e7490;
    color: #e0f2fe;
  }
`;

type Props = {
  tags: string[];
  activeTags: string[];
  onToggleTag: (tag: string) => void;
};

export default function TagFilterPanel({ tags, activeTags, onToggleTag }: Props) {
  return (
    <SidebarWrapper>
      <TagTitle>Filter by Tag</TagTitle>
      <TagList>
        {tags.map((tag, idx) => (
          <TagItem
            key={idx}
            active={activeTags.includes(tag)}
            onClick={() => onToggleTag(tag)}
          >
            {tag}
          </TagItem>
        ))}
      </TagList>
    </SidebarWrapper>
  );
}
