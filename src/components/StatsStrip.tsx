/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Clock, Users, Cpu, Disc, Settings, Blocks } from "lucide-react";

export default function StatsStrip() {
  const stats = [
    {
      icon: <Clock className="w-5 h-5 text-brand-cyan" />,
      label: "24/7 Uptime",
      desc: "Guaranteed Node Status",
    },
    {
      icon: <Users className="w-5 h-5 text-brand-purple" />,
      label: "Fast Support",
      desc: "Instant Discord Tickets",
    },
    {
      icon: <Cpu className="w-5 h-5 text-brand-cyan" />,
      label: "Intel CPUs",
      desc: "Enterprise Core Processors",
    },
    {
      icon: <Disc className="w-5 h-5 text-brand-purple" />,
      label: "DDR4 RAM",
      desc: "High-Frequency Buffers",
    },
    {
      icon: <Settings className="w-5 h-5 text-brand-cyan" />,
      label: "Plugin Installer",
      desc: "One-Click Easy Addons",
    },
    {
      icon: <Blocks className="w-5 h-5 text-brand-purple" />,
      label: "Mod Support",
      desc: "Forge, Fabric & Spigot Ready",
    },
  ];

  return (
    <div className="relative py-12 bg-black border-y border-white/5 overflow-hidden">
      {/* Subtle radial sheen */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-purple/2 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              id={`stat-strip-item-${stat.label.toLowerCase().replace(" ", "-")}`}
              className="flex items-start gap-3 p-4 rounded-xl border border-white/[0.02] bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/5 transition-all duration-300 group"
            >
              <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 group-hover:border-brand-cyan/20 group-hover:bg-brand-cyan/5 transition-colors duration-300 shrink-0">
                {stat.icon}
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-sm tracking-wide text-white group-hover:text-brand-cyan transition-colors">
                  {stat.label}
                </span>
                <span className="font-mono text-[10px] text-gray-500 uppercase tracking-wider mt-0.5">
                  {stat.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
