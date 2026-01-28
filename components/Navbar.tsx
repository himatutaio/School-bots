
import React, { useState, useEffect } from 'react';
import { Menu, X, Bot, Sparkles } from 'lucide-react';
import { PageType } from '../types';

interface NavbarProps {
  currentPage: PageType;
  onPageChange: (page: PageType) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onPageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; value: PageType }[] = [
    { label: 'Home', value: 'home' },
    { label: 'Diensten', value: 'services' },
    { label: 'AI in Onderwijs', value: 'knowledge' },
    { label: 'Over Ons', value: 'about' },
    { label: 'Contact', value: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'py-3 px-4' : 'py-5 px-4'
    }`}>
      <div className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
        scrolled ? 'glass shadow-lg px-6 py-2' : 'px-4 py-0'
      }`}>
        <div className="flex justify-between h-14 items-center">
          <div className="flex items-center cursor-pointer group" onClick={() => onPageChange('home')}>
            <div className="bg-blue-600 p-1.5 rounded-lg mr-2 group-hover:rotate-12 transition-transform">
              <Bot className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-extrabold text-slate-900 tracking-tight">Schoolbots</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.value}
                onClick={() => onPageChange(link.value)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  currentPage === link.value 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="ml-4 pl-4 border-l border-slate-200">
              <button 
                onClick={() => onPageChange('contact')}
                className="bg-slate-900 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-600 transition-all shadow-md active:scale-95 flex items-center"
              >
                <Sparkles className="h-4 w-4 mr-2" />
                Start Project
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2 hover:bg-slate-100 rounded-lg">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 glass rounded-2xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.value}
                onClick={() => {
                  onPageChange(link.value);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 text-base font-bold rounded-xl transition-colors ${
                  currentPage === link.value ? 'bg-blue-50 text-blue-600' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={() => {
                onPageChange('contact');
                setIsOpen(false);
              }}
              className="w-full mt-4 bg-blue-600 text-white px-4 py-4 rounded-xl text-center font-bold"
            >
              Contact opnemen
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
