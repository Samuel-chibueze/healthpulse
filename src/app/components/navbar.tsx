
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


const handlepath = (path: string) => {
        // const paths = ['/accounts/sign-in', '/accounts/sign-up', '/dashboard', '/dashboard/profile'];
        // return paths.includes(path);
        return false
    };

    const session = cookies().get('session')?.value as string || false
    
    
 
    return (
        <header className={`p-4 text-[#4576BC]  top-0 left-0 right-0 w-full border-b-2 border-solid flex h-16 items-center justify-between bg-gray-200 lg:px-5  z-50`}>
            <div className="flex items-center text-xl font-bold">
                <Link href="/">
                    <Image src={Mainlogo} alt="Logo" width={70} height={70} />
                </Link>
            </div>

            <div className="flex gap-4 justify-start items-center">
                <Link className="font-bold  hover:text-gray-600 transition-colors duration-300" href="/booking">Book here</Link>
                {/* <p className='p-5 cursor-pointer' onClick={() => setsession(true)}>switch</p> */}
            </div>

           <Navbar_client session={session}/>
        </header>
    );
};

;
