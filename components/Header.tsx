import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border-subtle)] bg-graphite/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-light tracking-wide text-[var(--text-primary)] hover:text-copper transition-colors">
          Legacy Codex
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-muted font-mono">
          <Link href="/items" className="hover:text-[var(--text-primary)] transition-colors">Acervo</Link>
          <Link href="/recovery" className="hover:text-[var(--text-primary)] transition-colors">Recovery Hub</Link>
          <Link href="/profile" className="hover:text-[var(--text-primary)] transition-colors">Perfil</Link>
          <Link href="/login" className="hover:text-copper transition-colors">Entrar</Link>
        </nav>
      </div>
    </header>
  );
}
