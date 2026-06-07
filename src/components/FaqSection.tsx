/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Search, Sparkles } from "lucide-react";
import { FAQS } from "../data";

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("faq-what");
  const [searchTerm, setSearchTerm] = useState("");

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = FAQS.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="faq" className="py-24 relative bg-brand-dark overflow-hidden scroll-mt-20">
      <div className="absolute top-[20%] left-[-150px] w-[500px] h-[500px] rounded-full bg-brand-cyan/2 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-150px] w-[500px] h-[500px] rounded-full bg-brand-purple/2 blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-cyan font-mono text-xs font-semibold tracking-widest uppercase bg-brand-cyan/5 px-3.5 py-1.5 rounded-full border border-brand-cyan/10">
            ❓ Common Inquiries
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            Everything you need to know about setting up your invite hosting plan, server specifications, and Minecraft crosscompats.
          </p>

          {/* Elegant Search Bar */}
          <div className="mt-8 relative max-w-md mx-auto group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-brand-cyan transition-colors" />
            <input
              id="faq-search-input"
              type="text"
              placeholder="Search questions (e.g. mods, backup)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 rounded-xl text-sm bg-black/60 border border-white/5 focus:border-brand-cyan/40 text-white placeholder-gray-500 focus:outline-none transition-all shadow-[inset_0_1px_5px_rgba(0,0,0,0.5)] focus:ring-1 focus:ring-brand-cyan/20"
            />
          </div>
        </div>

        {/* Faq List */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  id={`faq-item-${faq.id}`}
                  className={`rounded-2xl border transition-all duration-300 backdrop-blur-md overflow-hidden ${
                    isOpen
                      ? "bg-brand-card border-brand-cyan/20 shadow-[0_10px_25px_rgba(0,240,255,0.02)]"
                      : "bg-[#0b0b12]/40 border-white/5 hover:border-white/10"
                  }`}
                >
                  {/* Trigger Header button */}
                  <button
                    id={`faq-trigger-${faq.id}`}
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer focus:outline-none group/btn"
                  >
                    <span className="flex items-center gap-3 pr-4">
                      <HelpCircle className={`w-5 h-5 shrink-0 transition-colors ${
                        isOpen ? "text-brand-cyan" : "text-gray-500 group-hover/btn:text-gray-400"
                      }`} />
                      <span className="font-display font-bold text-sm sm:text-base text-gray-200 group-hover/btn:text-white transition-colors">
                        {faq.question}
                      </span>
                    </span>
                    <span className={`p-1.5 rounded-lg bg-white/[0.02] border border-white/5 text-gray-400 transition-all ${
                      isOpen ? "rotate-180 text-brand-cyan bg-brand-cyan/5 border-brand-cyan/20" : ""
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {/* Body Content */}
                  <div
                    id={`faq-body-${faq.id}`}
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-[500px] border-t border-white/5 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="p-5 sm:p-6 text-sm text-gray-300 leading-relaxed font-sans">
                      {faq.answer.includes("https://discord.gg/s9cd4UrnqP") ? (
                        <span>
                          {faq.answer.split("https://discord.gg/s9cd4UrnqP")[0]}
                          <a
                            href="https://discord.gg/s9cd4UrnqP"
                            target="_blank"
                            referrerPolicy="no-referrer"
                            className="text-brand-cyan hover:underline font-semibold font-mono"
                          >
                            https://discord.gg/s9cd4UrnqP
                          </a>
                          {faq.answer.split("https://discord.gg/s9cd4UrnqP")[1]}
                        </span>
                      ) : (
                        faq.answer
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="p-8 text-center rounded-2xl border border-white/5 bg-[#09090e] text-gray-500 font-mono text-xs">
              No matching questions found. Attempt another query.
            </div>
          )}
        </div>

        {/* Support CTA */}
        <div className="mt-14 text-center rounded-xl py-5 border border-white/5 bg-white/[0.01]">
          <span className="text-xs text-gray-400 font-mono">
            HAVE A DIFFERENT QUESTION?{" "}
            <a
              id="faq-staff-cta"
              href="https://discord.gg/s9cd4UrnqP"
              target="_blank"
              referrerPolicy="no-referrer"
              className="text-brand-purple hover:text-brand-cyan font-black hover:underline"
            >
              TALK TO STAFF 24/7 ON DISCORD →
            </a>
          </span>
        </div>

      </div>
    </section>
  );
}
