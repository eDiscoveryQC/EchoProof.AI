import styled from 'styled-components';
import DashboardLayout from '../../components/DashboardLayout';
import {
  FaVideo,
  FaBrain,
  FaFileAlt,
  FaClock,
  FaSearch,
} from 'react-icons/fa';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  min-height: 100%;
  background: #f9fafb;
`;

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
`;

const StatCard = styled.div`
  background: #ffffff;
  color: #1e293b;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  }
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: #64748b;
`;

const StatValue = styled.div`
  font-size: 2rem;
  font-weight: 800;
  color: #0f172a;
  margin-top: 0.25rem;
`;

const Section = styled.section`
  background: #ffffff;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
`;

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1e293b;
`;

const FileCard = styled.div`
  background: #f8fafb;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 0.75rem;
  display: flex;
  justify-content: space-between;
  font-size: 0.95rem;
`;

const TimelineItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 1rem;
  color: #334155;
`;

const SummaryCard = styled.div`
  background: #f1f5f9;
  border-left: 4px solid #3b82f6;
  padding: 1rem;
  border-radius: 8px;
  font-size: 0.95rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
`;

const ActionGrid = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const ActionButton = styled.button`
  flex: 1;
  background: #1e3a8a;
  color: white;
  padding: 0.75rem 1.25rem;
  font-weight: 600;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  transition: background 0.2s ease;

  &:hover {
    background: #3b82f6;
  }
`;

export default function DashboardHome() {
  return (
    <DashboardLayout>
      <PageWrapper>
        {/* 📊 Stats */}
        <StatGrid>
          <StatCard>
            <StatLabel>AI Summaries Run</StatLabel>
            <StatValue>48</StatValue>
          </StatCard>
          <StatCard>
            <StatLabel>Uploads Processed</StatLabel>
            <StatValue>122</StatValue>
          </StatCard>
          <StatCard>
            <StatLabel>Reports Created</StatLabel>
            <StatValue>19</StatValue>
          </StatCard>
          <StatCard>
            <StatLabel>Minutes Transcribed</StatLabel>
            <StatValue>983</StatValue>
          </StatCard>
        </StatGrid>

        {/* ⚡️ Quick Actions */}
        <Section>
          <SectionTitle>Quick Actions</SectionTitle>
          <ActionGrid>
            <ActionButton><FaVideo /> Upload File</ActionButton>
            <ActionButton><FaBrain /> Run AI Summary</ActionButton>
            <ActionButton><FaFileAlt /> Generate Report</ActionButton>
            <ActionButton><FaSearch /> Smart Search</ActionButton>
          </ActionGrid>
        </Section>

        {/* 🧾 Recent Files */}
        <Section>
          <SectionTitle>Recent Files</SectionTitle>
          <FileCard>
            <span>Interview_Room_Apr14.mp4</span>
            <span>Status: Transcribed</span>
          </FileCard>
          <FileCard>
            <span>Surveillance_Night_Mar22.mov</span>
            <span>Status: Uploaded</span>
          </FileCard>
          <FileCard>
            <span>Jail_Call_0411.wav</span>
            <span>Status: Summarized</span>
          </FileCard>
        </Section>

        {/* 🕒 Timeline */}
        <Section>
          <SectionTitle>Activity Timeline</SectionTitle>
          <TimelineItem>
            <FaClock style={{ marginTop: 2, color: '#64748b' }} />
            <div><strong>3 mins ago:</strong> Summary generated for <em>Jail_Call_0411.wav</em></div>
          </TimelineItem>
          <TimelineItem>
            <FaClock style={{ marginTop: 2, color: '#64748b' }} />
            <div><strong>25 mins ago:</strong> Uploaded <em>Surveillance_Night_Mar22.mov</em></div>
          </TimelineItem>
          <TimelineItem>
            <FaClock style={{ marginTop: 2, color: '#64748b' }} />
            <div><strong>2 hours ago:</strong> Report created for <em>Interview_Room_Apr14.mp4</em></div>
          </TimelineItem>
        </Section>

        {/* 💬 AI Summary Feed */}
        <Section>
          <SectionTitle>AI Summary Feed</SectionTitle>
          <SummaryCard>
            <strong>Interview_Room_Apr14.mp4:</strong> Subject appeared distressed around 04:15. Mentioned key locations and a second party.
          </SummaryCard>
          <SummaryCard>
            <strong>Jail_Call_0411.wav:</strong> Suspect hints at an alibi and uses coded language about "the box".
          </SummaryCard>
        </Section>
      </PageWrapper>
    </DashboardLayout>
  );
}
