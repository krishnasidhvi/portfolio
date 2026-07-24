import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, CheckCircle, ExternalLink } from 'lucide-react';
import { workExperience } from '../data/portfolioData';

export default function ExperienceTimeline() {
  const [expandedId, setExpandedId] = useState(workExperience[0].id);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-20 bg-slate-950/60 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <Briefcase className="w-3.5 h-3.5" /> Track Record of Delivery
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Professional Work Experience
          </h2>
          <p className="text-slate-400 text-sm">
            Proven contributions across industry leaders in fintech, cloud infrastructure, and financial asset management.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-32 space-y-12">
          {workExperience.map((job) => {
            const isExpanded = expandedId === job.id;

            return (
              <div key={job.id} className="relative pl-6 md:pl-10 group">
                
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:scale-125 group-hover:bg-cyan-400 transition-all shadow-md shadow-cyan-500/50" />

                {/* Date Tag on Desktop Left */}
                <div className="hidden md:block absolute -left-36 top-1 text-right w-28">
                  <span className="text-xs font-mono text-cyan-400 font-semibold block">
                    {job.period.split(' – ')[0]}
                  </span>
                  <span className="text-[11px] text-slate-500 font-mono block">
                    to {job.period.split(' – ')[1]}
                  </span>
                </div>

                {/* Job Card */}
                <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 glass-panel glass-panel-hover shadow-xl">
                  
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                          {job.role}
                        </h3>
                        <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-[10px] font-mono uppercase">
                          {job.badge}
                        </span>
                      </div>
                      <div className="text-sm font-semibold text-slate-300 mt-1 flex items-center gap-2">
                        <span className="text-cyan-400 font-bold">{job.company}</span>
                        <span className="text-slate-600">•</span>
                        <span className="text-slate-400 flex items-center gap-1 text-xs">
                          <MapPin className="w-3.5 h-3.5" />
                          {job.location}
                        </span>
                      </div>
                    </div>

                    {/* Period badge for mobile */}
                    <div className="sm:hidden flex items-center gap-1.5 text-xs font-mono text-cyan-400">
                      <Calendar className="w-3.5 h-3.5" />
                      {job.period}
                    </div>

                    <button
                      onClick={() => toggleExpand(job.id)}
                      className="inline-flex items-center gap-1 text-xs font-mono text-slate-400 hover:text-cyan-300 px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700 w-fit"
                    >
                      {isExpanded ? 'Collapse Details' : 'View Achievements'}
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Summary */}
                  <p className="text-slate-300 text-xs sm:text-sm mt-4 font-sans leading-relaxed">
                    {job.summary}
                  </p>

                  {/* Expandable Bullet Points */}
                  {isExpanded && (
                    <div className="mt-6 pt-4 border-t border-slate-800/80 space-y-3 animate-fadeIn">
                      <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                        Key Responsibilities & Quantified Outcomes:
                      </h4>
                      <ul className="space-y-3">
                        {job.achievements.map((ach, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                            <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Badges */}
                  <div className="mt-6 pt-4 border-t border-slate-800/60 flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-mono text-slate-500 mr-2">Tech Stack:</span>
                    {job.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
