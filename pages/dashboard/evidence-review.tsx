'use client';
import React, { useState } from 'react';
import styled from 'styled-components';
import DashboardLayout from '../../components/DashboardLayout';
import VideoPlayer from '../../components/VideoPlayer';
import TranscriptPanel from '../../components/TranscriptPanel';
import ClipControls from '../../components/ClipControls';
import EntitySidebar from '../../components/EntitySidebar';
import TagFilterPanel from '../../components/TagFilterPanel';
import TabbedReviewPanel from '../../components/TabbedReviewPanel';
import { mockTranscript } from '../../data/mockTranscript'; // ✅ NEW LINE

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 2rem;
`;

const RightPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export default function EvidenceReview() {
  const [currentTime, setCurrentTime] = useState(0);
  const [seekTo, setSeekTo] = useState<number | null>(null);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const handleSeek = (time: number) => setSeekTo(time);

  const toggleFilter = (tag: string) => {
    setActiveFilters((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const tabs = [
    {
      title: 'Transcript',
      content: (
        <TranscriptPanel
          currentTime={currentTime}
          onSeek={handleSeek}
          filters={activeFilters}
          transcript={mockTranscript} // ✅ Pass transcript here
        />
      ),
    },
    {
      title: 'Clip Tool',
      content: <ClipControls currentTime={currentTime} />,
    },
    {
      title: 'Entities',
      content: (
        <EntitySidebar
          activeFilters={activeFilters}
          toggleFilter={toggleFilter}
        />
      ),
    },
  ];

  return (
    <DashboardLayout>
      <ReviewContainer>
        <VideoPlayer onTimeUpdate={setCurrentTime} seekTo={seekTo} />
        <ContentGrid>
          <TabbedReviewPanel tabs={tabs} />
          <RightPanel>
            <TagFilterPanel
              tags={['Alibi', 'Vehicle', 'Location', 'Weapon', 'Code Words']}
              activeTags={activeFilters}
              onToggleTag={toggleFilter}
            />
          </RightPanel>
        </ContentGrid>
      </ReviewContainer>
    </DashboardLayout>
  );
}
