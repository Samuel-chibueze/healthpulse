'use client'
import React, {useContext } from 'react';
 import Home_section_1 from './components/home_section_1';
 import Home_section_2 from './components/home_section_2';
 import Home_section_3 from './components/home_section_3';
// import Home_section_4 from './components/home_section_4';
// import Home_section_5 from './components/home_section_5';
import Hero_section from './components/hero_section';
import HorizontalScroll from './components/HorizontalScroll';
import Newsletter from './components/newsletter';
import Testimony from './components/testimony';
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

export default async function homepage(){

    await new Promise(reslove => setTimeout(reslove, 3000))

    return     <div className="mx-auto bg-white max-w-screen-xl overflow-hidden shadow-lg">


            <Hero_section/>
        <Home_section_1 />
           <HorizontalScroll users={dummydata}/>
         <Home_section_3 />
         <Home_section_2 /> 
     
        <div className='px-12 py-14'>
               <Newsletter/>
        <Testimony/>
        </div>
     
        {/* <Home_section_4 />
        <Home_section_5 />  
        */}

    </div>;
}

