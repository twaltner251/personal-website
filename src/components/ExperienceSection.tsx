import React from 'react';
import { Briefcase } from 'lucide-react';

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

const experiences: Experience[] = [
  {
    role: "Jazz Musician & Band Leader",
    company: "Self-employed — Portland, OR / Rochester, NY",
    period: "May 2020 — Present",
    description: "Direct 3 active jazz ensembles (Overbridge, Tyler Waltner Quartet/Trio, Nu Zeta), producing 100+ annual live performances. Manage full operational lifecycle including venue booking, contract negotiation, financial tracking, and musical arrangement."
  },
  {
    role: "Coding Camp Instructor",
    company: "Coding with Kids — Portland, OR",
    period: "Aug. 2024 — Present",
    description: "Taught engaging coding classes to K-12 students using structured curriculum in Python, AI/ML, data analysis, and game development. Led hands-on projects and supported student problem-solving in a positive classroom environment."
  }
];

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="space-y-12">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800">
          <Briefcase className="w-5 h-5 text-emerald-400" />
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-white">Experience</h2>
      </div>
      
      <div className="grid gap-6">
        {experiences.map((exp, idx) => (
          <div key={idx} className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700 transition space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h3 className="text-lg font-semibold text-zinc-100">{exp.role}</h3>
              <span className="text-xs text-zinc-500 font-mono bg-zinc-900 px-2.5 py-1 rounded-md border border-zinc-800 w-fit">{exp.period}</span>
            </div>
            <div className="text-sm font-medium text-emerald-400">{exp.company}</div>
            <p className="text-sm text-zinc-400 leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};