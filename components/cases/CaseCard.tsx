'use client';

import Link from 'next/link';
import styled from 'styled-components';

const Card = styled.div`
  background: #111827;
  border: 1px solid #1f2937;
  border-radius: 10px;
  padding: 1.5rem;
  transition: 0.3s ease;
  cursor: pointer;
  box-shadow: 0 0 0 transparent;

  &:hover {
    border-color: #00ffe4;
    box-shadow: 0 0 12px #00ffe433;
  }
`;

const Title = styled.h2`
  font-size: 1.2rem;
  color: #f8fafc;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  color: #94a3b8;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color: #64748b;
`;

type Props = {
  caseData: {
    id: string;
    name: string;
    description?: string;
    created_at?: string;
  };
};

export default function CaseCard({ caseData }: Props) {
  return (
    <Link href={`/dashboard/cases/${caseData.id}/evidence`} passHref legacyBehavior>
      <Card>
        <Title>{caseData.name}</Title>
        <Description>{caseData.description || 'No description'}</Description>
        <Meta>
          <span>ID: {caseData.id.slice(0, 8)}...</span>
          <span>{new Date(caseData.created_at!).toLocaleDateString()}</span>
        </Meta>
      </Card>
    </Link>
  );
}
