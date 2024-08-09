'use client';
import React, { useState } from "react";
import { validatebooking } from "../serveractions";
import { useRouter } from "next/navigation";
import { mycontext } from './contextprovider';

interface BookingSectionProps {
  userid: string; // Adjust the type if `userid` should be different
}

export default function BookingSection({ userid }: BookingSectionProps) {
  const router = useRouter();
  const { visible, setvisible, setdoctor, doctor } = mycontext();
  const [loading, setLoading] = useState(false); // Add loading state

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Start loading
    try {
      const resData = await validatebooking();
      if (resData.show_model) {
        setdoctor(userid);
        setvisible(true);
      } else {
        router.push('/accounts/sign-in/');
      }
    } catch (error) {
      console.error('Error during booking validation:', error);
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div className="bg-white shadow rounded-md p-5" uk-sticky="media: 992; offset: 90; top: 800; animation: uk-animation-slide-top">
      <div className="flex justify-between items-center mb-3">
        <div>Book an Appointment</div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-2 mb-5">
        {/* Radio buttons and other form inputs here */}

        <hr className="my-2.5" />
        <div className="flex space-x-3 justify-center items-center">
          <button
            type="submit"
            className={`bg-[#17345c] flex font-semibold justify-center rounded-lg text-white w-full h-[50px] hover:text-white items-center ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading} // Disable button during loading
          >
            {loading ? (
              <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8h8a8 8 0 01-16 0z"></path>
              </svg>
            ) : (
              'Book Now'
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
