import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  ArrowLeft, Heart, MessageCircle, Share2, Trash2
} from 'lucide-react';
import {
  FacebookShareButton, FacebookIcon,
  TwitterShareButton, TwitterIcon,
  LinkedinShareButton, LinkedinIcon,
  WhatsappShareButton, WhatsappIcon
} from 'react-share';

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

export default function NewsArticle() {
  const { id } = useParams<{ id: string }>();
  const nav    = useNavigate();
  const [post, setPost]       = useState<Post | null>(null);
  const [newComment, setNewComment] = useState('');
  const [showShare, setShowShare]   = useState(false);

  useEffect(() => {
    axios.get<Post>(`https://api.beamafrique.com/api/content/${id}/`)
      .then(r => setPost(r.data))
      .catch(console.error);
  }, [id]);

  if (!post) return <p className="p-12 text-center">Loading…</p>;

  const handleLike = () => {
    axios.post<{ likes: number }>(
      `https://api.beamafrique.com/api/content/${id}/like/`
    )
    .then(r => setPost({ ...post, likes: r.data.likes }))
    .catch(console.error);
  };

  const submitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    axios.post<Comment>(
      `https://api.beamafrique.com/api/content/${id}/comment/`,
      { author: 'Guest', content: newComment }
    )
    .then(r => {
      setPost({ ...post, comments: [...post.comments, r.data] });
      setNewComment('');
    })
    .catch(console.error);
  };

  const shareUrl = window.location.href;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <button
        onClick={() => nav(-1)}
        className="flex items-center text-green-700 mb-4"
      >
        <ArrowLeft className="mr-2" /> Back
      </button>

      <img
        src={post.file_url}
        alt={post.title}
        className="w-full h-60 object-contain rounded-lg mb-6"
      />

      <div className="flex justify-between text-sm text-gray-500 mb-2">
        <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full">
          {post.region}
        </span>
        <span>{new Date(post.created_at).toLocaleDateString()}</span>
      </div>

      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-600 mb-6">By {post.author_name}</p>
      <p className="text-gray-700 mb-8 whitespace-pre-line">
        {post.description}
      </p>

      <div className="flex items-center gap-6 border-y py-4 mb-8">
        <button
          onClick={handleLike}
          className={`flex items-center gap-1 ${
            post.likes > 0 ? 'text-red-500' : 'text-gray-500'
          }`}
        >
          <Heart /> {post.likes}
        </button>
        <button className="flex items-center gap-1 text-gray-500">
          <MessageCircle /> {post.comments.length}
        </button>

        <div className="relative">
          <button
            onClick={() => setShowShare(!showShare)}
            className="flex items-center gap-1 text-gray-500"
          >
            <Share2 /> Share
          </button>
          {showShare && (
            <div className="absolute top-full left-0 mt-2 bg-white p-2 rounded shadow flex gap-2">
              <FacebookShareButton url={shareUrl}>
                <FacebookIcon size={32} round />
              </FacebookShareButton>
              <TwitterShareButton url={shareUrl}>
                <TwitterIcon size={32} round />
              </TwitterShareButton>
              <LinkedinShareButton url={shareUrl}>
                <LinkedinIcon size={32} round />
              </LinkedinShareButton>
              <WhatsappShareButton url={shareUrl}>
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>
            </div>
          )}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Comments</h2>
        <form onSubmit={submitComment} className="mb-6">
          <textarea
            value={newComment}
            onChange={e => setNewComment(e.target.value)}
            placeholder="Write a comment..."
            className="w-full p-4 border rounded-lg mb-2"
            rows={3}
          />
          <button className="px-6 py-2 bg-green-700 text-white rounded-lg">
            Post Comment
          </button>
        </form>
        <div className="space-y-4">
          {post.comments.map(c => (
            <div key={c.id} className="p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between text-sm text-gray-500 mb-1">
                <span>{c.author}</span>
                <span>
                  {new Date(c.created_at).toLocaleDateString()}
                </span>
              </div>
              <p>{c.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
