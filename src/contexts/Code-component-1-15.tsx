import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.about': 'À propos',
    'nav.blog': 'Nos astuces',
    'nav.references': 'Nos références',
    'nav.careers': 'Emploi',
    'nav.gallery': 'Galerie',
    'nav.contact': 'Contact',
    'nav.quote': 'Demander un devis',

    // Home page
    'home.hero.title': 'Services de nettoyage professionnel',
    'home.hero.subtitle': 'Oxygène vous offre des solutions d\'hygiène complètes pour vos espaces professionnels et résidentiels',
    'home.hero.cta': 'Demander un devis gratuit',
    'home.why.title': 'Pourquoi nous choisir ?',
    'home.why.quality': 'Qualité garantie',
    'home.why.quality.desc': 'Des prestations de qualité supérieure avec des produits professionnels',
    'home.why.experience': 'Expérience reconnue',
    'home.why.experience.desc': 'Plus de 10 ans d\'expérience dans le secteur du nettoyage',
    'home.why.eco': 'Respect de l\'environnement',
    'home.why.eco.desc': 'Utilisation de produits écologiques et méthodes respectueuses',
    'home.services.title': 'Nos services',
    'home.services.parquet': 'Nettoyage de parquet',
    'home.services.carpet': 'Nettoyage de tapis',
    'home.services.marble': 'Nettoyage de marbre',
    'home.services.windows': 'Nettoyage de vitres',
    'home.services.offices': 'Nettoyage de bureaux',
    'home.services.commercial': 'Nettoyage commercial',
    'home.services.buildings': 'Nettoyage de bâtiments',
    'home.services.homes': 'Nettoyage de maisons',
    'home.blog.title': 'Nos derniers conseils',
    'home.clients.title': 'Ils nous font confiance',

    // Services page
    'services.title': 'Nos services de nettoyage',
    'services.subtitle': 'Solutions professionnelles adaptées à tous vos besoins',

    // About page
    'about.title': 'À propos d\'Oxygène',
    'about.history.title': 'Notre histoire',
    'about.team.title': 'Notre équipe',
    'about.csr.title': 'Responsabilité sociétale',

    // Contact
    'contact.title': 'Contactez-nous',
    'contact.form.name': 'Nom',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Téléphone',
    'contact.form.message': 'Message',
    'contact.form.send': 'Envoyer',

    // Quote form
    'quote.title': 'Demander un devis',
    'quote.form.service': 'Type de service',
    'quote.form.area': 'Surface/Description',
    'quote.form.urgency': 'Urgence',
    'quote.form.urgency.low': 'Non urgent',
    'quote.form.urgency.medium': 'Modéré',
    'quote.form.urgency.high': 'Urgent',

    // Common
    'common.loading': 'Chargement...',
    'common.error': 'Une erreur est survenue',
    'common.success': 'Succès !',
    'common.read_more': 'Lire la suite',
    'common.back': 'Retour',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.blog': 'Our Tips',
    'nav.references': 'References',
    'nav.careers': 'Careers',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    'nav.quote': 'Request Quote',

    // Home page
    'home.hero.title': 'Professional Cleaning Services',
    'home.hero.subtitle': 'Oxygène offers complete hygiene solutions for your professional and residential spaces',
    'home.hero.cta': 'Request Free Quote',
    'home.why.title': 'Why Choose Us?',
    'home.why.quality': 'Guaranteed Quality',
    'home.why.quality.desc': 'Superior quality services with professional products',
    'home.why.experience': 'Recognized Experience',
    'home.why.experience.desc': 'Over 10 years of experience in the cleaning sector',
    'home.why.eco': 'Environmental Respect',
    'home.why.eco.desc': 'Use of ecological products and respectful methods',
    'home.services.title': 'Our Services',
    'home.services.parquet': 'Parquet Cleaning',
    'home.services.carpet': 'Carpet Cleaning',
    'home.services.marble': 'Marble Cleaning',
    'home.services.windows': 'Window Cleaning',
    'home.services.offices': 'Office Cleaning',
    'home.services.commercial': 'Commercial Cleaning',
    'home.services.buildings': 'Building Cleaning',
    'home.services.homes': 'Home Cleaning',
    'home.blog.title': 'Our Latest Tips',
    'home.clients.title': 'They Trust Us',

    // Services page
    'services.title': 'Our Cleaning Services',
    'services.subtitle': 'Professional solutions adapted to all your needs',

    // About page
    'about.title': 'About Oxygène',
    'about.history.title': 'Our History',
    'about.team.title': 'Our Team',
    'about.csr.title': 'Corporate Social Responsibility',

    // Contact
    'contact.title': 'Contact Us',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send',

    // Quote form
    'quote.title': 'Request Quote',
    'quote.form.service': 'Service Type',
    'quote.form.area': 'Area/Description',
    'quote.form.urgency': 'Urgency',
    'quote.form.urgency.low': 'Not urgent',
    'quote.form.urgency.medium': 'Moderate',
    'quote.form.urgency.high': 'Urgent',

    // Common
    'common.loading': 'Loading...',
    'common.error': 'An error occurred',
    'common.success': 'Success!',
    'common.read_more': 'Read more',
    'common.back': 'Back',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};