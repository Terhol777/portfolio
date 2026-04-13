'use client';

import { ThemeProvider } from 'next-themes';
import { LanguageProvider } from '../i18n/translations';
import Header from './Header';
import { useEffect, useState } from 'react';

export default function ClientProviders({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{children}</div>;
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <LanguageProvider>
        <div className="relative min-h-screen">
          <Header />
          <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
            {children}
          </main>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}