// components/Footer.tsx
import styled from 'styled-components';
import Link from 'next/link';

const FooterWrapper = styled.footer`
  background-color: #111;
  color: #aaa;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.875rem;
  border-top: 1px solid #222;
`;

const FooterTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 1rem;
`;

const FooterBrand = styled.div`
  font-weight: bold;
  font-size: 1rem;
  color: #fff;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const FooterBottom = styled.div`
  border-top: 1px solid #222;
  width: 100%;
  max-width: 1200px;
  padding-top: 1rem;
  text-align: center;
  font-size: 0.75rem;
  color: #666;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterTop>
        <FooterBrand>EchoProof</FooterBrand>
        <FooterLinks>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/security">Security</Link>
          <Link href="https://docs.echoproof.ai" target="_blank">Docs</Link>
        </FooterLinks>
      </FooterTop>
      <FooterBottom>
        © {new Date().getFullYear()} EchoProof Inc. All rights reserved. Built with ❤️ using GPT-4 & Whisper.
      </FooterBottom>
    </FooterWrapper>
  );
}
