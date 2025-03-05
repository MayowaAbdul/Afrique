import { useState } from 'react';

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
  fullContent: string;
  location: string;
  time: string;
  registrationLink: string;
}

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const events: Event[] = [
    {
      id: 1,
      title: 'ETHIO-INVEST SUMMIT',
      description: 'A comprehensive investment summit focusing on opportunities in Ethiopia.',
      date: 'April 15-17, 2024',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      fullContent: `The ETHIO-INVEST SUMMIT is set to become the premier investment conference focused on Ethiopia's rapidly growing economy. This three-day event will bring together international investors, government officials, and business leaders to explore the vast opportunities in one of Africa's most dynamic markets.

      Key Focus Areas:
      • Agriculture and Agro-processing
      • Manufacturing and Industrial Parks
      • Technology and Digital Economy
      • Infrastructure Development
      • Tourism and Hospitality
      
      The summit will feature:
      • High-level keynote speeches
      • Interactive panel discussions
      • B2B networking sessions
      • Site visits to key investment projects
      • Cultural evening and gala dinner
      
      This is your opportunity to:
      • Connect with key decision-makers
      • Explore investment opportunities
      • Understand the regulatory environment
      • Build strategic partnerships
      • Experience Ethiopia's rich culture`,
      location: 'Sheraton Addis, Addis Ababa, Ethiopia',
      time: '9:00 AM - 6:00 PM (EAT)',
      registrationLink: '#'
    },
    {
      id: 2,
      title: 'PRIDE OF AFRICA AWARDS',
      description: 'Celebrating excellence and achievement across the African continent.',
      date: 'May 20, 2024',
      image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      fullContent: `The PRIDE OF AFRICA AWARDS is an annual celebration of excellence, innovation, and achievement across the African continent. This prestigious event recognizes outstanding individuals and organizations who have made significant contributions to Africa's development and global standing.

      Award Categories:
      • Business Leadership
      • Innovation & Technology
      • Arts & Culture
      • Environmental Sustainability
      • Social Impact
      • Lifetime Achievement
      
      Event Highlights:
      • Red carpet ceremony
      • Live performances by African artists
      • Networking reception
      • Gala dinner
      • After-party celebration
      
      Special Features:
      • International media coverage
      • Celebrity hosts and presenters
      • Exhibition of African art
      • Fashion showcase
      • Documentary screenings`,
      location: 'Kigali Convention Centre, Kigali, Rwanda',
      time: '6:00 PM - 11:00 PM (CAT)',
      registrationLink: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Upcoming Events</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-red-600 font-semibold mb-2">{event.date}</div>
                <h2 className="text-2xl font-bold mb-4">{event.title}</h2>
                <p className="text-gray-600 mb-6">{event.description}</p>
                <button 
                  onClick={() => setSelectedEvent(event)}
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 hover:scale-105 transition-all duration-300"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Advertisement Section */}
        <div 
          className="rounded-lg overflow-hidden relative bg-cover bg-center h-48 mb-12"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-2xl font-bold mb-2">Sponsor Our Events</h2>
              <p className="mb-4">Partner with us to reach a global audience</p>
              <button className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 hover:scale-110 transition-all duration-300">
                Become a Sponsor
              </button>
            </div>
          </div>
        </div>

        {/* Modal */}
        {selectedEvent && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <div className="text-sm text-red-600 font-semibold mb-2">{selectedEvent.date}</div>
                <h2 className="text-2xl font-bold mb-4">{selectedEvent.title}</h2>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold text-gray-700">Location</h3>
                      <p className="text-gray-600">{selectedEvent.location}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700">Time</h3>
                      <p className="text-gray-600">{selectedEvent.time}</p>
                    </div>
                  </div>
                </div>

                <div className="prose max-w-none">
                  {selectedEvent.fullContent.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-6 flex space-x-4">
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition duration-300"
                  >
                    Close
                  </button>
                  <a
                    href={selectedEvent.registrationLink}
                    className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300 text-center"
                  >
                    Register Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;