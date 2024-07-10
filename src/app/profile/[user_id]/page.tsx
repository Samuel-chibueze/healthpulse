import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Image1 from "../../images/img/fruit.jpeg"
import HorizontalScroll from '@/app/components/HorizontalScroll';
async function getdoctor(params: any) {
  await new Promise(reslove => setTimeout(reslove, 3000))
  // const res = await fetch(`http://127.0.0.1:8000/api/profile/5`, { cache: 'no-store' })
  // const data = await res.json()
  // console.log(data)

  // return data



}

export default async function Profile({ params }: any) {

  const dummydata = [
    {
      id: 1,
      name: "Sarah Blaze",
      username: "missblaze",
      verified: true,
      image: "assets/images/items/item-1.jpg",
      description: "Developed with Bootstrap 5",
      support: "6 months technical support",
      responsive: "Fully responsive template",
      price: 49.00,
      rating: 4.8,
      reviews: 18
    },
    {
      id: 2,
      name: "John Doe",
      username: "johndoe",
      verified: false,
      image: "assets/images/items/item-2.jpg",
      description: "Designed with Tailwind CSS",
      support: "1 year technical support",
      responsive: "Mobile-first design",
      price: 59.00,
      rating: 4.5,
      reviews: 12
    },
    {
      id: 3,
      name: "Jane Smith",
      username: "janesmith",
      verified: true,
      image: "assets/images/items/item-3.jpg",
      description: "Customizable themes",
      support: "3 months technical support",
      responsive: "Adaptive layout",
      price: 39.00,
      rating: 4.2,
      reviews: 8
    },
    {
      id: 4,
      name: "Michael Johnson",
      username: "michaelj",
      verified: false,
      image: "assets/images/items/item-4.jpg",
      description: "Modern design principles",
      support: "No technical support",
      responsive: "Desktop-friendly UI",
      price: 29.00,
      rating: 3.9,
      reviews: 6
    },
    {
      id: 5,
      name: "Emily Brown",
      username: "emilyb",
      verified: true,
      image: "assets/images/items/item-5.jpg",
      description: "Elegant UI components",
      support: "Lifetime technical support",
      responsive: "Cross-browser compatibility",
      price: 79.00,
      rating: 4.9,
      reviews: 24
    },
    {
      id: 6,
      name: "Chris Anderson",
      username: "chrisa",
      verified: true,
      image: "assets/images/items/item-6.jpg",
      description: "Accessible web design",
      support: "6 months technical support",
      responsive: "Screen reader friendly",
      price: 59.00,
      rating: 4.7,
      reviews: 16
    }
  ];


   const names ={
    firstname:"samtech",
    lastname:"dane"
   }
  const data = await getdoctor(params.user_id)
  console.log(params.user_id)

  return (
    <main className="md:grid grid-cols-3 md:gap-8 gap-20 container mx-auto py-8 mt-24 px-2  md:px-10 bg-gray-100">
      {/* Main Content */}
      <div className="col-span-2 bg-white shadow-md rounded-lg ">
        {/* Header */}
        <header className="px-6 py-4 border-b">
          <h1 className="text-3xl font-bold text-gray-800">{names.firstname} {names.lastname}</h1>
          <p className="text-sm text-gray-600 mt-2">
            By <span className="text-blue-500">Ehealthpulse Team</span> in <span className="text-blue-500">Healthcare</span>
          </p>
        </header>

        {/* Slideshow Section */}
        <div className="px-3 md:px-6 mt-6">
          <div className=" rounded-lg overflow-hidden ">

            <Image
              
              src={Image1}
              alt={names.firstname}
              className="w-full md:h-[60vh] h-[50vh] object-cover"
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
        <div className=" flex flex-col justify-center items-center py-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 "></h2>


          <HorizontalScroll users={dummydata} />


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


