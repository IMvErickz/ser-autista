'use client'

import Link from "next/link"

interface LastNewsProps {
    imageUrl: string
    title: string
}

export function LastNews(props: LastNewsProps) {
    return (
        <div className="w-full flex flex-row items-center justify-start px-4 gap-x-2">
            <img src={props.imageUrl} alt="" className="w-[88px] h-[56px]" />
            <Link href="/news" className="font-bold text-blue-450 text-xs leading-9">{props.title}</Link>
        </div>
    )
}