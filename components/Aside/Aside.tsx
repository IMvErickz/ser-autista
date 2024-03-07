import { LogoSerAutista } from "@/public/icons/Logo";
import { LastNewsApresentation } from './LastNewsApresentation'
import Image from "next/image";
import Instagram from '/assets/icons/instagram 1.svg'

export function Aside() {
    return (
        <aside className="w-full sm:max-w-sm flex flex-col items-center justify-center gap-y-4 py-10">
            <div className="w-[268px] h-[175px] flex items-center justify-center bg-white shadow-4xl">
                <LogoSerAutista height="300" />
            </div>
            <div className="w-[272px] h-[90px] flex items-center justify-center">
                <p className="font-normal text-sm leading-5 text-justify text-zinc-750">
                    A ONG Ser Autista é uma ONG que auxiliana integração e atendimento de crianças com TEA.
                </p>
            </div>
            <div>
                <a href="https://www.instagram.com/serautista.ong.br?igsh=MTdvZ3A2MDFwaHBxag%3D%3D&utm_source=qr" target="_blank">
                    <Image src={Instagram} width={60} height={60} alt="Ser Altista" />
                </a>
            </div>
            <div className="w-[268px] h-max flex flex-col items-center justify-center bg-white shadow-4xl">
                <header>
                    <h1 className="text-blue-450 font-bold text-xl leading-7 pt-2">
                        Últimas Notícias
                    </h1>
                </header>
                <div className="w-full h-max max-h-[484px] overflow-auto flex flex-col items-center justify-center py-4 gap-y-4">
                    <LastNewsApresentation />
                </div>
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-y-4 border-2 border-solid border-blue-450 p-6 shadow-4xl rounded">
                <p className="text-blue-450 text-2xl text-center font-bold">Olá! Adorei seu projeto e gostaria de contribuir.</p>
                <a
                    href="https://api.whatsapp.com/send?phone=5547997787872" target="_blank"
                    className=" bg-blue-450 py-2 px-4 text-center rounded-md font-semibold hover:bg-blue-450/80 transition-colors"
                >
                    Entre em contato pelo Whatsapp
                </a>
            </div>
        </aside>
    )
}