import Link from "next/link";

export function Apresentation() {
    return (
        <div className="w-[900px] h-[186px] flex flex-row items-center justify-center gap-x-9">
            <img src="./noticia.png" alt="" className="w-[344px] h-[186px]" />
            <div className="size-full flex flex-col pt-1 gap-y-1">
                <Link href='/news' className="text-blue-450 font-bold text-2xl leading-9 hover:underline">
                    Título da Notícia número 1
                </Link>
                <div className="w-[532px] h-[90px]">
                    <p className="font-normal text-sm text-zinc-750 text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nunc lorem, venenatis quis maximus nec, iaculis id elit. Ut nec dolor molestie, viverra dui eu, molestie turpis. Nulla tincidunt euismod ipsum in vehicula. Donec quis ipsum neque. Ut luctus tellus sed fermentum rutrum. Quisque tincidunt suscipit elementum. Nulla ullamcorper lorem gravida magna pretium, sit amet egestas turpis interdum.
                    </p>
                </div>
            </div>
        </div>
    )
}