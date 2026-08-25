"use client";

import React, { useState } from "react";
import { projectCaseStudies, ProjectCaseStudy } from "@/data/projects";
import { ProjectCaseStudyModal } from "./ProjectCaseStudyModal";
import { FileText, ArrowRight, Shield, Lock, Activity, HeartPulse, Building, ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectDisplayCard {
  id: string;
  categoryGroup: string;
  badgeIcon: string;
  badgeLabel: string;
  badgeBg: string;
  badgeText: string;
  title: string;
  subtitle: string;
  subtitleColor: string;
  summary: string;
  refCitation: string;
  metric1Label: string;
  metric1Value: string;
  metric2Label: string;
  metric2Value: string;
  techTags: string[];
  tapeBg: string;
  buttonBg: string;
  buttonHoverBg: string;
  projectRef: ProjectCaseStudy | undefined;
}

export function HorizontalProjectRail() {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("ALL");

  // Map 5 project cards exactly matching the reference image layout and metadata
  const cards: ProjectDisplayCard[] = [
    {
      id: "dns-shield",
      categoryGroup: "cybersecurity",
      badgeIcon: "🛡️",
      badgeLabel: "CYBERSECURITY & THREAT INTEL",
      badgeBg: "bg-[#FADBD8]",
      badgeText: "text-[#922B21]",
      title: "DNS Shield AI Platform",
      subtitle: "AI/ML-Powered DNS Threat Detection with Anomaly & Real-Time TrustScore Auditing",
      subtitleColor: "text-[#E25543]",
      summary:
        "AI-engine and DNS threat detection platform analyzing domain & packet patterns, issuing real-time TrustScores with adaptive blocking & federated threat intelligence.",
      refCitation: "Trichy Top 10 (Nov'24)",
      metric1Label: "DETECTION ACCURACY",
      metric1Value: "< 1.2ms",
      metric2Label: "BLOCKING PRECISION",
      metric2Value: "97.4%",
      techTags: ["Python", "FastAPI", "Redis", "Scikit-learn", "Selenium"],
      tapeBg: "bg-[#E25543]/70",
      buttonBg: "bg-[#E25543]",
      buttonHoverBg: "hover:bg-[#C84332]",
      projectRef: projectCaseStudies.find((p) => p.id === "dns-shield") || projectCaseStudies[0],
    },
    {
      id: "federated-healthcare",
      categoryGroup: "research",
      badgeIcon: "🔒",
      badgeLabel: "RESEARCH & PRIVACY",
      badgeBg: "bg-[#D4EFDF]",
      badgeText: "text-[#1E8449]",
      title: "Privacy-Preserving Federated & Split Learning",
      subtitle: "Decentralized, Privacy-First ML with Adaptive Model Pruning and IoT/Edge",
      subtitleColor: "text-[#4E8752]",
      summary:
        "A robust, dual-privacy-preserving FL pipeline leveraging secure aggregation, adaptive pruning & split learning to optimize models on non-IID federated data.",
      refCitation: "Scopus Q1 (Dec'24)",
      metric1Label: "TOP-1 ACC. (FL)",
      metric1Value: "94.8%",
      metric2Label: "ZERO RAW SHARE",
      metric2Value: "Achieved",
      techTags: ["Python", "PyTorch", "Flower", "FedAvg", "SPLIT Learning"],
      tapeBg: "bg-[#5B8C69]/70",
      buttonBg: "bg-[#5B8C69]",
      buttonHoverBg: "hover:bg-[#477353]",
      projectRef: projectCaseStudies.find((p) => p.id === "federated-healthcare") || projectCaseStudies[1],
    },
    {
      id: "ton-iot-ids",
      categoryGroup: "cybersecurity",
      badgeIcon: "⚛️",
      badgeLabel: "NETWORK SECURITY",
      badgeBg: "bg-[#E8DAEF]",
      badgeText: "text-[#6C3483]",
      title: "Two-Stage Network Intrusion Detection Engine",
      subtitle: "High-Throughput Binary-Edge E-Multi Attack Classifier with TrueSHAP",
      subtitleColor: "text-[#86608E]",
      summary:
        "A dual-stage machine learning IDS with random detection & XGBoost classification for high accuracy and low latency in real-world deployments.",
      refCitation: "IJ IoT Best Paper (Jan'25)",
      metric1Label: "DETECTION RATE",
      metric1Value: "99.8%",
      metric2Label: "FALSE POSITIVE",
      metric2Value: "< 0.15%",
      techTags: ["Python", "XGBoost", "Scapy", "SMOTE", "SHAP"],
      tapeBg: "bg-[#86608E]/70",
      buttonBg: "bg-[#86608E]",
      buttonHoverBg: "hover:bg-[#6D4C74]",
      projectRef: projectCaseStudies.find((p) => p.id === "ton-iot-ids") || projectCaseStudies[2],
    },
    {
      id: "ecg-arrhythmia",
      categoryGroup: "ai-systems",
      badgeIcon: "🫀",
      badgeLabel: "CLINICAL ML",
      badgeBg: "bg-[#FCF3CF]",
      badgeText: "text-[#B7950B]",
      title: "12-Lead ECG Arrhythmia Classification Platform",
      subtitle: "CNN-LSTM Hybrid for Multi-Label Cardiac Diagnostic Engine",
      subtitleColor: "text-[#D48C38]",
      summary:
        "A clinical-grade cardiac diagnostic system classifying arrhythmias from 12-lead ECG signals with attention mechanism and explainable decision support.",
      refCitation: "PhysioNet 2024 (May'25)",
      metric1Label: "CLASSIFICATION ACC.",
      metric1Value: "97.1%",
      metric2Label: "CATEGORICAL F1",
      metric2Value: "92.4%",
      techTags: ["Python", "TensorFlow", "Keras", "NumPy", "SHAP"],
      tapeBg: "bg-[#D48C38]/70",
      buttonBg: "bg-[#D48C38]",
      buttonHoverBg: "hover:bg-[#B7762A]",
      projectRef: projectCaseStudies.find((p) => p.id === "ecg-arrhythmia") || projectCaseStudies[3],
    },
    {
      id: "campus-events-platform",
      categoryGroup: "full-stack",
      badgeIcon: "🏛️",
      badgeLabel: "CAMPUS SYSTEMS",
      badgeBg: "bg-[#D1F2EB]",
      badgeText: "text-[#117A65]",
      title: "Campus Event Discovery & RSVP System",
      subtitle: "Smart Engagement Platform with JWT Auth, Role Control & QR Check-In",
      subtitleColor: "text-[#4E9388]",
      summary:
        "A production-ready campus event management system with secure RSVP, role-based access, and real-time participation tracking.",
      refCitation: "RVCE Campus Hack 2024",
      metric1Label: "REGISTERED USERS",
      metric1Value: "5,000+",
      metric2Label: "API LATENCY",
      metric2Value: "< 250ms",
      techTags: ["NextJs", "TypeScript", "Tailwind", "Go", "PostgreSQL"],
      tapeBg: "bg-[#4E9388]/70",
      buttonBg: "bg-[#4E9388]",
      buttonHoverBg: "hover:bg-[#3B776D]",
      projectRef: projectCaseStudies.find((p) => p.id === "campus-events-platform") || projectCaseStudies[4],
    },
  ];

  const filteredCards =
    activeFilter === "ALL"
      ? cards
      : cards.filter((c) => {
          if (activeFilter === "cybersecurity") return c.categoryGroup === "cybersecurity";
          if (activeFilter === "ai-systems") return c.categoryGroup === "ai-systems";
          if (activeFilter === "full-stack") return c.categoryGroup === "full-stack";
          if (activeFilter === "research") return c.categoryGroup === "research";
          return true;
        });

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 max-w-[1400px] mx-auto">
      {/* Section Top Tagline & Main Title */}
      <div className="flex flex-col items-center text-center mb-8">
        <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-[#D4BAA3]/80 mb-3">
          · DEFENSIBLE ARCHITECTURES ·
        </span>
        <h2 className="font-bree text-4xl sm:text-5xl md:text-6xl text-[#F5E1CD] font-bold tracking-tight mb-3">
          Featured Systems &amp; Projects
        </h2>
        <p className="font-sans text-sm sm:text-base text-[#D4BAA3]/90 max-w-2xl leading-relaxed">
          Click &apos;Inspect Case Study&apos; to deep dive any project module and explore the architecture, research &amp; impact.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mt-6">
          {[
            { id: "ALL", label: "All Systems (5)" },
            { id: "cybersecurity", label: "Cybersecurity & Threat Intel" },
            { id: "ai-systems", label: "Edge AI & Healthcare Systems" },
            { id: "full-stack", label: "High Throughput Web & CI/CD" },
            { id: "research", label: "Distributed Architectures" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-full font-sans text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? "bg-[#E25543] text-white shadow-[0_0_15px_rgba(226,85,67,0.4)]"
                  : "bg-transparent text-[#D4BAA3] border border-[#F5E1CD]/25 hover:border-[#F5E1CD]/50 hover:bg-[#F5E1CD]/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Blueprint Framed Box Container */}
      <div className="relative border border-[#F5E1CD]/20 rounded-[28px] bg-[#171615]/80 p-5 sm:p-7 backdrop-blur-sm shadow-2xl">
        {/* Top Horizontal Arrow Line */}
        <div className="flex items-center justify-between text-[#F5E1CD]/30 text-xs font-mono mb-6 px-2 select-none">
          <span>&lt;</span>
          <div className="h-[1px] bg-gradient-to-r from-[#F5E1CD]/10 via-[#F5E1CD]/30 to-[#F5E1CD]/10 flex-1 mx-3" />
          <span>&gt;</span>
        </div>

        {/* Corner Glowing Pins/Crosshairs */}
        <div className="absolute -top-2 -left-2 text-[#E25543] text-base font-mono">✦</div>
        <div className="absolute -top-2 -right-2 text-[#E25543] text-base font-mono">✦</div>
        <div className="absolute -bottom-2 -left-2 text-[#E25543] text-base font-mono">✦</div>
        <div className="absolute -bottom-2 -right-2 text-[#E25543] text-base font-mono">✦</div>

        {/* 5 Cards Horizontal Grid / Rail */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 overflow-x-auto pb-2">
          {filteredCards.map((card) => (
            <div
              key={card.id}
              className="bg-[#F5E1CD] text-[#2B2015] border-[3px] border-[#2B2015] rounded-[22px] p-5 flex flex-col justify-between relative shadow-[4px_4px_0px_#2B2015] transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#2B2015] group min-h-[520px]"
            >
              {/* Top Washi Tape */}
              <div
                className={`absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-4 ${card.tapeBg} rounded-sm rotate-[-2deg] z-10 border border-[#2B2015]/30`}
              />

              <div>
                {/* Top Category Badge */}
                <div className="flex items-center justify-center mb-3 pt-1">
                  <span
                    className={`inline-flex items-center gap-1.5 font-sans text-[10px] sm:text-[11px] font-bold px-3 py-1 rounded-full ${card.badgeBg} ${card.badgeText} tracking-tight shadow-sm`}
                  >
                    <span>{card.badgeIcon}</span>
                    <span>{card.badgeLabel}</span>
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="font-bree font-bold text-lg sm:text-xl text-[#2B2015] leading-snug mb-2 group-hover:text-[#E25543] transition-colors">
                  {card.title}
                </h3>

                {/* Highlight Subtitle (Colored) */}
                <p className={`font-sans text-xs font-bold ${card.subtitleColor} leading-snug mb-3`}>
                  {card.subtitle}
                </p>

                {/* Summary Description */}
                <p className="font-sans text-xs text-[#3E3124] leading-relaxed mb-4">
                  {card.summary}
                </p>

                {/* Ref Citation Note */}
                <div className="font-mono text-[11px] text-[#5B4C3E] bg-[#E9D5C3]/70 px-3 py-1.5 rounded-lg border border-[#2B2015]/20 mb-4 flex items-center gap-1.5 font-semibold">
                  <FileText className="w-3.5 h-3.5 text-[#E25543] shrink-0" />
                  <span className="truncate">Ref: {card.refCitation}</span>
                </div>

                {/* 2-Column Metrics Grid */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="bg-[#E9D5C3]/80 border border-[#2B2015]/20 p-2 rounded-xl text-center">
                    <span className="font-mono text-[9px] text-[#5B4C3E] font-bold uppercase block tracking-wider truncate">
                      {card.metric1Label}
                    </span>
                    <span className={`font-mono text-sm font-extrabold ${card.subtitleColor} block mt-0.5`}>
                      {card.metric1Value}
                    </span>
                  </div>

                  <div className="bg-[#E9D5C3]/80 border border-[#2B2015]/20 p-2 rounded-xl text-center">
                    <span className="font-mono text-[9px] text-[#5B4C3E] font-bold uppercase block tracking-wider truncate">
                      {card.metric2Label}
                    </span>
                    <span className={`font-mono text-sm font-extrabold ${card.subtitleColor} block mt-0.5`}>
                      {card.metric2Value}
                    </span>
                  </div>
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {card.techTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-[#FAF0E6] text-[#2B2015] font-mono text-[10px] font-semibold border border-[#2B2015]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom CTA Button */}
              <div className="pt-2">
                <button
                  onClick={() => card.projectRef && setSelectedProject(card.projectRef)}
                  className={`w-full py-2.5 px-3 ${card.buttonBg} ${card.buttonHoverBg} text-white rounded-xl text-xs sm:text-sm font-bold border border-[#2B2015]/30 shadow-[2px_2px_0px_#2B2015] transition-all cursor-pointer flex items-center justify-center gap-1.5`}
                >
                  <span>Inspect Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Line Text */}
        <div className="mt-6 pt-4 border-t border-[#F5E1CD]/15 flex items-center justify-center text-center text-[#F5E1CD]/50 font-mono text-[11px] tracking-[0.3em] uppercase">
          RESEARCH · BUILD · DEPLOY · DEFEND
        </div>
      </div>

      {/* 12-Section Technical Case Study Modal */}
      {selectedProject && (
        <ProjectCaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
