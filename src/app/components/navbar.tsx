"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Mainlogo from '../images/logo_img.png';
import logoImg from '../images/default_profile_photo.jpg';
import { FaUserCircle } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
    const path = usePathname();
    const [session, setsession] = useState<boolean>(false)
    const getimage = true
    console.log(path);

    const [profileDropdownVisible, setProfileDropdownVisible] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setProfileDropdownVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleDropdownToggle = () => {
        setProfileDropdownVisible(!profileDropdownVisible);
    };

    const handlepath = (path: string) => {
        const paths = ['/accounts/sign-in', '/accounts/sign-up', '/dashboard', '/dashboard/profile'];
        return paths.includes(path);
    };

    return (
        <header className={handlepath(path) ? `hidden` : `p-4 fixed top-0 left-0 w-full border-b-2 border-solid flex h-16 items-center justify-between px-1 bg-gray-200 lg:px-5 shadow-lg z-50`}>
            <div className="flex items-center text-xl font-bold">
                <Link href="/">
                    <Image src={Mainlogo} alt="Logo" width={70} height={70} />
                </Link>
            </div>

            <div className="flex gap-4 justify-start items-center">
                <Link className="font-bold text-black hover:text-gray-600 transition-colors duration-300" href="/booking">Book here</Link>
                <p className='p-5 cursor-pointer' onClick={() => setsession(true)}>switch</p>
            </div>

            {session ? (
                <div className="flex justify-end items-center h-16 border border-l-gray-100 pl-5 relative">
                    <div onClick={handleDropdownToggle} className="cursor-pointer">
                        <Image
                            src={getimage ? logoImg : Mainlogo}
                            alt="profile"
                            width={50}
                            height={50}
                            className="rounded-full object-cover"
                        />
                    </div>

                    {profileDropdownVisible && (
                        <div ref={dropdownRef} className="absolute right-0 top-full mt-2 w-48 bg-white shadow-md rounded-md transition-transform transform duration-300 z-50">
                            <ul>
                                <li>
                                    <Link href="/dashboard" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={() => setProfileDropdownVisible(false)}>My Account</Link>
                                </li>
                                <li>
                                    <Link href="/settings" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={() => setProfileDropdownVisible(false)}>Account Settings</Link>
                                </li>
                                <li>
                                    <Link href="/logout" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={() => setProfileDropdownVisible(false)}>Log Out</Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            ) : (


                <div className="flex gap-5 justify-center items-center mr-14">
                    <Link className="font-bold text-black hover:text-gray-600 transition-colors duration-300" href="/accounts/sign-in">Signin</Link>
                    <Link className="font-bold text-black hover:text-gray-600 transition-colors duration-300 " href="/accounts/sign-up">Sign up</Link>
                </div>

            )}
        </header>
    );
};

export default Navbar;
