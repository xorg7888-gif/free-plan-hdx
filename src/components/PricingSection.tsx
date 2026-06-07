/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Check, Flame, Trophy, Award, Sparkles, ChevronRight, MessageSquare, Zap } from "lucide-react";
import { INVITE_PLANS, PREMIUM_PLANS } from "../data";

export default function PricingSection() {
  const [isMonthly, setIsMonthly] = useState(false);

  return (
    <section id="plans" className="py-24 relative bg-brand-dark overflow-hidden scroll-mt-20">
      {/* Decorative cybernetic backdrop orbs */}
      <div className="absolute top-[10%] left-[-100px] w-[500px] h-[500px] rounded-full bg-brand-cyan/3 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-100px] w-[500px] h-[500px] rounded-full bg-brand-purple/3 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-cyan font-mono text-xs font-semibold tracking-widest uppercase bg-brand-cyan/5 px-3.5 py-1.5 rounded-full border border-brand-cyan/10">
            🛡️ Choose Your Arsenal
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            High-Performance Server Plans
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            Choose the invite plan that matches your community size and server needs. 
            Every plan is built for performance, uptime, and easy management. We support both 
            Free Invite Claims and Premium Monthly Nodes.
          </p>

          {/* Toggle Switch */}
          <div className="mt-10 inline-flex items-center gap-1 p-1 bg-black/60 rounded-xl border border-white/5 backdrop-blur-md">
            <button
              id="pricing-type-invite"
              onClick={() => setIsMonthly(false)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                !isMonthly
                  ? "bg-brand-cyan text-black shadow-[0_0_15px_rgba(0,240,255,0.25)] font-extrabold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <UsersIcon />
              Discord Invite Plans (Free)
            </button>
            <button
              id="pricing-type-monthly"
              onClick={() => setIsMonthly(true)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                isMonthly
                  ? "bg-brand-purple text-white shadow-[0_0_15px_rgba(157,78,221,0.25)] font-extrabold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <ZapIcon />
              Premium Monthly (Paid)
            </button>
          </div>
        </div>

        {/* Dynamic Cards Grid */}
        {!isMonthly ? (
          /* Invite-Based Hosting Plan Cards (6 Grid Layout) */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INVITE_PLANS.map((plan) => (
              <div
                key={plan.id}
                id={`plan-card-${plan.id}`}
                className={`relative rounded-2xl border bg-brand-card hover:bg-white/[0.04] p-6 sm:p-8 backdrop-blur-md transition-all duration-350 flex flex-col justify-between group overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,240,255,0.08)] ${
                  plan.recommended
                    ? "border-brand-cyan/40 shadow-[0_0_30px_rgba(0,240,255,0.05)] ring-1 ring-brand-cyan/25"
                    : "border-white/5 hover:border-brand-cyan/35"
                }`}
              >
                {/* Popular Glow Backdrop */}
                {plan.recommended && (
                  <div className="absolute -top-16 -right-16 w-32 h-32 bg-brand-cyan/10 rounded-full blur-2xl group-hover:bg-brand-cyan/20 transition-all" />
                )}

                {/* Card Badges */}
                <div className="flex items-center justify-between gap-2 mb-6">
                  <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-brand-cyan bg-brand-cyan/5 px-2.5 py-1 rounded-md border border-brand-cyan/15">
                    {plan.tag || "Core Host"}
                  </span>
                  
                  {plan.recommended && (
                    <span className="inline-flex items-center gap-1 text-[9px] font-mono font-bold tracking-widest text-black bg-brand-cyan px-2.5 py-1 rounded-md shadow-[0_0_10px_rgba(0,240,255,0.3)] select-none">
                      <Flame className="w-3 h-3 fill-current" /> RECOMMENDED
                    </span>
                  )}
                </div>

                {/* Plan Header details & invite tally */}
                <div className="mb-6">
                  <h3 className="font-display font-extrabold text-2xl text-white tracking-wide group-hover:text-brand-cyan transition-colors duration-200">
                    {plan.name}
                  </h3>
                  <div className="mt-4 flex items-baseline gap-1.5">
                    <span className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
                      {plan.invitesRequired}
                    </span>
                    <span className="text-brand-cyan font-mono text-xs font-semibold uppercase tracking-wider">
                      Discord Invites
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 font-mono mt-2 uppercase tracking-wide">
                    {plan.supportedVers}
                  </p>
                </div>

                {/* Hardware Spec Matrix */}
                <div className="mb-8 border-t border-white/5 pt-6 space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400 font-mono">Processor</span>
                    <span className="text-white font-mono font-bold">{plan.cpu}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400 font-mono">Dedicated RAM</span>
                    <span className="text-brand-cyan font-mono font-bold">{plan.ram}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400 font-mono">NVMe Storage</span>
                    <span className="text-white font-mono font-semibold">{plan.disk}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs border-b border-white/5 pb-4">
                    <span className="text-gray-400 font-mono">DDoS Protection</span>
                    <span className="text-emerald-400 font-mono font-semibold">Unlimited 1Gbps</span>
                  </div>

                  {/* Included Server management checklist */}
                  <div className="space-y-2.5 pt-2">
                    {plan.features.map((feat, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-brand-cyan bg-brand-cyan/5 rounded p-0.5 shrink-0" />
                        <span className="text-xs text-gray-300 font-sans">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Call To Action Buttons */}
                <a
                  id={`cta-invite-${plan.id}`}
                  href="https://discord.gg/s9cd4UrnqP"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className={`w-full py-3 px-4 rounded-xl font-mono text-xs font-bold tracking-wider uppercase text-center flex items-center justify-center gap-2 hover:scale-[1.01] transition-all duration-300 ${
                    plan.recommended
                      ? "bg-brand-cyan text-black shadow-[0_4px_15px_rgba(0,240,255,0.2)] hover:shadow-[0_4px_25px_rgba(0,240,255,0.35)]"
                      : "bg-white/[0.03] text-white border border-white/10 hover:bg-white/[0.08] hover:border-brand-cyan/40"
                  }`}
                >
                  <MessageSquare className="w-4 h-4" />
                  Claim With Invites
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        ) : (
          /* Premium Monthly Hosting Plans (4 Grid Layout) */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PREMIUM_PLANS.map((plan) => (
              <div
                key={plan.id}
                id={`plan-card-premium-${plan.id}`}
                className={`relative rounded-2xl border bg-brand-card hover:bg-white/[0.04] p-6 backdrop-blur-md transition-all duration-350 flex flex-col justify-between group overflow-hidden hover:-translate-y-2 hover:shadow-[0_25px_45px_rgba(157,78,221,0.08)] ${
                  plan.recommended
                    ? "border-brand-purple/40 shadow-[0_0_30px_rgba(157,78,221,0.05)] ring-1 ring-brand-purple/25"
                    : "border-white/5 hover:border-brand-purple/35"
                }`}
              >
                {/* Popular Glow Backdrop */}
                {plan.recommended && (
                  <div className="absolute -top-16 -right-16 w-32 h-32 bg-brand-purple/10 rounded-full blur-2xl group-hover:bg-brand-purple/20 transition-all" />
                )}

                {/* Card Badges */}
                <div className="flex items-center justify-between gap-2 mb-6">
                  <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-brand-purple bg-brand-purple/5 px-2.5 py-1 rounded-md border border-brand-purple/15">
                    {plan.tag || "Premium Tier"}
                  </span>
                  
                  {plan.recommended && (
                    <span className="inline-flex items-center gap-1 text-[9px] font-mono font-bold tracking-widest text-white bg-brand-purple px-2.5 py-1 rounded-md shadow-[0_0_10px_rgba(157,78,221,0.3)] select-none">
                      <Trophy className="w-3 h-3 fill-current" /> MOST POPULAR
                    </span>
                  )}
                </div>

                {/* Plan Header details & values */}
                <div className="mb-6">
                  <h3 className="font-display font-extrabold text-xl text-white tracking-wide group-hover:text-brand-purple transition-colors duration-200">
                    {plan.name}
                  </h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-gray-400 font-mono text-xs">
                      / month
                    </span>
                  </div>
                  <p className="text-xs text-brand-purple font-mono mt-2 uppercase tracking-wide">
                    {plan.supportedVers}
                  </p>
                </div>

                {/* Hardware Spec Matrix */}
                <div className="mb-8 border-t border-white/5 pt-6 space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400 font-mono">V-Cores</span>
                    <span className="text-white font-mono font-semibold">{plan.cpu}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400 font-mono">DDR4 Memory</span>
                    <span className="text-brand-purple font-mono font-bold">{plan.ram}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400 font-mono">NVMe Raid SSD</span>
                    <span className="text-white font-mono font-semibold">{plan.disk}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs border-b border-white/5 pb-4">
                    <span className="text-gray-400 font-mono">Network Port</span>
                    <span className="text-emerald-400 font-mono font-semibold">1Gbps Port Uplink</span>
                  </div>

                  {/* Included Server features list */}
                  <div className="space-y-2.5 pt-2">
                    {plan.features.map((feat, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-brand-purple bg-brand-purple/5 rounded p-0.5 shrink-0" />
                        <span className="text-xs text-gray-300 font-sans">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Call To Action Buttons */}
                <a
                  id={`cta-premium-${plan.id}`}
                  href="https://discord.gg/s9cd4UrnqP"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className={`w-full py-3 px-4 rounded-xl font-mono text-xs font-bold tracking-wider uppercase text-center flex items-center justify-center gap-2 hover:scale-[1.01] transition-all duration-300 ${
                    plan.recommended
                      ? "bg-brand-purple text-white shadow-[0_4px_15px_rgba(157,78,221,0.2)] hover:shadow-[0_4px_25px_rgba(157,78,221,0.35)]"
                      : "bg-white/[0.03] text-white border border-white/10 hover:bg-white/[0.08] hover:border-brand-purple/40"
                  }`}
                >
                  <Zap className="w-4 h-4" />
                  Request Server Node
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        )}

        {/* Discord Verification Notice Footer bar */}
        <div className="mt-14 p-5 rounded-xl border border-white/5 bg-[#08080c] text-center max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="h-2 w-2 rounded-full bg-brand-cyan animate-pulse shrink-0" />
          <p className="text-xs text-gray-400 font-mono">
            <strong>CLAIM PROCESS:</strong> Joint invite tallies are monitored via our automated <strong>Invite Tracker Bot</strong> inside Discord. Activation happens immediately upon opening a ticket.
          </p>
        </div>

      </div>
    </section>
  );
}

/* Custom Mini Icons to save unnecessary bundle dependencies */
function UsersIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  );
}

function ZapIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  );
}
