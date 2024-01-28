'use client'

import { Apresentation } from "@/components/News/Apresentation"
import { api } from "@/lib/axios"
import { useEffect, useState } from "react"
import 'dotenv/config'
import { DataProps } from "@/@types/News"

export function News() {

    const [data, setData] = useState<DataProps[]>([])

    useEffect(() => {
        async function getAllNews() {
            const response = await api.get('/news')
            setData(response.data.news)
        }
        getAllNews()

    }, [])


    return (
        <section className='size-full flex flex-col gap-y-6 items-center justify-center pt-12 pb-12'>
            {data
                ? data.map(news => {
                    return (
                        <Apresentation title={news.title} imgUrl={news.imgUrl} id={news.id} content={news.content} />
                    )
                })
                : <span>Não há dados</span>
            }
        </section>
    )
}