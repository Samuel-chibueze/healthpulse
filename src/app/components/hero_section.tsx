import React from 'react';
import Link from 'next/link';
import Image1 from '../images/Online_Doctor_Consultation.png';

export default function HeroSection() {
  return (
    <>
      <div className="relative h-[650px] w-full flex flex-col items-center justify-center gap-10 px-10 bg-cover bg-center" style={{ backgroundImage: `url(${Image1.src})` }}>
        <div className="absolute inset-0  bg-opacity-50"></div>
        <div className="relative z-10 flex space-x-4">
          <Link href="/accounts/sign-in"  className="text-white hover:text-gray-900 px-7 rounded-md py-3 bg-[#4576BC] text-lg font-medium">
            sign in
          </Link>
          <Link href="/accounts/sign-up"  className="text-[#4576BC] hover:text-gray-900 px-5 rounded-md py-3 bg-gray-200 text-lg font-medium">
         signup
          </Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center text-white text-lg gap-4 md:gap-8 font-bold px-10 py-10 bg-[#6da6f5] border-t border-gray-300">
        <p>800,000+ active traders</p>
        <p>Multiple regulatory licenses</p>
        <p>24/7 customer support</p>
        <p>PCI DSS certified</p>
      </div>
    </>
  );
}
