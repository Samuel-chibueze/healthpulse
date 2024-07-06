"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logoImg from '../images/logo_img.png';
import { FaUserCircle } from "react-icons/fa";
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
    const path = usePathname();
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

    const handleDropdownItemClick = () => {
        if (profileDropdownVisible) {
            setProfileDropdownVisible(false);
        }
    };

    const handlepath=(path:string)=>{

        const paths = ['/signin', '/signup','/dashboard']
        if(paths.includes(path)){
            return true
        }else{
            return false
        }
    }

    return (
        <header className={handlepath(path) ? `hidden` : `flex h-16 items-center justify-between px-4 bg-yellow-200 lg:px-20 shadow-lg`}>
            <div className="flex items-center text-xl font-bold">
                <Link href="/">
                    <Image src={logoImg} alt="Logo" width={70} height={70} />
                </Link>
            </div>

            <div className="flex gap-4 justify-center items-center">
                <Link className="font-bold text-black hover:text-gray-600 transition-colors duration-300" href="/signin">Signin</Link>
                <Link className="font-bold text-black hover:text-gray-600 transition-colors duration-300" href="/signup">Sign up</Link>
                <Link className="font-bold text-black hover:text-gray-600 transition-colors duration-300" href="/dashboard">Dashboard</Link>
            </div>

            <div className="relative flex justify-center items-center h-16">
                <FaUserCircle size={24} onClick={handleDropdownToggle} className="cursor-pointer" />
                <p className="ml-2 cursor-pointer" onClick={handleDropdownToggle}>username</p>
                {profileDropdownVisible && (
                    <div ref={dropdownRef} className="absolute right-0 top-full mt-2 w-48 bg-white shadow-md rounded-md transition-transform transform duration-300">
                        <ul>
                            <li>
                                <Link href="/dashboard" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={handleDropdownItemClick}>My Account</Link>
                            </li>
                            <li>
                                <Link href="/settings" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={handleDropdownItemClick}>Account Settings</Link>
                            </li>
                            <li>
                                <Link href="/logout" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={handleDropdownItemClick}>Log Out</Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;
