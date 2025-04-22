import styled from 'styled-components';
import DashboardLayout from '../../components/DashboardLayout';
import { FaSearch, FaClock } from 'react-icons/fa';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SearchHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e3a8a;
`;

const SearchBar = styled.input`
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid #cbd5e1;
  font-size: 1rem;
  width: 100%;
  max-width: 400px;

  &:focus {
    outline: none;
    border-color: #1e3a8a;
  }
`;

const Results = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ResultItem = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Meta = styled.div`
  font-size: 0.9rem;
  color: #64748b;
`;

export default function SmartSearchPage() {
  const mockResults = [
    {
      file: 'Bodycam_Footage_Alpha.mp4',
      match: '“He was standing near the alley around 4:15”',
      time: '5 mins ago',
    },
    {
      file: 'Interview_March12.wav',
      match: '“I never went to the warehouse”',
      time: '12 mins ago',
    },
    {
      file: 'Jail_Call_Dec22.wav',
      match: '“Tell them the box was empty”',
      time: '34 mins ago',
    },
  ];

  return (
    <DashboardLayout>
      <Container>
        <SearchHeader>
          <Title><FaSearch /> Smart Search</Title>
          <SearchBar type="text" placeholder="Search transcripts, summaries, tags..." />
        </SearchHeader>

        <Results>
          {mockResults.map((res, idx) => (
            <ResultItem key={idx}>
              <div>
                <strong>{res.file}</strong>
                <div>{res.match}</div>
              </div>
              <Meta><FaClock style={{ marginRight: '0.5rem' }} /> {res.time}</Meta>
            </ResultItem>
          ))}
        </Results>
      </Container>
    </DashboardLayout>
  );
}
