"use client"
import Link from 'next/link';
import Image1 from "../images/default_profile_photo.jpg"
import Image from 'next/image';
import { mycontext } from './contextprovider';

// interface Doctor {
//    user: number;
//     firstname: string;
//     lastname: string;
//     doctor_profile_photo: string;
//     doctor_media_photo: string;
//     bios: string;
//     description: string;
//     // support: string;
//     // responsive: string;
//     // price: number;
//     // rating: number;
//     // reviews: number;
// }

// interface BookingProps {
//     doctors: Doctor[];
// }

type proptype={

}
const Booking: React.FC = () => {
    const {visible, setvisible} = mycontext()
    console.log(visible)
    const data = [
        {
            "id": 1,
            "name": "Sarah Blaze",
            "username": "missblaze",
            "verified": true,
            "image": "assets/images/items/item-1.jpg",
            "description": "Developed with Bootstrap 5",
            "support": "6 months technical support",
            "responsive": "Fully responsive template",
            "price": 49.00,
            "rating": 4.8,
            "reviews": 18
        },
        {
            "id": 2,
            "name": "John Doe",
            "username": "johndoe",
            "verified": false,
            "image": "assets/images/items/item-2.jpg",
            "description": "Designed with Tailwind CSS",
            "support": "1 year technical support",
            "responsive": "Mobile-first design",
            "price": 59.00,
            "rating": 4.5,
            "reviews": 12
        },
        {
            "id": 3,
            "name": "Jane Smith",
            "username": "janesmith",
            "verified": true,
            "image": "assets/images/items/item-3.jpg",
            "description": "Customizable themes",
            "support": "3 months technical support",
            "responsive": "Adaptive layout",
            "price": 39.00,
            "rating": 4.2,
            "reviews": 8
        },
        {
            "id": 4,
            "name": "Michael Johnson",
            "username": "michaelj",
            "verified": false,
            "image": "assets/images/items/item-4.jpg",
            "description": "Modern design principles",
            "support": "No technical support",
            "responsive": "Desktop-friendly UI",
            "price": 29.00,
            "rating": 3.9,
            "reviews": 6
        },
        {
            "id": 5,
            "name": "Emily Brown",
            "username": "emilyb",
            "verified": true,
            "image": "assets/images/items/item-5.jpg",
            "description": "Elegant UI components",
            "support": "Lifetime technical support",
            "responsive": "Cross-browser compatibility",
            "price": 79.00,
            "rating": 4.9,
            "reviews": 24
        },
        {
            "id": 6,
            "name": "Chris Anderson",
            "username": "chrisa",
            "verified": true,
            "image": "assets/images/items/item-6.jpg",
            "description": "Accessible web design",
            "support": "6 months technical support",
            "responsive": "Screen reader friendly",
            "price": 59.00,
            "rating": 4.7,
            "reviews": 16
        }
        
    ];


    return (
        <div className="container mx-auto xl:px-60 lg:px-40 px-8 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">Available Doctors</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {data.map((user) => (
            <Link href={`/profile/${user.id}`}>
                        <div
                            key={user.id}
                            className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md"
                        >
                            <div className="relative">
                                <Image
                                
                                   
                                    src={Image1}
                                    alt={user.name}
                                    className="w-full h-[35vh] object-cover"
                                />
                                {user.verified && (
                                    <div className="absolute top-0 right-0 bg-green-500 text-white px-2 py-1 m-2 rounded-md text-xs font-semibold">
                                        Verified 
                                    </div>
                                )}
                            </div>
                            <div className="p-4">
                                <h2 className="text-lg font-semibold">{user.responsive}</h2>
                                <p className="text-gray-500 mb-2">@{user.name}</p>
                                <p className="text-sm text-gray-700 mb-4">{user.description}</p>
                                <div className="flex items-center justify-between">
                                    {/* <div className="text-lg font-semibold">${user.price.toFixed(2)}</div> */}
                                    <div className="flex items-center space-x-1">
                                        {[...Array(Math.floor(user.rating))].map((_, index) => (
                                            <div key={index} className="text-[#4576BC]"></div>
                                        ))}
                                        {[...Array(5 - Math.floor(user.rating))].map((_, index) => (
                                            <div key={index} className="text-gray-300"></div>
                                        ))}
                                        <span className="text-gray-600 ml-1">{user.rating.toFixed(1)} ({user.reviews} reviews)</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#4576BC] px-4 py-3 text-center text-white font-semibold cursor-pointer hover:bg-[#17345c]">
                                Book Now
                            </div>
                        </div>
                    </Link>
                ))}

            </div>
        </div>

        
    );
};

export default Booking;
