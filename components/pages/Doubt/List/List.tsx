'use client'

import { DoubtProps } from "@/@types/News";
import { api } from "@/lib/axios";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";


export function List() {
    const [data, setData] = useState<DoubtProps[]>([])

    async function getDoubt() {
        const res = await api.get('/doubt')
        setData(res.data.doubt)
    }

    useEffect(() => {
        getDoubt()
    }, [])

    return (
        <>
            {data.map(doubt => {
                return (
                    <Link href={`/doubt/${doubt.id}`} className="w-full flex items-center justify-center gap-x-2">
                        <h3 className="text-black font-semibold text-xl hover:underline">
                            {doubt.question}
                        </h3>
                    </Link>
                )
            })}
        </>
    )
}