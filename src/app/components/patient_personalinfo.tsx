import {handleupdatepatientinfo} from '@/app/serveractions'
import toast from 'react-hot-toast';

interface PatientDetails {
    user?: number,
    firstname?: string;
    lastname?: string;
    email?: string;
    country?: string;
    city?: string;
    Date_of_birth?: string;
    Gender?: string;
    Contact_info?: string;
    Address?: string;
}
interface PatientPersonalInfoProps {
    details: PatientDetails;
}


export default function PatientPersonalInfoForm({details}: PatientPersonalInfoProps) {
    console.log(details)
   
    const handleupdate = async(formData:FormData)=>{
        const user = details?.user as number
        console.log(user)
         console.log(details?.user)
        const handleupdate = await handleupdatepatientinfo(user,formData)
       {handleupdate?.success?toast.success("your personal information has been updated"):toast.error('wrong input! check your input and try again.')}
    }

    return (  
        <div className="">
            <div className="mb-8">
                <h2 className="font-semibold text-xl mb-2">Patient Personal Information</h2>
                <p className="text-sm">Please provide your personal information.</p>
            </div>
            <form className="sm:grid grid-cols-2 gap-x-6 gap-y-4 sm:space-y-0 space-y-2" action={handleupdate}>
                <div>
                    <label htmlFor="firstname" className="text-sm font-medium p-3">First Name</label>
                    <input id="firstname"
                     name="firstname" 
                      defaultValue={details.firstname?details?.firstname:""} 
                      className={details.firstname&&``} />
                </div>
                <div>
                    <label htmlFor="lastname" className="text-sm font-medium p-3">Last Name</label>
                    <input id="lastname"
                     name="lastname" 
                     defaultValue={details.lastname?details?.lastname:""} 
                     className="border-2 rounded-md border-gray-100 p-2 thin w-100" />
                </div>
                <div>
                    <label htmlFor="email" className="text-sm font-medium p-3">Email</label>
                    <input type="email"
                     id="email"
                     name="email"
                     defaultValue={details.email?details?.email:""} 
                     className="border-2 rounded-md border-gray-100 p-2 thin w-100" />
                </div>
                <div>
                    <label htmlFor="country" className="text-sm font-medium p-3">Country</label>
                    <input id="country"
                     name="country" 
                      defaultValue={details.country?details?.country:""}
                       className="border-2 rounded-md border-gray-100 p-2 thin w-100" />
                </div>
                <div>
                    <label htmlFor="city" className="text-sm font-medium p-3">City</label>
                    <input id="city" 
                    name="city" 
                    defaultValue={details.city?details?.city:""} 
                    className="border-2 rounded-md border-gray-100 p-2 thin w-100" />
                </div>
                <div>
                    <label htmlFor="dateOfBirth" className="text-sm font-medium p-3">Date of Birth</label>
                    <input type="date" 
                    id="dateOfBirth"
                     name="dateOfBirth" 
                     defaultValue={details.Date_of_birth?details.Date_of_birth:""}
                     className="border-2 rounded-md border-gray-100 p-2 thin w-100" />
                </div>
                <div>
                    <label htmlFor="gender" className="text-sm font-medium p-3">Gender</label>
                    <select id="gender" name="gender" className="border-2 rounded-md border-gray-100 p-2 thin w-full">
                        <option>Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div className="col-span-2">
                    <label htmlFor="contactInfo" className="text-sm font-medium p-3">Contact Info</label>
                    <input id="contactInfo" 
                    name="contactInfo" 
                    defaultValue={details.Contact_info?details?.Contact_info:""} 

                    className="border-2 rounded-md border-gray-100 p-2 thin w-full" />
                </div>
                <div className="col-span-2">
                    <label htmlFor="address" className="text-sm font-medium p-3">Address</label>
                    <input id="address"
                     name="address" 
                     defaultValue={details.Address?details?.Address:""} 

                     className="border-2 rounded-md border-gray-100 p-2 thin w-full" />
                </div>
                <div className="-m-10 border-t pt-10 flex md:justify-end mt-6 p-6 space-x-3 justify-center md:-mb-10 -mb-5">
                    {/* <button type="button" className="bg-gray-200 font-medium py-2.5 px-6 rounded-md text-sm">Cancel</button> */}
                    <button type="submit" className="bg-blue-600 text-white hover:text-white font-medium py-2.5 px-6 rounded-md text-sm">Save</button>
                </div>
            </form>
        </div>
    );
}
