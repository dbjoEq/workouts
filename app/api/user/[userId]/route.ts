import {NextRequest, NextResponse} from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: NextRequest, context: {params: {userId: string}}){
    const {userId} = context.params;
    const user = await prisma.profile.findUnique({
        where: {id: userId},
        include: {record: true}
    });
    return NextResponse.json(user);
}

export async function PATCH(request: NextRequest, context: {params: {userId: string}}){
    const {userId} = context.params;
    const user = await prisma.profile.findUnique({
        where: {id: userId}
    });
    return NextResponse.json(user);
}


