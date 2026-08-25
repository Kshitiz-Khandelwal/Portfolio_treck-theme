import { Navbar } from "@/components/Navbar";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { HorizontalProjectRail } from "@/components/HorizontalProjectRail";
import { GitHubSection } from "@/components/GitHubSection";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, Shield, Cpu, Code2 } from "lucide-react";

export const metadata = {
  title: "Defensible Systems & Projects | Kshitiz Khandelwal",
  description: "Explore Kshitiz Khandelwal's flagship systems, including wire-speed DNS threat detection, split federated learning, and intrusion engines.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#141414] text-[#EDEDED] relative overflow-hidden font-sans pt-24 pb-12">
      <BackgroundEffects />
      <Navbar />

      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 relative z-10">
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
            · ARCHITECTURE &amp; REPOSITORIES ·
          </span>
          <h1 className="font-bree text-4xl sm:text-5xl md:text-6xl text-[#F5E1CD] font-bold tracking-tight mb-4">
            Defensible Systems &amp; Case Studies
          </h1>
          <p className="font-sans text-base sm:text-lg text-[#D4BAA3] max-w-2xl mx-auto leading-relaxed">
            Detailed breakdown of production-grade distributed architectures, security platforms, and open-source GitHub repositories.
          </p>
        </div>

        {/* Interactive Systems Explorer & Infinite Rail */}
        <div className="space-y-16">
          <HorizontalProjectRail />
          <GitHubSection />
        </div>
      </div>

      <Footer />
    </main>
  );
}
