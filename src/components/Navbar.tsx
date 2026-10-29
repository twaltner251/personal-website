import React from 'react';
import { BadgeJapaneseYen, Book, Briefcase, Music, Code, Mail } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#09090b]/80 backdrop-blur-md border-b border-zinc-800/60">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#about" className="font-semibold text-lg tracking-tight flex items-center gap-2 text-zinc-100">
          <BadgeJapaneseYen/>
          Tyler Waltner
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
          <a href="#experience" className="hover:text-zinc-100 transition flex items-center gap-1.5"><Briefcase className="w-5 h-5 text-emerald-400" />Experience</a>
          <a href="#projects" className="hover:text-zinc-100 transition flex items-center gap-1.5"><Code className="w-5 h-5 text-indigo-400" />Projects</a>
          <a href="#piano" className="hover:text-zinc-100 transition flex items-center gap-1.5"><Music className="w-3.5 h-3.5 text-amber-400" /> Piano</a>
          <a href="#contact" className="hover:text-zinc-100 transition flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-blue-400" />Contact</a>
        </nav>
      </div>
    </header>
  );
};