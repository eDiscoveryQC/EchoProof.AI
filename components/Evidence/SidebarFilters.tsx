import React from 'react';
import styled from 'styled-components';

const Sidebar = styled.aside`
  width: 220px;
  background: #0f172a;
  border-radius: 12px;
  padding: 1.5rem;
  color: #f8fafc;
  box-shadow: 0 1px 4px rgba(0,0,0,0.1);
  height: fit-content;
`;

const Title = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #00ffe4;
`;

const FilterItem = styled.label`
  display: block;
  margin-bottom: 0.75rem;
  font-size: 0.9rem;
  cursor: pointer;

  input {
    margin-right: 0.5rem;
  }
`;

const filters = ['Video', 'Audio', 'Image', 'Alibi', 'Vehicle', 'Code Words', 'Night', 'Weapon'];

export default function SidebarFilters() {
  return (
    <Sidebar>
      <Title>Filters</Title>
      {filters.map((filter, idx) => (
        <FilterItem key={idx}>
          <input type="checkbox" />
          {filter}
        </FilterItem>
      ))}
    </Sidebar>
  );
}
