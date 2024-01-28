'use client'

import { DataProps } from "@/@types/News"
import { CommentContainer } from "@/components/Comments/CommentContainer"
import { api } from "@/lib/axios"
import { useEffect, useState } from "react"

interface NewsInfoProps {
    id: string
}

export function NewsInfo(props: NewsInfoProps) {

    const [data, setData] = useState<DataProps>()
    console.log(data?.title)

    useEffect(() => {
        async function getNewsInfo() {
            const response = await api.get(`/news/${props.id}`)
            setData(response.data.news)
        }
        getNewsInfo()
    }, [])

    return (
        <section className="w-full h-full flex flex-col items-center justify-center gap-y-6 pt-9 pb-10">
            <header className="w-full flex items-center justify-start">
                <h1 className="text-blue-450 font-bold text-4xl leading-10">{data?.title}</h1>
            </header>
            <img src={data?.imgUrl} alt="" className="w-[764px] h-[315.76px]" />
            <div className="w-[752px] h-max flex flex-col items-start justify-center gap-y-4">
                <h2 className="text-zinc-450 font-bold text-xl leading-9">Subtítulo da notícia</h2>
                <p className="text-zinc-750 font-normal text-sm leading-5 text-justify">
                    {data?.content}
                </p>
            </div>
            <CommentContainer />
        </section>
    )
}