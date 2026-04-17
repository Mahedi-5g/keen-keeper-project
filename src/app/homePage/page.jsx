
import React from 'react';
import contacts from "@/data/contacts.json";
import ContactCard from '@/components/ContractCard';


const HomePage = async() => {
    await new Promise(resolve => setTimeout(resolve, 500));
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
                <h1 className='font-medium text-2xl pb-2'>Your Friends</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {contacts.map((card) => (
                        <ContactCard
                        key={card.id} card={card}
                        />


                    ))}
                </div>
            </div>


        </div>
    );
};

export default HomePage;