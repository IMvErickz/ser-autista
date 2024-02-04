'use client'

import { DataProps } from "@/@types/News"
import { LastNews } from "./LastNews"
import { useContext, useEffect, useState } from "react"
import { api } from "@/lib/axios"
import { NewsContext, NewsContextProvider } from "@/context/NewsContext"

export function LastNewsApresentation() {

    const { data } = useContext(NewsContext)

    return (
        <>
            {data?.map(news => {
                return (
                    <LastNews key={news.id} imageUrl={news.imgUrl} title={news.titleExcert as string} />
                )
            })}
        </>
    )
}