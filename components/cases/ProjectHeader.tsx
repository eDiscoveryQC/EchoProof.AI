'use client';
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background: #1e293b;
  padding: 1.5rem 2rem;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #e2e8f0;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #00ffe4;
  margin: 0;
`;

const Status = styled.span`
  background: #0284c7;
  padding: 0.4rem 1rem;
  border-radius: 9999px;
  font-size: 0.85rem;
  font-weight: 600;
  color: #f0f9ff;
`;

export default function ProjectHeader() {
  return (
    <HeaderContainer>
      <Title>📁 Project: Surveillance Alpha</Title>
      <Status>Active</Status>
    </HeaderContainer>
  );
}
