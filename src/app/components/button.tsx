
import { useFormStatus } from 'react-dom';
import { Ring } from 'react-css-spinners'

export default function button() {
    const { pending, data } = useFormStatus();
    return (
        <button
            type="submit"
            disabled={pending}

            className={!pending ? `bg-[#4576BC] font-thin p-2.5 mt-5 rounded-md text-center text-white w-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-[#4576BC]` : `bg-blue-300 font-bold p-2.5 mt-5 rounded-md text-center text-white w-full hover:bg-[#4576BC] focus:outline-none focus:ring-2 focus:ring-[#4576BC]`}
        >
            {pending ? <Ring
    color="white"
    size={25}
    thickness={2}
  />: 'Submit'}
        </button>
    );
}