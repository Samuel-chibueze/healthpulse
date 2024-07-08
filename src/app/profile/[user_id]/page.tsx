import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Image1 from "../../images/img/fruit.jpeg"
// async function getdoctor(params:any){
// const res = await fetch( `http://127.0.0.1:8000/api/profile/${params}`,{ cache: 'no-store' })
// const data = await res.json()
// console.log(data)
// return data
// }

const Profile = async ({params}: any) => {
 const data ={
  firstname:"samtech",
  lastname:"dane"
 }
  // const data = await getdoctor(params.user_id)
  console.log(params.user_id)

  return (
    <main className="md:grid grid-cols-3 md:gap-8 gap-20 container mx-auto py-8 mt-24 px-4 md:px-20 bg-gray-100">
      {/* Main Content */}
      <div className="col-span-2 bg-white shadow-md rounded-lg overflow-hidden">
        {/* Header */}
        <header className="px-6 py-4 border-b">
          <h1 className="text-3xl font-bold text-gray-800">{data.firstname} {data.lastname}</h1>
          <p className="text-sm text-gray-600 mt-2">
            By <span className="text-blue-500">Ehealthpulse Team</span> in <span className="text-blue-500">Healthcare</span>
          </p>
        </header>

        {/* Slideshow Section */}
        <div className="px-6 mt-6">
          <div className="relative rounded-lg overflow-hidden ">
           
            <Image
                                    width={500}
                                    height={1000}
                                    src={Image1}
                                    alt={data.firstname}
                                    className="w-full h-48 object-cover"
                                />
          </div>
      
        </div>

        {/* Company Description */}
        <div className="px-6 mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-700 leading-relaxed">
            Ehealthpulse Ltd is dedicated to enhancing healthcare quality through innovative technology. We offer a user-friendly platform for booking online consultations, home medical laboratory tests, medical prescriptions, and health educational services. Our mission is to empower patients to take control of their health with ease and confidence, ensuring convenience, accuracy, and personalized care.
          </p>
        </div>

      

        {/* Core Values */}
        <div className="px-6 mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Core Values</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Patient-Centric Care: Prioritizing patient needs and offering compassionate support.</li>
            <li>Excellence: Embracing cutting-edge technology to improve patient outcomes.</li>
            <li>Integrity: Upholding ethical standards, honesty, and transparency.</li>
            <li>Proactive Solutions: Anticipating and addressing evolving healthcare needs.</li>
            <li>Confidentiality: Ensuring robust data protection for patient information.</li>
            <li>Timely Results: Delivering prompt test results and consultation feedback.</li>
            <li>Patient Empowerment: Providing easy access to medical records and comprehensive support.</li>
          </ul>
        </div>

        {/* Services */}
        <div className="px-6 mt-8 py-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Services</h2>
          <div className="flex space-x-4 overflow-x-auto">
            {/* Replace with actual related product cards */}
            <div className="w-64 h-48 bg-gray-200 rounded-lg">Online Consultations</div>
            <div className="w-64 h-48 bg-gray-200 rounded-lg">Home Medical Tests</div>
            <div className="w-64 h-48 bg-gray-200 rounded-lg">Medical Prescriptions</div>
            <div className="w-64 h-48 bg-gray-200 rounded-lg">Health Educational Services</div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <aside className="col-span-1 w-50 mt-10 md:mt-0">
        <div className="md:space-y-5 space-y-2">
          <div className="bg-white shadow rounded-md p-5" uk-sticky="media: 992; offset: 90; top: 800; animation: uk-animation-slide-top">
            <div className="flex justify-between items-center mb-3">
              <div>Book an Appointment</div>
              <a href="#" className="text-sm text-blue-600">Full details →</a>
            </div>
            <form action="#" className="space-y-2 mb-5">
              <div className="radio w-full">
                <input id="radio-1" name="radio" type="radio" checked />
                <label htmlFor="radio-1" className="flex justify-center items-center">
                  <span className="radio-label"></span>
                  <div className="mr-auto">
                    <h6 className="text-base font-medium -mb-1.5">Consultation</h6>
                  </div>
                  <div className="flex items-center ml-auto">
                    <strong className="text-sm mr-1">$</strong>
                    <strong className="text-3xl font-medium">50</strong>
                  </div>
                </label>
              </div>
              <div className="radio w-full">
                <input id="radio-2" name="radio" type="radio" />
                <label htmlFor="radio-2" className="flex justify-center items-center">
                  <span className="radio-label"></span>
                  <div className="mr-auto">
                    <h6 className="text-base font-medium -mb-1.5">Home Test</h6>
                  </div>
                  <div className="flex items-center">
                    <strong className="text-sm mr-1">$</strong>
                    <strong className="text-3xl font-medium">100</strong>
                  </div>
                </label>
              </div>
            </form>
            <hr className="my-2.5" />
            <div className="flex space-x-3 justify-center items-center">
              <Link href="#" className="bg-green-500 flex font-semibold justify-center rounded-lg text-white w-full h-[50px] hover:text-white items-center">
                Book Now
              </Link>

            </div>
          </div>

          <div className="bg-white shadow rounded-md p-5">
            <div className="grid grid-flow-col gap-2">
              <div>
                <div>Reviews</div>
                <a href="#" className="font-semibold text-lg block pt-1">
                  4.8/5 <span className="text-sm font-medium">(200 reviews)</span>
                </a>
              </div>
              <div>
                <div>Patients Served</div>
                <a href="#" className="font-semibold text-xl block pt-1">
                  15000
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white shadow rounded-md px-5 py-1 divide-y md:text-base text-sm">
            <div className="font-semibold py-4">Features</div>
            <div className="flex justify-between items-center py-4">
              <div>Compatible With</div>
              <div>All Major Browsers</div>
            </div>
            <div className="flex justify-between items-center py-4">
              <div>Files Included</div>
              <div>Detailed Reports</div>
            </div>
            <div className="flex justify-between items-center py-4">
              <div>Layout</div>
              <div>Responsive Design</div>
            </div>
            <div className="flex justify-between items-center py-4">
              <div>Premium Support</div>
              <div>24/7</div>
            </div>
            <div className="flex justify-between items-center py-4">
              <div>Free Updates</div>
              <div>Lifetime</div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Author Information</h3>
          <p className="text-gray-700">
            Author: <span className="text-blue-500">Ehealthpulse Team</span>
          </p>
          <p className="text-gray-700">
            Visit <span className="text-blue-500">Our Profile</span>
          </p>
        </div>
      </aside>
    </main>
  );
};

export default Profile;
