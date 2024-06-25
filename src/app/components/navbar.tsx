"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Ensure you import Image from next/image
import logoImg from '../images/logo_img.png'; // Adjust the path to where your image is located

export default function Navbar() {
  return (
    <header className="flex stick h-16 items-center justify-between px-4 bg-yellow-200 lg:px-20">
      <div className="flex items-center text-xl font-bold">
        <Link href={'/'}>

          <Image src={logoImg} alt="Logo" width={70} height={70} /> {/* Adjust width and height as needed */}

        </Link>
      </div>

      <div className='flex gap-4 justify-center items-center'>
        <Link className='font-bold text-black hover:text-gray-600' href={'/signin'}>Signin</Link>
        <Link className='font-bold text-black hover:text-gray-600' href={'/signup'}>Sign up</Link>
        <Link className='font-bold text-black hover:text-gray-600' href={'/dashboard'}>dashboard</Link>
        
      </div>
    </header>
  );
}
