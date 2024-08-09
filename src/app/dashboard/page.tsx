import Link from 'next/link';
import Image from 'next/image';
import Logo from '../images/logo_img.png';
import { getSession } from '../lib';

interface Booking {
  id: number;
  description: string;
  status: string;
  date: string;
  time: string;
  booking_type: string;
  created_at: string;
  updated_at: string;
  patient: {
    email: string;
  };
  doctor?: {
    full_name: string;
  };
  lab?: {
    name: string;
  };
}

// Replace with your API data fetching logic
const fetchBookings = async (): Promise<Booking[]> => {
  // Simulated fetch function - replace with actual API call
  return [
    {
        id: 1,
        description: 'Consultation with Dr. Smith',
        status: 'Confirmed',
        date: '2024-08-10',
        time: '10:00 AM',
        booking_type: 'consultation',
        created_at: '2024-08-01T12:00:00Z',
        updated_at: '2024-08-01T12:00:00Z',
        patient: {
          email: 'admin@gmail.com'
        },
        doctor: {
          full_name: 'Dr. John Smith'
        },
        // lab: null
      },   {
        id: 1,
        description: 'Consultation with Dr. Smith',
        status: 'Confirmed',
        date: '2024-08-10',
        time: '10:00 AM',
        booking_type: 'consultation',
        created_at: '2024-08-01T12:00:00Z',
        updated_at: '2024-08-01T12:00:00Z',
        patient: {
          email: 'admin@gmail.com'
        },
        doctor: {
          full_name: 'Dr. John Smith'
        },
        // lab: null
      }
    // Add more dummy bookings as needed
  ];
};

export default async function Dashboard() {
  const session = await getSession();
  const bookings = await fetchBookings();

  if (!bookings.length) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <p className="text-xl font-semibold text-gray-500">No bookings available</p>
      </div>
    );
  }

  const bookingTypeColors: { [key: string]: string } = {
    consultation: 'bg-blue-100 text-blue-600',
    home_call: 'bg-yellow-100 text-yellow-600',
    clinic_visit: 'bg-green-100 text-green-600',
    video_call: 'bg-purple-100 text-purple-600',
    lab_test: 'bg-red-100 text-red-600',
  };

  const statusColors: { [key: string]: string } = {
    pending: 'bg-gray-100 text-gray-600',
    confirmed: 'bg-green-100 text-green-600',
    cancelled: 'bg-red-100 text-red-600',
    completed: 'bg-blue-100 text-blue-600',
  };

  return (
    <div>
      <header className="bg-white shadow">
        <div className="container">
          <div className="flex items-center mb-5 space-x-4">
            <Link href="/">
              <div className="overflow-hidden relative rounded-lg shadow-sm w-16 h-12">
                <Image src={Logo} alt="Company Logo" layout="fill" objectFit="cover" />
              </div>
            </Link>
            <div className="flex-1">
              <h3 className="text-xl font-semibold">Ehealthpulse Ltd</h3>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">Empowering Your Health</div>
              </div>
            </div>
          </div>

          <nav>
            <ul className="flex gap-10 justify-center items-center text-xl">
            <li><Link href="/dashboard">Dashboard</Link></li>
            <li><Link href="/dashboard/profile">profile</Link></li>
              {/* Profile link removed */}
            </ul>
          </nav>
        </div>
      </header>

      <main className="py-8 px-5">
        <div className="container">
          {/* Available Booking */}
          <div className="bg-white shadow rounded-md p-6">
            <div className="border-b flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Available Bookings</h2>
              <Link href="#">See all</Link>
            </div>
            <div className="space-y-4">
              {bookings.map((booking) => (
                <div key={booking.id} className={`p-4 rounded-md shadow-md ${statusColors[booking.status]}`}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-sm">Booking Type:</span>
                    <span className={`text-sm ${bookingTypeColors[booking.booking_type]}`}>
                      {booking.booking_type.charAt(0).toUpperCase() + booking.booking_type.slice(1).replace('_', ' ')}
                    </span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-sm">Description:</span>
                    <span className="text-sm">{booking.description}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-sm">Date:</span>
                    <span className="text-sm">{booking.date}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-sm">Time:</span>
                    <span className="text-sm">{booking.time}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-sm">Patient:</span>
                    <span className="text-sm">{booking.patient.email}</span>
                  </div>
                  {booking.doctor && (
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-sm">Doctor:</span>
                      <span className="text-sm">{booking.doctor.full_name}</span>
                    </div>
                  )}
                  {booking.lab && (
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-sm">Lab:</span>
                      <span className="text-sm">{booking.lab.name}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
