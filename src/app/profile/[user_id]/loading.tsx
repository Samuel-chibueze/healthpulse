'use client'

import LoadingSpinner from "@/app/components/loadingspinner";
import Logo from "../../images/logo_img.png";
import Image from "next/image";

export default function Loading() {
    return (
        <div className="flex flex-col justify-center items-center h-screen text-black">
            <Image src={Logo} width={300} height={300} alt="loading image" className="animate-pulse mb-4" />
            
            <h2 className="text-3xl font-bold italic">loading...</h2>
        </div>
    );
}

