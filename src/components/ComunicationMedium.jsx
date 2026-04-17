"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';



const ComunicationMedium = ({ name }) => {
    const router = useRouter();

    const handleClick = (type) => {
        const newItem = {
            id: Date.now(),
            type,
            name,
            date: new Date().toLocaleDateString()
        };

        const existing = JSON.parse(localStorage.getItem("timeline")) || [];

        existing.push(newItem);

        localStorage.setItem("timeline", JSON.stringify(existing));

        router.push("/timeLinePage");
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 pt-2'>

            <div
                onClick={() => {
                    handleClick("call");
                    toast.success("Called successfully");
                }}
                className="card bg-base-100 shadow text-center p-4 cursor-pointer hover:bg-base-300"
            >
                <Image src="/assets/call.png" alt="call" width={30} height={30} className='mx-auto' />
                <p className="mt-2">Call</p>
            </div>
            <div onClick={() => {handleClick("text"); toast.success("Text sent successfully");}}
                className="card bg-base-100 shadow text-center p-4 cursor-pointer  hover:bg-base-300">
                <Image src="/assets/text.png" alt="text" width={30} height={30} className='mx-auto'/>
                <p className="mt-2">Text</p>
            </div>

            <div onClick={() => {handleClick("video"); toast.success("Video successfully");}}
                className="card bg-base-100 shadow text-center p-4 cursor-pointer  hover:bg-base-300">
                <Image src="/assets/video.png" alt="video" width={30} height={30} className='mx-auto'/>
                <p className="mt-2">Video</p>
            </div>

        </div>
    );
};

export default ComunicationMedium;