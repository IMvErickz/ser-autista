'use client'

import { useEffect } from "react";
import { content } from "./text";
import Image from "next/image";


export function AboutUsContainer() {
    useEffect(() => {
        const container = (document.getElementById('container') as HTMLDivElement);

        if (container) {
            // Divide o texto em parágrafos usando quebras de linha como delimitador
            const re = /^<p>.+<\/p>$/gm;
            const paragraphs = content.split(re);

            // Limpa o conteúdo original do elemento
            container.innerHTML = '';

            // Adiciona cada parágrafo como um novo elemento <p> ao elemento div
            paragraphs.forEach(paragraph => {
                const paragraphElement = (document.createElement('p') as HTMLParagraphElement);
                paragraphElement.innerText = paragraph;
                container.appendChild(paragraphElement);
            });
        }
    }, []);
    return (
        <section className="size-full flex flex-col items-center justify-center py-12 px-8 gap-y-8">
            <Image src={'/serAutista.jpg'} width={600} height={600} alt="Ser Altista" />
            <div id="container" className="text-black text-xl">
                {content}
            </div>
        </section>
    )
}