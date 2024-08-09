import Signupform from "@/app/components/signupform";
import Link from "next/link";
import Image from 'next/image';
import Logo from '@/app/images/logo_img.png'
import BackgroundImage1 from '@/app/images/Online-Doctor-Consultations.png'





export default function signupForm({ params }: any) {



    return (


        <div
            className="mx-auto  bg-cover h-[160vh] md:h-[170vh]  w-full grid md:grid-cols-2 grid-cols-1 gap-5  bg-white ">
        {/* style={{ backgroundImage: `url(${Image1.src})` }} */}
            <div className='flex flex-col justify-center items-center '>
            
                <Signupform />
            </div>
            <div className=' md:flex flex-col justify-center items-center  md:order-0 md:visible hidden'>
                <div className='md:h-[100vh] lg:h-[80vh] md:w-[43vw] h-[100vh] w-[90vw] bg-gray-100 rounded-lg shadow-lg flex flex-col justify-start items-center p-10 px-5' style={{
                    backgroundImage: `url(${BackgroundImage1.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  
                }}>
                    {/* <h1 className='text-2xl font-bold mb-5 '>Ehealthpulse Ltd - Company Update</h1>
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
                    </div> */}




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
