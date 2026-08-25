import { Navbar } from "@/components/Navbar";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { WhatIWorkOn } from "@/components/WhatIWorkOn";
import { HowIBuild } from "@/components/HowIBuild";
import { EvidenceSkills } from "@/components/EvidenceSkills";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, Cpu, Network, Layers } from "lucide-react";

export const metadata = {
  title: "Systems Architecture & Mindmap | Kshitiz Khandelwal",
  description: "Explore Kshitiz Khandelwal's architecture workstation, engineering methodology mindmap, and verified technical skills.",
};

export default function SystemsPage() {
  return (
    <main className="min-h-screen bg-[#141414] text-[#EDEDED] relative overflow-hidden font-sans pt-24 pb-12">
      <BackgroundEffects />
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Navigation Breadcrumb */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm text-[#D4BAA3] hover:text-[#E25543] bg-[#2B2015]/60 border border-[#F5E1CD]/20 px-3.5 py-1.5 rounded-full transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Executive Hub</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="text-center mb-10">
          <span className="font-mono text-xs font-bold tracking-[0.25em] uppercase text-[#E25543] mb-2 block">
            · ARCHITECTURAL WORKSTATION ·
          </span>
          <h1 className="font-bree text-4xl sm:text-5xl md:text-6xl text-[#F5E1CD] font-bold tracking-tight mb-4">
            Domains &amp; Engineering Workstation
          </h1>
          <p className="font-sans text-base sm:text-lg text-[#D4BAA3] max-w-2xl mx-auto leading-relaxed">
            Interactive pipeline visualizers, engineering mental models, and deep-dive domain competencies.
          </p>
        </div>

        {/* Workstation & Mindmap */}
        <div className="space-y-16">
          <WhatIWorkOn />
          <HowIBuild />
          <EvidenceSkills />
        </div>
      </div>

      <Footer />
    </main>
  );
}
