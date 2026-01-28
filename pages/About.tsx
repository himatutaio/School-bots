
import React from 'react';
import { Target, Heart, Eye } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-20 space-y-24">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Over Schoolbots</h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Schoolbots is ontstaan vanuit een passie voor onderwijs en een fascinatie voor technologie. Wij geloven dat AI de sleutel is tot een meer gepersonaliseerde en minder administratief belaste schoolomgeving.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-12">
        <div className="space-y-6">
          <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
            <Target className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Onze Missie</h2>
          <p className="text-slate-600 leading-relaxed">
            Scholen in staat stellen om de kracht van AI te benutten op een verantwoorde, ethische en transparante manier, zonder dat dit ten koste gaat van de privacy van leerlingen.
          </p>
        </div>

        <div className="space-y-6">
          <div className="h-12 w-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center">
            <Eye className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Onze Visie</h2>
          <p className="text-slate-600 leading-relaxed">
            Een toekomst waarin elke docent een AI-ondersteuner heeft voor administratie, zodat de menselijke aandacht volledig gericht kan zijn op de ontwikkeling van het kind.
          </p>
        </div>

        <div className="space-y-6">
          <div className="h-12 w-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center">
            <Heart className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Onze Waarden</h2>
          <p className="text-slate-600 leading-relaxed">
            Transparantie, betrouwbaarheid en privacy zijn de pijlers van ons werk. Wij zijn niet zomaar een techbedrijf, we zijn een partner in onderwijsvernieuwing.
          </p>
        </div>
      </section>

      {/* Leadership / Team (Simplified) */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Waarom kiezen voor een specialist?</h2>
              <div className="space-y-6 text-slate-600">
                <p>
                  In tegenstelling tot algemene AI-bedrijven begrijpen wij de structuur van Nederlandse schoolbesturen, de werking van het ELO en de strikte AVG-afspraken binnen de sector.
                </p>
                <p>
                  Schoolbots is meer dan een bouwer; we zijn een partner die meedenkt over de lange termijn. Wij geloven in duurzame techniek die ook over vijf jaar nog waarde toevoegt aan uw onderwijsinstelling.
                </p>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 grid grid-cols-2 gap-4">
               <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400&h=400" className="rounded-2xl shadow-sm object-cover" alt="Samenwerking aan AI oplossingen" />
               <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400&h=400" className="rounded-2xl shadow-sm object-cover" alt="Technisch team bij Schoolbots" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
