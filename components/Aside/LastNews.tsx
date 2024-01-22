import Link from "next/link"

export function LastNews() {
    return (
        <div className="w-full flex flex-row items-center justify-center gap-x-2">
            <img src="./noticia.png" alt="" className="w-[88px] h-[56px]" />
            <Link href="/news" className="font-bold text-blue-450 text-xs leading-9">Título da Notícia número 1</Link>
        </div>
    )
}