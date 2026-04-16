import Image from 'next/image';
import React from 'react';

const TimeLinePage = () => {
    return (
        <div className='px-5 md:px-16 lg:px-32 py-8 md:py-12 lg:py-16'>
            <h1 className='font-bold text-5xl text-gray-800'>Timeline</h1>
            <select defaultValue="Pick a color" className="select my-4">
                <option disabled={true}>Filter TimeLine</option>
                <option>Call</option>
                <option>Text</option>
                <option>Video</option>
            </select>

            <div className='w-full p-2 bg-base-200 shadow rounded-md flex gap-3'>

                <Image
                    src="/assets/call.png"
                    alt="call"
                    width={25}
                    height={25}
                />
                <div>
                    <h2 className='font-medium text-xl'>Call <span className='font-normal text-lg'>with Marcus Johnson</span></h2>
                    <p>March 17, 2026</p>
                </div>


            </div>

        </div>
    );
};

export default TimeLinePage;