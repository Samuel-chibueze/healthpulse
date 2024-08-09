'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Mainlogo from '@/app/images/logo_img.png';
import Image from 'next/image';
import { FaUserCircle, FaBars, FaTimes, FaCog, FaSignOutAlt, FaUser } from 'react-icons/fa';
import logoutroute from '../serveractions';

export interface NavbarClientProps {
  session: string | false;
}

export default function NavbarClient({ session }: NavbarClientProps) {
  const router = useRouter();
  const [profileDropdownVisible, setProfileDropdownVisible] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setProfileDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDropdownToggle = () => {
    setProfileDropdownVisible((prevVisible) => !prevVisible);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleLogout = async () => {
    setProfileDropdownVisible(false);
    const logout = await logoutroute();
    if (logout) {
      router.push('/accounts/sign-in');
    }
  };

  return (
    <div className="p-4 text-[#4576BC] top-0 left-0 right-0 w-full border-b-2 border-solid flex h-16 items-center justify-between bg-gray-200 lg:px-5 z-50">
      <div className="flex items-center text-xl font-bold">
        <Link href="/">
          <Image src={Mainlogo} alt="Logo" width={70} height={70} />
        </Link>
      </div>

      <div className="lg:flex gap-4 justify-start items-center lg:visible hidden">
        <Link className="font-bold hover:text-gray-600 transition-colors duration-300" href="/booking">Book here</Link>
      </div>

      {!session && (
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-2xl focus:outline-none">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      )}

      {session ? (
        <div className="flex justify-end items-center h-16 relative">
          <FaUserCircle
            onClick={handleDropdownToggle}
            className="text-4xl cursor-pointer"
          />

          {profileDropdownVisible && (
            <div ref={dropdownRef} className="absolute right-0 top-full mt-2 w-48 bg-white shadow-md rounded-md transition-transform transform duration-300 z-50">
              <ul>
                <li>
                  <Link href="/dashboard" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center" onClick={() => setProfileDropdownVisible(false)}>
                    <FaUser className="mr-2" /> My Account
                  </Link>
                </li>
                <li>
                  <Link href="/settings" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center" onClick={() => setProfileDropdownVisible(false)}>
                    <FaCog className="mr-2" /> Account Settings
                  </Link>
                </li>
                <li>
                  <div className="block px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center cursor-pointer" onClick={handleLogout}>
                    <FaSignOutAlt className="mr-2" /> Log Out
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
      ) : (
        <div className="lg:flex gap-5 justify-center items-center mr-14 lg:visible hidden">
          <Link className="font-bold hover:text-gray-600 transition-colors duration-300" href="/accounts/sign-in">Sign in</Link>
          <Link className="font-bold hover:text-gray-600 transition-colors duration-300" href="/accounts/sign-up">Sign up</Link>
        </div>
      )}

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-gray-200 z-40 flex flex-col items-center">
          <Link className="font-bold hover:text-gray-600 transition-colors duration-300 py-2" href="/booking" onClick={toggleMobileMenu}>Book here</Link>
          {session ? (
            <div className="flex flex-col items-center">
              <Link href="/dashboard" className="font-bold hover:text-gray-600 transition-colors duration-300 py-2" onClick={toggleMobileMenu}>My Account</Link>
              <Link href="/settings" className="font-bold hover:text-gray-600 transition-colors duration-300 py-2" onClick={toggleMobileMenu}>Account Settings</Link>
              <div className="font-bold hover:text-gray-600 transition-colors duration-300 py-2 cursor-pointer" onClick={() => { handleLogout(); toggleMobileMenu(); }}>Log Out</div>
            </div>
          ) : (
            <>
              <Link className="font-bold hover:text-gray-600 transition-colors duration-300 py-2" href="/accounts/sign-in" onClick={toggleMobileMenu}>Sign in</Link>
              <Link className="font-bold hover:text-gray-600 transition-colors duration-300 py-2" href="/accounts/sign-up" onClick={toggleMobileMenu}>Sign up</Link>
            </>
          )}
        </div>
      )}
    </div>
  );
}
