import React, { useState, useEffect } from 'react';
import { FaStar, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const testimonials = [
  {
    name: 'John Doe',
    text: 'This service is amazing! I couldn\'t be happier.',
    rating: 5,
  },
  {
    name: 'Jane Smith',
    text: 'Excellent experience, I highly recommend it!',
    rating: 4,
  },
  {
    name: 'Michael Brown',
    text: 'Very professional and user-friendly.',
    rating: 5,
  },
];

export default function Testimony() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000); // Automatically move to the next testimonial every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex]); // Add currentIndex to the dependency array

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-lg mx-auto mt-10 relative text-center w-full">
      <h2 className="text-2xl font-bold mb-6">What Our Clients Say</h2>

      <div className="transition-transform duration-300">
        <p className="text-xl italic mb-4">"{currentTestimonial.text}"</p>
        <p className="font-bold mb-2">- {currentTestimonial.name}</p>
        <div className="flex justify-center mb-6">
          {Array(currentTestimonial.rating).fill(0).map((_, index) => (
            <FaStar key={index} className="text-yellow-500" />
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <FaArrowLeft
          onClick={prevTestimonial}
          className="text-blue-500 cursor-pointer hover:text-blue-600 text-2xl"
        />
        <FaArrowRight
          onClick={nextTestimonial}
          className="text-blue-500 cursor-pointer hover:text-blue-600 text-2xl"
        />
      </div>
    </div>
  );
}
