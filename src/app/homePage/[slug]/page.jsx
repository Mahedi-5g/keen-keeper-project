import contacts from "@/data/contacts.json";
import Image from "next/image";
import { AiTwotoneDelete } from "react-icons/ai";
import { BiAlarmSnooze, BiPhoneCall } from "react-icons/bi";
import { LuFolderArchive } from "react-icons/lu";
import { MdOutlineTextsms } from "react-icons/md";
import { PiVideoCameraBold } from "react-icons/pi";

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
        <div className='px-32 py-10 grid grid-cols-12 gap-6'>

            <div className='col-span-4 space-y-4'>

                <div className="card bg-base-100 shadow p-6 text-center">

                    <Image
                        src={contact.picture}
                        alt={contact.name}
                        width={64}
                        height={64}
                        className="rounded-full mx-auto h-16 w-16"
                    />

                    <h2 className='font-bold text-lg mt-3'>
                        {contact.name}
                    </h2>

                    <p className="text-sm text-gray-500">
                        {contact.email}
                    </p>

                    <div className="flex gap-4 mx-auto">
                        <div className={`${statusStyle[contact.status]} mt-2`}>
                            {contact.status}
                        </div>

                        <div className='badge badge-outline mt-2'>
                            {contact.tags[0]}
                        </div>
                    </div>

                    <p className='italic text-sm mt-2'>
                        {contact.bio}
                    </p>
                </div>

                <button className='btn w-full'><BiAlarmSnooze />Snooze 2 Weeks</button>
                <button className='btn w-full'><LuFolderArchive /> Archive</button>
                <button className='btn w-full btn-error'><AiTwotoneDelete /> Delete</button>
            </div>

           
            <div className='col-span-8 space-y-6'>

                <div className='grid grid-cols-3 gap-4 '>
                    <div className="card bg-base-100 shadow text-center p-6">
                        <h2 className='text-3xl font-bold'>
                            {contact.days_since_contact}
                        </h2>
                        <p>Days Since Contact</p>
                    </div>

                    <div className="card bg-base-100 shadow text-center p-6">
                        <h2 className='text-3xl font-bold'>
                            {contact.goal}
                        </h2>
                        <p>Goal (Days)</p>
                    </div>

                    <div className="card bg-base-100 shadow text-center p-6">
                        <h2 className='text-xl font-bold'>
                            {contact.next_due_date}
                        </h2>
                        <p>Next Due</p>
                    </div>
                </div>

                <div className="card bg-base-100 shadow p-7">
                    <div className="flex justify-between">
                        <h2 className='font-semibold text-lg'>Relationship Goal</h2>
                        <button className="btn">Edit</button>
                    </div>
                    <p>
                        Connect every <span className='font-bold'>
                            {contact.goal} days
                        </span>
                    </p>
                </div>

                <div className="bg-base-200 shadow p-4">
                    <h3>Quick Check-In</h3>
                    <div className='grid grid-cols-3 gap-4 pt-1'>
                    <div className="card bg-base-100 shadow text-center p-4 flex flex-col items-center justify-center">
                        <h2 className='text-3xl font-bold'>
                            <BiPhoneCall />
                        </h2>
                        <p>call</p>
                    </div>

                    <div className="card bg-base-100 shadow text-center p-4 flex flex-col items-center justify-center">
                        <h2 className='text-3xl font-bold'>
                           <MdOutlineTextsms />
                        </h2>
                        <p>Text</p>
                    </div>

                    <div className="card bg-base-100 shadow text-center flex flex-col items-center justify-center p-4">
                        <h2 className='text-3xl font-bold'>
                           <PiVideoCameraBold />
                        </h2>
                        <p>Video</p>
                    </div>
                </div>


                </div>

            </div>
        </div>
    );
};

export default ContactDetails;