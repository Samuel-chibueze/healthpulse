// Import necessary components from Next.js and React-icons
import Head from 'next/head';
import { IoIosSearch } from 'react-icons/io';
import { CiFilter } from 'react-icons/ci';

// Define your component
export default function signup() {
    return (
        <div>
            <Head>
                <title>Register</title>
            </Head>
            <div className="lg:p-12 max-w-xl lg:my-0 my-12 mx-auto p-6 space-y-">
                <form className="lg:py-10 lg:px-8 p-6 space-y-3 relative bg-white shadow-xl rounded-md">
                    <h1 className="lg:text-2xl text-xl font-semibold mb-6">Register</h1>

                    <div className="grid lg:grid-cols-2 gap-3">
                        <div>
                            <label className="mb-0" htmlFor="first-name">
                                First Name
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                id="first-name"
                                className="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full"
                            />
                        </div>
                        <div>
                            <label className="mb-0" htmlFor="last-name">
                                Last Name
                            </label>
                            <input
                                type="text"
                                placeholder="Last Name"
                                id="last-name"
                                className="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="mb-0" htmlFor="username">
                            Username
                        </label>
                        <input
                            type="text"
                            placeholder="Username"
                            id="username"
                            className="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full"
                        />
                    </div>
                    <div>
                        <label className="mb-0" htmlFor="email">
                            Email Address
                        </label>
                        <input
                            type="email"
                            placeholder="Info@example.com"
                            id="email"
                            className="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full"
                        />
                    </div>
                    <div>
                        <label className="mb-0" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="******"
                            id="password"
                            className="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full"
                        />
                    </div>
                    <div className="grid lg:grid-cols-2 gap-3">
                        <div>
                            <label className="mb-0">Gender</label>
                            <select className="selectpicker mt-2">
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                        <div>
                            <label className="mb-0">Phone: optional</label>
                            <input
                                type="text"
                                placeholder="+543 5445 0543"
                                className="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full"
                            />
                        </div>
                    </div>

                    <div className="checkbox">
                        <input type="checkbox" id="chekcbox1" checked />
                        <label htmlFor="chekcbox1">
                            <span className="checkbox-icon"></span> I agree to the{' '}
                            <a
                                href="pages-terms.html"
                                target="_blank"
                                className="uk-text-bold uk-text-small uk-link-reset"
                            >
                                Terms and Conditions
                            </a>
                        </label>
                    </div>

                    <div>
                        <button
                            type="button"
                            className="bg-blue-600 font-semibold p-2 mt-5 rounded-md text-center text-white w-full"
                        >
                            Get Started
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
