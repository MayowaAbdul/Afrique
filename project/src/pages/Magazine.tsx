import { useState } from 'react';
import Abiy from '../assets/Abiy.jpg';
import Bishoftu from '../assets/Bishoftu.avif'

interface MagazineIssue {
  id: number;
  title: string;
  date: string;
  summary: string;
  content: string;
  image: string;
}

const Magazine = () => {
  const [selectedIssue, setSelectedIssue] = useState<MagazineIssue | null>(null);
  const [modalContent, setModalContent] = useState<string | null>(null);

  const magazineIssues: MagazineIssue[] = [
    {
      id: 1,
      title: "Meet The New Ethopian PM",
      date: "March 1, 2025",
      summary: "Dive into the life of a new dawn in Ethiopia.",
      content: "Dr. Abiy Ahmed Ali, Ethiopia’s Prime Minister since April 2, 2018, was born on August 15, 1976. His childhood name, Abiyot, meaning ‘Revolution,’ reflects his journey as a social activist and administrator. His rise to power was driven by a three-year revolutionary protest and Ethiopia’s first leadership election within the Ethiopian Peoples’ Revolutionary Democratic Front (EPRDF). More than his military background, his thirst for knowledge and commitment to practicality shaped his success. Dr. Abiy’s educational journey began in his hometown, excelling in Agaro town for his secondary education. His decision to learn the Tigrigna language as a member of the Oromo Peoples’ Democratic Organization (OPDO) demonstrated his strategic foresight. Rising through the military ranks, he became an intelligence expert and later joined the United Nations Peacekeeping Force in Rwanda in 1995. His pursuit of education continued alongside his military service, earning degrees in Computer Engineering, Cryptography, and later, a Ph.D. in Peace and Security Studies from Addis Ababa University. His leadership skills emerged early when he successfully mediated inter-religious conflicts in his hometown of Beshasha. His Ph.D. thesis on social capital in conflict resolution underscored his commitment to peacebuilding. His role in co-founding the Ethiopian Information Network Security Agency (INSA) in 2007 and serving as Deputy and Acting Director further established him as a key figure in Ethiopia’s political and security landscape. Transitioning into politics in 2010, Dr. Abiy became a member of Ethiopia’s Parliament, representing the Agaro constituency. His rapid ascent continued as he gained leadership roles within OPDO and the EPRDF. Following the resignation of former Prime Minister Hailemariam Desalegn in early 2018, Abiy emerged as OPDO’s candidate in Ethiopia’s first-ever prime ministerial election. Despite opposition from some factions, he secured victory, marking a new era in Ethiopian politics. On April 2, 2018, Dr. Abiy Ahmed was sworn in as Ethiopia’s 13th Prime Minister. His inaugural speech emphasized hope, unity, and reform, setting high expectations for Ethiopia’s future. His leadership journey exemplifies the power of knowledge, resilience, and a commitment to national service, offering an inspiring model for leadership across Africa and beyond.",
      image: Abiy
    },
    {
      id: 2,
      title: "Bishoftu: ",
      date: "March 8, 2024",
      summary: "Check Africa’s Industrial Capital In The Making",
      content: "Bishoftu, located 45km southeast of Addis Ababa in Ethiopia’s Oromiya Province, is rapidly transforming into an economic hub. Known as the 'land of many lakes, it is surrounded by scenic landscapes, lakes, farmlands, and a mix of ancient and modern settlements. The town is home to the Bishoftu Automotive Engineering Industry, a remarkable testament to Ethiopia’s commitment to technological advancement and self-reliance in the automotive sector. This industry specializes in automobile engineering, including vehicle design, manufacturing, and assembly of both military and commercial vehicles. It also offers consultancy and training in automotive technology. The facility produces a wide range of vehicles, from luxury city buses and school buses to mini trucks, dump trucks, water trucks, and station wagons. Additionally, it houses bicycle and motorcycle assembly lines, further expanding its scope. Operated with a disciplined, militarized structure, the Bishoftu Automotive Engineering Industry is overseen by a military captain, with Captain Sisey Tessema serving as the General Manager of the Bus Factory Division. The facility employs 3,600 workers, with a near-equal distribution of men and women. It also provides opportunities for engineering graduates to gain practical experience. The Ethiopian government’s focus on import substitution has driven the growth of this industry, ensuring a steady supply of high-quality, locally made vehicles. A key strategy behind Ethiopia’s automotive development is its deliberate policy to reduce reliance on imported vehicles by imposing high tariffs, encouraging citizens to support locally produced alternatives. As a result, roads in Addis Ababa and beyond are filled with homegrown vehicles, reinforcing the nation’s vision for economic self-sufficiency. Moreover, Ethiopia’s efficient and affordable public rail system has become a model of transport accessibility, serving both the masses and the affluent. Despite being a landlocked nation dependent on Djibouti for port services, Ethiopia has successfully pursued a robust economic recovery plan since 1992. By maximizing its available resources and mobilizing skilled professionals from across the globe, the country has transitioned from being one of the world’s poorest nations to a rising industrial force in Africa. Through initiatives like Bishoftu, Ethiopia is steadily positioning itself as the continent’s next industrial powerhouse and a beacon of economic transformation.",
      image: Bishoftu
    }
  ];

  const openModal = (issue: MagazineIssue) => {
    setSelectedIssue(issue);
    setModalContent(issue.content);
  };

  return (
    <div className="min-h-screen bg-red-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">BeamAfrique Magazine</h1>
        
        <div className="grid md:grid-cols-4 gap-6">
          {magazineIssues.map((issue) => (
            <div key={issue.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <img src={issue.image} alt={issue.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <span className="text-sm text-gray-500">{issue.date}</span>
                <h3 className="text-lg font-semibold mt-2 mb-2">{issue.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{issue.summary}</p>
                <button 
                  onClick={() => openModal(issue)}
                  className="w-full bg-red-600 text-white py-2 rounded-lg text-sm hover:bg-red-700 transition duration-300"
                >
                  Read Online
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedIssue && modalContent && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-sm text-gray-500">{selectedIssue.date}</span>
                    <h2 className="text-3xl font-bold mt-2">{selectedIssue.title}</h2>
                  </div>
                  <button
                    onClick={() => setSelectedIssue(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <img src={selectedIssue.image} alt={selectedIssue.title} className="w-full h-96 object-cover rounded-lg mb-6" />
                <div className="prose max-w-none">
                  {modalContent.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-gray-700 leading-relaxed">{paragraph}</p>
                  ))}
                </div>
                <div className="mt-8 flex space-x-4">
                  <button
                    onClick={() => setSelectedIssue(null)}
                    className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition duration-300"
                  >
                    Close
                  </button>
                  <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition duration-300">
                    Download Issue
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Magazine;