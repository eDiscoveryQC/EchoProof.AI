'use client';
import React from 'react';
import styled from 'styled-components';

const Panel = styled.div`
  background: #1e293b;
  padding: 1.5rem;
  border-radius: 12px;
  color: #e2e8f0;
`;

const UserList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 1rem;
`;

const UserItem = styled.li`
  padding: 0.6rem 0;
  border-bottom: 1px solid #334155;
  font-size: 0.95rem;
`;

export default function AssignedUsers() {
  const users = ['Alex Martinez', 'Samantha Blake', 'Jordan Lee'];

  return (
    <Panel>
      <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>👥 Assigned Users</h3>
      <UserList>
        {users.map((user, idx) => (
          <UserItem key={idx}>{user}</UserItem>
        ))}
      </UserList>
    </Panel>
  );
}
