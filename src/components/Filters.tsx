interface FiltersProps {
  filters: any;
  setFilters: React.Dispatch<React.SetStateAction<any>>;
}

export default function Filters({ filters, setFilters }: FiltersProps) {
  const toggle = (key: string, value: string) => {
    setFilters((prev: any) => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter((v: string) => v !== value)
        : [...prev[key], value],
    }));
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-bold mb-4">Filters</h3>

      <div className="mb-4">
        <p className="font-semibold">Price</p>
        {["under-500", "500-1000", "1000-2000", "2000+"].map((p) => (
          <label key={p} className="block">
            <input
              type="checkbox"
              checked={filters.priceRange.includes(p)}
              onChange={() => toggle("priceRange", p)}
            />
            <span className="ml-2">{p}</span>
          </label>
        ))}
      </div>

      <div className="mb-4">
        <p className="font-semibold">Color</p>
        {["Gray",
  "Navy",
  "Beige",
  "Charcoal"].map((c) => (
          <label key={c} className="block">
            <input
              type="checkbox"
              checked={filters.colors.includes(c)}
              onChange={() => toggle("colors", c)}
            />
            <span className="ml-2">{c}</span>
          </label>
        ))}
      </div>

      <div>
        <p className="font-semibold">Material</p>
        {["Fabric", "Leather", "Wood", "Metal"].map((m) => (
          <label key={m} className="block">
            <input
              type="checkbox"
              checked={filters.materials.includes(m)}
              onChange={() => toggle("materials", m)}
            />
            <span className="ml-2">{m}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
