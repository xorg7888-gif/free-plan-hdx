/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { MessageSquareCode, ArrowUpRight, Sparkles, UserPlus } from "lucide-react";

export default function DiscordCta() {
  return (
    <section className="py-24 relative bg-black overflow-hidden border-t border-white/5">
      {/* Immersive backing gradient fields */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-cyan to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand-cyan/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Call to arms badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 mb-6 text-brand-cyan font-mono text-xs uppercase tracking-widest animate-pulse-slow">
          <Sparkles className="w-3.5 h-3.5 fill-current" /> ACCESS YOUR FREE SERVER AT NO COST
        </div>

        {/* Big Premium Header */}
        <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
          Ready to Host? <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-white to-brand-purple">
            Join Our Discord Community
          </span>
        </h2>

        {/* Persuasive copy */}
        <p className="mt-6 max-w-xl mx-auto text-sm sm:text-base text-gray-400 font-sans leading-relaxed">
          Get elite 24/7 client support, real-time node updates, plugin download codes, 
          and immediate access to invite-based plans through our Discord community.
        </p>

        {/* Giant Pulsating join button */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4">
          <a
            id="discord-cta-bottom"
            href="https://discord.gg/s9cd4UrnqP"
            target="_blank"
            referrerPolicy="no-referrer"
            className="group relative inline-flex items-center gap-3.5 px-10 py-5 rounded-2xl text-black font-semibold tracking-wider font-mono bg-brand-cyan hover:bg-brand-cyan/95 transition-all duration-300 scale-100 hover:scale-[1.03] cursor-pointer shadow-[0_0_30px_rgba(0,240,255,0.3)] hover:shadow-[0_0_40px_rgba(0,240,255,0.5)]"
          >
            {/* SVG Discord Icon */}
            <svg
              className="w-5.5 h-5.5 fill-current transition-transform duration-300 group-hover:rotate-6"
              viewBox="0 0 127.14 96.36"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M107.7,8.07c-9.56-4.42-19.85-7.7-30.73-9.59a1.85,1.85,0,0,0-1.92.93,88.4,88.4,0,0,0-3.83,7.9,98.68,98.68,0,0,0-29,0,81.18,81.18,0,0,0-3.9-7.9,1.88,1.88,0,0,0-1.92-.93C25.56,2.07,15.27,5.34,5.71,11.39a1.84,1.84,0,0,0-.78.71C-14.54,41.64-10,71.21,14.65,95.53a1.94,1.94,0,0,0,1.47.69c8.29,6.08,16.27,9.79,24.08,12.21a1.87,1.87,0,0,0,2-.65c1.86-2.54,3.5-5.23,4.92-8.06a1.86,1.86,0,0,0-1-2.56,64.88,64.88,0,0,1-9.61-4.58,1.87,1.87,0,0,1-.18-3.09c.66-.49,1.3-1,1.93-1.51a1.85,1.85,0,0,1,1.93-.25c31.11,14.2,64.55,14.2,95.09,0a1.82,1.82,0,0,1,1.94.24c.64.51,1.28,1,1.93,1.51a1.87,1.87,0,0,1-.17,3.09,72.41,72.41,0,0,1-9.62,4.58,1.86,1.86,0,0,0-1,2.56c1.43,2.83,3.07,5.52,4.92,8.06a1.88,1.88,0,0,0,2-.65c7.83-2.42,15.82-6.13,24.11-12.21a1.87,1.87,0,0,0,1.46-.69C138.41,63.14,133.7,33.56,114.2,12.1A1.89,1.89,0,0,0,107.7,8.07ZM42.45,65.69C35.39,65.69,29.58,59.18,29.58,51.3s5.81-14.39,12.87-14.39S55.43,43.42,55.32,51.3C55.32,59.18,49.51,65.69,42.45,65.69Zm42.24,0C77.63,65.69,71.82,59.18,71.82,51.3s5.81-14.39,12.87-14.39,12.87,6.48,12.87,14.39S91.73,65.69,84.69,65.69Z" />
            </svg>
            <span className="flex items-center gap-1 font-bold">
              Join Discord Server
              <ArrowUpRight className="w-4 h-4 text-black shrink-0" />
            </span>
          </a>

          {/* Discord metrics line */}
          <div className="flex items-center gap-5 mt-4 text-xs font-mono text-gray-500 uppercase tracking-widest">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
              946 Users Online
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <UserPlus className="w-3.5 h-3.5 text-brand-purple" />
              2,830 Total Members
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
