import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Coverage from './components/Coverage';
import QuoteForm from './components/QuoteForm';
import FAQ from './components/FAQ';
import FloatingCTA from './components/FloatingCTA';
import Footer from './components/Footer';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  // Trigger modal with optional preselected service item
  const openQuoteWithService = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setIsQuoteOpen(true);
  };

  const closeQuote = () => {
    setIsQuoteOpen(false);
    setSelectedServiceId(undefined);
  };

  return (
    <div id="website-viewport" className="min-h-screen bg-slate-50 text-blue-950 flex flex-col font-sans selection:bg-sky-500 selection:text-white relative">
      {/* Scrollable navigation link offsets */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        section {
          scroll-margin-top: 75px; 
        }
      `}</style>

      {/* Header layer */}
      <Navbar onQuoteClick={() => openQuoteWithService()} />

      {/* Main layers */}
      <main className="flex-grow">
        {/* Core Section 1: Hero & Animated Stats */}
        <Hero onQuoteClick={() => openQuoteWithService()} />

        {/* Core Section 2: Services Catalogue */}
        <Services onQuoteWithService={openQuoteWithService} />

        {/* Core Section 3: National Coverage Range & Property Sectors */}
        <Coverage />

        {/* Core Section 4: Technical FAQs & Instant WhatsApp / Quote Bookings */}
        <FAQ />
      </main>

      {/* High-Converting Footer element */}
      <Footer onQuoteClick={() => openQuoteWithService()} />

      {/* Bottom Sticky triggers */}
      <FloatingCTA onQuoteClick={() => openQuoteWithService()} />

      {/* Modal Wizard Forms element */}
      <QuoteForm
        isOpen={isQuoteOpen}
        onClose={closeQuote}
        preSelectedServiceId={selectedServiceId}
      />
    </div>
  );
}
