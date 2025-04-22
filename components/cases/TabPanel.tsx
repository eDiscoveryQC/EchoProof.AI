'use client';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

const TabContent = styled.div`
  background: #0f172a;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 0 10px rgba(0, 255, 228, 0.05);
`;

type TabPanelProps = {
  children: ReactNode;
  index: number;
  activeTab: number;
};

export default function TabPanel({ children, index, activeTab }: TabPanelProps) {
  return activeTab === index ? <TabContent>{children}</TabContent> : null;
}
