import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FiFacebook } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-green-700 text-gray-300 rounded px-40 py-8  gap-3">
            <h1 className='text-5xl font-bold text-gray-50'>KeenKeeper</h1>
            <p className='text-lg font-normal text-gray-200'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most</p>
            <nav>
                <h3 className='text-base text-gray-200'>Social Links</h3>
                <div className="grid grid-flow-col gap-4 text-gray-300">
                    <a className="flex items-center justify-center h-8 w-8 rounded-full border-2">
                        <FaInstagram size={20}/>
                    </a>
                    <a className="flex items-center justify-center h-8 w-8 rounded-full border-2">
                        <FaXTwitter size={20}/>
                    </a>
                    <a className="flex items-center justify-center h-8 w-8 rounded-full border-2">
                        <FiFacebook size={20}/>
                    </a>
                </div>
            </nav>
            <aside className='flex justify-between items-center w-full'>
                <p>
                    Copyright © {new Date().getFullYear()} KeenKeeper. All rights reserved
                </p>

                <div className='flex gap-4'>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies</p>
                </div>
            </aside>
        </footer>
    );
};

export default Footer;