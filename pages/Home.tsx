
import React from 'react';
import EstimateBot from '../components/EstimateBot';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2000" 
            alt="Cleaning services" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Content */}
            <div className="max-w-2xl animate-fade-up">
              <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
                Total Clean Solutions <br/>
                <span className="text-[#008B94]">Point On. Every Time.</span>
              </h1>
              <p className="text-xl text-gray-200 mb-10 leading-relaxed">
                Professional cleanouts, junk removal, and deep cleaning services. 
                We transform cluttered spaces into pristine environments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://www.facebook.com/people/Point-On-Total-Clean-Solutions/61586844317220"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#008B94] text-white px-8 py-4 rounded-xl font-bold text-center hover:brightness-110 transition-all shadow-xl hover:scale-105 uppercase tracking-wider"
                >
                  APPLY ON FACEBOOK
                </a>
              </div>
            </div>

            {/* Right Content - Hiring Text */}
            <div className="lg:w-1/3 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative inline-block lg:rotate-3 transition-transform hover:rotate-0 duration-500">
                <div className="absolute -inset-2 bg-[#008B94] rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-gray-900/40 backdrop-blur-md border-4 border-[#008B94] p-8 lg:p-10 rounded-2xl shadow-2xl text-center lg:text-right">
                  <h2 className="text-5xl md:text-6xl xl:text-7xl font-black text-white uppercase leading-none tracking-tighter">
                    NOW <br/>
                    HIRING <br/>
                    <span className="text-[#008B94] text-3xl md:text-4xl xl:text-5xl block mt-2">— JOIN OUR TEAM</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="why-us" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <div className="w-20 h-1.5 bg-[#008B94] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: 'Reliable Specialists',
                desc: 'Specialized in apartment cleanouts, garage junk removal, and total residential cleaning.',
                icon: '⚡'
              },
              {
                title: 'Multicultural Team',
                desc: 'A respectful, trustworthy group representing the diverse community we serve.',
                icon: '🤝'
              },
              {
                title: 'Transparent Pricing',
                desc: 'Honest communication with no hidden fees. Upfront quotes from start to finish.',
                icon: '💎'
              }
            ].map((item, idx) => (
              <div key={idx} className="p-10 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-2xl transition-all border border-gray-100 group">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform inline-block">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Estimator & Call to Action */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to clear the clutter?</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether you're moving out, cleaning up a relative's estate, or just need a fresh start, 
                our team handles the heavy lifting. Get a quick estimate using our AI tool, or contact 
                us directly for a consultation.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal-50 text-[#008B94] rounded-full flex items-center justify-center font-bold text-xs mt-1">✓</div>
                  <p className="ml-3 text-gray-700 font-medium">Fast turnaround times</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal-50 text-[#008B94] rounded-full flex items-center justify-center font-bold text-xs mt-1">✓</div>
                  <p className="ml-3 text-gray-700 font-medium">Professional grade cleaning supplies</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal-50 text-[#008B94] rounded-full flex items-center justify-center font-bold text-xs mt-1">✓</div>
                  <p className="ml-3 text-gray-700 font-medium">Eco-friendly disposal options</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <div id="estimator">
                <EstimateBot />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Need a Custom Quote?</h2>
          <p className="text-lg text-gray-600 mb-10">
            For specific requests or business partnerships, the best way to reach us is through Facebook Messenger.
          </p>
          <a 
            href="https://www.facebook.com/people/Point-On-Total-Clean-Solutions/61586844317220"
            className="inline-flex items-center text-[#008B94] font-bold text-2xl hover:underline group uppercase"
          >
            Visit Our Facebook Page
            <svg className="w-8 h-8 ml-4 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
