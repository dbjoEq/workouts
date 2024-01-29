"use client"

import React, {Suspense, useState} from "react";
import {
    Drawer
} from "@/components/ui/drawer";
import {ProfileBio} from "@/components/ProfileBio";
import {ProfileTab} from "@/components/ProfileTab";
import {LoadingSpinner} from "@/components/ui/LoadingSpinner";

export default function ({ params }: { params: { id: string } }){
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

    return (
        <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
            <div className={"py-2 px-4"}>
                <ProfileBio userId={params.id}/>
                <Suspense fallback={<LoadingSpinner/>}>
                    <ProfileTab userId={params.id}/>
                </Suspense>
            </div>
        </Drawer>
    )
}