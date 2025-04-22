"use client";
import styled from "styled-components";
import DashboardLayout from "../../components/DashboardLayout";
import { UploadsBarChart, SummariesLineChart } from "../../components/Charts";
import { FaFileAlt, FaTag, FaCheckCircle } from "react-icons/fa";

const Container = styled.div`
  background: #0a0f1c;
  color: #fff;
  padding: 60px 30px;
  min-height: 100vh;
  font-family: 'Segoe UI', sans-serif;
`;

const Section = styled.section`
  background: #121b2f;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 255, 228, 0.05);
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #00ffe4;
  margin-bottom: 1.25rem;
`;

const SummaryCard = styled.div`
  background: #1e293b;
  padding: 1rem;
  border-left: 4px solid #00ffe4;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const SummaryMeta = styled.div`
  font-size: 0.9rem;
  color: #94a3b8;
  margin-top: 0.5rem;
`;

const EntityList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const EntityTag = styled.li`
  background: #0e7490;
  color: #e0f2fe;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.85rem;
`;

const HeatmapGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
`;

const HeatmapItem = styled.div`
  background: #facc15;
  color: #1e293b;
  padding: 0.75rem;
  border-radius: 8px;
  font-weight: 600;
  text-align: center;
`;

const FileTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;

  th, td {
    padding: 0.75rem;
    border-bottom: 1px solid #334155;
    text-align: left;
  }

  th {
    background: #1e293b;
    color: #94a3b8;
  }

  tr:hover {
    background: #1f2937;
  }

  .pill {
    background: #0284c7;
    color: #e0f2fe;
    padding: 0.25rem 0.5rem;
    border-radius: 9999px;
    font-size: 0.8rem;
  }
`;

export default function AIDashboard() {
  return (
    <DashboardLayout>
      <Container>
        <Section>
          <Title>🧠 AI Summary Spotlight</Title>
          <SummaryCard>
            <strong>Jail_Call_0411.wav:</strong> Mentions possible alibi and code words.
            <SummaryMeta>Confidence: 94% | 3 mins ago</SummaryMeta>
          </SummaryCard>
          <SummaryCard>
            <strong>Interview_Apr14.mp4:</strong> Emotional spike detected. Location discussed.
            <SummaryMeta>Confidence: 91% | 25 mins ago</SummaryMeta>
          </SummaryCard>
          <SummaryCard>
            <strong>Surveillance_Mar22.mov:</strong> Suspicious movement and a second subject appear.
            <SummaryMeta>Confidence: 88% | 2 hours ago</SummaryMeta>
          </SummaryCard>
        </Section>

        <UploadsBarChart />
        <SummariesLineChart />

        <Section>
          <Title>🧬 Entity Intelligence</Title>
          <EntityList>
            <EntityTag>“The Warehouse”</EntityTag>
            <EntityTag>“Officer James”</EntityTag>
            <EntityTag>“Blue Sedan”</EntityTag>
            <EntityTag>“2nd Street”</EntityTag>
            <EntityTag>“Unknown Male”</EntityTag>
          </EntityList>
        </Section>

        <Section>
          <Title>🔥 Topic Heatmap</Title>
          <HeatmapGrid>
            <HeatmapItem>Gun Mention</HeatmapItem>
            <HeatmapItem>Alibi</HeatmapItem>
            <HeatmapItem>Vehicle Spotted</HeatmapItem>
            <HeatmapItem>Cellphone Activity</HeatmapItem>
            <HeatmapItem>Code Words</HeatmapItem>
            <HeatmapItem>Location Reference</HeatmapItem>
          </HeatmapGrid>
        </Section>

        <Section>
          <Title>📁 File Intelligence Table</Title>
          <FileTable>
            <thead>
              <tr>
                <th>File</th>
                <th>Status</th>
                <th>Tags</th>
                <th>Flag</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jail_Call_0411.wav</td>
                <td>Summarized</td>
                <td><span className="pill">Alibi</span> <span className="pill">Code</span></td>
                <td><FaCheckCircle color="#10b981" /></td>
              </tr>
              <tr>
                <td>Surveillance_Mar22.mov</td>
                <td>Transcribed</td>
                <td><span className="pill">Vehicle</span> <span className="pill">Suspicious</span></td>
                <td><FaCheckCircle color="#10b981" /></td>
              </tr>
              <tr>
                <td>Interview_Apr14.mp4</td>
                <td>Summarized</td>
                <td><span className="pill">Emotion</span> <span className="pill">Location</span></td>
                <td><FaCheckCircle color="#10b981" /></td>
              </tr>
            </tbody>
          </FileTable>
        </Section>
      </Container>
    </DashboardLayout>
  );
}
