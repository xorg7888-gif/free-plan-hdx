/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ArrowRight, Terminal, Network, ShieldCheck, Heart } from "lucide-react";

interface HeroProps {
  onViewPlansClick: () => void;
}

export default function Hero({ onViewPlansClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-36 pb-20 flex flex-col items-center justify-center overflow-hidden bg-brand-dark"
    >
      {/* Immersive Animated Background Blobs & Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,5,8,0.3),#050508)] z-0" />

      {/* Cybernetic Grid Line Overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Futuristic Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-brand-cyan/10 blur-[120px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full bg-brand-purple/10 blur-[110px] animate-pulse pointer-events-none" />

      {/* Decorative Minecraft-inspired Isometric Floating Cubes in CSS */}
      <div className="absolute top-[20%] right-[10%] opacity-20 animate-float pointer-events-none hidden lg:block">
        <div className="w-16 h-16 border border-brand-cyan/40 bg-brand-cyan/5 rotate-12 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.1)]">
          <Terminal className="w-6 h-6 text-brand-cyan" />
        </div>
      </div>
      <div className="absolute bottom-[20%] left-[8%] opacity-25 animate-float-delayed pointer-events-none hidden lg:block">
        <div className="w-20 h-20 border border-brand-purple/40 bg-brand-purple/5 -rotate-12 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(157,78,221,0.12)]">
          <Network className="w-8 h-8 text-brand-purple" />
        </div>
      </div>

      {/* Floating Sparkles Block Decoration */}
      <div className="absolute top-[40%] left-[12%] animate-float pointer-events-none opacity-10 hidden md:block">
        <div className="grid grid-cols-2 gap-2">
          <div className="w-3 h-3 bg-brand-cyan"></div>
          <div className="w-3 h-3 bg-transparent border border-brand-cyan/20"></div>
          <div className="w-3 h-3 bg-transparent border border-brand-cyan/20"></div>
          <div className="w-3 h-3 bg-brand-purple"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Futuristic Pill Announcement */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/5 backdrop-blur-md mb-8 animate-fade-in-down">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
          </span>
          <span className="text-[10px] sm:text-xs font-mono font-semibold text-gray-300 uppercase tracking-widest">
            Minecraft Invite Hosting • Version 2.8 Active
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-display font-extrabold tracking-tight text-white select-none">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            HDX-INVITE
          </span>
        </h1>

        {/* Hero Subheading with gradient accents */}
        <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl font-display font-bold text-gray-300 tracking-wide">
          Premium Minecraft{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple font-extrabold underline decoration-brand-cyan/30">
            Invite Hosting
          </span>{" "}
          Plans
        </h2>

        {/* Supporting SEO narrative */}
        <p className="mt-6 max-w-2xl text-sm sm:text-base md:text-lg text-gray-400 font-sans leading-relaxed">
          HDX-INVITE delivers fast, stable, and powerful Minecraft hosting built
          for smooth gameplay, 24/7 uptime, and premium performance for Java and
          Bedrock communities. Claim a zero-cost server by growing our active discord!
        </p>

        {/* Navigation CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-sm sm:max-w-none px-4">
          <a
            id="hero-discord-cta"
            href="https://discord.gg/s9cd4UrnqP"
            target="_blank"
            referrerPolicy="no-referrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4.5 rounded-xl text-black font-semibold tracking-wider font-mono bg-brand-cyan hover:bg-brand-cyan/90 transition-all duration-300 scale-100 hover:scale-[1.02] cursor-pointer glow-cyan-glow shadow-[0_4px_20px_rgba(0,240,255,0.25)] group"
          >
            {/* SVG Discord Icon */}
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 127.14 96.36"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M107.7,8.07c-9.56-4.42-19.85-7.7-30.73-9.59a1.85,1.85,0,0,0-1.92.93,88.4,88.4,0,0,0-3.83,7.9,98.68,98.68,0,0,0-29,0,81.18,81.18,0,0,0-3.9-7.9,1.88,1.88,0,0,0-1.92-.93C25.56,2.07,15.27,5.34,5.71,11.39a1.84,1.84,0,0,0-.78.71C-14.54,41.64-10,71.21,14.65,95.53a1.94,1.94,0,0,0,1.47.69c8.29,6.08,16.27,9.79,24.08,12.21a1.87,1.87,0,0,0,2-.65c1.86-2.54,3.5-5.23,4.92-8.06a1.86,1.86,0,0,0-1-2.56,64.88,64.88,0,0,1-9.61-4.58,1.87,1.87,0,0,1-.18-3.09c.66-.49,1.3-1,1.93-1.51a1.85,1.85,0,0,1,1.93-.25c31.11,14.2,64.55,14.2,95.09,0a1.82,1.82,0,0,1,1.94.24c.64.51,1.28,1,1.93,1.51a1.87,1.87,0,0,1-.17,3.09,72.41,72.41,0,0,1-9.62,4.58,1.86,1.86,0,0,0-1,2.56c1.43,2.83,3.07,5.52,4.92,8.06a1.88,1.88,0,0,0,2-.65c7.83-2.42,15.82-6.13,24.11-12.21a1.87,1.87,0,0,0,1.46-.69C138.41,63.14,133.7,33.56,114.2,12.1A1.89,1.89,0,0,0,107.7,8.07ZM42.45,65.69C35.39,65.69,29.58,59.18,29.58,51.3s5.81-14.39,12.87-14.39S55.43,43.42,55.32,51.3C55.32,59.18,49.51,65.69,42.45,65.69Zm42.24,0C77.63,65.69,71.82,59.18,71.82,51.3s5.81-14.39,12.87-14.39,12.87,6.48,12.87,14.39S91.73,65.69,84.69,65.69Z" />
            </svg>
            Join Discord
          </a>
          <button
            id="hero-view-plans"
            onClick={onViewPlansClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4.5 rounded-xl font-semibold font-mono text-xs tracking-wider text-white bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] hover:border-brand-purple/60 transition-all duration-300 scale-100 hover:scale-[1.02] group cursor-pointer"
          >
            View Server Plans
            <ArrowRight className="w-4 h-4 text-brand-purple group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Minimal trust checklist */}
        <div className="mt-12 pt-7 border-t border-white/5 w-full max-w-3xl flex flex-wrap justify-center items-center gap-y-4 gap-x-8 text-xs font-mono text-gray-500 uppercase tracking-widest">
          <span className="flex items-center gap-1.5 text-gray-400">
            <ShieldCheck className="w-4 h-4 text-brand-cyan" /> 24/7 Guaranteed Uptime
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5 text-gray-400">
            <ShieldCheck className="w-4 h-4 text-brand-purple" /> Intel Core Power
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5 text-gray-400">
            <ShieldCheck className="w-4 h-4 text-brand-cyan" /> Full Node Access
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5 text-gray-400">
            <ShieldCheck className="w-4 h-4 text-brand-purple" /> Bedrock Crossplay
          </span>
        </div>
      </div>
    </section>
  );
}
