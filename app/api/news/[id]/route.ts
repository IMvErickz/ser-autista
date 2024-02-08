import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { id: string } }) {
    const news = await prisma.news.findUniqueOrThrow({
        where: {
            id: params.id
        }
    })

    return NextResponse.json({ news })
}