'use client';
import { useParams } from 'next/navigation';
import styled from 'styled-components';

export default function ProjectDetail() {
  const { id } = useParams();

  const metadata = {
    name: (id?.toString().replace(/-/g, ' ') || 'Project Workspace'),
    created: 'April 2025',
    owner: 'alex@echoproof.ai',
    status: 'Active',
    files: 27
  };

  return (
    <Wrapper>
      <Header>
        <h1>{metadata.name}</h1>
        <p>Created: {metadata.created} • Owner: {metadata.owner}</p>
      </Header>

      <MetaBar>
        <span>Status: {metadata.status}</span>
        <span>{metadata.files} files</span>
      </MetaBar>

      <Grid>
        <Card>
          <h2>📤 Upload Evidence</h2>
          <p>Drag & drop files or browse from your desktop to begin AI analysis.</p>
          <UploadZone>+ Drop media here</UploadZone>
        </Card>

        <Card>
          <h2>🧠 AI Insights</h2>
          <p>Once uploaded, EchoProof will transcribe, summarize, and detect key events automatically.</p>
          <InsightsPlaceholder>AI will summarize your evidence here.</InsightsPlaceholder>
        </Card>
      </Grid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 3rem 2rem;
  background: #0a0f1c;
  color: #e2e8f0;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 1rem;
  h1 {
    font-size: 2rem;
    color: #00ffe4;
    text-transform: capitalize;
  }
  p {
    color: #cbd5e1;
    font-size: 0.95rem;
  }
`;

const MetaBar = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
  color: #94a3b8;
  font-size: 0.95rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const Card = styled.div`
  background: #1e293b;
  border-radius: 10px;
  padding: 2rem;
  h2 {
    margin-top: 0;
    color: #00ffe4;
    font-size: 1.25rem;
  }
  p {
    color: #cbd5e1;
    font-size: 0.95rem;
  }
`;

const UploadZone = styled.div`
  margin-top: 1rem;
  border: 2px dashed #334155;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  font-size: 0.95rem;
  color: #64748b;
  background: #0f172a;
`;

const InsightsPlaceholder = styled.div`
  margin-top: 1rem;
  padding: 1.5rem;
  background: #0f172a;
  border-radius: 6px;
  font-size: 0.95rem;
  color: #94a3b8;
  text-align: center;
`;
