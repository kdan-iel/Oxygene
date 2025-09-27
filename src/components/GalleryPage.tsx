import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Eye, Download, Filter } from 'lucide-react';
import { AnimatedHero } from './AnimatedHero';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';

interface GalleryPageProps {
  onPageChange: (page: string) => void;
}

export function GalleryPage({ onPageChange }: GalleryPageProps) {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: language === 'fr' ? 'Tous' : 'All' },
    { id: 'office', name: language === 'fr' ? 'Bureaux' : 'Offices' },
    { id: 'medical', name: language === 'fr' ? 'Médical' : 'Medical' },
    { id: 'industrial', name: language === 'fr' ? 'Industriel' : 'Industrial' },
    { id: 'commercial', name: language === 'fr' ? 'Commercial' : 'Commercial' }
  ];

  const projects = [
    {
      id: 1,
      category: 'office',
      title: language === 'fr' ? 'Bureaux Tour Montparnasse' : 'Montparnasse Tower Offices',
      description: language === 'fr' ? 'Nettoyage complet des espaces de bureaux' : 'Complete cleaning of office spaces',
      beforeImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=300&fit=crop',
      surface: '2,500 m²',
      duration: language === 'fr' ? '2 jours' : '2 days'
    },
    {
      id: 2,
      category: 'medical',
      title: language === 'fr' ? 'Clinique Saint-Louis' : 'Saint-Louis Clinic',
      description: language === 'fr' ? 'Désinfection et nettoyage médical' : 'Medical disinfection and cleaning',
      beforeImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop',
      surface: '1,200 m²',
      duration: language === 'fr' ? '1 jour' : '1 day'
    },
    {
      id: 3,
      category: 'industrial',
      title: language === 'fr' ? 'Usine Renault' : 'Renault Factory',
      description: language === 'fr' ? 'Nettoyage industriel spécialisé' : 'Specialized industrial cleaning',
      beforeImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop',
      surface: '5,000 m²',
      duration: language === 'fr' ? '3 jours' : '3 days'
    },
    {
      id: 4,
      category: 'commercial',
      title: language === 'fr' ? 'Centre Commercial Vélizy' : 'Vélizy Shopping Center',
      description: language === 'fr' ? 'Entretien des espaces commerciaux' : 'Commercial space maintenance',
      beforeImage: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1555529771-835d4e37b0ce?w=400&h=300&fit=crop',
      surface: '3,200 m²',
      duration: language === 'fr' ? '1 jour' : '1 day'
    },
    {
      id: 5,
      category: 'office',
      title: language === 'fr' ? 'Siège Social BNP' : 'BNP Headquarters',
      description: language === 'fr' ? 'Nettoyage de prestige' : 'Premium cleaning',
      beforeImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=300&fit=crop',
      surface: '4,000 m²',
      duration: language === 'fr' ? '2 jours' : '2 days'
    },
    {
      id: 6,
      category: 'medical',
      title: language === 'fr' ? 'Hôpital Européen' : 'European Hospital',
      description: language === 'fr' ? 'Protocole hospitalier strict' : 'Strict hospital protocol',
      beforeImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop',
      surface: '6,500 m²',
      duration: language === 'fr' ? '4 jours' : '4 days'
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <AnimatedHero
        title={language === 'fr' ? "Découvrez nos réalisations" : "Discover our achievements"}
        subtitle={language === 'fr' ? "Explorez nos projets de nettoyage et découvrez la transformation de nos espaces clients." : " "}
        // description={language === 'fr' ? 
        //   "Explorez nos projets de nettoyage et découvrez la transformation de nos espaces clients." : 
        //   "Explore our cleaning projects and discover the transformation of our client spaces."
        // }
        backgroundImage="https://images.unsplash.com/photo-1705990787785-3ca3eb668131?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwaHlnaWVuZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTc1MDIxOTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
       actions={[
          {
            label: "Nous Contacter",
            onClick: () => onPageChange("contact"),
            className: "bg-yellow-500 hover:bg-yellow-600 text-black",
          }
        ]}
        height="h-[500px]"
        />

      {/* Filter Section */}
      <section className="py-8 h-24 flex items-center bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center text-gray-600 mr-4">
              <Filter size={20} className="mr-2" />
              <span>{language === 'fr' ? 'Filtrer par :' : 'Filter by:'}</span>
            </div>
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={selectedCategory === category.id 
                  ? "bg-primary text-white" 
                  : "border-primary text-primary hover:bg-primary hover:text-white"
                }
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6">
              {language === 'fr' ? "Nos transformations" : "Our transformations"}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'fr' ? 
                "Chaque projet est une réussite, découvrez nos résultats" : 
                "Every project is a success, discover our results"
              }
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                layout
              >
                <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="relative">
                    {/* Before/After Slider */}
                    <div className="relative h-64 overflow-hidden">
                      <div className="absolute inset-0 flex">
                        <div className="w-1/2 relative overflow-hidden">
                          <img 
                            src={project.beforeImage} 
                            alt={`${project.title} - before`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm">
                            {language === 'fr' ? 'Avant' : 'Before'}
                          </div>
                        </div>
                        <div className="w-1/2 relative overflow-hidden">
                          <img 
                            src={project.afterImage} 
                            alt={`${project.title} - after`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-sm">
                            {language === 'fr' ? 'Après' : 'After'}
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-y-0 left-1/2 w-0.5 bg-white shadow-lg"></div>
                      
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="flex space-x-4">
                          <Button size="sm" className="bg-white text-black hover:bg-gray-100">
                            <Eye size={16} className="mr-2" />
                            {language === 'fr' ? 'Voir' : 'View'}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-[#333333] mb-2 group-hover:text-[#0680d2] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <div className="flex items-center">
                        <span className="mr-4">📐 {project.surface}</span>
                        <span>⏱️ {project.duration}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-4xl font-bold text-[#333333] mb-6">
              {language === 'fr' ? "Nos chiffres" : "Our numbers"}
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: language === 'fr' ? "Projets réalisés" : "Completed projects" },
              { value: "250,000+", label: language === 'fr' ? "m² nettoyés" : "m² cleaned" },
              { value: "98%", label: language === 'fr' ? "Satisfaction client" : "Client satisfaction" },
              { value: "48h", label: language === 'fr' ? "Délai moyen" : "Average turnaround" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;