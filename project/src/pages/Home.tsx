// src/pages/Home.tsx
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import BeamAfrique from "../assets/BeamAfrique.png";
import { Clock, ArrowRight, TrendingUp } from 'lucide-react';

interface Post {
  id: number;
  title: string;
  description: string;
  file_url: string | null;
  created_at: string;

  region?: string;
}

const Home = () => {

  const [sidebarItems, setSidebarItems] = useState<Post[]>([]);
  // —————————————————————————
  // Featured Stories
  const [featured, setFeatured] = useState<Post[]>([]);

  useEffect(() => {
    // Fetch Sidebar: latest 5 news
    axios
      .get<Post[]>('https://api.beamafrique.com/api/content/', { params: { section: 'news' } })
      .then(res => setSidebarItems(res.data.slice(0, 5)))
      .catch(console.error);

    // Fetch Featured: first 3 news
    axios
      .get<Post[]>('https://api.beamafrique.com/api/content/', { params: { section: 'news' } })
      .then(res => setFeatured(res.data.slice(0, 3)))
      .catch(console.error);
  }, []);
  return (
    <div className="min-h-screen">
      {/* Hero Section with Gradient and Animation */}
 <div className="relative bg-gray-900 flex flex-col lg:flex-row pt-16 h-100 lg:max-h-[80vh]">
  {/* Main Hero Content */}
  <div className="flex-1 relative h-[70vh] sm:h-[70vh] lg:h-auto">
    <div className="absolute inset-0">
      <img
        className="w-full h-full object-cover"
        src="https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
        alt="Africa landscape"
      />
    </div>
    <div className="relative h-full flex items-center px-2 sm:px-4 lg:px-6">
      <div className="max-w-2xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          <img
            src={BeamAfrique}
            alt="BeamAfrique"
            className="h-12 sm:h-14 md:h-24 lg:h-20 mb-6 mx-auto lg:mx-0 animate__animated animate__zoomIn"
          />
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6 max-w-2xl text-white">
          Your Gateway to Africa’s sociocultural history, realities, economic
          assets, investment opportunities and prospects.
        </p>
        <div className="flex flex-row sm:flex-row gap-3 w-full max-w-md">
          <Link
  to="/newsfeed"
  className="flex-1 text-center bg-red-600 text-white text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-3 rounded-lg font-semibold hover:bg-red-700 hover:scale-105 transition-all duration-300"
>
  Latest Stories
</Link>

<Link
  to="/about"
  className="flex-1 text-center bg-green-600 text-white text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-3 rounded-lg font-semibold hover:bg-green-700 hover:scale-105 transition-all duration-300"
>
  Learn More
</Link>
        </div>
      </div>
    </div>
  </div>

  {/* News Topics Sidebar */}
  <div className="w-full lg:w-80 bg-white shadow-2xl border-t lg:border-t-0 lg:border-l border-gray-200 flex flex-col max-h-[70vh] lg:max-h-none overflow-y-auto">
    {/* Sidebar Header */}
    <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-green-50 to-red-50">
      <div className="flex items-center gap-2 mb-2">
        <TrendingUp className="w-6 h-6 text-green-700" />
        <h2 className="text-xl font-bold text-gray-900">Latest News</h2>
      </div>
      <p className="text-sm text-gray-600">Breaking stories from across Africa</p>
    </div>

    {/* Sidebar Content */}
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-3">
            {sidebarItems.map((post) => (
              <Link
                key={post.id}
                to={`/news/${post.id}`}
                className="block p-3 rounded-lg border border-gray-100 hover:border-green-300 hover:shadow-md transition-all duration-300 group bg-white hover:bg-green-50"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-block px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                        {post.region}
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900 group-hover:text-green-700 transition-colors leading-tight mb-2">
                      {post.title}
                    </h3>
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="w-3 h-3 mr-1" />
                      {new Date(post.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-green-700 transition-colors ml-2 flex-shrink-0" />
                </div>
              </Link>
            ))}
            {sidebarItems.length === 0 && (
              <p className="text-center text-gray-500">No news to show.</p>
            )}
          </div>
        </div>


    {/* Sidebar Footer */}
    <div className="p-4 border-t border-gray-200 bg-gray-50">
      <Link
        to="/newsfeed"
        className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300"
      >
        View All News
        <ArrowRight className="ml-2 w-4 h-4" />
      </Link>
    </div>
  </div>
</div>


      {/* Advertisement Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div
            className="rounded-lg overflow-hidden relative bg-cover bg-center h-48 transition-all transform hover:scale-105 hover:shadow-xl"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-2xl font-bold mb-2">Advertisement Space</h2>
                <p className="mb-4">
                  Promote your brand to our global audience
                </p>
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
            {featured.map(post => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={post.file_url ?? '/fallback-image.jpg'}
                  alt={post.title}
                  className="w-full h-48 object-contain transition-transform duration-300 hover:scale-110"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.description}
                  </p>
                  <Link
                    to={`/news/${post.id}`}
                    className="text-red-600 font-semibold hover:text-red-700 hover:translate-x-2 inline-block transition-all duration-300"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
            {featured.length === 0 && (
              <p className="col-span-full text-center text-gray-500">
                No featured stories available.
              </p>
            )}
          </div>
        </div>
      </section>
     
      {/* What We Do Section */}
      <section
        className="py-16 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
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
                description:
                  "We accurately project the rich and diverse culture of Africa to the world.",
                icon: "🌍",
              },
              {
                title: "Economic Opportunities",
                description:
                  "Showcasing investment opportunities across the African continent.",
                icon: "💼",
              },
              {
                title: "Global Connection",
                description:
                  "Building bridges between Africa and the international community.",
                icon: "🤝",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md p-8 rounded-lg text-center hover:bg-white/20 hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        className="py-16 bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1523365154888-8a758819b722?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Join Our Global Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Stay updated with the latest stories, events, and opportunities from
            across Africa.
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

export default Home;
