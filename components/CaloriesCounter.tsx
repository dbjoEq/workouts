"use client"

import React from "react";
import {Slider} from "@/components/ui/slider";



type CaloriesCounter= {
    calories: number;
    setCalories: any;
}


export const CaloriesCounter = ({calories, setCalories}: CaloriesCounter) => {
    return (
        <div className="flex items-center justify-center space-x-2 flex-col">
            <Slider className={"py-4"} defaultValue={[calories]} max={4000} step={1} onValueChange={(event) => setCalories(event[0])}/>
            <div className="flex-1 text-center">
                <div className="text-7xl font-bold tracking-tighter">
                    {calories}
                </div>
                <div className="text-[0.70rem] uppercase text-muted-foreground">
                    kcal
                </div>
            </div>
        </div>
    )
}