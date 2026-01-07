import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { useLanguage } from '../contexts/LanguageContext';
import { MessageCircle, X, Send, User, Bot } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatbotProps {
  onPageChange: (page: string) => void;
}

export function Chatbot({ onPageChange }: ChatbotProps) {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: t('chatbot.welcome'),
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('devis') || message.includes('quote') || message.includes('prix') || message.includes('price')) {
      return "Je serais ravi de vous aider avec un devis ! Cliquez sur 'Demander un devis' pour remplir notre formulaire détaillé, ou appelez-nous au +33 1 23 45 67 89.";
    }
    
    if (message.includes('service') || message.includes('nettoyage') || message.includes('cleaning')) {
      return "Nous offrons une gamme complète de services : nettoyage de bureaux, commerces, bâtiments, maisons, vitres, tapis et parquet. Quel type de service vous intéresse ?";
    }
    
    if (message.includes('horaire') || message.includes('hour') || message.includes('quand') || message.includes('when')) {
      return "Nous sommes ouverts du lundi au vendredi de 8h à 18h, le samedi de 9h à 16h, et disponibles sur demande le dimanche. Pour les urgences, nous intervenons 7j/7.";
    }
    
    if (message.includes('contact') || message.includes('téléphone') || message.includes('phone') || message.includes('adresse')) {
      return "Vous pouvez nous contacter au +33 1 23 45 67 89 ou par email à contact@oxygene-proprete.fr. Notre adresse : 123 Rue de la Propreté, 75001 Paris.";
    }
    
    if (message.includes('urgence') || message.includes('emergency') || message.includes('urgent')) {
      return "Pour les interventions urgentes, appelez-nous directement au +33 1 23 45 67 89. Nous avons une équipe d'astreinte disponible 24h/24 pour les urgences.";
    }
    
    if (message.includes('bonjour') || message.includes('hello') || message.includes('salut')) {
      return "Bonjour ! Je suis là pour vous aider avec toutes vos questions sur nos services de nettoyage. Comment puis-je vous assister aujourd'hui ?";
    }
    
    return "Merci pour votre question ! Pour une réponse détaillée, je vous recommande de nous contacter directement au +33 1 23 45 67 89 ou de remplir notre formulaire de contact. Notre équipe sera ravie de vous aider !";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate bot thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setInputValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const quickActions = [
    { text: "Demander un devis", action: () => onPageChange('contact') },
    { text: "Voir nos services", action: () => onPageChange('services') },
    { text: "Nous contacter", action: () => onPageChange('contact') }
  ];

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 bg-primary hover:bg-primary/90 shadow-lg"
        size="icon"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-50 w-80 h-96 shadow-xl">
          <CardHeader className="bg-primary text-white rounded-t-lg">
            <CardTitle className="flex items-center space-x-2">
              <Bot className="h-5 w-5" />
              <span>Assistant Oxygene</span>
            </CardTitle>
          </CardHeader>
          
          <CardContent className="flex flex-col h-full p-0">
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      {message.sender === 'bot' && <Bot className="h-4 w-4 mt-0.5 text-primary" />}
                      {message.sender === 'user' && <User className="h-4 w-4 mt-0.5" />}
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="p-3 border-t">
              <div className="flex flex-wrap gap-2 mb-3">
                {quickActions.map((action, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={action.action}
                    className="text-xs"
                  >
                    {action.text}
                  </Button>
                ))}
              </div>
            </div>

            {/* Input Area */}
            <div className="p-3 border-t">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={t('chatbot.placeholder')}
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  size="icon"
                  className="bg-primary hover:bg-primary/90"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
}