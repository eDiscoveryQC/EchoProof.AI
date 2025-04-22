'use client';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (res?.ok) {
      router.push('/dashboard/evidence-hub');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div style={{
      background: '#0a0f1c',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      color: '#e2e8f0',
      fontFamily: 'Inter, sans-serif'
    }}>
      <div style={{
        background: '#121b2f',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        width: '100%',
        maxWidth: '420px'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Image src="/logo.svg" alt="EchoProof Logo" width={160} height={40} />
        </div>
        <h1 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Login to EchoProof</h1>
        {error && <p style={{ color: 'red', marginBottom: '1rem' }}>{error}</p>}
        <form onSubmit={handleLogin}>
          <label style={{ color: '#cbd5e1', display: 'block', marginBottom: '0.5rem' }}>
            Email:
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                marginTop: '0.25rem',
                marginBottom: '1rem',
                borderRadius: '8px',
                border: '1px solid #334155',
                background: '#1e293b',
                color: '#f1f5f9'
              }}
              required
            />
          </label>
          <label style={{ color: '#cbd5e1', display: 'block', marginBottom: '0.5rem' }}>
            Password:
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                marginTop: '0.25rem',
                marginBottom: '1.5rem',
                borderRadius: '8px',
                border: '1px solid #334155',
                background: '#1e293b',
                color: '#f1f5f9'
              }}
              required
            />
          </label>
          <button
            type="submit"
            style={{
              width: '100%',
              background: '#00ffe4',
              color: '#0f172a',
              padding: '0.75rem',
              fontWeight: 'bold',
              borderRadius: '10px',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}