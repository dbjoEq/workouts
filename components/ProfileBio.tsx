"use client"
import React, {useState} from "react";
import { Profile } from '@prisma/client';
import {Separator} from "@/components/ui/separator";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {useProfile} from "@/hooks/useProfile";
import {Skeleton} from "@/components/ui/skeleton";

type ProfileBioType = {
    userId: string;
}
export const ProfileBio = ({userId}: ProfileBioType) => {
    const {profile, isLoading} = useProfile(userId);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    return (

        <>
            <div className={"flex flex-row flex-wrap justify-between content-center items-center"}>
                <h1>{profile?.name}</h1>
            </div>
            <div className={"flex justify-between flex-col"}>
                <div className={"flex flex-row justify-between basis-6/12 items-center"}>
                    <Label className={"w-full"}>Weight target: </Label><Input className={"w-full"} type={"number"} defaultValue={profile?.goalWeight} disabled={!isEditing}/>
                </div>
                <div className={"flex flex-row justify-between basis-6/12 items-center"}>
                    <Label className={"w-full"}>Calorie target: </Label><Input className={"w-full"} type={"number"} defaultValue={Number(profile?.caloriesTarget)} disabled={!isEditing}/>
                </div>
            </div>
            <div>
                <Label>"{profile?.motivation}"</Label>
            </div>
            <Separator className={"my-4"}/>
        </>
    )
}