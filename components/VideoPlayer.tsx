'use client';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ClipControls from './ClipControls';

const PlayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: #0f172a;
  padding: 1.5rem;
  border-radius: 12px;
`;

const VideoStyled = styled.video`
  width: 100%;
  border-radius: 8px;
  outline: none;
  background: black;
`;

export default function VideoPlayer({ onTimeUpdate, seekTo }: { onTimeUpdate: (time: number) => void, seekTo: number | null }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (seekTo !== null && videoRef.current) {
      videoRef.current.currentTime = seekTo;
    }
  }, [seekTo]);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const time = videoRef.current.currentTime;
      setCurrentTime(time);
      onTimeUpdate(time);
    }
  };

  return (
    <PlayerWrapper>
      <VideoStyled
        ref={videoRef}
        controls
        onTimeUpdate={handleTimeUpdate}
      >
        <source src="/sample.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </VideoStyled>

    </PlayerWrapper>
  );
}