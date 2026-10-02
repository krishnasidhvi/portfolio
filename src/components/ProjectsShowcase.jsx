import React, { useState } from 'react';
import { Sparkles, Code2, ArrowUpRight, Check, X, Shield, Activity, Car, AlertTriangle, Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/portfolioData';

export default function ProjectsShowcase() {
  const [selectedProject, setSelectedProject] = useState(null);

  const getProjectIcon = (id) => {
    if (id === 'license-plate') return <Car className="w-6 h-6 text-cyan-400" />;
    if (id === 'chicago-crime') return <Activity className="w-6 h-6 text-emerald-400" />;
    return <AlertTriangle className="w-6 h-6 text-purple-400" />;
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" /> Applied Research & Innovation
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Master's Data Science & ML Projects
          </h2>
          <p className="text-slate-400 text-sm">
            Deep learning, spatial predictive modeling, and streaming event-driven architectures engineered at UMBC.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="bg-slate-900/70 border border-slate-800 rounded-3xl overflow-hidden glass-panel glass-panel-hover flex flex-col justify-between group shadow-xl"
            >
              {/* Card Top / Header */}
              <div className={`p-6 bg-gradient-to-b ${proj.gradient} border-b border-slate-800/80`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
                    {getProjectIcon(proj.id)}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-950/90 border border-slate-700 text-xs font-mono font-semibold text-cyan-300">
                    {proj.metrics}
                  </span>
                </div>

                <span className="text-[11px] font-mono text-slate-400 block">
                  {proj.subtitle}
                </span>
                <h3 className="text-lg font-bold text-white mt-1 group-hover:text-cyan-300 transition-colors">
                  {proj.title}
                </h3>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <p className="text-xs text-slate-300 leading-relaxed">
                  {proj.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-[10px] font-mono text-cyan-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Triggers */}
                <div className="space-y-2 pt-2">
                  <button
                    onClick={() => setSelectedProject(proj)}
                    className="w-full py-2.5 rounded-xl bg-slate-800/80 hover:bg-cyan-500/20 border border-slate-700 hover:border-cyan-500/40 text-xs font-semibold text-slate-200 hover:text-cyan-300 flex items-center justify-center gap-2 transition-all"
                  >
                    View Architecture & Methodology
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-2 px-2 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-[11px] font-semibold text-slate-300 hover:text-white flex items-center justify-center gap-1.5 transition-colors"
                      title={proj.id === 'license-plate' ? 'View Capstone_DATA606 on GitHub' : 'View Repositories on GitHub'}
                    >
                      <Github className="w-3.5 h-3.5 text-cyan-400" />
                      {proj.id === 'license-plate' ? 'GitHub Code' : 'GitHub Repos'}
                    </a>
                    {proj.demoUrl ? (
                      <a
                        href={proj.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 py-2 px-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-[11px] font-semibold text-cyan-300 flex items-center justify-center gap-1.5 transition-colors"
                        title="View Interactive Jupyter Notebook"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Notebook Demo
                      </a>
                    ) : (
                      <button
                        onClick={() => setSelectedProject(proj)}
                        className="flex-1 py-2 px-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-[11px] font-semibold text-cyan-300 flex items-center justify-center gap-1.5 transition-colors"
                        title="Explore Interactive Architecture Pipeline"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                        Live Pipeline
                      </button>
                    )}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl space-y-6 relative">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30">
                  {getProjectIcon(selectedProject.id)}
                </div>
                <div>
                  <span className="text-xs font-mono text-cyan-400">{selectedProject.subtitle}</span>
                  <h3 className="text-xl font-bold text-white">{selectedProject.title}</h3>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300 flex items-center justify-between">
                <span>Key Metric Outcome:</span>
                <span className="font-bold text-sm text-white">{selectedProject.metrics}</span>
              </div>

              {/* Architecture Pipeline Visualizer */}
              {selectedProject.architectureSteps && (
                <div className="space-y-2.5 p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <h4 className="text-xs font-mono uppercase text-cyan-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> End-to-End Pipeline Architecture:
                  </h4>
                  <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-[11px]">
                    {selectedProject.architectureSteps.map((step, sIdx) => (
                      <React.Fragment key={sIdx}>
                        <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700/80 text-cyan-300">
                          {step}
                        </span>
                        {sIdx < selectedProject.architectureSteps.length - 1 && (
                          <span className="text-slate-600 font-bold">➔</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase text-slate-400">Technical Breakdown & Impact:</h4>
                <ul className="space-y-2.5">
                  {selectedProject.keyPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase text-slate-400">Technologies Utilized:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2.5">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-white flex items-center gap-2 transition-all"
                  >
                    <Github className="w-3.5 h-3.5 text-cyan-400" />
                    {selectedProject.id === 'license-plate' ? 'View Capstone_DATA606 on GitHub' : 'View Code on GitHub'}
                  </a>
                  {selectedProject.demoUrl && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-xs font-semibold text-cyan-300 flex items-center gap-2 transition-all"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      View Jupyter Notebook
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2 rounded-xl bg-slate-800 text-white text-xs font-semibold hover:bg-slate-700"
                >
                  Close Window
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
