export default function LifestyleInformationForm() {
    return (
        <div className="">
            <div className="mb-8">
                <h3 className="font-semibold text-xl mb-2">Lifestyle Information</h3>
                <p className="text-sm">Please provide your lifestyle information.</p>
            </div>
            <form className="sm:grid grid-cols-2 gap-x-6 gap-y-4 sm:space-y-0 space-y-2">
                <div className="col-span-2">
                    <label htmlFor="smokingStatus" className="text-sm font-medium p-3">Smoking Status</label>
                    <select id="smokingStatus" name="smokingStatus" className="border-2 rounded-md border-gray-100 p-2 thin w-full">
                        <option value="">Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="col-span-2">
                    <label htmlFor="alcoholConsumption" className="text-sm font-medium p-3">Alcohol Consumption</label>
                    <select id="alcoholConsumption" name="alcoholConsumption" className="border-2 rounded-md border-gray-100 p-2 thin w-full">
                        <option value="">Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="col-span-2">
                    <label htmlFor="diet" className="text-sm font-medium p-3">Diet</label>
                    <input type="text" id="diet" name="diet" className="border-2 rounded-md border-gray-100 p-2 thin w-full" />
                </div>
                <div className="col-span-2">
                    <label htmlFor="exerciseHabits" className="text-sm font-medium p-3">Exercise Habits</label>
                    <input type="text" id="exerciseHabits" name="exerciseHabits" className="border-2 rounded-md border-gray-100 p-2 thin w-full" />
                </div>
                <div className="-m-10 border-t pt-10 flex md:justify-end mt-6 p-6 space-x-3 justify-center md:-mb-10 -mb-5">
                    <button type="button" className="bg-gray-200 font-medium py-2.5 px-6 rounded-md text-sm">Cancel</button>
                    <button type="submit" className="bg-blue-600 text-white hover:text-white font-medium py-2.5 px-6 rounded-md text-sm">Save</button>
                </div>
            </form>
        </div>
    );
}
