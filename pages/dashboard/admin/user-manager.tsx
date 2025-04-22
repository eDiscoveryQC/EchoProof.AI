import { useState } from 'react';

const mockUsers = [
  { id: '1', name: 'Alice', email: 'alice@example.com', role: 'admin' },
  { id: '2', name: 'Bob', email: 'bob@example.com', role: 'reviewer' },
];

export default function UserManager() {
  const [users, setUsers] = useState(mockUsers);

  const handleRoleChange = (id: string, newRole: string) => {
    setUsers(prev =>
      prev.map(user => (user.id === id ? { ...user, role: newRole } : user))
    );
  };

  return (
    <div>
      <h2>User Manager</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td><td>{user.email}</td>
              <td>
                <select
                  value={user.role}
                  onChange={e => handleRoleChange(user.id, e.target.value)}
                >
                  <option value="admin">Admin</option>
                  <option value="reviewer">Reviewer</option>
                  <option value="viewer">Viewer</option>
                  <option value="uploader">Uploader</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}