
import React from 'react';
import { Link } from 'react-router-dom';

const ApplicantPortal: React.FC = () => {
  return (
    <div className="bg-gray-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Join Our Team</h1>
          <p className="text-lg text-gray-600">Flexible hours, job-based pay, and a great working environment.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="bg-[#008B94] p-10 text-white">
              <h3 className="text-2xl font-bold mb-6">Why Work With Us?</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <span className="bg-teal-400 p-1 rounded-md mr-4 mt-1 text-teal-900">✓</span>
                  <p className="font-medium">Competitive pay per job completed</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-teal-400 p-1 rounded-md mr-4 mt-1 text-teal-900">✓</span>
                  <p className="font-medium">Flexible scheduling around your life</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-teal-400 p-1 rounded-md mr-4 mt-1 text-teal-900">✓</span>
                  <p className="font-medium">Growth opportunities in local management</p>
                </li>
              </ul>
              
              <div className="mt-16 p-6 bg-teal-800 rounded-2xl border border-teal-600">
                <p className="text-sm italic opacity-90">
                  "I love the flexibility. I can pick up cleanout jobs when I need extra income, and the team is always respectful."
                </p>
                <p className="mt-4 font-bold">— Current Team Member</p>
              </div>
            </div>

            <div className="lg:col-span-2 p-10 flex flex-col justify-center items-center text-center">
              <div className="mb-8">
                <div className="w-24 h-24 bg-teal-50 text-[#008B94] rounded-full flex items-center justify-center mx-auto mb-8 text-4xl shadow-inner">
                  🤝
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Connect With Hiring</h3>
                <p className="text-gray-600 max-w-sm mx-auto text-lg">
                  We handle all our employment applications directly through Facebook Messenger. It's the fastest way to get started!
                </p>
              </div>
              
              <a 
                href="https://www.facebook.com/people/Point-On-Total-Clean-Solutions/61586844317220"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-md bg-[#008B94] text-white py-6 rounded-2xl font-bold text-2xl hover:brightness-110 transition-all shadow-xl hover:shadow-teal-100 uppercase tracking-widest"
              >
                APPLY ON FACEBOOK
              </a>
              
              <Link to="/" className="mt-10 text-gray-400 hover:text-[#008B94] font-medium transition-colors">
                ← Back to main site
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantPortal;
