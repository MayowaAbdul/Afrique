import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const REGIONS = [
  'All',
  'West Africa',
  'East Africa',
  'North Africa',
  'South Africa',
  'Central Africa',
  'Asia',
  'Europe',
  'America'
];

interface Comment {
  id: number;
  author: string;
  content: string;
  created_at: string;
}

interface Post {
  id: number;
  title: string;
  region: string;
  file_url: string;
  created_at: string;
  author_name: string;
  description: string;
  likes: number;
  comments: Comment[];
}

export default function Newsfeed() {
  const [posts, setPosts]     = useState<Post[]>([]);
  const [region, setRegion]   = useState<string>('All');

  useEffect(() => {
    axios.get<Post[]>('https://api.beamafrique.com/api/content/', {
      params: { section: 'news' }
    })
    .then(resp => setPosts(resp.data))
    .catch(console.error);
  }, []);

  const filtered = region === 'All'
    ? posts
    : posts.filter(p => p.region === region);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Latest News</h1>

      {/* Region Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {REGIONS.map(r => (
          <button
            key={r}
            onClick={() => setRegion(r)}
            className={`px-4 py-2 rounded-full ${
              region === r
                ? 'bg-green-700 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {r}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {filtered.map(post => (
          <article
            key={post.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={post.file_url}
              alt={post.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between text-sm text-gray-500 mb-2">
                <span className="text-green-700 font-medium">{post.region}</span>
                <span>
                  {new Date(post.created_at).toLocaleDateString()}
                </span>
              </div>
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {post.description}
              </p>
              <Link
                to={`/news/${post.id}`}
                className="text-green-700 font-medium hover:text-green-800"
              >
                Read More →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
