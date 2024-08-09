import Image from "next/image";

// component imports
import Homebooking from "../components/homebooking"
import Advert from "../components/advert"
import Hero from '../components/hero_section'
import Booking from "../components/booking"
import News_section from "../components/news_section"
import HorizontalScroll from "../components/HorizontalScroll";
import { Suspense } from "react";



// async function getdoctors() {
//   const res = await fetch('http://127.0.0.1:8000/api/getdoctors/',{ cache: 'no-store' })
//   const data = await res.json()
//   return data
// }
// fetch('https://...', { next: { revalidate: 3600 } })

async function getdoctor(params: any) {
  // const res = await fetch(`http://127.0.0.1:8000/api/profile/5`, { cache: 'no-store' })
  // const data = await res.json()
  // console.log(data)

  // return data



}

export default async function Home() {
  // const doctors = await getdoctors()
  // console.log(doctors)
  await new Promise(reslove => setTimeout(reslove, 3000))
  const data = [
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
  return (
    <main className=''>

      {/* <Hero /> */}
      {/* <Advert /> */}
      {/* <Homebooking /> */}
      <div className="md:grid grid-cols-2 gap-4 ">
        <div className="col-span-2">
          {/* <Labbooking doctors={doctors}/> */}
      
               <Booking  />

       
        </div>
        {/* <News_section /> */}
        {/* <HorizontalScroll users={data}/> */}
      </div>
    </main>
  );
}
