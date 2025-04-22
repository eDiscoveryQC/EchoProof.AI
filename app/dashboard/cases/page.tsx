'use client';

import { useEffect, useState } from 'react';
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import DashboardLayout from '@/components/DashboardLayout';

const PageWrapper = styled.div`
  padding: 3rem;
  color: #f8fafc;
  background-color: #0a0f1c;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;

const CaseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 1.5rem;
`;

const CaseCard = styled.div`
  background-color: #1e293b;
  border-radius: 10px;
  padding: 1.5rem;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  border: 1px solid transparent;

  &:hover {
    border-color: #00ffe4;
    transform: scale(1.02);
  }
`;

const CaseName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const CaseMeta = styled.p`
  font-size: 0.875rem;
  color: #94a3b8;
`;

const NewCaseButton = styled.button`
  background: linear-gradient(to right, #00ffe4, #1e3a8a);
  color: #0a0f1c;
  font-weight: bold;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  border: none;
  margin-bottom: 2rem;
  font-size: 1rem;
  cursor: pointer;
`;

export default function CasesPage() {
  const supabase = useSupabaseClient();
  const user = useUser();
  const router = useRouter();
  const [cases, setCases] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCases = async () => {
      if (!user) return;

      const { data, error } = await supabase
        .from('cases') // update your table name if still "projects"
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching cases:', error.message);
      } else {
        setCases(data || []);
      }

      setLoading(false);
    };

    fetchCases();
  }, [user]);

  const handleOpenCase = (caseId: string) => {
    router.push(`/dashboard/cases/${caseId}/evidence`);
  };

  const handleCreateCase = () => {
    router.push('/dashboard/cases/new'); // Or trigger modal if you want
  };

  return (
    <DashboardLayout>
      <PageWrapper>
        <Title>Your Cases</Title>
        <NewCaseButton onClick={handleCreateCase}>+ New Case</NewCaseButton>

        {loading ? (
          <p>Loading cases...</p>
        ) : cases.length === 0 ? (
          <p>No cases yet. Let’s start your first investigation.</p>
        ) : (
          <CaseGrid>
            {cases.map((c) => (
              <CaseCard key={c.id} onClick={() => handleOpenCase(c.id)}>
                <CaseName>{c.name}</CaseName>
                <CaseMeta>
                  Created on {new Date(c.created_at).toLocaleDateString()}
                </CaseMeta>
              </CaseCard>
            ))}
          </CaseGrid>
        )}
      </PageWrapper>
    </DashboardLayout>
  );
}
