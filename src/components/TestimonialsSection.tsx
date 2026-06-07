/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Star, MessageSquareCode, Quote } from "lucide-react";
import { TESTIMONIALS } from "../data";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 relative bg-[#06060c] overflow-hidden">
      {/* Blurred glowing spots */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-cyan/2 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-purple font-mono text-xs font-semibold tracking-widest uppercase bg-brand-purple/5 px-3.5 py-1.5 rounded-full border border-brand-purple/10">
            // Customer Validation
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Loved By Minecraft Communities
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            See what actual Minecraft server organizers and community modpack admins are saying about our 24/7 Intel servers and seamless Discord deployments.
          </p>
        </div>

        {/* Testimonials Grid (Responsive layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              id={`testimonial-${review.id}`}
              className="relative p-6 sm:p-8 rounded-2xl border border-white/5 bg-brand-card hover:bg-white/[0.03] hover:border-brand-purple/30 group transition-all duration-300 flex flex-col justify-between"
            >
              <Quote className="absolute right-6 top-6 w-12 h-12 text-white/[0.02] group-hover:text-brand-cyan/5 transition-colors duration-300 pointer-events-none" />
              
              <div>
                {/* Stars and Rating */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-amber-400 fill-amber-400 drop-shadow-[0_0_5px_rgba(251,191,36,0.3)]"
                    />
                  ))}
                  <span className="text-xs text-gray-500 font-mono ml-2 mt-0.5">{review.date}</span>
                </div>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed italic mb-6">
                  "{review.comment}"
                </p>
              </div>

              {/* User Bio Footer */}
              <div className="flex items-center gap-4 border-t border-white/5 pt-5 mt-auto">
                {/* Decorative initials avatar with random cool background gradients */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-mono font-bold text-sm text-white ${
                  review.username.includes("Alex") 
                    ? "bg-gradient-to-tr from-brand-cyan to-blue-600" 
                    : review.username.includes("Neon")
                    ? "bg-gradient-to-tr from-green-400 to-brand-cyan"
                    : review.username.includes("Mine")
                    ? "bg-gradient-to-tr from-brand-purple to-pink-500"
                    : "bg-gradient-to-tr from-yellow-400 to-red-500"
                }`}>
                  {review.username.charAt(0).toUpperCase()}
                </div>

                <div>
                  <h4 className="font-display font-bold text-sm text-white group-hover:text-brand-cyan transition-colors">
                    {review.username}
                  </h4>
                  <p className="text-xs text-gray-400 tracking-wide font-mono mt-0.5">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic community counter metric row */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap justify-center items-center gap-4 sm:gap-8 p-4 rounded-2xl bg-white/[0.01] border border-white/5 backdrop-blur-md">
            <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">
              Join <strong>2,500+</strong> Discord Members Today:
            </span>
            <a
              id="testimonial-discord-link"
              href="https://discord.gg/s9cd4UrnqP"
              target="_blank"
              referrerPolicy="no-referrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-cyan hover:text-white font-bold tracking-wider uppercase transition-colors"
            >
              <MessageSquareCode className="w-4 h-4 text-brand-cyan animate-pulse-slow" />
              discord.gg/s9cd4UrnqP
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
