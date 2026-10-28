import React from 'react';
import { Music, FileText } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#09090b]/80 backdrop-blur-md border-b border-zinc-800/60">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold text-lg tracking-tight flex items-center gap-2 text-zinc-100">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          Tyler Waltner
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
          <a href="#about" className="hover:text-zinc-100 transition">About</a>
          <a href="#experience" className="hover:text-zinc-100 transition">Experience</a>
          <a href="#projects" className="hover:text-zinc-100 transition">Projects</a>
          <a href="#piano" className="hover:text-zinc-100 transition flex items-center gap-1.5"><Music className="w-3.5 h-3.5 text-amber-400" /> Piano</a>
          <a href="#contact" className="hover:text-zinc-100 transition">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md bg-zinc-800/80 hover:bg-zinc-700 text-zinc-200 transition border border-zinc-700/50"
          >
            <FileText className="w-3.5 h-3.5" /> Resume
          </a>
        </div>
      </div>
    </header>
  );
};