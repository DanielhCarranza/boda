import Image from "next/image";
import Gallery from '@/components/gallery';
import DateCounter from '@/components/date-counter';
import RSVPForm from '@/components/rsvpForms';
import InfoCarousel from '@/components/carusel';

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
            src="/logo2.png" 
            alt="Logo" 
            width={265} 
            height={265}
            quality={100} 
            className="opacity-95 mt-auto mb-35 translate-y-20"
          />
        </div>
        <div className="absolute bottom-0 right-0 p-4">
          <Image 
            src="/anillos.svg" 
            width={60} 
            height={60}
            alt="Bottom Right Ornament" />
        </div>
      </section>      
      <section className="relative z-10 w-full py-10 max-w-xl px-5 xl:px-0 flex flex-col items-center justify-center bg-fondo2">
        <div className="text-center">
          <h2 className="font-greatVibes text-3xl mb-3 mt-2 text-title">Save the Date</h2>
          <p className="font-poiretOne text-base-plus mb-8 text-texto">
            Después de 4 años de noviazgo, hemos decidido unirnos en matrimonio y nos complace que seas parte de nuestra celebración.
          </p>
          <div className="flex justify-center mb-3">
            <div className="w-48 h-64 relative">
              <Image 
                src="/boda/IMG_2092.jpg" 
                alt="Zaira Aguilar" 
                layout="fill" 
                objectFit="cover" 
                className="rounded-full border border-border"
              />
            </div>
          </div>
          <h2 className="font-tangerine text-2xl text-texto">Zaira Gabriela Aguilar Medina</h2>
          <DateCounter targetDate="2024-10-25T00:00:00" />
          <div className="flex justify-center">
            <div className="w-48 h-64 relative">
              <Image 
                src="/boda/IMG_2485.jpg" 
                alt="Abhigael Carranza" 
                layout="fill" 
                objectFit="cover" 
                className="rounded-full border border-border"
              />
            </div>
          </div>
          <h2 className="font-tangerine text-2xl mt-3 text-texto">Abhigael Mendez Carranza</h2>
        </div>
      </section>
      <section className="relative z-10 py-5 w-full max-w-xl px-5 xl:px-0 flex flex-col items-center justify-center bg-fondo rounded-lg mx-4 my-8">
        <div className="text-center">
          <h2 className="font-greatVibes text-3xl mb-3 mt-2 text-title">Padres y Padrinos</h2>
          <div className="mb-8">
            <h3 className="font-poiretOne text-2xl mb-2 text-texto">Padres de la Novia</h3>
            <p className="font-poiretOne text-base-plus text-texto">Jose Luis Aguilar Preciado</p>
            <p className="font-poiretOne text-base-plus text-texto">Gabriela Medina Lozano</p>
          </div>
          <div className="mb-8">
            <h3 className="font-poiretOne text-2xl mb-2 text-texto">Padres del Novio</h3>
            <p className="font-poiretOne text-base-plus text-texto">Concepción Carranza Huerta</p>
          </div>
          <div className="mb-8">
            <h3 className="font-poiretOne text-2xl mb-2 text-texto">Padrinos de Arras y Biblia</h3>
            <p className="font-poiretOne text-base-plus text-texto">Karem Evireth Zamorano Enriquez</p>
            <p className="font-poiretOne text-base-plus text-texto">Alan Burruel Romualdo</p>
          </div>
          <div className="mb-8">
            <h3 className="font-poiretOne text-2xl mb-2 text-texto">Padrinos de Lazo</h3>
            <p className="font-poiretOne text-base-plus text-texto">Bienvenida Aguilar Preciado</p>
            <p className="font-poiretOne text-base-plus text-texto">Oscar Soria Noriega</p>
          </div>
          <div className="mb-4">
            <h3 className="font-poiretOne text-2xl mb-2 text-texto">Padrinos de Anillos</h3>
            <p className="font-poiretOne text-base-plus text-texto">Maria de Lourdes Carranza Huerta</p>
            <p className="font-poiretOne text-base-plus text-texto">Juan Fernando Ibarra</p>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <Image 
            src="/hojas.svg" 
            width={80}
            height={80}
            className="absolute top-0 right-0 w-24 h-24 object-cover opacity-25" 
            alt="Top Right Ornament" />
          <Image 
            src="/hojas.svg" 
            width={80}
            height={80}
            className="absolute bottom-0 left-0 w-24 h-24 transform rotate-180 object-cover opacity-25" 
            alt="Bottom Left Ornament" />
        </div>
      </section>
      <section className="relative w-full h-screen flex flex-col items-center justify-start bg-fondo2 md:pb-16">
        <div className="text-center z-10">
          <h2 className="font-greatVibes text-3xl mb-3 mt-2 text-title translate-y-20">Itinerario</h2>
        </div>
        <div className="relative w-full h-full flex items-center justify-center">
          <Image 
            src="/itinerario2.svg" 
            alt="Itinerario" 
            layout="fill" 
            objectFit="contain" 
            quality={100}
            className="pointer-events-none mt-auto"
          />
        </div>
      </section>
      <section className="relative z-10 w-full bg-fondo py-10 max-w-xl px-5 xl:px-0 flex flex-col items-center justify-center">
        <div className="text-center">
          <h2 className="font-greatVibes text-3xl mb-3 mt-2 text-title">Ubicación</h2>
          <p className="font-poiretOne text-base-plus mb-3 text-texto">&quot;Antigua Hacienda Las Palmas&quot;</p>
          <p className="font-poiretOne text-base-plus mb-8 text-texto">Fabrica de Los Angeles #15, Tronconal, El Alamito Buenavista, Son</p>
          <div className="flex justify-center mb-3">
            <div> 
              <a href="https://maps.app.goo.gl/tv7saRPfTWwui8so8" target="_blank" rel="noopener noreferrer" className="w-24 h-12 flex items-center justify-center bg-border text-white rounded-full ml-4">
                <p className="font-poiretOne text-lg">Ubicación</p>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-10 z-10 px-5 w-full max-w-xl xl:px-0 flex flex-col items-center justify-center bg-fondo2 rounded-lg">
        <div className="text-center mb-10">
          <blockquote className="font-greatVibes text-3xl mb-3 mt-2 text-title">
            ¡Todas las historias de amor son bonitas pero la nuestra es nuestra favorita!
          </blockquote>
          <p className="font-poiretOne text-base-plus mb-8 text-texto">
            ¡Para el amor no existe el momento perfecto, sino la persona perfecta! Iniciamos 2020 con muchos sueños por cumplir y decidimos hacer realidad el más importante. Con vista al mar, disfrutando de la brisa y tomandonos fotos, con muchos nervios llegó el momento. ¿te quieres casar conmigo?
          </p>
          <p className="font-poiretOne text-base-plus text-texto italic">
            Ella muy nerviosa contestó: ¡Sí mi amor me quiero casar contigo! Con los ojos cristalinos nos abrazamos después de ese momento tan emotivo, ahora unos meses más tarde iniciaremos este viaje de vida juntos.
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
      <section className="relative z-10 w-full max-w-xl px-5 xl:px-0 flex flex-col items-center justify-center border-border rounded-lg mx-4 my-8">
        <RSVPForm />
      </section>
      <section className="relative z-10 bg-fondo w-full max-w-xl  px-5 xl:px-0">
        <Gallery images={images} />
      </section>
      <section className="relative z-10 w-full max-w-xl px-5 xl:px-0 flex flex-col items-center justify-center bg-fondo2 rounded-lg mx-4 my-8">
        <div className="text-center py-5">
          <h2 className="font-greatVibes text-3xl mb-3 mt-2 text-title">Nuestras recomendaciones</h2>
          <p className="font-poiretOne text-base-plus mb-8 text-texto">
            No olvides utilizar nuestro filtro de Instagram y etiquetarnos @zayabi25
          </p>
          <h2 className="font-tangerine text-2xl text-texto">#Zaira&Abhigael</h2>
          <a href="https://www.instagram.com/ar/452927690859467" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-title bg-fondo hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.248 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.248 3.608-1.31 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.281.058-2.418.27-3.29.542-.872.272-1.611.63-2.347 1.366-.736.736-1.094 1.475-1.366 2.347-.272.872-.484 2.009-.542 3.29-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.058 1.281.27 2.418.542 3.29.272.872.63 1.611 1.366 2.347.736.736 1.475 1.094 2.347 1.366.872.272 2.009.484 3.29.542 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.281-.058 2.418-.27 3.29-.542.872-.272 1.611-.63 2.347-1.366.736-.736 1.094-1.475 1.366-2.347.272-.872.484-2.009.542-3.29.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.058-1.281-.27-2.418-.542-3.29-.272-.872-.63-1.611-1.366-2.347-.736-.736-1.475-1.094-2.347-1.366-.872-.272-2.009-.484-3.29-.542-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.207 0-4-1.793-4-4s1.793-4 4-4 4 1.793 4 4-1.793 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z"/>
            </svg>
            Utiliza nuestro filtro
          </a>
        </div>
      </section>
      <section className="relative overflow-hidden z-10 w-full max-w-md px-10 xl:px-0 flex flex-col items-center justify-center bg-fondo2">
        <InfoCarousel />
      </section>
    </>
  );
}
