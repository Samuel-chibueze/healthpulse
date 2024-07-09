export default function PatientPersonalInfoForm() {
    return (
        <div className="">
            <div className="mb-8">
                <h3 className="font-semibold text-xl mb-2">Patient Personal Information</h3>
                <p className="text-sm">Please provide your personal information.</p>
            </div>
            <form className="sm:grid grid-cols-2 gap-x-6 gap-y-4 sm:space-y-0 space-y-2">
                <div>
                    <label htmlFor="firstname" className="text-sm font-medium p-3">First Name</label>
                    <input id="firstname" name="firstname" className="border-2 rounded-md border-gray-100 p-2 thin w-100" />
                </div>
                <div>
                    <label htmlFor="lastname" className="text-sm font-medium p-3">Last Name</label>
                    <input id="lastname" name="lastname" className="border-2 rounded-md border-gray-100 p-2 thin w-100" />
                </div>
                <div>
                    <label htmlFor="email" className="text-sm font-medium p-3">Email</label>
                    <input type="email" id="email" name="email" className="border-2 rounded-md border-gray-100 p-2 thin w-100" />
                </div>
                <div>
                    <label htmlFor="country" className="text-sm font-medium p-3">Country</label>
                    <input id="country" name="country" className="border-2 rounded-md border-gray-100 p-2 thin w-100" />
                </div>
                <div>
                    <label htmlFor="city" className="text-sm font-medium p-3">City</label>
                    <input id="city" name="city" className="border-2 rounded-md border-gray-100 p-2 thin w-100" />
                </div>
                <div>
                    <label htmlFor="dateOfBirth" className="text-sm font-medium p-3">Date of Birth</label>
                    <input type="date" id="dateOfBirth" name="dateOfBirth" className="border-2 rounded-md border-gray-100 p-2 thin w-100" />
                </div>
                <div>
                    <label htmlFor="gender" className="text-sm font-medium p-3">Gender</label>
                    <select id="gender" name="gender" className="border-2 rounded-md border-gray-100 p-2 thin w-full">
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="col-span-2">
                    <label htmlFor="contactInfo" className="text-sm font-medium p-3">Contact Info</label>
                    <input id="contactInfo" name="contactInfo" className="border-2 rounded-md border-gray-100 p-2 thin w-full" />
                </div>
                <div className="col-span-2">
                    <label htmlFor="address" className="text-sm font-medium p-3">Address</label>
                    <input id="address" name="address" className="border-2 rounded-md border-gray-100 p-2 thin w-full" />
                </div>
                <div className="-m-10 border-t pt-10 flex md:justify-end mt-6 p-6 space-x-3 justify-center md:-mb-10 -mb-5">
                    <button type="button" className="bg-gray-200 font-medium py-2.5 px-6 rounded-md text-sm">Cancel</button>
                    <button type="submit" className="bg-blue-600 text-white hover:text-white font-medium py-2.5 px-6 rounded-md text-sm">Save</button>
                </div>
            </form>
        </div>
    );
}
