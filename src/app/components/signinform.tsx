'use client'

import Image1 from '../images/signup-cover.jpeg';
import Logo from "../images/logo_img.png"
import Image from 'next/image';
import { cookies } from "next/headers";
import { redirect, useRouter } from 'next/navigation';
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link';

import { string, z } from 'zod'
import { errors } from 'jose';
import { SigninAction } from '@/app/serveractions'
import { useState } from 'react';
import Button from './button';
import { getSession, encrypt } from '../lib';
import toast from 'react-hot-toast';
import { useSearchParams } from 'next/navigation'


const FormSchema = z.object({
    email: z.string().email("invalid email address"),
    password: z.string().min(5, "your password is too short").max(20, 'your password is too long')
})

interface formDatat {
    email: string,
    password: string
}

export default function signinform() {

 
    const [email_error_msg, setemail_error_msg] = useState<string>('')
    const [password_error_msg, setpassword_error_msg] = useState<string>('')


    const router = useRouter()
    // const [state, formAction] = useFormState(Signupaction, initialstate)

    async function handlesubmit(formData: FormData) {
        console.log(formData)
        setemail_error_msg('')
        setpassword_error_msg('')

        const newform = {
            email: formData.get("email"),
            password: formData.get("password")
        }

        const result = FormSchema.safeParse(newform)
        if (result.success) {
            console.log("form validation passed !!")
            const data = await SigninAction(formData)

            if (data?.success) {
                toast.success(data?.message)
                setTimeout(() => {
                    router.push('/dashboard');
                }, 2000);
                
            } else {
                toast.error(data?.message)
            }

        } else {
            const message = result.error.issues[0].message
            const path = result.error.issues[0].path[0]

            { path === "email" ? setemail_error_msg(message) : setpassword_error_msg(message) }
        setTimeout(()=>{
          setemail_error_msg('')
          setpassword_error_msg('')
        },3000);
           
        }
    }






    return (
        <form action={handlesubmit} className="lg:py-10 lg:px-8  space-y-3 relative flex flex-col justify-center items-center bg-white  rounded-md w-[75vw] md:w-[30vw] h-[120vh] md:h-[100vh] ">
            <div>
                <Link href="/">
                    <Image
                        width={500}
                        height={100}
                        src={Logo}
                        alt={"image"}
                        className="w-full h-48 object-cover"
                    />
                </Link>

            </div>
            <h1 className="lg:text-2xl text-2xl font-semibold mb-6">Sign in</h1>
            <p className='text-xl pt-4 pb-10'>Hey friend! Welcome back</p>
            <div className="w-full">
                <label htmlFor="email" className="mb-1 block font-bold">Email Address</label>
                <input
                    type="email"
                    name="email"
                    className="h-12 mt-2 px-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
                <p className='text-red-600 font-semibold text-md py-2 ml-5'>{email_error_msg}</p>
            </div>
            <div className="w-full">
                <label htmlFor="password" className="mb-1 block font-bold">Password</label>
                <input
                    type="password"
                    name="password"
                    className="h-12 mt-2 px-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
                <p className='text-red-600 font-semibold text-md py-2 ml-5'>{password_error_msg}</p>
            </div>
            <Button />
            <div className="uk-heading-line uk-text-center py-2"><span>Or</span></div>
            <div className="flex items-center justify-center">
                <div className='flex justify-center gap-3 items-center md:p-2 p-3 rounded-lg md:w-[20vw] w-[60vw]  bg-gray-100 text-black  font-thin hover:bg-gray-200'>Connect with<FcGoogle size={25} />
                </div>
            </div>
            <div className='flex flex-col justify-center items-center py-5'>
                <p>Already have an account? <Link className='text-blue-800' href={'/accounts/sign-up'}>signup</Link></p>
            </div>
        </form>
    )
}
