import "./globals.css";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import Musica from '@/components/musica';
import Header from '@/components/header';

export const metadata = {
  title: "Boda Zaira & Abhigael",
  description: "Te invitamos a nuestra Boda Zaira & Abhigael",
  metadataBase: new URL("https://boda-zaira-abhigael.vercel.app"),
  openGraph: {
    images: [
      {
        url: "https://boda-zaira-abhigael.vercel.app/_next/image?url=%2Fboda%2FIMG_2181.jpg&w=828&q=75",
        width: 800,
        height: 600,
        alt: "Boda Zaira & Abhigael",
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="https://boda-zaira-abhigael.vercel.app/_next/image?url=%2Fboda%2FIMG_2181.jpg&w=828&q=75" />
      </head>
      <body className={cx(sfPro.variable, inter.variable)}>
        <div className="fixed h-screen w-full bg-fondo" />
        <Suspense fallback="...">
          {/* <Header /> */}
        </Suspense>
        <main className="flex min-h-screen w-full flex-col items-center justify-center">
          {children}
        </main>
        <Musica />
        <Footer />
        <VercelAnalytics />
      </body>
    </html>
  );
}