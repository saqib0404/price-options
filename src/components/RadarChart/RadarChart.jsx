import React, { PureComponent } from 'react';
import { Radar, RadarChart as RChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';


const RadarChart = () => {
    const data = [
        {
            subject: 'Bathroom',
            A: 120,
            B: 110,
            fullMark: 150,
        },
        {
            subject: 'Restroom',
            A: 98,
            B: 130,
            fullMark: 150,
        },
        {
            subject: 'Looby',
            A: 86,
            B: 130,
            fullMark: 150,
        },
        {
            subject: 'Counter',
            A: 99,
            B: 100,
            fullMark: 150,
        },
        {
            subject: 'Show',
            A: 85,
            B: 90,
            fullMark: 150,
        },
        {
            subject: 'Practice',
            A: 65,
            B: 85,
            fullMark: 150,
        },
    ];
    return (
        <ResponsiveContainer width="100%" height="100%">
            <RChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            </RChart>
        </ResponsiveContainer>
    )
}

export default RadarChart