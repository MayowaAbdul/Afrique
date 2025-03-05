import React from 'react';
import { Link } from 'react-router-dom';
import BeamAfrique from '../assets/BeamAfrique.png';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section 
        className="relative h-[80vh] bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <img 
              src={BeamAfrique} 
              alt="BeamAfrique" 
              className="h-24 md:h-32 mb-6"
            />
          </h1>
          <p className="text-2xl mb-8 max-w-2xl">
            Your Gateway to Africa's Authentic Voice - Connecting the Continent to the World
          </p>
          <div className="space-x-4">
            <Link
              to="/newsfeed"
              className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 hover:scale-110 transition-all duration-300 inline-block"
            >
              Latest Stories
            </Link>
            <Link
              to="/about"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 hover:scale-110 transition-all duration-300 inline-block"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Advertisement Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div 
            className="rounded-lg overflow-hidden relative bg-cover bg-center h-48"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-2xl font-bold mb-2">Advertisement Space</h2>
                <p className="mb-4">Promote your brand to our global audience</p>
                <Link
                  to="/contact"
                  className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 hover:scale-110 transition-all duration-300 inline-block"
                >
                  Advertise with Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
            Featured <span className="text-red-600">Stories</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                <img
                  src={`https://images.unsplash.com/photo-${1500000000000 + item}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`}
                  alt="Story"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Featured Story {item}</h3>
                  <p className="text-gray-600 mb-4">
                    Discover the latest developments and stories from across Africa...
                  </p>
                  <Link
                    to="/newsfeed"
                    className="text-red-600 font-semibold hover:text-red-700 hover:translate-x-2 inline-block transition-all duration-300"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section 
        className="py-16 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">
            What We <span className="text-green-400">Do</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Africa's Cultural Voice",
                description: "We accurately project the rich and diverse culture of Africa to the world.",
                icon: "🌍"
              },
              {
                title: "Economic Opportunities",
                description: "Showcasing investment opportunities across the African continent.",
                icon: "💼"
              },
              {
                title: "Global Connection",
                description: "Building bridges between Africa and the international community.",
                icon: "🤝"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md p-8 rounded-lg text-center hover:bg-white/20 hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section 
        className="py-16 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1523365154888-8a758819b722?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Join Our Global Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Stay updated with the latest stories, events, and opportunities from across Africa.
          </p>
          <Link
            to="/contact"
            className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:scale-110 transition-all duration-300 inline-block"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home