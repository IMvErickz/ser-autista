'use client'

import { DoubtProps } from "@/@types/News"
import { Avatar } from "@/components/Comments/Avatar"
import { api } from "@/lib/axios"
import { useEffect, useState } from "react"

interface AnswerProps {
    id: string
    author: string
    content: string
}

export default function DoubtId({ params }: { params: { id: string } }) {

    const [data, setData] = useState<DoubtProps[]>([])
    const [answers, setAnswer] = useState<AnswerProps[]>([])

    async function getDoubtId() {
        const res = await api.get(`/doubt/${params.id}`)
        return res
    }

    async function getAnswer() {
        return await api.get(`/answer/${params.id}`)
    }

    useEffect(() => {
        Promise.all([getDoubtId(), getAnswer()])
            .then(res => {
                setData([res[0].data.doubt])
                setAnswer(res[1].data.answer)
            })
    }, [])

    const dateFormat = new Intl.DateTimeFormat('pt-BR')


    return (
        <section className="sm:w-full w-[600px] h-full flex flex-col items-center justify-center gap-y-6 pt-9 pb-10 px-36">
            {data.map(doubt => {
                return (
                    <>
                        <header className="w-full flex flex-col items-center justify-start">
                            <h1 className="text-blue-450 font-bold text-4xl leading-10">{doubt.question}</h1>
                            <span className="text-zinc-450 text-sm">
                                <strong>Criada em: </strong>
                                {dateFormat.format(new Date(doubt.createdAt))}
                            </span>
                            <span className="text-zinc-450 text-sm">
                                <strong>Por: </strong>
                                {doubt.author}
                            </span>
                        </header>
                        <div className="w-full h-max flex flex-col items-start justify-center gap-y-4">
                            {answers.map(answer => {
                                return (
                                    <div className="w-full h-max flex flex-col items-center justify-center gap-y-4 border-4 border-blue-450 border-solid rounded-xl px-8 py-4">
                                        <header className="w-full flex items-center justify-start gap-x-2 px-4">
                                            <Avatar />
                                            <h2 className="text-blue-450 font-semibold text-2xl">{answer.author}</h2>
                                        </header>
                                        <div className="w-full flex items-center justify-start px-4">
                                            <p className="text-black text-start">
                                                {answer.content}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </>
                )
            })}
        </section>
    )
}