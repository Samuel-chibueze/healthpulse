import React from 'react'
import image1 from "../images/arm.png"
import image2 from "../images/venture.png"
import image3 from "../images/western-union.png"
import image4 from "../images/techstars.png"

import Image from 'next/image'
import image from "../images/wallet_3.jpeg"

import Link from 'next/link'
export default function home_section_2() {
  return (
    <div className='flex flex-col md:gap-[200px] gap-9 md:flex md:flex-row justify-center items-center py-10 px-6 '>
    <div className='md:order-2 '>
  <Image className='w-[400px]' src={image} alt="" />
    </div>

    <div className='md:order-1 flex gap-4 flex-col  justify-center items-center  py-10 w-[450px]'>
        <h1  className='text-3xl font-semibold w-full text-center'>Invest your money in dollars</h1>
        <p className='w-[450px] text-center'>By holding your investments in a stable currency, your money grows more over time and retains its value better.</p>
       <Link href={'/signup'}> 
       <button className='text-blue-500 font-bold' >Start investing now</button> 
       </Link> 
    </div>
</div>
  )
}

