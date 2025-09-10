import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin } from 'lucide-react';

interface FooterProps {
  onPageChange: (page: string) => void;
}

export function Footer({ onPageChange }: FooterProps) {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Oxygène</h3>
            <p className="text-gray-300 mb-4">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => onPageChange('home')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t('nav.home')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onPageChange('services')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t('nav.services')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onPageChange('about')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t('nav.about')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onPageChange('contact')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t('nav.contact')}
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">{t('common.our-services')}</h4>
            <ul className="space-y-2 text-gray-300">
              <li>{t('services.offices')}</li>
              <li>{t('services.commercial')}</li>
              <li>{t('services.buildings')}</li>
              <li>{t('services.homes')}</li>
              <li>{t('services.windows')}</li>
              <li>{t('services.carpet')}</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">{t('contact.title')}</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div className="text-gray-300">
                  <p>123 Rue de la Propreté</p>
                  <p>75001 Paris, France</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-gray-300">+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-gray-300">contact@oxygene-proprete.fr</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div className="text-gray-300">
                  <p>Lun - Ven: 8h00 - 18h00</p>
                  <p>Sam: 9h00 - 16h00</p>
                  <p>Dim: Sur demande</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Oxygène Solutions. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}