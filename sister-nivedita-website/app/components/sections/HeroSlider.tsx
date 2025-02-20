'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * HeroSlider component for displaying a slideshow of hero images
 * Uses Framer Motion for smooth transitions
 */
const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: '/images/hero1.jpg',
      alt: 'Sister Nivedita Convent Campus',
    },
    {
      image: '/images/Hero3.jpg',
      alt: 'School Activities',
    },
    {
      image: '/images/Hero4.jpg',
      alt: 'School Events',
    },
    {
      image: '/images/Cover.jpg',
      alt: 'School Building',
    },
    {
      image: '/images/Hero5.jpg',
      alt: 'School Building',
    },
    {
      image: '/images/Hero6.jpg',
      alt: 'School Events',
    },
    {
      image: '/images/Hero7.jpg',
      alt: 'School History',
    },
    {
      image: '/images/Hero8.jpg',
      alt: 'School History',
    },
    {
      image: '/images/Hero9.jpg',
      alt: 'School History',
    },
    {
      image: '/images/Hero10.jpg',
      alt: 'School Events',
    },
    
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative h-full w-full"
        >
          <Image
            src={slides[currentIndex].image}
            alt={slides[currentIndex].alt}
            fill
            priority
            className="object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30" />
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="max-w-4xl px-4">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold text-white mb-4 font-serif"
              >
                Sister Nivedita Convent
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl text-white"
              >
                Nurturing Minds, Building Futures
              </motion.p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-white w-4' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
