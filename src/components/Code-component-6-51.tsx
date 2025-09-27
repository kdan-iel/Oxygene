import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { useLanguage } from '../contexts/LanguageContext';
import { AnimatedHero } from './AnimatedHero';
import { Users, Heart, Award, Leaf } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AboutPageProps {
  onPageChange: (page: string) => void;
}

export function AboutPage({ onPageChange }: AboutPageProps) {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Animated Header */}
      <AnimatedHero
        title={t('about.title')}
        subtitle={t('about.subtitle')}
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200"
        actions={[
          {
            label: t('common.contact'),
            onClick: () => onPageChange('contact'),
            className: 'bg-yellow-500 hover:bg-yellow-600 text-black'
          },
          {
            label: t('common.contact'),
            onClick: () => onPageChange('contact'),
            variant: 'outline',
            className: 'text-white border-white hover:bg-white hover:text-black'
          }
        ]}
        height="h-[450px]"
      />

      {/* History Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('about.history.title')}</h2>
              <p className="text-gray-600 mb-6">{t('about.history.content')}</p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Award className="h-6 w-6 text-primary" />
                  <span>Fondée en 2008</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-primary" />
                  <span>Plus de 500 clients satisfaits</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="h-6 w-6 text-accent" />
                  <span>15+ années d'expérience</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600"
                alt="Histoire de l'entreprise"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('about.team.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t('about.team.content')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="font-semibold mb-2">Marie Dubois</h3>
                <p className="text-gray-600 text-sm mb-2">Directrice générale</p>
                <p className="text-gray-500 text-sm">15 ans d'expérience dans le secteur</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="font-semibold mb-2">Pierre Martin</h3>
                <p className="text-gray-600 text-sm mb-2">Chef d'équipe</p>
                <p className="text-gray-500 text-sm">Spécialiste en nettoyage industriel</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="font-semibold mb-2">Sophie Laurent</h3>
                <p className="text-gray-600 text-sm mb-2">Responsable qualité</p>
                <p className="text-gray-500 text-sm">Certifiée en produits écologiques</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CSR Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600"
                alt="Responsabilité sociale"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('about.csr.title')}</h2>
              <p className="text-gray-600 mb-6">{t('about.csr.content')}</p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Leaf className="h-6 w-6 text-accent mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Produits écologiques</h3>
                    <p className="text-gray-600">100% de nos produits sont certifiés éco-responsables</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-accent mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Actions solidaires</h3>
                    <p className="text-gray-600">Partenariats avec des associations locales</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="h-6 w-6 text-accent mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Certifications</h3>
                    <p className="text-gray-600">ISO 14001 et labels environnementaux</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}