'use client'
import { useState, useEffect } from "react";
import { mycontext } from '@/app/components/contextprovider';
import { add_booking, validatebooking } from "../serveractions";

// Define the type for doctor details
interface DoctorDetails {
  name: string;
  specialty: string;
  // Add other fields as needed
}

const data = {
    name:'doctor sam',
    specialty: 'eye doctor'
}
interface BookingSectionProps {
    doctorid: number;
    patientid: number // Adjust the type if `userid` should be different
  }

export default function BookingModel({doctorid,patientid}: BookingSectionProps) {


 const doctor = doctorid
 const patient = patientid
 console.log(doctor, patient)

 console.log(doctor,patient)
  const [show_model, setshow_model] = useState<boolean>(true);
  const [doctorDetails, setDoctorDetails] = useState<DoctorDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { visible, setvisible} = mycontext();

  // Fetch doctor details on component mount
  useEffect(() => {
    const fetchDoctorDetails = async () => {
        await new Promise(reslove => setTimeout(reslove, 3000))
    //   try {
    //     setLoading(true);
    //     const response = await fetch(`/api/doctors/details`); // Replace with actual API endpoint
    //     if (!response.ok) {
    //       throw new Error('Failed to fetch doctor details');
    //     }
    //     const data = await response.json();
    //     setDoctorDetails(data);
    //   } catch (error) {
    //     setError((error as Error).message); // Ensure error is a string
    //   } finally {
    //     setLoading(false);
    //   }

    setDoctorDetails(data)
    setLoading(false);
    };

    fetchDoctorDetails();
  }, []);




  async function handlesubmit(formData:FormData){
    const formDataToSubmit = new FormData();
   
    formDataToSubmit.append('booking_type', formData.get('bookingType') as string);
    formDataToSubmit.append('date', formData.get('date') as string);
    formDataToSubmit.append('time', formData.get('time') as string);
     const response = await add_booking(formDataToSubmit)
  }

  return (
    visible && (
      <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
        <div className='bg-white w-[400px] h-auto py-10 rounded-3xl shadow-xl my-4 mx-4 flex flex-col gap-4 z-50'>
          <div className='flex justify-between items-start px-5 rounded-2xl'>
            <p className='text-3xl'>Book Appointment</p>
            <button onClick={() => setvisible(false)} className='text-3xl'>x</button>
          </div>
          <div className='mx-5 flex flex-col gap-4'>
            <div className='bg-blue-100 h-10 w-full rounded-md p-10 flex justify-center items-center'>
              <p className='text-[14px]'>Fill in the details to book an appointment with the doctor or lab.</p>
            </div>

            {loading && (
              <div className="flex justify-center items-center h-[300px]">
                <div className="animate-spin h-10 w-10 border-4 border-t-4 border-blue-500 rounded-full"></div>
              </div>
            )}
            {error && (
              <div className="text-red-500 text-center mb-4">{error}</div>
            )}
            {!loading && doctorDetails && (
              <div>
                <form className='flex flex-col gap-5' action={handlesubmit}>
                  <div className='flex flex-col'>
                    <input
                      type="text"
                      name="doctorName"
                      placeholder="Doctor"
                      value={'doctr sam'}
                      className='border-2 border-gray-400 mt-1 w-full h-10 rounded-md p-2'
                      disabled
                    />
                  </div>

                  <div className='flex flex-col'>
                    <select
                      name="bookingType"
                      className='w-full h-10 border-2 border-gray-400 rounded-md p-2'
                    >
                      <option>Booking Type</option>
                      <option value="consultation">Consultation</option>
                      <option value="lab_test">Home Call</option>
                      <option value="video_call">Video Call</option>
                    </select>
                  </div>

                  <div className='flex flex-col'>
                    <input
                      type="date"
                      name="date"
                      className='w-full h-10 border-2 border-gray-400 rounded-md p-2'
                      placeholder="Date"
                    />
                  </div>

                  <div className='flex flex-col'>
                    <input
                      type="time"
                      name="time"
                      placeholder="Time"
                      className='border-2 border-gray-400 mt-1 w-full h-10 rounded-md p-2'
                      required
                    />
                  </div>

                  <div className='flex flex-col'>
                    <label htmlFor="description">Description</label>
                    <textarea
                      name="description"
                      className='border-2 h-[70px] rounded-md border-gray-400 p-2'
                    />
                  </div>

                  <div className='flex justify-center items-center mt-5'>
                    <button type='submit' className='bg-green-400 px-10 py-3 mx-auto text-white rounded-lg hover:bg-green-500 transition duration-300'>Continue</button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  );
}
