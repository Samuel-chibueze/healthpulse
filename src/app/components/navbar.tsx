
import Link from 'next/link';
import Image from 'next/image';
import Mainlogo from '../images/logo_img.png';
import logoImg from '../images/default_profile_photo.jpg';
import { FaUserCircle } from 'react-icons/fa';
import Navbar_client from './navbar_client';
// import { getSession } from '../lib'
import { headers } from 'next/headers';
import { cookies } from 'next/headers';

export default function Navbar() {



    const session = cookies().get('session')?.value as string || false

    return (
        <header className={`p-4 text-[#4576BC]  top-0 left-0 right-0 w-full border-b-2 border-solid flex h-16 items-center justify-between bg-gray-200 lg:px-5  z-50`}>
           <Navbar_client session={session}/>
        </header>
    )
}