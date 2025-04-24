import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, LogOut } from 'lucide-react';
import BeamAfrique from '../assets/BeamAfrique.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Simple auth check
  const isLoggedIn = Boolean(localStorage.getItem('accessToken'));

  // Function to handle logout
  const handleLogout = () => {
    // Remove tokens / user info
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    // You may also clear any user-related state here
    // Redirect to login or home
    navigate('/tv');
  };

  // Nav items configuration
  const navItems = [
    { path: '/', label: 'Home', requiresAuth: false },
    { path: '/about', label: 'About', requiresAuth: false },
    { path: '/newsfeed', label: 'Newsfeed', requiresAuth: false },
    { path: '/magazine', label: 'Magazine', requiresAuth: false },
    { path: '/tv', label: 'TV', requiresAuth: false },
    { path: '/gallery', label: 'Photo Gallery', requiresAuth: false },
    { path: '/events', label: 'Events', requiresAuth: false },
    { path: '/contact', label: 'Contact', requiresAuth: false },
    { path: '/dashboard', label: 'Dashboard', requiresAuth: true },
    { path: '/beamadmin', label: 'Admin', requiresAuth: true, className: 'text-red-600 font-bold' }
  ];

  // Filter based on auth
  const filteredNavItems = navItems.filter(
    (item) => !item.requiresAuth || isLoggedIn
  );

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src={BeamAfrique}
                alt="BeamAfrique" 
                className="h-12 transform hover:scale-105 transition-all duration-300"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {filteredNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-110 
                  ${isActive(item.path) 
                    ? 'text-red-600 border-b-2 border-red-600' 
                    : 'text-gray-700 hover:text-red-600'
                  } ${item.className || ''}`}
              >
                {item.label}
              </Link>
            ))}

            {/* Logout button */}
            {isLoggedIn && (
              <button
                onClick={handleLogout}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-red-600 transition-all duration-300 transform hover:scale-110"
              >
                <LogOut className="w-4 h-4 mr-1" />
                Logout
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-red-600 hover:scale-110 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-16 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col py-4">
          {filteredNavItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-3 text-sm font-medium transition-all duration-300 transform hover:translate-x-2
                ${isActive(item.path)
                  ? 'text-red-600 bg-red-50 border-l-4 border-red-600'
                  : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
                } ${item.className || ''}`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          {/* Logout for mobile */}
          {isLoggedIn && (
            <button
              onClick={() => { setIsOpen(false); handleLogout(); }}
              className="mt-4 px-4 py-3 text-sm font-medium flex items-center text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-all duration-300"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
