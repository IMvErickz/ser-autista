'use client'

import { api } from "@/lib/axios"
import { useEffect, useState } from "react"

interface ProfessionalProps {
    id: string
    name: string
    email: string
    number: string
    address: string
    imageUrl: string
    specialty: string
    description: string
}

export function Professional() {
    const [data, setData] = useState<ProfessionalProps[]>([])

    async function GetProfessional() {
        const res = await api.get('/professional')
        setData(res.data.professional)
    }

    useEffect(() => {
        GetProfessional()
    }, [])
    return (
        <>
            {data.map(professional => {
                return (
                    <div className="w-96 flex flex-row items-center justify-start gap-x-6">
                        <img src={professional.imageUrl} alt="" className="w-[144px] h-[114px]" />
                        <div className="flex flex-col items-start justify-center space-y-1">
                            <h2 className="text-blue-450 font-bold text-xl">{professional.name}</h2>
                            <span className="text-zinc-450 font-bold text-lg ">{professional.number}</span>
                            <p className="font-normal text-sm text-zinc-450 ">{professional.address}</p>
                            <p className="font-normal text-sm text-zinc-450 ">{professional.email}</p>
                            <p className="font-normal text-sm text-zinc-450 ">{professional.specialty}</p>
                            <p className="font-normal text-sm text-zinc-450 ">{professional.description}</p>
                        </div>
                    </div>
                )
            })}
        </>
    )
}