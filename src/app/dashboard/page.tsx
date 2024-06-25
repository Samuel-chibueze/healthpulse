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
                                <Image src="/assets/images/brand/WhatsApp Image 2022-12-13 at 12.14.32 AM.jpeg" alt="Company Logo" layout="fill" objectFit="cover" />
                            </div>
                        </Link>
                        <div className="flex-1">
                            <h3 className="md:text-3xl sm:text-2xl text-xl md:mb-2 font-semibold capitalize">Ehealthpulse Ltd</h3>
                            <div className="flex items-center justify-between">
                                <div className="flex space-x-3 items-center text-sm md:pt-1 text-gray-500">
                                    <div>Empowering Your Health</div>
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

            <main className="py-8 flex justify-center items-center px-5">
                <div className="container md:grid grid-cols-3 gap-10">
                    <div className='col-span-2 '>
                        <div className='flex flex-col items-center justify-center'>
                            <div className="md:text-2xl text-xl font-semibold mb-5">Your Recent Activity</div>
                            <div className="grid md:grid-cols-3 grid-cols-3 gap-5">
                                <div className="bg-white shadow rounded-md sm:p-5 p-4">
                                    <div className="text-sm">Logged In</div>
                                    <div className="font-semibold md:text-2xl text-xl mt-3">01/01/2024</div>
                                </div>
                                <div className="bg-white shadow rounded-md sm:p-5 p-4">
                                    <div>Updated Profile</div>
                                    <div className="font-semibold md:text-2xl text-xl mt-3">Personal Info</div>
                                </div>
                                <div className="bg-white shadow rounded-md sm:p-5 p-4">
                                    <div>Consultation Booked</div>
                                    <div className="font-semibold md:text-2xl text-xl mt-3">$50.00</div>
                                </div>
                            </div>
                        </div>
                        <div className="shadow bg-white rounded-md mt-10">
                            <div className="border-b flex items-center justify-between md:p-5 p-3">
                                <div>
                                    <h2 className="text-lg font-semibold">Latest Updates</h2>
                                </div>
                                <Link href="#">See all</Link>
                            </div>
                            <div className="lg:max-h-96" data-simplebar>
                                <ul className="divide-y">
                                    <li className="flex items-start md:space-x-6 space-x-3 md:p-5 p-3">
                                        <Link href="#">
                                            <div className="h-12 md:h-16 md:w-24 overflow-hidden relative rounded-md shadow w-12">
                                                <Image src="/assets/images/images (2).jfif" alt="Update" layout="fill" objectFit="cover" />
                                            </div>
                                        </Link>
                                        <div className="flex-1 flex justify-between">
                                            <div className="flex-1">
                                                <Link href="#">New Online Consultation Feature</Link>
                                                <div className="flex space-x-3 items-center text-sm md:mt-1.5 text-gray-500">
                                                    <span className="font-semibold text-sm text-blue-500">Active</span>
                                                    <div className="md:block hidden">·</div>
                                                    <span className="font-medium text-sm">Engagement 212 users</span>
                                                </div>
                                            </div>
                                            <div className="mb-0 sm:block hidden">
                                                <div className="bg-green-100 text-green-600 font-semibold inline-block leading-4 mt-3 px-3 py-1.5 rounded-full text-base">Free</div>
                                            </div>
                                        </div>
                                    </li>
                                    {/* Add more list items as needed */}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 rounded-md  col-span-1 mt-10">
                        <span className="block font-medium text-lg mb-4">Activity History</span>
                        <table className="divide-y divide-gray-200 bg-gray-100 sm:w-[10px]">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="w-2/6 py-3">Action</th>
                                    <th className="w-2/6 py-3">Date</th>
                                    <th className="w-1/6 py-3">Details</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="py-4">Logged In</td>
                                    <td className="py-4">01/01/2024</td>
                                    <td className="py-4">Successfully logged into the dashboard</td>
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
