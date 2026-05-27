import React from 'react';
import { ShieldCheck, Award, Zap, Droplet, UserCheck } from 'lucide-react';

export default function About() {
  const commitments = [
    {
      icon: <Award className="w-5 h-5 text-sky-600" />,
      title: 'Professional Drilling',
      desc: 'Executing rigorous drilling methodologies to ensure casing stability, optimal geological protection, and dry-hole risk reduction.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-sky-600" />,
      title: 'Quality Installations',
      desc: 'Deploying heavy-duty Class 9/10 high-impact PVC piping along with top-tier submersible motors built for lifetime endurance.'
    },
    {
      icon: <Zap className="w-5 h-5 text-sky-600" />,
      title: 'Reliable Solar Systems',
      desc: 'Enabling absolute utility independence through high-grade Monocrystalline solar pump grids that defeat local load-shedding.'
    },
    {
      icon: <UserCheck className="w-5 h-5 text-sky-600" />,
      title: 'Long-Term Support',
      desc: 'Comprehensive post-installation maintenance visits, water chemical inspections, pump diagnostics, and prompt hotline servicing.'
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-24 bg-white overflow-hidden relative">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-sky-200/20 rounded-full blur-3xl -z-10 transform -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Presentation Accent Column */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-sky-100 rounded-2xl -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-blue-50 rounded-full -z-10"></div>
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-sky-100 p-4 bg-white">
              <img
                src="/src/assets/images/clean_water_flow_1779875893843.png"
                alt="Flowing Pure Borehole Water in Zimbabwe"
                className="w-full h-[400px] object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              
              {/* Trust Badge overlay */}
              <div className="absolute top-8 right-8 bg-blue-950 text-white rounded-2xl p-4 shadow-xl border border-blue-900/50 flex flex-col items-center text-center max-w-[150px]">
                <Droplet className="w-8 h-8 text-sky-400 animate-bounce mb-1" />
                <span className="text-xl font-bold font-sans">100%</span>
                <span className="text-[10px] text-sky-200 font-medium font-sans uppercase mt-1 leading-tight">
                  Water Success Siting
                </span>
              </div>
            </div>
          </div>

          {/* Text Presentation Column */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2 text-left">
            <span className="text-xs uppercase font-bold tracking-wider text-sky-600 font-mono">
              Get To Know Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-blue-950 tracking-tight leading-tight">
              Pioneering Dependable Clean Water Access & <span className="text-sky-600">Borehole Engineering</span> in Zimbabwe
            </h2>
            
            <p className="text-base text-blue-900/75 leading-relaxed font-sans">
              At **Core Borehole Drilling Zimbabwe**, we believe that water security is the foundation of happiness, high-yield agriculture, and flourishing business operations. We are dedicated to delivering dependable, secure, and long-term water access solutions anywhere in the country.
            </p>

            <p className="text-base text-blue-900/75 leading-relaxed font-sans">
              Our professional teams combine modern geological science with heavy-duty drilling machinery to tap into deep, clean aquifers. From Harare neighborhoods facing municipal shortages to sprawling agricultural holdings in Mazowe or Gweru, we handle every stage of your project with uncompromising engineering integrity.
            </p>

            {/* Core Commitments Small List */}
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {commitments.map((item, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <div className="p-2.5 bg-sky-50 rounded-xl text-sky-600 border border-sky-100 shrink-0 mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-sm text-blue-950">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
}
