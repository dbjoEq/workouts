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
import React, {useState} from "react";
import {DataRecord} from "@/lib/mockData";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {postRecord} from "@/lib/APIService";
import {toast} from "sonner";
import {WeightCounter} from "@/components/WeightCounter";
import {CaloriesCounter} from "@/components/CaloriesCounter";

type ProfileTabProps = {
    weight?: DataRecord[];
    calorie?: DataRecord[];
    workout?: DataRecord[];
    userId: string;
}


export const ProfileTab = ({weight, calorie, workout, userId}: ProfileTabProps) => {
    const [weightInput, setWeightInput] = useState<number>(90);
    const [calorieInput, setCalorieInput] = useState<number>(2500);

    const queryClient = useQueryClient();

    const {mutate, isSuccess, isPending} = useMutation({
        mutationFn: (data: any) => postRecord(data),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["contestant"]
            });
            toast("Record Updated!")
        }
    })

    const onWeightAdd = () => {
        mutate({
            type: "weight",
            value: weightInput,
            contestantId: userId,
            userId
        },
            )
    }
    const onCalorieAdd = () => {
        mutate({
            type: "calories",
            value: calorieInput,
            contestantId: userId,
            userId
        },
            )
    }
    const onWorkoutAdd = () => {
        mutate({
            type: "workout",
            value: 1,
            contestantId: userId,
            userId
        },
            )
    }
    return (
        <Tabs defaultValue="weight">
            <TabsList>
                <TabsTrigger value="weight">Weight</TabsTrigger>
                <TabsTrigger value="calories">Calories</TabsTrigger>
                <TabsTrigger value="workout">Workout</TabsTrigger>
            </TabsList>
            <TabsContent value="weight">
                {weight && (
                    <>
                        <DrawerTrigger>
                            <Button>Add Weight</Button>
                        </DrawerTrigger>
                        <Weight weightRecord={weight}/>
                        <DataRecords records={weight} type={"Weight"} unit={"kg"}/>
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
                        <WeightCounter  weight={Number(weightInput?.toFixed(1))} reduceWeight={() => setWeightInput((w) => (w-0.1))} increaseWeight={() => setWeightInput((w) => w+0.1)}/>
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
                {calorie && (
                    <>
                        <DrawerTrigger>
                            <Button>Add Calories</Button>
                        </DrawerTrigger>
                        <Calorie calorieRecord={calorie}/>
                        <DataRecords records={calorie} type={"calories"} unit={"kcal"}/>
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
                {workout && (
                    <>
                        <DrawerTrigger>
                            <Button>Add Workout</Button>
                        </DrawerTrigger>
                        <Workout workoutRecord={workout}/>
                        <DataRecords records={workout} type={"Workout"} unit={"amount"}/>
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