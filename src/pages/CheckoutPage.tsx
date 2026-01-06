import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../services/auth';

export default function CheckoutPage() {
  const { cart, getTotalPrice, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!user) navigate('/login');
    else if (cart.length === 0) navigate('/cart');
  }, [user, cart.length, navigate]);

  if (!user || cart.length === 0) return null;

  const subtotal = getTotalPrice();
  const shipping = subtotal > 999 ? 0 : 99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handlePlaceOrder = async () => {
    setLoading(true);
    try {
      const { data: order } = await supabase
        .from('orders')
        .insert([{ user_id: user.id, total_amount: total, status: 'confirmed' }])
        .select()
        .single();

      for (const item of cart) {
        await supabase.from('order_items').insert([{
          order_id: order.id,
          product_id: item.id,
          quantity: item.quantity,
          price: item.price,
          color: item.color
        }]);
      }

      clearCart();
      navigate(`/order-confirmation/${order.id}`);
    } catch (err) {
      setError('Order failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={handlePlaceOrder} disabled={loading}>
      {loading ? 'Placing Order...' : 'Place Order'}
    </button>
  );
}
