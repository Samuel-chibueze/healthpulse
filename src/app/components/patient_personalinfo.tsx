// PatientPersonalInfoForm.js

export default function PatientPersonalInfoForm() {
    return (
        <div className="">
            <div className="mb-8">
                <h3 className="font-semibold text-xl mb-2">personal info </h3>
                <p className="text-sm">This information will be displayed publicly so be careful what you share.</p>
            </div>
            <form className="sm:grid grid-cols-2 gap-x-6 gap-y-4 sm:space-y-0 space-y-2">
                <div>
                    <label htmlFor="firstName" className="text-sm font-medium p-3">First Name</label>
                    <input type="text" id="firstName" name="firstName" className="border-2 rounded-md border-gray-100 p-2 thin w-100" />
                </div>
                <div>
                    <label htmlFor="lastName" className="text-sm font-medium p-3">Last Name</label>
                    <input type="text" id="lastName" name="lastName" className="border-2 rounded-md border-gray-100 p-2 thin w-100" />
                </div>
                <div className="col-span-2">
                    <label htmlFor="aboutMe" className="text-sm font-medium p-3">About Me</label>
                    <input id="aboutMe" name="aboutMe" className="border-2 rounded-md border-gray-100 p-2 thin"></input>
                </div>
                <div>
                    <label htmlFor="email" className="text-sm font-medium p-3">Email Address</label>
                    <input type="email" id="email" name="email" className="border-2 rounded-md border-gray-100 p-2 thin w-100" />
                </div>
                <div>
                    <label htmlFor="phoneNumber" className="text-sm font-medium p-3">Phone Number</label>
                    <input type="text" id="phoneNumber" name="phoneNumber" className="border-2 rounded-md border-gray-100 p-2 thin w-100" />
                </div>
                <div>
                    <label htmlFor="country" className="text-sm font-medium p-3">Country</label>
                    <select id="country" name="country" className="border-2 rounded-md border-gray-100 p-2 thin select-field w-100">
                        <option>Choose country</option>
                        <option>Australia</option>
                        <option>Canada</option>
                        <option>France</option>
                        <option>Germany</option>
                        <option>Switzerland</option>
                        <option>USA</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="city" className="text-sm font-medium p-3">City</label>
                    <select id="city" name="city" className="border-2 rounded-md border-gray-100 p-2 thin w-100">
                        <option>Choose city</option>
                        <option>City A</option>
                        <option>City B</option>
                        <option>City C</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="zipCode" className="text-sm font-medium p-3">ZIP Code</label>
                    <input type="text" id="zipCode" name="zipCode" className="border-2 rounded-md border-gray-100 p-2 thin w-100" />
                </div>
                <div>
                    <label htmlFor="address1" className="text-sm font-medium p-3">Address 1</label>
                    <input type="text" id="address1" name="address1" className="border-2 rounded-md border-gray-100 p-2 thin w-100" />
                </div>
                <div>
                    <label htmlFor="address2" className="text-sm font-medium p-3">Address 2</label>
                    <input type="text" id="address2" name="address2" className="border-2 rounded-md border-gray-100 p-2 thin w-100" />
                </div>
                <div className="col-span-2 checkbox my-2">
                    <input type="checkbox" id="agreeTerms" name="agreeTerms" className="checkbox-input" />
                    <label htmlFor="agreeTerms" className="text-sm checkbox-label"><span className="checkbox-icon"></span> I agree to the <a href="#" className="font-semibold">Terms and Conditions</a></label>
                </div>
                <div className="-m-10 border-t flex md:justify-end mt-6 p-6 space-x-3 justify-center md:-mb-10 -mb-5">
                    <button type="button" className="bg-gray-200 font-medium py-2.5 px-6 rounded-md text-sm">Cancel</button>
                    <button type="submit" className="bg-blue-600 text-white hover:text-white font-medium py-2.5 px-6 rounded-md text-sm">Save</button>
                </div>
            </form>
        </div>
    );
}
