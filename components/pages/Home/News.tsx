'use client'

import { Apresentation } from "@/components/News/Apresentation"
import { api } from "@/lib/axios"
import { Suspense, useEffect, useState } from "react"
import 'dotenv/config'
import { DataProps } from "@/@types/News"
import { Loading } from "@/components/Loading/Loading"

export function News() {

    const [data, setData] = useState<DataProps[]>([])

    useEffect(() => {
        async function getAllNews() {
            const response = await api.get('/news')
            setData(response.data.response)
        }
        getAllNews()

    }, [])


    return (
        <section className='size-full flex flex-col gap-y-80 sm:gap-y-6 items-center justify-center pt-12 sm:pb-12 pb-40'>
            <Suspense fallback={<Loading />}>
                {data.map(news => {
                    return (
                        <Apresentation title={news.title} imgUrl={news.imgUrl} id={news.id} excert={news.excert} />
                    )
                })
                }
            </Suspense>
        </section>
    )
}