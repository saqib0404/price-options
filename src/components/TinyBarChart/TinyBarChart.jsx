import React from 'react'
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, XAxis, YAxis } from 'recharts'

const TinyBarChart = () => {
    const data = [
        {
            name: 'Ayesha',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Bilal',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Kiran',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Danish',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Zoya',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Hamza',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Sara',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];
    return (
        <div>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar dataKey="uv" fill="#8884d8" label={{ position: 'top' }}>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={`#CBC3E3`} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default TinyBarChart