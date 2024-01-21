import {useUser} from "@/hooks/useUser";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Weight} from "@/components/Weight";
import {Calorie} from "@/components/Calorie";
import {Separator} from "@/components/ui/separator";
import {Workout} from "@/components/Workout";
import {Button} from "@/components/ui/button";
import React from "react";

export default function ({ params }: { params: { id: string } }){
    const {user, weight, calorie, workout} = useUser(params.id)
    return (
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
                    {weight && <Weight weightRecord={weight}/>}
                    <Button>Add Weight</Button>
                </TabsContent>
                <TabsContent value="calories">
                    {calorie && <Calorie calorieRecord={calorie}/>}
                    <Button>Add Calories</Button>
                </TabsContent>
                <TabsContent value="workout">
                    {workout && <Workout workoutRecord={workout}/>}
                    <Button>Add Workout</Button>
                </TabsContent>
            </Tabs>
        </div>
    )
}