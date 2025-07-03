import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Upload, Video, Newspaper, Tv, Calendar,
  BookOpen, BarChart, Trash2
} from "lucide-react";

const SECTIONS = [
  { id: "overview", label: "Overview", icon: BarChart },
  { id: "home",     label: "Home Ads",  icon: Video },
  { id: "news",     label: "News",      icon: Newspaper },
  { id: "tv",       label: "TV",        icon: Tv },
  { id: "events",   label: "Events",    icon: Calendar },
  { id: "magazine", label: "Magazine",  icon: BookOpen },
];

export default function Dashboard() {
  const [active, setActive] = useState("overview");
  const [uploads, setUploads] = useState<any[]>([]);
  const [stats]   = useState({ totalUploads: 100, activeUsers: 25, pendingApprovals: 5 });

  // build the right URL & params for each section
  useEffect(() => {
    let url = "";
    let params = {};

    if (active === "news") {
      url = "https://api.beamafrique.com/api/content/";
      params = { section: "news" };
    } else if (active === "magazine") {
      url = "https://api.beamafrique.com/api/magazines/";
    } else if (active !== "overview") {
      url = "https://api.beamafrique.com/api/upload/";
      params = { section: active };
    } else {
      // overview: fetch *all* generic uploads
      url = "https://api.beamafrique.com/api/upload/";
    }

    axios.get(url, { params })
      .then(r => setUploads(r.data))
      .catch(console.error);
  }, [active]);

  const handleDelete = async (id: number) => {
    let url = "";
    if (active === "news") {
      url = `https://api.beamafrique.com/api/content/${id}/`;
    } else if (active === "magazine") {
      url = `https://api.beamafrique.com/api/magazine/${id}/`;
    } else {
      url = `https://api.beamafrique.com/api/upload/${id}/`;
    }

    await axios.delete(url).catch(console.error);
    setUploads(us => us.filter(u => u.id !== id));
  };

  // pick correct image prop:
  const getImg = (u: any) =>
    active === "magazine" ? u.cover_image : u.file;

  // pretty‐up the type label:
  const getType = (u: any) =>
    active === "magazine"
      ? "Magazine"
      : active === "news"
        ? "News"
        : u.section?.charAt(0).toUpperCase()+u.section?.slice(1);

  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Dashboard</h1>

      {/* Section Tabs */}
      <div className="flex justify-center gap-4 mb-8">
        {SECTIONS.map(s => (
          <button
            key={s.id}
            onClick={() => setActive(s.id)}
            className={`px-6 py-3 rounded-xl font-semibold transform transition ${
              active===s.id
                ? "bg-red-600 text-white"
                : "bg-white hover:bg-red-50 text-gray-700"
            }`}
          >
            <s.icon className="inline-block w-5 h-5 mr-2" />
            {s.label}
          </button>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 px-4">
        {Object.entries(stats).map(([k,v]) => (
          <div key={k} className="bg-white p-6 rounded-2xl shadow-md text-center">
            <h2 className="font-bold text-gray-800">{k.replace(/([A-Z])/g,' $1')}</h2>
            <p className="text-3xl font-semibold">{v}</p>
          </div>
        ))}
      </div>

      {/* Uploads List */}
      <div className="bg-white p-6 rounded-2xl shadow-xl max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Recent {active.charAt(0).toUpperCase()+active.slice(1)}</h2>
        {uploads.length === 0 ? (
          <p className="text-gray-500">No uploads.</p>
        ) : (
          <ul className="space-y-2">
            {uploads.map(u => (
              <li key={u.id} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center gap-4">
                  <img src={getImg(u)} className="w-16 h-16 object-cover rounded-lg" />
                  <span className="font-medium text-gray-700">
                    {u.title} <small>({getType(u)})</small>
                  </span>
                </div>
                <button
                  onClick={() => handleDelete(u.id)}
                  className="text-white bg-red-600 p-2 rounded-lg hover:bg-red-700"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
