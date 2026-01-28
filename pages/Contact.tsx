
import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, ArrowRight, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Contact met Schoolbots</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Heeft u vragen over onze AI-oplossingen? De snelste manier om met ons in contact te komen is via WhatsApp.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Primary Contact: WhatsApp */}
          <div className="bg-white p-10 md:p-12 rounded-3xl border-2 border-green-100 shadow-xl flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold bg-green-50 text-green-700 mb-8">
                <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                Snelste responstijd
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
                <MessageCircle className="h-8 w-8 text-green-500 mr-3" />
                WhatsApp Berichten
              </h2>
              <p className="text-slate-600 mb-10 text-lg leading-relaxed">
                Stuur ons een bericht via WhatsApp. Wij reageren zo snel mogelijk op uw vragen over projecten, prijzen of technische mogelijkheden.
              </p>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-center text-slate-700 font-medium">
                  <Clock className="h-5 w-5 text-slate-400 mr-3" />
                  Snelle reactie tijdens werkuren
                </div>
                <div className="flex items-center text-2xl font-bold text-slate-900">
                  +31 6 20151648
                </div>
              </div>
            </div>

            <a 
              href="https://wa.me/31620151648" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-green-600 text-white py-5 rounded-2xl font-bold text-xl flex items-center justify-center hover:bg-green-700 transition-all shadow-lg hover:shadow-green-200/50"
            >
              <MessageCircle className="h-6 w-6 mr-3" />
              Stuur nu een bericht
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>

          {/* Secondary Contact Info */}
          <div className="space-y-8 flex flex-col justify-between">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                <Phone className="h-5 w-5 text-blue-600 mr-3" />
                Bellen
              </h3>
              <p className="text-slate-600 leading-relaxed">
                U kunt ons ook telefonisch bereiken. Houd er echter rekening mee dat we wegens drukte niet altijd direct kunnen opnemen. Bij geen gehoor raden wij aan een WhatsApp-bericht te sturen.
              </p>
              <a href="tel:+31620151648" className="mt-4 block text-lg font-bold text-blue-600 hover:underline underline-offset-4">
                +31 6 20151648
              </a>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
              <div className="flex items-start">
                <div className="p-3 bg-blue-50 rounded-xl mr-5">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Email</h3>
                  <p className="text-slate-600">info@schoolbots.nl</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-blue-50 rounded-xl mr-5">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Locatie</h3>
                  <p className="text-slate-600">Amsterdam, Nederland</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-600 p-8 rounded-3xl text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
              <h3 className="text-xl font-bold mb-2">Projectaanvraag?</h3>
              <p className="text-blue-100 text-sm mb-6">
                Wilt u direct een offerte of adviesgesprek? Vermeld in uw WhatsApp-bericht kort uw schoolnaam en het type oplossing dat u zoekt.
              </p>
              <div className="flex items-center font-bold text-sm">
                Wij staan voor u klaar <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
