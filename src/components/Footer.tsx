/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Shield, ArrowUp, ArrowRight, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#030306] border-t border-white/5 py-16 text-gray-500 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-brand-cyan/2 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pb-12 border-b border-white/5">
          
          {/* Column 1: Brand & Values */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <a href="#home" className="flex items-center gap-2 font-display text-white font-bold text-lg tracking-wider">
              <Shield className="w-5 h-5 text-brand-cyan" />
              HDX<span className="text-brand-cyan">-INVITE</span>
            </a>
            <p className="text-gray-400 text-xs sm:text-sm max-w-sm leading-relaxed">
              Premium invite-based and high-capacity monthly Minecraft hosting. 
              Engineered with raw hardware performance, complete panel flexibility, 
              and 24/7 technical stability.
            </p>
            <div className="text-[10px] font-mono uppercase tracking-[3px] text-brand-purple font-semibold mt-1">
              POWER • SPEED • UPTIME
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-white text-xs font-mono font-bold uppercase tracking-widest mb-4">// NAVIGATION</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-sans font-medium">
              <li>
                <a href="#home" className="hover:text-brand-cyan transition-colors duration-200">Home Gateway</a>
              </li>
              <li>
                <a href="#plans" className="hover:text-brand-cyan transition-colors duration-200">Server Plans</a>
              </li>
              <li>
                <a href="#status" className="hover:text-brand-cyan transition-colors duration-200">Active Status</a>
              </li>
              <li>
                <a href="#features" className="hover:text-brand-cyan transition-colors duration-200">System Features</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources & Support */}
          <div className="md:col-span-4">
            <h4 className="text-white text-xs font-mono font-bold uppercase tracking-widest mb-4">// CHANNELS</h4>
            <p className="text-xs text-gray-400 mb-4 leading-normal">
              Official customer setups, custom ticket panels and cluster activations take place inside our chat server:
            </p>
            <a
              id="footer-discord-direct"
              href="https://discord.gg/s9cd4UrnqP"
              target="_blank"
              referrerPolicy="no-referrer"
              className="inline-flex items-center gap-2 text-xs font-mono text-brand-cyan hover:text-white font-bold bg-white/[0.02] border border-white/5 hover:border-brand-cyan/20 px-3.5 py-2 rounded-lg transition-all"
            >
              discord.gg/s9cd4UrnqP
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Lower Meta Block (Copyright & Scroll-To-Top) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left text-xs text-gray-600">
            <span>© {new Date().getFullYear()} HDX-INVITE Hosting. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              Engineered with <Heart className="w-3 h-3 text-brand-purple fill-current" /> for Minecraft Communities
            </span>
          </div>

          <button
            id="scroll-to-top-btn"
            onClick={scrollToTop}
            title="Scroll back to top of page"
            className="p-3 rounded-lg bg-white/[0.02] border border-white/5 hover:border-brand-cyan/40 hover:bg-brand-cyan/5 text-gray-400 hover:text-brand-cyan transition-all duration-300 cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
