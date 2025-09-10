import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';
import { Menu, X, Phone, Mail } from 'lucide-react';
import oxygeneLogoImg from '../assets/logo_oxygene.png';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Header({ currentPage, onPageChange }: HeaderProps) {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Transform values for smooth animations
  const topBarOpacity = useTransform(scrollY, [0, 50], [1, 0]);
  const topBarHeight = useTransform(scrollY, [0, 50], [44, 0]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { key: 'home', href: 'home' },
    { key: 'services', href: 'services' },
    { key: 'about', href: 'about' },
    { key: 'blog', href: 'blog' },
    { key: 'references', href: 'references' },
    { key: 'gallery', href: 'gallery' },
    { key: 'careers', href: 'careers' },
    { key: 'contact', href: 'contact' },
  ];

  return (
    <motion.header 
      className={`bg-white sticky top-0 z-50 ${
        isScrolled 
          ? 'shadow-[0_4px_20px_rgba(0,0,0,0.1),0_2px_6px_rgba(0,0,0,0.05)] border-b border-gray-100/50' 
          : 'shadow-[0_2px_15px_rgba(0,0,0,0.08),0_1px_4px_rgba(0,0,0,0.03),inset_0_1px_0_rgba(255,255,255,0.9)] border-b border-gray-50/30'
      }`}
      style={{
        background: isScrolled 
          ? 'linear-gradient(135deg, #ffffff 0%, #fafbfc 100%)'
          : 'linear-gradient(135deg, #ffffff 0%, #fafbfc 50%, #ffffff 100%)'
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Top bar - slides up and fades out on scroll */}
      <motion.div 
        className="text-white relative"
        style={{ 
          opacity: topBarOpacity,
          height: topBarHeight,
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #0680d2 0%, #0567b8 50%, #0680d2 100%)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.1), 0 1px 3px rgba(6,128,210,0.3)'
        }}
      >
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center text-sm">
            <div className="hidden md:flex space-x-6">
              <div className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <Phone className="h-4 w-4" />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <Mail className="h-4 w-4" />
                <span>contact@oxygene-proprete.fr</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant={language === 'fr' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setLanguage('fr')}
                className="h-6 px-2 text-xs text-white hover:bg-white/20 transition-all duration-200"
              >
                FR
              </Button>
              <Button
                variant={language === 'en' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setLanguage('en')}
                className="h-6 px-2 text-xs text-white hover:bg-white/20 transition-all duration-200"
              >
                EN
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main navigation */}
      <nav 
        className={`container mx-auto px-4 transition-all duration-300 ${
          isScrolled ? 'py-2' : 'py-4'
        }`}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="cursor-pointer hover:opacity-80 transition-all duration-300"
            onClick={() => onPageChange('home')}
          >
            <img 
              src={oxygeneLogoImg}
              alt="Oxygène - Hygiène et propreté"
              className={`transition-all duration-300 ${
                isScrolled ? 'h-14' : 'h-16'
              }`}
              style={{
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
              }}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.key}
                onClick={() => onPageChange(item.href)}
                className={`text-sm font-medium transition-all duration-200 hover:text-primary ${
                  currentPage === item.href ? 'text-primary' : 'text-gray-700'
                }`}
              >
                {t(`nav.${item.key}`)}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              onClick={() => onPageChange('quote')}
              className={`bg-yellow-500 hover:bg-yellow-600 text-black font-medium transition-all duration-200 ${
                isScrolled ? 'px-4 py-2 text-sm' : 'px-6 py-3'
              }`}
              style={{
                background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #fbbf24 100%)',
                boxShadow: '0 4px 14px rgba(251, 191, 36, 0.4), 0 2px 6px rgba(245, 158, 11, 0.3), inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.1)',
                border: '1px solid rgba(245, 158, 11, 0.3)'
              }}
            >
              {t('nav.quote')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <motion.div
              animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.div>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: mobileMenuOpen ? 'auto' : 0,
            opacity: mobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="lg:hidden overflow-hidden"
        >
          <div className="mt-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <button
                  key={item.key}
                  onClick={() => {
                    onPageChange(item.href);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left text-sm font-medium transition-all duration-200 hover:text-primary ${
                    currentPage === item.href ? 'text-primary' : 'text-gray-700'
                  }`}
                >
                  {t(`nav.${item.key}`)}
                </button>
              ))}
              <Button 
                onClick={() => {
                  onPageChange('quote');
                  setMobileMenuOpen(false);
                }}
                className="text-black font-medium w-full mt-4"
                style={{
                  background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #fbbf24 100%)',
                  boxShadow: '0 4px 14px rgba(251, 191, 36, 0.4), 0 2px 6px rgba(245, 158, 11, 0.3), inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.1)',
                  border: '1px solid rgba(245, 158, 11, 0.3)'
                }}
              >
                {t('nav.quote')}
              </Button>
            </div>
          </div>
        </motion.div>
      </nav>

      {/* Sticky CTA for mobile */}
      <div className="lg:hidden fixed bottom-4 right-4 z-50">
        <Button 
          onClick={() => onPageChange('quote')}
          className="text-black font-medium hover:scale-105 transition-transform"
          style={{
            background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #fbbf24 100%)',
            boxShadow: '0 6px 20px rgba(251, 191, 36, 0.5), 0 3px 8px rgba(245, 158, 11, 0.4), inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.1)',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            padding: '12px 24px'
          }}
          size="lg"
        >
          {t('common.getQuote')}
        </Button>
      </div>
    </motion.header>
  );
}