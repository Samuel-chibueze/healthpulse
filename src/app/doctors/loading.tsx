'use client'

import LoadingSpinner from "@/app/components/loadingspinner";
import Logo from "../../images/logo_img.png";
import Image from "next/image";
import { Ellipsis } from 'react-css-spinners'
export default function Loading() {
    return (
        <div className="flex flex-col justify-center items-center h-screen text-black">
            <Ellipsis
    color="rgba(74,144,226,1)"
    size={119}
  />
        </div>
    );
}

