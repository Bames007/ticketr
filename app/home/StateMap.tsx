"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Radio, Globe } from "lucide-react";
import { Michroma, Abel } from "next/font/google";

const michroma = Michroma({ subsets: ["latin"], weight: ["400"] });
const abel = Abel({ subsets: ["latin"], weight: ["400"] });

export default function StateMap() {
  return (
    <section
      className={`py-24 bg-[#FBF9F6] border-y border-black/5 ${abel.className}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Radio className="text-[#008000] animate-pulse" size={20} />
              <span className="text-black font-black uppercase tracking-[0.3em] text-xs">
                Live Network Status
              </span>
            </div>
            <h2
              className={`${michroma.className} text-4xl text-black uppercase mb-6 leading-tight`}
            >
              Regional <span className="text-[#008000]">Protocols</span>
            </h2>
            <p className="text-black/70 text-lg mb-10 max-w-md leading-relaxed">
              Ticket R is currently active across primary transport hubs. Select
              a jurisdiction to view local registry compliance and node
              strength.
            </p>

            <div className="space-y-4">
              {[
                "Lagos Node - 01",
                "Abuja FCT Node - 02",
                "Rivers Node - 03",
              ].map((node, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-5 bg-white border border-black/5 rounded-xl shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <MapPin size={18} className="text-[#008000]" />
                    <span className="font-bold text-black uppercase tracking-widest text-sm">
                      {node}
                    </span>
                  </div>
                  <span className="text-[10px] bg-[#008000]/10 text-[#008000] px-3 py-1 rounded-full font-black">
                    ACTIVE
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: The "Map" Visualization */}
          <div className="relative aspect-square bg-white border-2 border-black rounded-3xl p-8 shadow-2xl overflow-hidden group">
            {/* Decorative Grid Background */}
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
                // size: "20px 20px",
                backgroundSize: "30px 30px",
              }}
            />

            <div className="relative h-full w-full flex items-center justify-center">
              {/* This is where your SVG Map of Nigeria goes */}
              <Globe
                size={300}
                strokeWidth={0.5}
                className="text-black/5 group-hover:text-[#008000]/10 transition-colors duration-700"
              />

              {/* Floating Pulse Points */}
              <div className="absolute top-1/2 left-1/3">
                <div className="w-4 h-4 bg-[#008000] rounded-full animate-ping absolute" />
                <div className="w-4 h-4 bg-[#008000] rounded-full relative" />
              </div>
              <div className="absolute top-1/3 right-1/2">
                <div className="w-3 h-3 bg-[#008000] rounded-full animate-ping absolute" />
                <div className="w-3 h-3 bg-[#008000] rounded-full relative" />
              </div>

              <div className="absolute bottom-10 left-10 right-10 bg-black p-4 rounded-xl flex justify-between items-center">
                <span className="text-white text-[10px] font-bold uppercase tracking-widest">
                  Global Encryption Level
                </span>
                <span
                  className={`${michroma.className} text-[#008000] text-sm`}
                >
                  99.9%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
