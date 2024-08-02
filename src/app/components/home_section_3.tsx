import React from 'react';
import image from "../images/Online-Doctor-Consult.png"
import Image from 'next/image';
import Link from 'next/link';

export default function home_section_4 (){


    return <div className='flex flex-col md:gap-[200px] gap-9 md:flex md:flex-row justify-center items-center py-10 px-6 '>
        <div className='md:order-1 '>
      <Image className='w-[400px]' src={image} alt="" />
        </div>

        <div className='md:order-1 flex gap-4 flex-col  justify-center items-center  py-10 w-[400px]'>
            <h1  className='text-2xl font-semibold w-full text-center'>Choose what's best for you</h1>
            <p className='w-[350px] text-center'>Unlike other platforms, AGF lets you pick between stocks, 
            US real estate and fixed income, according to your risk appetite.
             That way you can spread your risk and tap into different investments all in one place.</p>
             <Link href={'/signup'}>
              <button className='text-blue-500 font-bold' >Start investing now</button>
             </Link>
           
        </div>
    </div>;
}

