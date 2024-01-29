"use client"

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from "@/components/ui/drawer";
import {Button} from "@/components/ui/button";
import {Weight} from "@/components/Weight";
import {DataRecords} from "@/components/DataRecords";
import {Calorie} from "@/components/Calorie";
import {Workout} from "@/components/Workout";
import React, { useState} from "react";
import {WeightCounter} from "@/components/WeightCounter";
import {CaloriesCounter} from "@/components/CaloriesCounter";
import {useRecord} from "@/hooks/useRecord";

type ProfileTabProps = {
    userId: string;
}


export const ProfileTab = ({userId}: ProfileTabProps) => {
    const {addRecord, weightRecord, caloriesRecord, workoutRecord, lastWeight} = useRecord(userId);
    const [weightInput, setWeightInput] = useState<number>(lastWeight);
    const [calorieInput, setCalorieInput] = useState<number>(2500);
    const [isUpdatingKg, setIsUpdatingKg] = useState<boolean>(true);
    const [details, setDetails] = useState<string>("");
    const onWeightAdd = () => {
        addRecord({
            type: "weight",
            value: Number(weightInput.toFixed(1)),
            contestantId: userId,
            details,
            userId
        },
            )
    }
    const onCalorieAdd = () => {
        addRecord({
            type: "calories",
            value: calorieInput,
            contestantId: userId,
            userId
        },
            )
    }
    const onWorkoutAdd = () => {
        addRecord({
            type: "workout",
            value: 1,
            contestantId: userId,
            userId
        },
            )
    }

    const toggleUpdatingValue = () => {
        setIsUpdatingKg(!isUpdatingKg);
    }

    const onDetailsUpdate = (value: string) => {
        setDetails(value);
    }

    return (
        <Tabs defaultValue="weight">
            <TabsList>
                <TabsTrigger value="weight">Weight</TabsTrigger>
                <TabsTrigger value="calories">Calories</TabsTrigger>
                <TabsTrigger value="workout">Workout</TabsTrigger>
            </TabsList>
            <TabsContent value="weight">
                {weightRecord && (
                    <>
                        <DrawerTrigger>
                            <Button>Add Weight</Button>
                        </DrawerTrigger>
                        <Weight weightRecord={weightRecord}/>
                        <DataRecords records={weightRecord} type={"Weight"} unit={"kg"}/>
                    </>
                )
                }
                <DrawerContent>
                    <DrawerHeader className="text-left">
                        <DrawerTitle>Add weight</DrawerTitle>
                        <DrawerDescription>
                            Add weight to your record. Click add when you're done.
                        </DrawerDescription>

                    </DrawerHeader>
                    <DrawerFooter className="pt-2">
                        <WeightCounter setTextDetails={(w: string) => onDetailsUpdate(w)} textDetails={details} valueInterval={isUpdatingKg} updateValueInterval={toggleUpdatingValue} weight={Number(weightInput.toFixed(1))} reduceWeight={() => setWeightInput((w) => (w-(isUpdatingKg ? 1 : 0.1)))} increaseWeight={() => setWeightInput((w) => w+(isUpdatingKg ? 1 : 0.1))}/>
                        <DrawerClose>
                            <Button className={"w-full"} type="submit" disabled={!weightInput} onClick={onWeightAdd}>ADD</Button>
                        </DrawerClose>
                        <DrawerClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </TabsContent>
            <TabsContent value="calories">
                {caloriesRecord && (
                    <>
                        <DrawerTrigger>
                            <Button>Add Calories</Button>
                        </DrawerTrigger>
                        <Calorie calorieRecord={caloriesRecord} />
                        <DataRecords records={caloriesRecord} type={"calories"} unit={"kcal"}/>
                    </>
                )
                }
                <DrawerContent>
                    <DrawerHeader className="text-left">
                        <DrawerTitle>Add Calories</DrawerTitle>
                        <DrawerDescription>
                            Add calories to your record. Click add when you're done.
                        </DrawerDescription>

                    </DrawerHeader>
                    <DrawerFooter className="pt-2">
                        <CaloriesCounter calories={calorieInput} setCalories={setCalorieInput}/>
                        <DrawerClose>
                            <Button className={"w-full"} type="submit" disabled={!calorieInput} onClick={onCalorieAdd}>ADD</Button>
                        </DrawerClose>
                        <DrawerClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </TabsContent>
            <TabsContent value="workout">
                {workoutRecord && (
                    <>
                        <DrawerTrigger>
                            <Button>Add Workout</Button>
                        </DrawerTrigger>
                        <Workout workoutRecord={workoutRecord}/>
                        <DataRecords records={workoutRecord} type={"Workout"} unit={"amount"}/>
                    </>
                )
                }
                <DrawerContent>
                    <DrawerHeader className="text-left">
                        <DrawerTitle>Add Workout</DrawerTitle>
                        <DrawerDescription>
                            Add workout to your record. Click add when you're done.
                        </DrawerDescription>

                    </DrawerHeader>
                    <DrawerFooter className="pt-2">
                        <DrawerClose>
                            <Button className={"w-full"} type="submit" onClick={onWorkoutAdd}>ADD</Button>
                        </DrawerClose>
                        <DrawerClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </TabsContent>
        </Tabs>
    )
}