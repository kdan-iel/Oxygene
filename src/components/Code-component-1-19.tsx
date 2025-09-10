import React, { useState } from 'react';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { key: 'home', label: t('nav.home') },
    { key: 'services', label: t('nav.services') },
    { key: 'about', label: t('nav.about') },
    { key: 'blog', label: t('nav.blog') },
    { key: 'references', label: t('nav.references') },
    { key: 'careers', label: t('nav.careers') },
    { key: 'gallery', label: t('nav.gallery') },
    { key: 'contact', label: t('nav.contact') },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  return (
    <>
      {/* CTA Header Bar */}
      <div className="bg-[#0680d2] text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span>📞 +33 1 23 45 67 89</span>
            <span>✉️ contact@oxygene-hygiene.fr</span>
          </div>
          <Button
            onClick={() => onNavigate('quote')}
            variant="secondary"
            size="sm"
            className="bg-white text-[#0680d2] hover:bg-gray-100"
          >
            {t('nav.quote')}
          </Button>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 cursor-pointer" onClick={() => onNavigate('home')}>
              <h1 className="text-2xl font-bold text-[#0680d2]">Oxygène</h1>
              <p className="text-xs text-gray-600">Services d'hygiène</p>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => onNavigate(item.key)}
                  className={`text-sm font-medium transition-colors hover:text-[#0680d2] ${
                    currentPage === item.key ? 'text-[#0680d2]' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Language Toggle & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button
                onClick={toggleLanguage}
                variant="ghost"
                size="sm"
                className="flex items-center space-x-1"
              >
                <Globe className="h-4 w-4" />
                <span className="text-sm">{language.toUpperCase()}</span>
              </Button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-md text-gray-600 hover:text-[#0680d2]"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => {
                    onNavigate(item.key);
                    setIsMenuOpen(false);
                  }}
                  className={`block px-3 py-2 text-base font-medium transition-colors hover:text-[#0680d2] hover:bg-gray-50 w-full text-left ${
                    currentPage === item.key ? 'text-[#0680d2] bg-blue-50' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="px-3 py-2">
                <Button
                  onClick={() => {
                    onNavigate('quote');
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-[#0680d2] hover:bg-blue-700"
                >
                  {t('nav.quote')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;