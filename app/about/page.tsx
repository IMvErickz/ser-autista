import { Metadata } from "next";
import { AboutUsContainer } from "@/components/pages/about/container";

export const metadata: Metadata = {
    title: 'Sobre Nós',
    description: 'Sobre Nós',
}

export default function About() {
    return (
        <AboutUsContainer />
    )
}