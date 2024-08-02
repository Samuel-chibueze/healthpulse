// NavbarClient.tsx
'use client'
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Mainlogo from '../images/logo_img.png';
import logoImg from '../images/default_profile_photo.jpg';
import { FaUserCircle } from 'react-icons/fa';
import logoutroute from '@/app/serveractions';
import { useRouter } from 'next/navigation';

// types.ts
export interface Session {
    user: {
      name: string;
      email: string;
    };
    expires: string;
  }


  export interface NavbarClientProps {
    session: string | false; // session as string or null if not available
  }
  

const NavbarClient: React.FC<NavbarClientProps> = (props) => {
   
  const router = useRouter()
  

    const sessiondata = props.session
  const getimage = true;
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

  const handlelogout =async()=>{
  
    setProfileDropdownVisible(false)
       const loguserout = await logoutroute()
       router.push('/accounts/sign-in')
  }

  return (
    <div>
      {sessiondata ? (
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
                  <div  className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={ handlelogout}>Log Out</div>
                </li>
              </ul>
            </div>
          )}
        </div>
      ) : (
        <div className="flex gap-5 justify-center items-center mr-14">
          <Link className="font-bold  hover:text-gray-600 transition-colors duration-300" href="/accounts/sign-in">Signin</Link>
          <Link className="font-bold hover:text-gray-600 transition-colors duration-300 " href="/accounts/sign-up">Sign up</Link>
        </div>
      )}
    </div>
  );
}

export default NavbarClient;
