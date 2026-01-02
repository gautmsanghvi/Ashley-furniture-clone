import { Facebook, Instagram, Twitter, Youtube, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/living-room" className="hover:text-white">Living Room</Link></li>
              <li><Link to="/bedroom" className="hover:text-white">Bedroom</Link></li>
              <li><Link to="/dining" className="hover:text-white">Dining Room</Link></li>
              <li><Link to="/mattresses" className="hover:text-white">Mattresses</Link></li>
              <li><Link to="/outdoor" className="hover:text-white">Outdoor</Link></li>
              <li><Link to="/kids" className="hover:text-white">Baby & Kids</Link></li>
              <li><Link to="/deals" className="hover:text-white">Deals</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Track Order</a></li>
              <li><a href="#" className="hover:text-white">Returns</a></li>
              <li><a href="#" className="hover:text-white">Shipping Info</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Our Story</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Store Locator</a></li>
              <li><a href="#" className="hover:text-white">Affiliate Program</a></li>
              <li><a href="#" className="hover:text-white">Reviews</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Financing</a></li>
              <li><a href="#" className="hover:text-white">Protection Plans</a></li>
              <li><a href="#" className="hover:text-white">Assembly Services</a></li>
              <li><a href="#" className="hover:text-white">Design Services</a></li>
              <li><a href="#" className="hover:text-white">Gift Cards</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Connect With Us</h3>
            <div className="flex gap-4 mb-6">
              <a href="#" className="hover:text-white"><Facebook className="w-6 h-6" /></a>
              <a href="#" className="hover:text-white"><Instagram className="w-6 h-6" /></a>
              <a href="#" className="hover:text-white"><Twitter className="w-6 h-6" /></a>
              <a href="#" className="hover:text-white"><Youtube className="w-6 h-6" /></a>
            </div>
            <h4 className="text-white font-semibold mb-2">Newsletter</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 bg-gray-800 text-white rounded-l focus:outline-none flex-1"
              />
              <button className="px-4 py-2 bg-red-700 text-white rounded-r hover:bg-red-800">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Home className="w-6 h-6 text-red-700" />
            <span className="text-xl font-bold text-white">Ashley Furniture</span>
          </div>
          <div className="text-sm text-center md:text-left">
            <p>&copy; 2025 Ashley Furniture. All rights reserved.</p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
