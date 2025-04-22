export type Role = 'admin' | 'reviewer' | 'viewer' | 'uploader';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  teamId?: string;
}