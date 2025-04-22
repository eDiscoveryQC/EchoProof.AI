import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';

export default function DashboardHeader() {
  return (
    <Header>
      <Link href="/dashboard/projects">
        <Logo>
          <Image src="/logo.svg" alt="EchoProof Logo" width={130} height={32} />
        </Logo>
      </Link>
      <Nav>
        <NavLink href="/dashboard/projects">Projects</NavLink>
        <NavLink href="/dashboard/uploads">Uploads</NavLink>
        <NavLink href="/dashboard/settings">Settings</NavLink>
        <NavLink href="/auth/logout">Logout</NavLink>
      </Nav>
    </Header>
  );
}

const Header = styled.header`
  background: #0a0f1c;
  padding: 1.25rem 2rem;
  border-bottom: 1px solid #1e293b;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div``;

const Nav = styled.nav`
  display: flex;
  gap: 1.25rem;
`;

const NavLink = styled.a`
  color: #e2e8f0;
  font-weight: 500;
  &:hover {
    color: #00ffe4;
  }
`;
