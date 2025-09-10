import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  CheckCircle, 
  Award, 
  Leaf, 
  ArrowRight, 
  Star,
  Building2,
  Home,
  Sparkles,
  Shield
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1648469941040-b1c1fac2d4b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBjbGVhbmluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTc1MDExNjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: t('home.hero.title'),
      subtitle: t('home.hero.subtitle')
    },
    {
      image: "https://images.unsplash.com/photo-1723759550818-48cfe5609381?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBjbGVhbmluZ3xlbnwxfHx8fDE3NTc1MDExNjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Nettoyage commercial professionnel",
      subtitle: "Solutions adaptées à tous types d'entreprises et commerces"
    },
    {
      image: "https://images.unsplash.com/photo-1690244775977-74844b4f4b1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3aW5kb3clMjBjbGVhbmluZ3xlbnwxfHx8fDE3NTc1MDExNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Entretien spécialisé",
      subtitle: "Vitres, sols, surfaces - nous maîtrisons toutes les techniques"
    }
  ];

  const services = [
    { icon: Building2, name: t('home.services.offices'), key: 'offices' },
    { icon: Home, name: t('home.services.homes'), key: 'homes' },
    { icon: Sparkles, name: t('home.services.windows'), key: 'windows' },
    { icon: Shield, name: t('home.services.commercial'), key: 'commercial' }
  ];

  const whyChooseUs = [
    {
      icon: CheckCircle,
      title: t('home.why.quality'),
      description: t('home.why.quality.desc')
    },
    {
      icon: Award,
      title: t('home.why.experience'),
      description: t('home.why.experience.desc')
    },
    {
      icon: Leaf,
      title: t('home.why.eco'),
      description: t('home.why.eco.desc')
    }
  ];

  const clients = [
    'Entreprise A', 'Société B', 'Groupe C', 'Company D', 'Corporation E', 'Business F'
  ];

  const blogPosts = [
    {
      title: "Comment maintenir la propreté de vos bureaux",
      excerpt: "Découvrez nos conseils pour un environnement de travail sain...",
      date: "15 Jan 2024"
    },
    {
      title: "Produits écologiques vs traditionnels",
      excerpt: "Comparaison des avantages et inconvénients...",
      date: "12 Jan 2024"
    },
    {
      title: "L'importance du nettoyage régulier",
      excerpt: "Pourquoi un entretien régulier est essentiel...",
      date: "08 Jan 2024"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <section className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <ImageWithFallback
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center max-w-4xl px-4">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
                  {slide.subtitle}
                </p>
                <Button
                  onClick={() => onNavigate('quote')}
                  size="lg"
                  className="bg-[#0680d2] hover:bg-blue-700 text-white px-8 py-4 text-lg"
                >
                  {t('home.hero.cta')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        ))}

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
              {t('home.why.title')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="flex justify-center">
                    <item.icon className="h-16 w-16 text-[#0680d2]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#333333]">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
              {t('home.services.title')}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="text-center p-6 hover:shadow-lg transition-all cursor-pointer hover:scale-105"
                onClick={() => onNavigate('services')}
              >
                <CardContent className="space-y-4">
                  <div className="flex justify-center">
                    <service.icon className="h-12 w-12 text-[#0680d2]" />
                  </div>
                  <h3 className="font-semibold text-[#333333]">{service.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              onClick={() => onNavigate('services')}
              variant="outline"
              className="border-[#0680d2] text-[#0680d2] hover:bg-[#0680d2] hover:text-white"
            >
              Voir tous nos services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-[#333333] mb-4">
              {t('home.clients.title')}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
            {clients.map((client, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-6 rounded-lg shadow-sm h-20 flex items-center justify-center">
                  <span className="text-gray-500 font-medium">{client}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
              {t('home.blog.title')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="text-sm text-[#0680d2] font-medium">{post.date}</div>
                    <h3 className="text-lg font-semibold text-[#333333]">{post.title}</h3>
                    <p className="text-gray-600">{post.excerpt}</p>
                    <Button
                      variant="ghost"
                      className="text-[#0680d2] hover:text-blue-700 p-0"
                      onClick={() => onNavigate('blog')}
                    >
                      {t('common.read_more')}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0680d2]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à transformer votre espace ?
          </h2>
          <p className="text-xl text-white mb-8">
            Demandez votre devis gratuit et personnalisé dès maintenant
          </p>
          <Button
            onClick={() => onNavigate('quote')}
            size="lg"
            className="bg-white text-[#0680d2] hover:bg-gray-100 px-8 py-4 text-lg"
          >
            {t('home.hero.cta')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;