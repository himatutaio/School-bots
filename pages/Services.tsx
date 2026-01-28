
import React from 'react';
import { Bot, Cpu, LineChart, Users, Settings, Lock, Check, Info, Sparkles } from 'lucide-react';
import { PageType } from '../types';

interface ServicesProps {
  onPageChange: (page: PageType) => void;
}

const Services: React.FC<ServicesProps> = ({ onPageChange }) => {
  const services = [
    {
      icon: <Bot className="h-8 w-8" />,
      title: "Educatieve Chatbots",
      price: "€1.495,-",
      period: "éénmalig",
      recurring: "+ €45,- p/m service",
      desc: "Op maat gemaakte chatbots die leerlingen ondersteunen bij specifieke vakken of vragen van ouders 24/7 beantwoorden. Volledig getraind op uw eigen documentatie.",
      features: ["Vakinhoudelijke kennis", "Interactieve tutoring", "24/7 Ouderportaal support"],
      color: "bg-blue-600",
      lightColor: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Procesautomatisering",
      price: "Vanaf €1.850,-",
      period: "per traject",
      recurring: "Projectbasis",
      desc: "Slimme AI-agents die repetitieve administratieve taken overnemen. Van verwerking van formulieren tot het genereren van standaard communicatie en notulen.",
      features: ["Vergader-samenvatter", "Formulier automatisering", "Email-drafting agents"],
      color: "bg-indigo-600",
      lightColor: "bg-indigo-50",
      textColor: "text-indigo-600"
    },
    {
      icon: <LineChart className="h-8 w-8" />,
      title: "Data-analyse Oplossingen",
      price: "Vanaf €1.650,-",
      period: "per module",
      recurring: "Inzicht & Advies",
      desc: "Transformeer schooldata naar bruikbare inzichten. Herken trends in leerlingresultaten of uitvalrisico's voordat ze een probleem worden.",
      features: ["Resultaten-dashboard", "Uitvalrisico voorspelling", "Geanonimiseerde rapportage"],
      color: "bg-emerald-600",
      lightColor: "bg-emerald-50",
      textColor: "text-emerald-600"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Implementatie & Training",
      price: "€850,-",
      period: "per dagdeel",
      recurring: "Incompany",
      desc: "AI is pas waardevol als het team het gebruikt. Wij begeleiden docenten en ICT-coördinatoren bij de veilige inzet van AI-tools.",
      features: ["Hands-on workshops", "Beleidsontwikkeling", "AVG-veiligheid training"],
      color: "bg-orange-600",
      lightColor: "bg-orange-50",
      textColor: "text-orange-600"
    }
  ];

  return (
    <div className="py-24 space-y-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-100 rounded-full blur-[100px] -z-10 opacity-60"></div>
        <h1 className="text-5xl font-black text-slate-900 mb-6">Diensten & <span className="text-blue-600">Eerlijke Tarieven</span></h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Geen uurtje-factuurtje of vage schattingen. Wij werken met vaste prijzen en modulaire pakketten die passen bij een schoolbudget.
        </p>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
        {services.map((service, idx) => (
          <div key={idx} className="group bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col">
            <div className="p-10 flex-grow">
              <div className="flex justify-between items-start mb-8">
                <div className={`${service.lightColor} ${service.textColor} p-4 rounded-2xl`}>
                  {service.icon}
                </div>
                <div className="text-right">
                  <div className="text-3xl font-black text-slate-900 leading-none">{service.price}</div>
                  <div className="text-xs font-black text-slate-400 uppercase tracking-widest mt-2">{service.period}</div>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h2>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg">{service.desc}</p>
              
              <div className="space-y-4">
                {service.features.map((f, i) => (
                  <div key={i} className="flex items-center text-sm font-bold text-slate-700">
                    <div className={`${service.color} w-1.5 h-1.5 rounded-full mr-4`}></div>
                    {f}
                  </div>
                ))}
              </div>
            </div>

            <div className="px-10 pb-10">
               <button 
                onClick={() => onPageChange('contact')}
                className={`w-full py-5 ${service.color} text-white font-bold rounded-2xl hover:scale-[1.02] transition-all shadow-lg active:scale-95 flex items-center justify-center`}
              >
                Start deze oplossing
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Pricing Philosophy - Enhanced Visual */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="h-6 w-6 text-blue-400" />
                <h2 className="text-3xl font-bold">Waarom we voordeliger zijn</h2>
              </div>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Wij zijn technische bouwers, geen gladde verkopers. Bij ons betaalt u voor code en resultaat, niet voor het glazen kantoorpand van de consultancy-partner.
              </p>
              <div className="space-y-4">
                 <div className="flex items-center gap-4 text-blue-100 font-medium">
                    <Check className="h-5 w-5 text-blue-400" /> Geen uurtarief maar projectprijzen
                 </div>
                 <div className="flex items-center gap-4 text-blue-100 font-medium">
                    <Check className="h-5 w-5 text-blue-400" /> 100% focus op onderwijs-specifieke tech
                 </div>
                 <div className="flex items-center gap-4 text-blue-100 font-medium">
                    <Check className="h-5 w-5 text-blue-400" /> Direct contact via WhatsApp (geen overhead)
                 </div>
              </div>
            </div>
            <div className="bg-white/5 p-10 rounded-[2rem] border border-white/10 text-center flex flex-col items-center">
               <div className="text-6xl font-black text-white mb-2">35%</div>
               <p className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-8">Besparing op implementatie</p>
               <p className="text-slate-400 text-sm">Vergeleken met algemene tech-integrators bespaart u bij ons aanzienlijk op zowel opstart- als onderhoudskosten.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2.5rem] border border-slate-100 p-12 shadow-sm flex flex-col md:flex-row gap-12 items-center">
          <div className="bg-blue-50 p-6 rounded-3xl">
            <Lock className="h-12 w-12 text-blue-600" />
          </div>
          <div className="flex-1">
             <h3 className="text-2xl font-black text-slate-900 mb-3">Altijd Inbegrepen: AVG & Compliance</h3>
             <p className="text-slate-600 leading-relaxed">
               Elk project komt standaard met een verwerkersovereenkomst en een technisch rapport over dataveiligheid. Wij hosten alles op EU-servers en anonimiseren data bij de bron.
             </p>
          </div>
          <div className="flex gap-4">
             <div className="px-5 py-2 rounded-full bg-slate-100 text-slate-500 font-bold text-xs uppercase">EU Hosting</div>
             <div className="px-5 py-2 rounded-full bg-slate-100 text-slate-500 font-bold text-xs uppercase">AVG-Proof</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
