import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.about': 'À propos',
    'nav.blog': 'Nos astuces',
    'nav.references': 'Nos références',
    'nav.gallery': 'Galerie',
    'nav.careers': 'Emploi',
    'nav.contact': 'Contact',
    'nav.quote': 'Demander un devis',
    
    // Common
    'common.readMore': 'Lire la suite',
    'common.getQuote': 'Demander un devis',
    'common.contact': 'Nous contacter',
    'common.learn-more': 'En savoir plus',
    'common.our-services': 'Nos services',
    'common.view-all': 'Voir tout',
    'finalcta.title': 'Prêt à transformer vos espaces ?',
    'finalcta.subtitle': 'Contactez-nous dès aujourd\'hui pour un devis gratuit et personnalisé',

    //Footer
    'footer.description': 'Solutions de nettoyage professionnelles depuis 2008. Qualité, fiabilité et respect de l\'environnement.', 
    'footer.address1': `Rue AOUISSI (En face du centre de 
    santé communautaire de Be-Klikamé),`,
    'footer.address2': `Lomé 22 BP 
    354 Lomé-Togo`,

    // Homepage
    'home.hero.title1': 'Solutions de nettoyage professionnelles',
    'home.hero.subtitle1': 'Oxygène, votre partenaire de confiance pour tous vos besoins de nettoyage professionnel. Qualité, fiabilité et respect de l\'environnement.',
    'home.hero.title2': 'Nettoyage de vitres professionnel',
    'home.hero.subtitle2': 'Des vitres impeccables pour une image parfaite de votre entreprise',
    'home.hero.title3': 'Expertise en nettoyage de tapis',
    'home.hero.subtitle3': 'Redonnez vie à vos tapis avec nos techniques professionnelles',
    'home.hero.cta': 'Découvrir nos services',
    
    'home.values.title': 'Nos valeurs',
    'home.values.quality': 'Qualité',
    'home.values.quality-desc': 'Excellence dans chaque intervention',
    'home.values.reliability': 'Fiabilité',
    'home.values.reliability-desc': 'Service ponctuel et professionnel',
    'home.values.eco': 'Écologie',
    'home.values.eco-desc': 'Produits respectueux de l\'environnement',
    
    'home.services.title': 'Nos services',
    'home.services.subtitle': 'Des solutions adaptées à tous vos besoins',
    
    'home.why.title': 'Pourquoi nous choisir ?',
    'home.why.experience': '+ de 15 ans d\'expérience',
    'home.why.certified': 'Équipe certifiée',
    'home.why.available': 'Disponible 7j/7',
    'home.why.guarantee': 'Satisfaction garantie',
    
    'home.clients.title': 'Ils nous font confiance',
    'home.blog.title': 'Nos derniers conseils',
    
    // Services
    'services.title': 'Nos services',
    'services.subtitle': 'Solutions professionnelles pour tous vos besoins de nettoyage',
    'services.parquet': 'Nettoyage de parquet',
    'services.carpet': 'Nettoyage de tapis',
    'services.marble': 'Nettoyage de marbre',
    'services.windows': 'Nettoyage de vitres',
    'services.offices': 'Nettoyage de bureaux',
    'services.commercial': 'Nettoyage commercial',
    'services.buildings': 'Nettoyage de bâtiments',
    'services.homes': 'Nettoyage de maisons',
    
    // About
    'about.title': 'À propos d\'Oxygène',
    'about.subtitle': 'Notre histoire, notre équipe, nos engagements',
    'about.history.title': 'Notre histoire',
    'about.history.content': 'Fondée en 2008, Oxygène s\'est imposée comme un leader dans le domaine du nettoyage professionnel. Notre engagement envers la qualité et l\'innovation nous a permis de développer une clientèle fidèle.',
    'about.team.title': 'Notre équipe',
    'about.team.content': 'Une équipe de professionnels expérimentés et formés aux dernières techniques de nettoyage. Chaque membre de notre équipe partage nos valeurs de qualité et de respect.',
    'about.csr.title': 'Responsabilité sociale',
    'about.csr.content': 'Nous nous engageons à utiliser des produits écologiques et à adopter des pratiques durables pour préserver l\'environnement.',
    
    // Blog
    'blog.title': 'Nos astuces',
    'blog.subtitle': 'Conseils et astuces pour l\'entretien et le nettoyage',
    
    // Contact
    'contact.title': 'Contactez-nous',
    'contact.subtitle': 'Nous sommes à votre écoute',
    'contact.address': 'Adresse',
    'contact.phone': 'Téléphone',
    'contact.email': 'Email',
    'contact.hours': 'Horaires',
    'contact.form.title': 'Envoyez-nous un message',
    'contact.form.name': 'Nom',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Sujet',
    'contact.form.message': 'Message',
    'contact.form.send': 'Envoyer',
    
    // Quote form
    'quote.title': 'Demander un devis',
    'quote.subtitle': 'Obtenez un devis personnalisé gratuitement',
    'quote.form.name': 'Nom complet',
    'quote.form.email': 'Adresse email',
    'quote.form.phone': 'Téléphone',
    'quote.form.service': 'Type de service',
    'quote.form.area': 'Surface / Description',
    'quote.form.urgency': 'Urgence',
    'quote.form.message': 'Message complémentaire',
    'quote.form.submit': 'Demander le devis',
    
    // Chatbot
    'chatbot.placeholder': 'Posez votre question...',
    'chatbot.send': 'Envoyer',
    'chatbot.welcome': 'Bonjour ! Comment puis-je vous aider ?',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.blog': 'Tips',
    'nav.references': 'References',
    'nav.gallery': 'Gallery',
    'nav.careers': 'Careers',
    'nav.contact': 'Contact',
    'nav.quote': 'Get a Quote',
    
    // Common
    'common.readMore': 'Read more',
    'common.getQuote': 'Get a quote',
    'common.contact': 'Contact us',
    'common.learn-more': 'Learn more',
    'common.our-services': 'Our services',
    'common.view-all': 'View all',
    'finalcta.title': 'Ready to transform your spaces?',
    'finalcta.subtitle': 'Contact us today for a free, personalized quote',
    
    //Footer
    'footer.description': 'Professional cleaning solutions since 2008. Quality, reliability and environmental respect.',
    'footer.address1': 'Rue AOUISSI (In front of the Be-Klikamé community health center),',
    'footer.address2': 'Lomé 22 BP 354 Lomé-Togo',

    // Homepage
    'home.hero.title1': 'Professional Cleaning Solutions',
    'home.hero.subtitle1': 'Oxygène, your trusted partner for all your professional cleaning needs. Quality, reliability and environmental respect.',
    'home.hero.title2': 'Professional window cleaning',
    'home.hero.subtitle2': 'Spotless windows for a perfect image of your business',
    'home.hero.title3': 'Carpet cleaning expertise',
    'home.hero.subtitle3': 'Bring your carpets back to life with our professional techniques',
    'home.hero.cta': 'Discover our services',
    
    'home.values.title': 'Our values',
    'home.values.quality': 'Quality',
    'home.values.quality-desc': 'Excellence in every intervention',
    'home.values.reliability': 'Reliability',
    'home.values.reliability-desc': 'Punctual and professional service',
    'home.values.eco': 'Ecology',
    'home.values.eco-desc': 'Environmentally friendly products',
    
    'home.services.title': 'Our services',
    'home.services.subtitle': 'Solutions adapted to all your needs',
    
    'home.why.title': 'Why choose us?',
    'home.why.experience': '15+ years of experience',
    'home.why.certified': 'Certified team',
    'home.why.available': 'Available 7 days a week',
    'home.why.guarantee': 'Satisfaction guaranteed',
    
    'home.clients.title': 'They trust us',
    'home.blog.title': 'Our latest tips',
    
    // Services
    'services.title': 'Our services',
    'services.subtitle': 'Professional solutions for all your cleaning needs',
    'services.parquet': 'Parquet cleaning',
    'services.carpet': 'Carpet cleaning',
    'services.marble': 'Marble cleaning',
    'services.windows': 'Window cleaning',
    'services.offices': 'Office cleaning',
    'services.commercial': 'Commercial cleaning',
    'services.buildings': 'Building cleaning',
    'services.homes': 'House cleaning',
    
    // About
    'about.title': 'About Oxygène',
    'about.subtitle': 'Our story, our team, our commitments',
    'about.history.title': 'Our history',
    'about.history.content': 'Founded in 2008, Oxygène has established itself as a leader in professional cleaning. Our commitment to quality and innovation has allowed us to develop a loyal clientele.',
    'about.team.title': 'Our team',
    'about.team.content': 'A team of experienced professionals trained in the latest cleaning techniques. Each team member shares our values of quality and respect.',
    'about.csr.title': 'Social responsibility',
    'about.csr.content': 'We are committed to using eco-friendly products and adopting sustainable practices to preserve the environment.',
    
    // Blog
    'blog.title': 'Our tips',
    'blog.subtitle': 'Tips and advice for maintenance and cleaning',
    
    // Contact
    'contact.title': 'Contact us',
    'contact.subtitle': 'We are here to listen',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.hours': 'Hours',
    'contact.form.title': 'Send us a message',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send',
    
    // Quote form
    'quote.title': 'Get a quote',
    'quote.subtitle': 'Get a personalized quote for free',
    'quote.form.name': 'Full name',
    'quote.form.email': 'Email address',
    'quote.form.phone': 'Phone',
    'quote.form.service': 'Service type',
    'quote.form.area': 'Area / Description',
    'quote.form.urgency': 'Urgency',
    'quote.form.message': 'Additional message',
    'quote.form.submit': 'Request quote',
    
    // Chatbot
    'chatbot.placeholder': 'Ask your question...',
    'chatbot.send': 'Send',
    'chatbot.welcome': 'Hello! How can I help you?',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}