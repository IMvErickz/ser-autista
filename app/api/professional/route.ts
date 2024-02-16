import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
    const professional = await prisma.professional.findMany()

    return NextResponse.json({ professional })
}