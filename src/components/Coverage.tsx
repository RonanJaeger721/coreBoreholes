import React from 'react';
import { REGIONS, SECTORS } from '../data';
import { MapPin, CheckCircle2, ChevronRight, Users, Landmark, Sprout, Home } from 'lucide-react';

export default function Coverage() {
  // Map sector labels to corresponding icons
  const getSectorIcon = (name: string) => {
    if (name.includes('Residential')) return <Home className="w-5 h-5 text-sky-600" />;
    if (name.includes('Agricultural')) return <Sprout className="w-5 h-5 text-emerald-600" />;
    if (name.includes('Schools')) return <Landmark className="w-5 h-5 text-indigo-600" />;
    return <Users className="w-5 h-5 text-blue-600" />;
  };

  return (
    <section id="coverage" className="py-20 sm:py-24 bg-white overflow-hidden relative text-left">
      {/* Background grids and details */}
      <div className="absolute inset-0 bg-[radial-gradient(#e0f2fe_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs uppercase font-bold tracking-wider text-sky-600 font-mono px-3 py-1 bg-sky-50 rounded-full border border-sky-100">
            National Footprint
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-blue-950 tracking-tight">
            Zimbabwe-Wide Service Coverage & Sector Solutions
          </h2>
          <p className="text-base text-blue-900/70 font-sans">
            Whether inside dense urban suburbs, off-grid community schools, or remote agro-ecological regions, our drilling crews travel equipped to deliver immediate water access.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Column A: Property Sectms Served (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-mono font-bold tracking-wider text-gray-400 uppercase">
              Sectors We Empower
            </div>

            <div className="space-y-4">
              {SECTORS.map((sector, index) => (
                <div
                  key={index}
                  className="bg-sky-50/45 border border-sky-100 p-5 rounded-3xl hover:bg-sky-50 transition-colors duration-200 flex gap-4"
                >
                  <div className="p-3 bg-white rounded-2xl border border-sky-100 shadow-md shrink-0 h-fit">
                    {getSectorIcon(sector.name)}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-sans font-extrabold text-sm text-blue-950">
                      {sector.name}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed font-sans">
                      {sector.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick trust badge */}
            <div className="bg-gradient-to-r from-blue-900 to-blue-950 text-white rounded-3xl p-6 shadow-xl relative overflow-hidden">
              <div className="space-y-1">
                <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-sky-400">Permit Guarantee</div>
                <h4 className="text-sm font-bold font-sans">Corporate Compliance Assistance</h4>
                <p className="text-xs text-sky-100/75 mt-1 leading-relaxed">
                  We coordinate with ZINWA and local catchment councils to help your school, NGO, or farm obtain drilling water permits legally and hassle-free.
                </p>
              </div>
            </div>
          </div>

          {/* Column B: Provincial Coverage Map & Hubs Grid (Col 7) */}
          <div className="lg:col-span-7 bg-white border border-slate-100 p-6 sm:p-8 rounded-3xl shadow-xl shadow-sky-100/35 relative">
            <div className="absolute top-4 right-4 bg-emerald-50 text-emerald-700 py-1 px-2.5 rounded-full border border-emerald-100 font-mono text-[10px] font-extrabold uppercase tracking-wide flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              All Units Operational
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold font-sans text-blue-950 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-sky-500" /> Provincial Hubs & Regional Serviced Sites
                </h3>
                <p className="text-xs text-gray-500 mt-1 font-sans">
                  Click-to-call or submit quotes for any location listed below:
                </p>
              </div>

              {/* Regions Grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                {REGIONS.map((region, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-slate-100 hover:border-sky-100 transition-all shadow-inner relative"
                  >
                    <div className="text-xs font-mono font-extrabold text-blue-950 tracking-wide uppercase border-b border-gray-100 pb-2 flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-500"></div>
                      {region.name}
                    </div>

                    <div className="grid grid-cols-2 gap-x-2 gap-y-1 mt-3">
                      {region.hubs.map((hub, hIdx) => (
                        <div
                          key={hIdx}
                          className="flex items-center gap-1 text-[11px] font-semibold text-gray-500 font-sans"
                        >
                          <ChevronRight className="w-3 h-3 text-sky-400 shrink-0" />
                          <span className="truncate">{hub}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Highlight call */}
              <div className="p-4 bg-amber-50/60 border border-amber-100 rounded-2xl flex items-start gap-3">
                <div className="p-2 bg-amber-500 text-white rounded-xl shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-amber-900 font-sans">Remote and Deep Rural Projects</h4>
                  <p className="text-[11px] text-amber-800 leading-relaxed font-sans">
                    Have a remote agricultural layout or a borehole repair project deep outside major provincial towns? Our heavy-duty all-terrain utility vehicles can access any road successfully.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
