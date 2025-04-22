'use client';
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';

const DropWrapper = styled.div`
  border:  2px dashed #00ffe4;
  padding: 40px;
  text-align: center;
  border-radius: 12px;
  background-color: #0f172a;
  color: #94a3b8;
  cursor: pointer;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: #00ccbf;
  }
`;

export default function UploadDropzone({ onFiles }: { onFiles: (files: File[]) => void }) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    onFiles(acceptedFiles);
  }, [onFiles]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'audio/*': [],
      'video/*': [],
    },
    onDrop,
  });

  return (
    <DropWrapper {...getRootProps()}>
      <input {...getInputProps()} />
      <p>📁 Drag & drop audio/video files here, or click to browse</p>
      <p style={{ fontSize: '0.85rem', color: '#64748b' }}>Supported: .mp4, .mp3, .wav, .mov, etc.</p>
    </DropWrapper>
  );
}