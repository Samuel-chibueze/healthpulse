'use client';

import Image1 from '../images/signup-cover.jpeg';
import Logo from '../images/logo_img.png';
import Image from 'next/image';
import { cookies } from 'next/headers';
import { redirect, useRouter } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';
import ReactFlagsSelect from 'react-flags-select';
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { z } from 'zod';
import { SignupAction } from '@/app/serveractions';
import { useState, useEffect, useRef } from 'react';
import Button from './button';
import { getSession, encrypt } from '../lib';
import toast from 'react-hot-toast';
import { useSearchParams } from 'next/navigation';

const FormSchema = z.object({
  firstname: z.string().min(2, 'Your first name is too short').max(20, 'Your first name is too long'),
  lastname: z.string().min(2, 'Your last name is too short').max(20, 'Your last name is too long'),
  email: z.string().email('Invalid email address'),
  phonenumber: z.string().min(7, 'Your phone number is too short').max(15, 'Your phone number is too long'),
  gender: z.string().min(1, 'You have not added your Gender'),
  password: z.string().min(5, 'Your password is too short').max(20, 'Your password is too long'),
});

export default function SignupForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const [scountry, setscountry] = useState<string>('');
  const [firstname_error_msg, setfirstname_error_msg] = useState<string>('');
  const [lastname_error_msg, setlastname_error_msg] = useState<string>('');
  const [email_error_msg, setemail_error_msg] = useState<string>('');
  const [contact_info_error_msg, setcontact_info_error_msg] = useState<string>('');
  const [gender_error_msg, setgender_error_msg] = useState<string>('');
  const [password_error_msg, setpassword_error_msg] = useState<string>('');

  const remove_error = () => {
    setfirstname_error_msg('');
    setlastname_error_msg('');
    setemail_error_msg('');
    setcontact_info_error_msg('');
    setgender_error_msg('');
    setpassword_error_msg('');
  };

  const router = useRouter();

  const handlesubmit = async (formData: FormData) => {
    remove_error();
    const newform = {
      firstname: formData.get('firstname'),
      lastname: formData.get('lastname'),
      email: formData.get('email'),
      phonenumber: formData.get('phonenumber'),
      gender: formData.get('gender'),
      password: formData.get('password'),
    };

    const result = FormSchema.safeParse({
      firstname: newform.firstname?.toString() || '',
      lastname: newform.lastname?.toString() || '',
      email: newform.email?.toString() || '',
      phonenumber: newform.phonenumber?.toString() || '',
      gender: newform.gender?.toString() || '',
      password: newform.password?.toString() || '',
    });

    if (result.success) {
      console.log('Form validation passed !!');

      // Create a new FormData object and append the validated form data
      const formDataToSubmit = new FormData();
      formDataToSubmit.append('firstname', newform.firstname as string);
      formDataToSubmit.append('lastname', newform.lastname as string);
      formDataToSubmit.append('email', newform.email as string);
      formDataToSubmit.append('phonenumber', newform.phonenumber as string);
      formDataToSubmit.append('gender', newform.gender as string);
      formDataToSubmit.append('password', newform.password as string);
      console.log(formDataToSubmit)

      const data = await SignupAction(formDataToSubmit);

      if (data?.success) {
        toast.success(data?.message);
      
          router.push('/booking');
     

        // Reset the form after submission
        if (formRef.current) {
          formRef.current.reset();
        }
      } else {
        toast.error(data?.message || 'Network error, try again later');
      }
    } else {
      const issues = result.error.issues;
      const errordetails = issues.map(issue => ({
        path: issue.path.join('.'),
        message: issue.message,
      }));

      console.log(errordetails);
      const message = result.error.issues[0].message;
      const path = result.error.issues[0].path[0];

      if (path === 'firstname') {
        setfirstname_error_msg(message);
      } else if (path === 'lastname') {
        setlastname_error_msg(message);
      } else if (path === 'email') {
        setemail_error_msg(message);
      } else if (path === 'gender') {
        setgender_error_msg(message);
      } else if (path === 'phonenumber') {
        setcontact_info_error_msg(message);
      } else if (path === 'password') {
        setpassword_error_msg(message);
      }

      console.log(path, message);
    }
  };

  return (
    <form
      ref={formRef}
      action={handlesubmit}
      className=" flex flex-col justify-center items-center bg-white rounded-md w-[75vw] md:w-[30vw] h-[120vh] md:h-[100vh]"
    >
      <h1 className="lg:text-2xl text-2xl font-semibold mb-6">Sign up</h1>
      <p className="text-xl pt-4 pb-10">Hey friend! Welcome to healthpulse</p>

      <div className="flex justify-between gap-6">
        <div className="w-full">
          <label htmlFor="firstname" className="mb-1 block font-bold">
            First Name
          </label>
          <input
            type="text"
            name="firstname"
            className="h-12 mt-2 px-3 border border-gray-300 rounded-md w-[35vw] md:w-full focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          <p className="text-red-600  text-md py-2">{firstname_error_msg}</p>
        </div>
        <div className="w-full">
          <label htmlFor="lastname" className="mb-1 block font-bold">
            Last Name
          </label>
          <input
            type="text"
            name="lastname"
            className="h-12 mt-2 px-3 border border-gray-300 rounded-md w-[35vw] md:w-full focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          <p className="text-red-600  text-md py-2 ml-5">{lastname_error_msg}</p>
        </div>
      </div>

      <div className="w-full">
        <label htmlFor="email" className="mb-1 block font-bold">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          className="h-12 mt-2 px-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
        <p className="text-red-600  text-md py-2 ml-5">{email_error_msg}</p>
      </div>

      <div className="flex justify-between gap-6">
        <div className="w-full">
          <label htmlFor="phonenumber" className="mb-1 block font-bold">
            Phone Number
          </label>
          <input
            type="text"
            name="phonenumber"
            className="h-12 mt-2 px-3 border border-gray-300 rounded-md w-[35vw] md:w-full focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          <p className="text-red-600 text-md py-2 ml-5">{contact_info_error_msg}</p>
        </div>
        <div className="w-full">
          <label htmlFor="gender" className="mb-1 block font-bold">
            Gender
          </label>
          <select
            name="gender"
            id="gender"
            className="h-12 mt-2 px-3 border border-gray-300 rounded-md w-[35vw] md:w-full focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            <option value="">Select Gender</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
          <p className="text-red-600  text-md py-2 ml-5">{gender_error_msg}</p>
        </div>
      </div>

      <div className="w-full">
        <label htmlFor="password" className="mb-1 block font-bold">
          Password
        </label>
        <input
          type="password"
          name="password"
          className="h-12 mt-2 px-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
        <p className="text-red-600 text-md py-2 ml-5">{password_error_msg}</p>
      </div>
      <div className="w-full">
        <label htmlFor="password" className="mb-1 block font-bold">
         confirm Password
        </label>
        <input
          type="password"
          name="confirm_password"
          className="h-12 mt-2 px-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
        <p className="text-red-600 text-md py-2 ml-5">{password_error_msg}</p>
      </div>
      <Button />
      <div className="uk-heading-line uk-text-center py-2">
        <span>Or</span>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex justify-center gap-3 items-center md:p-2 p-3 rounded-lg md:w-[20vw] w-[60vw] bg-gray-100 text-black font-thin hover:bg-gray-200">
          Connect with <FcGoogle size={25} />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center py-5">
        <p>
          Already have an account? <Link className="text-blue-800" href="/accounts/sign-in">Sign in</Link>
        </p>
      </div>
    </form>
  );
}
