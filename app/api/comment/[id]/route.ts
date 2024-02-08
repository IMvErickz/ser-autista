import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET(req: Request, { params }: { params: { id: string } }) {
    const comments = await prisma.comments.findMany({
        where: {
            News: {
                id: params.id
            }
        }
    })

    return NextResponse.json({ comments })
}