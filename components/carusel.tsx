'use client'

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';

const InfoCarousel = () => {
  return (
    <Carousel 
      showThumbs={false} 
      showStatus={false} 
      infiniteLoop 
      useKeyboardArrows 
      autoPlay 
      interval={5000}
    >
      <div className="flex-shrink-0 w-full text-center p-5">
        <div className="w-[300px] h-[150px] mx-auto mb-4 relative">
          <Image src="/Liverpool.jpg" alt="Liverpool" layout="fill" objectFit="cover" />
        </div>
        <h3 className="font-poiretOne text-xl mb-2 text-texto">Mesa de regalos Liverpool</h3>
        <p className="font-poiretOne text-base mb-1 text-texto">Evento: 51465918</p>
        <a href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51465918" target="_blank" rel="noopener noreferrer">
          <button className="font-poiretOne mt-4 px-4 py-2 bg-border text-white rounded-lg">COMPRAR REGALO</button>
        </a>
      </div>
      <div className="flex-shrink-0 w-full text-center p-5 mb-5">
        <div className="w-[300px] h-[150px] mx-auto mb-4 relative">
            <Image src="/bbva.jpg" alt="BBVA" layout="fill" objectFit="cover" />
        </div>
        <h3 className="font-poiretOne text-xl mb-2 text-texto">Depósito o transferencia</h3>
        <p className="font-poiretOne text-base mb-1 text-texto">BBVA</p>
        <p className="font-poiretOne text-base mb-1 text-texto">Tarjeta: 4152 3136 0646 1122</p>
        <p className="font-poiretOne text-base text-texto">Referencia: &quot;BodaZyA&quot;</p>
      </div>
      {/* Agrega más secciones segn sea necesario */}
    </Carousel>
  );
};

export default InfoCarousel;