'use client';
import React, { useState } from 'react';
import styled from 'styled-components';
import TabPanel from './TabPanel';
import AssignedUsers from './AssignedUsers';

const TabsContainer = styled.div`
  margin-top: 2rem;
`;

const TabHeaders = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const TabButton = styled.button<{ active?: boolean }>`
  background: ${({ active }) => (active ? '#00ffe4' : '#1e293b')};
  color: ${({ active }) => (active ? '#0f172a' : '#e2e8f0')};
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #00ffe4aa;
    color: #0f172a;
  }
`;

export default function ProjectTab() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <TabsContainer>
      <TabHeaders>
        <TabButton active={activeTab === 0} onClick={() => setActiveTab(0)}>Overview</TabButton>
        <TabButton active={activeTab === 1} onClick={() => setActiveTab(1)}>Assigned Users</TabButton>
        <TabButton active={activeTab === 2} onClick={() => setActiveTab(2)}>Activity</TabButton>
      </TabHeaders>

      <TabPanel index={0} activeTab={activeTab}>
        <p>Welcome to the Project Intelligence Overview. Details will go here.</p>
      </TabPanel>

      <TabPanel index={1} activeTab={activeTab}>
        <AssignedUsers />
      </TabPanel>

      <TabPanel index={2} activeTab={activeTab}>
        <p>Activity Logs and Audit Trails will appear here.</p>
      </TabPanel>
    </TabsContainer>
  );
}
