
import React, { useState } from 'react';
import { getAIEstimate } from '../geminiService';

const EstimateBot: React.FC = () => {
  const [type, setType] = useState('General Cleaning');
  const [details, setDetails] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!details.trim()) return;
    
    setLoading(true);
    const estimate = await getAIEstimate(type, details);
    setResult(estimate || null);
    setLoading(false);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
      <div className="bg-[#008B94] p-6 text-white">
        <h3 className="text-xl font-bold">AI Estimate Assistant</h3>
        <p className="text-teal-50 text-sm opacity-90">Describe your project for a quick overview.</p>
      </div>
      
      <div className="p-6">
        {!result ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Service Type</label>
              <select 
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#008B94] focus:border-transparent outline-none transition-all"
              >
                <option>Apartment Cleanout</option>
                <option>Garage Cleanout</option>
                <option>Junk Removal</option>
                <option>Total Deep Cleaning</option>
                <option>Office/Commercial</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Project Details</label>
              <textarea 
                placeholder="e.g., 2 bedroom apartment, lots of heavy furniture, needs to be done by Friday..."
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#008B94] focus:border-transparent outline-none transition-all resize-none"
              />
            </div>
            <button 
              type="submit"
              disabled={loading}
              className={`w-full py-4 rounded-xl font-bold text-white transition-all shadow-md ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#008B94] hover:brightness-110 shadow-teal-100'}`}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Calculating...
                </span>
              ) : 'Get Quick AI Estimate'}
            </button>
          </form>
        ) : (
          <div className="animate-fade-up">
            <div className="bg-teal-50 p-4 rounded-xl border border-teal-100 text-gray-800 leading-relaxed mb-6 whitespace-pre-wrap">
              {result}
            </div>
            <button 
              onClick={() => {setResult(null); setDetails('');}}
              className="text-[#008B94] font-semibold hover:underline"
            >
              Start over
            </button>
            <a 
              href="https://www.facebook.com/people/Point-On-Total-Clean-Solutions/61586844317220"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 text-center bg-gray-900 text-white py-3 rounded-xl font-bold hover:bg-black transition-colors"
            >
              Finalize on Facebook
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default EstimateBot;
