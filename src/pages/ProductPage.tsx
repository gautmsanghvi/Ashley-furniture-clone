import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Star,
  Truck,
  CreditCard,
  Shield,
  Heart,
  Share2,
  ChevronRight,
  Check,
} from "lucide-react";
import { useCart } from "../context/CartContext";

import {
  livingRoomProducts,
  bedroomProducts,
  diningProducts,
  mattressProducts,
  outdoorProducts,
  kidsProducts,
  homeOfficeProducts,
  decorProducts,
  rugProducts,
  storageProducts,
  dealsProducts,
} from "../data/categoryData";

export default function ProductPage() {
  const { id } = useParams();
  const productId = Number(id);

  const { addToCart } = useCart();

  const allProducts = [
    ...livingRoomProducts,
    ...bedroomProducts,
    ...diningProducts,
    ...mattressProducts,
    ...outdoorProducts,
    ...kidsProducts,
    ...homeOfficeProducts,
    ...decorProducts,
    ...rugProducts,
    ...storageProducts,
    ...dealsProducts,
  ];

  const baseProduct = allProducts.find((p) => p.id === productId);

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(baseProduct?.color ?? "");
  const [addedToCart, setAddedToCart] = useState(false);

  if (!baseProduct) {
    return <div className="p-10 text-center">Product not found</div>;
  }

  const product = {
    ...baseProduct,
    images: [baseProduct.image],
    rating: baseProduct.rating,
    reviews: baseProduct.reviews,
    description: `${baseProduct.name} made with premium ${baseProduct.material}.`,
    features: [
      `Material: ${baseProduct.material}`,
      `Color: ${baseProduct.color}`,
      "Premium quality build",
      "Durable construction",
    ],
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity,
      color: selectedColor,
    });

    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-orange-600">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

            <div className="flex items-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < product.rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
              <span className="text-gray-600">
                ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-4xl font-bold text-orange-600 mb-4">
              ${product.price.toLocaleString()}
            </p>

            <p className="text-gray-700 mb-6">{product.description}</p>

            <div className="mb-6">
              <label className="block font-semibold mb-2">Color</label>
              <button className="px-4 py-2 border-2 border-orange-600 rounded-lg bg-orange-50">
                {product.color}
              </button>
            </div>

            <div className="mb-6">
              <label className="block font-semibold mb-2">Quantity</label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border rounded-lg"
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border rounded-lg"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full bg-orange-600 text-white py-4 rounded-lg font-semibold hover:bg-orange-700 transition"
            >
              {addedToCart ? "✓ Added to Cart!" : "Add to Cart"}
            </button>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <Truck className="text-orange-600" />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center gap-3">
                <CreditCard className="text-orange-600" />
                <span>Secure Payments</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="text-orange-600" />
                <span>Quality Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
