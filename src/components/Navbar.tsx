import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Droplet, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onQuoteClick: () => void;
}

export default function Navbar({ onQuoteClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '#website-viewport' },
    { label: 'Services', href: '#services' },
    { label: 'Regional Coverage', href: '#coverage' },
    { label: 'FAQs & Bookings', href: '#faqs' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-sky-100/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-sky-400 rounded-full blur-sm scale-110 opacity-75 group-hover:scale-125 transition-transform"></div>
              <div className="relative bg-gradient-to-br from-blue-900 to-sky-600 p-2 rounded-xl text-white shadow-md">
                <Droplet className="w-6 h-6 animate-pulse" />
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <span className="font-sans font-extrabold text-lg sm:text-xl tracking-tight text-blue-950">
                  CORE<span className="text-sky-500">BOREHOLE</span>
                </span>
              </div>
              <div className="text-[9px] uppercase tracking-widest font-bold text-sky-600 font-mono leading-none">
                Drilling Zimbabwe
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-sans font-medium text-sm text-blue-900/80 hover:text-sky-600 transition-colors duration-150 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-sky-500 hover:after:w-full after:transition-all after:duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* CTA Elements */}
            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/263783576695?text=Hi%20Core%20Borehole%20Drilling%2C%20I%20would%20like%20to%20inquire%20about%20your%20borehole%20drilling%20services."
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 border-2 border-green-500 text-green-600 hover:bg-green-50 rounded-full font-sans font-semibold text-xs tracking-wide transition-all"
              >
                <div className="w-2 h-2 rounded-full bg-green-500 animate-ping"></div>
                WhatsApp Active
              </a>

              <button
                onClick={onQuoteClick}
                className="bg-gradient-to-r from-blue-900 to-sky-600 hover:from-blue-950 hover:to-sky-700 text-white font-sans font-semibold text-xs py-2.5 px-5 rounded-full shadow-lg hover:shadow-sky-300/30 hover:-translate-y-0.5 tracking-wide transition-all duration-150 flex items-center gap-1.5"
              >
                Request a Quote <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-3">
            <a
              href="tel:0783576695"
              className="p-2 bg-sky-50 text-sky-600 rounded-full hover:bg-sky-100 transition-all border border-sky-100"
              aria-label="Call Office"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-blue-950 hover:bg-sky-50 rounded-lg transition-all border border-transparent hover:border-sky-100"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[60px] bg-white border-b border-sky-100/80 shadow-xl transition-all duration-300 ease-in-out origin-top ${
          mobileMenuOpen ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-0 pointer-events-none'
        }`}
      >
        <div className="px-4 py-5 space-y-4 max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="grid grid-cols-2 gap-2 pb-4 border-b border-gray-100">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-semibold text-blue-950 hover:bg-sky-50 hover:text-sky-600 transition-all duration-150 font-sans"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-2">
            <a
              href="https://wa.me/263783576695?text=Hi%20Core%20Borehole%20Drilling%2C%20I%20would%20like%20to%20inquire%20about%20your%20borehole%20drilling%20services."
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-sans font-bold text-sm tracking-wide shadow-md transition-all"
            >
              <Phone className="w-4 h-4" /> WhatsApp: 0783576695
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onQuoteClick();
              }}
              className="w-full bg-gradient-to-r from-blue-900 to-sky-600 hover:from-blue-950 hover:to-sky-700 text-white font-sans font-bold text-sm py-3 px-6 rounded-xl shadow-lg transition-all text-center flex items-center justify-center gap-2"
            >
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
