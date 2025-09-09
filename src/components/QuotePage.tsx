import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useLanguage } from '../contexts/LanguageContext';
import { CheckCircle, Phone, Mail, MapPin } from 'lucide-react';
import { useForm } from 'react-hook-form@7.55.0';
import { AnimatedHero } from './AnimatedHero';

interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  area: string;
  urgency: string;
  message: string;
}

export function QuotePage() {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<QuoteFormData>();

  const services = [
    'services.offices',
    'services.commercial', 
    'services.buildings',
    'services.homes',
    'services.windows',
    'services.carpet',
    'services.parquet',
    'services.marble'
  ];

  const urgencyOptions = [
    { value: 'low', label: 'Pas urgent (dans la semaine)' },
    { value: 'medium', label: 'Modéré (dans 2-3 jours)' },
    { value: 'high', label: 'Urgent (dans 24h)' },
    { value: 'emergency', label: 'Urgence (immédiat)' }
  ];

  const onSubmit = async (data: QuoteFormData) => {
    // Simulate form submission
    console.log('Quote form submitted:', data);
    
    // Here you would typically send the data to your backend
    // For now, we'll just simulate a successful submission
    setIsSubmitted(true);
    reset();
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-secondary py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="text-center p-8">
            <CardContent className="pt-6">
              <CheckCircle className="h-16 w-16 text-accent mx-auto mb-6" />
              <h1 className="text-3xl font-bold mb-4">Demande reçue !</h1>
              <p className="text-gray-600 mb-6">
                Merci pour votre demande de devis. Notre équipe vous contactera dans les plus brefs délais 
                pour discuter de vos besoins et vous proposer une solution adaptée.
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-600">
                  <strong>Temps de réponse habituel :</strong> Moins de 2 heures pendant les heures ouvrables
                </p>
              </div>
              <Button 
                onClick={() => setIsSubmitted(false)}
                className="bg-primary hover:bg-primary/90"
              >
                Faire une nouvelle demande
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Animated Header */}
      <AnimatedHero
        title={t('quote.title')}
        subtitle={t('quote.subtitle')}
        backgroundImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200"
        height="h-[400px]"
      />
      
      <div className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Quote Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Formulaire de demande</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">{t('quote.form.name')} *</Label>
                        <Input
                          id="name"
                          {...register('name', { required: 'Ce champ est obligatoire' })}
                          className={errors.name ? 'border-red-500' : ''}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="email">{t('quote.form.email')} *</Label>
                        <Input
                          id="email"
                          type="email"
                          {...register('email', { 
                            required: 'Ce champ est obligatoire',
                            pattern: {
                              value: /^\S+@\S+$/,
                              message: 'Email invalide'
                            }
                          })}
                          className={errors.email ? 'border-red-500' : ''}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone">{t('quote.form.phone')} *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        {...register('phone', { required: 'Ce champ est obligatoire' })}
                        className={errors.phone ? 'border-red-500' : ''}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                      )}
                    </div>

                    {/* Service Details */}
                    <div>
                      <Label htmlFor="service">{t('quote.form.service')} *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez un service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {t(service)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="area">{t('quote.form.area')} *</Label>
                      <Textarea
                        id="area"
                        {...register('area', { required: 'Ce champ est obligatoire' })}
                        placeholder="Décrivez la surface à nettoyer, le nombre de pièces, étages, etc."
                        className={errors.area ? 'border-red-500' : ''}
                      />
                      {errors.area && (
                        <p className="text-red-500 text-sm mt-1">{errors.area.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="urgency">{t('quote.form.urgency')} *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez l'urgence" />
                        </SelectTrigger>
                        <SelectContent>
                          {urgencyOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">{t('quote.form.message')}</Label>
                      <Textarea
                        id="message"
                        {...register('message')}
                        placeholder="Informations complémentaires, demandes spéciales, etc."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90"
                      size="lg"
                    >
                      {t('quote.form.submit')}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact direct</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Téléphone</p>
                      <p className="text-gray-600">+33 1 23 45 67 89</p>
                      <p className="text-sm text-gray-500">Lun-Ven: 8h-18h</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">contact@oxygene-proprete.fr</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Adresse</p>
                      <p className="text-gray-600">123 Rue de la Propreté<br />75001 Paris, France</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary text-white">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-3">Intervention d'urgence</h3>
                  <p className="text-sm opacity-90 mb-4">
                    Besoin d'une intervention immédiate ? Notre équipe d'astreinte est disponible 24h/24.
                  </p>
                  <Button variant="secondary" className="w-full">
                    Appeler l'urgence
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-accent text-white">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-3">Devis gratuit</h3>
                  <p className="text-sm opacity-90">
                    Tous nos devis sont gratuits et sans engagement. Réponse sous 2h pendant les heures ouvrables.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}