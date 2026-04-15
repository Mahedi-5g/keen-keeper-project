import React from 'react';
import contacts from "@/data/contacts.json";
import Image from 'next/image';

const HomePage = () => {
    return (
        <div className='px-44 py-16'>
            <div className='text-center'>
                <h1 className='font-bold text-5xl'>Friends to keep close in your life</h1>
                <p className='font-normal text-lg py-4'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
                    relationships that matter most.
                </p>
                <button className='text-white bg-green-700 p-2 rounded-sm'>+ Add a Friend</button>
                <div className='grid grid-cols-4 py-8'>
                    <div className="card bg-base-100 w-48 shadow-sm text-center col-span-1">
                        <div className="card-body">
                            <h2 className='font-semibold text-3xl'>10</h2>
                            <p className='font-normal text-base'>Total Friends</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-48 shadow-sm text-center col-span-1">
                        <div className="card-body">
                            <h2 className='font-semibold text-3xl'>3</h2>
                            <p className='font-normal text-base'>On Track</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-48 shadow-sm text-center col-span-1">
                        <div className="card-body">
                            <h2 className='font-semibold text-3xl'>6</h2>
                            <p className='font-normal text-base'>Need Attention</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-48 shadow-sm text-center col-span-1">
                        <div className="card-body">
                            <h2 className='font-semibold text-3xl'>12</h2>
                            <p className='font-normal text-base'>Interactions This Month</p>
                        </div>
                    </div>
                </div>

            </div>

            <div>
                <h1>Your Friends</h1>
                <div className="grid grid-cols-4 gap-4">
                    {contacts.map((c) => (
                        <div key={c.id} className="p-4 border rounded items-center text-center">
                            <h2 className="font-bold">{c.name}</h2>
                            <p>{c.email}</p>
                            <Image
                                src={c.picture}
                                alt={c.name}
                                width={100}
                                height={100}
                                className="rounded-full"
                            />
                        </div>
                    ))}
                </div>
            </div>


        </div>
    );
};

export default HomePage;