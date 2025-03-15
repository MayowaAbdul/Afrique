import React, { useState, useEffect } from "react";
import axios from "axios";
import { Upload, Video, Newspaper, Tv, Calendar, BookOpen, BarChart, Trash2 } from "lucide-react";
// import rasheed from '../assets/rasheed.jpg';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("overview");
  // Initialize with an empty array if you want to rely on API data.
  const [uploads, setUploads] = useState<any[]>([]);
  const [stats, setStats] = useState({ totalUploads: 0, activeUsers: 0, pendingApprovals: 0 });

  // Dummy sections for navigation
  const sections = [
    { id: "overview", icon: BarChart, label: "Overview" },
    { id: "home", icon: Video, label: "Home Ads" },
    { id: "news", icon: Newspaper, label: "News Content" },
    { id: "tv", icon: Tv, label: "TV Content" },
    { id: "events", icon: Calendar, label: "Event Ads" },
    { id: "magazine", icon: BookOpen, label: "Magazine Content" }
  ];

  // Fetch uploads whenever the activeSection changes
  useEffect(() => {
    // For example, if your API endpoint is /api/upload/ and expects a section parameter:
    axios
      .get('http://127.0.0.1:8000/api/upload/', { params: { section: activeSection } })
      .then((response) => {
        setUploads(response.data);
        console.log("Fetched uploads:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching uploads:", error);
      });
  }, [activeSection]);

  // You can also fetch stats from an API endpoint if available:
  useEffect(() => {
    // Example: axios.get('/api/stats/').then(...);
    // For now, let's assume these values are updated from API response
    setStats({ totalUploads: 100, activeUsers: 25, pendingApprovals: 5 });
  }, []);

  const handleDelete = async (id: number) => {
    try {
      // Assume all posts are deleted via a common endpoint; adjust if necessary.
      await axios.delete(`http://127.0.0.1:8000/api/upload/${id}/`);
      setUploads((prevUploads) => prevUploads.filter((upload) => upload.id !== id));
    } catch (error) {
      console.error("Error deleting post:", error);
      // Optionally show a notification here
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8 pt-10">Dashboard</h1>

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

        {/* Stats */}
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

        {/* Upload List with Delete Option */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent Uploads</h2>
          {uploads.length === 0 ? (
            <p className="text-gray-500">No uploads available.</p>
          ) : (
            <ul>
              {uploads.map((upload) => (
                <li key={upload.id} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg mb-2">
                  <div className="flex items-center gap-4">
                    <img
                      src={upload.image}
                      alt={upload.title}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <span className="text-gray-700 font-medium">
                      {upload.title} ({upload.type})
                    </span>
                  </div>
                  <button
                    onClick={() => handleDelete(upload.id)}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                  >
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
