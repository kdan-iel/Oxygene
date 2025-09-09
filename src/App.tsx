import React, { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { ServicesPage } from './components/ServicesPage';
import { QuotePage } from './components/QuotePage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { BlogPage } from './components/BlogPage';
import { Chatbot } from './components/Chatbot';
import { AnimatedHero } from './components/AnimatedHero';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onPageChange={setCurrentPage} />;
      case 'services':
        return <ServicesPage onPageChange={setCurrentPage} />;
      case 'quote':
        return <QuotePage />;
      case 'about':
        return <AboutPage onPageChange={setCurrentPage} />;
      case 'blog':
        return <BlogPage onPageChange={setCurrentPage} />;
      case 'contact':
        return <ContactPage onPageChange={setCurrentPage} />;
      case 'references':
        return (
          <div className="min-h-screen">
            <AnimatedHero
              title="Nos références"
              subtitle="Ils nous font confiance"
              backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200"
              height="h-[400px]"
            />
            <div className="py-16">
              <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-center">Références - Page en construction</h1>
              </div>
            </div>
          </div>
        );
      case 'gallery':
        return (
          <div className="min-h-screen">
            <AnimatedHero
              title="Galerie"
              subtitle="Découvrez nos réalisations"
              backgroundImage="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200"
              height="h-[400px]"
            />
            <div className="py-16">
              <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-center">Galerie - Page en construction</h1>
              </div>
            </div>
          </div>
        );
      case 'careers':
        return (
          <div className="min-h-screen">
            <AnimatedHero
              title="Emploi"
              subtitle="Rejoignez notre équipe"
              backgroundImage="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200"
              height="h-[400px]"
            />
            <div className="py-16">
              <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-center">Emploi - Page en construction</h1>
              </div>
            </div>
          </div>
        );
      default:
        return <HomePage onPageChange={setCurrentPage} />;
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header currentPage={currentPage} onPageChange={setCurrentPage} />
        <main>
          {renderPage()}
        </main>
        <Footer onPageChange={setCurrentPage} />
        <Chatbot onPageChange={setCurrentPage} />
      </div>
    </LanguageProvider>
  );
}