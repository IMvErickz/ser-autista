import { DoubtForm } from "@/components/pages/Doubt/Form/Form";
import { List } from "@/components/pages/Doubt/List/List";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Dúvidas',
    description: 'Dúvidas',
}

export default function Doubt() {
    return (
        <section className="size-full flex flex-col items-center justify-center gap-y-8">
            <header className="w-full flex items-center justify-center">
                <h1 className="text-blue-450 text-4xl font-bold">Dúvidas</h1>
            </header>
            <div>
                <DoubtForm />
            </div>
            <div className="w-full h-max flex flex-col items-center justify-center gap-y-3">
                <List />
            </div>
        </section>
    )
}