'use client'

import { api } from "@/lib/axios"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const doubtSchema = z.object({
    author: z.string(),
    question: z.string()
})

type doubtData = z.infer<typeof doubtSchema>

export function DoubtForm() {
    const { register, handleSubmit } = useForm<doubtData>({
        resolver: zodResolver(doubtSchema)
    })

    async function handleCreateDoubt(data: doubtData) {
        const { author, question } = data
        try {
            if (!author) {
                await api.post('/doubt', {
                    author: 'Anônimo',
                    question
                })
            } else {
                await api.post('/doubt', {
                    author,
                    question
                })
            }
        } catch (err) {
            throw err
        }
    }

    return (
        <form onSubmit={handleSubmit(handleCreateDoubt)} className="w-full flex flex-col items-center justify-center gap-y-4">
            <h2 className="text-blue-450 font-semibold text-2xl">Deixe sua dúvida aqui</h2>
            <input {...register('author')} type="text" className="border-2 border-black border-solid rounded py-2 text-black w-full" placeholder="Nome (Opcional)" />
            <textarea {...register('question')} rows={5} cols={30} className="border-2 border-black border-solid rounded text-black" placeholder="Escreva aqui sua pergunta" />
            <button type='submit' className='bg-blue-450 py-2 px-4 rounded hover:bg-blue-450/80 transition-colors'>Enviar</button>
        </form>
    )
}