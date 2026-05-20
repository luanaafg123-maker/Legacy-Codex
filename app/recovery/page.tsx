export default function RecoveryPage() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-light text-[var(--text-primary)]">Recovery Hub</h1>
          <p className="text-[var(--text-muted)] text-sm mt-1 font-mono">Reposição, troca e peças técnicas</p>
        </div>
        <a href="/create-item" className="btn-secondary">+ Novo Anúncio</a>
      </div>

      <div className="flex gap-4 mb-8">
        <input type="text" placeholder="Buscar por modelo, marca ou chip..." className="input-base flex-1" />
        <select className="input-base w-48 cursor-pointer">
          <option>Todas Categorias</option>
          <option>Placas de Vídeo</option>
          <option>Processadores</option>
          <option>Memórias</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-60 pointer-events-none select-none">
        {[1, 2, 3].map((i) => (
          <div key={i} className="card-base h-48 flex items-center justify-center bg-surface/30">
            <span className="text-[var(--text-muted)] font-mono text-sm">Listagem {i}</span>
          </div>
        ))}
      </div>
      <p className="text-center text-[var(--text-muted)] text-xs mt-8 italic">
        Marketplace em desenvolvimento. Dados serão populados via Supabase.
      </p>
    </div>
  );
}
