import React, { useState } from 'react';
import axios from 'axios';
import { Upload, Video, Newspaper, Tv, Calendar, BookOpen } from 'lucide-react';

const SECTIONS = [
  { id: 'home', icon: Video,      label: 'Home Ads'    },
  { id: 'news', icon: Newspaper,  label: 'News Content'},
  { id: 'tv',   icon: Tv,         label: 'TV Content'  },
  { id: 'events', icon: Calendar, label: 'Event Ads'   },
  { id: 'magazine', icon: BookOpen,label: 'Magazine'   },
];

export default function Admin() {
  const [active, setActive] = useState('home');
  const [uploadForm,   setUploadForm]   = useState<any>({ file: null, title: '', description: '', region:'West Africa', youtube_url: '' });
  const [magForm,      setMagForm]      = useState<any>({ cover_image: null, title:'', date:'', summary:'', content:'' });
  const [isUploading,  setUploading]    = useState(false);

  const REGIONS = [
    'West Africa','East Africa','North Africa','South Africa',
    'Central Africa','Asia','Europe','America'
  ];

  const onFileChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    if(!e.target.files) return;
    active==='magazine'
      ? setMagForm({ ...magForm, cover_image: e.target.files[0] })
      : setUploadForm({ ...uploadForm, file: e.target.files[0] });
  };

  const onChange = (e:any) => {
    const { name, value } = e.target;
    active==='magazine'
      ? setMagForm({ ...magForm, [name]:value })
      : setUploadForm({ ...uploadForm, [name]:value });
  };

  const onSubmit = async (e:React.FormEvent) => {
    e.preventDefault();
    setUploading(true);
    const fd = new FormData();

    try {
      if(active==='magazine') {
        fd.append('cover_image', magForm.cover_image);
        ['title','date','summary','content']
          .forEach(f=> fd.append(f, magForm[f]));
        await axios.post('https://api.beamafrique.com/api/magazine/', fd);
        setMagForm({ cover_image:null, title:'', date:'', summary:'', content:'' });

      } else {
        fd.append('file', uploadForm.file);
        ['title','description','region','youtube_url']
          .forEach(f=> fd.append(f, uploadForm[f]||''));
        fd.append('section', active);
        await axios.post('https://api.beamafrique.com/api/upload/', fd);
        setUploadForm({ file:null, title:'', description:'', region:'West Africa', youtube_url:'' });
      }

      alert('Uploaded!');
    } catch(err) {
      console.error(err);
      alert('Upload failed');
    } finally {
      setUploading(false);
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-green-50 py-20">
      <h1 className="text-5xl text-center mb-12">Admin Dashboard</h1>

      {/* tabs */}
      <div className="flex justify-center gap-4 mb-12">
        {SECTIONS.map(s => (
          <button
            key={s.id}
            onClick={()=>setActive(s.id)}
            className={`px-8 py-4 rounded-xl font-semibold ${
              active===s.id
                ? 'bg-red-600 text-white'
                : 'bg-white text-gray-700 hover:bg-red-50'
            }`}
          >
            <s.icon className="inline-block w-5 h-5 mr-2" />{s.label}
          </button>
        ))}
      </div>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl mb-8">{SECTIONS.find(s=>s.id===active)?.label} Upload</h2>

        {/* file */}
        <div className="mb-8">
          <label className="block mb-2">Upload {active==='magazine'?'Image':'File'}</label>
          <input type="file" onChange={onFileChange}/>
        </div>

        {/* common fields */}
        {active==='magazine' ? (
          <>
            <input name="title"       value={magForm.title}   onChange={onChange} placeholder="Title"       className="w-full mb-4" required/>
            <input name="date"        type="date"              value={magForm.date}    onChange={onChange} className="w-full mb-4" required/>
            <textarea name="summary"  value={magForm.summary} onChange={onChange} rows={2} placeholder="Summary" className="w-full mb-4" required/>
            <textarea name="content"  value={magForm.content} onChange={onChange} rows={6} placeholder="Content" className="w-full mb-4" required/>
          </>
        ) : (
          <>
            <input    name="title"       value={uploadForm.title}       onChange={onChange} placeholder="Title"       className="w-full mb-4" required/>
            <textarea name="description" value={uploadForm.description} onChange={onChange} rows={4} placeholder="Description" className="w-full mb-4" required/>
            {active==='news' && (
              <select name="region" value={uploadForm.region} onChange={onChange} className="w-full mb-4">
                {REGIONS.map(r=> <option key={r}>{r}</option>)}
              </select>
            )}
            {active==='tv' && (
              <input name="youtube_url" value={uploadForm.youtube_url}
                     onChange={onChange} placeholder="YouTube URL"
                     className="w-full mb-4" required/>
            )}
          </>
        )}

        <button
          type="submit" disabled={isUploading}
          className="w-full bg-red-600 text-white py-3 rounded-xl"
        >
          {isUploading ? 'Uploading…' : 'Upload'}
        </button>
      </form>
    </div>
  );
}