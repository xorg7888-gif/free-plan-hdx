/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Menu, X, Shield, Zap } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "Plans", href: "#plans" },
    { label: "Status", href: "#status" },
    { label: "Features", href: "#features" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-dark/95 backdrop-blur-md border-b border-white/5 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Branding */}
          <a
            id="navbar-logo"
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-brand-cyan to-brand-purple p-[1px] shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#0d0d16] rounded-[7px] flex items-center justify-center">
                <Shield className="w-5 h-5 text-brand-cyan group-hover:text-white transition-colors duration-200" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg tracking-wider text-white flex items-center gap-1">
                HDX<span className="text-brand-cyan group-hover:text-brand-purple transition-all duration-300">-INVITE</span>
                <Zap className="w-3.5 h-3.5 text-brand-cyan fill-brand-cyan animate-pulse-slow ml-0.5" />
              </span>
              <span className="text-[9px] text-gray-500 font-mono tracking-[4px] uppercase font-semibold">
                Power • Speed
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                id={`nav-link-${item.label.toLowerCase()}`}
                href={item.href}
                className="text-gray-400 font-mono text-sm tracking-wide font-medium hover:text-brand-cyan transition-colors duration-300 relative py-1 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-brand-cyan to-brand-purple transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Discord CTA Button (Desktop) */}
          <div className="hidden md:block">
            <a
              id="cta-discord-nav"
              href="https://discord.gg/s9cd4UrnqP"
              target="_blank"
              referrerPolicy="no-referrer"
              className="relative inline-flex items-center gap-2 px-5 py-2 rounded-lg font-mono text-xs font-semibold tracking-wider text-black bg-[#fafafa] overflow-hidden group shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300"
            >
              <span className="absolute inset-0 w-0 bg-gradient-to-r from-brand-cyan to-brand-purple transition-all duration-300 group-hover:w-full"></span>
              <span className="relative z-10 flex items-center gap-1.5 transition-colors duration-300 group-hover:text-white">
                {/* SVG Discord Icon */}
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 127.14 96.36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M107.7,8.07c-9.56-4.42-19.85-7.7-30.73-9.59a1.85,1.85,0,0,0-1.92.93,88.4,88.4,0,0,0-3.83,7.9,98.68,98.68,0,0,0-29,0,81.18,81.18,0,0,0-3.9-7.9,1.88,1.88,0,0,0-1.92-.93C25.56,2.07,15.27,5.34,5.71,11.39a1.84,1.84,0,0,0-.78.71C-14.54,41.64-10,71.21,14.65,95.53a1.94,1.94,0,0,0,1.47.69c8.29,6.08,16.27,9.79,24.08,12.21a1.87,1.87,0,0,0,2-.65c1.86-2.54,3.5-5.23,4.92-8.06a1.86,1.86,0,0,0-1-2.56,64.88,64.88,0,0,1-9.61-4.58,1.87,1.87,0,0,1-.18-3.09c.66-.49,1.3-1,1.93-1.51a1.85,1.85,0,0,1,1.93-.25c31.11,14.2,64.55,14.2,95.09,0a1.82,1.82,0,0,1,1.94.24c.64.51,1.28,1,1.93,1.51a1.87,1.87,0,0,1-.17,3.09,72.41,72.41,0,0,1-9.62,4.58,1.86,1.86,0,0,0-1,2.56c1.43,2.83,3.07,5.52,4.92,8.06a1.88,1.88,0,0,0,2,.65c7.83-2.42,15.82-6.13,24.11-12.21a1.87,1.87,0,0,0,1.46-.69C138.41,63.14,133.7,33.56,114.2,12.1A1.89,1.89,0,0,0,107.7,8.07ZM42.45,65.69C35.39,65.69,29.58,59.18,29.58,51.3s5.81-14.39,12.87-14.39S55.43,43.42,55.32,51.3C55.32,59.18,49.51,65.69,42.45,65.69Zm42.24,0C77.63,65.69,71.82,59.18,71.82,51.3s5.81-14.39,12.87-14.39,12.87,6.48,12.87,14.39S91.73,65.69,84.69,65.69Z" />
                </svg>
                Join Discord
              </span>
            </a>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="flex md:hidden">
            <button
              id="hamburger-btn"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6 text-brand-cyan" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-nav-panel"
        className={`md:hidden fixed top-[69px] left-0 right-0 bottom-0 bg-brand-dark/98 backdrop-blur-lg border-t border-white/5 transition-transform duration-300 ease-out z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          {menuItems.map((item) => (
            <a
              key={item.label}
              id={`nav-link-mobile-${item.label.toLowerCase()}`}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 font-display text-lg font-medium tracking-wide border-b border-white/5 pb-3 hover:text-brand-cyan transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            id="cta-discord-nav-mobile"
            href="https://discord.gg/s9cd4UrnqP"
            target="_blank"
            referrerPolicy="no-referrer"
            onClick={() => setIsOpen(false)}
            className="w-full mt-4 flex items-center justify-center gap-2.5 py-4 px-6 rounded-lg font-mono text-sm font-bold tracking-wider text-black bg-brand-cyan hover:bg-brand-cyan/90 transition-all glow-cyan-glow"
          >
            {/* SVG Discord Icon */}
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 127.14 96.36"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M107.7,8.07c-9.56-4.42-19.85-7.7-30.73-9.59a1.85,1.85,0,0,0-1.92.93,88.4,88.4,0,0,0-3.83,7.9,98.68,98.68,0,0,0-29,0,81.18,81.18,0,0,0-3.9-7.9,1.88,1.88,0,0,0-1.92-.93C25.56,2.07,15.27,5.34,5.71,11.39a1.84,1.84,0,0,0-.78.71C-14.54,41.64-10,71.21,14.65,95.53a1.94,1.94,0,0,0,1.47.69c8.29,6.08,16.27,9.79,24.08,12.21a1.87,1.87,0,0,0,2-.65c1.86-2.54,3.5-5.23,4.92-8.06a1.86,1.86,0,0,0-1-2.56,64.88,64.88,0,0,1-9.61-4.58,1.87,1.87,0,0,1-.18-3.09c.66-.49,1.3-1,1.93-1.51a1.85,1.85,0,0,1,1.93-.25c31.11,14.2,64.55,14.2,95.09,0a1.82,1.82,0,0,1,1.94.24c.64.51,1.28,1,1.93,1.51a1.87,1.87,0,0,1-.17,3.09,72.41,72.41,0,0,1-9.62,4.58,1.86,1.86,0,0,0-1,2.56c1.43,2.83,3.07,5.52,4.92,8.06a1.88,1.88,0,0,0,2,.65c7.83-2.42,15.82-6.13,24.11-12.21a1.87,1.87,0,0,0,1.46-.69C138.41,63.14,133.7,33.56,114.2,12.1A1.89,1.89,0,0,0,107.7,8.07ZM42.45,65.69C35.39,65.69,29.58,59.18,29.58,51.3s5.81-14.39,12.87-14.39S55.43,43.42,55.32,51.3C55.32,59.18,49.51,65.69,42.45,65.69Zm42.24,0C77.63,65.69,71.82,59.18,71.82,51.3s5.81-14.39,12.87-14.39,12.87,6.48,12.87,14.39S91.73,65.69,84.69,65.69Z" />
            </svg>
            Join Discord
          </a>
        </div>
      </div>
    </nav>
  );
}
