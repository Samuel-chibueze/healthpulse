"use client"
import { useState } from 'react';
import Link from 'next/link';
import Patient_medhistory from "@/app/components/patient_medhistory";
import Patient_personalinfo from '@/app/components/patient_personalinfo';
import Patient_lifestyleinfo from '@/app/components/patient_lifestyleinfo';
import Patient_healthrecords from '@/app/components/patient_healthrecords';

export default function Profile() {
    const [activeTab, setActiveTab] = useState('personalinfo');

    const renderActiveTab = () => {
        switch (activeTab) {
            case 'personalinfo':
                return <Patient_personalinfo />;
            case 'medhistory':
                return <Patient_medhistory />;
            case 'lifestyleinfo':
                return <Patient_lifestyleinfo />;
            case 'healthrecords':
                return <Patient_healthrecords />;
            default:
                return <Patient_personalinfo />;
        }
    };

    return (
        <div>
            <header className="bg-white shadow md:pt-12 pt-6">
                <div className="container">
                    <div className="flex items-center mb-5 md:space-x-8 space-x-4">
                        <Link href="/profile">
                            <div className="overflow-hidden relative rounded-lg shadow-sm md:w-24 md:h-20 h-12 w-16">
                                <div className=''></div>
                            </div>
                        </Link>
                        <div className="flex-1">
                            <h3 className="md:text-3xl sm:text-2xl text-xl md:mb-2 font-semibold capitalize">globaltrusttrade</h3>
                            <div className="flex items-center justify-between">
                                <div className="flex space-x-3 items-center text-sm md:pt-1 text-gray-500">
                                    <div>User Dashboard</div>
                                    <div className="md:block hidden">·</div>
                                    <div className="md:flex items-center space-x-0.5 text-yellow-400 hidden"></div>
                                </div>
                                <div className="flex space-x-3 items-center lg:hidden">
                                    <Link href="#"></Link>
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
                   
                    <div className="lg:flex shadow bg-white rounded-md overflow-hidden px-5 ">
                        <div className="w-full lg:p-10 p-4 mt-10 flex flex-col items-center justify-center gap-10 px-3">
                            <div className="flex space-x-4 mb-6 ">
                                <button
                                    className={`border-b-4 font-thin border-white  ${activeTab === 'personalinfo' ? 'border-blue-700' : 'bg-white'}`}
                                    onClick={() => setActiveTab('personalinfo')}
                                >
                                    Personal Info
                                </button>
                                <button
                                    className={`border-b-4 border-white ${activeTab === 'medhistory' ? 'border-blue-700' : 'bg-white'}`}
                                    onClick={() => setActiveTab('medhistory')}
                                >
                                    Medical History
                                </button>
                                <button
                                    className={`border-b-4 border-white ${activeTab === 'lifestyleinfo' ? 'border-blue-700' : 'bg-white'}`}
                                    onClick={() => setActiveTab('lifestyleinfo')}
                                >
                                    Lifestyle Info
                                </button>
                                <button
                                    className={`border-b-4 border-white ${activeTab === 'healthrecords' ? 'border-blue-700' : 'bg-white'}`}
                                    onClick={() => setActiveTab('healthrecords')}
                                >
                                    Health Records
                                </button>
                            </div>
                            {renderActiveTab()}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
