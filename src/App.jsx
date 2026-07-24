import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MetricsOverview from './components/MetricsOverview';
import SkillsMatrix from './components/SkillsMatrix';
import ExperienceTimeline from './components/ExperienceTimeline';
import ProjectsShowcase from './components/ProjectsShowcase';
import PipelinePlayground from './components/PipelinePlayground';
import EducationCertifications from './components/EducationCertifications';
import ResumeModal from './components/ResumeModal';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-black">
      
      {/* Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <MetricsOverview />
        <SkillsMatrix />
        <ExperienceTimeline />
        <ProjectsShowcase />
        <PipelinePlayground />
        <EducationCertifications />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Viewer Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

    </div>
  );
}
