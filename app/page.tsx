export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto text-center">
      <h1 className="text-6xl font-bold mb-4">Legacy Codex</h1>
      <p className="text-xl text-[var(--text-muted)] mb-8">A archive of digital relics</p>
      <div className="flex gap-4 justify-center">
        <a href="/items" className="btn-primary">Explorar</a>
        <a href="/recovery" className="btn-secondary">Recovery Hub</a>
      </div>
    </div>
  );
}
