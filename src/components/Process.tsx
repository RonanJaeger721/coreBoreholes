import React from 'react';
import { PROCESS_STEPS } from '../data';
import { Check, Clock, Calendar } from 'lucide-react';

export default function Process() {
  return (
    <section id="process" className="py-20 sm:py-24 bg-gradient-to-b from-sky-50/20 via-white to-sky-50/20 overflow-hidden relative text-left">
      {/* Decorative Ornaments */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-100/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase font-bold tracking-wider text-sky-600 font-mono px-3 py-1 bg-sky-50 rounded-full border border-sky-100">
            Our Timeline
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-blue-950 tracking-tight">
            Our Seamless 5-Step Borehole Development Process
          </h2>
          <p className="text-base text-blue-900/70 font-sans max-w-2xl mx-auto">
            We follow deep engineering standards to deliver fully checked, high-yield borehole water setups inside 5 working days.
          </p>
        </div>

        {/* Timeline Path Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical connecting line */}
          <div className="absolute left-6 sm:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-blue-900 via-sky-400 to-emerald-500 transform -translate-x-1/2 -z-10"></div>

          <div className="space-y-12 sm:space-y-16">
            {PROCESS_STEPS.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={step.stepNumber}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Badge center marker */}
                  <div className="absolute left-6 sm:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-950 to-sky-600 border-4 border-white shadow-lg flex items-center justify-center text-white font-mono font-bold text-lg">
                      {step.stepNumber}
                    </div>
                  </div>

                  {/* Left/Right Blank spacing buffer on desktop */}
                  <div className="w-full sm:w-1/2 pl-16 sm:pl-0 sm:px-8"></div>

                  {/* Step Card block */}
                  <div className="w-full sm:w-1/2 pl-16 sm:pl-0 sm:px-8 mt-2 sm:mt-0">
                    <div className="bg-white border border-slate-100 p-6 rounded-3xl shadow-xl shadow-sky-100/30 hover:shadow-sky-100/70 transition-all duration-300 relative">
                      
                      {/* Floating Duration Indicator */}
                      <div className="absolute top-4 right-4 bg-sky-50 text-indigo-700 rounded-full py-1 px-3 border border-sky-100 flex items-center gap-1.5 text-[10px] font-bold font-mono uppercase">
                        <Clock className="w-3 h-3" />
                        <span>{step.duration}</span>
                      </div>

                      <div className="space-y-3">
                        <span className="text-[10px] tracking-widest font-extrabold text-sky-600 font-mono uppercase">
                          PHASE 0{step.stepNumber}
                        </span>
                        
                        <h3 className="text-lg sm:text-xl font-extrabold text-blue-950 font-sans tracking-tight">
                          {step.title}
                        </h3>
                        
                        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-sans">
                          {step.description}
                        </p>

                        {/* Checklist Details */}
                        <div className="space-y-2 pt-3 border-t border-gray-50">
                          {step.details.map((detail, idx) => (
                            <div key={idx} className="flex gap-2 items-start text-xs font-semibold text-blue-900/80 font-sans leading-relaxed">
                              <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
