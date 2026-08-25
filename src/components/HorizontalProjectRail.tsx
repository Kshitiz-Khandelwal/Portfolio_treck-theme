"use client";

import React, { useState, useRef, useEffect } from "react";
import { projectCaseStudies, ProjectCaseStudy } from "@/data/projects";
import { ProjectCaseStudyModal } from "./ProjectCaseStudyModal";
import { FileText, ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

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
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number | null>(null);

  // Full comprehensive array of 9 systems & projects from system and GitHub
  const baseCards: ProjectDisplayCard[] = [
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
        "Wire-speed DNS threat defense platform analyzing domain characteristics, lexical n-grams, and Shannon entropy to intercept malware C2 beaconing.",
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
        "A robust, dual-privacy-preserving FL pipeline leveraging secure aggregation, adaptive pruning & split learning on non-IID federated data.",
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
        "Dual-stage machine learning network intrusion detection system executing wire-speed binary filtering followed by multi-class attack attribution.",
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
        "Clinical-grade cardiac diagnostic system converting raw 12-lead ECG signals into CWT scalograms for multi-label arrhythmia classification.",
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
        "Production-ready campus event management platform handling real-time ticket registration, Redis inventory locks, and QR check-ins.",
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
    {
      id: "mobile-robotics",
      categoryGroup: "ai-systems",
      badgeIcon: "🤖",
      badgeLabel: "IOT & ROBOTICS",
      badgeBg: "bg-[#FADBD8]",
      badgeText: "text-[#922B21]",
      title: "Mobile-Controlled Cyber-Physical Robot",
      subtitle: "Real-Time Dual-Motor Drive Control with Sub-15ms Actuation",
      subtitleColor: "text-[#E25543]",
      summary:
        "Real-time dual-motor drive control over local Wi-Fi/Bluetooth stream with sub-15ms actuation latency and fail-safe disconnect hardware protocols.",
      refCitation: "Hardware Lab Bench (2024)",
      metric1Label: "ACTUATION LATENCY",
      metric1Value: "< 15ms",
      metric2Label: "BAUD RATE",
      metric2Value: "115,200",
      techTags: ["ESP32", "C++ Firmware", "L298N", "Telemetry", "Wi-Fi"],
      tapeBg: "bg-[#E25543]/70",
      buttonBg: "bg-[#E25543]",
      buttonHoverBg: "hover:bg-[#C84332]",
      projectRef: projectCaseStudies[0],
    },
    {
      id: "driver-drowsiness",
      categoryGroup: "ai-systems",
      badgeIcon: "👁️",
      badgeLabel: "EDGE CV & SAFETY",
      badgeBg: "bg-[#D4EFDF]",
      badgeText: "text-[#1E8449]",
      title: "Driver Drowsiness & Eye-Blink Edge Alert",
      subtitle: "Eye Aspect Ratio (EAR) & Head-Pose Telemetry Engine at 30 FPS",
      subtitleColor: "text-[#4E8752]",
      summary:
        "Computer vision edge node computing Eye Aspect Ratio (EAR) and head-pose telemetry at 30 FPS, triggering instant acoustic alarms upon micro-sleep.",
      refCitation: "Edge CV Field Test (2024)",
      metric1Label: "FRAME RATE",
      metric1Value: "30 FPS",
      metric2Label: "EAR PRECISION",
      metric2Value: "98.2%",
      techTags: ["OpenCV", "Python", "EAR Metric", "Edge Vision", "Buzzer Alarm"],
      tapeBg: "bg-[#5B8C69]/70",
      buttonBg: "bg-[#5B8C69]",
      buttonHoverBg: "hover:bg-[#477353]",
      projectRef: projectCaseStudies[3],
    },
    {
      id: "iomt-federated",
      categoryGroup: "research",
      badgeIcon: "⚡",
      badgeLabel: "RESEARCH FELLOW",
      badgeBg: "bg-[#E8DAEF]",
      badgeText: "text-[#6C3483]",
      title: "Split Federated IoMT Privacy Pipeline",
      subtitle: "Privacy-Preserving Edge Diagnostic Learning at IIIT Trichy",
      subtitleColor: "text-[#86608E]",
      summary:
        "Decentralized Split-FL pipeline preventing gradient inversion and activation leakages on medical Internet-of-Things (IoMT) hardware.",
      refCitation: "IIIT Trichy Research (2024)",
      metric1Label: "DATA PRIVACY",
      metric1Value: "100% Zero Leak",
      metric2Label: "BANDWIDTH SAVINGS",
      metric2Value: "-65%",
      techTags: ["PyTorch", "IoMT", "Split Learning", "Differential Privacy"],
      tapeBg: "bg-[#86608E]/70",
      buttonBg: "bg-[#86608E]",
      buttonHoverBg: "hover:bg-[#6D4C74]",
      projectRef: projectCaseStudies[1],
    },
    {
      id: "zarthi-microservices",
      categoryGroup: "full-stack",
      badgeIcon: "⚙️",
      badgeLabel: "JAVA & BACKEND",
      badgeBg: "bg-[#FCF3CF]",
      badgeText: "text-[#B7950B]",
      title: "High-Throughput Java Microservices Suite",
      subtitle: "Asynchronous REST Event Pipelines & Redis Cache Architecture",
      subtitleColor: "text-[#D48C38]",
      summary:
        "High-performance Java & Spring Boot microservices built during Zarthi internship, handling deterministic execution under heavy concurrent load.",
      refCitation: "Zarthi Internship (2024)",
      metric1Label: "THROUGHPUT",
      metric1Value: "10,000+ QPS",
      metric2Label: "API LATENCY",
      metric2Value: "< 5ms",
      techTags: ["Java", "Spring Boot", "FastAPI", "Redis", "PostgreSQL"],
      tapeBg: "bg-[#D48C38]/70",
      buttonBg: "bg-[#D48C38]",
      buttonHoverBg: "hover:bg-[#B7762A]",
      projectRef: projectCaseStudies[4],
    },
  ];

  // Filter base cards according to selected category
  const filteredBase =
    activeFilter === "ALL"
      ? baseCards
      : baseCards.filter((c) => {
          if (activeFilter === "cybersecurity") return c.categoryGroup === "cybersecurity";
          if (activeFilter === "ai-systems") return c.categoryGroup === "ai-systems";
          if (activeFilter === "full-stack") return c.categoryGroup === "full-stack";
          if (activeFilter === "research") return c.categoryGroup === "research";
          return true;
        });

  // Duplicate cards for seamless infinite looping (3x duplication for smooth infinite scroll wrap)
  const loopedCards = [...filteredBase, ...filteredBase, ...filteredBase];

  // Continuous Seamless Infinite Auto-Scroll Engine
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let speed = 0.7; // Pixels per frame smooth scroll speed

    const step = () => {
      if (!isPaused && el) {
        el.scrollLeft += speed;

        // When scrolled past one full set of cards, seamlessly wrap back to start without visual jump!
        const maxSingleScroll = el.scrollWidth / 3;
        if (el.scrollLeft >= maxSingleScroll * 2) {
          el.scrollLeft -= maxSingleScroll;
        } else if (el.scrollLeft <= 0) {
          el.scrollLeft += maxSingleScroll;
        }
      }
      animationRef.current = requestAnimationFrame(step);
    };

    animationRef.current = requestAnimationFrame(step);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isPaused, activeFilter, filteredBase.length]);

  const scrollByAmount = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = direction === "left" ? -360 : 360;
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 max-w-[1500px] mx-auto overflow-hidden">
      {/* Section Top Tagline & Main Title */}
      <div className="flex flex-col items-center text-center mb-8">
        <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-[#D4BAA3]/80 mb-3 flex items-center gap-2">
          <span>·</span>
          <span>DEFENSIBLE ARCHITECTURES</span>
          <span>·</span>
        </span>
        <h2 className="font-bree text-4xl sm:text-5xl md:text-6xl text-[#F5E1CD] font-bold tracking-tight mb-3">
          Featured Systems &amp; Projects
        </h2>
        <p className="font-sans text-sm sm:text-base text-[#D4BAA3]/90 max-w-2xl leading-relaxed">
          Click &apos;Inspect Case Study&apos; to deep dive any project module and explore the architecture, research &amp; impact.
        </p>

        {/* Filter Pills & Controls */}
        <div className="flex flex-wrap items-center justify-between w-full max-w-5xl gap-4 mt-8 px-2">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "ALL", label: `All Systems (${baseCards.length})` },
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

          {/* Interactive Infinite Ticker Controls (Pause/Play & Navigation Arrows) */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="p-2.5 rounded-full bg-[#2B2015]/70 text-[#F5E1CD] border border-[#F5E1CD]/20 hover:bg-[#E25543] hover:text-white transition-all cursor-pointer shadow-md flex items-center gap-1.5 px-3 text-xs font-mono"
              title={isPaused ? "Resume Auto Scroll" : "Pause Auto Scroll"}
            >
              {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
              <span>{isPaused ? "Play" : "Pause"}</span>
            </button>

            <button
              onClick={() => scrollByAmount("left")}
              className="p-2.5 rounded-full bg-[#2B2015]/70 text-[#F5E1CD] border border-[#F5E1CD]/20 hover:bg-[#E25543] hover:text-white transition-all cursor-pointer shadow-md"
              title="Scroll Left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollByAmount("right")}
              className="p-2.5 rounded-full bg-[#2B2015]/70 text-[#F5E1CD] border border-[#F5E1CD]/20 hover:bg-[#E25543] hover:text-white transition-all cursor-pointer shadow-md"
              title="Scroll Right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Seamless Infinite Looping Horizontal Scroll Container */}
      <div
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="flex gap-5 overflow-x-auto pb-8 pt-4 px-2 scrollbar-none cursor-grab active:cursor-grabbing select-none"
        style={{ scrollBehavior: "auto" }}
      >
        {loopedCards.map((card, idx) => (
          <div
            key={`${card.id}-dup-${idx}`}
            className="w-full sm:w-[325px] md:w-[340px] shrink-0 bg-[#F5E1CD] text-[#2B2015] border-[3px] border-[#2B2015] rounded-[24px] p-5 flex flex-col justify-between relative shadow-[5px_5px_0px_#2B2015] transition-all duration-300 hover:-translate-y-2.5 hover:rotate-1 hover:shadow-[9px_9px_0px_#2B2015] group min-h-[530px]"
          >
            {/* Top Washi Tape */}
            <div
              className={`absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-4 ${card.tapeBg} rounded-sm rotate-[-2deg] z-10 border border-[#2B2015]/30`}
            />

            <div>
              {/* Top Category Badge */}
              <div className="flex items-center justify-center mb-3 pt-1">
                <span
                  className={`inline-flex items-center gap-1.5 font-sans text-[11px] font-bold px-3 py-1 rounded-full ${card.badgeBg} ${card.badgeText} tracking-tight shadow-sm`}
                >
                  <span>{card.badgeIcon}</span>
                  <span>{card.badgeLabel}</span>
                </span>
              </div>

              {/* Card Title */}
              <h3 className="font-bree font-bold text-xl text-[#2B2015] leading-snug mb-2 group-hover:text-[#E25543] transition-colors">
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
                className={`w-full py-2.5 px-3 ${card.buttonBg} ${card.buttonHoverBg} text-white rounded-xl text-xs sm:text-sm font-bold border border-[#2B2015]/30 shadow-[2px_2px_0px_#2B2015] hover:shadow-[3px_3px_0px_#2B2015] hover:-translate-y-0.5 transition-all cursor-pointer flex items-center justify-center gap-1.5`}
              >
                <span>Inspect Case Study</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Footer Note */}
      <div className="mt-4 text-center text-[#F5E1CD]/50 font-mono text-xs tracking-[0.3em] uppercase flex items-center justify-center gap-2">
        <span>· CONTINUOUS STREAM</span>
        <span>·</span>
        <span>RESEARCH · BUILD · DEPLOY · DEFEND ·</span>
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
