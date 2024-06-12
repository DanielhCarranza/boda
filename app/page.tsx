
import Image from "next/image";
import Gallery from '@/components/gallery';
import DateCounter from '@/components/date-counter';
import RSVPForm from '@/components/rsvpForms';

import { getImages } from '@/lib/getimages';

export default async function Home() {

  const images = getImages("boda");
  return (
    <>
      <section className="relative z-10 w-full max-w-xl h-screen px-5 xl:px-0">
        <Image 
          src="/boda/IMG_2452.jpg" 
          alt="Boda Abhigael & Zayra" 
          layout="fill" 
          objectFit="cover" 
          quality={100}
        />
        <div className="absolute inset-0 flex items-center justify-center h-full">
          <Image 
            src="/logo.png" 
            alt="Logo" 
            width={190} 
            height={190}
            quality={100} 
            className="opacity-90 mt-auto mb-25"
          />
        </div>
      </section>      
      <section className="relative z-10 w-full py-10 max-w-xl px-5 xl:px-0 flex flex-col items-center justify-center">
        <div className="text-center">
          <h2 className="font-greatVibes text-3xl mb-3 mt-2 text-title">Save the Date</h2>
          <p className="font-poiretOne text-base-plus mb-8 text-title">
            Después de 4 años de noviazgo, hemos decidido unirnos en matrimonio y nos complace que seas parte de nuestra celebración.
          </p>
          <div className="flex justify-center mb-3">
            <div className="w-48 h-64 relative">
              <Image 
                src="/boda/IMG_2121.jpg" 
                alt="Zaira Aguilar" 
                layout="fill" 
                objectFit="cover" 
                className="rounded-full border border-border"
              />
            </div>
          </div>
          <h2 className="font-tangerine text-2xl text-title">Zaira Aguilar</h2>
          <DateCounter targetDate="2024-10-25T00:00:00" />
          <div className="flex justify-center">
            <div className="w-48 h-64 relative">
              <Image 
                src="/boda/IMG_2181.jpg" 
                alt="Abhigael Carranza" 
                layout="fill" 
                objectFit="cover" 
                className="rounded-full border border-border"
              />
            </div>
          </div>
          <h2 className="font-tangerine text-2xl mt-3 text-title">Abhigael Carranza</h2>
        </div>
      </section>
      <section className="relative z-10 w-full bg-fondo2 max-w-xl py-10 px-5 xl:px-0 flex flex-col items-center justify-center">
        <div className="text-center mb-10">
          <h2 className="font-greatVibes text-2xl mb-3 mt-2 text-title">Ceremonia</h2>
          <p className="font-poiretOne text-base-plus mb-3 text-title">"Antigua Hacienda Las Palmas"</p>
          <p className="font-poiretOne text-base-plus mb-8 text-title">Fabrica de Los Ángeles #15, Tronconal, El Alamito Buenavista, Son</p>
          <div className="flex justify-center mb-3">
            <div className="w-24 h-12 flex items-center justify-center border border-border rounded-full">
              <p className="font-poiretOne text-lg text-title">8:00 pm</p>
            </div>
            <div> 
              <a href="https://maps.app.goo.gl/tv7saRPfTWwui8so8" target="_blank" rel="noopener noreferrer" className="w-24 h-12 flex items-center justify-center bg-border text-white rounded-full ml-4">
                <p className="font-poiretOne text-lg">LLEVARME</p>
              </a>
            </div>
          </div>
        </div>
        <hr className="border-border border-gray-300 w-full" />
        <div className="text-center mt-5">
          <h2 className="font-greatVibes text-2xl mb-3 mt-2 text-title">Fiesta</h2>
          <p className="font-poiretOne text-base-plus mb-3 text-title">"Antigua Hacienda Las Palmas"</p>
          <p className="font-poiretOne text-base-plus mb-8 text-title">Fabrica de Los Ángeles #15, Tronconal, El Alamito Buenavista, Son</p>
          <div className="flex justify-center mb-3">
            <div className="w-24 h-12 flex items-center justify-center border border-border rounded-full">
              <p className="font-poiretOne text-lg text-title">9:00 pm</p>
            </div>
            <div> 
              <a href="https://maps.app.goo.gl/tv7saRPfTWwui8so8" target="_blank" rel="noopener noreferrer" className="w-24 h-12 flex items-center justify-center bg-border text-white rounded-full ml-4">
                <p className="font-poiretOne text-lg">LLEVARME</p>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-10 z-10 px-5 w-full max-w-xl xl:px-0 flex flex-col items-center justify-center bg-fondo rounded-lg">
        <div className="text-center mb-10">
          <blockquote className="font-greatVibes text-3xl mb-3 mt-2 text-title">
            ¡Todas las historias de amor son bonitas pero la nuestra es nuestra favorita!
          </blockquote>
          <p className="font-poiretOne text-base-plus mb-8 text-title">
            ¡Para el amor no existe el momento perfecto, sino la persona perfecta! Iniciamos 2020 con muchos sueños por cumplir y decidimos hacer realidad el más importante. Con vista a un lago, acompañado de un tradicional Mariachi y con un poco de nervios llegó la propuesta. ¿Zaira te quieres casar conmigo?
          </p>
          <p className="font-poiretOne text-base-plus text-title italic">
            Me dio la mano y contestó: ¡Sí mi amor me quiero casar contigo! Con los ojos cristalinos nos abrazamos después de ese momento tan emotivo, ahora unos meses más tarde iniciaremos este viaje de vida juntos.
          </p>
          </div>
          <div className="w-full flex justify-center">
            <div className="w-3/4 h-64 relative">
              <Image 
              src="/boda/IMG_2323.jpg" 
              alt="Imagen de la pareja" 
              layout="fill" 
              objectFit="cover" 
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
      <section className="relative z-10 w-full max-w-xl px-5 xl:px-0 flex flex-col items-center justify-center bg-rsvp border-border rounded-lg mx-4 my-8">
        <RSVPForm />
      </section>
      <section className="relative z-10 bg-fondo w-full max-w-xl h-screen px-5 xl:px-0">
        <Gallery images={images} />
      </section>
    </>
  );
}

