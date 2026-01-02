import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Truck, CreditCard, Shield, Heart, Share2, ChevronRight, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductPage() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedPackage, setSelectedPackage] = useState(0);
  const [selectedColor, setSelectedColor] = useState('Gray');
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const packages = [
    {
      name: 'Sofa Only',
      price: 1299,
      originalPrice: 1799,
      description: 'Just the sectional sofa',
      includes: ['Modern Sectional Sofa', 'Free Delivery', '1-Year Warranty']
    },
    {
      name: 'Living Room Essentials',
      price: 1799,
      originalPrice: 2499,
      description: 'Sofa + Coffee Table',
      includes: ['Modern Sectional Sofa', 'Glass Coffee Table', 'Free Delivery', '1-Year Warranty', 'Assembly Service'],
      popular: true
    },
    {
      name: 'Complete Living Room',
      price: 2399,
      originalPrice: 3299,
      description: 'Everything you need',
      includes: ['Modern Sectional Sofa', 'Glass Coffee Table', 'Accent Chair', 'Floor Lamp', 'Area Rug', 'Free Delivery', '2-Year Warranty', 'Premium Assembly Service', 'Design Consultation']
    }
  ];

  const product = {
    id: Number(id),
    name: 'Modern Sectional Sofa',
    price: packages[selectedPackage].price,
    originalPrice: packages[selectedPackage].originalPrice,
    rating: 4.5,
    reviews: 342,
    description: 'Experience ultimate comfort with our modern sectional sofa. Featuring premium fabric upholstery, deep seating, and contemporary design, this sofa is perfect for entertaining or relaxing. The modular design allows for flexible arrangement to suit your space.',
    features: [
      'Premium fabric upholstery',
      'Sturdy hardwood frame construction',
      'High-density foam cushions',
      'Removable cushion covers',
      'Modular sectional design',
      'Weight capacity: 800 lbs',
    ],
    dimensions: {
      width: '110"',
      depth: '85"',
      height: '35"',
      seatHeight: '18"',
      seatDepth: '24"',
    },
    images: [
      'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    colors: ['Gray', 'Navy', 'Beige', 'Charcoal'],
    inStock: true,
  };

  const relatedProducts = [
    {
      id: 101,
      name: 'Coffee Table',
      price: 349,
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 102,
      name: 'Accent Chair',
      price: 449,
      image: 'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 103,
      name: 'Floor Lamp',
      price: 179,
      image: 'https://images.pexels.com/photos/1125130/pexels-photo-1125130.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 104,
      name: 'Area Rug',
      price: 299,
      image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const handleAddToCart = () => {
    addToCart({
      id: Number(id),
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity,
      packageType: packages[selectedPackage].name,
      color: selectedColor,
    });
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-orange-600">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/living-room" className="hover:text-orange-600">Living Room</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-gray-100">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/500?text=Product+Image';
                }}
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 bg-gray-100 ${
                    selectedImage === index ? 'border-orange-600' : 'border-gray-200'
                  }`}
                >
                  <img
                    src={image}
                    alt={`View ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/100?text=Img';
                    }}
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">({product.reviews} reviews)</span>
              </div>
            </div>

            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-4xl font-bold text-orange-600">${product.price.toLocaleString()}</span>
              <span className="text-2xl text-gray-400 line-through">${product.originalPrice.toLocaleString()}</span>
              <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">
                Save ${(product.originalPrice - product.price).toLocaleString()}
              </span>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>

            <div className="space-y-6 mb-8">
              <div>
                <label className="block font-bold text-lg mb-4">Choose Your Package</label>
                <div className="space-y-3">
                  {packages.map((pkg, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedPackage(index)}
                      className={`w-full text-left p-4 rounded-lg border-2 transition relative ${
                        selectedPackage === index
                          ? 'border-orange-600 bg-orange-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {pkg.popular && (
                        <span className="absolute -top-3 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                          MOST POPULAR
                        </span>
                      )}
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                              selectedPackage === index ? 'border-orange-600 bg-orange-600' : 'border-gray-300'
                            }`}>
                              {selectedPackage === index && <Check className="w-3 h-3 text-white" />}
                            </div>
                            <h3 className="font-bold text-lg">{pkg.name}</h3>
                          </div>
                          <p className="text-sm text-gray-600 ml-8 mb-2">{pkg.description}</p>
                          <ul className="ml-8 space-y-1">
                            {pkg.includes.map((item, i) => (
                              <li key={i} className="text-sm text-gray-700 flex items-center gap-2">
                                <Check className="w-3 h-3 text-orange-600" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-orange-600">${pkg.price.toLocaleString()}</div>
                          <div className="text-sm text-gray-400 line-through">${pkg.originalPrice.toLocaleString()}</div>
                          <div className="text-xs text-green-600 font-semibold mt-1">
                            Save ${(pkg.originalPrice - pkg.price).toLocaleString()}
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-2">Color</label>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 border-2 rounded-lg transition ${
                        selectedColor === color
                          ? 'border-orange-600 bg-orange-50'
                          : 'border-gray-300 hover:border-orange-600'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-2">Quantity</label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="w-12 text-center font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mb-8">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-orange-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition"
              >
                {addedToCart ? '✓ Added to Cart!' : 'Add to Cart'}
              </button>
              <button className="p-4 border-2 border-gray-300 rounded-lg hover:border-orange-600 hover:text-orange-600 transition">
                <Heart className="w-6 h-6" />
              </button>
              <button className="p-4 border-2 border-gray-300 rounded-lg hover:border-orange-600 hover:text-orange-600 transition">
                <Share2 className="w-6 h-6" />
              </button>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Truck className="w-6 h-6 text-orange-600" />
                <div>
                  <p className="font-semibold">Free Shipping</p>
                  <p className="text-sm text-gray-600">On orders over $999</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <CreditCard className="w-6 h-6 text-orange-600" />
                <div>
                  <p className="font-semibold">Financing Available</p>
                  <p className="text-sm text-gray-600">0% APR for 60 months</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-orange-600" />
                <div>
                  <p className="font-semibold">Quality Guaranteed</p>
                  <p className="text-sm text-gray-600">1-year warranty included</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t pt-12 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Features</h2>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-orange-600 mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Dimensions</h2>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b">
                  <span className="font-semibold">Width:</span>
                  <span>{product.dimensions.width}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="font-semibold">Depth:</span>
                  <span>{product.dimensions.depth}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="font-semibold">Height:</span>
                  <span>{product.dimensions.height}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="font-semibold">Seat Height:</span>
                  <span>{product.dimensions.seatHeight}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="font-semibold">Seat Depth:</span>
                  <span>{product.dimensions.seatDepth}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                to={`/product/${relatedProduct.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition group"
              >
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300?text=Product';
                    }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{relatedProduct.name}</h3>
                  <p className="text-xl font-bold text-orange-600">${relatedProduct.price.toLocaleString()}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
