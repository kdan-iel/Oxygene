import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  Building2, 
  Home, 
  Sparkles, 
  Shield,
  Layers,
  Palette,
  Square,
  ArrowRight 
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Building2,
      title: t('home.services.offices'),
      description: "Nettoyage complet de vos espaces de travail : bureaux, salles de réunion, espaces communs, sanitaires. Service régulier ou ponctuel.",
      features: ["Nettoyage quotidien", "Désinfection", "Entretien du mobilier", "Gestion des déchets"],
      image: "https://images.unsplash.com/photo-1648469941040-b1c1fac2d4b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBjbGVhbmluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTc1MDExNjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      icon: Shield,
      title: t('home.services.commercial'),
      description: "Solutions adaptées aux commerces, restaurants, magasins. Respect des normes d'hygiène strictes.",
      features: ["Nettoyage nocturne", "Normes HACCP", "Vitrine et devanture", "Zones de stockage"],
      image: "https://images.unsplash.com/photo-1723759550818-48cfe5609381?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBjbGVhbmluZ3xlbnwxfHx8fDE3NTc1MDExNjh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      icon: Sparkles,
      title: t('home.services.windows'),
      description: "Nettoyage professionnel de vitres intérieures et extérieures. Matériel spécialisé pour tous types de bâtiments.",
      features: ["Vitres en hauteur", "Façades vitrées", "Verrières", "Miroirs"],
      image: "https://images.unsplash.com/photo-1690244775977-74844b4f4b1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3aW5kb3clMjBjbGVhbmluZ3xlbnwxfHx8fDE3NTc1MDExNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      icon: Home,
      title: t('home.services.homes'),
      description: "Services de ménage à domicile personnalisés selon vos besoins et votre rythme de vie.",
      features: ["Ménage régulier", "Grand nettoyage", "Repassage", "Entretien spécialisé"],
      image: "https://images.unsplash.com/photo-1648469941040-b1c1fac2d4b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBjbGVhbmluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTc1MDExNjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      icon: Layers,
      title: t('home.services.parquet'),
      description: "Entretien spécialisé de tous types de parquets : massif, stratifié, contrecollé. Rénovation et protection.",
      features: ["Nettoyage délicat", "Rénovation", "Vitrification", "Traitement protecteur"],
      image: "https://images.unsplash.com/photo-1648469941040-b1c1fac2d4b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBjbGVhbmluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTc1MDExNjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      icon: Square,
      title: t('home.services.carpet'),
      description: "Nettoyage en profondeur de tapis et moquettes. Élimination des taches, acariens et odeurs.",
      features: ["Injection-extraction", "Nettoyage à sec", "Détachage", "Désodorisation"],
      image: "https://images.unsplash.com/photo-1723759550818-48cfe5609381?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBjbGVhbmluZ3xlbnwxfHx8fDE3NTc1MDExNjh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      icon: Palette,
      title: t('home.services.marble'),
      description: "Entretien et restauration de surfaces en marbre, granit et pierre naturelle. Cristallisation et polissage.",
      features: ["Décapage", "Ponçage", "Cristallisation", "Protection"],
      image: "https://images.unsplash.com/photo-1690244775977-74844b4f4b1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3aW5kb3clMjBjbGVhbmluZ3xlbnwxfHx8fDE3NTc1MDExNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      icon: Building2,
      title: t('home.services.buildings'),
      description: "Entretien complet d'immeubles : parties communes, ascenseurs, caves, parkings souterrains.",
      features: ["Parties communes", "Espaces extérieurs", "Maintenance", "Gestion complète"],
      image: "https://images.unsplash.com/photo-1648469941040-b1c1fac2d4b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBjbGVhbmluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTc1MDExNjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">
            {t('services.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <CardHeader className="p-0 mb-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <service.icon className="h-8 w-8 text-[#0680d2]" />
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-1 mb-4">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-[#4caf50] rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-[#f5f7fa] rounded-lg p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center text-[#333333] mb-12">
            Notre processus de travail
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Évaluation", desc: "Analyse de vos besoins et établissement d'un devis personnalisé" },
              { step: "2", title: "Planification", desc: "Organisation de l'intervention selon vos contraintes" },
              { step: "3", title: "Intervention", desc: "Exécution des prestations par nos équipes qualifiées" },
              { step: "4", title: "Contrôle", desc: "Vérification de la qualité et suivi client" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-[#0680d2] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-[#333333] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-[#333333] mb-4">
            Besoin d'un service personnalisé ?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Contactez-nous pour discuter de vos besoins spécifiques. 
            Nous élaborons des solutions sur mesure pour chaque client.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => onNavigate('quote')}
              className="bg-[#0680d2] hover:bg-blue-700"
            >
              {t('nav.quote')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              onClick={() => onNavigate('contact')}
              variant="outline"
              className="border-[#0680d2] text-[#0680d2] hover:bg-[#0680d2] hover:text-white"
            >
              {t('nav.contact')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;