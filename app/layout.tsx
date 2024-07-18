import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header/Header";
import { Aside } from "@/components/Aside/Aside";
import { Footer } from "@/components/Footer/Footer";
import { NewsContextProvider } from "@/context/NewsContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | Ser Autista',
    default: 'Ser Autista'
  },
  description: "Blog ser autista, com informações relevantes sobre esse mundo maravilhoso.",
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
