'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: '/images/Cover.jpg',
      alt: 'School Building',
      category: 'Campus',
    },
    {
      src: '/images/hero1.jpg',
      alt: 'School Campus',
      category: 'Campus',
    },
    {
      src: '/images/Hero3.jpg',
      alt: 'School Activities',
      category: 'Activities',
    },
    {
      src: '/images/Hero4.jpg',
      alt: 'School Events',
      category: 'Events',
    },
    {
      src: '/images/Hero5.jpg',
      alt: 'School Events',
      category: 'TRS',
    },
    {
      src: '/images/Hero6.jpg',
      alt: 'School History',
      category: 'TRS',
    },
    {
      src: '/images/Hero7.jpg',
      alt: 'School History',
      category: 'TRS',
    },
    {
      src: '/images/Hero8.jpg',
      alt: 'School History',
      category: 'TRS',
    },  
    {
      src: '/images/Hero9.jpg',
      alt: 'School History',
      category: 'TRS',
    },      
    {
      src: '/images/Hero10.jpg',
      alt: 'School Events',
      category: 'TRS',
    },
    ];

  const categories = ['All', ...new Set(galleryImages.map(img => img.category))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
          Photo Gallery
        </h1>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <motion.div
              key={image.src}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg shadow-md"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-black/50">
                  <p className="text-sm font-medium">{image.alt}</p>
                  <p className="text-xs">{image.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            >
              <div className="relative max-w-4xl w-full aspect-[4/3]">
                <Image
                  src={selectedImage}
                  alt="Selected image"
                  fill
                  className="object-contain"
                />
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white text-4xl"
              >
                &times;
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
