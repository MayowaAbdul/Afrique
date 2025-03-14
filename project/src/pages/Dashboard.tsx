import React, { useState } from "react";
import { Upload, Video, Newspaper, Tv, Calendar, BookOpen, BarChart, Trash2 } from "lucide-react";
import rasheed from '../assets/rasheed.jpg';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [uploads, setUploads] = useState([
    { id: 1, title: "Sample Upload 1", type: "Video", image: rasheed },
    { id: 2, title: "Sample Upload 2", type: "News", image: rasheed },
  ]);
  const [stats, setStats] = useState({ totalUploads: 10, activeUsers: 5, pendingApprovals: 3 });

  const sections = [
    { id: "overview", icon: BarChart, label: "Overview" },
    { id: "home", icon: Video, label: "Home Ads" },
    { id: "news", icon: Newspaper, label: "News Content" },
    { id: "tv", icon: Tv, label: "TV Content" },
    { id: "events", icon: Calendar, label: "Event Ads" },
    { id: "magazine", icon: BookOpen, label: "Magazine Content" }
  ];

  const handleDelete = (id: number) => {
    setUploads((prevUploads) => prevUploads.filter((upload) => upload.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8 pt-10"> Dashboard</h1>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {sections.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setActiveSection(id)}
              className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeSection === id ? "bg-red-600 text-white" : "bg-white text-gray-700 hover:bg-red-50"
              }`}
            >
              <Icon className="w-6 h-6 mr-3" />
              {label}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800">Total Uploads</h2>
            <p className="text-3xl font-semibold text-gray-700">{stats.totalUploads}</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800">Active Users</h2>
            <p className="text-3xl font-semibold text-gray-700">{stats.activeUsers}</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800">Pending Approvals</h2>
            <p className="text-3xl font-semibold text-gray-700">{stats.pendingApprovals}</p>
          </div>
        </div>

        {/* Upload List with Images and Delete Option */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent Uploads</h2>
          {uploads.length === 0 ? (
            <p className="text-gray-500">No uploads available.</p>
          ) : (
            <ul>
              {uploads.map((upload) => (
                <li key={upload.id} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg mb-2">
                  <div className="flex items-center gap-4">
                    <img src={upload.image} alt={upload.title} className="w-16 h-16 rounded-lg object-cover" />
                    <span className="text-gray-700 font-medium">{upload.title} ({upload.type})</span>
                  </div>
                  <button onClick={() => handleDelete(upload.id)} className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;