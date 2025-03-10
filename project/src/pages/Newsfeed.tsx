import { useState, useEffect } from 'react';
import axios from 'axios';
import Article from '../assets/Article.jpg';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  summary: string;
  content: string;
  image: string;
  region: string;
}

const Newsfeed = () => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  //  news items from  backend
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/upload/', { params: { section: 'news' } })
      .then(response => {
        setNewsItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching news items:', error);
      });
  }, []);

  // Group news items by region
  const regions = [
    { name: 'West Africa', color: 'red' },
    { name: 'East Africa', color: 'green' },
    { name: 'North Africa', color: 'red' },
    { name: 'South Africa', color: 'green' },
    { name: 'Central Africa', color: 'red' },
    { name: 'Asia', color: 'green' },
    { name: 'Europe', color: 'red' },
    { name: 'America', color: 'green' },
  ];

  const groupNewsByRegion = (region: string): NewsItem[] =>
    newsItems.filter(news => news.region === region);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Latest News</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {regions.map((region) => (
            <div key={region.name} className="mb-8">
              <h2 className={`text-xl font-bold mb-6 text-${region.color}-600 border-b-2 border-${region.color}-600 pb-2`}>
                {region.name}
              </h2>
              <div className="space-y-6">
                {groupNewsByRegion(region.name).map((news) => (
                  <div key={news.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                    <img
                      src={news.file || Article}
                      alt={news.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <span className="text-sm text-gray-500">{news.date}</span>
                      <h3 className="text-lg font-semibold mt-2 mb-2">{news.title}</h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {news.summary}
                      </p>
                      <button 
                        onClick={() => setSelectedNews(news)}
                        className={`text-${region.color}-600 text-sm font-semibold hover:text-${region.color}-700`}
                      >
                        Read More →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedNews && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <img
                  src={selectedNews.image || Article}
                  alt={selectedNews.title}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <div className="text-sm text-gray-500 mb-2">{selectedNews.date}</div>
                <h2 className="text-2xl font-bold mb-4">{selectedNews.title}</h2>
                <div className="prose max-w-none">
                  {selectedNews.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedNews(null)}
                  className="mt-6 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Newsfeed;
