import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header/Header";
import { Aside } from "@/components/Aside/Aside";
import { Footer } from "@/components/Footer/Footer";
import { NewsContextProvider } from "@/context/NewsContext";
import { DefaultSeo } from 'next-seo'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ser Autista",
  description: "Blog ser autista",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icons/favicon.png" />
      </head>
      <body className={inter.className}>
      <DefaultSeo
          openGraph={{
            type: 'website',
            locale: 'pt_BR',
            url: 'https://serautista.ong.br/',
            siteName: 'Ser Autista',
          }}
        />
        <NewsContextProvider>
          <Header />
          <main className="flex flex-col sm:flex-row items-start justify-center gap-y-36 sm:gap-x-36 bg-white sm:px-0 px-6">
            <section className="w-full h-full flex items-center justify-center">
              {children}
            </section>
            <Aside />
          </main>
          <Footer />
        </NewsContextProvider>
      </body>
    </html>
  );
}
