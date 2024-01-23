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
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {postRecord} from "@/lib/APIService";

type ProfileTabProps = {
    weight?: DataRecord[];
    calorie?: DataRecord[];
    workout?: DataRecord[];
    userId: string;
}

export const ProfileTab = ({weight, calorie, workout, userId}: ProfileTabProps) => {
    const [weightInput, setWeightInput] = useState<string>();
    const [calorieInput, setCalorieInput] = useState<string>();
    const [workoutInput, setWorkoutInput] = useState<string>();

    const queryClient = useQueryClient();

    const {mutate, isSuccess, isPending} = useMutation({
        mutationFn: (data: any) => postRecord(data),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["contestant"]
            })
        }
    })
    const onWeightAdd = () => {
        mutate({
            type: "weight",
            value: parseFloat(weightInput as string),
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
                        <Label>Weight:</Label>
                        <Input type={"number"} placeholder={"add weight..."} onChange={(event) => setWeightInput(event.target.value)}/>
                        <DrawerClose>
                            <Button type="submit" disabled={!weightInput} onClick={onWeightAdd}>ADD</Button>
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
                            <Button>Add calories</Button>
                        </DrawerTrigger>
                        <Calorie calorieRecord={calorie}/>
                        <DataRecords records={calorie} type={"Calories"} unit={"kcal"}/>
                    </>
                )
                }
            </TabsContent>
            <TabsContent value="workout">
                {workout && (
                    <>
                        <DrawerTrigger>
                            <Button>Add workout</Button>
                        </DrawerTrigger>
                        <Workout workoutRecord={workout}/>
                        <DataRecords records={workout} type={"Workout"} unit={"amount"}/>
                    </>
                )
                }
            </TabsContent>
        </Tabs>
    )
}