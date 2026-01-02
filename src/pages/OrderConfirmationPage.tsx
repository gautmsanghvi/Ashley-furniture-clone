import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { CheckCircle, Download } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../services/auth';

interface OrderItem {
  id: string;
  product_id: string;
  quantity: number;
  price: number;
  package_type: string;
  color: string;
}

interface Order {
  id: string;
  user_id: string;
  total_amount: number;
  status: string;
  created_at: string;
  items?: OrderItem[];
}

export default function OrderConfirmationPage() {
  const { orderId } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [order, setOrder] = useState<Order | null>(null);
  const [items, setItems] = useState<OrderItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  if (!user) {
    navigate('/login');
    return null;
  }

  useEffect(() => {
    async function fetchOrder() {
      try {
        if (!orderId) {
          setError('Order ID not found');
          setLoading(false);
          return;
        }

        const { data: orderData, error: orderError } = await supabase
          .from('orders')
          .select('*')
          .eq('id', orderId)
          .eq('user_id', user.id)
          .maybeSingle();

        if (orderError) {
          throw new Error(orderError.message);
        }

        if (!orderData) {
          setError('Order not found');
          setLoading(false);
          return;
        }

        setOrder(orderData);

        const { data: itemsData, error: itemsError } = await supabase
          .from('order_items')
          .select('*')
          .eq('order_id', orderId);

        if (itemsError) {
          console.error('Items error:', itemsError);
        } else if (itemsData) {
          setItems(itemsData);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load order');
      } finally {
        setLoading(false);
      }
    }

    fetchOrder();
  }, [orderId, user.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-gray-600">Loading order details...</p>
        </div>
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Order Not Found</h1>
            <p className="text-gray-600 mb-6">{error || 'Unable to load order details'}</p>
            <Link to="/" className="text-orange-600 font-semibold hover:underline">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const subtotal = order.total_amount / 1.08 - (order.total_amount / 1.08 > 999 ? 0 : 99);
  const shipping = order.total_amount / 1.08 > 999 ? 0 : 99;
  const tax = order.total_amount - subtotal - shipping;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center mb-8">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
          <p className="text-gray-600 mb-4">Thank you for your purchase</p>
          <p className="text-sm text-gray-500">Order ID: {order.id}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold mb-6">Order Details</h2>

              <div className="space-y-4">
                {items.length > 0 ? (
                  items.map((item) => (
                    <div key={item.id} className="flex justify-between items-start pb-4 border-b">
                      <div>
                        <p className="font-semibold">Product ID: {item.product_id}</p>
                        <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                        {item.package_type && (
                          <p className="text-sm text-gray-600">Package: {item.package_type}</p>
                        )}
                        {item.color && <p className="text-sm text-gray-600">Color: {item.color}</p>}
                      </div>
                      <p className="font-semibold">${(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">No items in order</p>
                )}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6">What's Next?</h2>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold">Order Confirmed</h3>
                    <p className="text-sm text-gray-600">We've received your order</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold">Processing</h3>
                    <p className="text-sm text-gray-600">We're preparing your items for shipment</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold">Shipping</h3>
                    <p className="text-sm text-gray-600">Your order will be shipped within 3-5 business days</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center font-bold">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold">Delivery</h3>
                    <p className="text-sm text-gray-600">You'll receive tracking information via email</p>
                  </div>
                </div>
              </div>

              <button className="w-full mt-6 bg-orange-600 text-white py-2 rounded-lg font-semibold hover:bg-orange-700 transition flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                Download Invoice
              </button>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold">
                    {shipping === 0 ? <span className="text-green-600">FREE</span> : `$${shipping}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-semibold">${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <span className="font-bold">Total</span>
                  <span className="text-2xl font-bold text-orange-600">
                    ${order.total_amount.toFixed(2)}
                  </span>
                </div>
              </div>

              <Link
                to="/"
                className="w-full mt-6 bg-orange-600 text-white py-2 rounded-lg font-semibold hover:bg-orange-700 transition block text-center"
              >
                Continue Shopping
              </Link>

              <Link
                to="/profile"
                className="w-full mt-3 bg-gray-200 text-gray-900 py-2 rounded-lg font-semibold hover:bg-gray-300 transition block text-center"
              >
                View All Orders
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
