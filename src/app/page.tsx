import { Navbar } from "@/components/Navbar";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { Hero } from "@/components/Hero";
import { HowIBuild } from "@/components/HowIBuild";
import { HorizontalProjectRail } from "@/components/HorizontalProjectRail";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { GraduationCap, Code2, Cpu, Award, Mail, ArrowRight, Sparkles } from "lucide-react";

export const metadata = {
  title: "Kshitiz Khandelwal | Backend & Systems Engineer",
  description:
    "Executive Hub & Systems Portfolio for Kshitiz Khandelwal — High-Throughput Java Microservices, Split Federated Learning, and Edge AI.",
};

export default function Home() {
  const navigationHubCards = [
    {
      href: "/about",
      title: "About & Engineering Pillars",
      badge: "ACADEMICS & FELLOWSHIPS",
      icon: GraduationCap,
      description:
        "BMSIT Top Scholar (9.43 CGPA), Zarthi Backend Intern (Java/Spring Boot), and IIIT Trichy Research Fellow (Split FL on IoMT).",
      badgeBg: "bg-[#FADBD8] text-[#922B21]",
      buttonBg: "bg-[#E25543] hover:bg-[#C84332]",
    },
    {
      href: "/projects",
      title: "Defensible Systems & Projects",
      badge: "9 SYSTEMS & WHITEPAPERS",
      icon: Code2,
      description:
        "Interactive 9-system infinite rail with 12-section technical case study whitepapers, DNS Shield AI, and TON_IoT intrusion engines.",
      badgeBg: "bg-[#D4EFDF] text-[#1E8449]",
      buttonBg: "bg-[#5B8C69] hover:bg-[#477353]",
    },
    {
      href: "/systems",
      title: "Domains & Workstation",
      badge: "ARCHITECTURE & MINDMAPS",
      icon: Cpu,
      description:
        "Interactive architecture workstations, live pipeline visualizers, and engineering mental model mindmaps.",
      badgeBg: "bg-[#E8DAEF] text-[#6C3483]",
      buttonBg: "bg-[#86608E] hover:bg-[#6D4C74]",
    },
    {
      href: "/credentials",
      title: "Credentials & Video Proofs",
      badge: "ISRO/SIH & HARDWARE DEMOS",
      icon: Award,
      description:
        "Verified certificate viewer modal, ISRO & SIH 2024 national hackathon awards, playable IoT video proofs, and recommendations.",
      badgeBg: "bg-[#FCF3CF] text-[#B7950B]",
      buttonBg: "bg-[#D48C38] hover:bg-[#B7762A]",
    },
    {
      href: "/contact",
      title: "Contact & Dispatch Letter",
      badge: "BANGALORE / REMOTE ROLES",
      icon: Mail,
      description:
        "Dispatch a direct message to Kshitiz for Backend, Systems, and Edge AI engineering roles.",
      badgeBg: "bg-[#D1F2EB] text-[#117A65]",
      buttonBg: "bg-[#4E9388] hover:bg-[#3B776D]",
    },
  ];

  return (
    <main className="min-h-screen bg-[#141414] text-[#EDEDED] relative overflow-hidden font-sans">
      <BackgroundEffects />
      <Navbar />

      {/* Main Executive Hero Hub */}
      <div className="pt-24 sm:pt-28 pb-6 relative z-10">
        <Hero />

        {/* Paged Navigation Portal Hub */}
        <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="font-mono text-xs font-bold tracking-[0.25em] uppercase text-[#E25543] mb-2 block">
              · DEDICATED PAGE SECTIONS ·
            </span>
            <h2 className="font-bree text-3xl sm:text-4xl md:text-5xl text-[#F5E1CD] font-bold">
              Explore Portfolio Pages
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#D4BAA3] mt-2 max-w-xl mx-auto leading-relaxed">
              Select any page below to explore complete detailed whitepapers, workstation visualizers, and credentials without long page scrolling.
            </p>
          </div>

          {/* Grid of Navigation Portal Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {navigationHubCards.map((card) => {
              const IconComp = card.icon;

              return (
                <Link
                  key={card.href}
                  href={card.href}
                  className="bg-[#F5E1CD] text-[#2B2015] border-[3px] border-[#2B2015] rounded-[24px] p-6 shadow-[5px_5px_0px_#2B2015] hover:-translate-y-2 hover:shadow-[9px_9px_0px_#2B2015] hover:rotate-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    {/* Top Badge & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`font-sans text-[10px] font-bold px-3 py-1 rounded-full ${card.badgeBg} uppercase tracking-wider`}
                      >
                        {card.badge}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-[#2B2015] text-[#F5E1CD] flex items-center justify-center group-hover:bg-[#E25543] group-hover:text-white transition-colors">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Card Title */}
                    <h3 className="font-bree font-bold text-xl text-[#2B2015] mb-2 group-hover:text-[#E25543] transition-colors leading-snug">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="font-sans text-xs sm:text-sm text-[#3E3124] leading-relaxed mb-6">
                      {card.description}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <div
                    className={`w-full py-2.5 px-4 ${card.buttonBg} text-white rounded-xl font-sans text-xs sm:text-sm font-bold border border-[#2B2015]/30 shadow-[2px_2px_0px_#2B2015] flex items-center justify-between group-hover:shadow-[3px_3px_0px_#2B2015] transition-all`}
                  >
                    <span>Open Section</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Handcrafted Engineering Mindmap Section (How I Approach Things) */}
        <HowIBuild />

        {/* 9-System Infinite Ticker Marquee Preview */}
        <HorizontalProjectRail />
      </div>

      <Footer />
    </main>
  );
}
