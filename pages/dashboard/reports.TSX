import DashboardLayout from '../../components/DashboardLayout';
import styled from 'styled-components';
import { useState } from 'react';

const PageWrapper = styled.div`
  padding: 2rem;
  color: #1e293b;
  background-color: #f9fafb;
`;

const ReportSection = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
`;

const ReportTitle = styled.h3`
  font-size: 1.25rem;
  color: #1e40af;
  margin-bottom: 1rem;
`;

const ReportList = styled.ul`
  padding: 0;
  list-style: none;
`;

const ReportItem = styled.li`
  background: #f1f5f9;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DownloadButton = styled.button`
  background: #1e3a8a;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background: #3b82f6;
  }
`;

const reportsMock = [
  { name: 'Transcript Report - Case A', file: 'transcript_case_a.pdf' },
  { name: 'Evidence Summary - Case B', file: 'summary_case_b.csv' },
  { name: 'Export File - Case C', file: 'export_case_c.zip' }
];

export default function ReportsPage() {
  const [reports] = useState(reportsMock);

  const handleDownload = (fileName: string) => {
    alert(`Pretending to download ${fileName}`);
  };

  return (
    <DashboardLayout>
      <PageWrapper>
        <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Reports</h2>
        <ReportSection>
          <ReportTitle>Downloadable Reports</ReportTitle>
          <ReportList>
            {reports.map((report, idx) => (
              <ReportItem key={idx}>
                <span>{report.name}</span>
                <DownloadButton onClick={() => handleDownload(report.file)}>
                  Download
                </DownloadButton>
              </ReportItem>
            ))}
          </ReportList>
        </ReportSection>
      </PageWrapper>
    </DashboardLayout>
  );
}
