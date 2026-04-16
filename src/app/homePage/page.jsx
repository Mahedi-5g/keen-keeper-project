import React from 'react';
import contacts from "@/data/contacts.json";
import Image from 'next/image';
import Link from 'next/link';


const HomePage = () => {
    return (
        <div className='px-5 md:px-16 lg:px-32 py-8 md:py-12 lg:py-16'>
            <div className='text-center'>
                <h1 className='font-bold text-4xl lg:text-5xl'>Friends to keep close in your life</h1>
                <p className='font-normal text-lg py-4'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
                    relationships that matter most.
                </p>
                <button className='text-white bg-green-700 p-2 rounded-md'>+ Add a Friend</button>
                <div className='grid grid-cols-2 lg:grid-cols-4 py-8 gap-4'>
                    <div className="card bg-base-100  shadow-sm text-center col-span-1">
                        <div className="card-body">
                            <h2 className='font-semibold text-3xl'>10</h2>
                            <p className='font-normal text-base'>Total Friends</p>
                        </div>
                    </div>
                    <div className="card bg-base-100  shadow-sm text-center col-span-1">
                        <div className="card-body">
                            <h2 className='font-semibold text-3xl'>3</h2>
                            <p className='font-normal text-base'>On Track</p>
                        </div>
                    </div>
                    <div className="card bg-base-100  shadow-sm text-center col-span-1">
                        <div className="card-body">
                            <h2 className='font-semibold text-3xl'>6</h2>
                            <p className='font-normal text-base'>Need Attention</p>
                        </div>
                    </div>
                    <div className="card bg-base-100  shadow-sm text-center col-span-1">
                        <div className="card-body">
                            <h2 className='font-semibold text-3xl'>12</h2>
                            <p className='font-normal text-base'>Interactions This Month</p>
                        </div>
                    </div>
                </div>

            </div>

            <div>
                <h1>Your Friends</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {contacts.map((c) => (
                        <Link key={c.id} href={`/homePage/${c.id}`}>
                            <div className="p-4 rounded shadow-md text-center">
                                <Image
                                    src={c.picture}
                                    alt={c.name}
                                    width={60}
                                    height={60}
                                    className="rounded-full mx-auto h-16 w-16"
                                />
                                <h2 className="font-bold">{c.name}</h2>
                                <p>{c.days_since_contact}d ago</p>
                                <div className='flex gap-2 text-center py-2 mx-auto'>
                                    <p className='badge badge-accent'>{c.tags[0]}</p>
                                    <p className=' bg-teal-400 rounded-lg'>{c.tags[1]}</p>
                                </div>

                                <p
                                    className={`
                                         ${c.status === "overdue" ? "badge badge-error" : ""}
                                         ${c.status === "almost due" ? "badge badge-info" : ""}
                                         ${c.status === "on-track" ? "badge badge-warning" : ""}
                                         `}
                                >
                                    {c.status}
                                </p>


                            </div>
                        </Link>


                    ))}
                </div>
            </div>


        </div>
    );
};

export default HomePage;