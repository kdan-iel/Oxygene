import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock, Users, Send } from 'lucide-react';
import { AnimatedHero } from './AnimatedHero';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';

interface CareersPageProps {
  onPageChange: (page: string) => void;
}

export function CareersPage({ onPageChange }: CareersPageProps) {
  const { language } = useLanguage();

  const jobs = [
    {
      title: language === 'fr' ? "Agent de nettoyage (H/F)" : "Cleaning Agent (M/F)",
      location: language === 'fr' ? "Paris" : "Paris",
      type: language === 'fr' ? "CDI" : "Permanent contract",
      description: language === 'fr' ? 
        "Rejoignez notre équipe pour assurer la propreté des espaces professionnels. Formation assurée." : 
        "Join our team to ensure the cleanliness of professional spaces. Training provided.",
      requirements: language === 'fr' ? [
        "Expérience souhaitée mais non obligatoire",
        "Sens du détail et de la qualité",
        "Capacité à travailler en équipe",
        "Ponctualité et fiabilité"
      ] : [
        "Experience desired but not required",
        "Attention to detail and quality",
        "Ability to work in a team",
        "Punctuality and reliability"
      ]
    },
    {
      title: language === 'fr' ? "Chef d'équipe nettoyage (H/F)" : "Cleaning Team Leader (M/F)",
      location: language === 'fr' ? "Région parisienne" : "Paris region",
      type: language === 'fr' ? "CDI" : "Permanent contract",
      description: language === 'fr' ? 
        "Encadrez une équipe d'agents de nettoyage et assurez la qualité des prestations." : 
        "Supervise a team of cleaning agents and ensure the quality of services.",
      requirements: language === 'fr' ? [
        "Expérience en encadrement d'équipe",
        "Connaissance des techniques de nettoyage",
        "Leadership et communication",
        "Permis B requis"
      ] : [
        "Experience in team management",
        "Knowledge of cleaning techniques",
        "Leadership and communication",
        "Driving license required"
      ]
    },
    {
      title: language === 'fr' ? "Technicien vitres (H/F)" : "Window Technician (M/F)",
      location: language === 'fr' ? "Paris" : "Paris",
      type: language === 'fr' ? "CDD" : "Fixed-term contract",
      description: language === 'fr' ? 
        "Spécialisez-vous dans le nettoyage de vitres en hauteur et surfaces vitrées." : 
        "Specialize in cleaning windows at height and glass surfaces.",
      requirements: language === 'fr' ? [
        "Expérience en nettoyage de vitres",
        "Aptitude au travail en hauteur",
        "Certificat médical obligatoire",
        "Rigueur et précision"
      ] : [
        "Experience in window cleaning",
        "Ability to work at height",
        "Medical certificate required",
        "Rigor and precision"
      ]
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: language === 'fr' ? "Équipe bienveillante" : "Caring team",
      description: language === 'fr' ? 
        "Rejoignez une équipe soudée où l'entraide est la règle" : 
        "Join a tight-knit team where mutual support is the rule"
    },
    {
      icon: Clock,
      title: language === 'fr' ? "Horaires flexibles" : "Flexible hours",
      description: language === 'fr' ? 
        "Bénéficiez d'horaires adaptés à votre vie personnelle" : 
        "Benefit from hours adapted to your personal life"
    },
    {
      icon: MapPin,
      title: language === 'fr' ? "Proximité" : "Proximity",
      description: language === 'fr' ? 
        "Missions proche de votre domicile pour limiter les déplacements" : 
        "Missions close to your home to limit travel"
    }
  ];

  return (
    <div className="min-h-screen">
      <AnimatedHero
        title={language === 'fr' ? "Rejoignez notre équipe" : "Join our team"}
        subtitle={language === 'fr' ? "Construisons ensemble l'avenir" : "Let's build the future together"}
        // description={language === 'fr' ? 
        //   "Oxygène recrute régulièrement des professionnels motivés pour renforcer ses équipes. Découvrez nos opportunités." : 
        //   "Oxygène regularly recruits motivated professionals to strengthen its teams. Discover our opportunities."
        // }
        backgroundImage="https://images.unsplash.com/photo-1742483359033-13315b247c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwcHJvZmVzc2lvbmFsJTIwY2xlYW5pbmd8ZW58MXx8fHwxNzU3NTAyMTk3fDA&ixlib=rb-4.1.0&q=80&w=1080"
        actions={[
          {
            label: "Nous Contacter",
            onClick: () => onPageChange("quote"),
            className: "bg-yellow-500 hover:bg-yellow-600 text-black",
          }
        ]}
        height="h-[500px]"
        />

      {/* Why join us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6">
              {language === 'fr' ? "Pourquoi nous rejoindre ?" : "Why join us?"}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'fr' ? 
                "Découvrez les avantages de travailler chez Oxygène" : 
                "Discover the benefits of working at Oxygène"
              }
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full mb-4">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-bg-neutral-800 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Job Offers */}
      <section className="py-16 bg-white">
        <div className="container max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-4xl font-bold text-bg-neutral-800 mb-6">
              {language === 'fr' ? "Nos offres d'emploi" : "Our job offers"}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'fr' ? 
                "Trouvez le poste qui vous correspond" : 
                "Find the position that suits you"
              }
            </p>
          </motion.div>

          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-bg-neutral-800">{job.title}</h3>
                      <span className="bg-gray-100 text-primary px-3 py-1 rounded-full text-sm">
                        {job.type}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin size={16} className="mr-2" />
                      <span>{job.location}</span>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{job.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-[#333333] mb-3">
                        {language === 'fr' ? "Profil recherché :" : "Required profile:"}
                      </h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex space-x-2 items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-600">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                      <Send size={16} className="mr-2" />
                      {language === 'fr' ? "Postuler" : "Apply"}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-gray-100">
        <div className="container max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-4xl font-bold text-[#333333] mb-6">
              {language === 'fr' ? "Comment postuler ?" : "How to apply?"}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'fr' ? 
                "Un processus de recrutement simple et transparent" : 
                "A simple and transparent recruitment process"
              }
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: language === 'fr' ? "Candidature" : "Application",
                description: language === 'fr' ? 
                  "Envoyez-nous votre CV et lettre de motivation" : 
                  "Send us your CV and cover letter"
              },
              {
                step: "2",
                title: language === 'fr' ? "Entretien" : "Interview",
                description: language === 'fr' ? 
                  "Rencontrez notre équipe RH pour un entretien" : 
                  "Meet our HR team for an interview"
              },
              {
                step: "3",
                title: language === 'fr' ? "Intégration" : "Integration",
                description: language === 'fr' ? 
                  "Formation et accompagnement personnalisé" : 
                  "Training and personalized support"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full text-2xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-[#333333] mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;