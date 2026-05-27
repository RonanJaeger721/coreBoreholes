import React from 'react';
import { TESTIMONIALS } from '../data';
import { Star, MessageSquare } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-24 bg-gradient-to-b from-white via-sky-50/15 to-white relative text-left">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-sky-200/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase font-bold tracking-wider text-sky-600 font-mono px-3 py-1 bg-sky-50 rounded-full border border-sky-100">
            Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-blue-950 tracking-tight">
            Loved By Over 450 Homeowners & Farm Managers
          </h2>
          <p className="text-base text-blue-900/70 font-sans max-w-2xl mx-auto">
            From emergency repairs in central Harare to expansive solar irrigation projects in the provinces, see how we deliver sustainable water independence.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="bg-white border border-slate-100 p-6 sm:p-8 rounded-3xl shadow-xl shadow-sky-50/50 hover:shadow-sky-100/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Stars Row */}
                <div className="flex gap-1">
                  {Array.from({ length: test.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400 shrink-0" />
                  ))}
                </div>

                {/* Content body */}
                <p className="text-sm text-blue-950/85 leading-relaxed font-sans italic">
                  "{test.content}"
                </p>
              </div>

              {/* Author Row */}
              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-gray-50">
                <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-sky-600 font-bold shrink-0 font-sans">
                  {test.name[0]}
                </div>
                <div>
                  <div className="text-sm font-extrabold text-blue-950 font-sans leading-none">
                    {test.name}
                  </div>
                  <div className="text-[10px] text-sky-600 font-mono font-bold mt-1 uppercase leading-none">
                    {test.role} — <span className="text-gray-500 font-sans font-medium">{test.location}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Small trust banner */}
        <div className="mt-16 bg-sky-50/60 border border-sky-100/70 p-6 rounded-3xl max-w-2xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left justify-center">
          <div className="p-3 bg-white rounded-2xl border border-sky-100 shadow-md">
            <MessageSquare className="w-6 h-6 text-sky-600" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-blue-950 font-sans">Submit Your Borehole Experience</h4>
            <p className="text-[11px] text-gray-500 mt-1 leading-relaxed max-w-sm">
              Are you a client of Core Borehole Drilling Zimbabwe? WhatsApp us your feedback directly and let us know how your system has been running!
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
