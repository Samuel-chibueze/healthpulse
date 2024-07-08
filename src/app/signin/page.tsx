import React from 'react';
import Image1 from '../images/signup-cover.jpeg';
import Logo from "../images/logo_img.png"
import Image from 'next/image';

import { FcGoogle } from "react-icons/fc";
import Link from 'next/link';

export default function LoginForm({ params }: any) {
    const handleLogin = () => {
        // Handle login logic here
        console.log('Login button clicked');
    };



    return (


        <div
            className="mx-auto  bg-cover md:h-[130vh] pb-30   w-full grid md:grid-cols-2 grid-cols-1 gap-5  bg-white"
        // style={{ backgroundImage: `url(${Image1.src})` }}
        >
            <div className='flex flex-col justify-center items-center '>
                <form className="lg:py-10 lg:px-8  space-y-3 relative flex flex-col justify-center items-center bg-white  rounded-md w-[75vw] md:w-[30vw] h-[120vh] md:h-[100vh] ">
                    <div>
                        <Link href="/">
                            <Image
                                width={500}
                                height={100}
                                src={Logo}
                                alt={"image"}
                                className="w-full h-48 object-cover"
                            />
                        </Link>

                    </div>
                    <h1 className="lg:text-2xl text-2xl font-semibold mb-6">Sign in</h1>
                    <p className='text-xl pt-4 pb-10'>Hey friend! Welcome back</p>
                    <div className="w-full">
                        <label htmlFor="email" className="mb-1 block font-bold">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            className="h-12 mt-2 px-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-200"
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="password" className="mb-1 block font-bold">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="h-12 mt-2 px-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-200"
                        />
                    </div>
                    <button
                        type="button"

                        className="bg-green-600 font-thin p-2.5 mt-5 rounded-md text-center text-white w-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                        Continue
                    </button>
                    <div className="uk-heading-line uk-text-center py-2"><span>Or</span></div>
                    <div className="flex items-center justify-center">
                        <div className='flex justify-center gap-3 items-center md:p-2 p-3 rounded-lg md:w-[20vw] w-[60vw]  bg-gray-100 text-black  font-thin hover:bg-gray-200'>Connect with<FcGoogle size={25} />
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center py-5'>
                        <p>No account? <Link className='text-blue-800' href={'/signup'}>create one</Link></p>
                    </div>
                </form>
            </div>
            <div className=' md:flex flex-col justify-center items-center  md:order-0 md:visible hidden' >
                <div className='md:h-[100vh] lg:h-[80vh] md:w-[43vw] h-[100vh] w-[90vw] bg-gray-100 rounded-lg shadow-lg flex flex-col justify-start items-center p-10 px-5'>
                    <h1 className='text-2xl font-bold mb-5 '>Ehealthpulse Ltd - Company Update</h1>
                    <div className='mb-5'>
                        <h2 className='text-xl font-semibold py-4'>Who We Are and What We Do</h2>
                        <p>
                            Ehealthpulse Ltd is a technological healthcare company committed to enhancing the quality of healthcare through innovative technology. We offer a user-friendly platform that streamlines the process of booking online consultations, home medical laboratory tests, medical prescriptions, and health educational services.
                        </p>
                    </div>
                    <div className='mb-5'>
                        <h2 className='text-xl font-semibold py-3'>Vision</h2>
                        <p>
                            Our vision is to create a connected healthcare ecosystem that empowers individuals to achieve optimal health and well-being, making high-quality healthcare accessible and convenient for all.
                        </p>
                    </div>




                </div>


            </div>
            {/* 

        <div className="grid grid-cols-3 gap-4">
            <div className="bg-red-500 p-4 text-white order-2">Item 1</div>
            <div className="bg-green-500 p-4 text-white order-1">Item 2</div>
            <div className="bg-blue-500 p-4 text-white order-3">Item 3</div>
            <div className="bg-yellow-500 p-4 text-white order-0">Item 4</div>
        </div> */}



        </div>
    );
}
