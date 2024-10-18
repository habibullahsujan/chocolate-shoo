import React from 'react'
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Rectangle,
    Legend,
} from "recharts";

const data = [
    {
        month: "Jan",
        profit: 4000,
        expense: 2300,
    },
    {
        month: "Feb",
        profit: 3000,
        expense: 2600,
    },
    {
        month: "Mar",
        profit: 2000,
        expense: 2100,
    },
    {
        month: "Apr",
        profit: 5000,
        expense: 2900,
    },
    {
        month: "May",
        profit: 6000,
        expense: 2400,
    },
    {
        month: "Jun",
        profit: 4000,
        expense: 2400,
    },
    {
        month: "Jul",
        profit: 4000,
        expense: 2400,
    },
    {
        month: "Aug",
        profit: 4000,
        expense: 2400,
    },
    {
        month: "Sep",
        profit: 4000,
        expense: 2400,
    },
    {
        month: "Oct",
        profit: 4000,
        expense: 2400,
    },
    {
        month: "Nov",
        profit: 4000,
        expense: 2400,
    },
    {
        month: "Dec",
        profit: 4000,
        expense: 2400,
    },
];

const TotalRevenueBarChart = () => {
    return (
        <ResponsiveContainer width={'100%'} height={300}>
            <BarChart
                data={data}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" axisLine={false}
                    tickLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <Tooltip />
                <Bar
                    dataKey="profit"
                    fill="#475BE8"
                    strokeWidth={2}
                    activeBar={<Rectangle fill="pink" stroke="blue" />}
                    className='drop-shadow-sm'
                />
                <Bar
                    dataKey="expense"
                    fill="#E3E7FC"
                    strokeWidth={2}
                    activeBar={<Rectangle fill="pink" stroke="blue" />}
                    className='drop-shadow-sm'
                />
                <Legend
                    layout='horizontal'
                    verticalAlign='top'
                    align='right'
                    iconType='circle'
                    content={({ payload }) => (
                        <ul className='flex items-center justify-end gap-2 p-4'>
                            {payload?.map((entry, index) => (
                                <li key={`item-${index}`} className='flex items-center space-x-2 capitalize'>
                                    <span className='size-2 rounded-full mr-2 ' style={{ backgroundColor: entry.color }} />
                                    {entry.value}
                                </li>
                            ))}
                        </ul>
                    )}
                />
            </BarChart>
        </ResponsiveContainer>
    )
}

export default TotalRevenueBarChart