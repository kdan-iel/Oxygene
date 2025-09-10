import React, { useState, useRef, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { useLanguage } from '../contexts/LanguageContext';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatbotProps {
  onNavigate: (page: string) => void;
}

const Chatbot: React.FC<ChatbotProps> = ({ onNavigate }) => {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const initialMessage: Message = {
    id: '1',
    text: language === 'fr' 
      ? "Bonjour ! Je suis l'assistant virtuel d'Oxygène. Comment puis-je vous aider aujourd'hui ?"
      : "Hello! I'm Oxygène's virtual assistant. How can I help you today?",
    sender: 'bot',
    timestamp: new Date()
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([initialMessage]);
    }
  }, [isOpen, language]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (language === 'fr') {
      if (lowerMessage.includes('prix') || lowerMessage.includes('tarif') || lowerMessage.includes('coût') || lowerMessage.includes('devis')) {
        return "Je peux vous aider à obtenir un devis personnalisé ! Cliquez sur 'Demander un devis' ou décrivez-moi vos besoins de nettoyage.";
      }
      if (lowerMessage.includes('service') || lowerMessage.includes('nettoyage')) {
        return "Nous proposons de nombreux services : nettoyage de bureaux, commerces, vitres, sols, tapis, marbre et bien plus. Quel type de nettoyage vous intéresse ?";
      }
      if (lowerMessage.includes('horaire') || lowerMessage.includes('disponibilité')) {
        return "Nous sommes disponibles 7j/7 pour répondre à vos besoins. Contactez-nous au +33 1 23 45 67 89 pour planifier une intervention.";
      }
      if (lowerMessage.includes('urgence') || lowerMessage.includes('urgent')) {
        return "Pour les interventions urgentes, appelez-nous directement au +33 1 23 45 67 89. Nous intervenons rapidement !";
      }
      if (lowerMessage.includes('bonjour') || lowerMessage.includes('salut')) {
        return "Bonjour ! Je suis ravi de vous aider. Avez-vous des questions sur nos services de nettoyage ?";
      }
      return "Je peux vous renseigner sur nos services, tarifs, disponibilités... Ou vous pouvez demander un devis gratuit ! Comment puis-je vous aider ?";
    } else {
      if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('quote')) {
        return "I can help you get a personalized quote! Click on 'Request Quote' or describe your cleaning needs to me.";
      }
      if (lowerMessage.includes('service') || lowerMessage.includes('cleaning')) {
        return "We offer many services: office cleaning, commercial cleaning, window cleaning, floors, carpets, marble and more. What type of cleaning interests you?";
      }
      if (lowerMessage.includes('hours') || lowerMessage.includes('availability')) {
        return "We are available 7 days a week to meet your needs. Contact us at +33 1 23 45 67 89 to schedule an intervention.";
      }
      if (lowerMessage.includes('urgent') || lowerMessage.includes('emergency')) {
        return "For urgent interventions, call us directly at +33 1 23 45 67 89. We respond quickly!";
      }
      if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
        return "Hello! I'm happy to help you. Do you have questions about our cleaning services?";
      }
      return "I can inform you about our services, prices, availability... Or you can request a free quote! How can I help you?";
    }
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputText),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickActions = language === 'fr' ? [
    { text: "Demander un devis", action: () => onNavigate('quote') },
    { text: "Voir nos services", action: () => onNavigate('services') },
    { text: "Nous contacter", action: () => onNavigate('contact') }
  ] : [
    { text: "Request quote", action: () => onNavigate('quote') },
    { text: "View services", action: () => onNavigate('services') },
    { text: "Contact us", action: () => onNavigate('contact') }
  ];

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full w-14 h-14 bg-[#0680d2] hover:bg-blue-700 shadow-lg"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-2rem)]">
          <Card className="shadow-2xl">
            <CardHeader className="bg-[#0680d2] text-white rounded-t-lg">
              <CardTitle className="flex items-center space-x-2">
                <Bot className="h-5 w-5" />
                <span>Assistant Oxygène</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {/* Messages */}
              <div className="h-80 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs p-3 rounded-lg ${
                        message.sender === 'user'
                          ? 'bg-[#0680d2] text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      <div className="flex items-start space-x-2">
                        {message.sender === 'bot' && <Bot className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                        {message.sender === 'user' && <User className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                        <p className="text-sm">{message.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 p-3 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Bot className="h-4 w-4" />
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Actions */}
              <div className="p-3 border-t bg-gray-50">
                <div className="grid grid-cols-1 gap-2 mb-3">
                  {quickActions.map((action, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        action.action();
                        setIsOpen(false);
                      }}
                      className="text-xs"
                    >
                      {action.text}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Input */}
              <div className="p-4 border-t">
                <div className="flex space-x-2">
                  <Input
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={language === 'fr' ? "Tapez votre message..." : "Type your message..."}
                    className="flex-1"
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputText.trim()}
                    size="sm"
                    className="bg-[#0680d2] hover:bg-blue-700"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default Chatbot;