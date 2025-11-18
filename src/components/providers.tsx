'use client';

import { useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import { useAppStore } from '@/store/app-store';

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  useEffect(() => {
    // Hydrate Zustand store on client side only
    useAppStore.persist.rehydrate();
  }, []);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}