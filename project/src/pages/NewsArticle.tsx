import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, MessageCircle, Share2 } from 'lucide-react';
import hon from '../assets/hon.jpg';
import nana from '../assets/nana.jpg';
import abdel from '../assets/abdel.jpg';
import kenya from '../assets/kenya.jpg';
import travel from '../assets/travel.jpg';
import camsea from '../assets/camsea.jpg';
import staff from '../assets/staff.jpg';
import { 
  FacebookShareButton, 
  TwitterShareButton, 
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon
} from 'react-share';

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
 {
    id: 4,
    title: 'Kenya, Dominican Republic Sign Agreement to Support Security Mission in Haiti',
    region: 'East Africa',
    image: kenya,
    excerpt: 'Kenya and the Dominican Republic have signed a bilateral agreement aimed at boosting the current security mission in Haiti. ',
    date: '2025-05-13',
    content: ` The deal, which was signed on Monday, 12th May 2025, is a package of assistance to the Kenyan police participating in a UN-backed Multinational Security Support Mission.
The Multinational Security Support (MSS) Mission in Haiti is an international police and military force approved by the United Nations Security Council on 2nd October 2023 to assist the government of Haiti in restoring law and order amid worsening civil strife and gang violence since 2018. 
The mission is led by Kenya and coordinated with the Haitian National Police; though backed by the UNSC, it is not a United Nations operation.
For Kenya, Musalia Mudavadi, the East African Nation’s First Cabinet Secretary and Foreign Secretary signed the deal while Foreign Minister Roberto Alvarez appended his signature.
The deal would ensure that Kenyan police receive both medical and repatriation support in case of emergencies.
Haiti’s National Police, bolstered by a U.N.-backed mission led by Kenyan police, has struggled in its fight against gangs as the mission remains underfunded and understaffed, with only 1,000 personnel of the 2,500 envisioned.
Kenyan police have constantly come under attack, with a few casualties reported.
Gangs that control at least 85% of Port-au-Prince have launched recent attacks on previously peaceful areas that police and armed residents are trying to protect.
More than 5,600 people were killed in Haiti last year, with gang violence leaving more than one million people homeless. In February and March alone, 1,086 people were killed and 383 injured, according to the U.N.`,
    author: 'Rasheed Olokode',
    tags: ['Security', 'World', 'Kenya']
  },
   {
    id: 5,
    title: 'Africas Travel Indaba 2025 kicks off in South Africa',
    region: 'East Africa',
    image: travel,
    excerpt: 'Africas Travel Indaba ',
    date: '2025-05-13',
    content: ` JOHANNESBURG, May 13 -- Africa's Travel Indaba 2025 officially kicked off with pomp and pageantry in South Africa on Tuesday.
An iconic African leisure trade show, the Africa’s Travel Indaba is owned and organized by South African Tourism with the main objective of creating market access to South Africa’ vast array of tourism products.  
The 2025 edition, a three-day event (May 13 – 15), themed Unlimited Africa, hosts some 1,300 exhibitors and 1,200 buyers from 55 countries, with a focus on promoting inter-African travel and breaking down barriers. 
The opening ceremony, graced by the crème-de-la-crème of the South African Nation and of the global tourism held industry, held in the Coastal City of Durban, KwaZulu-Natal
At the event, South Africa’s Deputy President, Paul Mashatile, called for collective action to promote sustainable tourism across the African continent, as he highlighted Africa's rich cultural heritage and economic opportunities in the tourism sector.
Tourism, according to him, is projected to contribute 10.4 percent to Africa's gross domestic product (GDP) by 2030, up from the current 6.8 percent. In South Africa alone, tourism currently contributes 8.9 percent to the GDP and supports 1.68 million jobs, with plans to increase this to over two million by 2030.
Mashatile, however, acknowledged challenges facing the continent, including political strife, poverty, unemployment, and inequality, which have led to widespread hardship and violence.
"These issues require our collective action. This gathering must confront these challenges and uncover enduring solutions. Africa can overcome any obstacle that stands in her path. However, the key to overcoming lies in our ability to work together," he said.
Having emphasized the universal roles of tourism as a significant economic engine, a catalyst for social change and a cornerstone of inclusive growth, he proceeded to state the core essence of the annual South Africa’s tourism festival.  
"Therefore, Africa's Travel Indaba stands as a beacon of what is possible when we act together. It reminds us that tourism is not just about travel -- it is about connection, empowerment, and shared belief. It is about promoting each other's markets and harnessing what we have as diverse nations," he said.
"This gathering and those that follow ought to act as sparks for greater regional cooperation, enabling African nations to present themselves together as diverse yet unified destinations," he added.
By prescribing the integration of technologies, innovation, and sustainable practices into the tourism strategies, the Gerhardsville-born former anti-Apartheid activist unveiled the South African Government’s recipe for a better tomorrow.
"We need to invest more in skills development and digital transformation for the tourism sector to thrive. We must foster innovation and sustainable practices to ensure long-term economic growth," Mashatile stated.
"Let us celebrate the bond that unites Africa, honoring the vibrant cultures, breathtaking landscapes, and the incredible people that make this continent shine with brilliance," he concluded. "Let us demonstrate to the world that Africa is ready for business." Enditem
`,
    author: 'Rasheed Olokode',
    tags: ['Sports', 'Africa', 'World']
  },
  {
    id: 6,
    title: 'Cameroon Opens Sea Port',
    region: 'East Africa',
    image: camsea,
    excerpt: 'Cameroon’s 2nd Phase of Deep Seaport Opens for Operation',
    date: '2025-05-13',
    content: ` YAOUNDE, May 9 — Cameroonian authorities on Friday inaugurated the second phase of Kribi Deep Seaport in the southern part of the country, noting that the new maritime facility opens a new vista of economic development for the Central African nation.
Constructed by the China Harbor Engineering Company Ltd. (CHEC), the Kribi Deep Seaport is the first deep seaport in Cameroon and the biggest in the Central Africa region.
To mark the inauguration, MSC Turkiye, one of the world’s largest container ships with a capacity of 24,346 TEU, docked at the port on the eve of the occasion.
“The start of operation for the second phase of Kribi Deep Seaport opens a new era for our economic growth. The structural transformation of our economic is a major challenge. For the government, Kribi seaport was constructed for a decisive step for the industrialization of Cameroon,” said Cameroon’s Minister of Transport Jean Ernest Massena Ngalle Bibehe who attended the ceremony.
This photo taken on May 9, 2025 shows MSC Türkiye, one of the world’s largest container ships with a capacity of 24,346 TEU, docking at the Kribi Deep Seaport for the commissioning ceremony of the second phase of the port, in Kribi, Cameroon.He said that the port had become indispensable in improving the competitiveness of companies in the country and is now a reference in the Gulf of Guinea.
“The Kribi Deep Seaport stands as one of the flagship projects of China-Cameroon cooperation and serves as a model for China-Africa collaboration under the Belt and Road Initiative. The first phase container berth has already surpassed its designed capacity,” said Chen Ze, general manager of CHEC Central Africa Division said while addressing dignitaries at the occasion.
The first phase of the port became operational in 2018, giving a boost to the country’s economy, while construction of the second phase began in 2019. 
Culled from cameroononline.org`,
    author: 'Rasheed Olokode',
    tags: ['Transport', 'Cameroon', 'World']
  },
    {
    id: 7,
    title: 'Nigerian-British Lady emerges as UK’s Youngest Mayor',
    region: 'West Africa',
    image: staff,
    excerpt: 'Youngest Female Mayor',
    date: '2025-05-18',
    content: ` A 29 year-old Nigerian-British, Princess Opeyemi Bright, has set a world record on the political terrain of the United Kingdom, as she got elected and inaugurated as the Mayor of the London Borough of Barking and Dagenham. 
This epoch development, undoubtedly a historical moment for Nigerians in the Diaspora, the Nigerian Nation, Africa in general and youth leadership globally, was officially celebrated via the inauguration which took place on Friday, May 16, 2025. 
Born in Homerton Hospital and a resident of Barking and Dagenham, Opeyemi was previously elected as a Councilor in 2018 at just 22 years old. Before then, she had served as a school governor, a board member of Agile Africa, an NGO that equips young people with tech skills,  being a passionate mentor to aspiring leaders and professionals. In her spare time, she enjoys cooking, teaching, creating contents and hosting career webinars for youth in Nigeria.

She succeeds Moin Quadri, who served with distinction over the past year in an office that is one of the Borough’s oldest and most cherished roles, with a rich history of representing the Borough’s heritage, values, and community spirit.


As Mayor, Opeyemi will act as an ambassador for Barking and Dagenham, celebrating its diversity, promoting local initiatives, and strengthening community bonds.

In her inaugural address, she shared her vision of civic leadership grounded in inclusivity, pride, and community service: “I believe in the power of community, the importance of tradition, and the need to inspire pride in the place we all call home. As Civic Mayor, I am committed to being a voice that uplifts our Borough — honouring local heroes, supporting charities, and forging deeper connections with residents, schools, and businesses.”


A former director at four different top companies including the May & Baker Eastbrook Community Club Limited, this youngest Mayor in the history of the UK so far, brings a wealth of experience in community engagement and public service. Her longstanding work with grassroots organizations reflects a deep understanding of the Borough’s needs, as well as a passion for creating positive change.
“This is nothing short of God’s grace,” a highly elated Opeyemi said during her inauguration.  “I’m proud to serve my Borough, and as a proud Nigerian, I will represent my heritage with humility and excellence. May this journey inspire others to lead, serve, and rise.”

It is noteworthy that Opeyemi’s political journey began early. Elected as a councilor at just 22, she has spent the last seven years championing youth empowerment, social inclusion, and economic opportunities within her Borough. Her dedication to service is deeply rooted in her upbringing.

`,
    author: 'Rasheed Olokode',
    tags: ['Politics', 'United Kingdom', 'World']
  },
];

interface Comment {
  id: number;
  author: string;
  content: string;
  date: string;
}

function NewsArticle() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const article = articles.find(a => a.id === Number(id));
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<Comment[]>([]);

  if (!article) {
    return <div className="text-center py-12">Article not found</div>;
  }

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  const handleComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;

    const newComment: Comment = {
      id: comments.length + 1,
      author: 'Anonymous User',
      content: comment,
      date: new Date().toISOString()
    };

    setComments([...comments, newComment]);
    setComment('');
  };

  const shareUrl = window.location.href;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      <img
        src={article.image}
        alt={article.title}
        className="w-full h-60 object-contain"
      />

      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
            {article.region}
          </span>
          <span className="text-gray-500">{article.date}</span>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">{article.title}</h1>
        <p className="text-gray-700 font-medium">By {article.author}</p>
      </div>

      <div className="prose max-w-none mb-8">
        {article.content.split('\n\n').map((paragraph, index) => (
          <p key={index} className="text-gray-600 mb-4">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="flex items-center gap-6 mb-8 border-t border-b py-4">
        <button
          onClick={handleLike}
          className={`flex items-center gap-2 ${liked ? 'text-red-500' : 'text-gray-500'}`}
        >
          <Heart className={`w-6 h-6 ${liked ? 'fill-current' : ''}`} />
          <span>{likes} Likes</span>
        </button>

        <button className="flex items-center gap-2 text-gray-500">
          <MessageCircle className="w-6 h-6" />
          <span>{comments.length} Comments</span>
        </button>

        <div className="relative">
          <button
            onClick={() => setShowShareMenu(!showShareMenu)}
            className="flex items-center gap-2 text-gray-500"
          >
            <Share2 className="w-6 h-6" />
            <span>Share</span>
          </button>

          {showShareMenu && (
            <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg p-4 flex gap-4">
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
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Comments</h2>
        <form onSubmit={handleComment} className="mb-6">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write a comment..."
            className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            rows={3}
          />
          <button
            type="submit"
            className="mt-2 px-6 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800"
          >
            Post Comment
          </button>
        </form>

        <div className="space-y-6">
          {comments.map((comment) => (
            <div key={comment.id} className="bg-gray-50 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">{comment.author}</span>
                <span className="text-sm text-gray-500">
                  {new Date(comment.date).toLocaleDateString()}
                </span>
              </div>
              <p className="text-gray-600">{comment.content}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
          >
            #{tag}
          </span>
        ))}
      </div>
            <button
        onClick={() => navigate('/newsfeed')}
        className="flex items-center text-green-700 hover:text-green-800 group"
      >
        <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
        Back to Newsfeed
      </button>
    </div>
  );
}

export default NewsArticle;