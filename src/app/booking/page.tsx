import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Image1 from "../images/logo_img.png"
import BackgroundImage from '../images/find-doctor.png'
import Doctor from '@/app/images/booking-doctor.png'
import Lab from "@/app/images/booking-lab.png"


export default function BookingPage() {
  return (
    <div
      className='flex flex-col px-4 md:px-20 lg:px-32 justify-center items-center min-h-[150vh] md:h-[120vh] bg-cover bg-center'
      style={{ backgroundImage: `url(${BackgroundImage.src})` }}
    >
      <div className='w-full  flex flex-col justify-center gap-7 rounded-md py-8 items-center px-6 shadow-xl bg-white  backdrop-filter backdrop-blur-lg' >
        <h1 className='text-4xl font-bold mb-2 text-center'>Book a Session</h1>
        <p className='text-lg text-center text-blue-600 mb-4'>Choose a service below to book your appointment.</p>

        <Link href={'/doctors'}>
          <div className='rounded-md bg-gradient-to-r from-[#4576BC] via-[#4576BC] to-[#4576BC] shadow-lg h-[15vh] md:w-[40vw] w-[80vw] flex justify-between items-center px-8 transform transition-transform hover:scale-105 hover:shadow-2xl duration-300'>
            <p className='text-xl font-bold italic text-white'>Book a Doctor</p>
            <Image src={Doctor} height={90} width={100} alt='doctor image' className='rounded-full border-2 border-white shadow-md' />
          </div>
        </Link>

        <Link href={'/labs'}>
          <div className='rounded-md bg-gradient-to-r from-[#4576BC] via-[#4576BC] to-[#4576BC] shadow-lg h-[15vh] md:w-[40vw] w-[80vw] flex justify-between items-center px-8 transform transition-transform hover:scale-105 hover:shadow-2xl duration-300'>
            <p className='text-xl font-bold italic text-white'>Book a Lab</p>
            <Image src={Lab} height={90} width={100} alt='lab image' className='rounded-full border-2 border-white shadow-md' />
          </div>
        </Link>

        <div className='mt-6 w-full flex flex-col items-center'>
          <h2 className='text-2xl font-semibold mb-4'>Why Book With Us?</h2>
          <p className='text-center text-gray-700 mb-4 max-w-2xl'>
            We offer a seamless and convenient booking experience for all your medical and laboratory needs. Our platform ensures that you can easily schedule appointments with top professionals in just a few clicks.
          </p>
          <p className='text-center text-gray-700 max-w-2xl'>
            Our services are designed to provide you with the best healthcare experience, ensuring timely appointments and top-notch service quality. Book your session now and take a step towards better health.
          </p>
        </div>
      </div>
    </div>
  )
}
