import { ExternalLink, PlayCircle } from 'lucide-react';

const TV = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">BeamAfrique TV</h1>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, video) => (
            <div key={video} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1579632652768-6cb9dcf85912?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt={`Video ${video + 1}`}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <PlayCircle className="h-12 w-12 text-white opacity-80" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Video Title {video + 1}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  Short description of the video content goes here...
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-red-600 hover:text-red-700 text-sm font-semibold"
                >
                  Watch on YouTube <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TV;