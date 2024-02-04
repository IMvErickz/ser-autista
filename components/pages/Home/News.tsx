'use client'

import { Apresentation } from "@/components/News/Apresentation"
import { api } from "@/lib/axios"
import { Suspense, useContext, useEffect, useState } from "react"
import { DataProps } from "@/@types/News"
import { Loading } from "@/components/Loading/Loading"
import { NewsContext, NewsContextProvider } from "@/context/NewsContext"

export function News() {

    const { data } = useContext(NewsContext)

    return (
        <section className='size-full flex flex-col gap-y-80 sm:gap-y-6 items-center justify-center pt-12 sm:pb-12 pb-40'>
            <Suspense fallback={<Loading />}>
                {data?.map(news => {
                    return (
                        <Apresentation key={news.id} title={news.title} imgUrl={news.imgUrl} id={news.id} excert={news.excert} />
                    )
                })
                }
            </Suspense>
        </section>
    )
}