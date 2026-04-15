"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Michroma, Abel } from "next/font/google";
import {
  AlertTriangle,
  Car,
  Ambulance,
  ShieldAlert,
  PhoneCall,
  MapPin,
  ChevronRight,
  Loader2,
  CheckCircle,
  X,
} from "lucide-react";

const michroma = Michroma({ subsets: ["latin"], weight: ["400"] });
const abel = Abel({ subsets: ["latin"], weight: ["400"] });

const SOS_TYPES = [
  {
    id: "accident",
    label: "Major Accident",
    icon: <AlertTriangle size={28} />,
    color: "#ef4444",
    desc: "Collision with injuries",
  },
  {
    id: "medical",
    label: "Medical Emergency",
    icon: <Ambulance size={28} />,
    color: "#f97316",
    desc: "First aid required",
  },
  {
    id: "breakdown",
    label: "Vehicle Fault",
    icon: <Car size={28} />,
    color: "#3b82f6",
    desc: "Engine failure / Flat tire",
  },
  {
    id: "security",
    label: "Security Threat",
    icon: <ShieldAlert size={28} />,
    color: "#000000",
    desc: "Harassment / Robbery",
  },
];

export default function SOSPanel() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [isDeploying, setIsDeploying] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [location, setLocation] = useState("Detecting GPS...");

  useEffect(() => {
    const timer = setTimeout(
      () => setLocation("Lekki-Epe Exp, Near Tollgate 2"),
      2000,
    );
    return () => clearTimeout(timer);
  }, []);

  const handleSOS = () => {
    setIsDeploying(true);
    setTimeout(() => {
      setIsDeploying(false);
      setIsSent(true);
    }, 3000);
  };

  if (isSent)
    return (
      <SuccessState
        onReset={() => {
          setIsSent(false);
          setSelectedType(null);
        }}
      />
    );

  return (
    // Added pb-48 to ensure content clears the bottom nav and the fixed SOS drawer
    <div
      className={`w-full max-w-2xl mx-auto p-4 pt-8 pb-48 ${abel.className}`}
    >
      {/* Critical Header */}
      <header className="mb-8 px-2">
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex items-center gap-2 mb-2"
        >
          <div className="w-2 h-2 rounded-full bg-red-600" />
          <span
            className={`${michroma.className} text-[9px] tracking-[0.4em] text-red-600 font-black uppercase`}
          >
            Live Response Active
          </span>
        </motion.div>
        <h1
          className={`${michroma.className} text-3xl font-black text-black leading-tight uppercase`}
        >
          Emergency <br />
          Assistance
        </h1>
      </header>

      {/* GPS Location Card */}
      <div className="bg-black text-white p-5 rounded-[2.5rem] mb-8 flex items-center justify-between shadow-2xl shadow-black/20 border border-white/10">
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center">
            <MapPin size={18} className="text-red-500" />
          </div>
          <div>
            <p className="text-[9px] font-black opacity-40 uppercase tracking-widest">
              Live Coordinates
            </p>
            <p className="text-sm font-bold truncate max-w-[160px] md:max-w-xs">
              {location}
            </p>
          </div>
        </div>
        <div className="text-[9px] font-mono text-white/30 text-right leading-tight">
          6.4589° N <br /> 3.6015° E
        </div>
      </div>

      <p className="text-[10px] font-black uppercase tracking-widest text-black/30 mb-4 px-2">
        Incident Category
      </p>

      {/* SOS Type Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
        {SOS_TYPES.map((type) => (
          <motion.button
            key={type.id}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedType(type.id)}
            className={`p-5 rounded-[2.2rem] border-2 transition-all flex items-center gap-5 text-left
              ${
                selectedType === type.id
                  ? "border-black bg-black text-white shadow-xl"
                  : "border-black/5 bg-white text-black hover:border-black/20"
              }`}
          >
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center
              ${selectedType === type.id ? "bg-white/20" : "bg-black/5"}`}
              style={{ color: selectedType === type.id ? "#fff" : type.color }}
            >
              {type.icon}
            </div>
            <div>
              <p className="font-black text-base leading-none">{type.label}</p>
              <p className={`text-[10px] font-bold mt-1 opacity-50`}>
                {type.desc}
              </p>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Floating Action Drawer - Elevated to sit above Bottom Nav */}
      <AnimatePresence>
        {selectedType && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            // bottom-24 or bottom-28 depending on your nav height
            className="fixed bottom-24 inset-x-4 max-w-md mx-auto z-[100]"
          >
            <div className="bg-white/90 backdrop-blur-3xl p-3 rounded-[2.5rem] border border-white shadow-[0_25px_60px_rgba(0,0,0,0.2)]">
              <button
                disabled={isDeploying}
                onClick={handleSOS}
                className="relative w-full h-16 bg-red-600 rounded-[1.8rem] overflow-hidden flex items-center justify-center group active:scale-95 transition-all"
              >
                {isDeploying ? (
                  <Loader2 className="animate-spin text-white" size={24} />
                ) : (
                  <div className="flex items-center gap-3">
                    <span
                      className={`${michroma.className} text-white text-[11px] font-black tracking-[0.3em] uppercase`}
                    >
                      Dispatch SOS
                    </span>
                    <ChevronRight
                      className="text-white/50 group-hover:translate-x-1 transition-transform"
                      size={16}
                    />
                  </div>
                )}

                <motion.div
                  initial={{ x: "-100%" }}
                  animate={isDeploying ? { x: "0%" } : { x: "-100%" }}
                  transition={{ duration: 3, ease: "linear" }}
                  className="absolute inset-0 bg-black/20"
                />
              </button>

              <button
                onClick={() => setSelectedType(null)}
                className="w-full py-3 text-black/30 font-black text-[8px] tracking-[0.4em] uppercase"
              >
                Dismiss
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black z-[2000] flex flex-col items-center justify-center p-8 text-white text-center"
    >
      <div className="w-20 h-20 bg-[#00AA00] rounded-full flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(0,170,0,0.5)]">
        <CheckCircle size={40} />
      </div>
      <h2
        className={`${michroma.className} text-2xl font-black uppercase mb-4`}
      >
        Help Dispatched
      </h2>
      <p className="text-white/40 text-sm font-bold mb-12 max-w-xs leading-relaxed">
        Registry confirmed. A tactical response unit has been signaled to your
        current coordinates.
      </p>

      <div className="flex flex-col gap-3 w-full max-w-xs">
        <button className="w-full py-5 bg-white text-black rounded-2xl font-black uppercase text-[10px] tracking-widest flex items-center justify-center gap-3 active:scale-95 transition-all">
          <PhoneCall size={16} /> Contact Unit
        </button>
        <button
          onClick={onReset}
          className="w-full py-5 bg-white/5 text-white/30 rounded-2xl font-black uppercase text-[10px] tracking-widest active:scale-95 transition-all"
        >
          Cancel Report
        </button>
      </div>
    </motion.div>
  );
}
