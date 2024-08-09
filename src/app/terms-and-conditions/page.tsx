
export default function ermsAndConditions(){
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl text-left">
        <h1 className="text-4xl font-bold mb-4 text-gray-800 text-center">Terms and Conditions</h1>

        <section className="mt-10">
          <p className="text-lg text-gray-600 mb-6">
            Welcome to Ehealthpulse! These terms and conditions outline the rules and regulations for the use of our website and services.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            <strong>User Responsibilities:</strong><br />
            - Users agree to provide accurate and complete information when registering or using our services.<br />
            - Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account.
          </p>
          {/* Add more terms and conditions items as needed */}
        </section>
      </div>
    </div>
  )
}


