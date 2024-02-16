import { LogoSerAutista } from "@/public/icons/Logo";
import Link from "next/link";

export function Header() {
    return (
        <header className="w-full h-28 bg-white flex flex-row items-center justify-center sm:justify-between gap-x-2 px-4 pt-1 drop-shadow-2xl">
            <LogoSerAutista height="239" />

            <nav className="flex flex-row sm:gap-x-16 gap-x-4 sm:pr-12">
                <Link href="/" className="text-blue-450 text-sm font-bold leading-4">Home</Link>
                <Link href="/professionals" className="text-blue-450 text-sm font-bold leading-4">Profissionais</Link>
                <Link href="/doubt" className="text-blue-450 text-sm font-bold leading-4">Dúvidas</Link>
            </nav>
        </header>
    )
}