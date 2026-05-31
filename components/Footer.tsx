export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-6 text-center text-sm text-[var(--text-muted)]">
      <p>&copy; {new Date().getFullYear()} Legacy Codex - A archive of digital relics</p>
    </footer>
  );
}
