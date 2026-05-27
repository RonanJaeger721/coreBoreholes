import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageSquare, Phone } from 'lucide-react';

interface FloatingCTAProps {
  onQuoteClick: () => void;
}

export default function FloatingCTA({ onQuoteClick }: FloatingCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-3 bg-white text-blue-950 border border-slate-100 hover:border-sky-200 rounded-full shadow-lg hover:shadow-sky-200/50 hover:-translate-y-1 transition-all"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating Quote Trigger Panel (Desktop only) */}
      <button
        onClick={onQuoteClick}
        className="hidden md:flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-900 to-sky-600 hover:from-blue-950 hover:to-sky-700 text-white font-sans font-bold text-xs rounded-full shadow-xl hover:shadow-sky-500/20 hover:-translate-y-1 transition-all"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-sky-300 animate-ping"></span>
        Get Free Quotation
      </button>

      {/* Sticky WhatsApp Chat CTA */}
      <a
        href="https://wa.me/263783576695?text=Hi%20Core%20Borehole%20Drilling%20Zimbabwe!%20I%20would%20like%20to%20get%20a%20prompt%20borehole%20drilling%20water%20assessment%20detailed%20estimate."
        target="_blank"
        rel="noreferrer"
        className="relative group p-4 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl hover:shadow-green-500/40 hover:-translate-y-1 transition-all"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulsing Green Rings */}
        <div className="absolute inset-0 bg-green-400 rounded-full -z-10 animate-ping opacity-35 group-hover:opacity-0 transition-opacity"></div>
        
        <svg
          className="w-6 h-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.707 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>

        {/* Label pop-out overlay on hover */}
        <span className="absolute right-14 top-1/2 transform -translate-y-1/2 bg-blue-950 text-white font-sans text-xs font-bold py-1.5 px-3.5 rounded-lg border border-blue-900 shadow-xl opacity-0 scale-75 origin-right group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none whitespace-nowrap">
          Click to WhatsApp 0783576695
        </span>
      </a>
    </div>
  );
}
