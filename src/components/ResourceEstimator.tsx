/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Cpu, HardDrive, Sparkles, MessageSquare, ArrowRight, Settings2 } from "lucide-react";

export default function ResourceEstimator() {
  const [players, setPlayers] = useState(10);
  const [plugins, setPlugins] = useState(5);
  const [isModded, setIsModded] = useState(false);

  // Simple custom heuristic calculations
  const calculateRequirements = () => {
    let baseRam = 1; // 1GB baseline
    
    // Player multipliers
    if (players > 50) baseRam += 4;
    else if (players > 25) baseRam += 2.5;
    else if (players > 10) baseRam += 1.5;
    else if (players > 5) baseRam += 0.5;

    // Plugins multipliers
    if (plugins > 30) baseRam += 2.5;
    else if (plugins > 15) baseRam += 1.5;
    else if (plugins > 5) baseRam += 0.5;

    // Modded multipliers
    if (isModded) {
      baseRam += 2.5;
    }

    // Rounding to nearest solid integer
    const recommendedRam = Math.min(16, Math.max(1, Math.round(baseRam)));
    
    // CPU cores heuristic
    let recommendedCores = 1;
    if (recommendedRam >= 12) recommendedCores = 8;
    else if (recommendedRam >= 8) recommendedCores = 6;
    else if (recommendedRam >= 4) recommendedCores = 4;
    else if (recommendedRam >= 2) recommendedCores = 2;

    // Matching to closest invite plans
    let recommendedInvitePlan = "2 INV PLAN";
    let inviteTarget = 2;
    if (recommendedRam >= 6) {
      recommendedInvitePlan = "12 INV PLAN";
      inviteTarget = 12;
    } else if (recommendedRam >= 5) {
      recommendedInvitePlan = "10 INV PLAN";
      inviteTarget = 10;
    } else if (recommendedRam >= 4) {
      recommendedInvitePlan = "8 INV PLAN";
      inviteTarget = 8;
    } else if (recommendedRam >= 3) {
      recommendedInvitePlan = "6 INV PLAN";
      inviteTarget = 6;
    } else if (recommendedRam >= 2) {
      recommendedInvitePlan = "4 INV PLAN";
      inviteTarget = 4;
    }

    // Matching to premium plans
    let recommendedPremiumPlan = "STARTER SPEC";
    let premiumPrice = "$2.99";
    if (recommendedRam >= 8) {
      recommendedPremiumPlan = "ELITE SPEC";
      premiumPrice = "$10.99";
    } else if (recommendedRam >= 4) {
      recommendedPremiumPlan = "PRO SPEC";
      premiumPrice = "$5.99";
    } else if (recommendedRam >= 16) {
      recommendedPremiumPlan = "ULTIMATE SPEC";
      premiumPrice = "$19.99";
    }

    return {
      ram: recommendedRam,
      cores: recommendedCores,
      invitePlan: recommendedInvitePlan,
      inviteTarget,
      premiumPlan: recommendedPremiumPlan,
      premiumPrice
    };
  };

  const spec = calculateRequirements();

  return (
    <section className="py-20 relative bg-[#040409] overflow-hidden border-t border-white/5">
      <div className="absolute top-[10%] right-[-100px] w-[350px] h-[350px] bg-brand-cyan/2 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-cyan font-mono text-xs font-semibold tracking-widest uppercase bg-brand-cyan/5 px-3.5 py-1.5 rounded-full border border-brand-cyan/10">
            ⚡ Config Estimator
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Minecraft Resource Planner
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            Unsure which plan matches your multiplayer server load? Slide the metrics 
            to estimate your CPU, RAM, and storage requirements immediately.
          </p>
        </div>

        {/* Dynamic Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Slider Inputs form (7 columns) */}
          <div className="lg:col-span-7 rounded-2xl border border-white/5 bg-brand-card p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between relative group">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-brand-cyan/30 via-transparent to-brand-purple/30" />
            
            <div className="space-y-8">
              {/* Sliders Title Header */}
              <div className="flex items-center gap-2.5 mb-2">
                <Settings2 className="w-5 h-5 text-gray-400" />
                <h3 className="font-display font-bold text-base text-gray-200">Adjust Server Workloads</h3>
              </div>

              {/* Slider 1: Players Count */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                    Active Players (Simultaneous)
                  </label>
                  <span className="text-lg font-display font-black text-brand-cyan">
                    {players === 100 ? "100+ (Giant Hub)" : `${players} Players`}
                  </span>
                </div>
                <input
                  id="players-range-slider"
                  type="range"
                  min="2"
                  max="100"
                  step="1"
                  value={players}
                  onChange={(e) => setPlayers(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-black/60 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
                />
                <div className="flex justify-between items-center text-[10px] font-mono text-gray-600 mt-2">
                  <span>2 Friend Group</span>
                  <span>50 Max Co-op</span>
                  <span>100+ Massive Network</span>
                </div>
              </div>

              {/* Slider 2: Plugins / Add-ons Count */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                    Plugins / Configurations
                  </label>
                  <span className="text-lg font-display font-black text-white">
                    {plugins} Loaded Add-ons
                  </span>
                </div>
                <input
                  id="plugins-range-slider"
                  type="range"
                  min="0"
                  max="50"
                  step="1"
                  value={plugins}
                  onChange={(e) => setPlugins(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-black/60 rounded-lg appearance-none cursor-pointer accent-brand-purple"
                />
                <div className="flex justify-between items-center text-[10px] font-mono text-gray-600 mt-2">
                  <span>Vanilla (0)</span>
                  <span>25 Standard Pack</span>
                  <span>50 Heavy Plugins (EssentialsX, Lands...)</span>
                </div>
              </div>

              {/* Toggle Switch: Heavier Modpack packages */}
              <div className="flex items-center justify-between p-4 rounded-xl border border-white/[0.03] bg-white/[0.01] hover:bg-[#090910] hover:border-white/5 transition-all">
                <div className="pr-4">
                  <span className="text-xs font-display font-bold text-white block">
                    Enable Heavy Modloaders? (Forge/Fabric)
                  </span>
                  <span className="text-[10px] text-gray-500 font-mono tracking-wide mt-1 block leading-normal">
                    Check if you plan on running Pixelmon, Better Minecraft, StoneBlock, or complex tech mods.
                  </span>
                </div>

                <button
                  id="estimator-modded-toggle"
                  onClick={() => setIsModded(!isModded)}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    isModded ? "bg-brand-cyan" : "bg-white/10"
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-black shadow ring-0 transition duration-200 ease-in-out ${
                      isModded ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Core Calculated Output Card (5 columns) */}
          <div className="lg:col-span-5 rounded-2xl border border-brand-cyan/20 bg-[#06060c] p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between relative overflow-hidden group">
            {/* Glowing neon background decor */}
            <div className="absolute top-[-50px] right-[-50px] w-40 h-40 bg-brand-cyan/10 rounded-full blur-2xl group-hover:bg-brand-cyan/15 transition-all" />

            <div>
              <span className="text-brand-cyan font-mono text-[10px] font-bold tracking-widest uppercase mb-2 block">// RECOMMENDED SYSTEM NODES</span>
              <h3 className="font-display font-bold text-xl text-white mb-6">Estimated Host Allocation</h3>

              {/* Stats highlights */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] text-center">
                  <HardDrive className="w-5 h-5 text-brand-cyan mx-auto mb-2" />
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block">DDR4 Memory</span>
                  <span className="text-2xl font-display font-extrabold text-white mt-1 block">{spec.ram} GB</span>
                </div>

                <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] text-center">
                  <Cpu className="w-5 h-5 text-brand-purple mx-auto mb-2" />
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block">CPU Cores</span>
                  <span className="text-2xl font-display font-extrabold text-white mt-1 block">{spec.cores} Cores</span>
                </div>
              </div>

              {/* Target Matching plans */}
              <div className="space-y-3 pt-2">
                <div className="p-3.5 rounded-lg border border-brand-cyan/20 bg-brand-cyan/5 flex items-center justify-between">
                  <div>
                    <span className="text-[9px] font-mono text-brand-cyan uppercase tracking-wider block">Free Invite Option</span>
                    <span className="font-display font-bold text-sm text-white">{spec.invitePlan}</span>
                  </div>
                  <span className="font-mono text-xs font-bold text-brand-cyan bg-[#07070f] px-2.5 py-1 rounded border border-brand-cyan/25">
                    {spec.inviteTarget} Invites Target
                  </span>
                </div>

                <div className="p-3.5 rounded-lg border border-brand-purple/20 bg-brand-purple/5 flex items-center justify-between">
                  <div>
                    <span className="text-[9px] font-mono text-brand-purple uppercase tracking-wider block">Paid Cash Option</span>
                    <span className="font-display font-bold text-sm text-white">{spec.premiumPlan}</span>
                  </div>
                  <span className="font-mono text-xs font-bold text-white bg-brand-purple px-2.5 py-1 rounded">
                    {spec.premiumPrice} / mo
                  </span>
                </div>
              </div>
            </div>

            {/* Quick action claim buttons */}
            <div className="mt-8 pt-6 border-t border-white/5 flex flex-col gap-3">
              <a
                id="estimator-claim-discord-link"
                href="https://discord.gg/s9cd4UrnqP"
                target="_blank"
                referrerPolicy="no-referrer"
                className="w-full py-3.5 px-4 rounded-xl text-center font-mono text-xs font-bold uppercase tracking-wider text-black bg-brand-cyan hover:bg-brand-cyan/90 transition-all shadow-[0_0_15px_rgba(0,240,255,0.2)] flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-black" />
                Claim This Plan on Discord
                <ArrowRight className="w-3.5 h-3.5 text-black" />
              </a>
              <span className="text-[10px] text-gray-500 font-mono text-center block tracking-wide">
                ✓ Node setup takes roughly two minutes after ticket allocation validation.
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
