
import React from 'react';
import { ShieldCheck, Zap, MessageSquare, Database, ArrowRight, Sparkles, BrainCircuit, Users } from 'lucide-react';
import { PageType } from '../types';

interface HomeProps {
  onPageChange: (page: PageType) => void;
}

const Home: React.FC<HomeProps> = ({ onPageChange }) => {
  return (
    <div className="pb-20 pt-24 md:pt-32">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="text-center relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/20 rounded-full blur-[100px] -z-10"></div>
          
          <div className="inline-flex items-center px-4 py-2 rounded-2xl text-xs font-bold bg-white border border-slate-200 shadow-sm text-blue-600 mb-8 animate-float">
            <Sparkles className="h-3.5 w-3.5 mr-2" />
            AI-PARTNER VOOR HET ONDERWIJS
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-8">
            Bouw de toekomst van <br />
            <span className="text-gradient">onderwijs met AI</span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto">
            Wij leveren geen bulk-tools, maar <strong>verantwoorde maatwerk-oplossingen</strong> die scholen echt vooruit helpen. Privacy-proof, AVG-geschikt en direct inzetbaar.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => onPageChange('services')}
              className="w-full sm:w-auto bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-xl hover:shadow-blue-500/20 flex items-center justify-center group text-lg"
            >
              Onze AI Oplossingen
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => onPageChange('contact')}
              className="w-full sm:w-auto glass text-slate-700 px-10 py-5 rounded-2xl font-bold hover:bg-white transition-all flex items-center justify-center text-lg"
            >
              Gratis Consult
            </button>
          </div>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Feature */}
          <div className="md:col-span-8 bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm bento-card flex flex-col justify-between overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -mr-20 -mt-20 blur-3xl opacity-50"></div>
            <div>
              <div className="bg-blue-100 text-blue-600 p-3 rounded-2xl w-fit mb-6">
                <BrainCircuit className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-4">Intelligente Chatbots op Maat</h3>
              <p className="text-lg text-slate-600 max-w-lg mb-8">
                Onze bots praten niet alleen; ze begrijpen uw curriculum, beantwoorden vragen van ouders op basis van uw schoolgids en ondersteunen leerlingen 24/7.
              </p>
            </div>
            <div className="flex -space-x-4">
              {[1,2,3,4].map(n => (
                <img key={n} className="w-12 h-12 rounded-full border-4 border-white object-cover" src={`https://i.pravatar.cc/150?u=${n+20}`} alt="user" />
              ))}
              <div className="w-12 h-12 rounded-full border-4 border-white bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-400">+50</div>
            </div>
          </div>

          {/* Secondary Feature 1 */}
          <div className="md:col-span-4 bg-slate-900 rounded-[2.5rem] p-10 text-white bento-card flex flex-col justify-between">
            <div className="bg-white/10 p-3 rounded-2xl w-fit mb-6">
              <ShieldCheck className="h-8 w-8 text-blue-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">AVG & Privacy First</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Wij garanderen dat leerlingdata de EU nooit verlaat. Onze schil om LLM's anonimiseert alles voordat het verwerkt wordt.
              </p>
            </div>
          </div>

          {/* Secondary Feature 2 */}
          <div className="md:col-span-4 bg-blue-600 rounded-[2.5rem] p-10 text-white bento-card flex flex-col justify-between">
            <div className="bg-white/20 p-3 rounded-2xl w-fit mb-6">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Razendsnelle Integratie</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Geen maandenlange trajecten. Onze modulaire opbouw zorgt dat uw school binnen 2 weken een werkende AI-pilot heeft.
              </p>
            </div>
          </div>

          {/* Big Feature 2 */}
          <div className="md:col-span-8 bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm bento-card flex flex-col md:flex-row gap-10">
            <div className="flex-1 flex flex-col justify-center">
              <div className="bg-emerald-100 text-emerald-600 p-3 rounded-2xl w-fit mb-6">
                <Database className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-4">Administratie op Autopilot</h3>
              <p className="text-lg text-slate-600 mb-6">
                Verwerk absentie, genereer rapportages en vat vergaderingen samen met gespecialiseerde AI-agents.
              </p>
              <button onClick={() => onPageChange('services')} className="text-blue-600 font-bold flex items-center hover:underline">
                Bekijk automatiseringen <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
            <div className="flex-1 bg-slate-50 rounded-3xl p-6 flex items-center justify-center">
               <div className="space-y-4 w-full">
                  <div className="h-8 bg-white rounded-lg shadow-sm w-3/4 animate-pulse"></div>
                  <div className="h-8 bg-white rounded-lg shadow-sm w-full animate-pulse delay-75"></div>
                  <div className="h-8 bg-white rounded-lg shadow-sm w-1/2 animate-pulse delay-150"></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Stats / Social Proof */}
      <section className="bg-slate-50 py-32 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "AI Implementaties", value: "25+" },
              { label: "Bespaarde uren/week", value: "400+" },
              { label: "AVG Score", value: "100%" },
              { label: "Blije Docenten", value: "500+" }
            ].map((stat, i) => (
              <div key={i} className="group">
                <div className="text-4xl md:text-5xl font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{stat.value}</div>
                <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Ultra Modern */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <div className="bg-slate-900 rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-600/20 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2"></div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 relative z-10">
            Klaar om de regie <br />te pakken?
          </h2>
          <p className="text-xl text-slate-400 mb-12 relative z-10 max-w-xl mx-auto">
            Wacht niet tot innovatie u overkomt. Werk samen met Schoolbots en bepaal zelf hoe AI uw school versterkt.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
            <button 
              onClick={() => onPageChange('contact')}
              className="bg-white text-slate-900 px-12 py-5 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all shadow-2xl active:scale-95"
            >
              Start Vandaag
            </button>
            <a 
              href="https://wa.me/31620151648"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-12 py-5 rounded-2xl font-bold text-lg hover:bg-green-700 transition-all shadow-2xl active:scale-95 flex items-center justify-center"
            >
              <MessageSquare className="h-5 w-5 mr-3" />
              Direct WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
