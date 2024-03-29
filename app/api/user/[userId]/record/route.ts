import {NextRequest, NextResponse} from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: NextRequest){
    const body = await request.json();
    const res = await prisma?.record.create({
        data: {
            type: body.type,
            value: body.value,
            date: new Date().toLocaleDateString("no-NO"),
            details: body?.details,
            profileId: body.profileId
        }
    })
    return NextResponse.json(res);
}

export async function GET(request: NextRequest, context: {params: {userId: string}}){
    const {userId} = context.params;
    const records = await prisma.record.findMany({
        where: {profileId: userId},
        include: {contestant: false}
    })
    return NextResponse.json(records);
}








