
import React from 'react';
import { Bot, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { PageType } from '../types';

interface FooterProps {
  onPageChange: (page: PageType) => void;
}

const Footer: React.FC<FooterProps> = ({ onPageChange }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center text-white">
              <Bot className="h-8 w-8 text-blue-400 mr-2" />
              <span className="text-2xl font-bold">Schoolbots</span>
            </div>
            <p className="text-sm leading-relaxed">
              Professionele AI-oplossingen op maat voor scholen. Wij vertalen technologische kansen naar concrete onderwijsoplossingen.
            </p>
          </div>

          {/* Navigatie */}
          <div>
            <h3 className="text-white font-semibold mb-6">Navigatie</h3>
            <ul className="space-y-4 text-sm">
              <li><button onClick={() => onPageChange('home')} className="hover:text-white transition-colors">Home</button></li>
              <li><button onClick={() => onPageChange('services')} className="hover:text-white transition-colors">Diensten</button></li>
              <li><button onClick={() => onPageChange('knowledge')} className="hover:text-white transition-colors">AI in Onderwijs</button></li>
              <li><button onClick={() => onPageChange('about')} className="hover:text-white transition-colors">Over Schoolbots</button></li>
            </ul>
          </div>

          {/* Juridisch */}
          <div>
            <h3 className="text-white font-semibold mb-6">Informatie</h3>
            <ul className="space-y-4 text-sm">
              <li><button onClick={() => onPageChange('privacy')} className="hover:text-white transition-colors">Privacybeleid</button></li>
              <li><button onClick={() => onPageChange('privacy')} className="hover:text-white transition-colors">Disclaimer</button></li>
              <li><button onClick={() => onPageChange('contact')} className="hover:text-white transition-colors">Contact</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-blue-400" />
                info@schoolbots.nl
              </li>
              <li className="flex items-center">
                <MessageCircle className="h-4 w-4 mr-3 text-green-400" />
                <a href="https://wa.me/31620151648" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+31 6 20151648 (WhatsApp)</a>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-blue-400" />
                <a href="tel:+31620151648" className="hover:text-white transition-colors">+31 6 20151648</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Schoolbots. Alle rechten voorbehouden. Uw partner in verantwoorde AI.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
