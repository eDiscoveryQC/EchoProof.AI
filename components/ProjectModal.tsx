"use client";
import { useState } from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const ModalContainer = styled.div`
  background: #121b2f;
  color: #f8fafc;
  padding: 2rem;
  border-radius: 12px;
  width: 100%;
  max-width: 500px;
  position: relative;
  box-shadow: 0 0 0 1px #1e293b;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  color: #94a3b8;
  font-size: 1.25rem;
  cursor: pointer;

  &:hover {
    color: #00ffe4;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border-radius: 8px;
  background: #1e293b;
  border: 1px solid #334155;
  color: #f8fafc;

  &::placeholder {
    color: #94a3b8;
  }

  &:focus {
    outline: none;
    border-color: #00ffe4;
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border-radius: 8px;
  background: #1e293b;
  border: 1px solid #334155;
  color: #f8fafc;
  resize: vertical;

  &::placeholder {
    color: #94a3b8;
  }

  &:focus {
    outline: none;
    border-color: #00ffe4;
  }
`;

const SubmitButton = styled.button`
  background: #00ffe4;
  color: #0f172a;
  padding: 0.75rem;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: #00ccbf;
  }
`;

interface ProjectModalProps {
  onClose: () => void;
  onSubmit: (project: { title: string; description: string }) => void;
}

export default function ProjectModal({ onClose, onSubmit }: ProjectModalProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit({ title, description });
    onClose();
  }

  return (
    <Overlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>
          <FaTimes />
        </CloseButton>
        <h2>Create New Project</h2>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Project Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <TextArea
            placeholder="Project Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            required
          />
          <SubmitButton type="submit">Create</SubmitButton>
        </Form>
      </ModalContainer>
    </Overlay>
  );
}
