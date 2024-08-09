
export default function FAQ(){
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl text-left">
        <h1 className="text-4xl font-bold mb-4 text-gray-800 text-center">Frequently Asked Questions (FAQ)</h1>

        <section className="mt-10">
          <p className="text-lg text-gray-600 mb-6">
            <strong>1. What is ehealthpulse?</strong><br />
            Ehealthpulse is an online healthcare platform that streamlines online booking, home sample collection, and electronic health records to provide a seamless healthcare experience.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            <strong>2. How do I create an account?</strong><br />
            Visit the ehealthpulse website, click on 'Sign Up', and follow the prompts to create your account.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            <strong>3. How does ehealthpulse work?</strong><br />
            Ehealthpulse allows users to book appointments with healthcare providers online, schedule home sample collections for lab tests, and access their electronic health records from any device.
          </p>
          {/* Add more FAQ items as needed */}
        </section>
      </div>
    </div>
  )
}