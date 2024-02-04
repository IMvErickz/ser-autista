'use client'

import { DataProps, CommentProps } from "@/@types/News";
import { api } from "@/lib/axios";
import { ReactNode, createContext, useEffect, useState } from "react";

interface NewsContextProps {
    data: DataProps[]
    handleSetId: (id: string) => void
    id: string
    getComments: (id: string) => Promise<void>
    comments: CommentProps[]
    handleSetComments: (data: CommentProps) => void
}

interface ProviderProps {
    children: ReactNode
}

export const NewsContext = createContext({} as NewsContextProps)

export function NewsContextProvider({ children }: ProviderProps) {
    const [data, setData] = useState<DataProps[]>([])
    const [id, setId] = useState('')
    const [comments, setComments] = useState<CommentProps[]>([])

    useEffect(() => {
        async function getLastNews() {
            const res = await api.get('/news')
            setData(res.data.response)
        }
        getLastNews()
    }, [])

    function handleSetId(id: string) {
        setId(id)
    }

    async function getComments(id: string) {
        await api.get(`/comment/${id}`)
            .then(res => {
                setComments(res.data.comments)
            })
    }

    function handleSetComments(data: CommentProps) {
        setComments(state => [...state, data])
    }

    return (
        <NewsContext.Provider value={{ data, handleSetId, id, comments, getComments, handleSetComments }}>
            {children}
        </NewsContext.Provider>
    )
}