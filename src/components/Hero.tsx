import React from 'react';
import { Sparkles, ChevronRight, Mail, FileText } from 'lucide-react';
import Github from '../assets/github.png';
import pfp from '../assets/pfp.png'
import dogs from '../assets/dogs.png'
import Linkedin from '../assets/linkedin.png'
import jazz from '../assets/jazz.png'
import HeroCarousel from './HeroCarousel';

const images = [
  { url: pfp, caption: 'NYC (2025)' },
  { url: dogs, caption: 'Ponsuke (L) Chacha-maru (R)' },
  { url: jazz, caption: 'Rose City Book Pub (2025)' },

];

export const Hero: React.FC = () => {
  return (
    <section id="about" className="space-y-8 pt-8">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-s text-zinc-400">
          <Sparkles className="w-4.5 h-4.5 text-amber-400" /> Computer Science @ University of Rochester & Jazz Performance @ Eastman School of Music
        </div>
      
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
        {/* Left Column (Text + Buttons) */}
        <div className="space-y-4">  
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-white leading-[1.1]" style={{ fontFamily: "'Comic Sans MS', monospace", fontSize: "2.5rem" }}>
            Hey, I'm Tyler <span className="inline-block animate-wave">👋</span>
          </h1>
          <p className="text-xl text-white max-w-2xl leading-relaxed">
            20yr old Software Engineer & Jazz Musician based in Rochester, NY
          </p>
          <p className="text-xl text-white max-w-2xl leading-relaxed">
            I have a passion for algorithms, data structures, and building fast, efficient, and scalable software solutions. 
          </p>
          <p className="text-s text-white max-w-2xl leading-relaxed">
            I also have a great passion for jazz as well as cuddling with my dogs Chacha-maru and Ponsuke :)
          </p>

          {/* Buttons moved here, underneath the text but inside the left column */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-zinc-100 text-zinc-900 font-medium text-sm hover:bg-zinc-200 transition flex items-center gap-2 shadow-sm"
            >
              <FileText className="w-4 h-4 object-contain" /> Resume
            </a>
            <a 
              href="" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-medium text-sm transition border border-zinc-800 flex items-center gap-2"
            >
              <img src={Linkedin} alt="LinkedIn" className="w-4 h-4 object-contain" /> LinkedIn
            </a>
            <a 
              href="https://github.com/twaltner251" 
              target="_blank" 
              rel="noreferrer"
              className="px-5 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-medium text-sm transition border border-zinc-800 flex items-center gap-2"
            >
              <img src={Github} alt="GitHub" className="w-4 h-4 object-contain" /> GitHub
            </a>
            <a 
              href="#contact" 
              className="px-5 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-medium text-sm transition border border-zinc-800 flex items-center gap-2"
            >
              <Mail className="w-4 h-4" /> Contact
            </a>
          </div>
        </div>

        {/* Right Column (Image/Carousel) */}
        <div className="sm:ml-8 sm:mt-0 mt-8 shrink-0">
          <HeroCarousel images={images} />
        </div>
      </div>
    </section>
  );
};