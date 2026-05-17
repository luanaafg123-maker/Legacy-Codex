interface ItemCardProps {
  title: string;
  category: string;
  status: "working" | "repair" | "broken";
  date?: string;
}

const statusStyles = {
  working: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
  repair: "text-amber-400 border-amber-400/30 bg-amber-400/10",
  broken: "text-red-400 border-red-400/30 bg-red-400/10",
};

const statusLabels = {
  working: "Operacional",
  repair: "Em Reparo",
  broken: "Defeituoso",
};

export default function ItemCard({ title, category, status, date }: ItemCardProps) {
  return (
    <div className="card-hover group flex flex-col h-full bg-graphite">
      <div className="flex justify-between items-start mb-4">
        <span className={`badge ${statusStyles[status]}`}>
          {statusLabels[status]}
        </span>
        <span className="text-[10px] text-muted font-mono">{date || "00/00/0000"}</span>
      </div>

      <h3 className="text-lg font-medium text-[var(--text-primary)] mb-2 line-clamp-1 group-hover:text-copper transition-colors">
        {title}
      </h3>
      <p className="text-sm text-muted font-mono mb-4">{category}</p>

      <div className="mt-auto pt-4 border-t border-border/40 flex justify-end">
        <span className="text-xs text-muted group-hover:text-copper transition-colors">Ver detalhes →</span>
      </div>
    </div>
  );
}
