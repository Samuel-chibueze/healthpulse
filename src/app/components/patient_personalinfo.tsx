import { handleupdatepatientinfo } from '@/app/serveractions'
import toast from 'react-hot-toast';

interface PatientDetails {
    id?: number,
    first_name?: string;
    last_name?: string;
    email?: string;
    country?: string;
    city?: string;
    Date_of_birth?: string;
    Gender?: string;
    phone_number?: string;
    Address?: string;
}
interface PatientPersonalInfoProps {
    details: PatientDetails;
}


export default function PatientPersonalInfoForm({ details }: PatientPersonalInfoProps) {
    console.log(details)

    const handleupdate = async (formData: FormData) => {
        const user =  details?.id as number
       console.log(user)
        const handleupdate = await handleupdatepatientinfo(user, formData)
        { handleupdate?.success ? toast.success("your personal information has been updated") : toast.error('wrong input! check your input and try again.') }
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="mb-8">
                <h2 className="font-semibold text-xl mb-2">Patient Personal Information</h2>
                <p className="text-sm">Please provide your personal information.</p>
            </div>
            <form className="flex flex-col justify-center gap-3 items-center" action={handleupdate}>
                <div>
                    <label htmlFor="firstname" className="text-sm font-bold p-3 text-gray-800 w-1">First Name</label>
                    <input
        id="firstname"
        name="firstname"
        defaultValue={details.first_name ? details.first_name : ""}
        className={`border rounded-md border-gray-500 p-2 thin md:w-[30vw] w-[45vw] ${details.first_name ? 'bg-gray-200 cursor-not-allowed text-gray-500 border-gray-300' : ''}`}
        disabled={!!details.first_name}
      />
                </div>
                <div>
                    <label htmlFor="lastname" className="text-sm font-bold p-3 text-gray-800">Last Name</label>
                    <input id="lastname"
                        name="lastname"
                        defaultValue={details.last_name ? details?.last_name : ""}
                        className={`border rounded-md border-gray-500 p-2 thin md:w-[30vw] w-[45vw] ${details.last_name ? 'bg-gray-200 cursor-not-allowed text-gray-500 border-gray-300' : ''}`}
                        disabled={!!details.last_name}/>
                </div>
                <div>
                    <label htmlFor="email" className="text-sm font-bold p-3 text-gray-800">Email</label>
                    <input type="email"
                        id="email"
                        name="email"
                        defaultValue={details.email ? details?.email : ""}
                        className={`border rounded-md border-gray-500 p-2 thin md:w-[30vw] w-[45vw] ${details.email ? 'bg-gray-200 cursor-not-allowed text-gray-500 border-gray-300' : ''}`}
                        disabled={!!details.email}
                        />
                </div>
                <div className=''>
                    <label htmlFor="country" className="text-sm font-bold p-3 text-gray-800">Country</label>
                    <input id="country"
                        name="country"
                        defaultValue={details.country ? details?.country : ""}
                        className={`border rounded-md border-gray-500 p-2 thin md:w-[30vw] w-[45vw] ${details.country ? 'bg-gray-200 cursor-not-allowed text-gray-500 border-gray-300' : ''}`} 
                        disabled={!!details.country}/>
                </div>
                <div>
                    <label htmlFor="city" className="text-sm font-bold p-3 text-gray-800">City</label>
                    <input id="city"
                        name="city"
                        defaultValue={details.city ? details?.city : ""}
                        className={`border rounded-md border-gray-500 p-2 thin md:w-[30vw] w-[45vw] ${details.city ? 'bg-gray-200 cursor-not-allowed text-gray-500 border-gray-300' : ''}`}
                        disabled={!!details.city}/>
                </div>
                <div>
                    <label htmlFor="dateOfBirth" className="text-sm font-bold p-3 text-gray-800">Date of Birth</label>
                    <input type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        defaultValue={details.Date_of_birth ? details.Date_of_birth : ""}
                      className={`border rounded-md border-gray-500 p-2 thin md:w-[30vw] w-[45vw] ${details.Date_of_birth ? 'bg-gray-200 cursor-not-allowed text-gray-500 border-gray-300' : ''}`}
                      disabled={!!details.Date_of_birth}/>

                </div>
                <div>
                    <label htmlFor="gender" className="text-sm font-bold p-3 text-gray-800">

                        Gender</label>
                    <select id="gender" name="gender"className={`border rounded-md border-gray-500 p-2 thin md:w-[30vw] w-[45vw] ${details.Gender ? 'bg-gray-200 cursor-not-allowed text-gray-500 border-gray-300' : ''}`}   disabled={!!details.Gender} >
                        <option>{details.Gender ? details?.Gender  : "select gender"} </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div className="col-span-2">
                    <label htmlFor="contactInfo" className="text-sm font-bold p-3 text-gray-800">Contact Info</label>
                    <input id="contactInfo"
                        name="contactInfo"
                        defaultValue={details.phone_number ? details?.phone_number : ""}

                        className={`border rounded-md border-gray-500 p-2 thin md:w-[30vw] w-[45vw] ${details.phone_number ? 'bg-gray-200 cursor-not-allowed text-gray-500 border-gray-300' : ''}`}   disabled={!!details.phone_number} />

                </div>
                <div className="col-span-2">
                    <label htmlFor="address" className="text-sm font-bold p-3 text-gray-800">Address</label>
                    <input id="address"
                        name="address"
                        defaultValue={details.Address ? details?.Address : ""}

                        className={`border rounded-md border-gray-500 p-2 thin md:w-[30vw] w-[45vw] ${details.Address ? 'bg-gray-200 cursor-not-allowed text-gray-500 border-gray-300' : ''}`}/>

                </div>
                <div className="-m-10 border-t pt-10 flex md:justify-end mt-6 p-6 space-x-3 justify-center md:-mb-10 -mb-5">
                    {/* <button type="button" className="bg-gray-200 font-medium py-2.5 px-6 rounded-md text-sm">Cancel</button> */}
                    <button type="submit" className="bg-blue-600 text-white hover:text-white font-medium py-2.5 px-6 rounded-md text-sm">Save</button>
                </div>
            </form>
        </div>
    );
}
