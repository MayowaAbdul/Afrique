import { Globe2, Users, BookOpen, Map, Building2, Languages } from 'lucide-react';
import rasheed from '../assets/rasheed.jpg';
import charles from '../assets/charles.jpg';
import benjamin from '../assets/benja.jpg';
import rabecca from '../assets/rabecca.jpg';
import adewale from '../assets/adewale.jpg';
import roy from '../assets/roy.jpg';
import olasumbo from '../assets/olasumbo.jpg';
import akunna from '../assets/akunna.jpg';
import redeit from '../assets/redeit.jpg';

const About = () => {
  const features = [
    {
      icon: Globe2,
      title: 'Global Reach',
      description: 'Connecting Africa to the world through authentic storytelling and journalism.'
    },
    {
      icon: Users,
      title: 'Pan-African Team',
      description: 'Our diverse team spans across all regions of Africa and beyond.'
    },
    {
      icon: BookOpen,
      title: 'Multilingual Content',
      description: 'Publishing in English, French, and Chinese to reach a global audience.'
    },
    {
      icon: Map,
      title: 'Continental Coverage',
      description: 'Comprehensive coverage of all African regions and international news.'
    },
    {
      icon: Building2,
      title: 'Strategic Presence',
      description: 'Offices across Africa, Europe, America, and Asia.'
    },
    {
      icon: Languages,
      title: 'Cultural Bridge',
      description: 'Fostering understanding between Africa and the global community.'
    }
  ];

  return (
    <div className="min-h-screen bg-red-50">
      {/* Hero Section */}
      <section 
        className="relative py-20 bg-cover bg-center text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1447069387593-a5de0862481e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About BeamAfrique</h1>
          <p className="text-xl max-w-2xl">
            Your trusted source for authentic African narratives, connecting the continent to the world through comprehensive media coverage.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <feature.icon className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold mb-4 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg border-l-4 border-red-600">
              <h2 className="text-2xl font-bold mb-4 text-red-600">Mission Statement</h2>
              <p className="text-gray-700 leading-relaxed">
                To fill the vacuum of objectivity as well as eradicate subjectivity in the global projection of Africa through a piece that speaks to a multi-lingual world in a bid to boost a win-win socio-cultural and economic relationship between Africa and the rest of the world.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border-l-4 border-green-600">
              <h2 className="text-2xl font-bold mb-4 text-green-600">Vision Statement</h2>
              <p className="text-gray-700 leading-relaxed">
                To emerge as the most authoritative, multilingual media voice on African socio-cultural and economic history, reality and prospects, erected on a pan-African ownership structure and worldwide circulation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Global Network</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-red-600">African Offices</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-red-600 rounded-full"></span>
                  <span className="text-gray-700">Global HQ: Kigali, Rwanda</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-red-600 rounded-full"></span>
                  <span className="text-gray-700">Editorial HQ: Lagos, Nigeria</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-red-600 rounded-full"></span>
                  <span className="text-gray-700">West Africa: Accra, Ghana</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-red-600 rounded-full"></span>
                  <span className="text-gray-700">East Africa: Addis Ababa, Ethiopia</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-red-600 rounded-full"></span>
                  <span className="text-gray-700">Southern Africa: Lusaka, Zambia</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-green-600">International Offices</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-green-600 rounded-full"></span>
                  <span className="text-gray-700">Europe: London, United Kingdom</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-green-600 rounded-full"></span>
                  <span className="text-gray-700">America: New York, USA</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-green-600 rounded-full"></span>
                  <span className="text-gray-700">Asia: Beijing, China</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-red-50">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Meet the Team</h2>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
      {[
        {
          name: "RASHEED OLOKODE",
          role: "Editor-in-Chief",
          image: rasheed,
          location: "Nigerian"
        },
        {
          name: "CHARLES KUNGWENGWE",
          role: "Editor",
          image: charles,
          location: "Zimbabwean"
        },
        {
          name: "BENJAMIN SAKYI",
          role: "Feature Editor",
          image: benjamin,
          location: "Ghanian"
        },
        {
          name: "RABECCA MUTEKA",
          role: "Bureau Chief",
          image: rabecca,
          location: "South African"
        },
        {
          name: "ADEWALE KAZEEM",
          role: "Graphics Designer",
          image: adewale,
          location: "Nigerian"
        },
        {
          name: "DR. ROY MANOHAR",
          role: "Bureau Chief",
          image: roy,
          location: "Indian"
        },
        {
          name: "OLASUNMBO OJOMU",
          role: "Associate Publisher/Deputy Editor",
          image: olasumbo,
          location: "Nigerian"
        },
        {
          name: "AKUNNA ASONYE",
          role: "Graphic Artist",
          image: akunna,
          location: "Nigerian"
        },
        {
          name: "REDEIT MESHESHA",
          role: "Bureau Chief",
          image: redeit,
          location: "East African"
        },
      ].map((member, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition duration-300">
          <img
            src={member.image}
            alt={member.name}
            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
          />
          <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
          <p className="text-red-600 font-medium">{member.role}</p>
          <p className="text-black-600 font-medium">{member.location}</p>
        </div>
      ))}
    </div>
  </div>
</section>
    </div>
  );
};

export default About;