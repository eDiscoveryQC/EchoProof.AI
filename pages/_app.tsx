// pages/_app.tsx
import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import '../styles/globals.css';

const IS_DEV_MODE = true; // ✅ Toggle this OFF before going live

export default function MyApp({ Component, pageProps }: AppProps) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());
  const router = useRouter();

  // 🚧 Safe dev-only login redirect (prevents hydration errors)
  useEffect(() => {
    if (!router.isReady) return;

    if (IS_DEV_MODE && router.pathname === '/auth/login') {
      router.push('/dashboard/onboarding');
    }
  }, [router.isReady, router]);

  return (
    <SessionContextProvider supabaseClient={supabaseClient} initialSession={pageProps.initialSession}>
      <Component {...pageProps} />
    </SessionContextProvider>
  );
}
