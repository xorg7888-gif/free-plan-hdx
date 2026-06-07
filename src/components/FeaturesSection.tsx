/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import * as Lucide from "lucide-react";
import { FEATURES } from "../data";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative bg-brand-dark overflow-hidden scroll-mt-20">
      {/* Decorative gradients */}
      <div className="absolute top-[30%] right-[3%] w-[400px] h-[400px] rounded-full bg-brand-cyan/2 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[3%] w-[400px] h-[400px] rounded-full bg-brand-purple/2 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-cyan font-mono text-xs font-semibold tracking-widest uppercase bg-brand-cyan/5 px-3.5 py-1.5 rounded-full border border-brand-cyan/10">
            // Architecture & Core
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Why Choose HDX-INVITE?
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            Our infrastructure represents gaming-hardware excellence. No throttling, 
            no CPU overhead, and full terminal control over your private Minecraft experience.
          </p>
        </div>

        {/* Features Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature) => {
            // Find the appropriate lucide icon dynamically
            const IconComponent = (Lucide as any)[feature.iconName] || Lucide.HelpCircle;

            return (
              <div
                key={feature.id}
                id={`feature-card-${feature.id}`}
                className="group relative rounded-2xl border border-white/5 bg-brand-card p-6 backdrop-blur-md transition-all duration-350 hover:-translate-y-2 hover:bg-white/[0.03] hover:border-brand-cyan/25 hover:shadow-[0_15px_30px_rgba(0,240,255,0.06)] flex flex-col justify-start align-top"
              >
                {/* Visual gradient accent */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] w-0 bg-gradient-to-r from-brand-cyan to-brand-purple transition-all duration-350 group-hover:w-full" />

                {/* Card Icon Header container */}
                <div className="mb-5 p-3 w-12 h-12 rounded-xl bg-white/[0.02] border border-white/5 transition-all duration-300 group-hover:border-brand-cyan/20 group-hover:bg-brand-cyan/5 text-gray-400 group-hover:text-brand-cyan flex items-center justify-center">
                  <IconComponent className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                </div>

                <h3 className="font-display font-bold text-base text-white tracking-wide group-hover:text-brand-cyan transition-colors duration-200">
                  {feature.title}
                </h3>
                
                <p className="mt-3 text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
