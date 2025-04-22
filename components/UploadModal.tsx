'use client';
import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useDropzone } from 'react-dropzone';
import { FaUpload } from 'react-icons/fa';

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const Modal = styled.div`
  background: #1e293b;
  padding: 2rem;
  border-radius: 16px;
  max-width: 500px;
  width: 90%;
  text-align: center;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
`;

const DropZone = styled.div`
  border: 2px dashed #00ffe4;
  padding: 2rem;
  border-radius: 12px;
  background: #0f172a;
  color: #e2e8f0;
  cursor: pointer;
`;

const Heading = styled.h2`
  font-size: 1.5rem;
  color: #00ffe4;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 0.9rem;
  color: #94a3b8;
  margin-bottom: 1.5rem;
`;

export default function UploadModal({ onClose, onUpload }: { onClose: () => void; onUpload: (files: File[]) => void }) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    onUpload(acceptedFiles);
    onClose();
  }, [onClose, onUpload]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <Backdrop onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Heading><FaUpload /> Upload Evidence</Heading>
        <Subtitle>Drag & drop your media files or click to browse</Subtitle>
        <DropZone {...getRootProps()}>
          <input {...getInputProps()} />
          Drop files here or click to upload
        </DropZone>
      </Modal>
    </Backdrop>
  );
}
