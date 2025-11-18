import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import './globals.css';

export const metadata: Metadata = {
  title: 'TSI Directory - European Railway Interoperability Platform',
  description: 'Transform, validate, and manage railway transport data with our comprehensive TSI interoperability platform.',
  keywords: [
    'TSI',
    'railway',
    'EDIFACT',
    'GTFS',
    'transport data',
    'conversion',
    'validation',
    'ERA standards',
    'interoperability'
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-railway">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}