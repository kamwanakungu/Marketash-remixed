import { Menu, ShoppingCart, User, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useCart } from '../../hooks/useCart';
import Logo from '../common/Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { user, logout } = useAuth();
  const { cartItems } = useCart();
  const navigate = useNavigate();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleProfile = () => setIsProfileOpen(!isProfileOpen);
  
  const handleLogout = () => {
    logout();
    setIsProfileOpen(false);
    navigate('/');
  };
  
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <Logo />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? 'text-primary-600 font-medium' : 'text-gray-700 hover:text-primary-500 transition-colors'
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/products" 
              className={({ isActive }) => 
                isActive ? 'text-primary-600 font-medium' : 'text-gray-700 hover:text-primary-500 transition-colors'
              }
            >
              Products
            </NavLink>
            <NavLink 
              to="/farmers" 
              className={({ isActive }) => 
                isActive ? 'text-primary-600 font-medium' : 'text-gray-700 hover:text-primary-500 transition-colors'
              }
            >
              Farmers
            </NavLink>
            <NavLink 
              to="/market-prices" 
              className={({ isActive }) => 
                isActive ? 'text-primary-600 font-medium' : 'text-gray-700 hover:text-primary-500 transition-colors'
              }
            >
              Market Prices
            </NavLink>
            <NavLink 
              to="/resources" 
              className={({ isActive }) => 
                isActive ? 'text-primary-600 font-medium' : 'text-gray-700 hover:text-primary-500 transition-colors'
              }
            >
              Resources
            </NavLink>
          </nav>
          
          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                {/* Cart Icon */}
                <Link to="/cart" className="relative p-2 text-gray-700 hover:text-primary-500 transition-colors">
                  <ShoppingCart className="h-6 w-6" />
                  {cartItems.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {cartItems.length}
                    </span>
                  )}
                </Link>
                
                {/* User Profile */}
                <div className="relative">
                  <button
                    onClick={toggleProfile}
                    className="flex items-center space-x-2 focus:outline-none"
                    aria-expanded={isProfileOpen}
                    aria-haspopup="true"
                  >
                    <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                      <User className="h-5 w-5" />
                    </div>
                  </button>
                  
                  {/* Profile Dropdown */}
                  {isProfileOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 ring-1 ring-black ring-opacity-5">
                      <div className="px-4 py-2 border-b border-gray-100">
                        <p className="text-sm font-medium text-gray-900">{user.name}</p>
                        <p className="text-xs text-gray-500">{user.email}</p>
                      </div>
                      <Link
                        to="/dashboard"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        Dashboard
                      </Link>
                      <Link
                        to="/orders"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        Orders
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <Link to="/login" className="hidden sm:inline-block btn btn-outline">
                  Login
                </Link>
                <Link to="/register" className="hidden sm:inline-block btn btn-primary">
                  Register
                </Link>
              </>
            )}
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary-500 focus:outline-none"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  isActive ? 'text-primary-600 font-medium px-2 py-1' : 'text-gray-700 hover:text-primary-500 transition-colors px-2 py-1'
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink 
                to="/products" 
                className={({ isActive }) => 
                  isActive ? 'text-primary-600 font-medium px-2 py-1' : 'text-gray-700 hover:text-primary-500 transition-colors px-2 py-1'
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </NavLink>
              <NavLink 
                to="/farmers" 
                className={({ isActive }) => 
                  isActive ? 'text-primary-600 font-medium px-2 py-1' : 'text-gray-700 hover:text-primary-500 transition-colors px-2 py-1'
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Farmers
              </NavLink>
              <NavLink 
                to="/market-prices" 
                className={({ isActive }) => 
                  isActive ? 'text-primary-600 font-medium px-2 py-1' : 'text-gray-700 hover:text-primary-500 transition-colors px-2 py-1'
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Market Prices
              </NavLink>
              <NavLink 
                to="/resources" 
                className={({ isActive }) => 
                  isActive ? 'text-primary-600 font-medium px-2 py-1' : 'text-gray-700 hover:text-primary-500 transition-colors px-2 py-1'
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </NavLink>
              
              {!user && (
                <div className="flex space-x-3 mt-2 pt-2 border-t border-gray-100">
                  <Link to="/login" className="btn btn-outline text-sm" onClick={() => setIsMenuOpen(false)}>
                    Login
                  </Link>
                  <Link to="/register" className="btn btn-primary text-sm" onClick={() => setIsMenuOpen(false)}>
                    Register
                  </Link>
                </div>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;