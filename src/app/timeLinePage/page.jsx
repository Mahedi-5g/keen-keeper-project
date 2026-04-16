// import Image from 'next/image';
// import React from 'react';

import Image from "next/image";

// const TimeLinePage = () => {
//     return (
//         <div className='px-32 py-16 '>
//             <h1 className='font-bold text-5xl text-gray-800'>Timeline</h1>
//             <select defaultValue="Pick a color" className="select my-4">
//                 <option disabled={true}>Filter TimeLine</option>
//                 <option>Call</option>
//                 <option>Text</option>
//                 <option>Video</option>
//             </select>

//             <div className='w-full p-2 bg-base-200 shadow rounded-md flex gap-3'>

//                 <Image
//                     src="/assets/call.png"
//                     alt="call"
//                     width={25}
//                     height={25}
//                 />
//                 <div>
//                     <h2 className='font-medium text-xl'>Call <span className='font-normal text-lg'>with Marcus Johnson</span></h2>
//                     <p>March 17, 2026</p>
//                 </div>


//             </div>

//         </div>
//     );
// };

// export default TimeLinePage;






const TimeLinePage = async ({ searchParams }) => {

    const params = await searchParams; 
    const { type, name } = params || {};

    const iconMap = {
        call: "/assets/call.png",
        text: "/assets/text.png",
        video: "/assets/video.png"
    };

    const today = new Date().toLocaleDateString();

    return (
        <div className='px-32 py-16'>
            <h1 className='font-bold text-5xl text-gray-800'>Timeline</h1>

            {type && (
                <div className='w-full p-2 bg-base-200 shadow rounded-md flex gap-3 mt-5'>

                    <Image
                        src={iconMap[type]}
                        alt={type}
                        width={25}
                        height={25}
                    />

                    <div>
                        <h2 className='font-medium text-xl capitalize'>
                            {type} <span className='font-normal text-lg'>with {name}</span>
                        </h2>
                        <p>{today}</p>
                    </div>

                </div>
            )}
        </div>
    );
};

export default TimeLinePage;