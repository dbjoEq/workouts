"use client"

import {Separator} from "@/components/ui/separator";
import React, {useState} from "react";
import {
    Drawer
} from "@/components/ui/drawer";
import {ProfileTab} from "@/components/ProfileTab";
import {useContestant} from "@/hooks/useContestant";
import {LoadingSpinner} from "@/components/ui/LoadingSpinner";

export default function ({ params }: { params: { id: string } }){
    const {contestant, isLoading, weightRecord, caloriesRecord, workoutRecord} = useContestant(params.id);
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

    if(isLoading){
        return <div className={"py-4 px-8 flex flex-row"}><p>Loading...</p><LoadingSpinner/></div>
    }

    return (
        <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
            <div className={"py-4 px-8"}>
                <h1>{contestant?.name}</h1>
                <div className={"flex justify-between"}>
                    <div>
                    <label>Start weight: </label><label className={"text-primary"}>{contestant?.startWeight}kg</label>

                    </div>
                    <div>
                    <label>Target weight: </label><label className={"text-primary"}>{contestant?.goalWeight}kg</label>

                    </div>
                </div>
                <Separator className={"my-4"}/>
                <ProfileTab weight={weightRecord} calorie={caloriesRecord} workout={workoutRecord} userId={params.id}/>
            </div>

        </Drawer>
    )
}