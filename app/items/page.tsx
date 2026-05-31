import ItemCard from '@/components/ItemCard';

const items = [
  { id: 1, title: 'NVIDIA GeForce RTX 3080', category: 'GPU', status: 'working' as const },
  { id: 2, title: 'AMD Ryzen 7 5800X', category: 'CPU', status: 'repair' as const },
  { id: 3, title: 'Corsair RAM 32GB', category: 'RAM', status: 'working' as const },
  { id: 4, title: 'SSD Samsung 1TB', category: 'Storage', status: 'broken' as const },
];

export default function ItemsPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Acervo Digital</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(item => (
          <ItemCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
