import React, { useState } from 'react';
import axios from 'axios';
import { Upload, Video, Newspaper, Tv, Calendar, BookOpen } from 'lucide-react';

interface UploadForm {
  file: File | null;
  title?: string;
  description?: string;
  region?: string;
  youtubeUrl?: string;
}

interface MagazineForm {
  coverImage: File | null;
  title: string;
  date: string;
  summary: string;
  content: string;
}

const Admin = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [uploadForm, setUploadForm] = useState<UploadForm>({
    file: null,
    title: '',
    description: '',
    region: 'West Africa',
    youtubeUrl: ''
  });
  const [magazineForm, setMagazineForm] = useState<MagazineForm>({
    coverImage: null,
    title: '',
    date: new Date().toISOString().split('T')[0],
    summary: '',
    content: ''
  });
  const [isUploading, setIsUploading] = useState(false);

  const regions = [
    'West Africa',
    'East Africa',
    'North Africa',
    'South Africa',
    'Central Africa',
    'Asia',
    'Europe',
    'America'
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      if (activeSection === 'magazine') {
        setMagazineForm({ ...magazineForm, coverImage: e.target.files[0] });
      } else {
        setUploadForm({ ...uploadForm, file: e.target.files[0] });
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (activeSection === 'magazine') {
      setMagazineForm({ ...magazineForm, [name]: value });
    } else {
      setUploadForm({ ...uploadForm, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUploading(true);
  
    // Create a new FormData object
    const formData = new FormData();
  
    try {
      if (activeSection === 'magazine') {
        if (!magazineForm.coverImage) {
          throw new Error('Please select a cover image');
        }

        formData.append('cover_image', magazineForm.coverImage);
        formData.append('title', magazineForm.title);
        formData.append('date', magazineForm.date);
        formData.append('summary', magazineForm.summary);
        formData.append('content', magazineForm.content);
  
        // Send the POST request to the magazine endpoint
        const response = await axios.post(
          'https://api.beamafrique.com/api/magazine/',
          formData
        );
        console.log(response.data);
  
        // Reset magazine form after successful upload
        setMagazineForm({
          coverImage: null,
          title: '',
          date: new Date().toISOString().split('T')[0],
          summary: '',
          content: ''
        });
      } else {
        if (!uploadForm.file) {
          throw new Error('Please select a file');
        }
        // Append fields for other content types
        formData.append('file', uploadForm.file);
        formData.append('title', uploadForm.title || '');
        formData.append('description', uploadForm.description || '');
        formData.append('region', uploadForm.region || '');
        formData.append('youtube_url', uploadForm.youtubeUrl || '');
        formData.append('section', activeSection);
  
        // Send the POST request to the generic upload endpoint
        const response = await axios.post(
          'https://api.beamafrique.com/api/upload/',
          formData
         
        );
        console.log(response.data);
  
        // Reset the upload form after successful upload
        setUploadForm({
          file: null,
          title: '',
          description: '',
          region: 'West Africa',
          youtubeUrl: ''
        });
      }
  
      alert('Content uploaded successfully!');
    } catch (error) {
      console.error('Error uploading content:', error);
      alert('Error uploading content. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-green-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-display font-bold text-center mb-12 text-gray-800">
          Admin Dashboard
        </h1>

        {/* Section Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: 'home', icon: Video, label: 'Home Ads' },
            { id: 'news', icon: Newspaper, label: 'News Content' },
            { id: 'tv', icon: Tv, label: 'TV Content' },
            { id: 'events', icon: Calendar, label: 'Event Ads' },
            { id: 'magazine', icon: BookOpen, label: 'Magazine Content' }
          ].map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setActiveSection(id)}
              className={`flex items-center px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeSection === id
                  ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-red-50 shadow-md'
              }`}
            >
              <Icon className="w-6 h-6 mr-3" />
              {label}
            </button>
          ))}
        </div>

        {/* Upload Form */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h2 className="text-3xl font-display font-bold mb-8 text-gray-800">
              Upload {activeSection === 'home' ? 'Home' : 
                     activeSection === 'news' ? 'News' : 
                     activeSection === 'tv' ? 'TV' : 
                     activeSection === 'magazine' ? 'Magazine' :
                     'Event'} Content
            </h2>

            {/* File Upload */}
            <div className="mb-8">
              <label className="block text-lg font-medium text-gray-700 mb-3">
                {activeSection === 'news' || activeSection === 'magazine' ? 'Image' : 'Video'} Upload
              </label>
              <div className="mt-2 flex justify-center px-8 pt-6 pb-8 border-2 border-gray-300 border-dashed rounded-xl hover:border-red-500 transition-colors duration-300">
                <div className="space-y-2 text-center">
                  <Upload className="mx-auto h-16 w-16 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label className="relative cursor-pointer bg-white rounded-md font-medium text-red-600 hover:text-red-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-red-500 focus-within:ring-offset-2 hover:underline">
                      <span>Upload a file</span>
                      <input
                        type="file"
                        className="sr-only"
                        onChange={handleFileChange}
                        accept={activeSection === 'news' || activeSection === 'magazine' ? 'image/*' : 'video/*'}
                      />
                    </label>
                  </div>
                  <p className="text-sm text-gray-500">
                    {activeSection === 'news' || activeSection === 'magazine' ? 'PNG, JPG, GIF up to 10MB' : 'MP4, WebM up to 100MB'}
                  </p>
                </div>
              </div>
            </div>

            {/* Magazine Content Form */}
            {activeSection === 'magazine' && (
              <>
                <div className="mb-6">
                  <label className="block text-lg font-medium text-gray-700 mb-3">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={magazineForm.title}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-lg font-medium text-gray-700 mb-3">
                    Publication Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={magazineForm.date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-lg font-medium text-gray-700 mb-3">
                    Summary
                  </label>
                  <textarea
                    name="summary"
                    value={magazineForm.summary}
                    onChange={handleInputChange}
                    rows={2}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-lg font-medium text-gray-700 mb-3">
                    Full Content
                  </label>
                  <textarea
                    name="content"
                    value={magazineForm.content}
                    onChange={handleInputChange}
                    rows={10}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300"
                    required
                    placeholder="Enter the full magazine content here..."
                  />
                </div>
              </>
            )}

            {/* News Content Form */}
            {(activeSection === 'news' || activeSection === 'tv') && (
              <>
                <div className="mb-6">
                  <label className="block text-lg font-medium text-gray-700 mb-3">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={uploadForm.title}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-lg font-medium text-gray-700 mb-3">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={uploadForm.description}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
              </>
            )}

            {activeSection === 'news' && (
              <div className="mb-6">
                <label className="block text-lg font-medium text-gray-700 mb-3">
                  Region
                </label>
                <select
                  name="region"
                  value={uploadForm.region}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300"
                  required
                >
                  {regions.map((region) => (
                    <option key={region} value={region}>
                      {region}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {activeSection === 'tv' && (
              <div className="mb-6">
                <label className="block text-lg font-medium text-gray-700 mb-3">
                  YouTube URL
                </label>
                <input
                  type="url"
                  name="youtubeUrl"
                  value={uploadForm.youtubeUrl}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
            )}

            <button
              type="submit"
              disabled={isUploading}
              className={`w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                isUploading ? 'opacity-50 cursor-not-allowed' : 'hover:from-red-700 hover:to-red-800 shadow-lg'
              }`}
            >
              {isUploading ? 'Uploading...' : 'Upload Content'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admin;