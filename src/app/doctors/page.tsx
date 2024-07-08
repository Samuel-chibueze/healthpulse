import Image from "next/image";

// component imports
import Homebooking from "../components/homebooking"
import Advert from "../components/advert"
import Hero from '../components/hero_section'
import Booking from "../components/booking"
import News_section from "../components/news_section"
import Labbooking from "../components/labbooking"


// async function getdoctors() {
//   const res = await fetch('http://127.0.0.1:8000/api/getdoctors/',{ cache: 'no-store' })
//   const data = await res.json()
//   return data
// }
fetch('https://...', { next: { revalidate: 3600 } })


export default async function Home() {
  // const doctors = await getdoctors()
  // console.log(doctors)
  
  return (
    <main className=''>

      {/* <Hero /> */}
      <Advert />
      <Homebooking />
      <div className="md:grid grid-cols-3 gap-4 ">
        <div className="col-span-2">
          {/* <Labbooking doctors={doctors}/> */}
          <Booking  />
        </div>
        <News_section />
      </div>
    </main>
  );
}
