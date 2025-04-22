'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

export default function ProjectDashboard() {
  const router = useRouter();

  const [projects, setProjects] = useState([]);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [query, setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [showModal, setShowModal] = useState(false);
  const [newName, setNewName] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('/api/projects');
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        console.error('Error loading projects:', err);
      } finally {
        setLoadingProjects(false);
      }
    };

    fetchProjects();
  }, []);

  const handleCreate = async () => {
    if (!newName.trim()) return;
    setLoading(true);

    try {
      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newName })
      });

      const data = await res.json();
      if (res.ok) {
        setProjects(prev => [data, ...prev]);
        setNewName('');
        setShowModal(false);
        router.push(`/dashboard/projects/${data.id}`);
      } else {
        alert(data.error || 'Failed to create project');
      }
    } catch (err) {
      alert('Error creating project.');
    } finally {
      setLoading(false);
    }
  };

  const filteredProjects = projects.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase()) &&
    (statusFilter === 'All' || p.status === statusFilter)
  );

  return (
    <Container>
      <Header>
        <div>
          <h1>My Cases</h1>
          <p>Smart, secure, AI-powered evidence review projects.</p>
        </div>
        <NewProjectButton onClick={() => setShowModal(true)}>+ New Case</NewProjectButton>
      </Header>

      <Filters>
        <SearchInput
          type="text"
          placeholder="Search by case name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <StatusSelect value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="All">All Statuses</option>
          <option value="Active">Active</option>
          <option value="In Review">In Review</option>
          <option value="Closed">Closed</option>
        </StatusSelect>
      </Filters>

      <ProjectGrid>
        {loadingProjects ? (
          <EmptyMsg>Loading projects...</EmptyMsg>
        ) : filteredProjects.length > 0 ? (
          filteredProjects.map(project => (
            <Card key={project.id} onClick={() => router.push(`/dashboard/projects/${project.id}`)}>
              <Title>{project.name}</Title>
              <Meta>
                <span>{project.status}</span>
                <span>{project.files} files</span>
              </Meta>
            </Card>
          ))
        ) : (
          <EmptyMsg>No projects found.</EmptyMsg>
        )}
      </ProjectGrid>

      {showModal && (
        <ModalOverlay onClick={() => !loading && setShowModal(false)}>
          <ModalCard onClick={e => e.stopPropagation()}>
            <h2>Create New Case</h2>
            <input
              type="text"
              placeholder="Case name"
              value={newName}
              onChange={e => setNewName(e.target.value)}
              disabled={loading}
            />
            <ModalActions>
              <button onClick={handleCreate} disabled={loading}>
                {loading ? 'Creating...' : 'Create'}
              </button>
              <button onClick={() => setShowModal(false)} disabled={loading}>
                Cancel
              </button>
            </ModalActions>
          </ModalCard>
        </ModalOverlay>
      )}
    </Container>
  );
}

// Styled Components
const Container = styled.div`
  padding: 4rem 2rem;
  background: #0a0f1c;
  min-height: 100vh;
  color: #e2e8f0;
  font-family: 'Inter', sans-serif;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
  h1 {
    font-size: 2rem;
    color: #00ffe4;
    margin: 0;
  }
  p {
    color: #94a3b8;
    margin: 0.5rem 0 0;
  }
`;

const NewProjectButton = styled.button`
  background: #00ffe4;
  color: #0a0f1c;
  font-weight: bold;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.95rem;
  transition: 0.2s ease;
  &:hover {
    background: #0ff0d0;
  }
`;

const Filters = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const SearchInput = styled.input`
  padding: 0.6rem 1rem;
  border-radius: 6px;
  border: none;
  background: #1e293b;
  color: #e2e8f0;
  flex: 1;
`;

const StatusSelect = styled.select`
  padding: 0.6rem 1rem;
  border-radius: 6px;
  border: none;
  background: #1e293b;
  color: #e2e8f0;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.75rem;
`;

const Card = styled.div`
  background: #1e293b;
  padding: 1.5rem;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.2s ease;
  box-shadow: 0 0 0 transparent;
  &:hover {
    background: #273549;
    box-shadow: 0 4px 12px rgba(0, 255, 228, 0.05);
  }
`;

const Title = styled.h2`
  margin: 0 0 0.75rem;
  font-size: 1.1rem;
  color: #e2e8f0;
`;

const Meta = styled.div`
  font-size: 0.9rem;
  color: #94a3b8;
  display: flex;
  justify-content: space-between;
`;

const EmptyMsg = styled.div`
  text-align: center;
  padding: 2rem;
  color: #64748b;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalCard = styled.div`
  background: #1e293b;
  padding: 2rem;
  border-radius: 12px;
  width: 100%;
  max-width: 400px;
  h2 {
    color: #00ffe4;
    margin-bottom: 1rem;
  }
  input {
    width: 100%;
    padding: 0.75rem;
    background: #0f172a;
    color: #e2e8f0;
    border: none;
    border-radius: 6px;
    margin-bottom: 1rem;
  }
`;

const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  button {
    padding: 0.5rem 1rem;
    font-weight: bold;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    background: #00ffe4;
    color: #0f172a;
  }
`;
