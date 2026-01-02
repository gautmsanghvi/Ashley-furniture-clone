import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronDown, SlidersHorizontal } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  inStock?: boolean;
  color?: string;
  material?: string;
}

interface CategoryPageProps {
  title: string;
  description: string;
  products: Product[];
}

export default function CategoryPage({
  title,
  description,
  products,
}: CategoryPageProps) {
  const [filters, setFilters] = useState({
    priceRange: [] as string[],
    colors: [] as string[],
    materials: [] as string[],
  });

  const toggleFilter = (key: keyof typeof filters, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter((v) => v !== value)
        : [...prev[key], value],
    }));
  };

  const filteredProducts = products.filter((product) => {
    // PRICE
    if (filters.priceRange.length) {
      const matchPrice = filters.priceRange.some((range) => {
        if (range === "under-500") return product.price < 500;
        if (range === "500-1000")
          return product.price >= 500 && product.price <= 1000;
        if (range === "1000-2000")
          return product.price >= 1000 && product.price <= 2000;
        if (range === "2000+") return product.price > 2000;
        return false;
      });
      if (!matchPrice) return false;
    }

    // COLOR
    if (
      filters.colors.length &&
      (!product.color || !filters.colors.includes(product.color))
    ) {
      return false;
    }

    // MATERIAL
    if (
      filters.materials.length &&
      (!product.material ||
        !filters.materials.includes(product.material))
    ) {
      return false;
    }

    return true;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-2">{title}</h1>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* FILTER SIDEBAR */}
          <aside className="w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <SlidersHorizontal className="w-5 h-5" />
                <h2 className="font-bold text-lg">Filters</h2>
              </div>

              <div className="space-y-6">
                {/* PRICE */}
                <div>
                  <p className="font-semibold mb-3">Price Range</p>
                  {[
                    { label: "Under $500", value: "under-500" },
                    { label: "$500 - $1000", value: "500-1000" },
                    { label: "$1000 - $2000", value: "1000-2000" },
                    { label: "$2000+", value: "2000+" },
                  ].map((p) => (
                    <label key={p.value} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={filters.priceRange.includes(p.value)}
                        onChange={() =>
                          toggleFilter("priceRange", p.value)
                        }
                      />
                      <span className="text-sm">{p.label}</span>
                    </label>
                  ))}
                </div>

                {/* COLOR */}
                <div>
                  <p className="font-semibold mb-3">Color</p>
                  {["Gray",
  "Navy",
  "Beige",
  "Charcoal"].map((c) => (
                    <label key={c} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={filters.colors.includes(c)}
                        onChange={() => toggleFilter("colors", c)}
                      />
                      <span className="text-sm">{c}</span>
                    </label>
                  ))}
                </div>

                {/* MATERIAL */}
                <div>
                  <p className="font-semibold mb-3">Material</p>
                  {["Fabric", "Leather", "Wood", "Metal"].map((m) => (
                    <label key={m} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={filters.materials.includes(m)}
                        onChange={() =>
                          toggleFilter("materials", m)
                        }
                      />
                      <span className="text-sm">{m}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* PRODUCTS */}
          <main className="flex-1">
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <p className="text-gray-600">
                {filteredProducts.length} Products
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
                >
                  <div className="aspect-square bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">
                      {product.name}
                    </h3>
                    <p className="text-2xl font-bold text-orange-600">
                      ${product.price.toLocaleString()}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
