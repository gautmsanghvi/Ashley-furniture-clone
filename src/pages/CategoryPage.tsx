import { Link } from 'react-router-dom';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';

interface CategoryPageProps {
  title: string;
  description: string;
  products: Array<{
    id: number;
    name: string;
    price: number;
    image: string;
    rating: number;
    reviews: number;
    inStock?: boolean;
  }>;
}

export default function CategoryPage({ title, description, products }: CategoryPageProps) {
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
          <aside className="w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <SlidersHorizontal className="w-5 h-5" />
                <h2 className="font-bold text-lg">Filters</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <button className="flex items-center justify-between w-full font-semibold mb-3">
                    <span>Price Range</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Under $500</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">$500 - $1000</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">$1000 - $2000</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">$2000+</span>
                    </label>
                  </div>
                </div>

                <div>
                  <button className="flex items-center justify-between w-full font-semibold mb-3">
                    <span>Color</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Black</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Brown</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Gray</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">White</span>
                    </label>
                  </div>
                </div>

                <div>
                  <button className="flex items-center justify-between w-full font-semibold mb-3">
                    <span>Material</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Fabric</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Leather</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Wood</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Metal</span>
                    </label>
                  </div>
                </div>

                <button className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition">
                  Apply Filters
                </button>
              </div>
            </div>
          </aside>

          <main className="flex-1">
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6 flex items-center justify-between">
              <p className="text-gray-600">{products.length} Products</p>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">Sort by:</span>
                <select className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-700">
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                  <option>Best Selling</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition group"
                >
                  <div className="aspect-square overflow-hidden relative bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300?text=Product';
                      }}
                    />
                    {product.inStock === false && (
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <span className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-lg">
                          Out of Stock
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < product.rating ? 'text-yellow-400' : 'text-gray-300'}>
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">({product.reviews})</span>
                    </div>
                    <p className="text-2xl font-bold text-orange-600">${product.price.toLocaleString()}</p>
                    <button
                      disabled={product.inStock === false}
                      className="w-full mt-4 bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                      {product.inStock === false ? 'Out of Stock' : 'Add to Cart'}
                    </button>
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
