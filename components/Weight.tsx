import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Record } from '@prisma/client';

type WeightProps = {
    weightRecord: Record[]
}

export const Weight = ({weightRecord}: WeightProps) => {
    return (
        <div>
                <ResponsiveContainer height={400}>
                    <LineChart width={700} height={500} data={weightRecord} margin={{top: 30, right: 30, left: 30, bottom: 30}}>
                        <Legend height={36} verticalAlign="top"/>
                        <CartesianGrid strokeDasharray="3 3" fillOpacity={0.6}/>
                        <XAxis dataKey="date"/>
                        <YAxis dataKey={"value"} type={"number"} domain={["auto", "data-max"]} label={{value: "kg", angle: 360, position: 'insideLeft'}}/>
                        <Tooltip />
                        <Line name={"Weight"} type="monotone" dataKey="value" stroke="#2563eb" activeDot={{ r: 8 }} unit={"kg"} />
                    </LineChart>
                </ResponsiveContainer>
        </div>
    )
}