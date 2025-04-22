import { useEffect, useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import styled from 'styled-components';

const PageWrapper = styled.div`
  padding: 2rem;
  background-color: #0f172a;
  color: #f8fafc;
  font-family: 'Segoe UI', sans-serif;
`;

const Section = styled.section`
  background: #1e293b;
  padding: 2rem;
  margin-bottom: 2rem;
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
`;

const StatCard = styled.div`
  background: #3b82f6;
  color: white;
  padding: 1.5rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
`;

const StatLabel = styled.div`
  font-size: 1rem;
  opacity: 0.9;
`;

const StatValue = styled.div`
  font-size: 2rem;
  font-weight: 800;
  margin-top: 0.5rem;
`;

const RecentList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 1.5rem;
`;

const RecentItem = styled.li`
  background: #334155;
  padding: 1rem;
  margin-bottom: 0.75rem;
  border-radius: 8px;
`;

export default function OverviewPage() {
  const [stats, setStats] = useState({
    uploads: 0,
    transcripts: 0,
    reports: 0,
  });

  const [recent, setRecent] = useState<string[]>([]);

  useEffect(() => {
    // Mock data for now
    setStats({ uploads: 18, transcripts: 12, reports: 4 });
    setRecent([
      'Officer Interview - Mar 21',
      'Surveillance - Mar 19',
      'Jail Call - Mar 15',
      'Deposition - Mar 13',
    ]);
  }, []);

  return (
    <DashboardLayout>
      <PageWrapper>
        <Section>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Your Case Stats</h2>
          <Grid>
            <StatCard>
              <StatLabel>Evidence Uploaded</StatLabel>
              <StatValue>{stats.uploads}</StatValue>
            </StatCard>
            <StatCard>
              <StatLabel>Transcripts Generated</StatLabel>
              <StatValue>{stats.transcripts}</StatValue>
            </StatCard>
            <StatCard>
              <StatLabel>Reports Created</StatLabel>
              <StatValue>{stats.reports}</StatValue>
            </StatCard>
          </Grid>
        </Section>

        <Section>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Recent Files</h2>
          <RecentList>
            {recent.map((item, idx) => (
              <RecentItem key={idx}>{item}</RecentItem>
            ))}
          </RecentList>
        </Section>
      </PageWrapper>
    </DashboardLayout>
  );
}
