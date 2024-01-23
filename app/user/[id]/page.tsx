"use client"

import React, {useState} from "react";
import {
    Drawer
} from "@/components/ui/drawer";
import {ProfileTab} from "@/components/ProfileTab";
import {useContestant} from "@/hooks/useContestant";
import {LoadingSpinner} from "@/components/ui/LoadingSpinner";
import {ProfileBio} from "@/components/ProfileBio";

export default function ({ params }: { params: { id: string } }){
    const {profile, isLoading, weightRecord, caloriesRecord, workoutRecord} = useContestant(params.id);
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

    if(isLoading){
        return <div className={"py-2 px-4 flex flex-row"}><p>Loading...</p><LoadingSpinner/></div>
    }

    return (
        <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
            <div className={"py-2 px-4"}>
                <ProfileBio profile={profile}/>
                <ProfileTab weight={weightRecord} calorie={caloriesRecord} workout={workoutRecord} userId={params.id}/>
            </div>
        </Drawer>
    )
}