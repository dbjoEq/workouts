"use client"

import {Bar, BarChart, Legend, ResponsiveContainer, YAxis} from "recharts";
import { Record } from '@prisma/client';

type WorkoutProps = {
    workoutRecord: Record[]
}

export const Workout = ({workoutRecord}: WorkoutProps) => {
    return (
        <div >
            <ResponsiveContainer height={400}>
                <BarChart height={40} width={150} data={workoutRecord}>
                    <Legend height={36} verticalAlign="top"/>
                    <YAxis dataKey="value" />
                    <Bar dataKey="value" fill="#2563eb" name={"Workouts"}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}