"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  MapPin,
  AlertCircle,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  User,
  Fingerprint,
} from "lucide-react";
import { Michroma, Abel } from "next/font/google";

const michroma = Michroma({ subsets: ["latin"], weight: ["400"] });
const abel = Abel({ subsets: ["latin"], weight: ["400"] });

const RESOLUTIONS = [
  {
    id: "INCIDENT_092",
    subject: "Ayo V. — Creative Director",
    scenario:
      "Stopped at a checkpoint in Lekki. My physical papers were back at the office. Usually, this means hours of 'negotiation'.",
    resolution:
      "I presented the Ticket R Card. The officer scanned the QR. My credentials cleared in 15 seconds. No 'handling fee'.",
    location: "LEKKI PHASE 1, LAGOS",
    status: "CLEARED IN 15S",
    tag: "IDENTIFICATION_SYNC",
  },
  {
    id: "INCIDENT_104",
    subject: "Chidi K. — Haulage Owner",
    scenario:
      "My driver was flagged for 'expired' permits renewed last week. Local databases are often out of sync.",
    resolution:
      "The driver displayed the Ticket R dashboard. The digital timestamp proved the renewal. The marshal couldn't argue.",
    location: "ORE - BENIN EXPRESS",
    status: "ZERO INFRACTION",
    tag: "PERMIT_VERIFICATION",
  },
  {
    id: "INCIDENT_077",
    subject: "Fatima B. — Tech Lead",
    scenario:
      "New car, temporary plates. Targeted by three agencies in one afternoon claiming my docs didn't exist.",
    resolution:
      "Ticket R bridges the gap. I showed my profile which aggregates all clearances. They realized I was 'system-protected'.",
    location: "MAITAMA, ABUJA",
    status: "SYSTEM_PROTECTED",
    tag: "ASSET_REGISTRY",
  },
];

export default function UserExperiences() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <section
      className={`py-16 md:py-32 bg-[#FBF9F6] relative overflow-hidden ${abel.className}`}
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header - Fluid Design */}
        <div className="mb-12 md:mb-24 flex flex-col md:flex-row items-start md:items-end justify-between border-b-[1px] border-[#1A1A1A]/10 pb-8 md:pb-12">
          <div className="space-y-3 md:space-y-4">
            <div className="flex items-center gap-3">
              <Fingerprint className="text-[#008000]" size={16} />
              <span className="text-[#1A1A1A] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-[9px] md:text-[10px]">
                Case Resolution Archive
              </span>
            </div>
            <h2
              className={`${michroma.className} text-3xl sm:text-5xl md:text-7xl text-[#1A1A1A] uppercase tracking-tighter leading-[0.95] md:leading-[0.9]`}
            >
              Road <br /> <span className="text-[#008000]">Intelligence</span>
            </h2>
          </div>
          <div className="mt-6 md:mt-0 max-w-[200px] md:max-w-xs text-[#1A1A1A]/50 text-[10px] md:text-xs leading-tight font-medium uppercase tracking-[0.15em] md:tracking-widest">
            Verified Handshakes <br />
            <span className="text-[#008000]">Status: Live Integration</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Tactical Tabs: Horizontal Scroll on Mobile, Vertical on Desktop */}
          <div className="lg:col-span-4 flex lg:flex-col gap-3 overflow-x-auto pb-4 lg:pb-0 no-scrollbar snap-x">
            {RESOLUTIONS.map((res, i) => (
              <button
                key={res.id}
                onClick={() => setActiveIndex(i)}
                className={`flex-shrink-0 w-[260px] lg:w-full text-left p-6 md:p-8 transition-all duration-500 relative snap-center ${
                  activeIndex === i
                    ? "bg-[#1A1A1A] text-white lg:translate-x-2"
                    : "bg-white/50 border-[1px] border-[#1A1A1A]/10 text-[#1A1A1A]"
                }`}
              >
                <div className="flex justify-between items-center mb-2 md:mb-3">
                  <span
                    className={`font-mono text-[8px] md:text-[9px] tracking-[0.3em] ${activeIndex === i ? "text-[#008000]" : "opacity-40"}`}
                  >
                    {res.id}
                  </span>
                  {activeIndex === i && (
                    <ArrowUpRight size={14} className="text-[#008000]" />
                  )}
                </div>
                <p
                  className={`${michroma.className} text-xs md:text-sm uppercase tracking-tight`}
                >
                  {res.subject.split(" — ")[0]}
                </p>
                <p
                  className={`text-[9px] md:text-[10px] uppercase tracking-widest mt-1 ${activeIndex === i ? "text-white/50" : "text-black/40"}`}
                >
                  {res.location.split("-")[0]}
                </p>
              </button>
            ))}
          </div>

          {/* Main Dossier Content */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="bg-white border-[1px] border-[#1A1A1A]/10 p-6 md:p-12 lg:p-16 relative shadow-sm"
              >
                <div className="relative z-10">
                  {/* Status Badges */}
                  <div className="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-12">
                    <span className="bg-[#008000] text-white px-3 py-1 md:px-4 md:py-1.5 text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em]">
                      {RESOLUTIONS[activeIndex].status}
                    </span>
                    <span className="border-[1px] border-[#1A1A1A]/10 text-[#1A1A1A] px-3 py-1 md:px-4 md:py-1.5 text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em]">
                      {RESOLUTIONS[activeIndex].tag}
                    </span>
                  </div>

                  <div className="space-y-8 md:space-y-12">
                    {/* The Stressor */}
                    <div className="max-w-2xl">
                      <div className="flex items-center gap-2 mb-3 md:mb-4 text-[#1A1A1A]/30">
                        <AlertCircle size={12} />
                        <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em]">
                          The Friction
                        </span>
                      </div>
                      <p className="text-[#1A1A1A]/70 text-lg md:text-xl leading-relaxed font-light italic">
                        "{RESOLUTIONS[activeIndex].scenario}"
                      </p>
                    </div>

                    {/* The Solution */}
                    <div className="bg-[#FBF9F6] p-6 md:p-12 border-l-[4px] md:border-l-[6px] border-[#008000]">
                      <div className="flex items-center gap-2 mb-4 md:mb-6 text-[#008000]">
                        <CheckCircle2 size={14} />
                        <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em]">
                          The Handshake
                        </span>
                      </div>
                      <p
                        className={`${abel.className} text-[#1A1A1A] text-xl md:text-3xl leading-snug font-bold`}
                      >
                        {RESOLUTIONS[activeIndex].resolution}
                      </p>
                    </div>
                  </div>

                  {/* Metadata Footer */}
                  <div className="mt-12 md:mt-16 pt-8 md:pt-10 border-t border-[#1A1A1A]/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                    <div className="flex items-center gap-4 md:gap-5">
                      <div className="w-10 h-10 md:w-14 md:h-14 bg-[#1A1A1A] flex items-center justify-center text-white shrink-0">
                        <User size={20} />
                      </div>
                      <div>
                        <p
                          className={`${michroma.className} text-[10px] md:text-xs text-[#1A1A1A]`}
                        >
                          {RESOLUTIONS[activeIndex].subject}
                        </p>
                        <p className="text-[9px] md:text-[10px] uppercase tracking-[0.15em] text-[#1A1A1A]/40 mt-1 flex items-center gap-1">
                          <MapPin size={10} className="text-[#008000]" />{" "}
                          {RESOLUTIONS[activeIndex].location}
                        </p>
                      </div>
                    </div>
                    <div className="font-mono text-[8px] md:text-[9px] text-[#1A1A1A]/20 tracking-[0.3em] md:tracking-[0.4em] uppercase">
                      TR_SECURED // 2026_LOG
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Global Metrics - Responsive Grid */}
        <div className="mt-16 md:mt-24 border-t border-[#1A1A1A]/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Active Point", val: "142" },
              { label: "Daily Clears", val: "12.4K" },
              { label: "Security Index", val: "99.9%" },
              { label: "Key Holders", val: "842K" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`py-8 md:py-12 ${i % 2 !== 0 ? "pl-4" : ""} md:pl-0 lg:pl-12 border-r border-[#1A1A1A]/5 last:border-0`}
              >
                <p className="text-[8px] md:text-[10px] font-black text-[#1A1A1A]/30 uppercase tracking-[0.2em] mb-2 md:mb-3">
                  {stat.label}
                </p>
                <p
                  className={`${michroma.className} text-xl md:text-3xl text-[#1A1A1A]`}
                >
                  {stat.val}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
