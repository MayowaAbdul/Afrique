import { useEffect, useState } from 'react';
import { ExternalLink, PlayCircle } from 'lucide-react';
import axios from 'axios';

interface TvUpload {
  id: number;
  file: string;
  title: string;
  description: string;
  youtube_url: string;
}

const TV = () => {
  const [uploads, setUploads] = useState<TvUpload[]>([]);

  // Helper function to get YouTube thumbnail from the youtube_url
  const getYoutubeThumbnail = (url: string): string => {
    try {
      const videoId = new URL(url).searchParams.get('v');
      return videoId
        ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
        : 'https://images.unsplash.com/photo-1579632652768-6cb9dcf85912?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
    } catch (error) {
      return 'https://images.unsplash.com/photo-1579632652768-6cb9dcf85912?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
    }
  };

  useEffect(() => {
    // Fetch TV uploads from your Django backend; ensure your endpoint filters by section=tv.
    axios
      .get('http://127.0.0.1:8000/api/upload/', { params: { section: 'tv' } })
      .then((response) => {
        setUploads(response.data);
      })
      .catch((error) => {
        console.error('Error fetching TV uploads:', error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">BeamAfrique TV</h1>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {uploads.length > 0 ? (
            uploads.map((upload) => (
              <div
                key={upload.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
              >
                <div className="relative">
                  <img
                    src={getYoutubeThumbnail(upload.youtube_url)}
                    alt={upload.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <PlayCircle className="h-12 w-12 text-white opacity-80" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{upload.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {upload.description}
                  </p>
                  <a
                    href={upload.youtube_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-red-600 hover:text-red-700 text-sm font-semibold"
                  >
                    Watch on YouTube <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-600">
              No TV uploads available.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TV;
