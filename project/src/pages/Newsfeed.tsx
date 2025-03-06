import { useState } from 'react';
import Article from '../assets/Article.jpg'

interface NewsItem {
  id: number;
  title: string;
  date: string;
  summary: string;
  content: string;
  image: string;
}

const Newsfeed = () => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

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

  const generateNewsItems = (region: string): NewsItem[] => [
    {
      id: Math.random(),
      title: `Latest Development in ${region}`,
      date: 'March 14, 2024',
      summary: `Breaking news and updates from ${region}...`,
      content: `In a groundbreaking development from ${region}, significant progress has been made in various sectors including technology, agriculture, and infrastructure. Local leaders have announced new initiatives aimed at boosting economic growth and fostering international partnerships.

      Recent studies have shown a remarkable increase in foreign investment, particularly in renewable energy projects and digital infrastructure. This trend is expected to create thousands of new jobs and contribute to sustainable development in the region.
      
      Furthermore, cultural exchange programs between ${region} and other global regions have been expanded, promoting mutual understanding and cooperation. These initiatives have been widely praised by international observers and are seen as a model for regional development.
      
      The local government has also unveiled plans for major infrastructure projects, including new transportation networks and urban development initiatives. These projects are expected to significantly improve connectivity and living standards for millions of residents.`,
      image: `https://images.unsplash.com/photo-${1500000000000 + Math.floor(Math.random() * 10)}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`
    },
    {
      id: Math.random(),
      title: `Economic Growth in ${region}`,
      date: 'March 14, 2024',
      summary: `Economic updates and market analysis from ${region}...`,
      content: `The economic landscape in ${region} has shown remarkable resilience and growth in recent months. Key indicators point to a robust recovery in various sectors, with particular strength in technology, agriculture, and manufacturing.

      Local businesses have reported increased productivity and expansion plans, while foreign investment continues to flow into the region. Government initiatives to support small and medium enterprises have yielded positive results, creating a more dynamic and inclusive economy.
      
      The region's commitment to sustainable development has attracted significant international attention, with several major companies announcing plans to establish operations in key cities. This has led to increased job opportunities and knowledge transfer.
      
      Innovation hubs and technology centers are flourishing, positioning ${region} as a leading destination for tech startups and digital transformation initiatives. The government's focus on digital infrastructure and skills development has created a favorable environment for technological advancement.`,
      image: `https://images.unsplash.com/photo-${1500000000000 + Math.floor(Math.random() * 10)}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`
    }
  ];

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
                {generateNewsItems(region.name).map((news) => (
                  <div key={news.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                    <img
                      src={Article}
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
                  src={Article}
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