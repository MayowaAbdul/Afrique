import { useState, useEffect } from 'react';
import axios from 'axios';
import { Download } from 'lucide-react';

interface MagazineIssue {
  id: number;
  title: string;
  date: string;
  summary: string;
  content: string;
  cover_image_url: string;  // Updated field name to match backend
}

// Helper function to get the magazine image URL
// const getImageUrl = (issue: MagazineIssue): string => {
//   if (issue.cover_image && issue.cover_image.startsWith('http')) {
//     return issue.cover_image;
//   }
//   return `http://127.0.0.1:8000${issue.cover_image}`;
// };

const Magazine = () => {
  const [magazines, setMagazines] = useState<MagazineIssue[]>([]);
  const [selectedIssue, setSelectedIssue] = useState<MagazineIssue | null>(null);

  useEffect(() => {
    // Fetch magazine issues from the backend
    axios
      .get('https://api.beamafrique.com/api/magazines/')
      .then((response) => {
        setMagazines(response.data);
      })
      .catch((error) => {
        console.error('Error fetching magazine issues:', error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-red-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">BeamAfrique Magazine</h1>
        
        <div className="grid md:grid-cols-4 gap-6">
          {magazines.length > 0 ? (
            magazines.map((issue) => (
              <div key={issue.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                <img
                  src={issue.cover_image_url}
                  alt={issue.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <span className="text-sm text-gray-500">{issue.date}</span>
                  <h3 className="text-lg font-semibold mt-2 mb-2">{issue.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {issue.summary}
                  </p>
                  <div className="space-y-2">
                    <button 
                      onClick={() => setSelectedIssue(issue)}
                      className="w-full bg-red-600 text-white py-2 rounded-lg text-sm hover:bg-red-700 transition duration-300"
                    >
                      Read Online
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">No magazine issues available</p>
          )}
        </div>

        {/* Download Complete Magazine Section */}
        <div 
          className="mt-16 rounded-lg p-8 text-white text-center bg-cover bg-center"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
          }}
        >
          <h2 className="text-2xl font-bold mb-4">Download Complete Magazine Collection</h2>
          <p className="mb-6">Get access to our entire magazine collection in high quality PDF format</p>
          <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 inline-flex items-center">
            <Download className="mr-2 h-5 w-5" />
            Download Complete Collection
          </button>
        </div>

        {/* Modal */}
        {selectedIssue && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-sm text-gray-500">{selectedIssue.date}</span>
                    <h2 className="text-3xl font-bold mt-2">{selectedIssue.title}</h2>
                  </div>
                  <button
                    onClick={() => setSelectedIssue(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <img
                  src={selectedIssue.cover_image_url}
                  alt={selectedIssue.title}
                  className="w-full h-96 object-cover rounded-lg mb-6"
                />

                <div className="prose max-w-none">
                  {selectedIssue.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-8 flex space-x-4">
                  <button
                    onClick={() => setSelectedIssue(null)}
                    className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition duration-300"
                  >
                    Close
                  </button>
                  <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition duration-300">
                    Download Issue
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Magazine;
