
import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-12 rounded-3xl border border-slate-100 shadow-sm">
        <h1 className="text-3xl font-bold text-slate-900 mb-8 border-b pb-6">Privacybeleid & Disclaimer</h1>
        
        <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">1. Algemeen</h2>
            <p>
              Schoolbots hecht grote waarde aan uw privacy en de bescherming van uw persoonsgegevens. In dit document leggen wij uit hoe wij omgaan met data op onze website en binnen onze diensten. Schoolbots is gevestigd te Amsterdam en ingeschreven bij de Kamer van Koophandel.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">2. Gegevensverwerking op de website</h2>
            <p>
              Wij verzamelen uitsluitend gegevens die u zelf aan ons verstrekt via het contactformulier (naam, e-mail, organisatie) met het doel om contact met u op te nemen over onze diensten.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">3. AI en Dataveiligheid</h2>
            <p>
              Bij de levering van onze AI-oplossingen maken wij gebruik van afgeschermde omgevingen. Gegevens die binnen deze oplossingen worden verwerkt, worden <strong>nooit</strong> gedeeld met derde partijen voor trainingsdoeleinden van grote taalmodellen. Wij werken uitsluitend met providers die voldoen aan de AVG-eisen en servers binnen de EU aanbieden.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">4. Disclaimer</h2>
            <p>
              Hoewel de informatie op deze website met de grootste zorg is samengesteld, kan Schoolbots geen aansprakelijkheid aanvaarden voor eventuele onjuistheden of de resultaten van het gebruik van de hier geboden informatie. De informatieve artikelen zijn bedoeld ter ondersteuning en kennisdeling; aan de inhoud kunnen geen rechten worden ontleend.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">5. Google AdSense</h2>
            <p>
              Deze website kan gebruikmaken van Google AdSense voor het weergeven van advertenties. Google gebruikt cookies om advertenties weer te geven op basis van uw eerdere bezoeken aan deze of andere websites. U kunt zich afmelden voor gepersonaliseerde advertenties door naar de Advertentie-instellingen van Google te gaan.
            </p>
          </section>

          <div className="pt-8 text-sm text-slate-400">
            Laatste update: April 2024
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
