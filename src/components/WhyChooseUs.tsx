import React from 'react';
import { Award, Globe, HeartHandshake, ShieldCheck, Drill, Flame, Wrench } from 'lucide-react';

export default function WhyChooseUs() {
  const values = [
    {
      icon: <Award className="w-5 h-5" />,
      title: 'Experienced Drilling Experts',
      description: 'Our certified geologists, rig engineers, and pump technicians have successfully tapped into over 450 deep water columns across the continent.',
      colorClass: 'bg-sky-50 text-sky-600 border-sky-100'
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: 'Zimbabwe-Wide Coverage',
      description: 'We have mobile fleet units based in provincial capitals, facilitating rapid response to sites in Mashonaland, Midlands, Manicaland, and Matabeleland.',
      colorClass: 'bg-indigo-50 text-indigo-600 border-indigo-100'
    },
    {
      icon: <HeartHandshake className="w-5 h-5" />,
      title: 'Reliable Water Solutions',
      description: 'We reject high-risk superficial water sources; our experts trace deep structural fractured aquifers to ensure years of robust, steady yield.',
      colorClass: 'bg-sky-50 text-sky-600 border-sky-100'
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: 'Professional Installations',
      description: 'From heavy-duty steel stands to electrical cable lining, we work only with heavy-gauge Class 9/10 pipes and premium brand controller systems.',
      colorClass: 'bg-emerald-50 text-emerald-600 border-emerald-100'
    },
    {
      icon: <Drill className="w-5 h-5" />,
      title: 'Modern Drilling Equipment',
      description: 'Equipped with truck-mounted high-pressure air and rotary-mud rigs capable of punching through extreme rock formations up to 200 meters.',
      colorClass: 'bg-amber-50 text-amber-600 border-amber-100'
    },
    {
      icon: <Flame className="w-5 h-5" />,
      title: 'Fast Response Times',
      description: 'Streamlined scheduling from survey, paperwork clearance and drilling rig arrival in less than 48 hours for emergency residential setups.',
      colorClass: 'bg-rose-50 text-rose-600 border-rose-100'
    },
    {
      icon: <Wrench className="w-5 h-5" />,
      title: 'Long-Term Support',
      description: 'Every client receives a comprehensive field log sheet, immediate tech-support diagnostic visits, and options for budget-friendly yearly maintenance.',
      colorClass: 'bg-sky-50 text-sky-600 border-sky-100'
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 sm:py-24 bg-white relative overflow-hidden text-left">
      {/* Visual background details */}
      <div className="absolute top-12 left-10 w-96 h-96 bg-sky-100/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-12 right-10 w-96 h-96 bg-blue-100/15 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs uppercase font-bold tracking-wider text-sky-600 font-mono px-3 py-1 bg-sky-50 rounded-full border border-sky-100">
            Why Core Borehole Drilling
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-blue-950 tracking-tight">
            Setting the Standard in Zimbabwean Ground Water Engineering
          </h2>
          <p className="text-base text-blue-900/70 font-sans">
            Our reputation is built on transparent pricing, geological safety, and a zero-risk commitment to continuous water access for every client.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1 & 2 - Left columns, double spacing for main bullet */}
          <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-blue-950 to-blue-900 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden flex flex-col justify-between">
            {/* Watermark rig background illustration or glowing orb */}
            <div className="absolute right-0 bottom-0 w-80 h-80 bg-sky-500/10 rounded-full translate-x-20 translate-y-20 blur-2xl"></div>

            <div className="space-y-6 max-w-xl z-10">
              <div className="inline-flex p-3 bg-sky-500 text-white rounded-2xl">
                <Drill className="w-6 h-6 animate-pulse" />
              </div>
              <h3 className="text-2xl font-extrabold font-sans">
                Our Zero-Risk Siting Policy
              </h3>
              <p className="text-sm text-sky-100/80 leading-relaxed font-sans">
                Unlike informal drilling rigs that drill blindly on unconfirmed spots, **Core Borehole Drilling Zimbabwe** utilizes advanced geoelectrical scientific siting first. This allows us to guarantee precise water intersections, proper aquifer yield rates, and fully avoid dry water vectors.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-sky-800/60 z-10">
              <div>
                <div className="text-xs font-bold text-sky-400 font-mono">STANDARDS MET</div>
                <div className="text-sm font-semibold mt-1">Class 9 / 10 Thick Casing Only</div>
              </div>
              <div>
                <div className="text-xs font-bold text-sky-400 font-mono">PERMIT CLEARANCE</div>
                <div className="text-sm font-semibold mt-1">Full Sub-Catchment Support</div>
              </div>
            </div>
          </div>

          {/* Simple Grid Items mapping */}
          {values.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-slate-100 hover:border-sky-100 p-6 sm:p-8 rounded-3xl shadow-lg shadow-sky-50/30 hover:shadow-xl hover:shadow-sky-100/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className={`p-3 rounded-2xl border w-fit ${item.colorClass}`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold font-sans text-blue-950 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              {/* Little detail block */}
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-1.5 text-[10px] uppercase font-mono font-bold text-sky-600">
                <span>Verified Quality Output</span>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
