import { CommentContainer } from "@/components/Comments/CommentContainer";
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Ser Autista/Notícia',
    description: 'Notícia',
}

export default function News() {
    return (
        <section className="w-full h-full flex flex-col items-center justify-center gap-y-6 pt-9 pb-10">
            <header className="w-full flex items-center justify-start">
                <h1 className="text-blue-450 font-bold text-4xl leading-10">Título da Notícia número 1</h1>
            </header>
            <img src="./noticia.png" alt="" className="w-[764px] h-[315.76px]" />
            <div className="w-[752px] h-max flex flex-col items-start justify-center gap-y-4">
                <h2 className="text-zinc-450 font-bold text-xl leading-9">Subtítulo da notícia</h2>
                <p className="text-zinc-750 font-normal text-sm leading-5 text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nunc lorem, venenatis quis maximus nec, iaculis id elit. Ut nec dolor molestie, viverra dui eu, molestie turpis. Nulla tincidunt euismod ipsum in vehicula. Donec quis ipsum neque. Ut luctus tellus sed fermentum rutrum. Quisque tincidunt suscipit elementum. Nulla ullamcorper lorem gravida magna pretium, sit amet egestas turpis interdum.

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nunc lorem, venenatis quis maximus nec, iaculis id elit. Ut nec dolor molestie, viverra dui eu, molestie turpis. Nulla tincidunt euismod ipsum in vehicula. Donec quis ipsum neque. Ut luctus tellus sed fermentum rutrum. Quisque tincidunt suscipit elementum. Nulla ullamcorper lorem gravida magna pretium, sit amet egestas turpis interdum.
                </p>
            </div>
            <CommentContainer />
        </section>
    )
}