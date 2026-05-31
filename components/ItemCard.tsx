interface ItemCardProps {
  title: string;
  category: string;
  status: 'working' | 'repair' | 'broken';
}

const colors = {
  working: 'text-[var(--success)]',
  repair: 'text-[var(--warning)]',
  broken: 'text-[var(--error)]',
};

export default function ItemCard({ title, category, status }: ItemCardProps) {
  return (
    <div className="card-base">
      <span className={`badge ${colors[status]}`}>{status}</span>
      <h3 className="text-lg font-semibold mt-2 text-[var(--text-primary)]">{title}</h3>
      <p className="text-sm text-[var(--text-muted)]">{category}</p>
    </div>
  );
}
