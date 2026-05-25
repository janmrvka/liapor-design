import './globals.css';
import { EditModeProvider } from '@/contexts/EditModeContext';
import EditModeIndicator from '@/components/edit/EditModeIndicator';

export const metadata = {
  title: 'KAMA – návrh kampaní a strategické směry',
  description: 'Prezentace digitální agentury (ant)',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  viewport: {
    width: 1920,
    initialScale: 1,
    minimumScale: 0.1,
    maximumScale: 3,
    userScalable: true,
  },
  other: {
    // Performance hints
    'X-UA-Compatible': 'IE=edge',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="cs">
      <head>
        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="https://use.typekit.net" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />

        {/* Adobe Fonts - Aktiv Grotesk Ex */}
        <link
          rel="preload"
          href="https://use.typekit.net/egi7nqf.css"
          as="style"
        />
        <link rel="stylesheet" href="https://use.typekit.net/egi7nqf.css" />
      </head>
      <body className="font-sans antialiased">
        <EditModeProvider>
          {children}
          <EditModeIndicator />
        </EditModeProvider>
      </body>
    </html>
  );
}
