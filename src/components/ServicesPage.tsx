import React from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useLanguage } from "../contexts/LanguageContext";
import {
  Building2,
  Home,
  ShoppingBag,
  RectangleHorizontal,
  Sparkles,
  TreePine,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { AnimatedHero } from "./AnimatedHero";

interface ServicesPageProps {
  onPageChange: (page: string) => void;
}

export function ServicesPage({
  onPageChange,
}: ServicesPageProps) {
  const { t } = useLanguage();

  const services = [
    {
      icon: Building2,
      title: t("services.offices"),
      description:
        "Nettoyage complet des espaces de travail, bureaux individuels et open-spaces. Entretien quotidien, hebdomadaire ou selon vos besoins.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600",
      features: [
        "Nettoyage des postes de travail",
        "Vidage des corbeilles",
        "Aspiration et lavage des sols",
        "Nettoyage des sanitaires",
        "Entretien des espaces communs",
      ],
    },
    {
      icon: ShoppingBag,
      title: t("services.commercial"),
      description:
        "Solutions adaptées aux commerces, restaurants, magasins et centres commerciaux. Image impeccable pour vos clients.",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600",
      features: [
        "Nettoyage des vitrines",
        "Entretien des zones de vente",
        "Nettoyage des sols haute fréquentation",
        "Désinfection des surfaces",
        "Nettoyage nocturne disponible",
      ],
    },
    {
      icon: Building2,
      title: t("services.buildings"),
      description:
        "Entretien complet de bâtiments résidentiels et tertiaires. Parties communes, ascenseurs, halls d'entrée.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
      features: [
        "Halls et entrées",
        "Escaliers et paliers",
        "Ascenseurs",
        "Caves et parkings",
        "Espaces verts communs",
      ],
    },
    {
      icon: Home,
      title: t("services.homes"),
      description:
        "Service de ménage résidentiel personnalisé. Maisons, appartements, villas avec attention aux détails.",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
      features: [
        "Ménage régulier ou ponctuel",
        "Grand nettoyage de printemps",
        "Nettoyage après travaux",
        "Entretien des appareils",
        "Repassage sur demande",
      ],
    },
    {
      icon: RectangleHorizontal,
      title: t("services.windows"),
      description:
        "Nettoyage professionnel de vitres pour immeubles, magasins et résidences. Équipement spécialisé pour tous types de bâtiments.",
      image:
        "https://images.unsplash.com/photo-1630908650794-e76619014675?w=600",
      features: [
        "Vitres en hauteur",
        "Façades vitrées",
        "Fenêtres résidentielles",
        "Vitrines commerciales",
        "Nettoyage intérieur/extérieur",
      ],
    },
    {
      icon: Sparkles,
      title: t("services.carpet"),
      description:
        "Nettoyage en profondeur de tapis et moquettes. Techniques professionnelles pour tous types de textiles.",
      image:
        "https://images.unsplash.com/photo-1625044364652-c841c1ae31b1?w=600",
      features: [
        "Injection-extraction",
        "Nettoyage à sec",
        "Détachage spécialisé",
        "Désodorisation",
        "Protection anti-taches",
      ],
    },
    {
      icon: TreePine,
      title: t("services.parquet"),
      description:
        "Entretien spécialisé des parquets et sols en bois. Nettoyage, cirage et rénovation selon le type de bois.",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600",
      features: [
        "Nettoyage adapté au type de bois",
        "Cirage et lustrage",
        "Rénovation légère",
        "Protection du bois",
        "Conseil d'entretien",
      ],
    },
    {
      icon: Sparkles,
      title: t("services.marble"),
      description:
        "Nettoyage et entretien du marbre et pierres naturelles. Techniques spécialisées pour préserver l'éclat.",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600",
      features: [
        "Cristallisation du marbre",
        "Polissage professionnel",
        "Traitement anti-taches",
        "Rénovation des rayures",
        "Entretien préventif",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Animated Header */}
      <AnimatedHero
        title={t("services.title")}
        subtitle={t("services.subtitle")}
        backgroundImage="https://images.unsplash.com/photo-1648469941040-b1c1fac2d4b2?w=1200"
        actions={[
          {
            label: t("common.getQuote"),
            onClick: () => onPageChange("quote"),
            className: "bg-yellow-500 hover:bg-yellow-600 text-black",
          },
          {
            label: t("common.contact"),
            onClick: () => onPageChange("contact"),
            variant: "outline",
            className: "text-white border-white hover:bg-white hover:text-black",
          },
        ]}
        height="h-[500px]"
      />

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="relative h-64 md:h-auto">
                      <ImageWithFallback
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <CardHeader className="p-0">
                        <div className="flex items-center space-x-3 mb-4">
                          <IconComponent className="h-8 w-8 text-primary" />
                          <CardTitle className="text-xl">
                            {service.title}
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="p-0">
                        <p className="text-gray-600 mb-4">
                          {service.description}
                        </p>
                        <ul className="space-y-2 mb-4">
                          {service.features.map(
                            (feature, featureIndex) => (
                              <li
                                key={featureIndex}
                                className="flex items-start space-x-2"
                              >
                                <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-gray-600">
                                  {feature}
                                </span>
                              </li>
                            ),
                          )}
                        </ul>
                        <Button
                          onClick={() => onPageChange("quote")}
                          variant="outline"
                          className="w-full"
                        >
                          {t("common.getQuote")}{" "}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Notre processus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="font-semibold mb-2">Évaluation</h3>
              <p className="text-gray-600 text-sm">
                Visite gratuite pour évaluer vos besoins et
                définir le protocole adapté
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="font-semibold mb-2">Devis</h3>
              <p className="text-gray-600 text-sm">
                Proposition détaillée avec tarifs transparents
                et planning d'intervention
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="font-semibold mb-2">
                Intervention
              </h3>
              <p className="text-gray-600 text-sm">
                Équipe professionnelle avec matériel et produits
                adaptés
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">4</span>
              </div>
              <h3 className="font-semibold mb-2">Contrôle</h3>
              <p className="text-gray-600 text-sm">
                Vérification qualité et satisfaction client
                garantie
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Pourquoi choisir Oxygène ?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent mt-0.5" />
                  <div>
                    <h3 className="font-semibold">
                      Équipe certifiée
                    </h3>
                    <p className="text-gray-600">
                      Personnel formé aux dernières techniques
                      et normes de sécurité
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent mt-0.5" />
                  <div>
                    <h3 className="font-semibold">
                      Produits écologiques
                    </h3>
                    <p className="text-gray-600">
                      Engagement environnemental avec des
                      produits certifiés
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent mt-0.5" />
                  <div>
                    <h3 className="font-semibold">
                      Assurance complète
                    </h3>
                    <p className="text-gray-600">
                      Responsabilité civile et professionnelle
                      pour votre tranquillité
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent mt-0.5" />
                  <div>
                    <h3 className="font-semibold">
                      Flexibilité horaire
                    </h3>
                    <p className="text-gray-600">
                      Interventions adaptées à vos contraintes,
                      y compris en dehors des heures ouvrables
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600"
                alt="Équipe professionnelle de nettoyage"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à commencer ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contactez-nous pour un devis gratuit et personnalisé
          </p>
          <div className="space-x-4">
            <Button
              size="lg"
              onClick={() => onPageChange("quote")}
              className="bg-accent hover:bg-accent/90"
            >
              {t("common.getQuote")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onPageChange("contact")}
              className="text-white border-white hover:bg-white hover:text-primary"
            >
              {t("common.contact")}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}