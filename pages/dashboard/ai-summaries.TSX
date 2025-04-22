import DashboardLayout from '../../components/DashboardLayout';
import styled from 'styled-components';
import { useState } from 'react';

const PageWrapper = styled.div`
  padding: 2rem;
  background-color: #0f172a;
  color: #f8fafc;
  font-family: 'Segoe UI', sans-serif;
`;

const Section = styled.section`
  background: #1e293b;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
`;

const SectionHeader = styled.h2`
  font-size: 2rem;
  color: #a3e635;
  margin-bottom: 2rem;
`;

const SummaryCard = styled.div`
  background: #f1f5f9;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-bottom: 1.5rem;
  border-left: 5px solid #3b82f6;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  }
`;

const SummaryTitle = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  color: #1e40af;
`;

const SummaryBody = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #334155;
`;

const summariesMock = [
  {
    title: 'Surveillance Footage - 04/12/2024',
    text: 'Suspect is seen entering the building at 9:42 PM and exiting at 10:15 PM. No interaction with staff observed.'
  },
  {
    title: 'Interview Clip - Subject A',
    text: 'Subject A describes timeline inconsistencies when asked about whereabouts on April 10th.'
  },
  {
    title: 'Jail Call - Defendant',
    text: 'Defendant mentions a second phone during call with unknown individual. May require subpoena follow-up.'
  }
];

export default function AISummariesPage() {
  const [summaries] = useState(summariesMock);

  return (
    <DashboardLayout>
      <PageWrapper>
        <Section>
          <SectionHeader>AI Summaries</SectionHeader>
          {summaries.map((summary, idx) => (
            <SummaryCard key={idx}>
              <SummaryTitle>{summary.title}</SummaryTitle>
              <SummaryBody>{summary.text}</SummaryBody>
            </SummaryCard>
          ))}
        </Section>
      </PageWrapper>
    </DashboardLayout>
  );
}
