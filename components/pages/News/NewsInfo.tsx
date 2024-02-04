'use client'

import { DataProps } from "@/@types/News"
import { CommentContainer } from "@/components/Comments/CommentContainer"
import { NewsContext } from "@/context/NewsContext"
import { api } from "@/lib/axios"
import { useContext, useEffect, useState } from "react"

interface NewsInfoProps {
    id: string
}

export function NewsInfo(props: NewsInfoProps) {

    const [data, setData] = useState<DataProps>()
    console.log(data?.title)

    const { handleSetId } = useContext(NewsContext)

    handleSetId(props.id)

    useEffect(() => {
        async function getNewsInfo() {
            const response = await api.get(`/news/${props.id}`)
            setData(response.data.news)
        }
        getNewsInfo()
    }, [])

    return (
        <section className="sm:w-full w-[600px] h-full flex flex-col items-center justify-center gap-y-6 pt-9 pb-10 px-36">
            <header className="w-full flex items-center justify-start">
                <h1 className="text-blue-450 font-bold text-4xl leading-10">{data?.title}</h1>
            </header>
            <img src={data?.imgUrl} alt="" className="w-[764px]" />
            <div className="w-full h-max flex flex-col items-start justify-center gap-y-4">
                <p className="text-zinc-750 font-normal text-sm leading-5 text-justify">
                    {data?.content}
                </p>
            </div>
            <CommentContainer />
        </section>
    )
}