export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-[var(--text-muted)] font-mono">
        <p>&copy; {new Date().getFullYear()} Legacy Codex. Todos os direitos reservados.</p>
        <p className="mt-2 md:mt-0 italic opacity-70">A archive of digital relics</p>
      </div>
    </footer>
  );
}
