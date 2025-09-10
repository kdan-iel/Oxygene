import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

interface DynamicHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage: string;
  overlayOpacity?: number;
  height?: string;
  titleColor?: string;
  subtitleColor?: string;
  descriptionColor?: string;
  showCTA?: boolean;
  ctaText?: string;
  ctaAction?: () => void;
  alignment?: 'left' | 'center' | 'right';
}

const DynamicHero: React.FC<DynamicHeroProps> = ({
  title,
  subtitle,
  description,
  backgroundImage,
  overlayOpacity = 0.6,
  height = 'h-96',
  titleColor = 'text-white',
  subtitleColor = 'text-white/90',
  descriptionColor = 'text-white/80',
  showCTA = false,
  ctaText = "En savoir plus",
  ctaAction,
  alignment = 'center'
}) => {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end'
  };

  return (
    <div className={`relative ${height} overflow-hidden`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={backgroundImage}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div 
          className="absolute inset-0 bg-gradient-to-br from-[#0680d2]/80 via-[#333333]/60 to-[#0680d2]/40"
          style={{ opacity: overlayOpacity }}
        />
      </div>

      {/* Content */}
      <div className={`relative z-10 h-full flex flex-col justify-center ${alignmentClasses[alignment]} px-4 sm:px-6 lg:px-8`}>
        <div className="max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${titleColor} leading-tight`}>
              <span className="inline-block">
                {title.split(' ').map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="inline-block mr-3"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </h1>
            
            {subtitle && (
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={`text-xl md:text-2xl lg:text-3xl mb-6 ${subtitleColor} font-medium`}
              >
                {subtitle}
              </motion.h2>
            )}
            
            {description && (
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className={`text-lg md:text-xl max-w-2xl ${descriptionColor} leading-relaxed mb-8`}
              >
                {description}
              </motion.p>
            )}
            
            {showCTA && (
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                onClick={ctaAction}
                className="bg-white text-[#0680d2] px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                {ctaText}
              </motion.button>
            )}
          </motion.div>
        </div>
      </div>

      {/* Animated decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#0680d2] via-[#4caf50] to-[#0680d2]" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default DynamicHero;