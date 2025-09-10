import React, { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';
import QuotePage from './components/QuotePage';
import BlogPage from './components/BlogPage';
import AboutPage from './components/AboutPage';
import ReferencesPage from './components/ReferencesPage';
import CareersPage from './components/CareersPage';
import GalleryPage from './components/GalleryPage';
import Chatbot from './components/Chatbot';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'services':
        return <ServicesPage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage />;
      case 'blog':
        return <BlogPage onNavigate={handleNavigate} />;
      case 'references':
        return <ReferencesPage />;
      case 'careers':
        return <CareersPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      case 'quote':
        return <QuotePage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header currentPage={currentPage} onNavigate={handleNavigate} />
        <main>
          {renderPage()}
        </main>
        <Footer onNavigate={handleNavigate} />
        <Chatbot onNavigate={handleNavigate} />
      </div>
    </LanguageProvider>
  );
}