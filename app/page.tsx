import { Apresentation } from "@/components/News/Apresentation";

export default function Home() {
  return (
    <section className='size-full flex flex-col gap-y-6 items-center justify-center pt-12 pb-12'>
      <Apresentation />
      <Apresentation />
      <Apresentation />
      <Apresentation />
    </section>
  );
}
