import { News } from "@/components/pages/Home/News";
import { NextSeo } from "next-seo";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Simple Usage Example"
        description="A short description goes here."
  />
    <section className="w-full flex flex-col items-center justify-center pt-10 gap-y-12">
      <Image src={'/serAutista.jpg'} width={600} height={600} alt="Ser Altista" />
      <h1 className="text-blue-450 text-4xl font-bold">Nossos Conteúdos</h1>
      <News />
    </section>
    </>
  );
}
