import {NextRequest, NextResponse} from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: NextRequest){
    const body = await request.json();
    const res = await prisma?.dataRecord.create({
        data: {
            type: body.type,
            value: body.value,
            date: new Date().toLocaleDateString("no-NO"),
            details: body?.details,
            contestantId: body.contestantId
        }
    })
    return NextResponse.json(res);
}




