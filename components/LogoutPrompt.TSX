import { useState } from 'react';
import styled from 'styled-components';
import { supabase } from '../lib/supabaseClient';
import { useRouter } from 'next/router';

const LogoutButton = styled.button`
  background: transparent;
  border: none;
  color: #f87171;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const Modal = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ModalButton = styled.button`
  padding: 0.5rem 1.25rem;
  margin: 0.5rem;
  font-weight: bold;
  border-radius: 6px;
  border: none;
  cursor: pointer;
`;

const ConfirmButton = styled(ModalButton)`
  background: #1e3a8a;
  color: white;
  &:hover {
    background: #3b82f6;
  }
`;

const CancelButton = styled(ModalButton)`
  background: #f3f4f6;
  color: #1e293b;
  &:hover {
    background: #e2e8f0;
  }
`;

export default function LogoutPrompt() {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/auth/login');
  };

  return (
    <>
      <LogoutButton onClick={() => setShowModal(true)}>Logout</LogoutButton>

      {showModal && (
        <ModalOverlay>
          <Modal>
            <h3 style={{ marginBottom: '1rem' }}>Are you sure you want to log out?</h3>
            <ConfirmButton onClick={handleLogout}>Yes, Log Out</ConfirmButton>
            <CancelButton onClick={() => setShowModal(false)}>Cancel</CancelButton>
          </Modal>
        </ModalOverlay>
      )}
    </>
  );
}
