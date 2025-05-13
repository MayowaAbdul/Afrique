import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';
import BeamAfrique from '../assets/BeamAfrique.png';

const Footer = () => {
  return (
    <footer
      className="text-white py-12 bg-cover bg-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url("https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div className="fade-in">
            <img
              src={BeamAfrique}
              alt="BeamAfrique"
              className="h-12 mb-4 hover:scale-105 transition-all duration-300"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Your Gateway to Africa's Authentic Voice. Connecting Africa to the World.
            </p>
          </div>
          <div className="slide-in">
            <h3 className="text-lg font-semibold mb-3 text-green-400">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {['About', 'Newsfeed', 'Magazine', 'TV', 'Gallery', 'Events'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="slide-in">
            <h3 className="text-lg font-semibold mb-3 text-red-400">Contact Us</h3>
            <ul className="text-gray-300 space-y-2 text-sm">
              <li className="hover:text-white transition-colors duration-200 hover:translate-x-1">
                <span className="font-medium">Editorial HQ:</span> 2A Iyala Street by Shoprite Alausa, Ikeja, Lagos State, Nigeria
              </li>
              <li className="hover:text-white transition-colors duration-200 hover:translate-x-1">
                <span className="font-medium">West Africa:</span> Krobo 1&2, Asafo Adjaye St., Teshie Tsui Bleoo, Accra-Ghana
              </li>
              <li className="hover:text-white transition-colors duration-200 hover:translate-x-1">
                <span className="font-medium">South Africa:</span> Plot 33277/917 Kamwala South Lusaka, Zambia.
              </li>
              <li className="hover:text-white transition-colors duration-200 hover:translate-x-1">
                <span className="font-medium">India:</span> 136 Tent Lines,Roy Villa,Mohan Nagar, Nagpur Maharashtra, India 440001
              </li>
              <li className="hover:text-white transition-colors duration-200 hover:translate-x-1">
                <span className="font-medium">UK & USA:</span> 178502 s Cottage Grove, Chicago IL
              </li>
              <li className="hover:text-white transition-colors duration-200 hover:translate-x-1">
                <span className="font-medium">Email:</span> beamafrique@gmail.com
              </li>
              <li className="hover:text-white transition-colors duration-200 hover:translate-x-1">
                <span className="font-medium">Phone:</span> +2348076094066 / +233244566067 / +233262422070
              </li>
            </ul>
          </div>
          <div className="scale-in">
            <h3 className="text-lg font-semibold mb-3 text-green-400">Follow Us</h3>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Youtube, Mail].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-300 hover:text-white hover:scale-110 transition-all duration-200"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-xs">
          <p>© {new Date().getFullYear()} BeamAfrique. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;