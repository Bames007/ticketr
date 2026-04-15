"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Fingerprint,
  FileSearch,
  Globe,
  Lock,
  Zap,
  Smartphone,
  ChevronRight,
  ShieldAlert,
} from "lucide-react";
import { Michroma, Abel } from "next/font/google";

const michroma = Michroma({ subsets: ["latin"], weight: ["400"] });
const abel = Abel({ subsets: ["latin"], weight: ["400"] });

const SERVICES = [
  {
    id: "SRV-01",
    title: "Digital Registry",
    tagline: "Your Identity, Decentralized.",
    desc: "We aggregate your state-issued IDs, vehicle permits, and professional licenses into a single, encrypted digital vault. No more carrying bulky folders or original documents that can be lost or damaged.",
    features: [
      "Biometric Linkage",
      "Cloud-Secured Backups",
      "Multi-Agency Support",
    ],
    icon: <Fingerprint size={32} />,
    color: "#008000",
  },
  {
    id: "SRV-02",
    title: "Protocol Verification",
    tagline: "15-Second Compliance.",
    desc: "Our unique QR Handshake allows road marshals and security agencies to verify your status instantly. It bypasses slow local databases by connecting directly to the Ticket R Cloud.",
    features: [
      "Instant QR Handshake",
      "Offline Verification",
      "Audit Trail Logs",
    ],
    icon: <Zap size={32} />,
    color: "#008000",
  },
  {
    id: "SRV-03",
    title: "Asset Shield",
    tagline: "Move with Confidence.",
    desc: "Protect high-value assets during transit. Ticket R provides a 'System-Protected' status that alerts authorities that your cargo or vehicle is fully compliant with federal and state regulations.",
    features: [
      "Infraction Protection",
      "Real-time Compliance",
      "Legal Support Link",
    ],
    icon: <Lock size={32} />,
    color: "#008000",
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      className={`py-24 bg-[#FBF9F6] min-h-screen relative overflow-hidden ${abel.className}`}
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-20 border-b border-[#1A1A1A]/10 pb-12">
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="text-[#008000]" size={20} />
            <span className="text-[#1A1A1A] font-black uppercase tracking-[0.4em] text-[10px]">
              Ecosystem Overview
            </span>
          </div>
          <div className="mb-12 md:mb-20">
            <h2
              className={`${michroma.className} text-3xl sm:text-5xl md:text-6xl text-[#1A1A1A] uppercase tracking-tighter leading-[1.1] md:leading-none`}
            >
              The <span className="text-[#008000]">Validation</span>{" "}
              <br className="hidden sm:block" />
              Architecture.
            </h2>
            <p className="mt-6 md:mt-8 max-w-2xl text-[#1A1A1A]/60 text-lg md:text-xl leading-relaxed">
              Ticket R isn't just an app; it's a cryptographic bridge between
              citizens and authority, designed to eliminate friction and restore
              dignity to Nigerian movement.
            </p>
          </div>
        </div>

        {/* Interaction Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Service Selection */}
          <div className="lg:col-span-5 space-y-4">
            {SERVICES.map((service, i) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(i)}
                className={`w-full text-left p-8 transition-all duration-500 border-l-4 ${
                  activeTab === i
                    ? "bg-white border-[#008000] shadow-[30px_30px_60px_rgba(0,0,0,0.03)]"
                    : "bg-transparent border-transparent hover:border-[#1A1A1A]/20"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#1A1A1A]/40">
                    {service.id}
                  </span>
                  {activeTab === i && (
                    <motion.div
                      layoutId="dot"
                      className="w-2 h-2 bg-[#008000] rounded-full"
                    />
                  )}
                </div>
                <h3
                  className={`${michroma.className} text-xl text-[#1A1A1A] uppercase`}
                >
                  {service.title}
                </h3>
                <p className="text-[#008000] font-black text-[10px] uppercase tracking-widest mt-1">
                  {service.tagline}
                </p>
              </button>
            ))}
          </div>

          {/* Right: Detail Display */}
          <div className="lg:col-span-7 bg-white border border-[#1A1A1A]/5 p-8 md:p-16 relative shadow-[40px_40px_80px_rgba(26,26,26,0.02)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="w-20 h-20 bg-[#1A1A1A] text-[#008000] flex items-center justify-center mb-10 shadow-2xl">
                  {SERVICES[activeTab].icon}
                </div>

                <h4
                  className={`${michroma.className} text-3xl text-[#1A1A1A] mb-6 uppercase leading-tight`}
                >
                  {SERVICES[activeTab].title}
                </h4>

                <p className="text-[#1A1A1A]/70 text-xl leading-relaxed mb-10 border-l-2 border-[#008000]/20 pl-6 italic">
                  {SERVICES[activeTab].desc}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {SERVICES[activeTab].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#008000]/10 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-[#008000] rounded-full" />
                      </div>
                      <span className="text-[#1A1A1A] font-bold text-sm uppercase tracking-tight">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-16 flex items-center gap-6 pt-10 border-t border-[#1A1A1A]/5">
                  <button className="bg-[#008000] text-white px-8 py-4 text-xs font-black uppercase tracking-[0.2em] hover:bg-[#1A1A1A] transition-colors">
                    Activate Service
                  </button>
                  <div className="flex items-center gap-2 text-[#1A1A1A]/30">
                    <Globe size={14} />
                    <span className="text-[9px] font-black uppercase tracking-widest">
                      Network Live
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* System Summary Banner */}
        <div className="mt-24 bg-[#1A1A1A] p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[20px_20px_0px_#008000]">
          <div className="flex items-center gap-6">
            <Smartphone className="text-[#008000]" size={40} />
            <div>
              <p className={`${michroma.className} text-white text-lg`}>
                Unified Mobile Protocol
              </p>
              <p className="text-white/40 text-xs uppercase tracking-widest mt-1">
                iOS // Android // Web Integration
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-[#008000] font-black text-xs uppercase tracking-widest">
                Security Status
              </p>
              <p className="text-white font-mono text-[10px]">
                AES-256 BIT ENCRYPTION ACTIVE
              </p>
            </div>
            <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full border border-white/10">
              <ShieldAlert className="text-[#008000]" size={20} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
