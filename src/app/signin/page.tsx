// components/LoginForm.js

import React from 'react';

export default function LoginForm() {
    const handleLogin = () => {
        // Handle login logic here
        console.log('Login button clicked');
    };

    return (
        <div className="lg:p-12 max-w-xl lg:my-0 my-12 mx-auto p-6 space-y-4">
            <form className="lg:py-10 lg:px-8 p-6 space-y-3 relative bg-white shadow-xl rounded-md">
                <h1 className="lg:text-2xl text-xl font-semibold mb-6">sign in </h1>

                <div>
                    <label htmlFor="email" className="mb-1 block">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="info@example.com"
                        className="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                </div>

                <div>
                    <label htmlFor="password" className="mb-1 block">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="******"
                        className="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                </div>

                <button
                    type="button"
                    // onClick={handleLogin}
                    className="bg-green-600 font-semibold p-2.5 mt-5 rounded-md text-center text-white w-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                    sign in
                </button>

                <div className="uk-heading-line uk-text-center py-5"><span>Or, connect with</span></div>

                {/* <div className="flex items-center justify-center space-x-2">
                    <a href="#" data-tippy-placement="top" title="Facebook">
                        <ion-icon name="logo-facebook" className="p-2 rounded-full text-2xl bg-gray-100 text-blue-600"></ion-icon>
                    </a>
                    <a href="#" data-tippy-placement="top" title="Google">
                        <ion-icon name="logo-google" className="p-2 rounded-full text-2xl bg-gray-100 text-red-600"></ion-icon>
                    </a>
                    <a href="#" data-tippy-placement="top" title="Twitter">
                        <ion-icon name="logo-twitter" className="p-2 rounded-full text-2xl bg-gray-100 text-indigo-500"></ion-icon>
                    </a>
                    <a href="#" data-tippy-placement="top" title="GitHub">
                        <ion-icon name="logo-github" className="p-2 rounded-full text-2xl bg-gray-100"></ion-icon>
                    </a>
                </div> */}
            </form>
        </div>
    );
};


