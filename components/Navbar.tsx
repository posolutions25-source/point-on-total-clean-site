
import React from 'react';
import { Link } from 'react-router-dom';

const LogoSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Truck Bed Container */}
    <path d="M40 80 Q40 60 60 60 L180 60 L180 180 L40 180 Z" fill="#008B94" />
    <text x="110" y="105" fontFamily="Poppins, Arial" fontWeight="bold" fontSize="32" fill="white" textAnchor="middle">POS</text>
    <text x="110" y="145" fontFamily="Poppins, Arial" fontWeight="bold" fontSize="26" fill="white" textAnchor="middle">Total Clean</text>
    
    {/* Truck Cab */}
    <path d="M190 60 L190 180 L300 180 L300 150 Q300 80 260 80 L190 80" fill="#2D3436" />
    {/* Window */}
    <path d="M210 95 L255 95 Q285 95 285 130 L285 140 L210 140 Z" fill="#F0F0F0" opacity="0.9" />
    
    {/* Wheels */}
    <circle cx="100" cy="195" r="24" fill="#2D3436" />
    <circle cx="100" cy="195" r="12" fill="#636E72" />
    <circle cx="260" cy="195" r="24" fill="#2D3436" />
    <circle cx="260" cy="195" r="12" fill="#636E72" />
    
    {/* Unified Broom */}
    <g transform="translate(130, 185) rotate(-35)">
      {/* Handle */}
      <rect x="-4" y="-140" width="8" height="150" rx="4" fill="#F0F0F0" stroke="#2D3436" strokeWidth="1.5" />
      {/* Head */}
      <path d="M-25 10 L25 10 L35 35 L-35 35 Z" fill="#2D3436" />
      {/* Bristles */}
      <g stroke="#2D3436" strokeWidth="3" strokeLinecap="round">
        <line x1="-30" y1="35" x2="-45" y2="65" />
        <line x1="-20" y1="35" x2="-32" y2="65" />
        <line x1="-10" y1="35" x2="-18" y2="65" />
        <line x1="0" y1="35" x2="0" y2="65" />
        <line x1="10" y1="35" x2="18" y2="65" />
        <line x1="20" y1="35" x2="32" y2="65" />
        <line x1="30" y1="35" x2="45" y2="65" />
      </g>
    </g>
  </svg>
);

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 glass-morphism shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center group">
              <div className="flex items-center justify-center">
                <LogoSVG className="h-16 w-auto" />
              </div>
              <span className="ml-2 font-bold text-xl text-gray-800 hidden sm:block">Point On Total Clean</span>
            </Link>
          </div>
          {/* Apply Now button removed as requested */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
