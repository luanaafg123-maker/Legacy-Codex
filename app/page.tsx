export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[75vh] text-center">
      <h1 className="text-5xl md:text-7xl font-light tracking-tight text-[var(--text-primary)] mb-6">
        Legacy Codex
      </h1>
      <p className="text-muted text-lg md:text-xl font-light tracking-wide max-w-xl">
        A archive of digital relics
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <a href="/items" className="btn-base">Explorar Acervo</a>
        <a href="/create-item" className="btn-base bg-transparent border border-copper text-copper hover:bg-copper/10">
          Adicionar Item
        </a>
      </div>
    </section>
  );
}
