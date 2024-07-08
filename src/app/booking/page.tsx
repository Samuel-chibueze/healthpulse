import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Image1 from "../images/img/fruit.jpeg"
export default function bookingpage() {
  return (
    <div className='flex flex-col px-10 justify-center items-center  h-screen'>

      <div className='w-full  h-[50vh] flex-col flex justify-start gap-7 py-4 items-center '>
        <p>book a session </p>

        <Link href={'/doctors'}>
          <div className='rounded-xl bg-blue-300 shadow-lg h-[20vh] w-[40vw] flex justify-between items-center px-8'>
            <p className='text-2xl font-bold italic'>Book a Doctor</p>

            <Image src={Image1} height={150} width={200} alt='doctor image' />
          </div>

         

        </Link>
        <Link href={'/doctors'}>
        <div className='rounded-xl bg-blue-300 shadow-lg h-[20vh] w-[40vw] flex justify-between items-center px-8'>
            <p className='text-2xl font-bold italic'>Book a lab</p>

            <Image src={Image1} height={150} width={200} alt='doctor image' />
          </div>
        </Link>
        <Link href={'/doctors'}>drug company</Link>
      </div>

    </div>

  )
}

