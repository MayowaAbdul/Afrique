import { useState } from 'react';
import { X } from 'lucide-react';
import hon from '../assets/hon.jpg';
import nana from '../assets/nana.jpg';
import abdel from '../assets/abdel.jpg';

const regions = [
  'West Africa',
  'East Africa',
  'North Africa',
  'South Africa',
  'Central Africa',
  'Asia',
  'Europe',
  'America'
];

const articles = [
  {
    id: 1,
    title: 'Malawi: Opposition Political Party, Police Authorities and Ambassadors of Peace Condemn Political Violence',
    region: 'South Africa',
    image: hon,
    excerpt: 'Opposition Political Party, Police Authorities',
    date: '2025-05-13',
    content: `The Malawian main opposition party, the Democratic Progressive Party (DPP); an NGO, the International Ambassadors of Peace Network; and the Malawian Police authorities have separately condemned the recent political violence incident in Malawi. 

It will be recalled that on Sunday, May 11 2025, a violent attack against some supporters of the Country’s main opposition party, the Democratic Progressive Party (DPP), allegedly occurred at the Mponela Town in the Dowa District of the Malawian Capital.

According to a report by the Malawian Freedom Network, a mini bus transporting a group of the DPP supporters from a political rally addressed by the Country’s former Vice President for the Central Region, Alfred Gangata, was attacked and set ablaze by some gunmen, resulting in some serious injuries. 
In a swift response, the DPP, speaking through a public statement by the Leader of the Opposition in the Parliament, George T. Chaponda, vigorously berated the incident as “…not only barbaric…but also utterly unacceptable…”. 
Chaponda, who is also a career diplomat, in the statement, noted that the “…Mponela is fast becoming a chilling symbol of political terror…” while asserting that “the violence is not isolated,,,” but a systematic one consciously staged “…to instill fears in the hearts of opposition supporters, to silence dissent, and to weaken democratic engagement, as we approach the September 16, 2025 General Elections”.
He charged the Malawian Police Service to “rise above mere verbal condemnation and take swift concrete action”, and also requested the international community and diplomatic corps in Malawi to step up their monitoring and stakeholder engagement responsibilities in a bid “to ensure that peace, tolerance and the rule of law prevail”.
And, in a more poignant manner, the DPP has called out the current Malawian ruling Party, the Malawi Congress Party (MCP). 
In a trending social media video, the DPP Youth Director accuses the MCP youths of orchestrating the attack, alleging that the ruling party is targeting opposition members through violence.
According to a report by Nyasa Times, the MCP has swiftly countered the claims via its Deputy Publicity Secretary, Ken Msonda. 
Msonda was quoted as saying that the MCP is "unfazed" by the plethora of accusations, vowing that his Party “…stands by democratic values and has no motive to harm anyone”.
Furthermore, he suggested that the incident might have been staged by the DPP  “…as a political smear tactic to damage the ruling party's image”, while calling on the Malawi Police “…to break their silence and conduct a full investigation into the matter”.
In its own response, the Malawi Police Service (MPS), in a terse press statement, dated 12th May 2025,  “…strongly condemns acts of politically motivated violence that took place at the Mponela Trading Centre in Dowa…”. 
In the document signed by Mr. Peter Kalaya, an Assistant Commissioner of Police and the Service Public Relation Officer, the Service disclosed that it has “…launched investigations into the incident to bring to book those responsible…” while urging political parties to “…refrain from open provocations and promote peaceful co-existence”.
Finally, the Service "…reaffirms its commitment to maintaining law and order and calls on all political parties to honour their pledge of peace made ahead of the campaign period”.    

International Ambassadors of Peace Network Promptly Responds
Similarly, the International Ambassadors of Peace Network has lend its weighty voice to the widespread condemnation of the unfortunate Mponela incident.
In an emergency meeting convened to address the latest breach of the peace in the Southeastern African Nation, the Network, in its characteristics peace advocacy and mediation antidotes to global crises, strongly denounced political violence as an abomination in human societies.
In his keynote address, Abukari Inbrana, the Global Ambassador of Peace, in unequivocal terms, repudiated the status and realities of violence, describing it as “an act of violation of basic human rights…” which “…should not be appreciated”. 
And, why should political violence not be appreciated or patronized? Abdul Ibrahim , the Organization’s Director of International Relations, provided the answer during the peace advocacy meeting. 
In his words,  “Elections will come and go; power will come and go too; but putting the Country first should be the main intention of development of basic human values”.
That was not all. The patriotism pill prescribed by Ibrahim found befitting complement in the submissions of his Colleague, Ms Mariam Botwey, the Director of Women and Child Development of the global Champion of Peace Organization. 
Botwey  urged the political parties “…to put politics aside and concentrate on the impact that the political fraternity will give to the future of Malawi youth children and women”.
She reasoned that “…the youth and children are the future residents of a country…” who must not be exposed or subjected to violence in their budding days.
About female folks, she averred that “women are an integral part of every society and if violence prevails then it becomes difficult for women to contribute towards the growth of the family and the country at large”.
It is noteworthy that the the International Ambassadors of Peace Network under the headship of Abukari Inbrana has become globally reputed for such proactive steps as its latest Malawi efforts. Its past epochal efforts and feats in Central America’s Belize. Africa’s Botswana, Mauritius, Mozambique, Namibia, Tunisia, South Africa and Ghana will ever remain indelible in global history.
`,
    author: 'Rasheed Olokode',
    tags: ['Politics', 'World', 'Malawi']
  },
    {
    id: 2,
    title: 'Ghana to celebrate the Cedi @ 60 in Grand Style',
    region: 'West Africa',
    image: nana,
    excerpt: 'CEDI@ 60',
    date: '2025-05-13',
    content: `It is no news that the Cedi was adopted as the official currency of Ghan 60 years ago., what is however newsworthy is the planned celebration of this national milestone with pomp and pageantry by the West African Nation globally reputed  as the hub of gold in Africa, Ghana.
According to Graphic Online, a Ghanaian news site, the Bank of Ghana has unveiled a series of grand events scheduled to hold nationwide, between July and December 2025 to commemorate this epochal feat. .
According to the report, this plan was contained in a Press Statement, dated May 13, 2025 and signed by the Bank’s Secretary, Ms Sandra Thompson, the Cedi is an enduring symbol of Ghana’s economic independence and progress over the past six decades.
The commemorative activities, according to the official document, will include official launches, public exhibitions, educational campaigns, and fora involving stakeholders across the country. The package also includes a platform to engage the public on the importance of monetary stability and the use of digital financial tools.
The statement reiterates that the sixty-year old currency had undergone several changes in form and policy direction to cater for Ghana’s changing economic needs at varying times, while describing it as a reflection of the country’s resilient efforts to attain a stable and inclusive economy.
“This anniversary offers an opportunity for Ghanaians to reflect on the history of the Cedi, to celebrate the progress made, and to reaffirm our collective responsibility to protect the value and integrity of the currency,” the Statement states.
The Bank of Ghana reaffirms its goal of maintaining a stable Cedi as part of its broader role in managing inflation and protecting the value of the national currency.
The Cedi was introduced on July 19, 1965, replacing the Ghanaian Pound as the country’s sole legal tender.
`,
    author: 'Rasheed Olokode',
    tags: ['Celebration', 'World', 'Ghana']
  },
      {
    id: 3,
    title: 'Egypt Recovers 25 Rare Smuggled Artifacts',
    region: 'North Africa',
    image: abdel,
    excerpt: 'Egypt Recovers Rare Artifacts',
    date: '2025-05-13',
    content: `The Egyptian Foreign Affairs Ministry has recovered 25 Egyptian antiques that had been hitherto looted and smuggled out of the North African Country.
This positive development was disclosed by Egypt’s Emigration and Expatriates Minister, Badr Abdelatty, who said that they were recovered through the Egyptian Consulate General in New York
According to Abdelatty, these repatriated artifacts, which date back to various eras of ancient Egyptian civilization, are distinguished by their great historical and artistic value.
He described the success as the end result of the Committee for the Recovery of Smuggled Antiquities, formed by the Ministry of Foreign Affairs and the Ministry of Tourism and Antiquities.
While emphasizing the importance Egypt attaches to the retrieval of smuggled Egyptian antiquities, the elated Minister commended the tireless efforts of Egyptian embassies and consulates abroad, in conjunction with the Ministry of Tourism and Antiquities, the Egyptian General Prosecutor's Office, and relevant state agencies, to recover the artifacts.
The recovered collection includes stone and wooden coffin lids, funerary masks made of pottery and gilded wood, a large alabaster vessel, and a portrait of a woman from the city of Fayum, reflecting the mastery of realistic portraiture during the Greco-Roman era.
There were also various pieces of jewelry made of various metals, a rare gold coin dating back to the reign of Ptolemy I, and small bronze and stone statues depicting aspects of Egyptian belief and art from various historical periods.
The return of the artifacts was the result of a joint effort between the Egyptian Consulate General in New York, the New York City District Attorney's Office, and US security agencies, as well as lengthy negotiations with several individual owners of these artifacts, with support from the Cultural Sector of the Ministry of Foreign Affairs.

`,
    author: 'Rasheed Olokode',
    tags: ['Artifacts', 'World', 'Egypt']
  },
];

function Newsfeed() {
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedArticle, setSelectedArticle] = useState<typeof articles[0] | null>(null);

  const filteredArticles = selectedRegion === 'All'
    ? articles
    : articles.filter(article => article.region === selectedRegion);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Latest News</h1>

      {/* Region Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedRegion('All')}
            className={`px-4 py-2 rounded-full ${
              selectedRegion === 'All'
                ? 'bg-green-700 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            All
          </button>
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`px-4 py-2 rounded-full ${
                selectedRegion === region
                  ? 'bg-green-700 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {region}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {filteredArticles.map((article) => (
          <article key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full aspect-video object-cover object-center"
            />
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-green-700 font-medium">{article.region}</span>
                <span className="text-sm text-gray-500">{article.date}</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">{article.title}</h2>
              <p className="text-gray-600 mb-4">{article.excerpt}</p>
              <button 
                onClick={() => setSelectedArticle(article)}
                className="text-green-700 font-medium hover:text-green-800"
              >
                Read More →
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full aspect-video object-cover object-center"
              />
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  {selectedArticle.region}
                </span>
                <span className="text-gray-500 text-sm">{selectedArticle.date}</span>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {selectedArticle.title}
              </h2>
              
              <div className="flex items-center mb-6">
                <div>
                  <p className="text-gray-700 font-medium">By {selectedArticle.author}</p>
                </div>
              </div>

              <div className="prose max-w-none">
                {selectedArticle.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-600 mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {selectedArticle.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Newsfeed;