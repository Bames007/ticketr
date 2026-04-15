"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Michroma, Abel } from "next/font/google";
import {
  QrCode,
  ShieldCheck,
  Zap,
  ChevronDown,
  User,
  Gauge,
  BatteryCharging,
  Wind,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Shield,
  X,
} from "lucide-react";

const michroma = Michroma({ subsets: ["latin"], weight: ["400"] });
const abel = Abel({ subsets: ["latin"], weight: ["400"] });

// Nigerian Document Status Data
const NIGERIA_PAPERS = [
  {
    name: "Vehicle License",
    status: "valid",
    expiry: "20.01.2027",
    color: "text-green-500",
  },
  {
    name: "Road Worthiness",
    status: "expiring",
    expiry: "12.05.2026",
    color: "text-yellow-500",
  },
  {
    name: "Insurance",
    status: "expired",
    expiry: "10.02.2026",
    color: "text-red-500",
  },
];

const AVATARS = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
];

export default function HomePanel() {
  const [showCarDetails, setShowCarDetails] = useState(false);
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);

  return (
    <div
      className={`max-w-7xl mx-auto p-4 pt-16 md:pt-24 space-y-8 pb-40 ${abel.className}`}
    >
      {/* --- QR MODAL OVERLAY --- */}
      <AnimatePresence>
        {isQrModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-white/80 backdrop-blur-xl"
            onClick={() => setIsQrModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white p-8 rounded-[3rem] shadow-[0_30px_100px_rgba(0,0,0,0.1)] border border-black/5 flex flex-col items-center relative max-w-sm w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsQrModalOpen(false)}
                className="absolute top-6 right-6 p-2 bg-black/5 rounded-full hover:bg-black/10 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="mb-8 text-center">
                <h3
                  className={`${michroma.className} text-[10px] tracking-[0.4em] uppercase text-black/20 mb-2`}
                >
                  Identification Verification
                </h3>
                <p className="text-xl font-bold">Secure Access QR</p>
              </div>

              <div className="p-6 bg-[#FBF9F6] rounded-[2rem] border border-black/5 shadow-inner">
                <QrCode size={200} strokeWidth={1} className="text-black" />
              </div>

              <div className="mt-8 flex items-center gap-3 px-4 py-2 bg-[#00AA00]/10 rounded-full">
                <div className="w-2 h-2 bg-[#00AA00] rounded-full animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-[#00AA00]">
                  Encrypted & Secure
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* --- USER CARD --- */}
        <motion.div className="lg:col-span-4 bg-white rounded-[2.5rem] p-6 md:p-8 shadow-sm border border-black/[0.03] flex flex-col justify-between min-h-[400px]">
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <p className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.3em] text-[#00AA00]">
                Permit Holder
              </p>
              <h2
                className={`${michroma.className} text-xl md:text-3xl text-black leading-tight uppercase`}
              >
                Eddy <br /> <span className="opacity-20 font-light">Bames</span>
              </h2>
            </div>
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-[#00AA00] flex items-center justify-center text-white shadow-lg shadow-[#00AA00]/20">
              <CheckCircle2 size={32} />
            </div>
          </div>

          <div className="mt-8 space-y-6">
            <DetailItem
              label="Drivers Licence No."
              value="EKY-002-93902-TR"
              large
            />
            <DetailItem label="Class Type" value="B (Standard Private)" large />

            <div className="pt-6 border-t border-black/[0.05] flex justify-between items-center">
              <div className="flex -space-x-3">
                {AVATARS.map((url, i) => (
                  <img
                    key={i}
                    src={url}
                    className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-md"
                    alt="SOS"
                  />
                ))}
              </div>
              {/* MODAL TRIGGER */}
              <motion.div
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsQrModalOpen(true)}
                className="p-3 bg-[#FBF9F6] rounded-2xl border border-black/5 cursor-pointer hover:bg-black/5 transition-colors"
              >
                <QrCode size={24} className="text-black/80" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* --- TESLA CARD --- */}
        <div className="lg:col-span-8 relative">
          <motion.div
            onClick={() => setShowCarDetails(!showCarDetails)}
            className="relative bg-white rounded-[3rem] p-6 md:p-10 border border-black/[0.04] shadow-2xl overflow-hidden cursor-pointer"
          >
            <div className="flex justify-between items-start z-10 relative">
              <div className="space-y-2">
                <h4
                  className={`${michroma.className} text-[10px] md:text-[12px] tracking-[0.4em] text-black/20 uppercase`}
                >
                  Vehicle Fleet
                </h4>
                <p
                  className={`${michroma.className} text-2xl md:text-4xl uppercase font-bold text-black`}
                >
                  Tesla Model 3
                </p>
                <div className="flex gap-4">
                  <p className="text-[12px] md:text-[14px] font-bold text-black/40 uppercase">
                    Plate: <span className="text-black">LAG-442-XY</span>
                  </p>
                  <p className="text-[12px] md:text-[14px] font-bold text-black/40 uppercase">
                    Est: <span className="text-[#00AA00]">₦45.2M</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#00AA00]/10 rounded-full">
                <Shield size={14} className="text-[#00AA00]" />
                <span className="text-[10px] font-black text-[#00AA00] uppercase tracking-tighter">
                  Verified Unit
                </span>
              </div>
            </div>

            <motion.div
              initial={{ x: 1000, y: 50, rotate: 10, opacity: 0 }}
              animate={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 30,
                damping: 15,
                mass: 1.5,
                delay: 0.4,
              }}
              className="py-6 md:py-10 flex justify-center relative z-10"
            >
              <img
                src="https://pngimg.com/d/tesla_car_PNG21.png"
                alt="Tesla"
                className="w-full max-w-[500px] object-contain drop-shadow-[0_50px_60px_rgba(0,0,0,0.18)]"
              />
            </motion.div>

            <AnimatePresence>
              {showCarDetails && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  className="pt-10 border-t border-black/[0.05] grid grid-cols-1 md:grid-cols-2 gap-10"
                >
                  <div className="space-y-4">
                    <p
                      className={`${michroma.className} text-[10px] md:text-[12px] text-black/20 tracking-widest uppercase`}
                    >
                      Car Particulars (NG)
                    </p>
                    <div className="space-y-3">
                      {NIGERIA_PAPERS.map((paper, idx) => (
                        <div
                          key={idx}
                          className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl border border-black/[0.02]"
                        >
                          <div className="flex items-center gap-3">
                            {paper.status === "valid" && (
                              <CheckCircle2
                                size={18}
                                className="text-green-500"
                              />
                            )}
                            {paper.status === "expiring" && (
                              <AlertTriangle
                                size={18}
                                className="text-yellow-500"
                              />
                            )}
                            {paper.status === "expired" && (
                              <XCircle size={18} className="text-red-500" />
                            )}
                            <span className="text-[13px] md:text-[15px] font-bold text-black/80">
                              {paper.name}
                            </span>
                          </div>
                          <span
                            className={`text-[10px] md:text-[12px] font-black uppercase ${paper.color}`}
                          >
                            {paper.expiry}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p
                      className={`${michroma.className} text-[10px] md:text-[12px] text-black/20 tracking-widest uppercase`}
                    >
                      Diagnostics
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <VehicleStat
                        icon={<BatteryCharging size={16} />}
                        label="Charge"
                        value="94%"
                        color="#00AA00"
                      />
                      <VehicleStat
                        icon={<Gauge size={16} />}
                        label="Odometer"
                        value="12,402km"
                      />
                      <div className="col-span-2 p-4 bg-black text-white rounded-2xl flex justify-between items-center">
                        <div>
                          <p className="text-[8px] uppercase tracking-widest opacity-40 mb-1">
                            Vehicle VIN
                          </p>
                          <p className="text-[12px] font-mono font-bold tracking-wider uppercase">
                            5YJ3E7EA8JFXXXXXX
                          </p>
                        </div>
                        {/* VIN QR Trigger */}
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsQrModalOpen(true);
                          }}
                          className="p-2 bg-white/10 rounded-lg cursor-pointer hover:bg-white/20 transition-all"
                        >
                          <QrCode size={16} className="text-white/50" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex justify-center mt-6">
              <ChevronDown
                size={24}
                className={`text-black/10 transition-transform duration-500 ${showCarDetails ? "rotate-180" : ""}`}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <QuickAction icon={<ShieldCheck />} label="Renew Papers" />
        <QuickAction icon={<Zap />} label="Service Check" />
        <QuickAction icon={<User />} label="Profile Panel" />
        <QuickAction icon={<QrCode />} label="Scan QR Code" />
      </div>
    </div>
  );
}

// Sub-components stay the same...
function DetailItem({
  label,
  value,
  align = "left",
  highlight = false,
  large = false,
}: any) {
  return (
    <div className={align === "right" ? "text-right" : "text-left"}>
      <p
        className={`font-black uppercase tracking-[0.2em] text-black/20 mb-1.5 ${large ? "text-[11px] md:text-[13px]" : "text-[9px] md:text-[11px]"}`}
      >
        {label}
      </p>
      <p
        className={`font-bold tracking-tight ${highlight ? "text-[#00AA00]" : "text-black"} ${large ? "text-[15px] md:text-[20px]" : "text-[13px] md:text-[15px]"}`}
      >
        {value}
      </p>
    </div>
  );
}

function VehicleStat({ label, value, icon, color = "black" }: any) {
  return (
    <div className="bg-[#FBF9F6] p-4 rounded-2xl border border-black/[0.02] flex items-center gap-4">
      <div className="text-black/20">{icon}</div>
      <div>
        <p className="text-[9px] uppercase font-black text-black/30 tracking-widest mb-1">
          {label}
        </p>
        <p className="text-[14px] font-bold tracking-tight" style={{ color }}>
          {value}
        </p>
      </div>
    </div>
  );
}

function QuickAction({ icon, label }: any) {
  return (
    <button className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 p-5 md:p-8 rounded-[2.5rem] bg-white border border-black/[0.04] shadow-sm hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all group">
      <div className="w-12 h-12 rounded-2xl bg-[#FBF9F6] flex items-center justify-center text-black/30 group-hover:bg-[#00AA00] group-hover:text-white transition-all duration-500">
        {React.cloneElement(icon, { size: 24, strokeWidth: 1.5 })}
      </div>
      <span className="text-[10px] md:text-[12px] font-black uppercase tracking-widest text-black/40 group-hover:text-black transition-colors">
        {label}
      </span>
    </button>
  );
}
