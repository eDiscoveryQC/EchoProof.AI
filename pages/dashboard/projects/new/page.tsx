'use client';

import { useEffect, useState } from 'react';
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/navigation';
import DashboardLayout from '@/components/DashboardLayout';
import styled from 'styled-components';
import Link from 'next/link';

const PageContainer = styled.div`
  padding: 2rem 3rem;
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #f8fafc;
`;

const NewCaseButton = styled(Link)`
  background: linear-gradient(to right, #00ffe4, #1e3a8a);
  color: #0a0f1c;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;

  &:hover {
    opacity: 0.9;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
`;

const CaseCard = styled.div`
  background: #111827;
  border: 1px solid #1f2937;
  border-radius: 10px;
  padding: 1.5rem;
  transition: 0.3s ease;
  cursor: pointer;

  &:hover {
    border-color: #00ffe4;
    box-shadow: 0 0 12px #00ffe433;
  }
`;

const CaseTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #f8fafc;
  margin-bottom: 0.5rem;
`;

const CaseDesc = styled.p`
  font-size: 0.9rem;
  color: #94a3b8;
  margin-bottom: 1rem;
`;

const CaseMeta = styled.div`
  font-size: 0.75rem;
  color: #64748b;
  display: flex;
  justify-content: space-between;
`;

export default function CaseDashboardPage() {
  const supabase = useSupabaseClient();
  const user = useUser();
  const router = useRouter();
  const [cases, setCases] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCases() {
      setLoading(true);
      const { data, error } = await supabase
        .from('cases')
        .select('*')
        .eq('created_by', user?.id || '');

      if (error) {
        console.error('Failed to fetch cases:', error.message);
      } else {
        setCases(data || []);
      }

      setLoading(false);
    }

    if (user) fetchCases();
  }, [user, supabase]);

  return (
    <DashboardLayout>
      <PageContainer>
        <HeaderRow>
          <Title>Your Cases</Title>
          <NewCaseButton href="/dashboard/cases/new">+ New Case</NewCaseButton>
        </HeaderRow>

        {loading ? (
          <p style={{ color: '#94a3b8' }}>Loading...</p>
        ) : (
          <Grid>
            {cases.map((c) => (
              <Link key={c.id} href={`/dashboard/cases/${c.id}/evidence`} passHref legacyBehavior>
                <CaseCard>
                  <CaseTitle>{c.name}</CaseTitle>
                  <CaseDesc>{c.description || 'No description provided'}</CaseDesc>
                  <CaseMeta>
                    <span>ID: {c.id.slice(0, 8)}...</span>
                    <span>{new Date(c.created_at).toLocaleDateString()}</span>
                  </CaseMeta>
                </CaseCard>
              </Link>
            ))}
          </Grid>
        )}

        {!loading && cases.length === 0 && (
          <p style={{ color: '#64748b', marginTop: '2rem' }}>
            You haven’t created any cases yet.
          </p>
        )}
      </PageContainer>
    </DashboardLayout>
  );
}
