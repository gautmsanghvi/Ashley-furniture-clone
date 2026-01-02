import { ShoppingCart, Search, User, Home, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';

export default function Header() {
  const { cart } = useCart();
  const { user, logout } = useAuth();
  const [showAccountMenu, setShowAccountMenu] = useState(false);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="bg-gray-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex gap-6">
            <span>Free Shipping on Orders $999+</span>
            <span>|</span>
            <span>Finance Available</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300">Store Locator</a>
            <a href="#" className="hover:text-gray-300">Customer Service</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Home className="w-8 h-8 text-red-700" />
            <span className="text-2xl font-bold text-gray-900">Ashley Furniture</span>
          </Link>

          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for furniture, decor, and more..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700"
              />
              <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative">
              <button
                onClick={() => setShowAccountMenu(!showAccountMenu)}
                className="flex items-center gap-2 hover:text-orange-600"
              >
                <User className="w-6 h-6" />
                <span className="text-sm">{user ? user.name : 'Account'}</span>
              </button>

              {showAccountMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl z-50">
                  {user ? (
                    <>
                      <Link
                        to="/profile"
                        className="block px-4 py-2 hover:bg-gray-100 first:rounded-t-lg"
                        onClick={() => setShowAccountMenu(false)}
                      >
                        My Profile
                      </Link>
                      <button
                        onClick={() => {
                          logout();
                          setShowAccountMenu(false);
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 last:rounded-b-lg flex items-center gap-2 text-red-600"
                      >
                        <LogOut className="w-4 h-4" />
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        className="block px-4 py-2 hover:bg-gray-100 first:rounded-t-lg"
                        onClick={() => setShowAccountMenu(false)}
                      >
                        Sign In
                      </Link>
                      <Link
                        to="/signup"
                        className="block px-4 py-2 hover:bg-gray-100 last:rounded-b-lg"
                        onClick={() => setShowAccountMenu(false)}
                      >
                        Create Account
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>

            <Link to="/cart" className="flex items-center gap-2 hover:text-orange-600 relative">
              <ShoppingCart className="w-6 h-6" />
              <span className="text-sm">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      <nav className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex gap-1">
              <Link to="/living-room" className="px-4 py-2 text-sm font-medium hover:text-red-700 hover:bg-white rounded">
                Living Room
              </Link>
              <Link to="/bedroom" className="px-4 py-2 text-sm font-medium hover:text-red-700 hover:bg-white rounded">
                Bedroom
              </Link>
              <Link to="/dining" className="px-4 py-2 text-sm font-medium hover:text-red-700 hover:bg-white rounded">
                Dining Room
              </Link>
              <Link to="/mattresses" className="px-4 py-2 text-sm font-medium hover:text-red-700 hover:bg-white rounded">
                Mattresses
              </Link>
              <Link to="/outdoor" className="px-4 py-2 text-sm font-medium hover:text-red-700 hover:bg-white rounded">
                Outdoor
              </Link>
              <Link to="/kids" className="px-4 py-2 text-sm font-medium hover:text-red-700 hover:bg-white rounded">
                Baby & Kids
              </Link>
              <Link to="/home-office" className="px-4 py-2 text-sm font-medium hover:text-red-700 hover:bg-white rounded">
                Home Office
              </Link>
              <Link to="/decor" className="px-4 py-2 text-sm font-medium hover:text-red-700 hover:bg-white rounded">
                Home Decor
              </Link>
              <Link to="/rugs" className="px-4 py-2 text-sm font-medium hover:text-red-700 hover:bg-white rounded">
                Rugs
              </Link>
              <Link to="/storage" className="px-4 py-2 text-sm font-medium hover:text-red-700 hover:bg-white rounded">
                Storage
              </Link>
              <Link to="/deals" className="px-4 py-2 text-sm font-medium text-red-700 hover:bg-white rounded font-bold">
                Deals
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
