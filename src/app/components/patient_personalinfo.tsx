import { handleupdatepatientinfo } from '@/app/serveractions';
import toast from 'react-hot-toast';
import { useState } from 'react';

interface PatientDetails {
    id?: number;
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
    const [form, setForm] = useState<PatientDetails>({ ...details });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        const user = details.id
        console.log(user)
        e.preventDefault();
        if (!details.id) return;
              console.log(form)
        try {
            const response = await handleupdatepatientinfo(user, form)
            if (response?.success){
                toast.success("Your personal information has been updated");
            } else {
                toast.error('Wrong input! Check your input and try again.');
            }
        } catch (error) {
            toast.error('An error occurred while updating your information.');
        }
    };

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="mb-8">
                <h2 className="font-semibold text-xl mb-2">Patient Personal Information</h2>
                <p className="text-sm">Please provide your personal information.</p>
            </div>
            <form className="flex flex-col justify-center gap-3 items-center" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="first_name" className="text-sm font-bold p-3 text-gray-800 w-1">First Name</label>
                    <input
                        id="first_name"
                        name="first_name"
                        value={form.first_name || details.first_name}
                        onChange={handleInputChange}
                        className={`border rounded-md border-gray-500 p-2 thin md:w-[30vw] w-[45vw] ${form.first_name} ? 'bg-gray-200 cursor-not-allowed text-gray-500 border-gray-300' : ''}`}
                        disabled={!!details.first_name}
                    />
                </div>
                <div>
                    <label htmlFor="last_name" className="text-sm font-bold p-3 text-gray-800">Last Name</label>
                    <input
                        id="last_name"
                        name="last_name"
                        value={form.last_name || details.last_name}
                        onChange={handleInputChange}
                        className={`border rounded-md border-gray-500 p-2 thin md:w-[30vw] w-[45vw] ${form.last_name ? 'bg-gray-200 cursor-not-allowed text-gray-500 border-gray-300' : ''}`}
                        disabled={!!details.last_name}
                    />
                </div>
                <div>
                    <label htmlFor="email" className="text-sm font-bold p-3 text-gray-800">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email || details.email}
                        onChange={handleInputChange}
                        className={`border rounded-md border-gray-500 p-2 thin md:w-[30vw] w-[45vw] ${form.email ? 'bg-gray-200 cursor-not-allowed text-gray-500 border-gray-300' : ''}`}
                        disabled={!!details.email}
                    />
                </div>
                <div>
                    <label htmlFor="country" className="text-sm font-bold p-3 text-gray-800">Country</label>
                    <input
                        id="country"
                        name="country"
                        value={form.country || details.country}
                        onChange={handleInputChange}
                        className={`border rounded-md border-gray-500 p-2 thin md:w-[30vw] w-[45vw] ${form.country ? 'bg-gray-200 cursor-not-allowed text-gray-500 border-gray-300' : ''}`}
                        disabled={!!details.country}
                    />
                </div>
                <div>
                    <label htmlFor="city" className="text-sm font-bold p-3 text-gray-800">City</label>
                    <input
                        id="city"
                        name="city"
                        value={form.city || details.city}
                        onChange={handleInputChange}
                        className={`border rounded-md border-gray-500 p-2 thin md:w-[30vw] w-[45vw] ${form.city ? 'bg-gray-200 cursor-not-allowed text-gray-500 border-gray-300' : ''}`}
                        disabled={!!details.city}
                    />
                </div>
                <div>
                    <label htmlFor="Date_of_birth" className="text-sm font-bold p-3 text-gray-800">Date of Birth</label>
                    <input
                        type="date"
                        id="Date_of_birth"
                        name="Date_of_birth"
                        value={form.Date_of_birth || details.Date_of_birth}
                        onChange={handleInputChange}
                        className={`border rounded-md border-gray-500 p-2 thin md:w-[30vw] w-[45vw] ${form.Date_of_birth ? 'bg-gray-200 cursor-not-allowed text-gray-500 border-gray-300' : ''}`}
                        disabled={!!details.Date_of_birth}
                    />
                </div>
                <div>
                    <label htmlFor="Gender" className="text-sm font-bold p-3 text-gray-800">Gender</label>
                    <select
                        id="Gender"
                        name="Gender"
                        value={form.Gender || details.Gender}
                        onChange={handleInputChange}
                        className={`border rounded-md border-gray-500 p-2 thin md:w-[30vw] w-[45vw] ${form.Gender ? 'bg-gray-200 cursor-not-allowed text-gray-500 border-gray-300' : ''}`}
                        disabled={!!details.Gender}
                    >
                        <option>Select gender</option>
                        <option value="male" disabled={!!details.Gender}>Male</option>
                        <option value="female" disabled={!!details.Gender}>Female</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="phone_number" className="text-sm font-bold p-3 text-gray-800">Contact Info</label>
                    <input
                        id="phone_number"
                        name="phone_number"
                        value={form.phone_number || details.phone_number}
                        onChange={handleInputChange}
                        className={`border rounded-md border-gray-500 p-2 thin md:w-[30vw] w-[45vw] ${form.phone_number ? 'bg-gray-200 cursor-not-allowed text-gray-500 border-gray-300' : ''}`}
                        disabled={!!details.phone_number}
                    />
                </div>
                <div>
                    <label htmlFor="Address" className="text-sm font-bold p-3 text-gray-800">Address</label>
                    <input
                        id="Address"
                        name="Address"
                        value={form.Address || details.Address}
                        onChange={handleInputChange}
                        className={`border rounded-md border-gray-500 p-2 thin md:w-[30vw] w-[45vw] ${form.Address ? 'bg-gray-200 cursor-not-allowed text-gray-500 border-gray-300' : ''}`}
                        disabled={!!details.Address}
                    />
                </div>
                <div className="-m-10 border-t pt-10 flex md:justify-end mt-6 p-6 space-x-3 justify-center md:-mb-10 -mb-5">
                    <button type="submit" className="bg-blue-600 text-white hover:text-white font-medium py-2.5 px-6 rounded-md text-sm">Save</button>
                </div>
            </form>
        </div>
    );
}
