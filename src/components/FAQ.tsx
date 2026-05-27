import React, { useState } from 'react';
import { FAQS } from '../data';
import { ChevronDown, HelpCircle, Activity } from 'lucide-react';

export default function FAQ() {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq1');

  const toggleFaq = (id: string) => {
    setOpenFaqId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faqs" className="py-20 sm:py-24 bg-white overflow-hidden relative text-left">
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-blue-100/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase font-bold tracking-wider text-sky-600 font-mono px-3 py-1 bg-sky-50 rounded-full border border-sky-100">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-blue-950 tracking-tight">
            Common Inquiries About Siting, Drilling & Pump Costs
          </h2>
          <p className="text-sm text-blue-900/70 font-sans">
            Here are expert answers to common technical queries. For custom specifications, please speak directly to our surveyor.
          </p>
        </div>

        {/* Accordions List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = faq.id === openFaqId;
            return (
              <div
                key={faq.id}
                className="bg-white border rounded-2xl transition-all duration-300"
                style={{
                  borderColor: isOpen ? '#bae6fd' : '#f1f5f9',
                  boxShadow: isOpen ? '0 10px 15px -3px rgba(224, 242, 254, 0.5)' : 'none'
                }}
              >
                {/* Header toggle button */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 flex items-center justify-between text-left gap-4"
                >
                  <div className="flex gap-3 items-center">
                    <div className={`p-2 rounded-xl shrink-0 ${isOpen ? 'bg-sky-500 text-white shadow-md' : 'bg-sky-50 text-sky-600'}`}>
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <span className="font-sans font-extrabold text-sm sm:text-base text-blue-950 leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-sky-600' : ''
                    }`}
                  />
                </button>

                {/* Content collapsible */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-80' : 'max-h-0'
                  }`}
                >
                  <div className="px-5 pb-5 pt-1 pl-[52px] border-t border-gray-50 text-xs sm:text-sm text-gray-500 font-sans leading-relaxed">
                    {faq.answer}
                    
                    {/* Tiny category pill inside answers */}
                    <div className="mt-4 flex items-center gap-1.5">
                      <span className="text-[9px] font-bold text-sky-600 font-mono uppercase bg-sky-50 py-0.5 px-2 rounded border border-sky-100">
                        Topic: {faq.category}
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Fast diagnostics help callout */}
        <div className="mt-12 bg-sky-950 text-white p-6 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3.5 text-left">
            <div className="p-3 bg-sky-500 text-white rounded-2xl shadow-lg shadow-sky-500/20 shrink-0">
              <Activity className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h4 className="text-sm font-bold font-sans">Have Specific Casing or Electrical Rig Queries?</h4>
              <p className="text-xs text-sky-200 mt-1 leading-relaxed max-w-md">
                Our operations director is online on WhatsApp to answer detailed mechanical questions about drilling depth profiles, gravel pack sizes, or solar pump horsepower models immediately.
              </p>
            </div>
          </div>
          
          <a
            href="https://wa.me/263783576695?text=Hi%20Core%20Borehole%20Drilling%2C%20I%20have%20a%20technical%20question%20about%20my%20borehole%20project."
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 bg-sky-500 hover:bg-sky-600 text-white font-sans font-bold text-xs rounded-full shadow-md text-center transition-all shrink-0"
          >
            Ask Tech Support
          </a>
        </div>

      </div>
    </section>
  );
}
