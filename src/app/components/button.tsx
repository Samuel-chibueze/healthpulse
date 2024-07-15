
import { useFormStatus } from 'react-dom';

export default function button (){
    const { pending, data } = useFormStatus();
    return(
        <button
                type="submit"
                disabled={pending}
               
                 className={!pending?`bg-green-600 font-thin p-2.5 mt-5 rounded-md text-center text-white w-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-600`:`bg-green-700 font-bold p-2.5 mt-5 rounded-md text-center text-white w-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-600`}
            >
             {pending ? 'Submitting...' : 'Submit'}
            </button>
    );
}