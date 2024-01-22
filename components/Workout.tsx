"use client"

import {Bar, BarChart, Legend, ResponsiveContainer, YAxis} from "recharts";
import {DataRecord} from "@/lib/mockData";

type WorkoutProps = {
    workoutRecord: DataRecord[]
}

export const Workout = ({workoutRecord}: WorkoutProps) => {
    return (
        <div >
            <ResponsiveContainer height={400}>
                <BarChart height={40} width={150} data={workoutRecord}>
                    <Legend height={36} verticalAlign="top"/>
                    <YAxis dataKey="value" />
                    <Bar dataKey="value" fill="#7c3aed" name={"Workouts"}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}