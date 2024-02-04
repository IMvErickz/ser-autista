'use client'

import { DataProps } from "@/@types/News";
import { api } from "@/lib/axios";
import { ReactNode, createContext, useEffect, useState } from "react";

interface NewsContextProps {
    data: DataProps[]
}

interface ProviderProps {
    children: ReactNode
}

export const NewsContext = createContext({} as NewsContextProps)

export function NewsContextProvider({ children }: ProviderProps) {
    const [data, setData] = useState<DataProps[]>([])

    useEffect(() => {
        async function getLastNews() {
            const res = await api.get('/news')
            setData(res.data.response)
        }
        getLastNews()
    }, [])

    return (
        <NewsContext.Provider value={{ data }}>
            {children}
        </NewsContext.Provider>
    )
}