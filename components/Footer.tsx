
import React from 'react';

const LogoSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Truck Bed Container */}
    <path d="M40 80 Q40 60 60 60 L180 60 L180 180 L40 180 Z" fill="#008B94" />
    <text x="110" y="105" fontFamily="Poppins, Arial" fontWeight="bold" fontSize="32" fill="white" textAnchor="middle">POS</text>
    <text x="110" y="145" fontFamily="Poppins, Arial" fontWeight="bold" fontSize="26" fill="white" textAnchor="middle">Total Clean</text>
    
    {/* Truck Cab */}
    <path d="M190 60 L190 180 L300 180 L300 150 Q300 80 260 80 L190 80" fill="#E2E8F0" />
    
    {/* Wheels */}
    <circle cx="100" cy="195" r="24" fill="#E2E8F0" />
    <circle cx="260" cy="195" r="24" fill="#E2E8F0" />
    
    {/* Unified Broom */}
    <g transform="translate(130, 185) rotate(-35)">
      {/* Handle */}
      <rect x="-4" y="-140" width="8" height="150" rx="4" fill="#CBD5E0" stroke="#1A202C" strokeWidth="1.5" />
      {/* Head */}
      <path d="M-25 10 L25 10 L35 35 L-35 35 Z" fill="#1A202C" />
      {/* Bristles */}
      <g stroke="#1A202C" strokeWidth="3" strokeLinecap="round">
        <line x1="-30" y1="35" x2="-45" y2="65" />
        <line x1="0" y1="35" x2="0" y2="65" />
        <line x1="30" y1="35" x2="45" y2="65" />
      </g>
    </g>
  </svg>
);

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-transparent rounded-md">
                <LogoSVG className="h-12 w-auto" />
              </div>
              <span className="text-xl font-bold tracking-tight">Point On Total Clean</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Professional cleanouts, junk removal, and total cleaning solutions. Serving our community with respect and efficiency.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Connect With Us</h4>
            <div className="space-y-4">
              <a 
                href="https://www.facebook.com/people/Point-On-Total-Clean-Solutions/61586844317220" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-[#008B94] transition-colors"
              >
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                Facebook Page
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <p className="text-gray-400">Available for appointments and emergency cleanouts.</p>
            <p className="mt-4 text-[#008B94] font-semibold">Message us on Facebook for immediate quotes.</p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {year} Point On Total Clean Solutions. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
