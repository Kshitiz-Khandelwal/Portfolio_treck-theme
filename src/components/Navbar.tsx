"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Terminal, Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/systems", label: "Domains & Workstation" },
    { href: "/projects", label: "Systems & Projects" },
    { href: "/credentials", label: "Credentials & Proofs" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-4 pointer-events-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Paper Strip Navbar Container */}
        <div className="relative bg-[#F5E1CD] border-[3.5px] border-[#3E3124] shadow-sketch rounded-2xl px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between overflow-hidden w-full">
          {/* Decorative Corner Washi Tapes */}
          <div className="washi-tape-coral -top-2.5 left-6 rotate-[-6deg] !w-20 !h-5 hidden sm:block pointer-events-none" />
          <div className="washi-tape-sage -top-2.5 right-6 rotate-[5deg] !w-20 !h-5 hidden sm:block pointer-events-none" />

          {/* Left Brand / Logo */}
          <Link href="/" className="flex items-center gap-2.5 text-[#3E3124] group z-10">
            <div className="w-8 h-8 rounded-lg border-2 border-[#3E3124] bg-[#E9D3BB] flex items-center justify-center text-[#E25543] group-hover:rotate-12 transition-transform shadow-xs">
              <Terminal className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="font-bree font-bold text-base sm:text-lg tracking-wide text-[#3E3124] leading-tight">
                Kshitiz Khandelwal
              </span>
              <span className="font-gochi text-xs text-[#6D6358] leading-tight">
                [ SYSTEMS_PORTFOLIO ]
              </span>
            </div>
          </Link>

          {/* Center & Right Navigation Links */}
          <nav className="hidden md:flex items-center gap-4 sm:gap-6 font-gochi text-base sm:text-lg text-[#3E3124] z-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-all ${
                    isActive
                      ? "text-[#E25543] font-bold underline underline-offset-4"
                      : "hover:text-[#E25543] hover:rotate-[-1deg]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Sketched Contact Button */}
            <Link
              href="/contact"
              className="px-4 py-1.5 text-base font-gochi bg-[#E25543] text-white border-2 border-[#3E3124] rounded-xl shadow-[2px_2px_0px_0px_#3E3124] hover:bg-[#ce4433] hover:scale-105 active:translate-y-0.5 transition-all"
            >
              Get in Touch ✉️
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg border-2 border-[#3E3124] bg-[#E9D3BB] text-[#3E3124] md:hidden z-10"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="mt-2 bg-[#F5E1CD] border-[3px] border-[#3E3124] rounded-2xl p-4 shadow-sketch md:hidden flex flex-col gap-3 font-gochi text-lg text-[#3E3124] animate-fadeIn">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#E25543] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center py-2 bg-[#E25543] text-white border-2 border-[#3E3124] rounded-xl shadow-[2px_2px_0px_#3E3124] font-bold"
            >
              Get in Touch ✉️
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
