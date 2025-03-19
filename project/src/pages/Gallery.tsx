import { useState } from 'react';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';
import img8 from '../assets/img8.jpg';
import img10 from '../assets/img10.jpg';
import img12 from '../assets/img12.jpg';

const images = [
  img1, img2, img3, img4, img5, img6, img8, img10, img12,
];

const Gallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Photo Gallery</h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition duration-300 cursor-pointer"
              onClick={() => openModal(index)}
            >
              <img
                src={image}
                alt={`Gallery Photo ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {modalOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center">
            <div className="relative max-w-4xl max-h-[90vh]"> {/* Fixed modal height */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white text-3xl z-10"
              >
                &times;
              </button>
              <div className="flex items-center justify-center h-full"> {/* Center image vertically */}
                <img
                  src={images[currentImageIndex]}
                  alt={`Gallery Photo ${currentImageIndex + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
                <button
                  onClick={prevImage}
                  className="bg-gray-800 text-white px-4 py-2 rounded"
                >
                  Previous
                </button>
                <button
                  onClick={nextImage}
                  className="bg-gray-800 text-white px-4 py-2 rounded"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;