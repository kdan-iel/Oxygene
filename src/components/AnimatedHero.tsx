import React from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AnimatedHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  children?: React.ReactNode;
  actions?: Array<{
    label: string;
    onClick: () => void;
    variant?: 'default' | 'outline' | 'ghost';
    className?: string;
  }>;
  height?: string;
  overlay?: boolean;
}

export function AnimatedHero({
  title,
  subtitle,
  backgroundImage,
  children,
  actions,
  height = 'h-[400px]',
  overlay = true
}: AnimatedHeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const backgroundVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section
      className={`relative ${height} overflow-hidden flex items-center justify-center`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background Image */}
      {backgroundImage && (
        <motion.div
          className="absolute inset-0"
          variants={backgroundVariants}
        >
          <ImageWithFallback
            src={backgroundImage}
            alt={title}
            className="w-full h-full object-cover"
          />
          {overlay && <div className="absolute inset-0 bg-black/50" />}
        </motion.div>
      )}

      {/* Background Pattern for non-image heroes */}
      {!backgroundImage && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80"
          variants={backgroundVariants}
        >
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <motion.path
                d="M0,0 L100,0 L100,80 C50,100 50,60 0,80 Z"
                fill="white"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </svg>
          </div>
        </motion.div>
      )}

      {/* Content */}
      <motion.div
        className={`relative z-10 text-center max-w-4xl px-4 ${
          backgroundImage || !backgroundImage ? 'text-white' : 'text-gray-900'
        }`}
        variants={containerVariants}
      >
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          variants={itemVariants}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            className="text-xl md:text-2xl mb-8 opacity-90"
            variants={itemVariants}
          >
            {subtitle}
          </motion.p>
        )}

        {children && (
          <motion.div variants={itemVariants}>
            {children}
          </motion.div>
        )}

        {actions && actions.length > 0 && (
          <motion.div
            className="flex flex-wrap gap-4 justify-center mt-8"
            variants={itemVariants}
          >
            {actions.map((action, index) => (
              <Button
                key={index}
                onClick={action.onClick}
                variant={action.variant || 'default'}
                size="lg"
                className={action.className}
              >
                {action.label}
              </Button>
            ))}
          </motion.div>
        )}
      </motion.div>

      {/* Animated Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -40, -20],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </motion.section>
  );
}