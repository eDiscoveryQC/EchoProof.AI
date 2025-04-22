
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(15, 23, 42, 0.65);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const Modal = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: #1e3a8a;
  margin-bottom: 1rem;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  color: #0f172a;
  font-size: 1.25rem;
  cursor: pointer;
`;

const Field = styled.input`
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid #cbd5e1;
  margin-bottom: 1rem;
  width: 100%;
  font-size: 1rem;
`;

const CreateButton = styled.button`
  background: #1e3a8a;
  color: white;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background: #3b82f6;
  }
`;

export default function NewProjectModal({ onClose, onCreate }: { onClose: () => void; onCreate: (title: string) => void }) {
  const [title, setTitle] = useState('');

  return (
    <Overlay>
      <Modal>
        <CloseButton onClick={onClose}><FaTimes /></CloseButton>
        <Title>Create New Project</Title>
        <Field
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <CreateButton onClick={() => onCreate(title)}>Create Project</CreateButton>
      </Modal>
    </Overlay>
  );
}
