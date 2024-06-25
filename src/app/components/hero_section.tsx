import React from 'react';
import Link from 'next/link';

    export default function hero_section(){
        return(<>
        <div className="bg-blue-400 h-[500px] flex flex-col items-center justify-center gap-10 px-10">
            <div className="w-70px">
            <h1 className="text-5xl w-30">
            Upgrade the way
            you trade
            </h1>
        </div>
         <div>
            <p>Trade with the world’s largest retail broker and benefit from better-than-market conditions.</p>
         </div>
        
       
       <div className="flex space-x-4">
        <Link href="/signin" className="text-gray-700 font-4 hover:text-gray-900  px-7 rounded-md py-3 bg-yellow-300 text-lg font-medium">
          Sign In
        </Link>
        <Link href="/signin" className="text-gray-700 hover:text-gray-900  px-5 py-3 text-lg font-medium rounded-md py-3 bg-gray-200 ">
          Sign Up
        </Link>
      </div> 
        </div>

        <div className="flex justify-center items-center text-lg gap-10 px-15 py-10 bt-20">
            <p>800,000+ active traders</p>
            <p>Multiple regulatory licenses</p>
            <p> customer support</p>
            <p>PCI DSS certified</p>
        </div>

        </>);
    }


