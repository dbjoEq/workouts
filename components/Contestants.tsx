"use client"

import React from "react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {mockData} from "@/lib/mockData";
import {Button} from "@/components/ui/button";
import {toast} from "sonner";

export const Contestants = () => {
    const onBooClicked = () => {
        toast("BOOOOoooooOOOoOOOoOOOO!")
    }
    const onHighFiveClicked = () => {
        toast("High Five Man!")
    }
    return (
        <>
            {mockData.map((contestant: any) => (
                <Card className={"w-[350px]"}>
                    <CardHeader>
                        <CardTitle>{contestant.name}</CardTitle>
                        <CardDescription>"{contestant.motivation}"</CardDescription>
                        <CardContent>
                            <div className={"w-full items-center"}>
                                <div className={"flex flex-row gap-2"}>
                                    <label>Height:</label>
                                    <text>{contestant.height}cm</text>
                                </div>
                                <div className={"flex flex-row gap-2"}>
                                    <label>Start Weight:</label>
                                    <text>{contestant.startWeight}kg</text>
                                </div>


                            </div>

                        </CardContent>
                        <CardFooter className={"flex justify-between"}>
                            <Button onClick={onBooClicked} variant="outline">BOOOO</Button>
                            <Button onClick={onHighFiveClicked}>High Five</Button>
                        </CardFooter>
                    </CardHeader>
                </Card>
            ))}
        </>
    )
}