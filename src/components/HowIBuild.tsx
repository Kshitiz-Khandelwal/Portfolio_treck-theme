"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Zap, Puzzle, Cpu, Rocket, Network, Star, ArrowRight, Layers, Database, Activity, Target } from "lucide-react";

// Realistic 3D Push Pin Component
function PushPin({ color = "red", className = "" }: { color?: "red" | "coral" | "gold" | "green" | "purple"; className?: string }) {
  const colorMap = {
    red: { top: "#FFA4A4", mid: "#E25543", dark: "#991B1B" },
    coral: { top: "#FFC2A4", mid: "#E06D53", dark: "#A83C25" },
    gold: { top: "#FFF099", mid: "#F8DC96", dark: "#9A7E30" },
    green: { top: "#A4FFA4", mid: "#5B8C69", dark: "#2D5A38" },
    purple: { top: "#E2A4FF", mid: "#86608E", dark: "#4D3254" },
  };

  const selected = colorMap[color] || colorMap.red;

  return (
    <div className={`absolute -top-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none drop-shadow-[0_4px_6px_rgba(0,0,0,0.35)] ${className}`}>
      <svg width="22" height="24" viewBox="0 0 22 24" fill="none">
        <defs>
          <radialGradient id={`pinGrad-${color}`} cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor={selected.top} />
            <stop offset="50%" stopColor={selected.mid} />
            <stop offset="90%" stopColor={selected.dark} />
          </radialGradient>
          <linearGradient id="metalShaft" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E2E8F0" />
            <stop offset="50%" stopColor="#94A3B8" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
        </defs>
        <path d="M10 14 L11 23 L12 14 Z" fill="url(#metalShaft)" />
        <ellipse cx="11" cy="13.5" rx="5" ry="2" fill="#000" opacity="0.2" />
        <ellipse cx="11" cy="13" rx="4.5" ry="1.8" fill={`url(#pinGrad-${color})`} />
        <circle cx="11" cy="7" r="6" fill={`url(#pinGrad-${color})`} />
        <ellipse cx="8.5" cy="4.5" rx="2" ry="1.2" transform="rotate(-30 8.5 4.5)" fill="#FFF" opacity="0.85" />
      </svg>
    </div>
  );
}

export function HowIBuild() {
  const [activeNote, setActiveNote] = useState<string | null>("research");

  const notesInfo: Record<string, { title: string; desc: string }> = {
    research: {
      title: "1. Research — Has someone solved this?",
      desc: "Before writing code or picking heavy ML frameworks, I do exhaustive ground-truth reconnaissance: reading IEEE/arXiv papers, studying existing open-source implementations, and testing if a simpler heuristic or mathematical model solves 90% of the problem with 10x less overhead.",
    },
    architecture: {
      title: "2. Architecture & System Boundaries",
      desc: "Deconstructing constraints into clean interfaces: defining latency budgets, memory bounds, database indexes, and failure modes before laying down code.",
    },
    ai: {
      title: "Branch A: AI / Heuristic Boundary",
      desc: "Use AI only where it genuinely provides a non-linear advantage. If a deterministic hash map or bloom filter does the job, don't force a heavy neural network.",
    },
    model: {
      title: "Branch B: Model Selection",
      desc: "Evaluating LightGBM vs. XGBoost vs. neural networks based on inference latency floors (<1.2ms) and TreeSHAP explainability requirements.",
    },
    db: {
      title: "Branch C: Storage & State Engines",
      desc: "Choosing stateful vs. stateless stores, SQLite/ChromaDB for offline edge RAG, or zero-copy memory buffers for real-time packet inspection.",
    },
    scale: {
      title: "Branch D: Throughput & Scale Ceiling",
      desc: "Benchmarking hot paths against synthetic high-velocity workloads (e.g., 100,000 DNS queries/sec) to verify queue stability and zero packet drops.",
    },
    prototype: {
      title: "3. Prototype — Build it Ugly First",
      desc: "Get an end-to-end working loop running in 24 hours. Validate data ingestion and output formats before obsessing over polish.",
    },
    breakIt: {
      title: "4. Break It (Adversarial Stress)",
      desc: "Subject the prototype to edge-case anomalies, malformed packets, network timeouts, and synthetic DGA botnets to find where it fractures.",
    },
    fixIt: {
      title: "5. Fix It & Refactor",
      desc: "Eliminate performance bottlenecks, optimize zero-copy buffers, write comprehensive test assertions, and document APIs cleanly.",
    },
    ship: {
      title: "6. Ship & Observe",
      desc: "Deploy with continuous telemetry, evaluate real-world metrics against holdout sets, and iterate rapidly based on ground truth.",
    },
  };

  return (
    <section id="how-i-build" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Top Header with Handwritten Annotations */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6 relative">
        <div>
          <span className="font-mono text-xs font-bold tracking-[0.25em] uppercase text-[#E25543] mb-2 block">
            · ENGINEERING METHODOLOGY ·
          </span>
          <h2 className="font-bree text-4xl sm:text-5xl md:text-6xl text-[#F5E1CD] font-bold tracking-tight relative inline-block">
            How I Approach Things
            {/* Red Underline Art */}
            <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 300 12" fill="none">
              <path d="M5 8 C 50 3, 150 10, 295 5" stroke="#E25543" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </h2>
          <p className="font-gochi text-base sm:text-lg text-[#D4BAA3] mt-3 max-w-xl leading-relaxed">
            A handcrafted mind map of my engineering lifecycle: from problem reconnaissance to architectural tradeoffs, adversarial stress-testing, and shipping.
          </p>
        </div>

        {/* Top Right Instruction Note & Polaroid */}
        <div className="flex items-center gap-4">
          <div className="bg-[#FCF3CF] text-[#2B2015] border-2 border-[#2B2015] rounded-xl p-3 shadow-[3px_3px_0px_#2B2015] rotate-[-2deg] max-w-[200px] relative">
            <div className="washi-tape-coral -top-3 left-3 rotate-[4deg] !w-12 !h-3" />
            <p className="font-gochi text-xs text-[#2B2015] leading-snug font-bold">
              📌 Click any note to read my engineering rationale
            </p>
          </div>

          {/* Polaroid Lab Photo */}
          <div className="relative bg-white border-2 border-[#2B2015] p-1.5 pb-5 rounded-md shadow-md rotate-[6deg] w-24 sm:w-28 hidden sm:block">
            <div className="relative w-full h-20 bg-slate-200 rounded-sm overflow-hidden">
              <Image src="/profile.jpg" alt="Lab Bench" fill className="object-cover" />
            </div>
            <p className="font-gochi text-[9px] text-[#2B2015] text-center mt-1 font-bold">Lab Bench &apos;24</p>
          </div>
        </div>
      </div>

      {/* Main Handcrafted Sketchbook Pinboard Container */}
      <div className="relative bg-[#E9D3BB] border-[4px] border-[#2B2015] rounded-[28px] p-6 sm:p-10 shadow-sketch overflow-hidden">
        {/* Background Coffee Ring Stains */}
        <div className="coffee-stain absolute top-6 right-8 w-28 h-28 opacity-25" />
        <div className="coffee-stain absolute bottom-4 left-6 w-32 h-32 opacity-20" />

        {/* Desktop Pinboard Flow Diagram */}
        <div className="relative z-10 space-y-8 my-2">
          {/* Row 1: Card 01 ➔ Step 1 Stamp ➔ Card 02 (Research) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Card 01 */}
            <div
              className={`lg:col-span-5 relative p-5 rounded-2xl bg-[#F5E1CD] border-[3px] border-[#2B2015] transition-all duration-300 -rotate-1 cursor-pointer shadow-[4px_4px_0px_#2B2015] ${
                activeNote === "research" ? "scale-105 shadow-[7px_7px_0px_#2B2015] border-[#E25543]" : "hover:border-[#E25543]"
              }`}
              onClick={() => setActiveNote("research")}
            >
              <PushPin color="coral" />
              <div className="washi-tape-coral -top-3 left-6 rotate-[-5deg] !w-16 !h-4" />

              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-md bg-[#E25543] text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                  01
                </span>
                <div>
                  <h3 className="font-bree font-bold text-xl text-[#2B2015] leading-tight">
                    How I Approach Things
                  </h3>
                  <p className="font-gochi text-xs text-[#6B5B4D] font-bold uppercase tracking-wider">
                    SYSTEMS LIFECYCLE MAP
                  </p>
                </div>
              </div>
            </div>

            {/* Step 1 Reconnaissance Stamp Arrow Connector */}
            <div className="lg:col-span-2 flex items-center justify-center relative my-2 lg:my-0">
              <div className="flex items-center gap-2">
                <span className="font-mono text-lg text-[#2B2015] font-bold">➔</span>
                <div className="px-3.5 py-1.5 rounded-full bg-[#FCF3CF] border-2 border-[#2B2015] font-gochi text-xs font-bold text-[#2B2015] shadow-xs rotate-[-2deg]">
                  Step 1: Reconnaissance
                </div>
                <span className="font-mono text-lg text-[#2B2015] font-bold">➔</span>
              </div>
            </div>

            {/* Card 02: Research */}
            <div
              className={`lg:col-span-5 relative p-5 rounded-2xl bg-[#F5E1CD] border-[3px] border-[#2B2015] transition-all duration-300 rotate-1 cursor-pointer shadow-[4px_4px_0px_#2B2015] ${
                activeNote === "research" ? "scale-105 shadow-[7px_7px_0px_#2B2015] border-[#E25543]" : "hover:border-[#E25543]"
              }`}
              onClick={() => setActiveNote("research")}
            >
              <PushPin color="green" />
              <div className="washi-tape-sage -top-3 right-6 rotate-[5deg] !w-16 !h-4" />

              <div className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-md bg-[#5B8C69] text-white font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  02
                </span>
                <div>
                  <h4 className="font-bree font-bold text-lg text-[#2B2015] leading-snug">
                    Research — has someone solved this?
                  </h4>
                  <p className="font-gochi text-xs sm:text-sm text-[#5B5045] mt-1 font-semibold">
                    Prior art, IEEE papers &amp; heuristics vs ML tradeoffs
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Architecture + 4 Sticky Note Branches */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-2">
            {/* Architecture Card with Binder Clip */}
            <div className="lg:col-span-5 relative flex items-center">
              {/* Binder Clip */}
              <div className="absolute -left-3 top-1/2 -translate-y-1/2 text-2xl z-20 select-none pointer-events-none">
                📎
              </div>

              <div
                className={`relative w-full p-5 rounded-2xl bg-[#F5E1CD] border-[3px] border-[#2B2015] transition-all duration-300 -rotate-1 cursor-pointer shadow-[4px_4px_0px_#2B2015] pl-8 ${
                  activeNote === "architecture" ? "scale-105 shadow-[7px_7px_0px_#2B2015] border-[#E25543]" : "hover:border-[#E25543]"
                }`}
                onClick={() => setActiveNote("architecture")}
              >
                <PushPin color="coral" />
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#E25543]/20 border border-[#E25543] flex items-center justify-center text-[#E25543] shrink-0">
                    <Network className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bree font-bold text-xl text-[#2B2015]">
                      Architecture
                    </h4>
                    <p className="font-gochi text-xs text-[#6B5B4D] font-semibold">
                      Latency budgets, API contracts &amp; State bounds
                    </p>
                  </div>
                </div>
              </div>

              <span className="hidden lg:inline-block font-mono text-xl text-[#2B2015] font-bold mx-3">➔</span>
            </div>

            {/* 4 Pastel Sticky Notes Side-by-Side */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {/* Pink Sticky: AI? */}
              <div
                className={`relative p-3.5 rounded-xl bg-[#FADBD8] border-2 border-[#2B2015] transition-all rotate-1 cursor-pointer text-center shadow-sm ${
                  activeNote === "ai" ? "scale-105 border-[#E25543] shadow-md" : "hover:border-[#E25543]"
                }`}
                onClick={() => setActiveNote("ai")}
              >
                <PushPin color="red" className="-top-2.5 scale-90" />
                <span className="font-bree font-bold text-base text-[#922B21] block mt-1">🧠 AI?</span>
                <span className="font-gochi text-[11px] text-[#2B2015] font-semibold block">Heuristics vs DNN</span>
              </div>

              {/* Yellow Sticky: Model? */}
              <div
                className={`relative p-3.5 rounded-xl bg-[#FCF3CF] border-2 border-[#2B2015] transition-all -rotate-1 cursor-pointer text-center shadow-sm ${
                  activeNote === "model" ? "scale-105 border-[#D48C38] shadow-md" : "hover:border-[#D48C38]"
                }`}
                onClick={() => setActiveNote("model")}
              >
                <PushPin color="gold" className="-top-2.5 scale-90" />
                <span className="font-bree font-bold text-base text-[#B7950B] block mt-1">🧊 Model?</span>
                <span className="font-gochi text-[11px] text-[#2B2015] font-semibold block">LightGBM &lt;1.2ms</span>
              </div>

              {/* Green Sticky: DB? */}
              <div
                className={`relative p-3.5 rounded-xl bg-[#D4EFDF] border-2 border-[#2B2015] transition-all rotate-1 cursor-pointer text-center shadow-sm ${
                  activeNote === "db" ? "scale-105 border-[#5B8C69] shadow-md" : "hover:border-[#5B8C69]"
                }`}
                onClick={() => setActiveNote("db")}
              >
                <PushPin color="green" className="-top-2.5 scale-90" />
                <span className="font-bree font-bold text-base text-[#1E8449] block mt-1">🗄️ DB?</span>
                <span className="font-gochi text-[11px] text-[#2B2015] font-semibold block">Zero-copy vs SQL</span>
              </div>

              {/* Purple Sticky: Scale? */}
              <div
                className={`relative p-3.5 rounded-xl bg-[#E8DAEF] border-2 border-[#2B2015] transition-all -rotate-1 cursor-pointer text-center shadow-sm ${
                  activeNote === "scale" ? "scale-105 border-[#86608E] shadow-md" : "hover:border-[#86608E]"
                }`}
                onClick={() => setActiveNote("scale")}
              >
                <PushPin color="purple" className="-top-2.5 scale-90" />
                <span className="font-bree font-bold text-base text-[#6C3483] block mt-1">📈 Scale?</span>
                <span className="font-gochi text-[11px] text-[#2B2015] font-semibold block">100K req/sec load</span>
              </div>
            </div>
          </div>

          {/* Row 3: Sequential Execution Pipeline: Prototype ➔ Break it ➔ Fix it ➔ Ship */}
          <div className="pt-4 border-t-2 border-dashed border-[#2B2015]/30">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Step 1: Prototype */}
              <div
                className={`relative p-4 rounded-2xl bg-[#F5E1CD] border-[3px] border-[#2B2015] flex items-center gap-3 transition-all duration-300 cursor-pointer shadow-[4px_4px_0px_#2B2015] ${
                  activeNote === "prototype" ? "scale-105 shadow-[6px_6px_0px_#2B2015] border-[#E25543]" : "hover:border-[#E25543]"
                }`}
                onClick={() => setActiveNote("prototype")}
              >
                <PushPin color="coral" />
                <div className="w-10 h-10 rounded-full bg-[#E25543] text-white flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5 fill-current" />
                </div>
                <div className="text-left flex-1 min-w-0">
                  <h4 className="font-bree font-bold text-base text-[#2B2015]">
                    Prototype
                  </h4>
                  <p className="font-gochi text-xs text-[#6B5B4D] font-semibold">
                    24-hr fast iteration loop
                  </p>
                </div>
              </div>

              {/* Step 2: Break it */}
              <div
                className={`relative p-4 rounded-2xl bg-[#F5E1CD] border-[3px] border-[#2B2015] flex items-center gap-3 transition-all duration-300 rotate-1 cursor-pointer shadow-[4px_4px_0px_#2B2015] ${
                  activeNote === "breakIt" ? "scale-105 shadow-[6px_6px_0px_#2B2015] border-[#E25543]" : "hover:border-[#E25543]"
                }`}
                onClick={() => setActiveNote("breakIt")}
              >
                <PushPin color="gold" />
                <div className="w-10 h-10 rounded-full bg-[#D48C38] text-white flex items-center justify-center shrink-0">
                  <Puzzle className="w-5 h-5" />
                </div>
                <div className="text-left flex-1 min-w-0">
                  <h4 className="font-bree font-bold text-base text-[#2B2015]">
                    Break it
                  </h4>
                  <p className="font-gochi text-xs text-[#6B5B4D] font-semibold">
                    Fuzzing &amp; strides
                  </p>
                </div>
              </div>

              {/* Step 3: Fix it */}
              <div
                className={`relative p-4 rounded-2xl bg-[#F5E1CD] border-[3px] border-[#2B2015] flex items-center gap-3 transition-all duration-300 -rotate-1 cursor-pointer shadow-[4px_4px_0px_#2B2015] ${
                  activeNote === "fixIt" ? "scale-105 shadow-[6px_6px_0px_#2B2015] border-[#E25543]" : "hover:border-[#E25543]"
                }`}
                onClick={() => setActiveNote("fixIt")}
              >
                <PushPin color="green" />
                <div className="w-10 h-10 rounded-full bg-[#5B8C69] text-white flex items-center justify-center shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <div className="text-left flex-1 min-w-0">
                  <h4 className="font-bree font-bold text-base text-[#2B2015]">
                    Fix it
                  </h4>
                  <p className="font-gochi text-xs text-[#6B5B4D] font-semibold">
                    Memory refactor
                  </p>
                </div>
              </div>

              {/* Step 4: Ship */}
              <div
                className={`relative p-4 rounded-2xl bg-[#F5E1CD] border-[3px] border-[#2B2015] flex items-center gap-3 transition-all duration-300 rotate-1 cursor-pointer shadow-[4px_4px_0px_#2B2015] ${
                  activeNote === "ship" ? "scale-105 shadow-[6px_6px_0px_#2B2015] border-[#E25543]" : "hover:border-[#E25543]"
                }`}
                onClick={() => setActiveNote("ship")}
              >
                <PushPin color="purple" />
                <div className="w-10 h-10 rounded-full bg-[#86608E] text-white flex items-center justify-center shrink-0">
                  <Rocket className="w-5 h-5" />
                </div>
                <div className="text-left flex-1 min-w-0">
                  <h4 className="font-bree font-bold text-base text-[#2B2015]">
                    Ship
                  </h4>
                  <p className="font-gochi text-xs text-[#6B5B4D] font-semibold">
                    Telemetry &amp; CI/CD
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Selected Field Note Rationale Drawer */}
        {activeNote && notesInfo[activeNote] && (
          <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-[#F5E1CD] border-[3px] border-[#2B2015] shadow-[4px_4px_0px_#2B2015] animate-fadeIn">
            <div className="flex items-center justify-between pb-2 mb-2 border-b-2 border-dashed border-[#2B2015]/30">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#E25543]" />
                <h4 className="font-bree font-bold text-lg text-[#2B2015]">
                  {notesInfo[activeNote].title}
                </h4>
              </div>
              <span className="font-gochi text-xs text-[#6B5B4D] uppercase tracking-wider font-bold">
                ENGINEERING RATIONALE
              </span>
            </div>
            <p className="font-gochi text-base sm:text-lg text-[#2B2015] leading-relaxed font-semibold">
              {notesInfo[activeNote].desc}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
