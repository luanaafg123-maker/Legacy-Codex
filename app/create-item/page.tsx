export default function CreateItemPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-light text-[var(--text-primary)] mb-8">Novo Registro</h1>
      <form className="bg-surface border border-border/40 rounded-xl p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Nome do Item" className="input-base" />
          <input type="text" placeholder="Categoria (ex: GPU, CPU)" className="input-base" />
        </div>
        <select className="input-base cursor-pointer">
          <option>Selecione o estado</option>
          <option value="working">Operacional</option>
          <option value="repair">Em Reparo</option>
          <option value="broken">Defeituoso</option>
        </select>
        <textarea placeholder="Descrição técnica e histórico..." rows={5} className="input-base resize-none"></textarea>
        <div className="border-2 border-dashed border-border/40 rounded-lg p-8 text-center">
          <p className="text-muted text-sm">Área de upload de imagens</p>
        </div>
        <button type="submit" className="btn-base w-full">Salvar no Acervo</button>
      </form>
    </div>
  );
}
