import "./globals.css";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import Musica from '@/components/musica';
import Header from '@/components/header';

export const metadata = {
  title: "Boda Abhigael & Zayra",
  description:
    "Te invitamos a nuestra Boda Abhigael & Zayra",
  metadataBase: new URL("https://bodaabhigaelzayra.com"),
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable)}>
        <div className="fixed h-screen w-full bg-fondo" />
        <Suspense fallback="...">
          <Header />
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
