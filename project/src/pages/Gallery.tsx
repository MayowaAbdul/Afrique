import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';
import img7 from '../assets/img7.jpg';
import img8 from '../assets/img8.jpg';
import img9 from '../assets/img9.jpg';
import img10 from '../assets/img10.jpg';
import img11 from '../assets/img11.jpg';
import img12 from '../assets/img12.jpg';

const Gallery = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Photo Gallery</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Photo Grid */}
          {[1,].map((photo) => (
            <div
              key={photo}
              className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
            >
              <img
                src={img1}
                alt={`Gallery Photo ${photo}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          {[2].map((photo) => (
            <div
              key={photo}
              className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
            >
              <img
                src={img2}
                alt={`Gallery Photo ${photo}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          {[3].map((photo) => (
            <div
              key={photo}
              className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
            >
              <img
                src={img3}
                alt={`Gallery Photo ${photo}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          {[4].map((photo) => (
            <div
              key={photo}
              className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
            >
              <img
                src={img4}
                alt={`Gallery Photo ${photo}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          {[5].map((photo) => (
            <div
              key={photo}
              className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
            >
              <img
                src={img5}
                alt={`Gallery Photo ${photo}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          {[6].map((photo) => (
            <div
              key={photo}
              className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
            >
              <img
                src={img6}
                alt={`Gallery Photo ${photo}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          {[7].map((photo) => (
            <div
              key={photo}
              className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
            >
              <img
                src={img7}
                alt={`Gallery Photo ${photo}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          {[8].map((photo) => (
            <div
              key={photo}
              className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
            >
              <img
                src={img8}
                alt={`Gallery Photo ${photo}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          {[9].map((photo) => (
            <div
              key={photo}
              className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
            >
              <img
                src={img9}
                alt={`Gallery Photo ${photo}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          {[10].map((photo) => (
            <div
              key={photo}
              className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
            >
              <img
                src={img10}
                alt={`Gallery Photo ${photo}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          {[11].map((photo) => (
            <div
              key={photo}
              className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
            >
              <img
                src={img11}
                alt={`Gallery Photo ${photo}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          {[12].map((photo) => (
            <div
              key={photo}
              className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
            >
              <img
                src={img12}
                alt={`Gallery Photo ${photo}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
          
          
    </div>
  );
};

export default Gallery;