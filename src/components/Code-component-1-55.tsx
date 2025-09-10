import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { useLanguage } from '../contexts/LanguageContext';
import { Search, Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BlogPageProps {
  onNavigate: (page: string) => void;
}

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
}

const BlogPage: React.FC<BlogPageProps> = ({ onNavigate }) => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Comment maintenir la propreté de vos bureaux au quotidien',
      excerpt: 'Découvrez nos conseils d\'experts pour maintenir un environnement de travail sain et productif.',
      content: `Un environnement de travail propre et organisé est essentiel pour la productivité et le bien-être des employés. Voici nos conseils d'experts pour maintenir la propreté de vos bureaux au quotidien.

## 1. Établir une routine de nettoyage

La régularité est la clé d'un bureau toujours propre. Nous recommandons :
- Nettoyage quotidien des surfaces de travail
- Désinfection régulière des équipements partagés
- Entretien hebdomadaire approfondi

## 2. Impliquer les équipes

Sensibilisez vos collaborateurs à l'importance de la propreté :
- Formation aux gestes d'hygiène
- Mise à disposition de produits de nettoyage
- Création d'un planning de responsabilités

## 3. Choisir les bons produits

L'utilisation de produits adaptés est cruciale :
- Produits écologiques pour préserver la santé
- Désinfectants efficaces contre les virus et bactéries
- Matériel professionnel pour un résultat optimal

La propreté des bureaux n'est pas seulement une question d'esthétique, c'est un investissement dans la santé et la productivité de vos équipes.`,
      author: 'Marie Dubois',
      date: '15 Jan 2024',
      readTime: '5 min',
      category: 'Conseils',
      image: 'https://images.unsplash.com/photo-1648469941040-b1c1fac2d4b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBjbGVhbmluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTc1MDExNjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['bureaux', 'routine', 'productivité']
    },
    {
      id: '2',
      title: 'Produits écologiques vs produits traditionnels : que choisir ?',
      excerpt: 'Comparaison des avantages et inconvénients des différents types de produits de nettoyage.',
      content: `Le choix entre produits écologiques et traditionnels est une question importante pour toute entreprise soucieuse de l'environnement et de la santé de ses employés.

## Les produits écologiques

### Avantages :
- Respect de l'environnement
- Meilleure qualité de l'air intérieur
- Réduction des allergies et irritations
- Image positive pour l'entreprise

### Inconvénients :
- Coût parfois plus élevé
- Efficacité variable selon les applications
- Nécessite parfois plus de temps d'action

## Les produits traditionnels

### Avantages :
- Efficacité prouvée
- Large gamme disponible
- Coût généralement inférieur
- Action rapide

### Inconvénients :
- Impact environnemental
- Risques pour la santé
- Odeurs parfois dérangeantes
- Réglementation de plus en plus stricte

## Notre recommandation

Chez Oxygène, nous privilégions une approche mixte : produits écologiques pour l'entretien quotidien et produits traditionnels pour les interventions spécialisées quand nécessaire.`,
      author: 'Pierre Martin',
      date: '12 Jan 2024',
      readTime: '7 min',
      category: 'Produits',
      image: 'https://images.unsplash.com/photo-1723759550818-48cfe5609381?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBjbGVhbmluZ3xlbnwxfHx8fDE3NTc1MDExNjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['écologie', 'produits', 'santé']
    },
    {
      id: '3',
      title: 'L\'importance du nettoyage régulier en période de pandémie',
      excerpt: 'Pourquoi un entretien régulier et rigoureux est plus essentiel que jamais pour la santé publique.',
      content: `La pandémie de COVID-19 a mis en lumière l'importance cruciale d'un nettoyage et d'une désinfection rigoureux dans tous les espaces publics et privés.

## Les enjeux sanitaires

### Transmission des virus
- Les surfaces peuvent rester contaminées plusieurs heures
- Certains virus survivent plus longtemps sur certains matériaux
- La désinfection régulière limite la propagation

### Protocoles renforcés
Nos équipes appliquent désormais :
- Désinfection multiple par jour des points de contact
- Utilisation de produits virucides homologués
- Port d'équipements de protection individuelle
- Formation continue aux nouveaux protocoles

## Impact sur les entreprises

### Rassurer les collaborateurs
Un environnement visiblement propre et désinfecté :
- Rassure les employés sur leur sécurité
- Améliore le moral et la productivité
- Réduit l'absentéisme lié aux maladies

### Responsabilité légale
Les employeurs ont une obligation de sécurité :
- Mise en place de mesures de prévention
- Documentation des protocoles appliqués
- Formation du personnel aux gestes barrières

## Nos solutions adaptées

Oxygène a développé des protocoles spécifiques pour répondre à ces nouveaux défis, en s'appuyant sur les recommandations des autorités sanitaires.`,
      author: 'Dr. Sophie Leroy',
      date: '08 Jan 2024',
      readTime: '6 min',
      category: 'Santé',
      image: 'https://images.unsplash.com/photo-1690244775977-74844b4f4b1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3aW5kb3clMjBjbGVhbmluZ3xlbnwxfHx8fDE3NTc1MDExNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['santé', 'pandémie', 'désinfection']
    },
    {
      id: '4',
      title: 'Guide complet du nettoyage de vitres professionnelles',
      excerpt: 'Techniques, outils et astuces pour obtenir des vitres parfaitement propres et sans traces.',
      content: `Le nettoyage de vitres est un art qui demande technique, précision et les bons outils. Voici notre guide complet pour des résultats professionnels.

## Les outils indispensables

### Matériel de base
- Raclette professionnelle de qualité
- Mouilleur en T ou applicateur
- Chiffons microfibres sans peluches
- Perche télescopique pour les hauteurs
- Seau avec grille d'essorage

### Produits de nettoyage
- Solution dégraissante pour le pré-nettoyage
- Produit spécifique vitres sans ammoniaque
- Eau déminéralisée pour le rinçage final

## Techniques professionnelles

### Préparation
1. Nettoyer le cadre et les rebords
2. Mouiller uniformément la surface
3. Laisser agir le produit quelques secondes

### Raclage
1. Commencer par le haut en diagonal
2. Mouvement fluide et régulier
3. Essuyer la raclette après chaque passage
4. Finir par les bords avec un chiffon

## Erreurs à éviter

- Nettoyer en plein soleil
- Utiliser des produits inadaptés
- Négliger le nettoyage des outils
- Travailler sur surface sèche

Avec ces techniques, vous obtiendrez des vitres parfaitement transparentes et sans traces.`,
      author: 'Jean-Luc Moreau',
      date: '05 Jan 2024',
      readTime: '8 min',
      category: 'Techniques',
      image: 'https://images.unsplash.com/photo-1690244775977-74844b4f4b1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3aW5kb3clMjBjbGVhbmluZ3xlbnwxfHx8fDE3NTc1MDExNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['vitres', 'techniques', 'outils']
    }
  ];

  const categories = ['all', 'Conseils', 'Produits', 'Santé', 'Techniques'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (selectedPost) {
    return (
      <div className="min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4">
          <Button
            onClick={() => setSelectedPost(null)}
            variant="ghost"
            className="mb-6 text-[#0680d2] hover:text-blue-700"
          >
            ← {t('common.back')}
          </Button>

          <article>
            <header className="mb-8">
              <Badge className="mb-4 bg-[#0680d2]">{selectedPost.category}</Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
                {selectedPost.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
                <div className="flex items-center space-x-1">
                  <User className="h-4 w-4" />
                  <span>{selectedPost.author}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{selectedPost.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>Lecture {selectedPost.readTime}</span>
                </div>
              </div>
              <ImageWithFallback
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
              />
            </header>

            <div className="prose max-w-none">
              {selectedPost.content.split('\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-2xl font-semibold text-[#333333] mt-8 mb-4">
                      {paragraph.substring(3)}
                    </h2>
                  );
                } else if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={index} className="text-xl font-semibold text-[#333333] mt-6 mb-3">
                      {paragraph.substring(4)}
                    </h3>
                  );
                } else if (paragraph.startsWith('- ')) {
                  return (
                    <li key={index} className="ml-4 mb-1">
                      {paragraph.substring(2)}
                    </li>
                  );
                } else if (paragraph.trim()) {
                  return (
                    <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  );
                }
                return null;
              })}
            </div>

            <footer className="mt-12 pt-8 border-t">
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedPost.tags.map((tag, index) => (
                  <Badge key={index} variant="outline">
                    #{tag}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => onNavigate('quote')}
                  className="bg-[#0680d2] hover:bg-blue-700"
                >
                  Demander un devis
                </Button>
                <Button
                  onClick={() => onNavigate('contact')}
                  variant="outline"
                  className="border-[#0680d2] text-[#0680d2] hover:bg-[#0680d2] hover:text-white"
                >
                  Nous contacter
                </Button>
              </div>
            </footer>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">
            {t('nav.blog')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conseils d'experts, astuces pratiques et actualités du secteur du nettoyage professionnel
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Rechercher un article..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  className={selectedCategory === category ? "bg-[#0680d2] hover:bg-blue-700" : ""}
                >
                  {category === 'all' ? 'Tous' : category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div onClick={() => setSelectedPost(post)}>
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-[#0680d2]">{post.category}</Badge>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-[#0680d2] hover:text-blue-700 p-0">
                      {t('common.read_more')}
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Aucun article trouvé pour cette recherche.</p>
            <Button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              variant="outline"
              className="mt-4"
            >
              Réinitialiser les filtres
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;