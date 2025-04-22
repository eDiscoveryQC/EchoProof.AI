'use client';
import styled from 'styled-components';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <>
      <Header>
        <Logo>
          <Image src="/logo.svg" alt="EchoProof Logo" width={140} height={40} />
        </Logo>
        <Nav>
          <NavLink href="/#features">Features</NavLink>
          <NavLink href="/#how">How It Works</NavLink>
          <NavLink href="/pricing">Pricing</NavLink>
          <LoginBtn href="/auth/login">Login</LoginBtn>
        </Nav>
      </Header>

      <Wrapper>
        <Hero>
          <h1>Let’s Talk</h1>
          <p>Need a custom quote? Want a demo? Drop us a note and we'll get right back to you.</p>
        </Hero>

        <Form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email Address" />
          <textarea rows={6} placeholder="Your message..." />
          <SubmitBtn type="submit">Send Message</SubmitBtn>
        </Form>
      </Wrapper>

      <Footer>
        <FooterLinks>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/security">Security</a>
        </FooterLinks>
        <p>© 2025 EchoProof. All rights reserved.</p>
      </Footer>
    </>
  );
}

// ======== HEADER ========
const Header = styled.header`
  background: #0a0f1c;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid #1e293b;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div``;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

const NavLink = styled.a`
  font-weight: 500;
  color: #e2e8f0;
  transition: color 0.2s ease;
  &:hover {
    color: #00ffe4;
  }
`;

const LoginBtn = styled.a`
  background: #00ffe4;
  color: #0a0f1c;
  padding: 0.5rem 1.2rem;
  font-weight: bold;
  border-radius: 6px;
`;

// ======== MAIN ========
const Wrapper = styled.div`
  padding: 5rem 2rem;
  background: #0a0f1c;
  color: #e2e8f0;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
`;

const Hero = styled.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem;
  h1 {
    font-size: 2.5rem;
    color: #00ffe4;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.15rem;
    color: #cbd5e1;
  }
`;

const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  input, textarea {
    width: 100%;
    padding: 0.9rem 1rem;
    background: #1e293b;
    color: #e2e8f0;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    resize: vertical;
  }

  textarea::placeholder,
  input::placeholder {
    color: #94a3b8;
  }
`;

const SubmitBtn = styled.button`
  background: #00ffe4;
  color: #0f172a;
  padding: 0.85rem 1.5rem;
  font-weight: 600;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  align-self: flex-end;

  &:hover {
    background: #0ff0d0;
  }
`;

// ======== FOOTER ========
const Footer = styled.footer`
  text-align: center;
  padding: 2rem;
  color: #64748b;
  background: #0a0f1c;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 0.75rem;
  a {
    color: #94a3b8;
    font-size: 0.9rem;
  }
`;
