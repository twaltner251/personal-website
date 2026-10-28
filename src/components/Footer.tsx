import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-zinc-800/80 py-8 bg-[#09090b]">
      <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
        <div>© {new Date().getFullYear()} Tyler Waltner. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/twaltner251" target="_blank" rel="noreferrer" className="hover:text-zinc-300 transition">GitHub</a>
          <a href="mailto:twaltner@u.rochester.edu" className="hover:text-zinc-300 transition">Email</a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="hover:text-zinc-300 transition">Resume</a>
        </div>
      </div>
    </footer>
  );
};