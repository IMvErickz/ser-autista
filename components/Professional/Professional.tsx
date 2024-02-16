'use client'

import axios from "axios"
import { useEffect, useState } from "react"

interface ProfessionalProps {
    id: string
    name: string
    email: string
    number: string
    address: string
    imageUrl: string
}

export function Professional() {
    const [data, setData] = useState<ProfessionalProps[]>([])

    async function GetProfessional() {
        const res = await axios.get('/api/professional')
        setData(res.data.professional)
    }

    useEffect(() => {
        GetProfessional()
    }, [])
    return (
        <>
            {data.map(professional => {
                return (
                    <div className="w-max flex flex-row items-center justify-center gap-x-6">
                        <img src={professional.imageUrl} alt="" className="w-[144px] h-[114px]" />
                        <div className="flex flex-col items-start justify-center space-y-1">
                            <h2 className="text-blue-450 font-bold text-xl">{professional.name}</h2>
                            <span className="text-zinc-450 font-bold text-lg ">{professional.number}</span>
                            <p className="font-normal text-sm text-zinc-450 ">{professional.address}</p>
                            <p className="font-normal text-sm text-zinc-450 ">{professional.email}</p>
                        </div>
                    </div>
                )
            })}
        </>
    )
}