import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Image1 from "../images/img/fruit.jpeg"

export default function BookingPage() {
  return (
    <div className='flex flex-col px-10 justify-center items-center h-screen bg-gray-100 '>
      <div className='w-full h-[70vh] flex flex-col justify-start gap-7 py-8 items-center'>
        <h1 className='text-4xl font-bold mb-4'>Book a Session</h1>

        <Link href={'/doctors'}>
          <div className='rounded-xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-lg h-[20vh] md:w-[40vw] w-[80vw] flex justify-between items-center px-8 transform transition-transform hover:scale-105'>
            <p className='text-2xl font-bold italic text-white'>Book a Doctor</p>
            <Image src={Image1} height={150} width={200} alt='doctor image' className='rounded-full border-2 border-white shadow-md' />
          </div>
        </Link>

        <Link href={'/labs'}>
          <div className='rounded-xl bg-gradient-to-r from-green-500 via-green-600 to-green-700 shadow-lg h-[20vh] md:w-[40vw] w-[80vw] flex justify-between items-center px-8 transform transition-transform hover:scale-105'>
            <p className='text-2xl font-bold italic text-white'>Book a Lab</p>
            <Image src={Image1} height={150} width={200} alt='lab image' className='rounded-full border-2 border-white shadow-md' />
          </div>
        </Link>

        <Link href={'/drug-companies'}>
          <div className='rounded-xl bg-gradient-to-r from-red-400 via-re-500 to-red-700 shadow-lg h-[20vh] md:w-[40vw] w-[80vw] flex justify-between items-center px-8 transform transition-transform hover:scale-105'>
            <p className='text-2xl font-bold italic text-white'>Drug Company</p>
            <Image src={Image1} height={150} width={200} alt='drug company image' className='rounded-full border-2 border-white shadow-md' />
          </div>
        </Link>
      </div>
    </div>
  )
}
