import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { useLanguage } from '../contexts/LanguageContext';
import { AnimatedHero } from './AnimatedHero';
import { Search, Calendar, ArrowRight, Tag } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

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
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600",
      date: '15 Nov 2024',
      category: 'Bureaux',
      readTime: '5 min'
    },
    {
      id: 2,
      title: 'Produits écologiques : l\'avenir du nettoyage',
      excerpt: 'Comment les produits respectueux de l\'environnement révolutionnent le secteur du nettoyage professionnel.',
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
      date: '12 Nov 2024',
      category: 'Écologie',
      readTime: '7 min'
    },
    {
      id: 3,
      title: 'Entretien des sols : techniques professionnelles',
      excerpt: 'Les secrets d\'un nettoyage de sol durable et efficace selon le type de revêtement.',
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600",
      date: '8 Nov 2024',
      category: 'Techniques',
      readTime: '6 min'
    },
    {
      id: 4,
      title: 'Nettoyage après travaux : guide complet',
      excerpt: 'Tout ce qu\'il faut savoir pour un nettoyage efficace après des travaux de rénovation.',
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600",
      date: '5 Nov 2024',
      category: 'Spécialisé',
      readTime: '8 min'
    },
    {
      id: 5,
      title: 'Hygiène en cuisine professionnelle',
      excerpt: 'Normes et bonnes pratiques pour maintenir une hygiène irréprochable en restauration.',
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600",
      date: '2 Nov 2024',
      category: 'Restauration',
      readTime: '10 min'
    },
    {
      id: 6,
      title: 'Désinfection : protocoles COVID-19',
      excerpt: 'Mise en place des protocoles de désinfection adaptés aux nouvelles exigences sanitaires.',
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
            onClick: () => onPageChange('contact'),
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
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
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