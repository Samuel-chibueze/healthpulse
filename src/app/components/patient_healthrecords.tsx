export default function HealthRecordsForm() {
    return (
        <div className="">
            <div className="mb-8">
                <h3 className="font-semibold text-xl mb-2">Health Records</h3>
                <p className="text-sm">Please provide your health records information.</p>
            </div>
            <form className="sm:grid grid-cols-2 gap-x-6 gap-y-4 sm:space-y-0 space-y-2">
                <div className="col-span-2">
                    <label htmlFor="previousLabResults" className="text-sm font-medium p-3">Previous Lab Results</label>
                    <select id="previousLabResults" name="previousLabResults" className="border-2 rounded-md border-gray-100 p-2 thin w-full">
                        <option value="">Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="col-span-2">
                    <label htmlFor="imagingReports" className="text-sm font-medium p-3">Imaging Reports</label>
                    <select id="imagingReports" name="imagingReports" className="border-2 rounded-md border-gray-100 p-2 thin w-full">
                        <option value="">Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="col-span-2">
                    <label htmlFor="prescriptionHistory" className="text-sm font-medium p-3">Prescription History</label>
                    <select id="prescriptionHistory" name="prescriptionHistory" className="border-2 rounded-md border-gray-100 p-2 thin w-full">
                        <option value="">Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="-m-10 border-t pt-10 flex md:justify-end mt-6 p-6 space-x-3 justify-center md:-mb-10 -mb-5">
                    <button type="button" className="bg-gray-200 font-medium py-2.5 px-6 rounded-md text-sm">Cancel</button>
                    <button type="submit" className="bg-blue-600 text-white hover:text-white font-medium py-2.5 px-6 rounded-md text-sm">Save</button>
                </div>
            </form>
        </div>
    );
}
