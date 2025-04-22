import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';

export default function PublicHeader() {
  return (
    <Header>
      <Link href="/">
        <Logo>
          <Image src="/logo.svg" alt="EchoProof Logo" width={140} height={36} />
        </Logo>
      </Link>
      <Nav>
        <NavLink href="#features">Features</NavLink>
        <NavLink href="#how">How It Works</NavLink>
        <NavLink href="#contact">Contact</NavLink>
        <LoginBtn href="/auth/login">Login</LoginBtn>
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
  align-items: center;
`;

const NavLink = styled.a`
  color: #e2e8f0;
  font-weight: 500;
  &:hover {
    color: #00ffe4;
  }
`;

const LoginBtn = styled.a`
  background: #00ffe4;
  color: #0f172a;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: bold;
`;
