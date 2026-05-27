import React, { useState } from 'react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import { MapPin, SlidersHorizontal, Check } from 'lucide-react';

export default function Gallery() {
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { label: 'All Projects', value: 'all' },
    { label: 'Drilling', value: 'drilling' },
    { label: 'Solar Systems', value: 'solar' },
    { label: 'Water Tanks', value: 'tanks' },
    { label: 'Comprehensive Solutions', value: 'comprehensive' },
  ];

  const filteredProjects = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter || (filter === 'tanks' && p.category === 'comprehensive'));

  return (
    <section id="gallery" className="py-20 sm:py-24 bg-gradient-to-b from-sky-50/20 via-white to-sky-50/20 overflow-hidden text-left relative">
      <div className="absolute top-1/4 right-0 w-84 h-84 bg-sky-200/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs uppercase font-bold tracking-wider text-sky-600 font-mono px-3 py-1 bg-sky-50 rounded-full border border-sky-100">
              Our Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-blue-950 tracking-tight">
              Real-World Borehole & Solar Pumps Installations
            </h2>
            <p className="text-sm font-sans text-blue-900/70">
              Explore some of our active sites, farm irrigation structures, and residential water towers constructed within the last year.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono font-bold text-gray-500 uppercase py-2">
            <SlidersHorizontal className="w-4 h-4 text-sky-500" />
            <span>Interactive Filter Grid</span>
          </div>
        </div>

        {/* Filter Navigation Buttons */}
        <div className="flex flex-wrap gap-2.5 mb-10 pb-2 border-b border-gray-100">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`px-5 py-2.5 rounded-full font-sans font-bold text-xs tracking-wide transition-all ${
                filter === cat.value
                  ? 'bg-blue-950 text-white shadow-md shadow-blue-950/25'
                  : 'bg-white border border-slate-200 text-blue-950/80 hover:bg-sky-50/50 hover:border-sky-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-lg shadow-sky-50/50 hover:shadow-xl hover:shadow-sky-100 hover:-translate-y-1 transition-all duration-300 flex flex-col sm:flex-row"
            >
              {/* Image Block */}
              <div className="w-full sm:w-2/5 h-64 sm:h-auto relative overflow-hidden shrink-0 border-r border-slate-100">
                <img
                  src={project.imageSrc}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Location Badge overlay */}
                <div className="absolute top-4 left-4 bg-blue-950/90 backdrop-blur-md px-3 py-1 rounded-full border border-blue-900/40 text-[10px] font-bold font-sans text-white uppercase tracking-wider flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-sky-400" />
                  <span className="truncate max-w-[120px]">{project.location.split(',')[0]}</span>
                </div>
              </div>

              {/* Text Specs Block */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div className="space-y-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-sky-600">
                    {project.category === 'drilling' ? 'Borehole Drilling' : project.category === 'solar' ? 'Solar pump systems' : 'COMPREHENSIVE SOLUTION'}
                  </span>
                  
                  <h3 className="text-lg font-extrabold text-blue-950 font-sans tracking-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-sans">
                    {project.description}
                  </p>
                </div>

                {/* Tech Specs tags */}
                <div className="space-y-2 mt-5 pt-4 border-t border-gray-50">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-blue-950 font-sans">
                    Technical Specifications:
                  </span>
                  <div className="grid grid-cols-2 gap-1.5">
                    {project.specs.map((spec, sIdx) => (
                      <div
                        key={sIdx}
                        className="text-[11px] font-bold text-sky-800 font-sans flex items-center gap-1 py-1 px-2 rounded-lg bg-sky-50 border border-sky-100"
                      >
                        <Check className="w-3 h-3 text-emerald-500 shrink-0" />
                        <span className="truncate">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Empty placeholder state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 bg-sky-50/40 rounded-3xl border border-dashed border-sky-200">
            <span className="text-sm font-sans font-medium text-gray-500">
              No recent projects listed in this filter. Check our comprehensive list for full-stack water services!
            </span>
          </div>
        )}

      </div>
    </section>
  );
}
