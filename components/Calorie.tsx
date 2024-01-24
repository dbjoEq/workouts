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
    calorieRecord: DataRecord[];
    calorieTarget?: number;
}

export const Calorie = ({calorieRecord, calorieTarget}: CalorieProps) => {
    return (
        <div>
        <ResponsiveContainer height={400}>
            <BarChart height={40} width={150} data={calorieRecord}>
                <Legend height={36} verticalAlign="top"/>
                <ReferenceLine y={calorieTarget ?? 2500} label="Target" stroke="#2563eb" strokeDasharray="3 3" />
                <YAxis dataKey="value" />
                <Tooltip />
                <Bar dataKey="value" fill="#2563eb" name={"Calories"} unit={"kcal"}/>
            </BarChart>
        </ResponsiveContainer>
        </div>
    )
}