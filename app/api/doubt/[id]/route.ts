import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const doubt = await prisma.doubt.findUniqueOrThrow({
        where: {
            id: params.id
        }
    })

    return NextResponse.json({ doubt })
}