import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: 1px solid #e5e7eb;
  background-color: white;
`;

const LogoAnchor = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const LogoText = styled.span`
  margin-left: 10px;
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e3a8a;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #1f2937;
  font-weight: 500;
  transition: color 0.2s;

  &:hover {
    color: #065f46;
  }
`;

export default function Navbar(): JSX.Element {
  return (
    <NavWrapper>
      <Link href="/" passHref legacyBehavior>
        <LogoAnchor>
          <Image src="/logo.png" alt="Surveillance Discovery Logo" width={40} height={40} />
          <LogoText>Surveillance Discovery</LogoText>
        </LogoAnchor>
      </Link>

      <NavLinks>
        <Link href="/auth/login" passHref legacyBehavior>
          <NavLink>Login</NavLink>
        </Link>
        <Link href="/dashboard" passHref legacyBehavior>
          <NavLink>Dashboard</NavLink>
        </Link>
        <Link href="/dashboard/evidence-review" passHref legacyBehavior>
          <NavLink>Review Panel</NavLink>
        </Link>
      </NavLinks>
    </NavWrapper>
  );
}
