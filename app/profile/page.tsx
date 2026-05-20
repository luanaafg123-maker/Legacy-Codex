export default function ProfilePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-surface border border-[var(--border)]/40 rounded-xl p-6 flex flex-col md:flex-row items-center md:items-start gap-6 mb-10">
        <div className="w-24 h-24 rounded-full bg-graphite border-2 border-copper/40 flex items-center justify-center text-3xl font-mono text-copper">
          LC
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-light text-[var(--text-primary)]">Colecionador</h1>
          <p className="text-[var(--text-muted)] text-sm mt-1 max-w-md">
            Bio e informações do perfil serão exibidas aqui após integração com banco de dados.
          </p>
        </div>
      </div>

      <h2 className="section-title">Minha Coleção</h2>
      <p className="text-[var(--text-muted)] text-sm italic">Nenhum item adicionado à coleção ainda.</p>
    </div>
  );
}
