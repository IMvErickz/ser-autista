import { prisma } from "@/lib/prisma"
import { randomUUID } from "crypto"
import { NextResponse } from "next/server"
import { z } from "zod"

export async function GET() {
    const doubt = await prisma.doubt.findMany()

    return NextResponse.json({ doubt })
}

export async function POST(req: Request) {
    const doubtSchema = z.object({
        author: z.string(),
        question: z.string()
    })

    const { author, question } = doubtSchema.parse(await req.json())

    await prisma.doubt.create({
        data: {
            id: randomUUID(),
            author,
            question
        }
    })

    return NextResponse.json('sucess')
}