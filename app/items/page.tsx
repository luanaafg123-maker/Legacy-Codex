import ItemCard from "@/components/ItemCard";

const mockItems = [
  { id: 1, title: "NVIDIA GeForce RTX 3080", category: "GPU", status: "working" as const, date: "15/05/2024" },
  { id: 2, title: "AMD Ryzen 7 5800X", category: "CPU", status: "repair" as const, date: "12/05/2024" },
  { id: 3, title: "Corsair Vengeance RGB 32GB", category: "RAM", status: "working" as const, date: "10/05/2024" },
  { id: 4, title: "Samsung 980 PRO 1TB", category: "SSD", status: "broken" as const, date: "08/05/2024" },
];

export default function ItemsPage() {
  return (
    <div>
      <h1 className="section-title">Acervo Digital</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {mockItems.map((item) => (
          <ItemCard key={item.id} {...item} href={`/item/${item.id}`} />
        ))}
      </div>
    </div>
  );
}
