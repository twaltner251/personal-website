import React, { useState } from 'react';
import { Music, Play, Pause } from 'lucide-react';

export const Vinyl: React.FC = () => {
  const [isPlayingVinyl, setIsPlayingVinyl] = useState<boolean>(false);
  const [vinylExpanded, setVinylExpanded] = useState<boolean>(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {vinylExpanded ? (
        <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl shadow-2xl flex items-center gap-4 w-72">
          <div className={`relative w-14 h-14 rounded-full bg-zinc-950 border-4 border-zinc-800 flex items-center justify-center shadow-md ${isPlayingVinyl ? 'animate-spin-slow' : ''}`}>
            <div className="absolute w-4 h-4 rounded-full bg-amber-500 border border-zinc-900"></div>
            <div className="absolute inset-1 rounded-full border border-zinc-800/60"></div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[10px] text-emerald-400 font-mono tracking-wider uppercase">Currently Playing</div>
            <div className="text-xs font-semibold text-zinc-100 truncate">Jazz Trio Improvisation</div>
            <div className="text-[11px] text-zinc-400 truncate">Tyler Waltner Quartet</div>
            <div className="flex items-center gap-2 mt-2">
              <button 
                onClick={() => setIsPlayingVinyl(!isPlayingVinyl)}
                className="p-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition cursor-pointer"
              >
                {isPlayingVinyl ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>
              <button 
                onClick={() => setVinylExpanded(false)}
                className="text-[11px] text-zinc-500 hover:text-zinc-300 ml-auto cursor-pointer"
              >
                Minimize
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => { setVinylExpanded(true); setIsPlayingVinyl(true); }}
          className="group relative w-14 h-14 rounded-full bg-zinc-900 border-2 border-zinc-700 hover:border-zinc-500 shadow-xl flex items-center justify-center transition hover:scale-105 cursor-pointer"
          title="Currently playing: Jazz Recording"
        >
          <div className={`absolute inset-1 rounded-full bg-zinc-950 flex items-center justify-center border border-zinc-800 ${isPlayingVinyl ? 'animate-spin-slow' : ''}`}>
            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
          </div>
          <Music className="absolute -top-1 -right-1 w-4 h-4 text-emerald-400 bg-zinc-900 rounded-full p-0.5 border border-zinc-700" />
        </button>
      )}
    </div>
  );
};