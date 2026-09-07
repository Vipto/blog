import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Vipto — Building technology that makes everyday product discovery simpler',
    template: '%s | Vipto'
  },
  description: 'Vipto is an unincorporated technology product initiative building technology that makes everyday product discovery simpler. Search online, confirm availability, buy offline.',
  keywords: [
    'Vipto',
    'product discovery',
    'hyperlocal commerce',
    'offline shopping',
    'store availability',
    'retail technology',
    'engineering journal',
    'technology initiative'
  ],
  authors: [{ name: 'Vipto Initiative', url: 'https://github.com/Vipto' }],
  creator: 'Vipto Initiative',
  metadataBase: new URL('https://vipto.vercel.app'),
  icons: {
    icon: '/vipto_logo.png',
    shortcut: '/vipto_logo.png',
    apple: '/vipto_logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vipto.vercel.app',
    siteName: 'Vipto',
    title: 'Vipto — Building technology that makes everyday product discovery simpler',
    description: 'An unincorporated technology product initiative bridging online search and physical in-store product availability.',
    images: [
      {
        url: '/vipto_logo.png',
        width: 512,
        height: 512,
        alt: 'Vipto Logo'
      }
    ]
  },
  twitter: {
    card: 'summary',
    title: 'Vipto — Everyday Product Discovery Made Simpler',
    description: 'Search online. Confirm availability. Buy offline.',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export const viewport: Viewport = {
  themeColor: '#f8fafc',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <Navbar />
        <main style={{ minHeight: 'calc(100vh - 72px - 340px)' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
