import Link from "next/link";

export default function bookingsection(){
    return(
        <div className="bg-white shadow rounded-md p-5" uk-sticky="media: 992; offset: 90; top: 800; animation: uk-animation-slide-top">
        <div className="flex justify-between items-center mb-3">
          <div>Book an Appointment</div>
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
    );
}