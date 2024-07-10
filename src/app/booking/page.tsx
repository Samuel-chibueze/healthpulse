import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Image1 from "../images/logo_img.png"

export default function BookingPage() {
  return (
    <div className='flex flex-col px-10 justify-center items-center h-screen bg-gray-100 px-9 '>
      <div className='w-full h-[70vh] flex flex-col justify-start gap-7 py-8 items-center px-7'>
        <h1 className='text-4xl font-bold mb-4'>Book a Session</h1>

        <Link href={'/doctors'}>
          <div className='rounded-md bg-gradient-to-r from-purple-400 via-purple-600 to-purple-700 shadow-lg h-[15vh] md:w-[40vw] w-[80vw] flex justify-between items-center px-8 transform transition-transform hover:scale-105'>
            <p className='text-xl font-bold italic text-white'>Book a Doctor</p>
            <Image src={Image1} height={80} width={100} alt='doctor image' className='rounded-full border-2 border-white shadow-md' />
          </div>
        </Link>

        <Link href={'/labs'}>
          <div className='rounded-md bg-gradient-to-r from-purple-700 via-purple-9500 to-purple-950 shadow-lg h-[15vh] md:w-[40vw] w-[80vw] flex justify-between items-center px-8 transform transition-transform hover:scale-105'>
            <p className='text-xl font-bold italic text-white'>Book a Lab</p>
            <Image src={Image1} height={80} width={100} alt='doctor image' className='rounded-full border-2 border-white shadow-md' />          </div>
        </Link>

        {/* <Link href={'/drug-companies'}>
          <div className='rounded-xl bg-gradient-to-r from-red-400 via-re-500 to-red-700 shadow-lg h-[20vh] md:w-[40vw] w-[80vw] flex justify-between items-center px-8 transform transition-transform hover:scale-105'>
            <p className='text-2xl font-bold italic text-white'>Drug Company</p>
            <Image src={Image1} height={150} width={200} alt='drug company image' className='rounded-full border-2 border-white shadow-md' />
          </div>
        </Link> */}
      </div>
    </div>
  )
}
