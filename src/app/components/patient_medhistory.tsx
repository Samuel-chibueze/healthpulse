export default function MedicalHistoryForm() {
    return (
        <div className="">
            <div className="mb-8">
                <h3 className="font-semibold text-xl mb-2">Medical History</h3>
                <p className="text-sm">Please provide your medical history information.</p>
            </div>
            <form className="sm:grid grid-cols-2 gap-x-6 gap-y-4 sm:space-y-0 space-y-2">
                <div className="col-span-2">
                    <label htmlFor="previousDiagnoses" className="text-sm font-medium p-3">Previous Diagnoses</label>
                    <select id="previousDiagnoses" name="previousDiagnoses" className="border-2 rounded-md border-gray-100 p-2 thin w-full">
                        <option value="">Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="col-span-2">
                    <label htmlFor="surgeries" className="text-sm font-medium p-3">Surgeries</label>
                    <select id="surgeries" name="surgeries" className="border-2 rounded-md border-gray-100 p-2 thin w-full">
                        <option value="">Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="col-span-2">
                    <label htmlFor="medications" className="text-sm font-medium p-3">Medications</label>
                    <select id="medications" name="medications" className="border-2 rounded-md border-gray-100 p-2 thin w-full">
                        <option value="">Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="col-span-2">
                    <label htmlFor="allergies" className="text-sm font-medium p-3">Allergies</label>
                    <select id="allergies" name="allergies" className="border-2 rounded-md border-gray-100 p-2 thin w-full">
                        <option value="">Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="col-span-2">
                    <label htmlFor="familyMedicalHistory" className="text-sm font-medium p-3">Family Medical History</label>
                    <select id="familyMedicalHistory" name="familyMedicalHistory" className="border-2 rounded-md border-gray-100 p-2 thin w-full">
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
