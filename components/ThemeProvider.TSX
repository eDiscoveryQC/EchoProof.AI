import { ReactNode, useEffect, useState } from 'react';
import { ThemeProvider as StyledThemeProvider, createGlobalStyle } from 'styled-components';

const lightTheme = {
  background: '#f8fafc',
  text: '#1e293b',
  card: '#ffffff',
  accent: '#1e3a8a',
  shadow: 'rgba(0, 0, 0, 0.05)',
};

const darkTheme = {
  background: '#0f172a',
  text: '#f8fafc',
  card: '#1e293b',
  accent: '#3b82f6',
  shadow: 'rgba(255, 255, 255, 0.05)',
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: background 0.3s ease, color 0.3s ease;
  }
`;

export function useDarkMode() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') setTheme('dark');
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggle = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggle };
}

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const { theme } = useDarkMode();

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === 'dark' ? darkTheme : lightTheme;

  return (
    <StyledThemeProvider theme={currentTheme}>
      <GlobalStyle />
      {mounted && children}
    </StyledThemeProvider>
  );
}
