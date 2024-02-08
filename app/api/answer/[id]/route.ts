import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET(req: Request, { params }: { params: { id: string } }) {
    const answer = await prisma.answer.findMany({
        where: {
            Doubt: {
                id: params.id
            }
        }
    })

    return NextResponse.json({ answer })
}