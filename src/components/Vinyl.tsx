import React, { useState, useEffect, useRef } from 'react';
import { Music, Play, Pause, SkipForward } from 'lucide-react';

interface Track {
  title: string;
  artist: string;
  src: string;
}

const playlist: Track[] = [
  { title: "Just Squeeze Me", artist: "J.E.T. Trio", src: "../audio/squeeze.mp3" },
  { title: "Skylark", artist: "J.E.T. Trio", src: "../audio/skylark.mp3" },
  { title: "This I Dig of You", artist: "J.E.T. Trio", src: "../audio/dig.mp3" },
];

export const Vinyl: React.FC = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(() => Math.floor(Math.random() * playlist.length));
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio object once on mount
  useEffect(() => {
    const audio = new Audio(playlist[currentTrackIndex].src);
    audioRef.current = audio;

    const handleEnded = () => {
      playRandomTrack();
    };

    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.pause();
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  // Handle track switching
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = playlist[currentTrackIndex].src;
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play().catch((err) => {
          console.error("Autoplay/Playback error:", err);
          setIsPlaying(false);
        });
      }
    }
  }, [currentTrackIndex]);

  const togglePlay = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        console.log("Attempting to play:", playlist[currentTrackIndex].src);
        await audioRef.current.play();
        setIsPlaying(true);
        console.log("Playback started successfully!");
      } catch (error) {
        console.error("Browser blocked playback or file missing:", error);
        alert("Playback failed. Check your browser console (F12) to see if the audio file path is correct.");
        setIsPlaying(false);
      }
    }
  };

  const playRandomTrack = () => {
    let nextIndex;
    do {
      nextIndex = Math.floor(Math.random() * playlist.length);
    } while (nextIndex === currentTrackIndex && playlist.length > 1);
    
    setCurrentTrackIndex(nextIndex);
    setIsPlaying(true);
    
    if (audioRef.current) {
      audioRef.current.play().catch((err) => console.error("Random track play error:", err));
    }
  };

  const currentTrack = playlist[currentTrackIndex];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isExpanded ? (
        <div className="bg-zinc-900/95 backdrop-blur-md border border-zinc-800 p-4 rounded-2xl shadow-2xl flex items-center gap-4 w-72 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4">
          
          {/* Textured Rotating Vinyl Disc */}
          <div 
            className={`relative w-16 h-16 rounded-full bg-zinc-950 border-2 border-zinc-800 flex items-center justify-center shadow-xl cursor-pointer shrink-0 overflow-hidden ${
              isPlaying ? 'animate-spin-slow' : ''
            }`}
            onClick={togglePlay}
            title="Click to play/pause"
          >
            <div className="absolute inset-1 rounded-full border border-zinc-800/90 pointer-events-none"></div>
            <div className="absolute inset-2.5 rounded-full border border-zinc-800/70 pointer-events-none"></div>
            <div className="absolute inset-4 rounded-full border border-zinc-800/40 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent pointer-events-none"></div>
            
            <div className="absolute w-6 h-6 rounded-full bg-amber-600 border border-amber-500 flex items-center justify-center shadow-inner z-10">
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-950"></div>
            </div>
          </div>

          {/* Track Info & Controls */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-mono tracking-wider uppercase">
              <span className={`w-1.5 h-1.5 rounded-full bg-emerald-500 ${isPlaying ? 'animate-pulse' : ''}`}></span>
              {isPlaying ? 'Currently Playing' : 'Paused'}
            </div>
            <div className="text-xs font-semibold text-zinc-100 truncate mt-0.5">{currentTrack.title}</div>
            <div className="text-[11px] text-zinc-400 truncate">{currentTrack.artist}</div>
            
            <div className="flex items-center gap-2 mt-2.5">
              <button 
                onClick={togglePlay}
                className="p-1.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition cursor-pointer"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>
              <button 
                onClick={playRandomTrack}
                className="flex items-center gap-1 text-[11px] font-medium px-2 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition cursor-pointer"
              >
                <SkipForward className="w-3 h-3" /> Random
              </button>
              <button 
                onClick={() => setIsExpanded(false)}
                className="text-[11px] text-zinc-500 hover:text-zinc-300 ml-auto transition cursor-pointer"
              >
                Minimize
              </button>
            </div>
          </div>

        </div>
      ) : (
        <button 
          onClick={() => { setIsExpanded(true);  }}
          className="group relative w-14 h-14 rounded-full bg-zinc-900 border-2 border-zinc-700 hover:border-zinc-500 shadow-xl flex items-center justify-center transition hover:scale-105 cursor-pointer overflow-hidden"
          title="Open currently playing music"
        >
          <div className={`absolute inset-1 rounded-full bg-zinc-950 flex items-center justify-center border border-zinc-800 ${isPlaying ? 'animate-spin-slow' : ''}`}>
            <div className="absolute inset-1 rounded-full border border-zinc-800/80 pointer-events-none"></div>
            <div className="absolute inset-2.5 rounded-full border border-zinc-800/60 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none"></div>
            <div className="w-3 h-3 rounded-full bg-amber-600 border border-amber-500 z-10"></div>
          </div>
          <Music className="absolute -top-1 -right-1 w-4 h-4 text-emerald-400 bg-zinc-900 rounded-full p-0.5 border border-zinc-700 z-20" />
        </button>
      )}
    </div>
  );
};