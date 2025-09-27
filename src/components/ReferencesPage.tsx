import React from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Star, Building, Users, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { AnimatedHero } from './AnimatedHero';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { useLanguage } from '../contexts/LanguageContext';

interface ReferencesPageProps {
  onPageChange: (page: string) => void;
}
export function ReferencesPage({ onPageChange }: ReferencesPageProps) {
  const { language, t } = useLanguage();

  const references = [
    { 
      name: language === 'fr' ? "Groupe BNP Paribas" : "BNP Paribas Group", 
      sector: language === 'fr' ? "Banque" : "Banking", 
      testimonial: language === 'fr' ? "Service impeccable depuis 3 ans. Leur professionnalisme et leur réactivité nous ont convaincus." : "Impeccable service for 3 years. Their professionalism and responsiveness convinced us.",
      rating: 5,
      duration: language === 'fr' ? "3 ans" : "3 years",
      size: language === 'fr' ? "Grande entreprise" : "Large company",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop"
    },
    { 
      name: "Carrefour Market", 
      sector: language === 'fr' ? "Grande distribution" : "Retail", 
      testimonial: language === 'fr' ? "Équipe réactive et professionnelle. Nos magasins n'ont jamais été aussi propres." : "Reactive and professional team. Our stores have never been so clean.",
      rating: 5,
      duration: language === 'fr' ? "2 ans" : "2 years",
      size: language === 'fr' ? "Chaîne nationale" : "National chain",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop"
    },
    { 
      name: language === 'fr' ? "Hôtel Marriott" : "Marriott Hotel", 
      sector: language === 'fr' ? "Hôtellerie" : "Hospitality", 
      testimonial: language === 'fr' ? "Qualité constante, clients satisfaits. Un partenaire de confiance pour notre établissement." : "Consistent quality, satisfied customers. A trusted partner for our establishment.",
      rating: 5,
      duration: language === 'fr' ? "4 ans" : "4 years",
      size: language === 'fr' ? "Hôtel 5 étoiles" : "5-star hotel",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop"
    }
    // { 
    //   name: language === 'fr' ? "Centre médical Saint-Antoine" : "Saint-Antoine Medical Center", 
    //   sector: language === 'fr' ? "Santé" : "Healthcare", 
    //   testimonial: language === 'fr' ? "Respect strict des protocoles d'hygiène. Indispensable dans notre secteur d'activité." : "Strict compliance with hygiene protocols. Essential in our field of activity.",
    //   rating: 5,
    //   duration: language === 'fr' ? "5 ans" : "5 years",
    //   size: language === 'fr' ? "Centre médical" : "Medical center",
    //   image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop"
    // },
    // { 
    //   name: language === 'fr' ? "Lycée Jean-Moulin" : "Jean-Moulin High School", 
    //   sector: language === 'fr' ? "Éducation" : "Education", 
    //   testimonial: language === 'fr' ? "Environnement sain pour nos élèves. Des espaces d'apprentissage toujours impeccables." : "Healthy environment for our students. Always impeccable learning spaces.",
    //   rating: 5,
    //   duration: language === 'fr' ? "6 ans" : "6 years",
    //   size: language === 'fr' ? "1200 élèves" : "1200 students",
    //   image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=300&fit=crop"
    // },
    // { 
    //   name: language === 'fr' ? "Siège social Danone" : "Danone Headquarters", 
    //   sector: language === 'fr' ? "Agroalimentaire" : "Food Industry", 
    //   testimonial: language === 'fr' ? "Partenaire de confiance depuis 5 ans. Excellence et innovation dans chaque intervention." : "Trusted partner for 5 years. Excellence and innovation in every intervention.",
    //   rating: 5,
    //   duration: language === 'fr' ? "5 ans" : "5 years",
    //   size: language === 'fr' ? "Siège social" : "Headquarters",
    //   image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop"
    // }
  ];

  const stats = [
    { 
      icon: Building, 
      value: "150+", 
      label: language === 'fr' ? "Clients actifs" : "Active clients" 
    },
    { 
      icon: Users, 
      value: "98%", 
      label: language === 'fr' ? "Satisfaction client" : "Client satisfaction" 
    },
    { 
      icon: Award, 
      value: "10+", 
      label: language === 'fr' ? "Années d'expérience" : "Years of experience" 
    },
    { 
      icon: Star, 
      value: "4.9/5", 
      label: language === 'fr' ? "Note moyenne" : "Average rating" 
    }
  ];

  return (
    <div className="min-h-screen">
      <AnimatedHero
        title={language === 'fr' ? "Nos références" : "Our references"}
        subtitle={"Découvrez les témoignages de nos clients satisfaits qui nous font confiance depuis des années" }
        // description={language === 'fr' ? 
        //   "Découvrez les témoignages de nos clients satisfaits qui nous font confiance depuis des années" : 
        //   "Discover testimonials from our satisfied clients who have trusted us for years"
        // }
        backgroundImage="https://images.unsplash.com/photo-1698423606637-3c3aa853f8a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZyUyMG1haW50ZW5hbmNlfGVufDF8fHx8MTc1NzUwMjE5N3ww&ixlib=rb-4.1.0&q=80&w=1080"
        actions={[
          {
            label: t("common.contact"),
            onClick: () => onPageChange("quote"),
            className: "bg-yellow-500 hover:bg-yellow-600 text-black",
          }
        ]}
        height="h-[500px]"
      />

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full mb-4">
                    <IconComponent size={24} />
                  </div>
                  <div className="text-3xl font-bold text-[#333333] mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* References Carousel */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
              {language === 'fr' ? "Témoignages clients" : "Client testimonials"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'fr' ? 
                "Découvrez ce que nos clients pensent de nos services" : 
                "Discover what our clients think about our services"
              }
            </p>
          </motion.div>

          <Carousel className="w-full">
            <CarouselContent className="flex gap-4 overflow-x-auto -ml-2 md:-ml-4">
              {references.map((reference, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 min-w-[320px]">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="h-full"
                  >
                    <Card className="h-full min-h-[400px] shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white group hover:scale-105">
                      <CardContent className="p-0 h-full">
                        <div className="relative h-48 overflow-hidden rounded-t-lg">
                          <img 
                            src={reference.image} 
                            alt={reference.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold">{reference.rating}</span>
                          </div>
                        </div>
                        
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="font-bold text-lg text- group-hover:text-primary transition-colors">
                              {reference.name}
                            </h3>
                            <span className="text-sm text-primary bg-gray-200 px-2 py-1 rounded-full">
                              {reference.sector}
                            </span>
                          </div>
                          
                          <p className="text-gray-600 italic mb-4 line-clamp-3">
                            "{reference.testimonial}"
                          </p>
                          
                          <div className="flex justify-between items-center text-sm text-gray-500">
                            <div className="flex items-center space-x-4">
                              <span>📅 {reference.duration}</span>
                              <span>🏢 {reference.size}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <CarouselPrevious className="hidden md:flex -left-12 bg-[#0680d2] text-white hover:bg-[#0680d2]/90" />
            <CarouselNext className="hidden md:flex -right-12 bg-[#0680d2] text-white hover:bg-[#0680d2]/90" /> */}
          </Carousel>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {language === 'fr' ? 
                "Rejoignez nos clients satisfaits" : 
                "Join our satisfied clients"
              }
            </h2>
            <p className="text-xl text-white mb-8">
              {language === 'fr' ?
                "Découvrez pourquoi plusieurs entreprises nous font confiance" : 
                "Discover why many companies trust us"
              }
            </p>
            <Button 
            size="lg"
            onClick={() => onPageChange('contact')}
            className="bg-yellow-500 hover:bg-yellow-600 text-black"
          >
            {t('common.contact')}
          </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ReferencesPage;