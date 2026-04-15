"use client";

import React from "react";
import { motion } from "framer-motion";
import { Michroma, Abel } from "next/font/google";
import { ShieldAlert, Fingerprint, Clock, FileCheck } from "lucide-react";

const michroma = Michroma({ subsets: ["latin"], weight: ["400"] });
const abel = Abel({ subsets: ["latin"], weight: ["400"] });

const reasons = [
  {
    icon: Fingerprint,
    title: "Instant Identity",
    description:
      "Your vehicle's history and compliance status are tied to a single secure digital fingerprint.",
    tag: "Biometric Integration",
  },
  {
    icon: ShieldAlert,
    title: "Agency Harmony",
    description:
      "A unified portal for FRSC, VIO, and Police verification in one single scan.",
    tag: "Unified Protocol",
  },
  {
    icon: Clock,
    title: "Zero Wait-Time",
    description:
      "Verify documents in under 3 seconds. Designed for the speed of modern Nigerian highways.",
    tag: "Real-time Audit",
  },
  {
    icon: FileCheck,
    title: "Auto-Compliance",
    description:
      "The system monitors expiration dates and insurance, sending alerts before you hit a checkpoint.",
    tag: "Smart Notifications",
  },
];

export default function TicketRReasons({
  onOpenModal,
}: {
  onOpenModal: () => void;
}) {
  return (
    <section
      className={`py-24 bg-white border-y border-[#1A1A1A]/5 ${abel.className}`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-[1px] bg-[#008000]" />
            <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-[#008000]">
              The Core Mandate
            </span>
          </motion.div>
          <h2
            className={`${michroma.className} text-3xl md:text-5xl text-[#1A1A1A] mb-8`}
          >
            WHY THE NIGERIAN ROAD NEEDS{" "}
            <span className="text-[#008000]">TICKET R.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1A1A1A]/5 border border-[#1A1A1A]/5">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-10 hover:bg-[#008000] transition-all duration-500 group cursor-default"
            >
              {/* FIXED ICON BOX: Icon turns white on group-hover */}
              <div className="mb-8 p-4 bg-[#008000]/5 w-fit rounded-xl group-hover:bg-white/20 transition-colors">
                <item.icon
                  className="text-[#008000] group-hover:text-white transition-colors"
                  size={24}
                />
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-[#008000] group-hover:text-white/70 mb-2">
                {item.tag}
              </p>
              <h3
                className={`${michroma.className} text-lg text-[#1A1A1A] group-hover:text-white mb-4`}
              >
                {item.title}
              </h3>
              <p className="text-[#1A1A1A]/60 group-hover:text-white/80 leading-relaxed text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-8 bg-[#1A1A1A] rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-[#008000]">
              <FileCheck size={32} />
            </div>
            <h4 className={`${michroma.className} text-white text-lg`}>
              Ready for the Protocol?
            </h4>
          </div>
          <button
            onClick={onOpenModal}
            className="bg-[#008000] text-white px-8 py-4 rounded-xl text-[12px] font-bold uppercase tracking-widest hover:bg-white hover:text-[#1A1A1A] transition-all"
          >
            Secure My Vehicle
          </button>
        </div>
      </div>
    </section>
  );
}
