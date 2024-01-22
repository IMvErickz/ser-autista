import { Professional } from "@/components/Professional/Professional";
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Ser Autista/Profissionais',
    description: 'Profissionais',
}

export default function Professionals() {
    return (
        <section className="size-full flex flex-col items-center justify-center py-12">
            <header className="w-full flex items-center justify-center">
                <h1 className="text-blue-450 font-bold text-4xl leading-10">Profissionais para atendimento</h1>
            </header>

            <div className="size-full flex flex-col items-center justify-center gap-y-7 pt-20">
                <Professional />
                <Professional />
                <Professional />
            </div>
        </section>
    )
}