
import Image from "next/image";
import Gallery from '@/components/gallery';

export default async function Home() {
 
  return (
    <>
      <section className="relative z-10 w-full max-w-xl h-screen px-5 xl:px-0">
        <Image src="/boda/IMG_2106.jpg" alt="Boda Abhigael & Zayra" layout="fill" objectFit="cover" quality={100}/>
      </section>
      <section className="relative z-10 w-full max-w-xl h-screen px-5 xl:px-0">
        <Image src="/boda/IMG_2092.jpg" alt="Boda Abhigael & Zayra" layout="fill" objectFit="cover" quality={100}/>
      </section>
      <section className="relative z-10 w-full max-w-xl h-screen px-5 xl:px-0">
        <Gallery />
      </section>
    </>
  );
}

