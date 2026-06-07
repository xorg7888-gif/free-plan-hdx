/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Activity, ShieldCheck, Terminal, Server, Wifi, RefreshCw } from "lucide-react";

export default function ServerStatusBox() {
  const [pingRegion, setPingRegion] = useState("US-East");
  const [pingVal, setPingVal] = useState(14);
  const [testing, setTesting] = useState(false);
  const [nodes, setNodes] = useState([
    { name: "Node-Alpha (Dallas)", status: "Online", load: "42%", ping: 12 },
    { name: "Node-Beta (Frankfurt)", status: "Online", load: "58%", ping: 18 },
    { name: "Node-Gamma (Singapore)", status: "Online", load: "31%", ping: 25 },
  ]);

  const testPing = (region: string) => {
    setTesting(true);
    setPingRegion(region);
    setTimeout(() => {
      let base = 12;
      if (region === "EU-Central") base = 35;
      if (region === "ASIA-East") base = 78;
      const variation = Math.floor(Math.random() * 8) - 4;
      setPingVal(Math.max(8, base + variation));
      setTesting(false);
    }, 800);
  };

  return (
    <section id="status" className="py-20 relative bg-brand-dark overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brand-cyan/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-cyan font-mono text-xs font-semibold tracking-widest uppercase">
            // Real-Time Telemetry
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Active Infrastructure Status
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            Our Minecraft hosting nodes are constantly monitored for maximum speed and uptime.
            Check active network stats or execute a diagnostic latency test below.
          </p>
        </div>

        {/* Dashboard Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Status & Telemetry Card (8 cols) */}
          <div className="lg:col-span-8 flex flex-col justify-between rounded-2xl border border-white/5 bg-brand-card hover:border-brand-cyan/20 transition-all duration-300 p-6 sm:p-8 backdrop-blur-md relative overflow-hidden group">
            {/* Ambient neon accent */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-brand-cyan to-brand-purple" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 flex items-center justify-center">
                  <Server className="w-6 h-6 text-brand-cyan animate-pulse-slow" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white">HDX-INVITE Live Status</h3>
                  <p className="text-xs text-gray-500 font-mono tracking-wide mt-0.5">ID: clusters-primary-v2</p>
                </div>
              </div>

              {/* Status Header pill */}
              <div className="inline-flex items-center self-start sm:self-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold uppercase tracking-wider">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                ALL SYSTEMS OPERATIONAL
              </div>
            </div>

            {/* Diagnostic Matrix Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 border-y border-white/5 py-8">
              <div className="flex flex-col">
                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                  Server Status
                </span>
                <span className="text-xl font-display font-bold text-emerald-400 mt-1.5 flex items-center gap-1.5">
                  Online
                </span>
                <span className="text-[10px] text-gray-400 font-mono mt-1">DDoS Protected</span>
              </div>

              <div className="flex flex-col">
                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                  Average Uptime
                </span>
                <span className="text-xl font-display font-bold text-white mt-1.5">
                  99.9%
                </span>
                <span className="text-[10px] text-brand-purple font-mono mt-1">24/7 Monitored</span>
              </div>

              <div className="flex flex-col">
                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                  Response Time
                </span>
                <span className="text-xl font-display font-bold text-white mt-1.5 flex items-center gap-1.5">
                  Fast
                </span>
                <span className="text-[10px] text-gray-400 font-mono mt-1">Under 18ms latency</span>
              </div>

              <div className="flex flex-col">
                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                  Panel Access
                </span>
                <span className="text-xl font-display font-bold text-brand-cyan mt-1.5">
                  Available
                </span>
                <span className="text-[10px] text-emerald-400 font-mono mt-1">Web Console Live</span>
              </div>
            </div>

            {/* Live-Node list */}
            <div>
              <h4 className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-brand-purple" /> ACTIVE CLOUD HYPERVISORS
              </h4>
              <div className="space-y-3.5">
                {nodes.map((node, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-lg border border-white/[0.03] bg-white/[0.01]"
                  >
                    <span className="font-display font-medium text-sm text-gray-300">
                      {node.name}
                    </span>
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 mt-2 sm:mt-0">
                      <span className="text-xs text-brand-cyan font-mono">
                        RAM Alloc: <strong className="text-white">{node.load}</strong>
                      </span>
                      <span className="text-xs text-brand-purple font-mono">
                        Ping: <strong className="text-white">{node.ping + "ms"}</strong>
                      </span>
                      <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase bg-emerald-400/5 px-2 py-0.5 rounded border border-emerald-400/10">
                        {node.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Latency Diagnostic Tool Card (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between rounded-2xl border border-white/5 bg-brand-card hover:border-brand-purple/20 transition-all duration-300 p-6 sm:p-8 backdrop-blur-md relative overflow-hidden group">
            {/* Glow backing */}
            <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-brand-purple/10 rounded-full blur-2xl group-hover:bg-brand-purple/15 transition-all" />

            <div>
              <h3 className="font-display font-bold text-lg text-white mb-2 flex items-center gap-2">
                <Wifi className="w-5 h-5 text-brand-purple" />
                Ping Diagnostic
              </h3>
              <p className="text-xs text-gray-400 leading-normal mb-6">
                Direct route pathways optimize Minecraft game-server synchronization. Test our global hub speeds below:
              </p>

              {/* Ping Selection Group */}
              <div className="grid grid-cols-1 gap-2.5 mb-6">
                {[
                  { id: "US-East", flag: "🇺🇸", label: "US East (Dallas Hub)" },
                  { id: "EU-Central", flag: "🇩🇪", label: "Europe (Frankfurt Hub)" },
                  { id: "ASIA-East", flag: "🇸🇬", label: "Asia (Singapore Hub)" },
                ].map((reg) => (
                  <button
                    key={reg.id}
                    onClick={() => testPing(reg.id)}
                    className={`flex items-center justify-between p-3 rounded-lg border text-left font-mono text-xs transition-all duration-300 cursor-pointer ${
                      pingRegion === reg.id
                        ? "bg-brand-cyan/10 border-brand-cyan/40 text-white shadow-[0_0_15px_rgba(0,240,255,0.08)]"
                        : "bg-white/[0.01] border-white/5 text-gray-400 hover:bg-white/[0.03] hover:text-white"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-sm select-none">{reg.flag}</span>
                      {reg.label}
                    </span>
                    {pingRegion === reg.id && (
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Display Monitor Graphic */}
            <div className="rounded-xl bg-[#09090f] border border-white/5 p-5 text-center relative overflow-hidden">
              <div className="absolute top-2 left-3 flex gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
                <span className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
              </div>

              <div className="my-3">
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block">
                  diagnose_latency --target={pingRegion}
                </span>

                {testing ? (
                  <div className="flex flex-col items-center justify-center py-4">
                    <RefreshCw className="w-5 h-5 text-brand-purple animate-spin" />
                    <span className="text-xs font-mono text-brand-purple mt-2">pinging gateway...</span>
                  </div>
                ) : (
                  <div className="py-2.5">
                    <span className="text-4xl font-display font-extrabold text-brand-cyan">
                      {pingVal}
                      <span className="text-xs font-mono text-gray-500 ml-1">ms</span>
                    </span>
                    <span className="text-[10px] sm:text-xs font-mono text-emerald-400 block mt-1">
                      ✓ Extreme Low-Latency Pathway Connected
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
