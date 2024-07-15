'use client';
import { useState, useEffect } from 'react';

import Patient_medhistory from "@/app/components/patient_medhistory";
import Patient_personalinfo from '@/app/components/patient_personalinfo';
import Patient_lifestyleinfo from '@/app/components/patient_lifestyleinfo';
import Patient_healthrecords from '@/app/components/patient_healthrecords';

export default function DashProfileRender({ user }) {
    const [patientDetails, setPatientDetails] = useState({});

    useEffect(() => {
        async function getDetails() {
            const userId = Number(user);
            const rootUrl = "http://127.0.0.1:8000/api";
            try {
                console.log('Fetching details for user ID:', userId);
                const res = await fetch(`${rootUrl}/patient_personal_info/${userId}/`);
                const data = await res.json();

                console.log('Data fetched:', data);

                if (res.status === 200) {
                    setPatientDetails(data);
                } else {
                    console.log('Data not fetched, status code:', res.status);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        getDetails();
    }, [user]);

    useEffect(() => {
        console.log('Updated patient details:', patientDetails);
    }, [patientDetails]);

    const [activeTab, setActiveTab] = useState('personalinfo');

    const renderActiveTab = () => {
        switch (activeTab) {
            case 'personalinfo':
                return <Patient_personalinfo details={patientDetails} />;
            case 'medhistory':
                return <Patient_medhistory />;
            case 'lifestyleinfo':
                return <Patient_lifestyleinfo />;
            case 'healthrecords':
                return <Patient_healthrecords />;
            default:
                return <Patient_personalinfo details={patientDetails} />;
        }
    };

    return (
        <main className="py-12 px-8 md:px-20">
            <div className="container">
                <div className="lg:flex shadow bg-white rounded-md overflow-hidden px-5">
                    <div className="w-full lg:p-10 p-4 mt-10 flex flex-col items-center justify-center gap-10 px-3">
                        <div className="flex space-x-4 mb-6">
                            <button
                                className={`border-b-4 font-thin border-white ${activeTab === 'personalinfo' ? 'border-blue-700' : 'bg-white'}`}
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
    );
}
