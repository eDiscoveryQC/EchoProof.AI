'use client';
import { useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { FaUpload, FaSearch, FaPlus } from 'react-icons/fa';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  min-height: 100vh;
  background: #0a0f1c;
  color: #e2e8f0;
  text-align: center;
`;

const Logo = styled.img`
  height: 50px;
  margin-bottom: 1.5rem;
`;

const Heading = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #00ffe4;
  margin-bottom: 0.75rem;
`;

const Subheading = styled.p`
  font-size: 1rem;
  color: #94a3b8;
  margin-bottom: 2.5rem;
  max-width: 600px;
`;

const ActionGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
`;

const ActionCard = styled.button`
  background: #1e293b;
  color: #f8fafc;
  border: 1px solid #334155;
  border-radius: 12px;
  padding: 1.75rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.2s ease;
  cursor: pointer;
  width: 240px;

  &:hover {
    background: #0f172a;
    border-color: #00ffe4;
    color: #00ffe4;
  }

  svg {
    font-size: 1.75rem;
  }
`;

const SkipLink = styled.a`
  margin-top: 2.5rem;
  font-size: 0.9rem;
  color: #64748b;
  cursor: pointer;
  &:hover {
    color: #00ffe4;
  }
`;

export default function OnboardingPage() {
  const router = useRouter();

  useEffect(() => {
    const skip = localStorage.getItem('skipOnboarding');
    if (skip === 'true') {
      router.push('/dashboard/projects');
    }
  }, []);

  const skipNextTime = () => {
    localStorage.setItem('skipOnboarding', 'true');
    router.push('/dashboard/projects');
  };

  return (
    <PageWrapper>
      <Logo src="/logo.svg" alt="EchoProof Logo" />
      <Heading>Welcome to EchoProof</Heading>
      <Subheading>
        Your command center for AI-powered multimedia discovery. Upload, search, summarize — faster than ever.
      </Subheading>

      <ActionGrid>
        <ActionCard onClick={() => router.push('/dashboard/uploads')}>
          <FaUpload />
          Upload Evidence
        </ActionCard>

        <ActionCard onClick={() => router.push('/dashboard/projects')}>
          <FaSearch />
          View My Cases
        </ActionCard>

        <ActionCard onClick={() => router.push('/dashboard/projects/new')}>
          <FaPlus />
          Create New Case
        </ActionCard>
      </ActionGrid>

      <SkipLink onClick={skipNextTime}>Skip this screen next time →</SkipLink>
    </PageWrapper>
  );
}
