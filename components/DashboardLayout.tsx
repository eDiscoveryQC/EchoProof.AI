'use client';
import Link from 'next/link';
import styled from 'styled-components';
import { usePathname } from 'next/navigation';
import { FaFolderOpen, FaUpload, FaCog, FaSignOutAlt } from 'react-icons/fa';
import Image from 'next/image';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <Wrapper>
      <Sidebar>
        <LogoLink href="/dashboard/projects">
          <Image src="/logo.svg" alt="EchoProof Logo" width={120} height={36} />
        </LogoLink>
        <Nav>
          <NavItem href="/dashboard/projects" active={pathname.includes('/projects')}>
            <FaFolderOpen />
            <span>Projects</span>
          </NavItem>
          <NavItem href="/dashboard/uploads" active={pathname.includes('/uploads')}>
            <FaUpload />
            <span>Uploads</span>
          </NavItem>
          <NavItem href="/dashboard/settings" active={pathname.includes('/settings')}>
            <FaCog />
            <span>Settings</span>
          </NavItem>
        </Nav>
        <LogoutLink href="/auth/logout">
          <FaSignOutAlt />
          <span>Logout</span>
        </LogoutLink>
      </Sidebar>

      <MainWrapper>
        <MainContent>{children}</MainContent>
        <Footer>
          <p>© {new Date().getFullYear()} EchoProof. All rights reserved.</p>
        </Footer>
      </MainWrapper>
    </Wrapper>
  );
}

// ========== Styles ==========
const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background: #0a0f1c;
  font-family: 'Inter', sans-serif;
  color: #e2e8f0;
`;

const Sidebar = styled.aside`
  width: 240px;
  background: #0f172a;
  padding: 2rem 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid #1e293b;
`;

const LogoLink = styled(Link)`
  display: block;
  margin-bottom: 2rem;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const NavItem = styled(Link)<{ active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  font-weight: 500;
  color: ${({ active }) => (active ? '#00ffe4' : '#e2e8f0')};
  background: ${({ active }) => (active ? '#1e293b' : 'transparent')};
  border-radius: 8px;
  transition: background 0.2s;

  &:hover {
    background: #1e293b;
    color: #00ffe4;
  }

  svg {
    font-size: 1.1rem;
  }
`;

const LogoutLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #94a3b8;
  font-weight: 500;
  font-size: 0.95rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  margin-top: 2rem;

  &:hover {
    color: #00ffe4;
    background: #1e293b;
  }

  svg {
    font-size: 1rem;
  }
`;

const MainWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 2rem;
  background: #0a0f1c;
`;

const Footer = styled.footer`
  text-align: center;
  padding: 1rem 2rem;
  font-size: 0.85rem;
  color: #64748b;
  background: #0a0f1c;
  border-top: 1px solid #1e293b;
`;
