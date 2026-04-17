"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ImStatsDots } from "react-icons/im";
import { IoHomeOutline, IoTimeOutline } from "react-icons/io5";

const Navbar = () => {
    const pathname = usePathname();

    const links = (
        <>
            <li className={`hidden md:block lg:block font-semibold ${pathname === "/homePage" || pathname === "/"
                ? "text-white bg-green-700 rounded-sm"
                : ""}`}>
                <Link href="/homePage" className="flex items-center gap-1">
                    <IoHomeOutline /> Home
                </Link>
            </li>

            <li className={`font-semibold ${pathname === "/timeLinePage" ? "text-white bg-green-700  rounded-sm" : ""}`}>
                <Link href="/timeLinePage" className="flex items-center gap-1">
                    <IoTimeOutline /> TimeLine
                </Link>
            </li>

            <li className={`font-semibold ${pathname === "/statsPage" ? "text-white bg-green-700  rounded-sm" : ""}`}>
                <Link href="/statsPage" className="flex items-center gap-1">
                    <ImStatsDots /> Stats
                </Link>
            </li>
        </>
    );

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <Link href="/homePage" className="btn btn-ghost text-3xl font-extrabold">
                    Keen <span className="font-semibold">Keeper</span>
                </Link>
            </div>

            <div className="navbar-end flex">
                <ul className="menu menu-horizontal px-1 gap-1">
                    {links}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;