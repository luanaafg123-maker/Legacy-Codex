interface ItemCardProps {
  title: string;
  category: string;
  status: "working" | "repair" | "broken";
  date?: string;
  href?: string;
}

const statusStyles = {
  working: "text-[var(--success)] border-[var(--success)]/30 bg-[var(--success)]/10",
  repair: "text-[var(--warning)] border-[var(--warning)]/30 bg-[var(--warning)]/10",
  broken: "text-[var(--error)] border-[var(--error)]/30 bg-[var(--error)]/10",
};

const statusLabels = {
  working: "Operacional",
  repair: "Em Reparo",
  broken: "Defeituoso",
};

export default function ItemCard({ title, category, status, date = "00/00/0000", href = "#" }: ItemCardProps) {
  return (
    <a href={href} className="card-base group flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <span className={`badge ${statusStyles[status]}`}>
          {statusLabels[status]}
        </span>
        <span className="text-[10px] text-[var(--text-muted)] font-mono">{date}</span>
      </div>
      
      <h3 className="text-lg font-medium text-[var(--text-primary)] mb-2 line-clamp-1 group-hover:text-copper transition-colors">
        {title}
      </h3>
      <p className="text-sm text-[var(--text-muted)] font-mono mb-4">{category}</p>
      
      <div className="mt-auto pt-4 border-t border-[var(--border)]/40 flex justify-end">
        <span className="text-xs text-[var(--text-muted)] group-hover:text-copper transition-colors">Ver detalhes →</span>
      </div>
    </a>
  );
}