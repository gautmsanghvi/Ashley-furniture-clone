import { Link } from 'react-router-dom';
import { ArrowRight, Truck, CreditCard, Clock, Award } from 'lucide-react';

export default function HomePage() {
  const categories = [
    { name: 'Living Room', image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800', link: '/living-room' },
    { name: 'Bedroom', image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800', link: '/bedroom' },
    { name: 'Dining Room', image: 'https://media.designcafe.com/wp-content/uploads/2022/07/05175846/scandinavian-dining-table-design-for-your-home.jpg', link: '/dining' },
    { name: 'Mattresses', image: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800', link: '/mattresses' },
    { name: 'Outdoor', image: 'https://media.istockphoto.com/id/2175972607/photo/modern-luxury-home-with-geometric-driveway-and-sunset-sky.jpg?s=612x612&w=0&k=20&c=0pvJ_frDStQGywjOptq9XmyEQgVIxfH3Yg7MbYIfIjI=', link: '/outdoor' },
    { name: 'Baby & Kids', image: 'https://images.pexels.com/photos/1058770/pexels-photo-1058770.jpeg?auto=compress&cs=tinysrgb&w=800', link: '/kids' },
    { name: 'Home Office', image: 'https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=800', link: '/home-office' },
    { name: 'Home Decor', image: 'https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg?auto=compress&cs=tinysrgb&w=800', link: '/decor' },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'Modern Sectional Sofa',
      price: 1299,
      image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Living Room'
    },
    {
      id: 2,
      name: 'Queen Panel Bed',
      price: 899,
      image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Bedroom'
    },
    {
      id: 3,
      name: 'Dining Table Set',
      price: 1599,
      image: 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Dining Room'
    },
    {
      id: 4,
      name: 'Memory Foam Mattress',
      price: 799,
      image: 'https://images.pexels.com/photos/6489082/pexels-photo-6489082.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Mattresses'
    },
    {
      id: 5,
      name: 'Accent Chair',
      price: 449,
      image: 'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Living Room'
    },
    {
      id: 6,
      name: 'Coffee Table',
      price: 349,
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Living Room'
    },
    {
      id: 7,
      name: 'Dresser with Mirror',
      price: 699,
      image: 'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Bedroom'
    },
    {
      id: 8,
      name: 'Outdoor Patio Set',
      price: 1099,
      image: 'https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Outdoor'
    },
  ];

  return (
    <div>
      <section className="relative h-[600px] bg-gradient-to-r from-gray-900 to-gray-700">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Hero"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-6xl font-bold mb-6">Transform Your Home</h1>
            <p className="text-xl mb-8">Discover quality furniture and decor for every room. Free shipping on orders over $999.</p>
            <Link to="/deals" className="inline-flex items-center gap-2 bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-800 transition">
              Shop Deals <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-4">
              <Truck className="w-12 h-12 text-red-700" />
              <div>
                <h3 className="font-bold">Free Shipping</h3>
                <p className="text-sm text-gray-600">On orders $999+</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <CreditCard className="w-12 h-12 text-red-700" />
              <div>
                <h3 className="font-bold">Easy Financing</h3>
                <p className="text-sm text-gray-600">0% APR Available</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Clock className="w-12 h-12 text-red-700" />
              <div>
                <h3 className="font-bold">Fast Delivery</h3>
                <p className="text-sm text-gray-600">In-stock items</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Award className="w-12 h-12 text-red-700" />
              <div>
                <h3 className="font-bold">Quality Guaranteed</h3>
                <p className="text-sm text-gray-600">Trusted since 1945</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Shop by Room</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={category.link}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition"
              >
                <div className="aspect-square">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white text-2xl font-bold p-6">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold">Featured Products</h2>
            <Link to="/deals" className="text-red-700 font-semibold hover:underline flex items-center gap-2">
              View All <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition group"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-500 mb-1">{product.category}</p>
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <p className="text-2xl font-bold text-red-700">${product.price.toLocaleString()}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Special Financing Available</h2>
          <p className="text-xl mb-8">Get 0% APR for 60 months on purchases of $3,999 or more. Subject to credit approval.</p>
          <button className="bg-white text-red-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
}
