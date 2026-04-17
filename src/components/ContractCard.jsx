"use client";

import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";

const ContactCard = ({ card }) => {
    return (
        <Link href={`/homePage/${card.id}`}>
            <div
                onClick={() => toast.info(`Opening ${card.name}`)}
                className="p-4 rounded shadow-md text-center cursor-pointer hover:shadow-lg transition"
            >
                <Image
                    src={card.picture}
                    alt={card.name}
                    width={60}
                    height={60}
                    className="rounded-full mx-auto h-16 w-16"
                />

                <h2 className="font-bold">{card.name}</h2>
                <p>{card.days_since_contact}d ago</p>

                <div className='flex gap-2 justify-center py-2'>
                    <p className='badge badge-accent'>{card.tags[0]}</p>
                    <p className='badge bg-teal-400'>{card.tags[1]}</p>
                </div>

                <p
                    className={`
                        ${card.status === "overdue" ? "badge badge-error" : ""}
                        ${card.status === "almost due" ? "badge badge-info" : ""}
                        ${card.status === "on-track" ? "badge badge-warning" : ""}
                    `}
                >
                    {card.status}
                </p>
            </div>
        </Link>
    );
};

export default ContactCard;