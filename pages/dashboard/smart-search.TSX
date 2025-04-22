import DashboardLayout from '../../components/DashboardLayout';
import styled from 'styled-components';
import { useState } from 'react';

const PageWrapper = styled.div`
  padding: 2rem;
  color: #1e293b;
  background-color: #f9fafb;
`;

const SearchSection = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const InputRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  flex: 1;
`;

const Button = styled.button`
  background: #1e3a8a;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background: #3b82f6;
  }
`;

const Results = styled.div`
  margin-top: 2rem;
`;

const ResultCard = styled.div`
  background: #f1f5f9;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  border: 1px solid #e2e8f0;
`;

export default function SmartSearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    setTimeout(() => {
      setResults([
        `Result for "${query}" from Transcript.mp4`,
        `Result for "${query}" from JailCall_2023.wav`,
      ]);
      setLoading(false);
    }, 1200);
  };

  return (
    <DashboardLayout>
      <PageWrapper>
        <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Smart Search</h2>
        <SearchSection>
          <InputRow>
            <Input
              type="text"
              placeholder="Search transcripts, summaries, and metadata..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button onClick={handleSearch} disabled={!query || loading}>
              {loading ? 'Searching...' : 'Search'}
            </Button>
          </InputRow>

          <Results>
            {results.map((r, idx) => (
              <ResultCard key={idx}>{r}</ResultCard>
            ))}
          </Results>
        </SearchSection>
      </PageWrapper>
    </DashboardLayout>
  );
}