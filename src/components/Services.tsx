import React, { useState } from 'react';
import { SERVICES } from '../data';
import { Service } from '../types';
import { Drill, Search, Database, Sun, Wrench, Layers, CheckCircle2, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onQuoteWithService: (serviceId: string) => void;
}

export default function Services({ onQuoteWithService }: ServicesProps) {
  const [activeServiceId, setActiveServiceId] = useState<string>('drilling');

  // Map icon names to Lucide icons
  const getIcon = (name: string, className: string = 'w-6 h-6') => {
    switch (name) {
      case 'Drill': return <Drill className={className} />;
      case 'Locate': return <Search className={className} />;
      case 'Database': return <Database className={className} />;
      case 'Sun': return <Sun className={className} />;
      case 'Wrench': return <Wrench className={className} />;
      case 'Layers': return <Layers className={className} />;
      default: return <Drill className={className} />;
    }
  };

  const selectedService = SERVICES.find(s => s.id === activeServiceId) || SERVICES[0];

  return (
    <section id="services" className="py-20 sm:py-24 bg-gradient-to-b from-sky-50/20 via-white to-sky-50/30 overflow-hidden relative text-left">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase font-bold tracking-wider text-sky-600 font-mono px-3 py-1 bg-sky-50 rounded-full border border-sky-100">
            Our Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-blue-950 tracking-tight">
            Comprehensive Borehole & Water Infrastructure Solutions
          </h2>
          <p className="text-base text-blue-900/70 font-sans max-w-2xl mx-auto">
            From hydro-geological surveys to off-grid solar-powered pumping grids and filtration, Core Borehole Drilling Zimbabwe delivers fully integrated water reliability.
          </p>
        </div>

        {/* 2-Columns Interactive Setup */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Column A: Interactive Grid List of Services (Col 5) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <div className="text-xs font-bold text-gray-500 uppercase tracking-wider font-mono px-1 mb-2">
              Select an Expert Service:
            </div>
            {SERVICES.map((service) => {
              const isActive = service.id === activeServiceId;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`w-full p-4 rounded-2xl flex items-center gap-4 border text-left transition-all duration-300 ${
                    isActive
                      ? 'bg-blue-950 border-blue-950 text-white shadow-xl shadow-blue-950/20 translate-x-2'
                      : 'bg-white border-slate-100 text-blue-950 hover:bg-sky-50/50 hover:border-sky-100 hover:translate-x-1'
                  }`}
                >
                  <div className={`p-3 rounded-xl shrink-0 transition-colors ${
                    isActive ? 'bg-sky-500 text-white' : 'bg-sky-50 text-sky-600 border border-sky-100/50'
                  }`}>
                    {getIcon(service.iconName, 'w-5 h-5')}
                  </div>
                  <div className="truncate">
                    <div className="text-sm font-bold font-sans tracking-wide">
                      {service.title}
                    </div>
                    <div className={`text-xs mt-1 truncate ${isActive ? 'text-sky-200' : 'text-gray-500'}`}>
                      {service.description}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Column B: Detail Showcase Panel (Col 8) */}
          <div className="lg:col-span-8 bg-white border border-slate-100 p-6 sm:p-8 rounded-3xl shadow-xl shadow-sky-100/30 relative overflow-hidden flex flex-col justify-between min-h-[480px]">
            {/* Watermark shape */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-50 rounded-full translate-x-20 -translate-y-20 -z-10 blur-2xl"></div>

            <div className="space-y-6">
              
              {/* Image Banner */}
              <div className="relative h-60 w-full overflow-hidden rounded-2xl border border-sky-100">
                <img
                  src={selectedService.imageSrc}
                  alt={selectedService.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Tech specifications tagline banner on top of images */}
                <div className="absolute bottom-4 left-4 bg-blue-950/90 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-blue-900/60 text-[10px] uppercase font-mono font-bold text-white tracking-wider">
                  Professional Standard Delivery
                </div>
              </div>

              {/* Service Details info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-sky-50 rounded-lg text-sky-600">
                    {getIcon(selectedService.iconName, 'w-6 h-6')}
                  </div>
                  <h3 className="text-2xl font-extrabold text-blue-950 font-sans tracking-tight">
                    {selectedService.title}
                  </h3>
                </div>
                
                <p className="text-sm text-blue-900/75 leading-relaxed font-sans font-medium">
                  {selectedService.description}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed font-sans">
                  {selectedService.longDescription}
                </p>
              </div>

              {/* Bullet Features Checklist */}
              <div className="space-y-2.5 pt-2">
                <h4 className="text-xs uppercase tracking-wider font-bold text-sky-600 font-mono">
                  Technical Service Deliverables Included:
                </h4>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {selectedService.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-semibold text-blue-950 font-sans leading-snug">
                      <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom Actions Row to Trigger Forms */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-8 border-t border-gray-100 mt-8">
              <div className="text-xs text-gray-400 font-sans italic leading-normal">
                Pre-selects <span className="font-bold text-sky-600">"{selectedService.title}"</span> in quote request forms.
              </div>
              <div className="flex flex-col sm:flex-row items-stretch gap-3">
                <a
                  href={`https://wa.me/263783576695?text=Hi%20Core%20Borehole%20Drilling%2C%20I%20am%20interested%20in%20your%20${encodeURIComponent(selectedService.title)}%20service.`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 border-2 border-green-500 rounded-full text-green-600 hover:bg-green-50 text-center font-sans font-bold text-xs tracking-wide transition-all"
                >
                  WhatsApp Query
                </a>
                <button
                  onClick={() => onQuoteWithService(selectedService.id)}
                  className="px-6 py-2.5 bg-gradient-to-r from-blue-900 to-sky-600 hover:from-blue-950 hover:to-sky-700 text-white text-center rounded-full font-sans font-bold text-xs shadow-lg tracking-wide hover:-translate-y-0.5 active:scale-95 transition-all duration-150 flex items-center justify-center gap-1.5"
                >
                  Direct Booking Setup <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
