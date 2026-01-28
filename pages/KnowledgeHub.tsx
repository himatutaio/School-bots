
import React, { useState } from 'react';
import { Book, GraduationCap, Scale, ShieldAlert, ChevronRight, ArrowLeft, Share2, Calendar, User } from 'lucide-react';

interface Article {
  title: string;
  category: string;
  excerpt: string;
  date: string;
  img: string;
  content: string[];
}

const KnowledgeHub: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const categories = [
    { title: "Introductie", icon: <Book className="h-5 w-5" /> },
    { title: "Privacy & AVG", icon: <ShieldAlert className="h-5 w-5" /> },
    { title: "Pedagogiek", icon: <GraduationCap className="h-5 w-5" /> },
    { title: "Beleid", icon: <Scale className="h-5 w-5" /> }
  ];

  const articles: Article[] = [
    {
      title: "Wat elke schoolleider moet weten over de AI Act",
      category: "Beleid",
      excerpt: "De Europese Unie heeft strenge regels opgesteld voor het gebruik van AI in het onderwijs. Hoe bereidt u uw school voor op deze nieuwe wetgeving?",
      date: "14 April 2024",
      img: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=800&h=600",
      content: [
        "De AI Act is de eerste uitgebreide wetgeving ter wereld die de risico's van kunstmatige intelligentie reguleert. Voor scholen is dit van cruciaal belang omdat onderwijssystemen vaak worden geclassificeerd als 'hoog risico'.",
        "Concreet betekent dit dat AI-systemen die worden gebruikt voor de beoordeling van leerlingen of voor toegang tot onderwijsinstellingen aan strikte eisen moeten voldoen op het gebied van transparantie, menselijk toezicht en nauwkeurigheid.",
        "Schoolleiders moeten nu beginnen met het inventariseren van de tools die zij momenteel gebruiken. Is de leverancier klaar voor de AI Act? Is er een duidelijke documentatie van hoe de algoritmes werken?",
        "Bij Schoolbots helpen we scholen bij deze overgang door uitsluitend tools te ontwikkelen die 'compliant by design' zijn."
      ]
    },
    {
      title: "AI-privacy: Gegevensbescherming in de klas",
      category: "Privacy & AVG",
      excerpt: "Niet elke AI-tool is geschikt voor gebruik in de klas. Ontdek waar u op moet letten bij het afsluiten van verwerkersovereenkomsten.",
      date: "08 April 2024",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800&h=600",
      content: [
        "Data is het nieuwe goud, maar in het onderwijs is data vooral een grote verantwoordelijkheid. Wanneer een leerling een prompt typt in een AI-tool, wordt die data vaak verwerkt buiten Europa.",
        "De AVG stelt dat we persoonsgegevens van minderjarigen extra goed moeten beschermen. Veel gratis AI-tools voldoen hier simpelweg niet aan omdat ze de data gebruiken om hun eigen modellen te trainen.",
        "Een goede verwerkersovereenkomst is essentieel. Hierin moet staan dat data niet wordt opgeslagen voor training en dat de servers zich bij voorkeur in de EU bevinden.",
        "Onze Schoolbots infrastructuur is zo ingericht dat er een 'schil' om de AI zit, waardoor data geanonimiseerd wordt voordat het verwerkt wordt."
      ]
    },
    {
      title: "5 Manieren om AI zinvol in te zetten bij talenonderwijs",
      category: "Pedagogiek",
      excerpt: "Van gepersonaliseerde feedback tot interactieve gesprekspartners: zo helpt AI bij het leren van een nieuwe taal.",
      date: "22 Maart 2024",
      img: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=800&h=600",
      content: [
        "Talenonderwijs draait om interactie. AI kan dienen als een geduldige gesprekspartner die nooit moe wordt om een zin voor de tiende keer te corrigeren.",
        "Ten eerste: Real-time feedback op grammatica en zinsbouw. Ten tweede: Het simuleren van rollenspellen, zoals een bestelling doen in een Frans restaurant. Ten derde: Het vertalen van complexe teksten naar verschillende niveaus.",
        "Docenten kunnen AI ook gebruiken om gepersonaliseerde leeslijsten te maken op basis van de interesses van een individuele leerling.",
        "Het gaat niet om het vervangen van de dialoog in de klas, maar om het bieden van extra oefenkansen buiten de lesuren."
      ]
    },
    {
      title: "De rol van de docent in een AI-gestuurde toekomst",
      category: "Introductie",
      excerpt: "Zal AI de docent vervangen? Wij duiken in de veranderende rol van de onderwijsprofessional in de 21e eeuw.",
      date: "15 Maart 2024",
      img: "https://images.unsplash.com/photo-1507146482234-59c299c4ed07?auto=format&fit=crop&q=80&w=800&h=600",
      content: [
        "De angst dat technologie de docent overbodig maakt is van alle tijden. Van de radio tot de computer: de kern van het onderwijs is altijd de menselijke relatie gebleven.",
        "AI kan de 'ambachtsman' in de docent ontlasten. Het nakijken van meerkeuzevragen of het opstellen van lesplanningen kan geautomatiseerd worden.",
        "Wat overblijft is de rol van de coach, de mentor en de inspirator. AI heeft geen empathie en kan een kind niet troosten of echt motiveren op een menselijk niveau.",
        "De docent van de toekomst is een 'AI-orchestrator' die weet welke tools hij wanneer moet inzetten om het beste uit elke leerling te halen."
      ]
    }
  ];

  if (selectedArticle) {
    const waLink = `https://wa.me/31620151648?text=${encodeURIComponent(`Hallo Schoolbots, ik heb een vraag over het artikel: "${selectedArticle.title}"`)}`;

    return (
      <div className="py-12 md:py-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => setSelectedArticle(null)}
            className="flex items-center text-slate-500 hover:text-blue-600 font-medium mb-8 transition-colors group"
          >
            <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            Terug naar overzicht
          </button>

          <article>
            <img 
              src={selectedArticle.img} 
              alt={selectedArticle.title} 
              className="w-full h-64 md:h-[450px] object-cover rounded-3xl shadow-lg mb-10"
            />
            
            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-bold uppercase tracking-wider">
                {selectedArticle.category}
              </span>
              <div className="flex items-center text-slate-400 text-sm">
                <Calendar className="h-4 w-4 mr-1.5" />
                {selectedArticle.date}
              </div>
              <div className="flex items-center text-slate-400 text-sm">
                <User className="h-4 w-4 mr-1.5" />
                Redactie Schoolbots
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
              {selectedArticle.title}
            </h1>

            <div className="prose prose-lg prose-slate max-w-none space-y-6">
              {selectedArticle.content.map((paragraph, idx) => (
                <p key={idx} className="text-slate-600 leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-16 pt-10 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <button className="p-2 bg-slate-50 text-slate-400 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-all">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
              <div className="bg-slate-900 text-white px-8 py-6 rounded-3xl w-full sm:w-auto">
                <p className="font-bold mb-2">Vragen over dit onderwerp?</p>
                <p className="text-slate-400 text-sm mb-4">Wij helpen uw school graag bij de implementatie.</p>
                <a 
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 font-bold hover:underline"
                >
                  Stuur een WhatsApp <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-6">AI in het Onderwijs: Kennisbank</h1>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            Schoolbots deelt graag kennis. Wij geloven dat goed geïnformeerde scholen betere keuzes maken voor hun leerlingen. Hier vindt u artikelen over techniek, ethiek en beleid.
          </p>
        </div>

        {/* AdSense Placeholder Area (Conceptual) */}
        <div className="bg-slate-100 border-2 border-dashed border-slate-300 rounded-xl h-32 flex items-center justify-center text-slate-400 mb-12 text-sm italic">
          [ Informatieve advertenties ter ondersteuning van deze kennisbank ]
        </div>

        <div className="grid lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6">Categorieën</h3>
              <div className="space-y-2">
                {categories.map((cat, i) => (
                  <button key={i} className="flex items-center w-full px-4 py-3 rounded-xl hover:bg-slate-100 text-slate-700 transition-colors group text-left">
                    <span className="mr-3 text-slate-400 group-hover:text-blue-600 transition-colors">{cat.icon}</span>
                    <span className="font-medium">{cat.title}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-2xl">
              <h4 className="font-bold text-blue-900 mb-3">Newsletter</h4>
              <p className="text-sm text-blue-700 mb-4">Ontvang maandelijks updates over AI en onderwijsbeleid.</p>
              <input type="email" placeholder="uw@email.nl" className="w-full px-4 py-2 rounded-lg border border-blue-200 text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-bold">Inschrijven</button>
            </div>
          </aside>

          {/* Article List */}
          <main className="lg:col-span-3 grid gap-8">
            {articles.map((art, i) => (
              <article 
                key={i} 
                onClick={() => setSelectedArticle(art)}
                className="bg-white border border-slate-100 p-6 md:p-8 rounded-3xl hover:border-blue-100 hover:shadow-xl transition-all cursor-pointer flex flex-col md:flex-row gap-8 group"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold uppercase tracking-wider">{art.category}</span>
                    <span className="text-xs text-slate-400">{art.date}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{art.title}</h2>
                  <p className="text-slate-600 leading-relaxed mb-6 line-clamp-2">{art.excerpt}</p>
                  <button className="flex items-center text-blue-600 font-bold hover:underline">
                    Lees volledige artikel
                    <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                <div className="w-full md:w-48 h-40 md:h-auto bg-slate-50 rounded-2xl overflow-hidden flex-shrink-0">
                   <img src={art.img} className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" alt="Article thumbnail" />
                </div>
              </article>
            ))}
          </main>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeHub;
