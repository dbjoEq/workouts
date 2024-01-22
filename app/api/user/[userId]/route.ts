import {NextRequest, NextResponse} from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: NextRequest, context: {params: {userId: string}}){
    const {userId} = context.params;
    const user = await prisma.contestant.findUnique({
        where: {id: userId},
        include: {dataRecord: true}
    });
    return NextResponse.json(user);
}

export async function PATCH(request: NextRequest, context: {params: {userId: string}}){
    const {userId} = context.params;
    const user = await prisma.contestant.findUnique({
        where: {id: userId}
    });
    return NextResponse.json(user);
}

export async function POST(request: NextRequest, context: {params: {userId: string}}){
    const {userId} = context.params;
    const user = await prisma.contestant.findUnique({
        where: {id: userId}
    });
    return NextResponse.json(user);
}




