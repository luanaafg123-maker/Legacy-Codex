import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Legacy Codex',
  description: 'A archive of digital relics',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-graphite text-[var(--text-primary)] antialiased`}>
        <Header />
        <main className="pt-20 pb-12 px-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
