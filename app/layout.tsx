import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SERAIQ — India\'s AI-Powered Salon Subscription',
  description: 'Book premium salons, track your hair journey, and get AI-powered style recommendations. One subscription. Unlimited style.',
  keywords: 'salon subscription, AI hair analysis, premium salon, SERAIQ, India salon booking',
  openGraph: {
    title: 'SERAIQ — India\'s AI-Powered Salon Subscription',
    description: 'One subscription. Unlimited style.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
