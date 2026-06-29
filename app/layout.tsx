import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ProofChain',
  description: 'AI-powered shipment evidence, dispute prevention, and supply chain analytics.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
