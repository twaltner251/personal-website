import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [contactStatus, setContactStatus] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactStatus('success');
  };

  return (
    <section id="contact" className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight text-white">Get in Touch</h2>
        <p className="text-sm text-zinc-400">Have a question or want to collaborate on code or music? Send me a message.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
        <div>
          <label className="block text-xs font-medium text-zinc-400 mb-1">Your Name</label>
          <input 
            required 
            type="text" 
            placeholder="Jane Doe" 
            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-zinc-100 focus:outline-none focus:border-zinc-600 transition" 
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-zinc-400 mb-1">Your Email</label>
          <input 
            required 
            type="email" 
            placeholder="jane@example.com" 
            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-zinc-100 focus:outline-none focus:border-zinc-600 transition" 
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-zinc-400 mb-1">Message</label>
          <textarea 
            required 
            rows={4} 
            placeholder="Let's build something together..." 
            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-zinc-100 focus:outline-none focus:border-zinc-600 transition"
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="px-5 py-2.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-medium text-sm transition flex items-center gap-2 cursor-pointer"
        >
          <Send className="w-4 h-4" /> Send Message
        </button>
        {contactStatus === 'success' && (
          <div className="flex items-center gap-2 text-emerald-400 text-sm pt-2">
            <CheckCircle className="w-4 h-4" /> Message sent successfully! I will get back to you soon.
          </div>
        )}
      </form>
    </section>
  );
};