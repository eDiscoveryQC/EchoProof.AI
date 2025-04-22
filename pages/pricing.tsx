'use client';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

export default function PricingPage() {
  return (
    <>
      <Header>
        <Logo>
          <Image src="/logo.svg" alt="EchoProof Logo" width={140} height={40} />
        </Logo>
        <Nav>
          <NavLink href="/#features">Features</NavLink>
          <NavLink href="/#how">How It Works</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <LoginBtn href="/auth/login">Login</LoginBtn>
        </Nav>
      </Header>

      <Wrapper>
        <Hero>
          <h1>Simple, Transparent Pricing</h1>
          <p>
            EchoProof runs on credits. You only pay when AI is working for you — no storage fees, no seat licenses, no wasted spend.
          </p>
        </Hero>

        <PricingSection>
          <h2>How Credits Work</h2>
          <Table>
            <thead>
              <tr>
                <th>Action</th>
                <th>Credits</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Transcribe 1 minute of media</td>
                <td>1 credit</td>
                <td>$0.50</td>
              </tr>
              <tr>
                <td>Generate GPT-powered summary</td>
                <td>5 credits</td>
                <td>$2.50</td>
              </tr>
              <tr>
                <td>Export bundle (ZIP/PDF)</td>
                <td>10 credits</td>
                <td>$5.00</td>
              </tr>
              <tr>
                <td>Extend storage for 1 year</td>
                <td>20 credits (optional)</td>
                <td>$10.00</td>
              </tr>
            </tbody>
          </Table>
        </PricingSection>

        <Includes>
          <h2>Every Credit Includes</h2>
          <ul>
            <li>Encrypted uploads with zero-trust architecture</li>
            <li>Automatic transcription and smart tagging</li>
            <li>Entity detection and semantic filtering</li>
            <li>Audit trails and chain of custody logs</li>
            <li>30-day secure storage by default (extendable)</li>
          </ul>
        </Includes>

        <FAQ>
          <h2>Frequently Asked</h2>
          <div>
            <h3>How long is evidence stored?</h3>
            <p>30 days by default. Extend to 1 year using credits or delete anytime.</p>
          </div>
          <div>
            <h3>Do credits expire?</h3>
            <p>No. Credits never expire and are only used when the AI works for you.</p>
          </div>
          <div>
            <h3>Are there seat or user limits?</h3>
            <p>None. You can add unlimited collaborators at no extra cost.</p>
          </div>
          <div>
            <h3>Do you offer volume pricing?</h3>
            <p>Yes. <Link href="/contact">Contact us</Link> for quotes on large or recurring projects.</p>
          </div>
        </FAQ>

        <CTA>
          <h2>Ready to review smarter?</h2>
          <Link href="/auth/register">Create an Account</Link>
        </CTA>
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

// ==== HEADER & NAV ====
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

// ==== FOOTER ====
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

// ==== PRICING PAGE STYLES ====
const Wrapper = styled.div`
  background: #0a0f1c;
  color: #e2e8f0;
  padding: 2rem;
  font-family: 'Inter', sans-serif;
`;

const Hero = styled.section`
  text-align: center;
  max-width: 800px;
  margin: 5rem auto 3rem;
  h1 {
    font-size: 2.75rem;
    color: #00ffe4;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.25rem;
    color: #cbd5e1;
  }
`;

const PricingSection = styled.section`
  max-width: 900px;
  margin: 4rem auto;
  h2 {
    font-size: 1.85rem;
    color: #00ffe4;
    margin-bottom: 1.5rem;
    text-align: center;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th, td {
    border: 1px solid #1e293b;
    padding: 1rem 1.25rem;
    text-align: left;
  }
  th {
    background: #1e293b;
    color: #e2e8f0;
    font-weight: 600;
  }
  td {
    background: #0f172a;
    color: #cbd5e1;
  }
`;

const Includes = styled.section`
  max-width: 800px;
  margin: 4rem auto;
  h2 {
    color: #00ffe4;
    font-size: 1.6rem;
    margin-bottom: 1rem;
    text-align: center;
  }
  ul {
    list-style-type: disc;
    padding-left: 1.5rem;
    li {
      margin-bottom: 0.5rem;
      color: #cbd5e1;
    }
  }
`;

const FAQ = styled.section`
  max-width: 800px;
  margin: 4rem auto;
  h2 {
    color: #00ffe4;
    font-size: 1.75rem;
    margin-bottom: 1rem;
    text-align: center;
  }
  h3 {
    margin-top: 2rem;
    font-size: 1.15rem;
    color: #e2e8f0;
  }
  p {
    color: #94a3b8;
    margin-top: 0.5rem;
  }
`;

const CTA = styled.section`
  text-align: center;
  padding: 4rem 0;
  background: #121b2f;
  margin-top: 5rem;
  h2 {
    font-size: 1.85rem;
    color: #00ffe4;
    margin-bottom: 1.25rem;
  }
  a {
    display: inline-block;
    background: #00ffe4;
    color: #0f172a;
    padding: 0.85rem 1.75rem;
    font-weight: bold;
    border-radius: 8px;
    text-decoration: none;
    transition: 0.2s ease;
    &:hover {
      background: #0dfce3;
    }
  }
`;
