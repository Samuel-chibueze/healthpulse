'use client';

import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    console.log('Subscribe button clicked');
    if (email) {
      setSubscribed(true);
      setEmail('');
      // Add your subscribe logic here
    }
  };

  return (
    <div className="bg-blue-600 text-white p-10 rounded-xl shadow-lg w-full mx-auto mb-10 mt-10 md:px-20">
      <h2 className="text-3xl font-extrabold mb-6">Subscribe to our Newsletter</h2>
      <p className="mb-8 text-lg">Get the latest updates and news directly to your inbox.</p>

      {subscribed ? (
        <div className="flex items-center justify-center flex-col">
          <p className="text-2xl">Thank you for subscribing!</p>
        </div>
      ) : (
        <div className="flex items-center md:px-20">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="p-2 rounded-l-lg w-full text-gray-700 focus:outline-none"
          />
          <button
            onClick={handleSubscribe}
            className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-r-lg transition-colors duration-300"
          >
            Subscribe
          </button>
        </div>
      )}
    </div>
  );
}
