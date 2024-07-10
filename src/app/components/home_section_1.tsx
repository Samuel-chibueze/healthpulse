import React from 'react';
import { FcGoogle } from "react-icons/fc";
import fund_wallet_image from "../images/wallet_1.jpeg"
import Image from 'next/image';

const home_section_1 = () => {


    return (<div className='md:flex  gap-10  bg-white'>
        <div className='md:w-[50vw] text-center  md:my-10 lg:px-[100px] flex flex-col justify-center items-center'>
            <h1 className='w-[80vw] m-auto text-4xl md:text-5xl md:w-[30vw] text-[#A68DAD] font-semibold pt-14 md:pt-0'>Dollar investments that help you grow</h1>
            <p className=' md:w-[30vw] my-10 w-[70vw] m-auto font-semibold text-xl'>We put your money in high quality assets that help you build wealth and achieve your financial goals.</p>
            <div className='flex justify-center  h-[120px] gap-10 md:w-[30vw] w-[80vw] m-auto'>
                <button className='border px-2 border-black rounded-xl mt-10 md:w-[15vw] h-[50px] flex justify-center items-center gap-2' >    
                                      <div className=' text-2xl'>
                    <FcGoogle />
                </div>
                    Download App
                </button>

                <button className='bg-black font-bold text-white rounded-md mt-10 w-[25vw] md:w-[10vw] h-[50px]'>
                    sign up →
                </button>
            </div>

        </div>


        <div className=' px-8'>
            <Image src={fund_wallet_image} height={100} width={500} alt="" />
        </div>





    </div>)
}


export default home_section_1;