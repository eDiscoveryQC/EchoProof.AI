import styled from 'styled-components';

export default function Footer() {
  return (
    <Wrapper>
      <Links>
        <a href="/privacy">Privacy</a>
        <a href="/terms">Terms</a>
        <a href="/security">Security</a>
      </Links>
      <p>© {new Date().getFullYear()} EchoProof. All rights reserved.</p>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  padding: 2rem;
  text-align: center;
  font-size: 0.875rem;
  color: #64748b;
  background: #0a0f1c;
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 0.75rem;
  a {
    color: #94a3b8;
    font-size: 0.9rem;
    &:hover {
      color: #00ffe4;
    }
  }
`;
