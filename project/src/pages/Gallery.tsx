const Gallery = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Photo Gallery</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Photo Grid */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((photo) => (
            <div
              key={photo}
              className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
            >
              <img
                src={`https://images.unsplash.com/photo-${1500000000000 + photo}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`}
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