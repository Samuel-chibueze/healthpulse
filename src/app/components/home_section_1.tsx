import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaBook } from "react-icons/fa";
import fund_wallet_image from "../images/Modern-Online-Doctor.png"
import Image from 'next/image';
import Link from 'next/link';
const home_section_1 = () => {


    return (<div className='md:flex  gap-10  bg-white bg-cover py-6'>
        <div className='md:w-[50vw] text-center   md:my-10 lg:px-[100px] flex flex-col justify-center items-center py-16'>
            <h1 className='w-[80vw] m-auto text-4xl md:text-5xl md:w-[30vw] text-[#4576BC] font-semibold pt-14 md:pt-0'>Dollar investments that help you grow</h1>
            <p className=' md:w-[30vw] my-10 w-[70vw] m-auto font-semibold text-xl'>We put your money in high quality assets that help you build wealth and achieve your financial goals.</p>
            <div className='flex justify-center  h-[120px] gap-10 md:w-[30vw] w-[80vw] m-auto'>
                <button className='border px-2 border-[#4576BC] rounded-xl mt-10 md:w-[15vw] h-[50px] flex justify-center items-center gap-2 bg-gray-200' >
                    <div className=' text-2xl text-[#4576BC]'>
                        <FaBook />
                    </div>
                    Start Booking Now
                </button>


                <Link href={'/accounts/sign-up'}>
                    <button className='bg-[#4576BC] font-bold text-white rounded-md mt-10 w-[25vw] md:w-[10vw] h-[50px]'>sign up → </button>
                </Link>


            </div>

        </div>


        <div className=' px-8'>
            <Image src={fund_wallet_image} height={100} width={500} alt="" />
        </div>





    </div>)
}


export default home_section_1;