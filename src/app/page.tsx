import Image from "next/image";

// component imports
import Homebooking from "./components/homebooking"
import Advert from "./components/advert"
import Hero from './components/hero_section'
import Booking from "./components/booking"
import News_section from "./components/news_section"


export default function Home() {
  return (
    <main className=''>

      {/* <Hero /> */}
      <Advert />
      <Homebooking />
      <div className="md:grid grid-cols-3 gap-4 px-5">
        <div className="col-span-2">
          <Booking />
        </div>
        <News_section />
      </div>
    </main>
  );
}
