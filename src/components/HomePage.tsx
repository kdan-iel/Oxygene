import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  Sparkles, 
  Shield, 
  Leaf, 
  CheckCircle, 
  Users, 
  Clock, 
  Award,
  ChevronLeft,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomePageProps {
  onPageChange: (page: string) => void;
}

export function HomePage({ onPageChange }: HomePageProps) {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: "/assets/images/cleaners_group1.png",
      title: t('home.hero.title1'),
      subtitle: t('home.hero.subtitle1')
    },
    {
      image: "/assets/images/cleaning_window_man.jpg",
      title: t('home.hero.title2'),
      subtitle: t('home.hero.subtitle2')
    },
    {
      image: "/assets/images/indoor_cleaning.png",
      title: t('home.hero.title3'),
      subtitle: t('home.hero.subtitle3')
    }
  ];

  const services = [
    { 
      icon: '🏢', 
      title: t('services.offices'), 
      description: 'Espaces de travail propres et sains'
    },
    { 
      icon: '🏪', 
      title: t('services.commercial'), 
      description: 'Commerces et magasins impeccables'
    },
    { 
      icon: '🏗️', 
      title: t('services.buildings'), 
      description: 'Entretien complet de bâtiments'
    },
    { 
      icon: '🏠', 
      title: t('services.homes'), 
      description: 'Ménage résidentiel de qualité'
    },
    { 
      icon: '🪟', 
      title: t('services.windows'), 
      description: 'Vitres cristallines'
    },
    { 
      icon: '🪑', 
      title: t('services.carpet'), 
      description: 'Tapis et moquettes comme neufs'
    }
  ];

  const clientLogos = [
    {
      name: 'Terminal De Containers de Lomé',
      logo: '/assets/images/references/ref-lct.png'
    },
    {
      name: 'SCAN Togo',
      logo: '/assets/images/references/ref-sacn-togo.jpg' 
    },
    {
      name: 'Cimtogo',
      logo: '/assets/images/references/ref-cimtogo.jpg'
    },
    {
      name: 'Cofina', 
      logo: '/assets/images/references/ref-cofina.png'
    },
    { name: 'Oryx Energy',
      logo: '/assets/images/references/ref-oryx-energy.jpg'
    },
    { name: 'Sunu Assurances',
      logo: '/assets/images/references/ref-sunu.jpg'
    }
  ];

  const blogPosts = [
    {
      title: '5 conseils pour maintenir un bureau propre',
      excerpt: 'Découvrez nos astuces pour garder votre espace de travail impeccable au quotidien.',
      image: "/assets/images/blogpost/office_lady.jpg",
      date: '15 Nov 2024'
    },
    {
      title: 'Produits écologiques : l\'avenir du nettoyage',
      excerpt: 'Comment les produits respectueux de l\'environnement révolutionnent le secteur.',
      image: "/assets/images/blogpost/door_handles_cleaning.png",
      date: '12 Nov 2024'
    },
    {
      title: 'Entretien des sols : techniques professionnelles',
      excerpt: 'Les secrets d\'un nettoyage de sol durable et efficace.',
      image: "/assets/images/blogpost/hidden_costs.png",
      date: '8 Nov 2024'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Slider */}
      <section className="relative h-[600px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
              index === currentSlide ? 'translate-x-0' : 
              index < currentSlide ? '-translate-x-full' : 'translate-x-full'
            }`}
          >
            <ImageWithFallback
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white max-w-4xl px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">{slide.title}</h1>
                <p className="text-xl md:text-2xl mb-8 opacity-90">{slide.subtitle}</p>
                <div className="space-x-4">
                  <Button 
                    size="lg" 
                    onClick={() => onPageChange('services')}
                    className="bg-primary hover:bg-primary/90"
                  >
                    {t('home.hero.cta')}
                  </Button>
                  <Button 
                    size="lg" 
                    onClick={() =>
                  window.open(
                    "https://wa.me/22896130264",
                    "_blank"
                  )}
                    className="bg-yellow-500 hover:bg-yellow-600 text-black border-0"
                  >
                    {t('common.contact')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slider Controls */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
          onClick={nextSlide}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button type="button" title={`Slide ${index + 1}`}
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t('home.values.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 border-0 shadow-lg">
              <CardContent className="pt-6">
                <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t('home.values.quality')}</h3>
                <p className="text-gray-600">{t('home.values.quality-desc')}</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 border-0 shadow-lg">
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t('home.values.reliability')}</h3>
                <p className="text-gray-600">{t('home.values.reliability-desc')}</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 border-0 shadow-lg">
              <CardContent className="pt-6">
                <Leaf className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t('home.values.eco')}</h3>
                <p className="text-gray-600">{t('home.values.eco-desc')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('home.services.title')}</h2>
            <p className="text-gray-600 text-lg">{t('home.services.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button 
              onClick={() => onPageChange('services')}
              className="bg-primary hover:bg-primary/90"
            >
              {t('common.view-all')} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t('home.why.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-2">15+</h3>
              <p className="text-gray-600">{t('home.why.experience')}</p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-accent mb-2">✓</h3>
              <p className="text-gray-600">{t('home.why.certified')}</p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-2">7/7</h3>
              <p className="text-gray-600">{t('home.why.available')}</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-accent mb-2">100%</h3>
              <p className="text-gray-600">{t('home.why.guarantee')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t('home.clients.title')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clientLogos.map((client, index) => (
              <div key={index} className="text-center p-4  hover:grayscale-0 transition-all group">
                <div className="border-0 rounded-lg h-32 flex items-center justify-center flex-col-reverse mb-4">
                  <ImageWithFallback
                  src={client.logo}
                  alt={client.name}
                  className="w-full object-cover"
                />
                </div>
                <div>
                  <span className="font-bold text-black group-hover:text-primary">{client.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t('home.blog.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Button variant="ghost" className="p-0 h-auto">
                    {t('common.readMore')} <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button 
              onClick={() => onPageChange('blog')}
              variant="outline"
            >
              {t('common.view-all')}
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('finalcta.title')}</h2>
          <p className="text-xl mb-8 opacity-90">
            {t('finalcta.subtitle')}
          </p>
          <Button 
            size="lg" 
            onClick={() =>
                  window.open(
                    "https://wa.me/22896130264",
                    "_blank"
                )}
            className="bg-yellow-500 hover:bg-yellow-600 text-black border-0"
          >
            {t('common.contact')}
          </Button>
        </div>
      </section>
    </div>
  );
}