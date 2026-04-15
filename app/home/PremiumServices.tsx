"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  MapPinned,
  Wrench,
  CheckCircle2,
  Clock,
  Activity,
  AlertCircle,
  HelpCircle,
} from "lucide-react";
import { Michroma, Abel } from "next/font/google";

const michroma = Michroma({ subsets: ["latin"], weight: ["400"] });
const abel = Abel({ subsets: ["latin"], weight: ["400"] });

const PRACTICAL_SERVICES = [
  {
    id: "01",
    title: "Car Tracking & Theft Recovery",
    tagline: "Find your car anywhere.",
    desc: "If your car is stolen, you can report it instantly through our website. We immediately alert our network of security partners and checkpoints to help find and return your vehicle as quickly as possible.",
    features: [
      "Live Location Tracking",
      "Instant Police Alerts",
      "24/7 Monitoring",
    ],
    icon: <MapPinned size={32} />,
  },
  {
    id: "02",
    title: "Emergency Roadside Help",
    tagline: "Safety if your car breaks down.",
    desc: "Breaking down on a lonely road is scary. Use Ticket R to get a verified towing truck and a security escort. We also provide a digital permit that shows traffic officers you are waiting for help, so they don't fine you for illegal parking.",
    features: ["Verified Tow Trucks", "Security Escort", "Parking Protection"],
    icon: <Wrench size={32} />,
  },
  {
    id: "03",
    title: "Legal Protection",
    tagline: "Don't get bullied on the road.",
    desc: "If an officer stops you unfairly or asks for a bribe, our legal help feature allows you to record the incident and get advice. We help ensure your rights are protected and that road rules are followed properly.",
    features: ["Incident Recording", "Legal Advice", "Officer Accountability"],
    icon: <ShieldCheck size={32} />,
  },
];

export default function SimpleUtilities() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      className={`py-24 bg-[#FBF9F6] relative overflow-hidden ${abel.className}`}
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Simple Header - Matching the Service Style */}
        <div className="mb-20 border-b border-[#1A1A1A]/10 pb-12">
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle2 className="text-[#008000]" size={20} />
            <span className="text-[#1A1A1A] font-black uppercase tracking-[0.4em] text-[10px]">
              Extra Protection
            </span>
          </div>
          <h2
            className={`${michroma.className} text-4xl md:text-6xl text-[#1A1A1A] uppercase tracking-tighter leading-none`}
          >
            Premium <span className="text-[#008000]">Support.</span>
          </h2>
          <p className="mt-8 max-w-2xl text-[#1A1A1A]/60 text-xl leading-relaxed">
            We do more than just check papers. Ticket R keeps you and your car
            safe from theft, breakdowns, and unfair treatment on the road.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Simple Selectors */}
          <div className="lg:col-span-5 space-y-4">
            {PRACTICAL_SERVICES.map((service, i) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(i)}
                className={`w-full text-left p-8 transition-all duration-500 border-l-4 ${
                  activeTab === i
                    ? "bg-white border-[#008000] shadow-[30px_30px_60px_rgba(0,0,0,0.03)]"
                    : "bg-transparent border-transparent hover:border-[#1A1A1A]/10"
                }`}
              >
                <div className="flex items-center justify-between mb-2 text-[#1A1A1A]/30">
                  <span className="font-mono text-[10px] uppercase tracking-widest">
                    {service.id}
                  </span>
                  {activeTab === i && (
                    <Activity size={14} className="text-[#008000]" />
                  )}
                </div>
                <h3
                  className={`${michroma.className} text-lg text-[#1A1A1A] uppercase`}
                >
                  {service.title}
                </h3>
                <p className="text-[#008000] font-bold text-[10px] uppercase tracking-widest mt-1">
                  {service.tagline}
                </p>
              </button>
            ))}
          </div>

          {/* Right: Detailed Info */}
          <div className="lg:col-span-7 bg-white border border-[#1A1A1A]/5 p-8 md:p-16 relative shadow-[40px_40px_80px_rgba(26,26,26,0.02)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="w-20 h-20 bg-[#1A1A1A] text-[#008000] flex items-center justify-center mb-10 shadow-xl">
                  {PRACTICAL_SERVICES[activeTab].icon}
                </div>

                <h4
                  className={`${michroma.className} text-3xl text-[#1A1A1A] mb-6 uppercase leading-tight`}
                >
                  {PRACTICAL_SERVICES[activeTab].title}
                </h4>

                <p className="text-[#1A1A1A]/70 text-xl leading-relaxed mb-10 border-l-2 border-[#008000]/20 pl-6">
                  {PRACTICAL_SERVICES[activeTab].desc}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {PRACTICAL_SERVICES[activeTab].features.map(
                    (feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <AlertCircle size={14} className="text-[#008000]" />
                        <span className="text-[#1A1A1A] font-bold text-sm uppercase tracking-tight">
                          {feature}
                        </span>
                      </div>
                    ),
                  )}
                </div>

                <div className="mt-16 flex items-center gap-6 pt-10 border-t border-[#1A1A1A]/5">
                  <button className="bg-[#008000] text-white px-8 py-4 text-xs font-black uppercase tracking-[0.2em] hover:bg-black transition-all">
                    Get Access Now
                  </button>
                  <div className="flex items-center gap-2 text-[#1A1A1A]/30">
                    <HelpCircle size={14} />
                    <span className="text-[9px] font-black uppercase tracking-widest">
                      Learn More
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Simple System Status */}
        <div className="mt-20 flex flex-wrap justify-between items-center gap-8 py-8 border-t border-[#1A1A1A]/10">
          <div className="flex items-center gap-4 text-[#1A1A1A]/40 uppercase tracking-widest text-[9px] font-bold">
            <Clock size={16} />
            <span>Active Protection // 24/7 Coverage</span>
          </div>
          <div className="flex items-center gap-4 text-[#1A1A1A]/40 uppercase tracking-widest text-[9px] font-bold">
            <span className="w-2 h-2 bg-[#008000] rounded-full" />
            <span>Systems Online</span>
          </div>
        </div>
      </div>
    </section>
  );
}
