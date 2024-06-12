'use client'

import React, { useCallback} from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const Recomendaciones = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div>
        <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex ">
                <div className="flex-shrink-0 w-full text-center p-5">
                  <div className="w-[300px] h-[150px] mx-auto mb-4 relative">
                    <Image src="/bbva.jpg" alt="BBVA" layout="fill" objectFit="cover" />
                  </div>
                  <h3 className="font-poiretOne text-xl mb-2 text-title">Depósito o transferencia</h3>
                  <p className="font-poiretOne text-base mb-1 text-title">BBVA</p>
                  <p className="font-poiretOne text-base mb-1 text-title">Tarjeta: 2100 0098 9888 4332</p>
                  <p className="font-poiretOne text-base text-title">Referencia: &quot;WeddingRominaAndSantiago&quot;</p>
                </div>
                <div className="flex-shrink-0 w-full text-center p-5">
                  <div className="w-[300px] h-[150px] mx-auto mb-4 relative">
                    <Image src="/Liverpool.jpg" alt="Liverpool" layout="fill" objectFit="cover" />
                  </div>
                  <h3 className="font-poiretOne text-xl mb-2 text-title">Mesa de regalos Liverpool</h3>
                  <p className="font-poiretOne text-base mb-1 text-title">Evento: 999999</p>
                  <button className="mt-4 px-4 py-2 bg-border text-white rounded-lg">COMPRAR REGALO</button>
                </div>
                {/* <div className="flex-shrink-0 w-full text-center p-5">
                <img src="/dresscode-icon.png" alt="Dress Code" className="mx-auto mb-4" />
                <h3 className="font-poiretOne text-xl mb-2 text-title">Dress Code</h3>
                <p className="font-poiretOne text-base mb-1 text-title">Formal</p>
                <p className="font-poiretOne text-base text-title">Por favor, vístete de acuerdo a la ocasión.</p>
                </div> */}
                {/* Agrega más secciones según sea necesario */}
            </div>
        </div>
        <div className="flex justify-center ">
            <button onClick={scrollPrev} className="px-4 py-2 bg-transparent text-white rounded-lg"><ArrowLeft className="text-border" /></button>
            <button onClick={scrollNext} className="px-4 py-2 bg-transparent text-white rounded-lg"><ArrowRight className="text-border" /></button>
        </div>
    </div>
  );
};

export default Recomendaciones;