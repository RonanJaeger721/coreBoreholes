import React, { useState, useEffect } from 'react';
import { ArrowRight, Phone, CheckCircle2, ShieldCheck, Sun, Droplets } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onQuoteClick: () => void;
}

export default function Hero({ onQuoteClick }: HeroProps) {
  // Simple counters for animated stats
  const [drillCount, setDrillCount] = useState(0);
  const [successRate, setSuccessRate] = useState(0);
  const [solarCount, setSolarCount] = useState(0);

  useEffect(() => {
    const drillInterval = setInterval(() => {
      setDrillCount((prev) => {
        if (prev >= 450) {
          clearInterval(drillInterval);
          return 450;
        }
        return prev + 15;
      });
    }, 40);

    const successInterval = setInterval(() => {
      setSuccessRate((prev) => {
        if (prev >= 100) {
          clearInterval(successInterval);
          return 100;
        }
        return prev + 4;
      });
    }, 50);

    const solarInterval = setInterval(() => {
      setSolarCount((prev) => {
        if (prev >= 380) {
          clearInterval(solarInterval);
          return 380;
        }
        return prev + 12;
      });
    }, 40);

    return () => {
      clearInterval(drillInterval);
      clearInterval(successInterval);
      clearInterval(solarInterval);
    };
  }, []);

  return (
    <section className="relative min-h-screen pt-24 pb-16 flex items-center bg-gradient-to-b from-sky-50 via-white to-sky-50/20 overflow-hidden">
      {/* Decorative Wave/Ripple Background Shapes */}
      <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-sky-200/20 rounded-bl-[200px] -z-10 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-12 left-12 w-64 h-64 bg-blue-100/35 rounded-full -z-10 blur-2xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content Block */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 self-start px-4 py-1.5 rounded-full bg-blue-950 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-md shadow-blue-950/10"
            >
              <Droplets className="w-3.5 h-3.5 text-sky-400 rotate-180" />
              #WaterIsLife
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-sans font-extrabold text-blue-950 tracking-tight leading-tight"
            >
              Professional Borehole Drilling & <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-sky-600 to-blue-800">Water Solutions</span> Across Zimbabwe
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-blue-900/75 leading-relaxed max-w-2xl font-sans"
            >
              Core Borehole Drilling Zimbabwe delivers reliable borehole drilling, water surveys, solar water pump systems, tank installations, repairs, and maintenance services for homes, farms, schools, and businesses.
            </motion.p>

            {/* Quick Benefits Tickmarks */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2"
            >
              <div className="flex items-center gap-2 text-sm text-blue-950 font-sans font-semibold">
                <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0" />
                <span>Licensed Siting Hydrologists</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-blue-950 font-sans font-semibold">
                <ShieldCheck className="w-4 h-4 text-sky-500 shrink-0" />
                <span>1-Year Pump Maintenance Warranty</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-blue-950 font-sans font-semibold">
                <Sun className="w-4 h-4 text-sky-500 shrink-0" />
                <span>Off-Grid Solar Integration Systems</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-blue-950 font-sans font-semibold">
                <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0" />
                <span>Zimbabwe-Wide Service Fleets</span>
              </div>
            </motion.div>

            {/* Interactive Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
            >
              <button
                onClick={onQuoteClick}
                className="bg-gradient-to-r from-blue-900 to-sky-600 hover:from-blue-950 hover:to-sky-700 text-white font-sans font-bold text-sm py-4 px-8 rounded-full shadow-lg shadow-sky-500/20 hover:shadow-sky-500/45 transition-all text-center flex items-center justify-center gap-2.5 active:scale-95 duration-150 group"
              >
                Request a Free Quote 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <a
                href="https://wa.me/263783576695?text=Hi%20Core%20Borehole%20Drilling%2C%20I%20would%20like%20to%20request%20a%20borehole%20drilling%20quote."
                target="_blank"
                rel="noreferrer"
                className="bg-white hover:bg-slate-50 text-green-600 hover:text-green-700 font-sans font-bold text-sm py-4 px-8 rounded-full border-2 border-green-500/80 shadow-md flex items-center justify-center gap-2.5 transition-all active:scale-95 duration-150 text-center"
              >
                <svg
                  className="w-5 h-5 fill-current shrink-0"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.707 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </motion.div>
          </div>

          {/* Visual Presentation Block */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            {/* Ambient Behind-Shadow Elements */}
            <div className="absolute -inset-2 bg-gradient-to-r from-sky-400 to-blue-600 rounded-3xl blur-md opacity-25 -z-10 rotate-3 animate-pulse"></div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative bg-white p-3 rounded-2xl shadow-2xl border border-sky-100 overflow-hidden"
            >
              {/* Premium Card Header */}
              <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full border border-sky-200/50 flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></div>
                <span className="text-[10px] uppercase font-mono font-bold text-blue-950">Active Drilling Operations</span>
              </div>

              {/* Main Drilling Rig Visual */}
              <img
                src="/src/assets/images/drilling_rig_1779875838701.png"
                alt="Core Borehole Drilling Rig in Zimbabwe"
                className="w-full h-[320px] object-cover rounded-xl shadow-inner hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />

              {/* Floating Engineering Badge */}
              <div className="absolute bottom-6 right-6 bg-white p-3.5 rounded-xl border border-slate-100 shadow-xl max-w-[200px] flex items-center gap-3">
                <div className="p-2 bg-sky-50 rounded-lg text-sky-600 shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900 leading-none">Superb Yield</div>
                  <div className="text-[10px] text-gray-500 mt-1 leading-normal">Optimally sited water points.</div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Counter Overlay Stats Block */}
        <div id="stats-ribbon" className="relative mt-16 p-6 sm:p-8 bg-white rounded-3xl border border-slate-100 shadow-xl">
          <div className="absolute top-0 left-12 transform -translate-y-1/2 px-4 py-1.5 bg-sky-500 text-white rounded-full text-[10px] uppercase tracking-widest font-mono font-bold">
            Verified Performance
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-sky-100/60">
            {/* Stat 1 */}
            <div className="flex flex-col items-center text-center lg:px-4">
              <span className="text-3xl sm:text-4xl font-sans font-extrabold text-blue-950 leading-tight">
                {drillCount}+
              </span>
              <span className="text-xs sm:text-sm font-semibold text-sky-600 mt-1 uppercase tracking-wider font-sans">
                Boreholes Drilled
              </span>
              <span className="text-[11px] text-gray-500 mt-1 max-w-[170px] leading-relaxed">
                Clean domestic & farm water sources fully established.
              </span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center text-center pt-6 lg:pt-0 lg:px-4">
              <span className="text-3xl sm:text-4xl font-sans font-extrabold text-blue-950 leading-tight">
                {successRate}%
              </span>
              <span className="text-xs sm:text-sm font-semibold text-sky-600 mt-1 uppercase tracking-wider font-sans">
                Water Siting Rate
              </span>
              <span className="text-[11px] text-gray-500 mt-1 max-w-[170px] leading-relaxed">
                Utilizing scientific geoelectrical mapping surveys.
              </span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center text-center pt-6 lg:pt-0 lg:px-4">
              <span className="text-3xl sm:text-4xl font-sans font-extrabold text-blue-950 leading-tight">
                {solarCount}+
              </span>
              <span className="text-xs sm:text-sm font-semibold text-sky-600 mt-1 uppercase tracking-wider font-sans">
                Solar Pumps Installed
              </span>
              <span className="text-[11px] text-gray-500 mt-1 max-w-[170px] leading-relaxed">
                Energy-efficient off-grid arrays saving utility bills.
              </span>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center text-center pt-6 lg:pt-0 lg:px-4">
              <span className="text-3xl sm:text-4xl font-sans font-extrabold text-blue-950 leading-tight">
                100%
              </span>
              <span className="text-xs sm:text-sm font-semibold text-sky-600 mt-1 uppercase tracking-wider font-sans">
                Local Presence
              </span>
              <span className="text-[11px] text-gray-500 mt-1 max-w-[170px] leading-relaxed">
                Covering Mashonaland, Midlands, Matabeleland, etc.
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
