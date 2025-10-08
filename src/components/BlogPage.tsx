import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { useLanguage } from '../contexts/LanguageContext';
import { AnimatedHero } from './AnimatedHero';
import { Search, Calendar, ArrowRight, Tag, Fullscreen } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { BlogPostModal } from "./ui/blogpost_modal";

interface BlogPageProps {
  onPageChange: (page: string) => void;
}

export function BlogPage({ onPageChange }: BlogPageProps) {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: '5 conseils pour maintenir un bureau propre',
      excerpt: 'Découvrez nos astuces pour garder votre espace de travail impeccable au quotidien et améliorer la productivité.',
      fulltext: 'Découvrez nos astuces pour garder votre espace de travail impeccable au quotidien et améliorer la productivité. Un bureau propre favorise un environnement sain et agréable, propice à la concentration et à l’efficacité. Voici cinq conseils essentiels pour y parvenir : 1. Établissez une routine de nettoyage quotidienne : Prenez quelques minutes chaque jour pour ranger votre bureau, jeter les déchets et essuyer les surfaces. 2. Utilisez des produits adaptés : Choisissez des produits de nettoyage efficaces mais respectueux de l’environnement pour éviter les allergies et préserver la qualité de l’air. 3. Organisez vos fournitures : Utilisez des boîtes, des tiroirs et des organisateurs pour garder vos affaires en ordre et éviter l’encombrement. 4. Nettoyez régulièrement les équipements électroniques : Claviers, souris et écrans accumulent poussière et bactéries, pensez à les désinfecter fréquemment. 5. Impliquez toute l’équipe : Encouragez vos collègues à participer au maintien de la propreté du bureau pour créer un environnement collectif agréable.',
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600",
      date: '15 Nov 2024',
      category: 'Bureaux',
      readTime: '5 min'
    },
    {
      id: 2,
      title: 'Produits écologiques : l\'avenir du nettoyage',
      excerpt: 'Comment les produits respectueux de l\'environnement révolutionnent le secteur du nettoyage professionnel.',
      fulltext: 'Comment les produits respectueux de l\'environnement révolutionnent le secteur du nettoyage professionnel. L\'utilisation de produits écologiques dans le nettoyage professionnel est devenue une priorité pour de nombreuses entreprises soucieuses de leur impact environnemental. Ces produits, souvent biodégradables et non toxiques, offrent une alternative sûre aux produits chimiques traditionnels qui peuvent être nocifs pour la santé humaine et l\'écosystème. En adoptant des solutions de nettoyage vertes, les entreprises contribuent à la réduction des émissions de gaz à effet de serre, à la préservation de la biodiversité et à la protection des ressources en eau. De plus, les produits écologiques sont souvent tout aussi efficaces que leurs homologues chimiques, offrant des résultats impeccables sans compromettre la sécurité. En intégrant ces pratiques durables, le secteur du nettoyage professionnel joue un rôle crucial dans la promotion d\'un avenir plus vert et plus sain pour tous.',
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
      date: '12 Nov 2024',
      category: 'Écologie',
      readTime: '7 min'
    },
    {
      id: 3,
      title: 'Entretien des sols : techniques professionnelles',
      excerpt: 'Les secrets d\'un nettoyage de sol durable et efficace selon le type de revêtement.',
      fulltext: 'Les secrets d\'un nettoyage de sol durable et efficace selon le type de revêtement. L\'entretien des sols est une tâche essentielle pour maintenir la propreté et l\'esthétique des espaces intérieurs. Chaque type de revêtement, qu\'il s\'agisse de carrelage, de bois, de moquette ou de vinyle, nécessite des techniques spécifiques pour garantir un nettoyage optimal sans endommager la surface. Pour les sols en carrelage, l\'utilisation d\'un balai à franges humide avec un détergent doux est recommandée pour éliminer la saleté sans rayer. Les sols en bois nécessitent un soin particulier avec des produits spécialement formulés pour préserver leur finition et éviter l\'humidité excessive. La moquette, quant à elle, bénéficie d\'un nettoyage régulier à l\'aspirateur et d\'un shampooing périodique pour éliminer les taches et les allergènes. Enfin, les sols en vinyle peuvent être nettoyés efficacement avec une solution d\'eau tiède et de savon doux. En adoptant ces techniques professionnelles adaptées à chaque type de sol, il est possible de prolonger la durée de vie des revêtements tout en assurant un environnement propre et sain.',  
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600",
      date: '8 Nov 2024',
      category: 'Techniques',
      readTime: '6 min'
    },
    {
      id: 4,
      title: 'Nettoyage après travaux : guide complet',
      excerpt: 'Tout ce qu\'il faut savoir pour un nettoyage efficace après des travaux de rénovation.',
      fulltext: 'Tout ce qu\'il faut savoir pour un nettoyage efficace après des travaux de rénovation. Le nettoyage après travaux est une étape cruciale pour rendre un espace habitable et agréable après des rénovations ou des constructions. Ce processus peut être complexe en raison de la poussière, des débris et des résidus laissés par les travaux. Pour un nettoyage efficace, il est essentiel de suivre une approche méthodique. Commencez par éliminer les gros débris à l\'aide d\'une pelle et d\'un balai, puis utilisez un aspirateur industriel pour enlever la poussière fine qui s\'est déposée sur toutes les surfaces. Les fenêtres, les murs et les sols doivent être nettoyés avec des produits adaptés pour éliminer les taches de peinture, de colle ou de plâtre. N\'oubliez pas de vérifier les systèmes de ventilation et les conduits d\'air, qui peuvent également accumuler de la poussière. Enfin, un nettoyage en profondeur des sanitaires et des cuisines est nécessaire pour garantir un environnement sain. En suivant ces étapes, vous assurerez un nettoyage complet et professionnel après vos travaux.',
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600",
      date: '5 Nov 2024',
      category: 'Spécialisé',
      readTime: '8 min'
    },
    {
      id: 5,
      title: 'Hygiène en cuisine professionnelle',
      excerpt: 'Normes et bonnes pratiques pour maintenir une hygiène irréprochable en restauration.',
      fulltext: 'Normes et bonnes pratiques pour maintenir une hygiène irréprochable en restauration. L\'hygiène en cuisine professionnelle est un élément fondamental pour garantir la sécurité alimentaire et la satisfaction des clients. Le respect des normes sanitaires est impératif pour prévenir les contaminations et assurer un environnement de travail sain. Parmi les bonnes pratiques à adopter, le lavage régulier des mains, le port de vêtements appropriés et l\'utilisation de gants sont essentiels pour minimiser les risques de transmission de bactéries. De plus, il est crucial de nettoyer et désinfecter fréquemment les surfaces de travail, les ustensiles et les équipements de cuisine. La gestion correcte des déchets et le stockage adéquat des aliments, notamment en respectant les températures recommandées, contribuent également à maintenir un haut niveau d\'hygiène. En formant le personnel aux procédures d\'hygiène et en effectuant des contrôles réguliers, les établissements de restauration peuvent garantir la sécurité alimentaire et offrir une expérience culinaire de qualité à leurs clients.',
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600",
      date: '2 Nov 2024',
      category: 'Restauration',
      readTime: '10 min'
    },
    {
      id: 6,
      title: 'Désinfection : protocoles COVID-19',
      excerpt: 'Mise en place des protocoles de désinfection adaptés aux nouvelles exigences sanitaires.',
      fulltext: 'Mise en place des protocoles de désinfection adaptés aux nouvelles exigences sanitaires. La pandémie de COVID-19 a mis en lumière l\'importance cruciale des protocoles de désinfection dans les espaces publics et professionnels. Pour minimiser la propagation du virus, il est essentiel d\'adopter des mesures rigoureuses de nettoyage et de désinfection. Cela inclut l\'utilisation de produits homologués par les autorités sanitaires, tels que l\'eau de Javel diluée ou les solutions à base d\'alcool, pour désinfecter les surfaces fréquemment touchées comme les poignées de porte, les interrupteurs, les comptoirs et les équipements partagés. Il est également recommandé d\'aérer régulièrement les espaces intérieurs pour renouveler l\'air et réduire la concentration virale. La formation du personnel aux bonnes pratiques de désinfection et le respect des consignes sanitaires sont des éléments clés pour assurer un environnement sûr. En mettant en œuvre ces protocoles adaptés, les entreprises peuvent contribuer à la protection de la santé publique tout en rassurant leurs clients et employés.',
      image: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?w=600",
      date: '30 Oct 2024',
      category: 'Santé',
      readTime: '9 min'
    }
  ];

  const categories = ['Tous', 'Bureaux', 'Écologie', 'Techniques', 'Spécialisé', 'Restauration', 'Santé'];
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Tous' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      {/* Animated Header */}
      <AnimatedHero
        title={t('blog.title')}
        subtitle={t('blog.subtitle')}
        backgroundImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200"
        actions={[
          {
            label: t('common.contact'),
            onClick: () =>
                  window.open(
                    "https://wa.me/22896130264",
                    "_blank"
                ),
            className: 'bg-yellow-500 hover:bg-yellow-600 text-black'
          }
        ]}
        height="h-[400px]"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Search and Filter */}
          <div className="mb-12">
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Rechercher un article..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? 'bg-primary' : ''}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogPostModal
                key={post.id}
                post={{
                  title: post.title,
                  description: post.excerpt,
                  content: (
                    <div>
                      <p>{post.fulltext}</p>
                    </div>
                  ),
                  image: post.image,
                }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white px-2 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <span>•</span>
                      <span>{post.readTime} de lecture</span>
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm line-clamp-3">{post.excerpt}</p>
                    
                  
                    <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80">
                      {t('common.readMore')} <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </BlogPostModal>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Aucun article trouvé pour votre recherche.</p>
            </div>
          )}

          {/* Newsletter Signup */}
          <div className="mt-16">
            <Card className="bg-primary text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Restez informé</h3>
                <p className="mb-6 opacity-90">
                  Recevez nos derniers conseils et astuces de nettoyage directement dans votre boîte mail
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input 
                    type="email" 
                    placeholder="Votre adresse email"
                    className="bg-white text-black"
                  />
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                    S'abonner
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}