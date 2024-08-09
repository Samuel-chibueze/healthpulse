"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import image1 from "../images/default_profile_photo.jpg";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface User {
  id: number;
  name: string;
  username: string;
  verified: boolean;
  image: string;
  description: string;
  responsive: string;
  price: number;
  rating: number;
  reviews: number;
}

interface BookingProps {
  users: User[];
}

const HorizontalScroll: React.FC<BookingProps> = ({ users }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative container mx-auto px-10 py-10 w-full">
      {/* Scroll Buttons */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300"
        onClick={scrollLeft}
      >
        <FaArrowLeft size={20} />
      </button>

      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300"
        onClick={scrollRight}
      >
        <FaArrowRight size={20} />
      </button>

      {/* User Cards */}
      <div ref={scrollContainerRef} className="flex overflow-x-auto space-x-4 py-2 px-4 -mx-4 scrollbar-hide">
        {users.map((user) => (
          <Link key={user.id} href={`/profile/${user.id}`} passHref>
            <div className="min-w-[300px] bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <Image
                  width={240}
                  height={500}
                  src={image1}
                  alt={user.name}
                  className="w-full object-cover"
                />
                {user.verified && (
                  <div className="absolute top-0 right-0 bg-green-500 text-white px-2 py-1 m-2 rounded-md text-xs font-semibold">
                    Verified
                  </div>
                )}
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold">{user.responsive}</h2>
                <p className="text-gray-500 mb-2">@{user.name}</p>
                <p className="text-sm text-gray-700 mb-4">{user.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(Math.floor(user.rating))].map((_, index) => (
                      <div key={index} className="text-[#4576BC]">★</div>
                    ))}
                    {[...Array(5 - Math.floor(user.rating))].map((_, index) => (
                      <div key={index} className="text-gray-300">☆</div>
                    ))}
                    <span className="text-gray-600 ml-1">{user.rating.toFixed(1)} ({user.reviews} reviews)</span>
                  </div>
                </div>
              </div>
              <div className="bg-[#4576BC] px-4 py-3 text-center text-white font-semibold cursor-pointer hover:bg-[#17345c]">
                Book Now
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;
