import Image from 'next/image';
import { getImages } from '@/lib/getimages';

const images = [
  "/boda/IMG_2106.jpg",
  "/boda/IMG_2092.jpg",
  // Add more image paths here
];

const Gallery = () => {
    const images = getImages("boda");
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {images.map((src, index) => (
        <div key={index} className="relative w-full h-64 overflow-hidden rounded-lg">
          <Image 
            src={src} 
            alt={`Boda Abhigael & Zayra ${index + 1}`} 
            layout="fill" 
            objectFit="cover" 
            className="transform transition-transform duration-300 hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;