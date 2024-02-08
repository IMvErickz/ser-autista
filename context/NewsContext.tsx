'use client'

import { DataProps, CommentProps } from "@/@types/News";
import axios from "axios";
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
            const res = await axios.get('/api/news')
            setData(res.data.response)
        }
        getLastNews()
    }, [])

    function handleSetId(newId: string) {
        setId(newId)
    }

    async function getComments(newId: string) {
        await axios.get(`/api/comment/${newId}`)
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