import React, { useState, useEffect } from 'react';
import { QuoteRequest } from '../types';
import { SERVICES } from '../data';
import { X, Send, Lock, CheckCircle2, User, Phone, MapPin, Building2, Sliders, MessageSquare } from 'lucide-react';

interface QuoteFormProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedServiceId?: string;
}

export default function QuoteForm({ isOpen, onClose, preSelectedServiceId }: QuoteFormProps) {
  const [formData, setFormData] = useState<QuoteRequest>({
    fullName: '',
    phone: '',
    email: '',
    location: '',
    propertyType: 'Residential',
    servicesNeeded: [],
    message: '',
    urgency: 'Medium Priority'
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Handle service pre-selection when modal opens
  useEffect(() => {
    if (preSelectedServiceId) {
      const selectedObj = SERVICES.find(s => s.id === preSelectedServiceId);
      if (selectedObj) {
        setFormData(prev => ({
          ...prev,
          servicesNeeded: [selectedObj.title]
        }));
      }
    }
  }, [preSelectedServiceId, isOpen]);

  if (!isOpen) return null;

  const propertyOptions = [
    'Residential Home',
    'Commercial Office',
    'Agricultural Farm / Agro-Plot',
    'Primary / Secondary School',
    'Medical Clinic / Hospital',
    'Construction Site'
  ];

  const serviceOptions = SERVICES.map(s => s.title);

  const handleCheckboxChange = (serviceTitle: string) => {
    setFormData(prev => {
      const alreadyChecked = prev.servicesNeeded.includes(serviceTitle);
      return {
        ...prev,
        servicesNeeded: alreadyChecked
          ? prev.servicesNeeded.filter(title => title !== serviceTitle)
          : [...prev.servicesNeeded, serviceTitle]
      };
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Compile a premium WhatsApp message based on form values
  const compileWhatsAppMessage = () => {
    const servicesStr = formData.servicesNeeded.length > 0
      ? formData.servicesNeeded.join(', ')
      : 'Borehole Drilling Assessment';

    const greeting = `Hi Core Borehole Drilling Zimbabwe! I would like to request a professional quote with high yield assessment. Here are my project details:`;
    
    const details = `
👤 *Client Name:* ${formData.fullName}
📞 *WhatsApp / Phone:* ${formData.phone}
📧 *Email Address:* ${formData.email || 'N/A'}
📍 *Property Location:* ${formData.location}
🏘️ *Property Type:* ${formData.propertyType}
🛠️ *Services Needed:* ${servicesStr}
⚡ *Project Urgency:* ${formData.urgency}
💬 *Message/Notes:* ${formData.message || 'Standard survey and drilling requested'}`;

    return encodeURIComponent(`${greeting}\n${details}\n\nThank you! #WaterIsLife`);
  };

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.location) {
      setErrorMsg('Please supply your Full Name, Phone/WhatsApp number, and Location to proceed.');
      return;
    }
    setErrorMsg('');
    const waUrl = `https://wa.me/263783576695?text=${compileWhatsAppMessage()}`;
    window.open(waUrl, '_blank');
    setFormSubmitted(true);
  };

  const handleStandardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.location) {
      setErrorMsg('Please supply your Full Name, Phone/WhatsApp number, and Location to proceed.');
      return;
    }
    setErrorMsg('');
    // Client-side simulation
    setFormSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-blue-950/70 backdrop-blur-sm flex items-center justify-center p-4">
      
      {/* Outer Click Container */}
      <div className="relative bg-white rounded-3xl w-full max-w-2xl shadow-2xl border border-sky-100 overflow-hidden text-left transform transition-all duration-300">
        
        {/* Banner Graphic Header */}
        <div className="bg-gradient-to-r from-blue-900 to-sky-600 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/15 hover:bg-black/25 text-white/90 rounded-full transition-all"
            aria-label="Close dialogue"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="space-y-1 pr-6">
            <span className="text-[9px] uppercase font-bold tracking-widest text-sky-200 font-mono">
              Core Borehole Drilling Zimbabwe
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold font-sans">
              Water Solutions Quote Builder
            </h2>
            <p className="text-xs text-sky-100 font-sans">
              Enter your specifications below to receive an accurate, fully transparent price estimate.
            </p>
          </div>
        </div>

        {formSubmitted ? (
          /* Submission Succeeded layout */
          <div className="p-8 text-center space-y-6">
            <div className="mx-auto w-16 h-16 rounded-full bg-emerald-50 border-4 border-emerald-100 flex items-center justify-center text-emerald-500 animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-blue-950 font-sans">
                Quote Request Compiled!
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed font-sans max-w-md mx-auto">
                Thank you, **{formData.fullName}**. If you chose "Send to WhatsApp", your client brief was successfully compiled. Our sales representative will be in touch via phone within 2 hours.
              </p>
            </div>

            <div className="bg-sky-50 border border-sky-100 p-4 rounded-2xl max-w-md mx-auto text-left">
              <div className="text-[10px] font-bold text-sky-600 font-mono uppercase">Direct Support Line:</div>
              <div className="text-sm font-bold text-blue-950 font-sans mt-0.5">📞 Call or WhatsApp: 0783576695</div>
              <div className="text-[11px] text-gray-500 mt-1">Available 24/7 for emergency borehole services.</div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => {
                  setFormSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 bg-blue-950 hover:bg-blue-900 text-white rounded-full font-sans font-bold text-xs shadow-md transition-all"
              >
                Return to Website
              </button>
              
              <a
                href={`https://wa.me/263783576695?text=${compileWhatsAppMessage()}`}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-full font-sans font-bold text-xs shadow-md flex items-center justify-center gap-2 transition-all"
              >
                Re-send via WhatsApp
              </a>
            </div>
          </div>
        ) : (
          /* Actual Form */
          <form className="p-6 sm:p-8 space-y-5 max-h-[80vh] overflow-y-auto">
            
            {errorMsg && (
              <div className="p-3 bg-rose-50 border border-rose-100 rounded-xl text-rose-600 text-xs font-semibold font-sans">
                ⚠️ {errorMsg}
              </div>
            )}

            {/* Part 1: Contact Details */}
            <div className="space-y-3.5">
              <div className="text-xs uppercase font-extrabold text-sky-600 font-mono tracking-wider border-b border-gray-100 pb-1.5 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-sky-500" /> 1. Your Contact Profile
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="fullName" className="text-xs font-bold text-gray-700 font-sans">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Tinashe Moyo"
                      className="w-full pl-3 pr-3 py-2.5 rounded-xl border border-gray-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-sm font-sans placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="phone" className="text-xs font-bold text-gray-700 font-sans">
                    WhatsApp or Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. 0783576695"
                      className="w-full pl-3 pr-3 py-2.5 rounded-xl border border-gray-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-sm font-sans placeholder:text-gray-400"
                    />
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="email" className="text-xs font-bold text-gray-700 font-sans">
                    Email Address (Optional)
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. client@gmail.com"
                    className="w-full pl-3 pr-3 py-2.5 rounded-xl border border-gray-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-sm font-sans placeholder:text-gray-400"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="location" className="text-xs font-bold text-gray-700 font-sans">
                    Zimbabwe Location / Suburb <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative font-sans">
                    <input
                      id="location"
                      name="location"
                      type="text"
                      required
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="e.g. Borrowdale, Harare / Mazowe Farm"
                      className="w-full pl-3 pr-3 py-2.5 rounded-xl border border-gray-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-sm placeholder:text-gray-400"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Part 2: Project Specifications */}
            <div className="space-y-3.5 pt-2">
              <div className="text-xs uppercase font-extrabold text-sky-600 font-mono tracking-wider border-b border-gray-100 pb-1.5 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-sky-500" /> 2. Property & Requirements
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="propertyType" className="text-xs font-bold text-gray-700 font-sans">
                    Property Asset Category
                  </label>
                  <select
                    id="propertyType"
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-sm font-sans"
                  >
                    {propertyOptions.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label htmlFor="urgency" className="text-xs font-bold text-gray-700 font-sans">
                    Desired Booking Timeline
                  </label>
                  <select
                    id="urgency"
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-sm font-sans"
                  >
                    <option value="Urgent (Next 2 Days)">Urgent (Next 2 Days)</option>
                    <option value="Medium Priority (Next 7 Days)">Medium Priority (Next 7 Days)</option>
                    <option value="Planning / Information Only">Planning / Information Only</option>
                  </select>
                </div>
              </div>

              {/* Checkboxes Services */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700 font-sans">
                  Sectors Required (Select all that apply)
                </label>
                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  {serviceOptions.map((title) => {
                    const isChecked = formData.servicesNeeded.includes(title);
                    return (
                      <label
                        key={title}
                        className={`p-3 border rounded-xl flex items-center gap-2.5 cursor-pointer transition-all ${
                          isChecked
                            ? 'bg-sky-50 border-sky-400 text-blue-950 font-bold'
                            : 'bg-white border-gray-200 hover:bg-slate-50/50 text-gray-600'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleCheckboxChange(title)}
                          className="w-4 h-4 text-sky-600 rounded border-gray-300 focus:ring-sky-500"
                        />
                        <span className="text-xs font-sans tracking-wide leading-tight">{title}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Part 3: Message / Notes */}
            <div className="space-y-2 pt-2">
              <label htmlFor="message" className="text-xs font-bold text-gray-700 font-sans flex items-center justify-between">
                <span>Detailed Project Description & Special Notes</span>
                <span className="text-[10px] text-gray-400 lowercase font-mono">Optional</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-3 rounded-2xl border border-gray-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-sm font-sans placeholder:text-gray-400"
                placeholder="e.g. Specify required stand height, water tank capacity, or details about the terrain..."
              />
            </div>

            {/* Quick security notice */}
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-2 text-[10px] text-gray-500 leading-normal font-sans">
              <Lock className="w-3.5 h-3.5 text-gray-400 shrink-0" />
              <span>We never share your contact details. Your technical request is directly processed by our engineering sales crew.</span>
            </div>

            {/* Buttons row */}
            <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row gap-3 justify-end items-stretch sm:items-center">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-3 border border-gray-200 text-gray-500 hover:bg-gray-50 text-center font-sans font-bold text-xs rounded-xl transition-all"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleStandardSubmit}
                className="px-5 py-3 bg-blue-950 hover:bg-blue-900 text-white text-center font-sans font-bold text-xs rounded-xl shadow-md transition-all"
              >
                Save Siting Profile
              </button>

              {/* High converting WhatsApp CTA */}
              <button
                type="submit"
                onClick={handleWhatsAppRedirect}
                className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white text-center font-sans font-bold text-xs rounded-xl shadow-lg flex items-center justify-center gap-2 hover:-translate-y-0.5 active:scale-95 transition-all duration-150"
              >
                <MessageSquare className="w-4 h-4" /> Send To WhatsApp Now (Recommended)
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
