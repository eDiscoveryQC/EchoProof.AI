'use client';
import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #1e293b;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  color: #e2e8f0;
`;

const TabHeader = styled.div`
  display: flex;
  background: #0f172a;
`;

const TabButton = styled.button<{ active: boolean }>`
  flex: 1;
  padding: 0.75rem 1rem;
  font-weight: 600;
  border: none;
  background: ${({ active }) => (active ? '#334155' : '#0f172a')};
  color: ${({ active }) => (active ? '#00ffe4' : '#e2e8f0')};
  cursor: pointer;
  border-bottom: ${({ active }) => (active ? '3px solid #00ffe4' : '3px solid transparent')};
  transition: background 0.2s ease;

  &:hover {
    background: #1e293b;
  }
`;

const TabContent = styled.div`
  padding: 1.5rem;
  background: #1e293b;
`;

type TabbedReviewPanelProps = {
  tabs: { title: string; content: React.ReactNode }[];
};

export default function TabbedReviewPanel({ tabs }: TabbedReviewPanelProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Wrapper>
      <TabHeader>
        {tabs.map((tab, idx) => (
          <TabButton
            key={idx}
            active={activeTab === idx}
            onClick={() => setActiveTab(idx)}
          >
            {tab.title}
          </TabButton>
        ))}
      </TabHeader>
      <TabContent>
        {tabs[activeTab]?.content}
      </TabContent>
    </Wrapper>
  );
}