import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useLanguage } from '../contexts/LanguageContext';
import { CheckCircle, Phone, Mail, Clock } from 'lucide-react';
import { useForm } from 'react-hook-form@7.55.0';

interface QuotePageProps {
  onNavigate: (page: string) => void;
}

interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  area: string;
  urgency: string;
  message: string;
}

const QuotePage: React.FC<QuotePageProps> = ({ onNavigate }) => {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm<QuoteFormData>();

  const serviceTypes = [
    { value: 'offices', label: t('home.services.offices') },
    { value: 'commercial', label: t('home.services.commercial') },
    { value: 'windows', label: t('home.services.windows') },
    { value: 'homes', label: t('home.services.homes') },
    { value: 'parquet', label: t('home.services.parquet') },
    { value: 'carpet', label: t('home.services.carpet') },
    { value: 'marble', label: t('home.services.marble') },
    { value: 'buildings', label: t('home.services.buildings') }
  ];

  const urgencyLevels = [
    { value: 'low', label: t('quote.form.urgency.low') },
    { value: 'medium', label: t('quote.form.urgency.medium') },
    { value: 'high', label: t('quote.form.urgency.high') }
  ];

  const onSubmit = async (data: QuoteFormData) => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Quote form data:', data);
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen py-12 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <Card className="p-8">
            <CardContent className="space-y-6">
              <div className="flex justify-center">
                <CheckCircle className="h-16 w-16 text-[#4caf50]" />
              </div>
              <h1 className="text-3xl font-bold text-[#333333]">
                Demande de devis envoyée !
              </h1>
              <p className="text-lg text-gray-600">
                Merci pour votre demande. Notre équipe vous contactera dans les plus brefs délais 
                pour établir votre devis personnalisé.
              </p>
              <div className="bg-[#f5f7fa] p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Prochaines étapes :</h3>
                <ul className="text-left space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#0680d2] rounded-full"></div>
                    <span>Analyse de votre demande (sous 2h)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#0680d2] rounded-full"></div>
                    <span>Contact téléphonique pour précisions (sous 24h)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#0680d2] rounded-full"></div>
                    <span>Envoi du devis détaillé (sous 48h)</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => onNavigate('home')}
                  className="bg-[#0680d2] hover:bg-blue-700"
                >
                  Retour à l'accueil
                </Button>
                <Button
                  onClick={() => onNavigate('services')}
                  variant="outline"
                  className="border-[#0680d2] text-[#0680d2] hover:bg-[#0680d2] hover:text-white"
                >
                  Voir nos services
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">
            {t('quote.title')}
          </h1>
          <p className="text-xl text-gray-600">
            Obtenez votre devis personnalisé en quelques minutes
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Informations pour votre devis</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t('contact.form.name')} *</Label>
                      <Input
                        id="name"
                        {...register('name', { required: 'Ce champ est obligatoire' })}
                        className={errors.name ? 'border-red-500' : ''}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm">{errors.name.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t('contact.form.email')} *</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register('email', { 
                          required: 'Ce champ est obligatoire',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Email invalide'
                          }
                        })}
                        className={errors.email ? 'border-red-500' : ''}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">{t('contact.form.phone')} *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...register('phone', { required: 'Ce champ est obligatoire' })}
                      className={errors.phone ? 'border-red-500' : ''}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm">{errors.phone.message}</p>
                    )}
                  </div>

                  {/* Service Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>{t('quote.form.service')} *</Label>
                      <Select onValueChange={(value) => setValue('serviceType', value)}>
                        <SelectTrigger className={errors.serviceType ? 'border-red-500' : ''}>
                          <SelectValue placeholder="Sélectionnez un service" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceTypes.map((service) => (
                            <SelectItem key={service.value} value={service.value}>
                              {service.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.serviceType && (
                        <p className="text-red-500 text-sm">Ce champ est obligatoire</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label>{t('quote.form.urgency')} *</Label>
                      <Select onValueChange={(value) => setValue('urgency', value)}>
                        <SelectTrigger className={errors.urgency ? 'border-red-500' : ''}>
                          <SelectValue placeholder="Niveau d'urgence" />
                        </SelectTrigger>
                        <SelectContent>
                          {urgencyLevels.map((level) => (
                            <SelectItem key={level.value} value={level.value}>
                              {level.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.urgency && (
                        <p className="text-red-500 text-sm">Ce champ est obligatoire</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="area">{t('quote.form.area')} *</Label>
                    <Textarea
                      id="area"
                      {...register('area', { required: 'Ce champ est obligatoire' })}
                      placeholder="Décrivez la surface à nettoyer, le type de local, la fréquence souhaitée..."
                      rows={3}
                      className={errors.area ? 'border-red-500' : ''}
                    />
                    {errors.area && (
                      <p className="text-red-500 text-sm">{errors.area.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Informations complémentaires</Label>
                    <Textarea
                      id="message"
                      {...register('message')}
                      placeholder="Précisions, contraintes particulières, questions..."
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-[#0680d2] hover:bg-blue-700"
                  >
                    {isLoading ? 'Envoi en cours...' : 'Envoyer ma demande de devis'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Besoin d'aide ?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-[#0680d2]" />
                  <div>
                    <p className="font-medium">+33 1 23 45 67 89</p>
                    <p className="text-sm text-gray-600">Lun-Ven 8h-18h</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-[#0680d2]" />
                  <div>
                    <p className="font-medium">contact@oxygene-hygiene.fr</p>
                    <p className="text-sm text-gray-600">Réponse sous 2h</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Process */}
            <Card>
              <CardHeader>
                <CardTitle>Comment ça marche ?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { step: 1, text: "Remplissez le formulaire", time: "2 min" },
                    { step: 2, text: "Nous analysons votre demande", time: "2h max" },
                    { step: 3, text: "Nous vous contactons", time: "24h max" },
                    { step: 4, text: "Vous recevez votre devis", time: "48h max" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#0680d2] text-white rounded-full flex items-center justify-center text-sm font-medium">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{item.text}</p>
                        <p className="text-xs text-gray-500 flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {item.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Guarantees */}
            <Card className="bg-[#f5f7fa]">
              <CardContent className="p-4">
                <h3 className="font-semibold mb-3">Nos garanties</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#4caf50]" />
                    <span>Devis gratuit et sans engagement</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#4caf50]" />
                    <span>Réponse rapide garantie</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#4caf50]" />
                    <span>Tarifs transparents</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#4caf50]" />
                    <span>Confidentialité assurée</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotePage;