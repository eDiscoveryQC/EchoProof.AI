'use client';
import { useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Image from 'next/image';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #0a0f1c;
    font-family: 'Inter', sans-serif;
    color: #e2e8f0;
    scroll-behavior: smooth;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  .fade-in.appear {
    opacity: 1;
    transform: translateY(0);
  }
`;

export default function LandingPage() {
  useEffect(() => {
    const faders = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('appear');
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.2 });

    faders.forEach(el => observer.observe(el));
  }, []);

  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <Header>
          <Logo>
            <Image src="/logo.svg" alt="EchoProof Logo" width={140} height={40} />
          </Logo>
          <Nav>
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#how">How It Works</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <LoginBtn href="/auth/login">Login</LoginBtn>
          </Nav>
        </Header>

        <Hero>
          <HeroContent>
            <h1>AI-Powered Evidence Review</h1>
            <p>
              Upload bodycam, jail calls, and surveillance. EchoProof transcribes, summarizes,
              and flags what matters — instantly.
            </p>
            <HeroCTA>
              <PrimaryBtn href="/auth/register">Get Started</PrimaryBtn>
              <SecondaryBtn href="#how">See How It Works</SecondaryBtn>
            </HeroCTA>
          </HeroContent>
        </Hero>

        <TrustedBy className="fade-in">
          <p>Trusted by Legal Teams Nationwide</p>
          <LogoRow>
            <img src="/logos/firm1.svg" alt="Firm 1" />
            <img src="/logos/firm2.svg" alt="Firm 2" />
            <img src="/logos/firm3.svg" alt="Firm 3" />
          </LogoRow>
        </TrustedBy>

        <Features id="features">
          <h2 className="fade-in">Built-in AI Capabilities</h2>
          <CardGrid>
            {features.map((f, i) => (
              <FeatureCard key={i} className="fade-in">
                <Image src={f.icon} alt={f.title} width={48} height={48} />
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </FeatureCard>
            ))}
          </CardGrid>
        </Features>

        <HowSection id="how">
          <h2 className="fade-in">How It Works</h2>
          <StepGrid>
            {steps.map((step, i) => (
              <StepBlock key={i} className="fade-in">
                <StepNumber>{i + 1}</StepNumber>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </StepBlock>
            ))}
          </StepGrid>
        </HowSection>

        <CTASection>
          <h2>Ready to modernize your case review?</h2>
          <p>EchoProof is courtroom-ready and already piloting with major legal teams.</p>
          <PrimaryBtn href="/contact">Request Access</PrimaryBtn>
        </CTASection>

        <Footer>
          <FooterLinks>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="/security">Security</a>
          </FooterLinks>
          <p>© 2025 EchoProof. All rights reserved.</p>
        </Footer>

        <FloatingCTA href="/auth/register">Request Access</FloatingCTA>
      </PageWrapper>
    </>
  );
}

// ========================
// MARKETING PAGE DATA
// ========================
const features = [
  {
    icon: '/icons/transcript.svg',
    title: 'Auto Transcription',
    desc: 'Bodycam, surveillance, jail calls — accurately transcribed at scale.',
  },
  {
    icon: '/icons/summary.svg',
    title: 'Smart Summaries',
    desc: 'Summarize dozens of hours into key quotes and moments in seconds.',
  },
  {
    icon: '/icons/entity.svg',
    title: 'Entity Extraction',
    desc: 'Detect names, places, and topics across media files.',
  },
  {
    icon: '/icons/export.svg',
    title: 'Courtroom Exports',
    desc: 'Bundle clips, transcripts, and insights into beautiful PDFs.',
  },
];

const steps = [
  {
    title: 'Upload Media',
    desc: 'Drop in your files — bodycam, jail calls, or surveillance. EchoProof secures them automatically and logs the chain of custody.',
  },
  {
    title: 'AI Analysis',
    desc: (
      <>
        EchoProof uses credits to transcribe, summarize, and detect patterns. You only spend credits when AI is working for you.
        <br />
        <a href="/pricing" style={{ color: '#00ffe4', textDecoration: 'underline' }}>
          Learn more about credits →
        </a>
      </>
    ),
  },
  {
    title: 'Review & Export',
    desc: 'Review key moments, tag evidence, and export transcripts or bundles — all tracked with transparent credit usage.',
  },
];

// ========================
// STYLED COMPONENTS
// ========================
const PageWrapper = styled.div``;

const Header = styled.header`
  background: #0a0f1c;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid #1e293b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 50;
`;

const Logo = styled.div``;

const Nav = styled.nav`
  display: flex;
  gap: 1.75rem;
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

const Hero = styled.section`
  text-align: center;
  padding: 7rem 2rem 5rem;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  h1 {
    font-size: 3.25rem;
    color: #00ffe4;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.25rem;
    color: #cbd5e1;
    margin-bottom: 2rem;
  }
`;

const HeroCTA = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.25rem;
`;

const PrimaryBtn = styled.a`
  background: #00ffe4;
  color: #0f172a;
  padding: 0.85rem 1.75rem;
  border-radius: 8px;
  font-weight: 600;
`;

const SecondaryBtn = styled.a`
  border: 1px solid #00ffe4;
  color: #00ffe4;
  padding: 0.85rem 1.75rem;
  border-radius: 8px;
  font-weight: 600;
`;

const TrustedBy = styled.section`
  text-align: center;
  padding: 4rem 2rem 2rem;
  font-size: 0.95rem;
  color: #94a3b8;
`;

const LogoRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  margin-top: 1rem;
  img {
    height: 32px;
    opacity: 0.7;
  }
`;

const Features = styled.section`
  padding: 5rem 2rem 4rem;
  text-align: center;
  h2 {
    font-size: 2.2rem;
    color: #00ffe4;
    margin-bottom: 3rem;
  }
`;

const CardGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2.25rem;
`;

const FeatureCard = styled.div`
  background: #1e293b;
  padding: 2rem;
  border-radius: 12px;
  width: 280px;
  text-align: center;
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: 0 0 12px rgba(0, 255, 228, 0.12);
  }
  h3 {
    margin-top: 1rem;
    font-size: 1.2rem;
    color: #e2e8f0;
  }
  p {
    margin-top: 0.5rem;
    color: #94a3b8;
  }
`;

const HowSection = styled.section`
  background: #121b2f;
  padding: 5rem 2rem;
  text-align: center;
  h2 {
    font-size: 2rem;
    color: #00ffe4;
    margin-bottom: 2.5rem;
  }
`;

const StepGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const StepBlock = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  text-align: left;
`;

const StepNumber = styled.div`
  background: #00ffe4;
  color: #0a0f1c;
  font-weight: bold;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CTASection = styled.section`
  background: #0f172a;
  padding: 5rem 2rem;
  text-align: center;
  h2 {
    font-size: 1.85rem;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 2rem;
    color: #94a3b8;
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 2.5rem;
  color: #64748b;
  background: #0a0f1c;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 0.75rem;
`;

const FloatingCTA = styled.a`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: #00ffe4;
  color: #0f172a;
  padding: 0.75rem 1.25rem;
  border-radius: 50px;
  font-weight: 600;
  box-shadow: 0 4px 16px rgba(0, 255, 228, 0.2);
  z-index: 100;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.05);
  }
`;
