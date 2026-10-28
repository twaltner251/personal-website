import React, { useRef } from 'react';
import { Music } from 'lucide-react';

interface PianoKey {
  note: string;
  freq: number;
  type: 'white' | 'black';
  label: string;
}

const pianoKeys: PianoKey[] = [
  { note: 'C4', freq: 261.63, type: 'white', label: 'C' },
  { note: 'C#4', freq: 277.18, type: 'black', label: 'C#' },
  { note: 'D4', freq: 293.66, type: 'white', label: 'D' },
  { note: 'D#4', freq: 311.13, type: 'black', label: 'D#' },
  { note: 'E4', freq: 329.63, type: 'white', label: 'E' },
  { note: 'F4', freq: 349.23, type: 'white', label: 'F' },
  { note: 'F#4', freq: 369.99, type: 'black', label: 'F#' },
  { note: 'G4', freq: 392.00, type: 'white', label: 'G' },
  { note: 'G#4', freq: 415.30, type: 'black', label: 'G#' },
  { note: 'A4', freq: 440.00, type: 'white', label: 'A' },
  { note: 'A#4', freq: 466.16, type: 'black', label: 'A#' },
  { note: 'B4', freq: 493.88, type: 'white', label: 'B' },
  { note: 'C5', freq: 523.25, type: 'white', label: 'C5' }
];

export const Piano: React.FC = () => {
  const audioCtxRef = useRef<AudioContext | null>(null);

  const playPianoNote = (frequency: number) => {
    try {
      if (!audioCtxRef.current) {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioContextClass();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(frequency, ctx.currentTime);

      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 1.2);
    } catch (e) {
      console.error("Audio error:", e);
    }
  };

  return (
    <section id="piano" className="space-y-8 p-8 rounded-2xl bg-gradient-to-b from-zinc-900/80 to-zinc-950 border border-zinc-800">
      <div className="space-y-2 text-center sm:text-left">
        <div className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-mono">
          <Music className="w-3.5 h-3.5" /> Web Audio API Interactive Synth
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-white">Playable Piano</h2>
        <p className="text-sm text-zinc-400">Click any key below to play synthesizer notes in real-time.</p>
      </div>

      <div className="flex justify-center py-4 overflow-x-auto">
        <div className="relative flex bg-zinc-950 p-3 rounded-xl border border-zinc-800 shadow-2xl">
          {pianoKeys.map((key, index) => {
            if (key.type === 'white') {
              return (
                <button
                  key={index}
                  onClick={() => playPianoNote(key.freq)}
                  className="w-12 h-36 bg-zinc-100 hover:bg-zinc-300 active:bg-zinc-400 text-zinc-900 rounded-b-md mx-0.5 flex flex-col justify-end pb-3 text-xs font-bold transition shadow-sm cursor-pointer select-none"
                >
                  <span>{key.label}</span>
                </button>
              );
            } else {
              return (
                <button
                  key={index}
                  onClick={() => playPianoNote(key.freq)}
                  className="w-8 h-20 bg-zinc-900 hover:bg-zinc-800 active:bg-zinc-700 text-zinc-300 rounded-b-md -mx-4 z-10 flex flex-col justify-end pb-2 text-[10px] font-bold transition shadow-md cursor-pointer select-none border border-zinc-700"
                >
                  <span>{key.label}</span>
                </button>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};