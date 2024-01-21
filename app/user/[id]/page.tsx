"use client"

import {useUser} from "@/hooks/useUser";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Weight} from "@/components/Weight";
import {Calorie} from "@/components/Calorie";
import {Separator} from "@/components/ui/separator";
import {Workout} from "@/components/Workout";
import {Button} from "@/components/ui/button";
import React, {useState} from "react";
import {
    Drawer, DrawerClose,
    DrawerContent,
    DrawerDescription, DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from "@/components/ui/drawer";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react"
import {DataRecords} from "@/components/DataRecords";

export default function ({ params }: { params: { id: string } }){
    const {user, weight, calorie, workout} = useUser(params.id);
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
    const [date, setDate] = useState<Date>();

    return (
        <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
            <div className={"py-4 px-8"}>
                <h1>{user?.name}</h1>
                <Separator className={"my-4"}/>
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
                                    Add weight to your record. Click save when you're done.
                                </DrawerDescription>

                            </DrawerHeader>
                            <DrawerFooter className="pt-2">
                                <Button type="submit">Save changes</Button>
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
            </div>

        </Drawer>
    )
}