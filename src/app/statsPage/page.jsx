"use client";

import React, { useEffect, useState } from 'react';
import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts';

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const StatsPage = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("timeline")) || [];

        const count = { call: 0, text: 0, video: 0 };

        stored.forEach(item => {
            if (item.type === "call") count.call++;
            if (item.type === "text") count.text++;
            if (item.type === "video") count.video++;
        });

        const chartData = [
            { name: "Call", value: count.call },
            { name: "Text", value: count.text },
            { name: "Video", value: count.video },
        ];

        setData(chartData);

    }, []);

    return (
        <div className='px-5 md:px-16 lg:px-32 py-8 md:py-12 lg:py-16'>
            <h1 className='font-bold text-5xl mb-6'>Friendship Analytics</h1>

            <div className='p-5 flex flex-col items-center bg-base-100 shadow rounded-lg'>

                <p className='w-full text-start text-lg font-semibold mb-4'>
                    By Interaction Type
                </p>

                <PieChart width={300} height={300}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={70}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={index} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>

                    <Tooltip />
                    <Legend />
                </PieChart>
            </div>
        </div>
    );
};

export default StatsPage;