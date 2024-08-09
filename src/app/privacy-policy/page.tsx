
export default function PrivacyPolicy(){
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl text-left">
        <h1 className="text-4xl font-bold mb-4 text-gray-800 text-center">Privacy Policy</h1>

        <section className="mt-10">
          <p className="text-lg text-gray-600 mb-6">
            Ehealthpulse is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            <strong>Information We Collect:</strong><br />
            - Personal Identification Information: Name, email address, phone number, country, state, address, etc.<br />
            - Health Information: Medical history, symptoms, and other health-related data.<br />
            - Technical Data: IP address, browser type, operating system, and browsing behavior.
          </p>
          {/* Add more privacy policy items as needed */}
        </section>
      </div>
    </div>
  )
}
