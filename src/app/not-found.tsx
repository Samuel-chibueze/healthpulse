
import Link from 'next/link';

export default function Custom404(){
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <h2 className="text-2xl font-semibold mb-8">Page Not Found</h2>
            <p className="text-lg mb-4">Oops! The page you're looking for doesn't exist.</p>
            <Link href="/" className="bg-blue-300 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300">

                    Go Back to Homepage
            
            </Link>
        </div>
    )
}


