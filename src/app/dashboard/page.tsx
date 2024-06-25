import Link from 'next/link';
import Image from 'next/image';

export default function Dashboard() {
    return (
        <div className=' '>
            <header className="bg-white shadow md:pt-12 pt-6">
                <div className="container">
                    <div className="flex items-center mb-5 md:space-x-8 space-x-4">
                        <Link href="/profile">

                            <div className="overflow-hidden relative rounded-lg shadow-sm md:w-24 md:h-20 h-12 w-16">
                                <Image src="/assets/images/brand/WhatsApp Image 2022-12-13 at 12.14.32 AM.jpeg" alt="" layout="fill" objectFit="cover" />
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

            <main className=" py-8 flex justify-center items-center px-5">
                <div className="container md:grid grid-cols-3 gap-10">
                    <div className='col-span-2 '>
                        <div className='flex flex-col items-center justify-center'>
                            <div className="md:text-2xl text-xl font-semibold mb-5">Summary</div>
                            <div className="grid md:grid-cols-3 grid-cols-3 gap-5">
                                <div className="bg-white shadow rounded-md sm:p-5 p-4">
                                    <div className="text-sm">Your Balance</div>
                                    <div className="font-semibold md:text-2xl text-xl mt-3">$0.00 <div className="md:inline-flex items-baseline text-red-500 text-sm hidden"><i className="icon-feather-arrow-up"></i> 4.4%</div></div>
                                    <div className="md:font-medium text-gray-400 text-sm mt-1"></div>
                                </div>
                                <div className="bg-white shadow rounded-md sm:p-5 p-4">
                                    <div>Profit</div>
                                    <div className="font-semibold md:text-2xl text-xl mt-3">$0.00 <div className="md:inline-flex items-baseline text-green-500 text-sm hidden"><i className="icon-feather-arrow-up"></i> 12.4%</div></div>
                                    <div className="md:font-medium text-gray-400 text-sm mt-1"></div>
                                </div>
                                <div className="bg-white shadow rounded-md sm:p-5 p-4 md:block">
                                    <div>Savings</div>
                                    <div className="font-semibold md:text-2xl text-xl mt-3">$0.00 <div className="md:inline-flex items-baseline text-yellow-500 text-sm hidden"><i className="icon-feather-arrow-up"></i> 20.4%</div></div>
                                    <div className="md:font-medium text-gray-400 text-sm mt-1"></div>
                                </div>
                            </div>
                        </div>
                        <div className="shadow bg-white rounded-md mt-10">
                            <div className="border-b flex items-center justify-between md:p-5 p-3">
                                <div>
                                    <h2 className="text-lg font-semibold">Latest sales</h2>
                                </div>
                                <Link href="#">See all</Link>
                            </div>
                            <div className="lg:max-h-96" data-simplebar>
                                <ul className="divide-y">
                                    <li className="flex items-start md:space-x-6 space-x-3 md:p-5 p-3">
                                        <Link href="#">

                                            <div className="h-12 md:h-16 md:w-24 overflow-hidden relative rounded -md shadow w-12">
                                                <Image src="/assets/images/images (2).jfif" alt="" layout="fill" objectFit="cover" />
                                            </div>

                                        </Link>
                                        <div className="flex-1 flex justify-between">
                                            <div className="flex-1">
                                                <Link href="#">Ethereum mining machine</Link>
                                                <div className="flex space-x-3 items-center text-sm md:mt-1.5 text-gray-500">
                                                    <span className="font-semibold text-sm text-blue-500">Active</span>
                                                    <div className="md:block hidden">·</div>
                                                    <span className="font-medium text-sm">Total users 212</span>
                                                </div>
                                            </div>
                                            <div className="mb-0 sm:block hidden">
                                                <div className="bg-green-100 text-green-600 font-semibold inline-block leading-4 mt-3 px-3 py-1.5 rounded-full text-base">$49.<small>00</small> +</div>
                                            </div>
                                        </div>
                                    </li>
                                    {/* Add more list items as needed */}
                                </ul>
                            </div>
                        </div>
                    </div>




                    <div className="bg-white p-6 rounded-md shadow col-span-1 mt-10">
                        <span className="block font-medium text-lg mb-4">History</span>

                        <table className=" divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="w-2/6 py-3">Payment Method</th>
                                    <th className="w-2/6 py-3">Date</th>
                                    <th className="w-1/6 py-3">Amount Paid</th>
                                    <th className="w-1/6 py-3">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="py-4">
                                        <div className="bg-gray-100 h-5 rounded"></div>
                                    </td>
                                    <td className="py-4">
                                        <div className="bg-gray-100 h-5 rounded"></div>
                                    </td>
                                    <td className="py-4">
                                        <div className="bg-gray-100 h-5 rounded"></div>
                                    </td>
                                    <td className="py-4">
                                        <div className="bg-gray-100 h-5 rounded"></div>
                                    </td>
                                </tr>
                                {/* Additional rows can be added here */}
                            </tbody>
                        </table>
                    </div>
                </div>

            </main>
        </div>
    );
}
