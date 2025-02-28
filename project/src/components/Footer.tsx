import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer 
      className="text-white pt-12 pb-6 bg-cover bg-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url("https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="fade-in">
            <img 
              src="/beamafrique-logo.png" 
              alt="BeamAfrique" 
              className="h-12 mb-4 hover:scale-105 transition-all duration-300"
            />
            <p className="text-gray-300">
              Your Gateway to Africa's Authentic Voice. Connecting Africa to the World.
            </p>
          </div>
          <div className="slide-in">
            <h3 className="text-xl font-bold mb-4 text-green-400">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Newsfeed', 'Magazine', 'TV', 'Gallery', 'Events'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-white hover:translate-x-2 inline-block transition-all duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="slide-in">
            <h3 className="text-xl font-bold mb-4 text-red-400">Contact</h3>
            <ul className="text-gray-300 space-y-2">
              <li className="hover:text-white transition-colors duration-300 hover:translate-x-2">
                Global HQ: Kigali, Rwanda
              </li>
              <li className="hover:text-white transition-colors duration-300 hover:translate-x-2">
                Editorial: Lagos, Nigeria
              </li>
              <li className="hover:text-white transition-colors duration-300 hover:translate-x-2">
                Email: info@beamafrique.com
              </li>
              <li className="hover:text-white transition-colors duration-300 hover:translate-x-2">
                Phone: +250 123 456 789
              </li>
            </ul>
          </div>
          <div className="scale-in">
            <h3 className="text-xl font-bold mb-4 text-green-400">Follow Us</h3>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Youtube, Mail].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-300 hover:text-white hover:scale-125 transition-all duration-300"
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-center text-gray-300">
          <p>© {new Date().getFullYear()} BeamAfrique. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;