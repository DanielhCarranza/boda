"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';

const rotations = [
  '-rotate-2',
  'rotate-2',
  'rotate-1',
  '-rotate-1',
  'rotate-3',
  '-rotate-3',
];

interface GalleryProps {
  images: string[];
}

const Gallery = ({ images }: GalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 6) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const displayedImages = images.slice(currentIndex, currentIndex + 6);

  return (
    <div className="relative">
      <div className="mx-auto w-full max-w-screen-lg relative py-[16vh] grid place-items-center grid-cols-3 gap-4 p-4">
        {displayedImages.map((src, index) => (
          <div key={index} className={`column relative w-full h-64 overflow-hidden rounded-lg ${rotations[index % rotations.length]} transition-transform duration-300 ease-out`}>
            <div className="w-full h-full relative overflow-hidden rounded-lg">
              <Image 
                src={src} 
                alt={`Boda Abhigael & Zayra ${currentIndex + index + 1}`} 
                fill
                objectFit='cover'
                className="transform transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;