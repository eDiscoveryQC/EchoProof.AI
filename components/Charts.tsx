import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, CartesianGrid, Legend } from 'recharts';
import styled from 'styled-components';

const ChartWrapper = styled.div`
  background: ${({ theme }) => theme.card};
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px ${({ theme }) => theme.shadow};
  margin-bottom: 2rem;
`;

const ChartTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;
`;

// Sample data
const uploadData = [
  { date: 'Apr 1', uploads: 5 },
  { date: 'Apr 2', uploads: 3 },
  { date: 'Apr 3', uploads: 7 },
  { date: 'Apr 4', uploads: 6 },
  { date: 'Apr 5', uploads: 4 },
];

const summaryData = [
  { file: 'Call_0411.wav', summaries: 3 },
  { file: 'Surveillance_0322.mov', summaries: 5 },
  { file: 'Interview_0405.mp4', summaries: 2 },
  { file: 'Jail_0410.wav', summaries: 4 },
];

export function UploadsBarChart() {
  return (
    <ChartWrapper>
      <ChartTitle>📤 Uploads per Day</ChartTitle>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={uploadData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="uploads" fill="#3b82f6" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
}

export function SummariesLineChart() {
  return (
    <ChartWrapper>
      <ChartTitle>🧠 AI Summaries per File</ChartTitle>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={summaryData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="file" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="summaries" stroke="#1e3a8a" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
}
