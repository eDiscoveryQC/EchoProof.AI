'use client';
import React from 'react';
import styled from 'styled-components';
import DashboardLayout from '../../../components/DashboardLayout';

const Wrapper = styled.div`
  padding: 2rem;
  background: #0a0f1c;
  color: #e2e8f0;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #00ffe4;
  margin-bottom: 2rem;
`;

const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  background: #1e293b;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 0 0 1px #1e293b;
`;

const Label = styled.div`
  font-size: 0.9rem;
  color: #94a3b8;
`;

const Value = styled.div`
  font-size: 1.75rem;
  font-weight: bold;
  margin-top: 0.5rem;
`;

export default function ProjectsOverview() {
  return (
    <DashboardLayout>
      <Wrapper>
        <Title>📊 Projects Overview</Title>
        <SummaryGrid>
          <Card>
            <Label>Total Projects</Label>
            <Value>24</Value>
          </Card>
          <Card>
            <Label>Active Matters</Label>
            <Value>11</Value>
          </Card>
          <Card>
            <Label>AI Summaries</Label>
            <Value>198</Value>
          </Card>
          <Card>
            <Label>Tagged Files</Label>
            <Value>452</Value>
          </Card>
        </SummaryGrid>
      </Wrapper>
    </DashboardLayout>
  );
}
