'use client'
import { useState } from "react"
import { mycontext } from '@/app/components/contextprovider'

export default function BookingModel() {
    const [show_model, setshow_model] = useState<boolean>(true);
    const { visible, setvisible } = mycontext()

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

                        <div>
                            <form className='flex flex-col gap-5' >
                               

                                <div className='flex flex-col'>
                                    <input
                                        type="text"
                                        name="doctorName"
                                        placeholder="Doctor"
                                        className='border-2 border-gray-400 mt-1 w-full h-10 rounded-md p-2'
                                        disabled
                                    />
                                </div>

                                <div className='flex flex-col'>
                                    <select
                                        name="bookingType"
                                        className='w-full h-10 border-2 border-gray-400 rounded-md p-2'
                                    >
                                        <option >Booking Type</option>
                                        <option value="consultation">Consultation</option>
                                        <option value="lab_test">Lab Test</option>
                                        <option value="video_call">Video Call</option>
                                    </select>
                                </div>

                                <div className='flex flex-col'>
                                    <input type="date"
                                      
                                        name="Date"
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
                    </div>
                </div>
            </div>
        )
    )
}
