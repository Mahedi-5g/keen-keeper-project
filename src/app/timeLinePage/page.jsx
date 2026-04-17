"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const TimeLinePage = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("timeline")) || [];
        setData(stored);
    }, []);
    const handleRemove = (remove) => {
        const updatedData = data.filter((_, index) => index !== remove);
        setData(updatedData);
        localStorage.setItem("timeline", JSON.stringify(updatedData));
    };
    const iconMap = {
        call: "/assets/call.png",
        text: "/assets/text.png",
        video: "/assets/video.png"
    };

    return (
        <div className='px-5 md:px-16 lg:px-32 py-8 md:py-12 lg:py-16'>
            <h1 className='font-bold text-5xl text-gray-800'>Timeline</h1>

            <select defaultValue="Pick a color" className="select my-3">
                <option disabled={true}>Filter Timeline</option>
                <option>Call</option>
                <option>Text</option>
                <option>Video</option>
            </select>

            <div className="space-y-4 mt-6">
                {data.map((item, index) => (
                    <div key={index} className='w-full p-2 bg-base-200 shadow rounded-md flex gap-3'>

                        <Image
                            src={iconMap[item.type]}
                            alt={item.type}
                            width={25}
                            height={25}
                            className='h-8 w-8 mt-2'
                        />

                        <div>
                            <h2 className='font-medium text-xl capitalize'>
                                {item.type} <span className='font-normal text-lg'>with {item.name}</span>
                            </h2>
                            <p>{item.date}</p>
                        </div>
                        <button onClick={() => handleRemove(index)} className="btn btn-sm ml-auto mt-2">Remove</button>

                    </div>
                ))}
            </div>

        </div>
    );
};

export default TimeLinePage;