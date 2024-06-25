
import { useState } from 'react';
import Link from 'next/link';
export default function Profile() {
    // const [formData, setFormData] = useState({
    //     firstName: '',
    //     lastName: '',
    //     aboutMe: '',
    //     email: '',
    //     phoneNumber: '',
    //     company: '',
    //     country: '',
    //     city: '',
    //     zipCode: '',
    //     address1: '',
    //     address2: '',
    //     agreeTerms: false,
    // });

    // const handleChange = (e) => {
    //     const { name, value, type, checked } = e.target;
    //     setFormData(prevState => ({
    //         ...prevState,
    //         [name]: type === 'checkbox' ? checked : value
    //     }));
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Handle form submission logic here
    //     console.log(formData);
    // };

    return (
        <div>
            <header className="bg-white shadow md:pt-12 pt-6">
                <div className="container">
                    <div className="flex items-center mb-5 md:space-x-8 space-x-4">
                        <Link href="/profile">

                            <div className="overflow-hidden relative rounded-lg shadow-sm md:w-24 md:h-20 h-12 w-16">
                                <div className=''>

                                </div>
                            </div>

                        </Link>
                        <div className="flex-1">
                            <h3 className="md:text-3xl sm:text-2xl text-xl md:mb-2 font-semibold capitalize">globaltrusttrade</h3>
                            <div className="flex items-center justify-between">
                                <div className="flex space-x-3 items-center text-sm md:pt-1 text-gray-500">
                                    <div>User Dashboard</div>
                                    <div className="md:block hidden">·</div>
                                    <div className="md:flex items-center space-x-0.5 text-yellow-400 hidden">
                                        {/* <ion-icon name="star"></ion-icon> <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star"></ion-icon> <ion-icon name="star"></ion-icon>
                                        <ion-icon name="star" className="text-gray-200"></ion-icon>*/}
                                    </div>
                                </div>
                                <div className="flex space-x-3 items-center lg:hidden">
                                    <Link href="#">
                                        {/* <a className="flex items-center justify-center h-9 px-4 space-x-2 rounded-md text-blue-600 border-blue-600 border font-semibold">
                                            <ion-icon name="add-circle" className="-mt-0.5 text-2xl md:mx-0 -mx-2" aria-label="add circle"></ion-icon> <span className="md:block hidden">Subscribe</span>
                                        </a> */}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <nav className="">
                        <ul className="flex gap-10 justify-center items-center text-xl">
                            <li className="active"><Link href="/dashboard">Dashboard</Link></li>
                            <li><Link href="/dashboard/profile">Profile Info</Link></li>
                        </ul>
                    </nav>

                </div>
            </header>


            <main className="py-12 px-8 md:px-20">
                <div className="container">
                    <h2 className="text-2xl font-semibold mb-5">Setting</h2>
                    <div className="lg:flex shadow bg-white rounded-md overflow-hidden ">
                        {/* <div className="lg:w-1/3">
                         
                        </div> */}
                        <div className="w-full lg:p-10 p-4 border-l flex items-center justify-center ">
                            <div className="">
                                <div className="mb-8">
                                    <h3 className="font-semibold text-xl mb-2">Profile</h3>
                                    <p className="text-sm">This information will be displayed publicly so be careful what you share.</p>
                                </div>
                                <form className="sm:grid grid-cols-2 gap-x-6 gap-y-4 sm:space-y-0 space-y-2">
                                    <div>
                                        <label htmlFor="firstName" className="text-sm font-medium p-3">First Name</label>
                                        <input type="text" id="firstName" name="firstName" className="border-2 rounded-md border-gray-100 p-2 thin w-100" />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="text-sm font-medium p-3">Last Name</label>
                                        <input type="text" id="lastName" name="lastName" className="border-2 rounded-md border-gray-100 p-2 thin w-100" />
                                    </div>
                                    <div className="col-span-2">
                                        <label htmlFor="aboutMe" className="text-sm font-medium p-3">About Me</label>
                                        <textarea id="aboutMe" name="aboutMe" className="border-2 rounded-md border-gray-100 p-2 thin"></textarea>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="text-sm font-medium p-3">Email Address</label>
                                        <input type="email" id="email" name="email" className="border-2 rounded-md border-gray-100 p-2 thin w-100" />
                                    </div>
                                    <div>
                                        <label htmlFor="phoneNumber" className="text-sm font-medium p-3">Phone Number</label>
                                        <input type="text" id="phoneNumber" name="phoneNumber" className="border-2 rounded-md border-gray-100 p-2 thin w-100" />
                                    </div>
                                    <div>
                                        <label htmlFor="company" className="text-sm font-medium p-3">Company</label>
                                        <input type="text" id="company" name="company" className="border-2 rounded-md border-gray-100 p-2 thin w-100" />
                                    </div>
                                    <div>
                                        <label htmlFor="country" className="text-sm font-medium p-3">Country</label>
                                        <select id="country" name="country" className="border-2 rounded-md border-gray-100 p-2 thin select-field w-100">
                                            <option>Choose country</option>
                                            <option>Australia</option>
                                            <option>Canada</option>
                                            <option>France</option>
                                            <option>Germany</option>
                                            <option>Switzerland</option>
                                            <option>USA</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="city" className="text-sm font-medium p-3">City</label>
                                        <select id="city" name="city" className="border-2 rounded-md border-gray-100 p-2 thin w-100">
                                            <option>Choose city</option>
                                            <option>City A</option>
                                            <option>City B</option>
                                            <option>City C</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="zipCode" className="text-sm font-medium p-3">ZIP Code</label>
                                        <input type="text" id="zipCode" name="zipCode" className="border-2 rounded-md border-gray-100 p-2 thin w-100" />
                                    </div>
                                    <div>
                                        <label htmlFor="address1" className="text-sm font-medium p-3">Address 1</label>
                                        <input type="text" id="address1" name="address1" className="border-2 rounded-md border-gray-100 p-2 thin w-100" />
                                    </div>
                                    <div>
                                        <label htmlFor="address2" className="text-sm font-medium p-3">Address 2</label>
                                        <input type="text" id="address2" name="address2" className="border-2 rounded-md border-gray-100 p-2 thin w-100" />
                                    </div>
                                    <div className="col-span-2 checkbox my-2">
                                        <input type="checkbox" id="agreeTerms" name="agreeTerms" className="checkbox-input" />
                                        <label htmlFor="agreeTerms" className="text-sm checkbox-label"><span className="checkbox-icon"></span> I agree to the <a href="#" className="font-semibold">Terms and Conditions</a></label>
                                    </div>
                                    <div className="-m-10 border-t flex md:justify-end mt-6 p-6 space-x-3 justify-center md:-mb-10 -mb-5">
                                        <button type="button" className="bg-gray-200 font-medium py-2.5 px-6 rounded-md text-sm">Cancel</button>
                                        <button type="submit" className="bg-blue-600 text-white hover:text-white font-medium py-2.5 px-6 rounded-md text-sm">Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
