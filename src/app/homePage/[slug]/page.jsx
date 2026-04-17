import ComunicationMedium from "@/components/ComunicationMedium";
import contacts from "@/data/contacts.json";
import Image from "next/image";


import { AiTwotoneDelete } from "react-icons/ai";
import { BiAlarmSnooze } from "react-icons/bi";
import { LuFolderArchive } from "react-icons/lu";


const ContactDetails = async ({ params }) => {

    const { slug } = await params;

    const contact = contacts.find(
        (c) => c.id === Number(slug)
    );

    const statusStyle = {
        "overdue": "badge badge-error",
        "almost due": "badge badge-info",
        "on-track": "badge badge-success",
    };

    if (!contact) {
        return <p className="text-center mt-10">Contact not found</p>;
    }

    return (
        <div className='px-4 py-6 md:px-16 md:py-12 lg:px-32 lg:py-16 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6'>

    
            <div className='col-span-12 md:col-span-6 lg:col-span-4 space-y-4'>
                <div className="card bg-base-100 shadow p-6 text-center">
                    <Image
                        src={contact.picture}
                        alt={contact.name}
                        width={64}
                        height={64}
                        className="rounded-full mx-auto h-16 w-16"
                    />
                    <h2 className='font-bold text-lg mt-3'>{contact.name}</h2>
                    <p className="text-sm text-gray-500">{contact.email}</p>
                    <div className="flex flex-wrap gap-2 justify-center mt-2">
                        <div className={`${statusStyle[contact.status]}`}>{contact.status}</div>
                        <div className='badge badge-outline'>{contact.tags[0]}</div>
                    </div>
                    <p className='italic text-sm mt-2'>{contact.bio}</p>
                </div>

                <button className='btn w-full'><BiAlarmSnooze /> Snooze 2 Weeks</button>
                <button className='btn w-full'><LuFolderArchive /> Archive</button>
                <button className='btn w-full btn-error'><AiTwotoneDelete /> Delete</button>
            </div>

    
            <div className='col-span-12 md:col-span-6 lg:col-span-8 space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    <div className="card bg-base-100 shadow text-center p-6">
                        <h2 className='text-3xl font-bold'>{contact.days_since_contact}</h2>
                        <p>Days Since Contact</p>
                    </div>
                    <div className="card bg-base-100 shadow text-center p-6">
                        <h2 className='text-3xl font-bold'>{contact.goal}</h2>
                        <p>Goal (Days)</p>
                    </div>
                    <div className="card bg-base-100 shadow text-center p-6">
                        <h2 className='text-xl font-bold'>{contact.next_due_date}</h2>
                        <p>Next Due</p>
                    </div>
                </div>

                <div className="card bg-base-100 shadow p-7">
                    <div className="flex justify-between items-center">
                        <h2 className='font-semibold text-lg'>Relationship Goal</h2>
                        <button className="btn btn-sm">Edit</button>
                    </div>
                    <p>Connect every <span className='font-bold'>{contact.goal} days</span></p>
                </div>

                <div className="bg-base-200 shadow p-4">
                    <h3 className="font-semibold">Quick Check-In</h3>
                    <ComunicationMedium name={contact.name}/>
                </div>
            </div>
        </div>

    );
};

export default ContactDetails;