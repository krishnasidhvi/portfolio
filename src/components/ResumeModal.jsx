import React, { useState } from 'react';
import { X, Printer, Download, Copy, Check, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { personalInfo, workExperience, projects, education, certifications } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const rawResumeText = `
KRISHNA SIDHVI NEKKANTI
Relocated: Hyderabad, India | ${personalInfo.phone} | ${personalInfo.email}
LinkedIn: ${personalInfo.linkedIn} | GitHub: ${personalInfo.github}

SUMMARY:
${personalInfo.summary}

WORK EXPERIENCE:
${workExperience.map(j => `${j.role} - ${j.company} (${j.period})\n` + j.achievements.map(a => `• ${a}`).join('\n')).join('\n\n')}

RESEARCH PROJECTS:
${projects.map(p => `${p.title} (${p.subtitle})\n` + p.keyPoints.map(k => `• ${k}`).join('\n')).join('\n\n')}

EDUCATION:
${education.map(e => `${e.degree} - ${e.institution} (${e.year})`).join('\n')}

CERTIFICATIONS:
${certifications.map(c => `• ${c.name} (${c.issuer})`).join('\n')}
    `;
    navigator.clipboard.writeText(rawResumeText.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative flex flex-col">
        
        {/* Modal Toolbar (Sticky Top) */}
        <div className="sticky top-0 z-20 bg-slate-950/95 backdrop-blur-md px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-cyan-400"></span>
            <h3 className="text-sm font-bold text-white font-mono">Master Resume View</h3>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-300 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Copied' : 'Copy Text'}
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs transition-all shadow-md"
            >
              <Printer className="w-3.5 h-3.5" />
              Print / Save PDF
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document */}
        <div id="resume-print-area" className="p-8 sm:p-12 space-y-8 bg-slate-900 text-slate-100">
          
          {/* Resume Header */}
          <div className="text-center pb-6 border-b border-slate-800 space-y-2">
            <h1 className="text-3xl font-extrabold tracking-tight text-white uppercase">
              {personalInfo.name}
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-4 text-xs font-mono text-slate-300">
              <span>{personalInfo.location}</span>
              <span>•</span>
              <span>{personalInfo.phone}</span>
              <span>•</span>
              <span>{personalInfo.email}</span>
            </div>
            <div className="flex justify-center items-center gap-4 pt-1 text-xs font-mono text-cyan-400">
              <a href={personalInfo.linkedIn} target="_blank" rel="noreferrer">LinkedIn Profile</a>
              <span>•</span>
              <a href={personalInfo.github} target="_blank" rel="noreferrer">GitHub Profile</a>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-2">
            <h2 className="text-sm font-mono font-bold text-cyan-400 uppercase tracking-wider border-b border-cyan-500/20 pb-1">
              SUMMARY
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {personalInfo.summary}
            </p>
          </div>

          {/* Core Competencies */}
          <div className="space-y-2">
            <h2 className="text-sm font-mono font-bold text-cyan-400 uppercase tracking-wider border-b border-cyan-500/20 pb-1">
              CORE COMPETENCIES
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed font-mono">
              Data Analysis & Management | Data Science, Governance, & Reporting | Data Quality and Integrity | Data Warehouse, Integrations, Replication | ETL Processes | Data Structures & Database Management | Consultative & Solution Selling | Risk Mitigation | Key Performance Metrics Tracking | Cross-functional Collaboration.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-sm font-mono font-bold text-cyan-400 uppercase tracking-wider border-b border-cyan-500/20 pb-1">
              TECHNICAL SKILLS
            </h2>
            <ul className="text-xs text-slate-300 space-y-1 font-mono">
              <li>• <strong className="text-slate-100">Programming Languages:</strong> Python, SQL</li>
              <li>• <strong className="text-slate-100">Cloud & Data Platforms:</strong> AWS (Glue, Redshift, Lambda), Azure Data Factory, Informatica</li>
              <li>• <strong className="text-slate-100">Big Data & ETL:</strong> Apache Spark, Hadoop, ETL</li>
              <li>• <strong className="text-slate-100">Data Analytics & Viz:</strong> Power BI, Tableau, Power Apps, Power Automate</li>
              <li>• <strong className="text-slate-100">Data Integration & APIs:</strong> REST APIs, AWS Data Pipeline, Azure Fabric</li>
              <li>• <strong className="text-slate-100">Frameworks & Libraries:</strong> Scikit-Learn, Pandas, NumPy, Matplotlib, TensorFlow, PyTorch</li>
              <li>• <strong className="text-slate-100">Streaming:</strong> Apache Kafka</li>
            </ul>
          </div>

          {/* Work Experience */}
          <div className="space-y-6">
            <h2 className="text-sm font-mono font-bold text-cyan-400 uppercase tracking-wider border-b border-cyan-500/20 pb-1">
              WORK EXPERIENCE
            </h2>
            {workExperience.map((job) => (
              <div key={job.id} className="space-y-2 resume-item-block">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-white uppercase text-sm">{job.role}</span>
                    <span className="text-cyan-400 font-semibold ml-2">— {job.company}, {job.location}</span>
                  </div>
                  <span className="font-mono text-slate-400">{job.period}</span>
                </div>
                <ul className="space-y-1.5 pl-4 list-disc text-xs text-slate-300">
                  {job.achievements.map((ach, idx) => (
                    <li key={idx} className="leading-relaxed">{ach}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Master's Research Projects */}
          <div className="space-y-6">
            <h2 className="text-sm font-mono font-bold text-cyan-400 uppercase tracking-wider border-b border-cyan-500/20 pb-1">
              MASTER'S DEGREE RESEARCH – DATA SCIENCE PROJECTS
            </h2>
            {projects.map((proj) => (
              <div key={proj.id} className="space-y-2 resume-item-block">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-white text-sm">{proj.title}</span>
                  <span className="font-mono text-slate-400">{proj.period}</span>
                </div>
                <ul className="space-y-1.5 pl-4 list-disc text-xs text-slate-300">
                  {proj.keyPoints.map((kp, idx) => (
                    <li key={idx} className="leading-relaxed">{kp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-3 resume-item-block">
            <h2 className="text-sm font-mono font-bold text-cyan-400 uppercase tracking-wider border-b border-cyan-500/20 pb-1">
              EDUCATION
            </h2>
            {education.map((edu, idx) => (
              <div key={idx} className="flex justify-between items-baseline text-xs text-slate-300">
                <div>
                  <strong className="text-white">{edu.institution}</strong> – {edu.location} | <span className="text-cyan-400">{edu.degree}</span>
                </div>
                <span className="font-mono text-slate-400">{edu.year}</span>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-2 resume-item-block">
            <h2 className="text-sm font-mono font-bold text-cyan-400 uppercase tracking-wider border-b border-cyan-500/20 pb-1">
              CERTIFICATIONS
            </h2>
            <ul className="text-xs text-slate-300 space-y-1">
              {certifications.map((c, i) => (
                <li key={i}>• <strong className="text-white">{c.name}</strong> by {c.issuer}</li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}
