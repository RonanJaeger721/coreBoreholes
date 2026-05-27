import React from 'react';
import { Phone, Mail, MapPin, Droplet, ArrowRight, Clock, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onQuoteClick: () => void;
}

export default function Footer({ onQuoteClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 text-white relative overflow-hidden text-left pt-16 pb-8 border-t border-blue-900/40">
      {/* Decorative Orbs */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-500/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main conversion CTA section inside the footer */}
        <div className="bg-gradient-to-r from-blue-900 via-sky-900 to-sky-700 p-8 sm:p-12 rounded-3xl shadow-2xl relative overflow-hidden mb-16 border border-sky-800/50">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-20 -translate-y-20 blur-2xl"></div>

          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-[10px] uppercase font-bold tracking-widest text-sky-400 font-mono">
                Get Secured Water Independence Today
              </span>
              <h2 className="text-2xl sm:text-4xl font-sans font-extrabold tracking-tight">
                Need Reliable Water Solutions Anywhere In Zimbabwe?
              </h2>
              <p className="text-sm font-sans text-sky-100 max-w-2xl leading-relaxed">
                Contact Core Borehole Drilling Zimbabwe today for professional geological surveys, Class 9/10 casing drilling, solar water pump setup, and tank installations. Let's secure your pure water supply.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <button
                onClick={onQuoteClick}
                className="px-6 py-3.5 bg-sky-500 hover:bg-sky-600 text-white font-sans font-bold text-xs rounded-full shadow-lg text-center flex items-center justify-center gap-2 tracking-wide transition-all duration-150 active:scale-95"
              >
                Request Free Quote Assessment <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/263783576695?text=Hi%20Core%20Borehole%20Drilling%2C%20I%20am%20ready%20to%20get%20a%20commercial%20water%20assessment%20quote."
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 bg-green-500 hover:bg-green-600 text-white font-sans font-bold text-xs rounded-full shadow-lg text-center flex items-center justify-center gap-2 tracking-wide transition-all duration-150 active:scale-95"
              >
                Chat WhatsApp: 0783576695
              </a>
            </div>
          </div>
        </div>

        {/* Footer info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-blue-900/50 pb-12">
          
          {/* Column A: Logo & Description (Col 4) */}
          <div className="md:col-span-4 space-y-4">
            <a href="#" className="flex items-center gap-2 group">
              <div className="bg-gradient-to-br from-blue-800 to-sky-500 p-2 rounded-xl text-white shadow-md">
                <Droplet className="w-5 h-5" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-sans font-extrabold tracking-tight">
                  CORE<span className="text-sky-400">BOREHOLE</span>
                </div>
                <div className="text-[8px] uppercase tracking-widest font-extrabold text-sky-300 font-mono leading-none">
                  Drilling Zimbabwe
                </div>
              </div>
            </a>

            <p className="text-xs text-sky-200/70 leading-relaxed font-sans max-w-xs">
              Offering professional borehole drilling, scientific hydro-geological water surveys, solar pumps systems, water tank towers, repairs, and support across Zimbabwe.
            </p>

            <div className="flex items-center gap-1.5 text-xs text-sky-300 font-bold uppercase font-mono">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Full Technical Warranty</span>
            </div>
          </div>

          {/* Column B: Links (Col 4) */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-sky-400 font-mono">
              Water Engineering Services
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
              <a href="#services" className="text-xs text-sky-200/80 hover:text-white transition-colors font-sans">Borehole Drilling</a>
              <a href="#services" className="text-xs text-sky-200/80 hover:text-white transition-colors font-sans">Water Siting Surveys</a>
              <a href="#services" className="text-xs text-sky-200/80 hover:text-white transition-colors font-sans">JoJo Tank Stands</a>
              <a href="#services" className="text-xs text-sky-200/80 hover:text-white transition-colors font-sans">Solar Water Pumps</a>
              <a href="#services" className="text-xs text-sky-200/80 hover:text-white transition-colors font-sans">System Link Repairs</a>
              <a href="#services" className="text-xs text-sky-200/80 hover:text-white transition-colors font-sans">Purification Filtration</a>
            </div>
          </div>

          {/* Column C: Address details / Contact items (Col 4) */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-sky-400 font-mono">
              Store Contact Details
            </h3>

            <div className="space-y-3">
              <div className="flex items-start gap-2.5 text-xs text-sky-200/80">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span className="font-sans leading-snug">
                  124 Samora Machel Avenue, Harare, Zimbabwe
                </span>
              </div>

              <a
                href="tel:0783576695"
                className="flex items-center gap-2.5 text-xs text-sky-200/80 hover:text-white transition-colors"
                aria-label="Call Mobile Support"
              >
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="font-sans">0783576695 (WhatsApp & Mobile Calls)</span>
              </a>

              <a
                href="mailto:coreboreholeszim2026@gmail.com"
                className="flex items-center gap-2.5 text-xs text-sky-200/80 hover:text-white transition-colors"
                aria-label="Send direct Email"
              >
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="font-sans font-medium">coreboreholeszim2026@gmail.com</span>
              </a>

              <div className="flex items-center gap-2.5 text-xs text-sky-200/80">
                <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="font-sans">Mon - Sat: 07:30 AM - 05:30 PM (Sunday Closed)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Brand credit / copy notes */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sky-300/40">
          <div className="font-sans text-center sm:text-left">
            © {currentYear} Core Borehole Drilling Zimbabwe. All rights reserved. Registered Geological Drilling Contractor.
          </div>
          <div className="font-mono text-center sm:text-right">
            Tagline: <span className="font-bold text-sky-400">#WaterIsLife</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
