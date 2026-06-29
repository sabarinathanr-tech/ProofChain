import type { Metadata } from 'next';
import { ToastProvider } from '@/components/ui/ToastProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'ProofChain',
  description: 'AI-powered shipment evidence, dispute prevention, and supply chain analytics.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><ToastProvider>{children}</ToastProvider></body></html>;
}
