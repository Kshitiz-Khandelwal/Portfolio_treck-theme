import { Navbar } from "@/components/Navbar";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, Mail, Send } from "lucide-react";

export const metadata = {
  title: "Contact & Dispatch | Kshitiz Khandelwal",
  description: "Get in touch with Kshitiz Khandelwal for Backend, Systems, and Edge AI roles (Bangalore / Remote).",
};

export default function ContactPage() {
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
            · GET IN TOUCH ·
          </span>
          <h1 className="font-bree text-4xl sm:text-5xl md:text-6xl text-[#F5E1CD] font-bold tracking-tight mb-4">
            Contact &amp; Dispatch Letter
          </h1>
          <p className="font-sans text-base sm:text-lg text-[#D4BAA3] max-w-2xl mx-auto leading-relaxed">
            Open for Backend &amp; AI Engineering Roles (Bangalore / Remote • Full-Time &amp; Internships). Dispatch a message directly to Kshitiz.
          </p>
        </div>

        {/* Contact Dispatch */}
        <ContactSection />
      </div>

      <Footer />
    </main>
  );
}
