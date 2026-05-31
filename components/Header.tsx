'use client';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 w-full border-b border-[var(--border)] bg-graphite/90 backdrop-blur z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-[var(--copper)]">
          Legacy Codex
        </Link>
        <nav className="hidden md:flex gap-8 text-sm">
          <Link href="/items" className="hover:text-[var(--copper)] transition">Acervo</Link>
          <Link href="/recovery" className="hover:text-[var(--copper)] transition">Recovery</Link>
          <Link href="/profile" className="hover:text-[var(--copper)] transition">Perfil</Link>
        </nav>
      </div>
    </header>
  );
}
