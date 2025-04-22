'use client';
import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SectionTitle = styled.h3`
  color: #00ffe4;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const EntityGroup = styled.div`
  margin-bottom: 1rem;
`;

const EntityItem = styled.div<{ active: boolean }>`
  padding: 0.5rem 0.75rem;
  background: ${({ active }) => (active ? '#3b82f6' : '#1e293b')};
  color: #e2e8f0;
  border-radius: 6px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #334155;
  }
`;

const mockEntities = {
  People: ['Officer Ramirez', 'Unknown Male'],
  Locations: ['The Warehouse', '2nd Street'],
  Topics: ['Gun Mention', 'Coded Language', 'Suspicious Activity'],
};

type Props = {
  activeFilters: string[];
  toggleFilter: (tag: string) => void;
};

export default function EntitySidebar({ activeFilters, toggleFilter }: Props) {
  return (
    <SidebarContainer>
      {Object.entries(mockEntities).map(([group, items]) => (
        <EntityGroup key={group}>
          <SectionTitle>{group}</SectionTitle>
          {items.map((entity, idx) => (
            <EntityItem
              key={idx}
              active={activeFilters.includes(entity)}
              onClick={() => toggleFilter(entity)}
            >
              {entity}
            </EntityItem>
          ))}
        </EntityGroup>
      ))}
    </SidebarContainer>
  );
}