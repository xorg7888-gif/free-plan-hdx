/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsStrip from "./components/StatsStrip";
import ServerStatusBox from "./components/ServerStatusBox";
import ResourceEstimator from "./components/ResourceEstimator";
import PricingSection from "./components/PricingSection";
import FeaturesSection from "./components/FeaturesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FaqSection from "./components/FaqSection";
import DiscordCta from "./components/DiscordCta";
import Footer from "./components/Footer";

export default function App() {
  // Smooth scroll helper for primary header viewports
  const scrollToPricing = () => {
    const plansEl = document.getElementById("plans");
    if (plansEl) {
      plansEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-brand-dark min-h-screen font-sans text-gray-300 selection:bg-brand-cyan/30 selection:text-white overflow-x-hidden antialiased">
      {/* Decorative Interactive Background Starfield Particle Drift */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Subtle drifted dust nodes */}
        <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-brand-cyan/40 rounded-full animate-pulse-slow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-[15%] w-1.5 h-1.5 bg-brand-purple/30 rounded-full animate-pulse" style={{ animationDelay: "2.5s" }} />
        <div className="absolute top-[80%] left-[65%] w-1.5 h-1.5 bg-brand-cyan/20 rounded-full animate-pulse-slow" style={{ animationDelay: "0.4s" }} />
        <div className="absolute top-[15%] left-[80%] w-1 h-1 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: "3.2s" }} />
        <div className="absolute top-[70%] left-[88%] w-1.2 h-1.2 bg-brand-purple/40 rounded-full animate-pulse-slow" style={{ animationDelay: "1.8s" }} />
        <div className="absolute top-[40%] left-[92%] w-1 h-1 bg-brand-cyan/30 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }} />
      </div>

      {/* Main Single Page structural sections */}
      <div className="relative z-10">
        {/* 1) Animated Header Navigation */}
        <Navbar />

        {/* 2) High impact core hero visuals */}
        <Hero onViewPlansClick={scrollToPricing} />

        {/* 3) Trust factors stats strip ribbon */}
        <StatsStrip />

        {/* 4) Integrated live server status monitors / Latency diagnoser */}
        <ServerStatusBox />

        {/* 5) Resource planning slider calculator */}
        <ResourceEstimator />

        {/* 6) Pricing tables with Free Invites vs Monthly Toggle triggers */}
        <PricingSection />

        {/* 7) Unified server feature overview grids */}
        <FeaturesSection />

        {/* 8) Realistic client testimonials panels */}
        <TestimonialsSection />

        {/* 9) Accordion FAQs search widget */}
        <FaqSection />

        {/* 10) Energetic final join community banner */}
        <DiscordCta />

        {/* 11) Clean, minimalist branding footer */}
        <Footer />
      </div>
    </div>
  );
}

