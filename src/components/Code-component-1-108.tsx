import React from 'react';
import { motion } from 'motion/react';
import { Users, Target, Lightbulb, Heart, Award, Recycle } from 'lucide-react';
import DynamicHero from './DynamicHero';
import { useLanguage } from '../contexts/LanguageContext';

const AboutPage: React.FC = () => {
  const { language } = useLanguage();

  const values = [
    {
      icon: Award,
      title: language === 'fr' ? "Excellence" : "Excellence",
      description: language === 'fr' ? 
        "Excellence et qualité dans chaque prestation" : 
        "Excellence and quality in every service"
    },
    {
      icon: Recycle,
      title: language === 'fr' ? "Écologie" : "Ecology",
      description: language === 'fr' ? 
        "Respect de l'environnement et développement durable" : 
        "Environmental respect and sustainable development"
    },
    {
      icon: Users,
      title: language === 'fr' ? "Écoute" : "Listening",
      description: language === 'fr' ? 
        "Écoute client et solutions personnalisées" : 
        "Client listening and personalized solutions"
    },
    {
      icon: Lightbulb,
      title: language === 'fr' ? "Innovation" : "Innovation",
      description: language === 'fr' ? 
        "Innovation et amélioration continue" : 
        "Innovation and continuous improvement"
    }
  ];

  const timeline = [
    {
      year: "2013",
      title: language === 'fr' ? "Fondation" : "Foundation",
      description: language === 'fr' ? 
        "Création d'Oxygène avec la volonté de proposer des services de nettoyage de haute qualité" : 
        "Creation of Oxygène with the desire to offer high-quality cleaning services"
    },
    {
      year: "2015",
      title: language === 'fr' ? "Expansion" : "Expansion",
      description: language === 'fr' ? 
        "Développement de notre clientèle et recrutement de nos premiers chefs d'équipe" : 
        "Development of our clientele and recruitment of our first team leaders"
    },
    {
      year: "2018",
      title: language === 'fr' ? "Certification" : "Certification",
      description: language === 'fr' ? 
        "Obtention de certifications qualité et environnementales" : 
        "Obtaining quality and environmental certifications"
    },
    {
      year: "2021",
      title: language === 'fr' ? "Innovation" : "Innovation",
      description: language === 'fr' ? 
        "Adoption de nouvelles technologies et produits éco-responsables" : 
        "Adoption of new technologies and eco-responsible products"
    },
    {
      year: "2024",
      title: language === 'fr' ? "Leadership" : "Leadership",
      description: language === 'fr' ? 
        "Plus de 150 clients actifs et position de leader sur notre marché" : 
        "More than 150 active clients and leadership position in our market"
    }
  ];

  return (
    <div className="min-h-screen">
      <DynamicHero
        title={language === 'fr' ? "À propos d'Oxygène" : "About Oxygène"}
        subtitle={language === 'fr' ? "Plus de 10 ans d'expertise" : "More than 10 years of expertise"}
        description={language === 'fr' ? 
          "Depuis plus de 10 ans, Oxygène s'impose comme le partenaire de référence pour tous vos besoins en hygiène et nettoyage professionnel." : 
          "For more than 10 years, Oxygène has established itself as the reference partner for all your professional hygiene and cleaning needs."
        }
        backgroundImage="https://images.unsplash.com/photo-1742483359033-13315b247c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwcHJvZmVzc2lvbmFsJTIwY2xlYW5pbmd8ZW58MXx8fHwxNzU3NTAyMTk3fDA&ixlib=rb-4.1.0&q=80&w=1080"
        height="h-[70vh]"
        showCTA={true}
        ctaText={language === 'fr' ? "Découvrir nos services" : "Discover our services"}
      />

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6">
              {language === 'fr' ? "Notre histoire" : "Our story"}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {language === 'fr' ? 
                "Fondée en 2013, notre entreprise est née de la volonté de proposer des services de nettoyage de haute qualité, respectueux de l'environnement et adaptés aux besoins spécifiques de chaque client." : 
                "Founded in 2013, our company was born from the desire to offer high-quality cleaning services that are environmentally friendly and adapted to the specific needs of each client."
              }
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-[#0680d2]"></div>
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? 'justify-end pr-8' : 'justify-start pl-8'
                }`}
              >
                <div className={`max-w-md ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#0680d2]">
                    <span className="text-2xl font-bold text-[#0680d2]">{item.year}</span>
                    <h3 className="text-xl font-semibold text-[#333333] mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#0680d2] rounded-full border-4 border-white"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-[#f5f7fa]">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6">
              {language === 'fr' ? "Nos valeurs" : "Our values"}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'fr' ? 
                "Les valeurs qui guident notre action au quotidien" : 
                "The values that guide our daily actions"
              }
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0680d2] text-white rounded-full mb-4">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-[#333333] mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6">
              {language === 'fr' ? "Notre équipe" : "Our team"}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {language === 'fr' ? 
                "Nos équipes sont formées aux dernières techniques de nettoyage et utilisent exclusivement des produits professionnels certifiés. Chaque intervention est supervisée par nos chefs d'équipe expérimentés." : 
                "Our teams are trained in the latest cleaning techniques and use exclusively certified professional products. Each intervention is supervised by our experienced team leaders."
              }
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#f5f7fa] p-6 rounded-lg"
            >
              <div className="text-3xl font-bold text-[#0680d2] mb-2">50+</div>
              <div className="text-gray-600">
                {language === 'fr' ? "Professionnels qualifiés" : "Qualified professionals"}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#f5f7fa] p-6 rounded-lg"
            >
              <div className="text-3xl font-bold text-[#0680d2] mb-2">15</div>
              <div className="text-gray-600">
                {language === 'fr' ? "Chefs d'équipe expérimentés" : "Experienced team leaders"}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-[#f5f7fa] p-6 rounded-lg"
            >
              <div className="text-3xl font-bold text-[#0680d2] mb-2">24/7</div>
              <div className="text-gray-600">
                {language === 'fr' ? "Support disponible" : "Available support"}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;