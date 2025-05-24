import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../common/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Logo variant="light" />
            </div>
            <p className="text-sm mb-4">
              Connecting farmers directly to markets, eliminating middlemen and ensuring fair prices for agricultural products.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h5 className="font-bold text-white mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/farmers" className="text-gray-400 hover:text-white transition-colors">Farmers Directory</Link>
              </li>
              <li>
                <Link to="/market-prices" className="text-gray-400 hover:text-white transition-colors">Market Prices</Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-400 hover:text-white transition-colors">Resources</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h5 className="font-bold text-white mb-4">Contact Us</h5>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>123 Agriculture Street, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>+254 700 123 456</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>info@marketash.com</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h5 className="font-bold text-white mb-4">Newsletter</h5>
            <p className="text-sm mb-4">Subscribe to our newsletter for updates on market prices and agricultural tips.</p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {currentYear} MarketAsh. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-sm text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;