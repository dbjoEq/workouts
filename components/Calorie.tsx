"use client"

import {DataRecord} from "@/lib/mockData";
import {
    BarChart,
    Bar,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
    ReferenceLine
} from 'recharts';
type CalorieProps = {
    calorieRecord: DataRecord[]
}

export const Calorie = ({calorieRecord}: CalorieProps) => {
    return (
        <div>
        <ResponsiveContainer height={400}>
            <BarChart height={40} width={150} data={calorieRecord}>
                <Legend height={36} verticalAlign="top"/>
                <ReferenceLine y={2500} label="Target" stroke="#7c3aed" strokeDasharray="3 3" />
                <YAxis dataKey="value" />
                <Tooltip />
                <Bar dataKey="value" fill="#7c3aed" name={"Calories"} unit={"kcal"}/>
            </BarChart>
        </ResponsiveContainer>
        </div>
    )
}