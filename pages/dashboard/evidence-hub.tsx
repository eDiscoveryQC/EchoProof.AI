'use client';
import React, { useState } from 'react';
import styled from 'styled-components';
import DashboardLayout from '../../components/DashboardLayout';
import SidebarFilters from '../../components/Evidence/SidebarFilters';
import MediaCard from '../../components/Evidence/MediaCard';

const dummyEvidence = [
  {
    name: 'Surveillance_2025_04_15.mp4',
    summary: 'Suspicious activity captured near alleyway. Two subjects involved.',
    tags: ['Night', 'Multiple Subjects', 'Suspicious'],
    type: 'video',
    status: 'Summarized',
  },
  {
    name: 'Jail_Call_0411.wav',
    summary: 'Mentions possible alibi and coded message about "the package".',
    tags: ['Alibi', 'Code Words'],
    type: 'audio',
    status: 'Tagged',
  },
  {
    name: 'Photo_Weapon.jpg',
    summary: 'Image shows suspected firearm on table.',
    tags: ['Weapon', 'Evidence'],
    type: 'image',
    status: 'Uploaded',
  },
];

export default function EvidenceHub() {
  const [activeTab, setActiveTab] = useState<'review' | 'tags' | 'timeline' | 'production'>('review');

  return (
    <DashboardLayout>
      <Container>
        <SidebarFilters />

        <MainContent>
          <Header>
            <Title>Evidence Hub</Title>
            <Description>
              Review, summarize, tag, and prepare multimedia evidence for export.
            </Description>
            <TabNav>
              <Tab active={activeTab === 'review'} onClick={() => setActiveTab('review')}>Review</Tab>
              <Tab active={activeTab === 'tags'} onClick={() => setActiveTab('tags')}>Tagged</Tab>
              <Tab active={activeTab === 'timeline'} onClick={() => setActiveTab('timeline')}>Timeline</Tab>
              <Tab active={activeTab === 'production'} onClick={() => setActiveTab('production')}>Production Builder</Tab>
            </TabNav>
          </Header>

          {activeTab === 'review' && (
            <>
              <StatGrid>
                <StatCard>
                  <StatLabel>Open Cases</StatLabel>
                  <StatValue>6</StatValue>
                </StatCard>
                <StatCard>
                  <StatLabel>Media Files</StatLabel>
                  <StatValue>34</StatValue>
                </StatCard>
                <StatCard>
                  <StatLabel>Tagged Entities</StatLabel>
                  <StatValue>127</StatValue>
                </StatCard>
                <StatCard>
                  <StatLabel>AI Summaries</StatLabel>
                  <StatValue>21</StatValue>
                </StatCard>
              </StatGrid>

              <MediaGrid>
                {dummyEvidence.map((file, idx) => (
                  <MediaCard key={idx} file={file} />
                ))}
              </MediaGrid>
            </>
          )}

          {activeTab === 'tags' && (
            <Placeholder>🧠 Show only media with tags like “Alibi”, “Weapon”, or “Confession”.</Placeholder>
          )}

          {activeTab === 'timeline' && (
            <Placeholder>🕒 Visual timeline of events — bodycam, audio, and photos organized chronologically.</Placeholder>
          )}

          {activeTab === 'production' && (
            <Placeholder>
              📦 Select and export relevant clips and transcripts. Save as PDF or ZIP. Include summaries and citations.
              <br />
              (You could even save multiple production sets here!)
            </Placeholder>
          )}
        </MainContent>
      </Container>
    </DashboardLayout>
  );
}

// ======================
// Styled Components
// ======================

const Container = styled.div`
  display: flex;
  padding: 2rem;
  gap: 2rem;
  background-color: #0a0f1c;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 1.75rem;
  color: #00ffe4;
  margin: 0;
`;

const Description = styled.p`
  color: #94a3b8;
  margin-top: 0.5rem;
`;

const TabNav = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const Tab = styled.button<{ active: boolean }>`
  padding: 0.6rem 1.25rem;
  font-weight: 600;
  border-radius: 6px;
  background: ${({ active }) => (active ? '#1e293b' : 'transparent')};
  color: ${({ active }) => (active ? '#00ffe4' : '#94a3b8')};
  border: 1px solid #1e293b;
  cursor: pointer;
  &:hover {
    background: #1e293b;
    color: #00ffe4;
  }
`;

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const StatCard = styled.div`
  background: #121826;
  padding: 1.25rem;
  border-radius: 12px;
  color: #e2e8f0;
  box-shadow: 0 1px 4px rgba(0, 255, 228, 0.1);
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: #94a3b8;
`;

const StatValue = styled.div`
  font-size: 1.75rem;
  font-weight: 700;
  margin-top: 0.25rem;
`;

const MediaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
`;

const Placeholder = styled.div`
  padding: 2rem;
  text-align: center;
  color: #94a3b8;
  background: #121826;
  border-radius: 8px;
`;

