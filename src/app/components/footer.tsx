import Link from "next/link";

const Footer: React.FC = () => {
    return (
      
                <footer className="bg-gray-900 text-white py-10">
                    <div className="container mx-auto px-8">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div className="mb-4 md:mb-0 text-center md:text-left">
                                <h2 className="text-2xl font-bold">e-healthpulse</h2>
                                <p className="text-sm mt-2">Connecting you with health solutions.</p>
                            </div>
                            <div className="flex space-x-6 text-sm">
                                <Link href="/faq" className="hover:text-gray-300 transition duration-300">
                                  FAQ
                                </Link>
                                <Link href="/privacy-policy" className="hover:text-gray-300 transition duration-300">
                                   Privacy Policy
                                </Link>
                                <Link href="/terms-and-conditions" className="hover:text-gray-300 transition duration-300">
                                 Terms & Conditions
                                </Link>
                            </div>
                        </div>
                        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
                            <p className="text-sm text-gray-400">© 2024 e-healthpulse.com. All rights reserved.</p>
                            <div className="mt-4 flex justify-center space-x-4">
                                <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                                        <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.764v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0z" />
                                    </svg>
                                </Link>
                                <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                                        <path d="M23.954 4.569c-.885.392-1.83.654-2.825.775 1.014-.609 1.794-1.574 2.163-2.723-.949.555-2.005.959-3.127 1.175-.897-.956-2.178-1.555-3.594-1.555-2.717 0-4.917 2.2-4.917 4.917 0 .385.045.76.127 1.122C7.688 8.094 4.064 6.13 1.64 3.161c-.423.725-.666 1.562-.666 2.475 0 1.71.87 3.216 2.188 4.099-.807-.026-1.566-.248-2.228-.616v.062c0 2.385 1.693 4.374 3.946 4.828-.413.111-.85.171-1.296.171-.314 0-.615-.03-.911-.086.617 1.926 2.407 3.33 4.526 3.37-1.662 1.305-3.757 2.082-6.036 2.082-.392 0-.779-.023-1.17-.068 2.155 1.381 4.711 2.188 7.457 2.188 8.94 0 13.836-7.405 13.836-13.836 0-.211 0-.422-.015-.633.951-.689 1.777-1.553 2.436-2.539z" />
                                    </svg>
                                </Link>
                                <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.33 3.608 1.305.975.975 1.243 2.241 1.305 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.33 2.633-1.305 3.608-.975.975-2.241 1.243-3.608 1.305-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.33-3.608-1.305-.975-.975-1.243-2.241-1.305-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.33-2.633 1.305-3.608.975-.975 2.241-1.243 3.608-1.305 1.266-.058 1.646-.07 4.85-.07M12 0C8.741 0 8.333.015 7.052.072 5.78.129 4.629.393 3.672 1.35 2.715 2.307 2.451 3.459 2.394 4.73 2.337 6.011 2.322 6.418 2.322 9.675s.015 3.664.072 4.945c.057 1.271.321 2.423 1.278 3.38.957.957 2.109 1.221 3.38 1.278 1.281.057 1.688.072 4.945.072s3.664-.015 4.945-.072c1.271-.057 2.423-.321 3.38-1.278.957-.957 1.221-2.109 1.278-3.38.057-1.281.072-1.688.072-4.945s-.015-3.664-.072-4.945c-.057-1.271-.321-2.423-1.278-3.38-.957-.957-2.109-1.221-3.38-1.278C15.664.015 15.257 0 12 0z" />
                                        <path d="M12 5.838A6.162 6.162 0 005.838 12 6.162 6.162 0 0012 18.162 6.162 6.162 0 0018.162 12 6.162 6.162 0 0012 5.838m0 10.137A3.975 3.975 0 018.025 12 3.975 3.975 0 0112 8.025 3.975 3.975 0 0115.975 12 3.975 3.975 0 0112 15.975zM18.406 4.594a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </footer>
  
    
        
    );
};

export default Footer;
