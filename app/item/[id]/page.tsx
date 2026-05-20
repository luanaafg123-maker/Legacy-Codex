export default function ItemDetailPage({ params }: { params: Promise<{ id: string }> }) {
  return (
    <div className="max-w-4xl mx-auto">
      <a href="/items" className="text-sm text-[var(--text-muted)] hover:text-copper mb-6 inline-block font-mono">← Voltar</a>
      
      <div className="flex flex-col md:flex-row gap-8 bg-surface border border-[var(--border)]/40 rounded-xl p-8">
        <div className="flex-1">
          <h1 className="text-3xl font-light text-[var(--text-primary)] mb-2">Item #{params.id}</h1>
          <p className="text-[var(--text-muted)] font-mono text-sm mb-6">Categoria: Hardware Vintage • Status: Operacional</p>
          <div className="space-y-4 text-[var(--text-muted)]/80 leading-relaxed">
            <p>Descrição detalhada do item será carregada dinamicamente do banco de dados.</p>
            <p>Especificações técnicas, histórico de manutenção e imagens serão exibidos nesta seção.</p>
          </div>
        </div>
        <div className="w-full md:w-64 bg-graphite border border-[var(--border)]/40 rounded-lg flex items-center justify-center min-h-[200px]">
          <span className="text-[var(--text-muted)] text-sm">Galeria de Imagens</span>
        </div>
      </div>
      
      <div className="mt-8 p-6 bg-surface/50 border border-[var(--border)]/40 rounded-xl text-center">
        <p className="text-[var(--text-muted)] text-sm">Sistema de raridade comunitária e ações do usuário serão implementados na próxima fase.</p>
      </div>
    </div>
  );
}
