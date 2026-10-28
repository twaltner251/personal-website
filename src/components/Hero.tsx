import React from 'react';
import { Sparkles, ChevronRight, Mail } from 'lucide-react';
import Github from '../assets/github.png';


export const Hero: React.FC = () => {
  return (
    <section id="home" className="space-y-8 pt-8">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-400">
        <Sparkles className="w-3.5 h-3.5 text-amber-400" /> CS @ Univ. of Rochester & Jazz Performance @ Eastman
      </div>
      <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.1]">
        Engineering software with algorithmic precision & musical rhythm.
      </h1>
      <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
        Hi, I’m Tyler Waltner. I build high-performance 3D visualizations, custom machine learning pipelines, and perform as a professional jazz band leader across Portland and Rochester.
      </p>
      <div className="flex flex-wrap items-center gap-4 pt-2">
        <a 
          href="#projects" 
          className="px-5 py-2.5 rounded-lg bg-zinc-100 text-zinc-900 font-medium text-sm hover:bg-zinc-200 transition flex items-center gap-2 shadow-sm"
        >
          View Projects <ChevronRight className="w-4 h-4" />
        </a>
        <a 
            href="https://github.com/twaltner251" 
            target="_blank" 
            rel="noreferrer"
            className="px-5 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-medium text-sm transition border border-zinc-800 flex items-center gap-2"
            >
            {/* Use an img tag instead of treating Github as a component */}
            <img src={Github} alt="GitHub" className="w-4 h-4 object-contain" /> GitHub
        </a>
        <a 
          href="#contact" 
          className="px-5 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-medium text-sm transition border border-zinc-800 flex items-center gap-2"
        >
          <Mail className="w-4 h-4" /> Get in Touch
        </a>
      </div>
    </section>
  );
};