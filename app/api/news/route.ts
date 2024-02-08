import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    const news = await prisma.news.findMany()

    const response = news.map(n => {
        return {
            id: n.id,
            title: n.title,
            titleExcert: n.content.substring(0, 15).concat('...'),
            imgUrl: n.imgUrl,
            excert: n.content.substring(0, 300).concat('...')
        }
    })

    return NextResponse.json({ response })
}