import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
    const doubt = await prisma.doubt.findMany()

    return NextResponse.json({ doubt })
}