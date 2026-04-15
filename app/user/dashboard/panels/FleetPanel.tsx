"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Michroma, Abel } from "next/font/google";
import {
  ShieldCheck,
  AlertCircle,
  Gauge,
  Fuel,
  Settings,
  Calendar,
  CheckCircle2,
  Search,
  HardDrive,
  ClipboardCheck,
  Info,
  BadgeCheck,
  Zap,
} from "lucide-react";

const michroma = Michroma({ subsets: ["latin"], weight: ["400"] });
const abel = Abel({ subsets: ["latin"], weight: ["400"] });

const FLEET = [
  {
    id: "001",
    name: "Range Rover Sport",
    plate: "LAG-882-QX",
    image:
      "https://images.unsplash.com/photo-1590362891175-9c7165510763?auto=format&fit=crop&q=80&w=800",
    value: "₦85.5M",
    status: "Verified",
    vin: "SALWA2VF6KA12****",
    engine: "V8-SUPER-9921",
    stats: { fuel: "82%", mileage: "12.4k km", health: "94%" },
    docs: {
      customs: "Cleared",
      insurance: "Valid",
      road_worthy: "Expired",
      tint_permit: "Lifetime",
      license: "Valid",
    },
  },
  {
    id: "004",
    name: "Tesla Model S",
    plate: "EKY-119-TS",
    image:
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=800",
    value: "₦75.2M",
    status: "Audit",
    vin: "5YJSA1E21LF41****",
    engine: "DUAL-MOTOR-EL",
    stats: { fuel: "45%", mileage: "2.1k km", health: "100%" },
    docs: {
      customs: "Flagged",
      insurance: "Valid",
      road_worthy: "Valid",
      tint_permit: "Lifetime",
      license: "Expired",
    },
  },
  {
    id: "002",
    name: "Mercedes G63 AMG",
    plate: "ABJ-001-GP",
    image:
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&q=80&w=800",
    value: "₦160.0M",
    status: "Pending",
    vin: "WDCYC7FH0LX01****",
    engine: "M278-BITURBO",
    stats: { fuel: "12%", mileage: "8.2k km", health: "88%" },
    docs: {
      customs: "In Progress",
      insurance: "Soon",
      road_worthy: "Valid",
      tint_permit: "None",
      license: "Valid",
    },
  },
  {
    id: "003",
    name: "Toyota Hilux",
    plate: "KND-442-BA",
    image:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800",
    value: "₦45.0M",
    status: "Verified",
    vin: "TNK441X0092****",
    engine: "2GD-FTV-881",
    stats: { fuel: "95%", mileage: "45.0k km", health: "91%" },
    docs: {
      customs: "Cleared",
      insurance: "Valid",
      road_worthy: "Valid",
      tint_permit: "N/A",
      license: "Valid",
    },
  },
];

export default function FleetPanel() {
  const [activeCar, setActiveCar] = useState(FLEET[0]);

  return (
    <div
      className={`w-full max-w-6xl mx-auto p-5 pt-6 pb-44 ${abel.className}`}
    >
      {/* Header */}
      <header className="mb-8 flex justify-between items-center px-1">
        <div>
          <h2
            className={`${michroma.className} text-[11px] tracking-[0.5em] text-black/30 uppercase mb-1`}
          >
            Asset Portfolio
          </h2>
          <p
            className={`${michroma.className} text-3xl font-black text-black leading-none`}
          >
            GARAGE
          </p>
        </div>
        <div className="flex gap-2">
          <div className="w-12 h-12 bg-black/5 rounded-2xl flex items-center justify-center">
            <Search size={22} />
          </div>
          <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center text-white">
            <Settings size={22} />
          </div>
        </div>
      </header>

      {/* CAR SELECTION SCROLL - Now with all 4 cars */}
      <div className="flex gap-4 overflow-x-auto pb-8 no-scrollbar snap-x px-1">
        {FLEET.map((car) => (
          <motion.div
            key={car.id}
            onClick={() => setActiveCar(car)}
            whileTap={{ scale: 0.95 }}
            className={`flex-shrink-0 w-64 h-40 rounded-[2.5rem] overflow-hidden relative cursor-pointer snap-center border-[3.5px] transition-all
              ${activeCar.id === car.id ? "border-black shadow-2xl" : "border-transparent opacity-40 grayscale"}`}
          >
            <img
              src={car.image}
              alt={car.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-6 flex items-center gap-2">
              <div className="bg-white/20 backdrop-blur-md px-2 py-1 rounded-lg border border-white/20">
                <p className="text-[9px] font-black text-white uppercase tracking-widest">
                  {car.plate}
                </p>
              </div>
              {car.id === "004" && (
                <Zap size={14} className="text-yellow-400 fill-yellow-400" />
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* ACTIVE CAR DETAIL GRID */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCar.id}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {/* Main Info Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Identity Card */}
            <div className="bg-white rounded-[3rem] p-8 border border-black/5 shadow-sm">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3
                    className={`${michroma.className} text-2xl font-black text-black leading-tight`}
                  >
                    {activeCar.name}
                  </h3>
                  <p className="text-[14px] font-black text-black/30 uppercase tracking-[0.2em] mt-1">
                    {activeCar.plate}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[11px] font-black text-black/20 uppercase tracking-widest">
                    Market Value
                  </p>
                  <p
                    className={`${michroma.className} text-xl font-black text-black tracking-tighter`}
                  >
                    {activeCar.value}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3">
                <div className="p-6 bg-slate-50 rounded-[2rem] border border-black/[0.02]">
                  <p className="text-[11px] font-black text-black/30 uppercase tracking-widest mb-1.5 flex items-center gap-2">
                    <Info size={14} /> Chassis (VIN)
                  </p>
                  <p className="text-[15px] font-mono font-bold text-black/80 tracking-normal">
                    {activeCar.vin}
                  </p>
                </div>
                <div className="p-6 bg-slate-50 rounded-[2rem] border border-black/[0.02]">
                  <p className="text-[11px] font-black text-black/30 uppercase tracking-widest mb-1.5 flex items-center gap-2">
                    <HardDrive size={14} /> Engine ID
                  </p>
                  <p className="text-[15px] font-mono font-bold text-black/80 tracking-normal">
                    {activeCar.engine}
                  </p>
                </div>
              </div>
            </div>

            {/* Performance Stats */}
            <div className="grid grid-cols-3 gap-4">
              <StatItem
                label="Odometer"
                value={activeCar.stats.mileage}
                icon={<Gauge size={22} />}
              />
              <StatItem
                label={activeCar.id === "004" ? "Charge" : "Fuel"}
                value={activeCar.stats.fuel}
                icon={<Fuel size={22} />}
              />
              <StatItem
                label="Health"
                value={activeCar.stats.health}
                icon={<CheckCircle2 size={22} />}
              />
            </div>
          </div>

          {/* Compliance Audit Section */}
          <div className="bg-[#F9F8F6] rounded-[3rem] p-8 border border-black/5 flex flex-col shadow-inner">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <ClipboardCheck size={24} className="text-black/30" />
                <h3
                  className={`${michroma.className} text-[14px] font-black uppercase tracking-widest text-black/40`}
                >
                  Paperwork
                </h3>
              </div>
              {activeCar.status === "Verified" ? (
                <BadgeCheck size={24} className="text-emerald-500" />
              ) : (
                <AlertCircle size={24} className="text-red-500" />
              )}
            </div>

            <div className="space-y-3 mb-8">
              <PaperRow label="Customs Duty" status={activeCar.docs.customs} />
              <PaperRow
                label="Tint Permit"
                status={activeCar.docs.tint_permit}
              />
              <PaperRow
                label="Road Worthy"
                status={activeCar.docs.road_worthy}
              />
              <PaperRow label="Insurance" status={activeCar.docs.insurance} />
              <PaperRow label="License" status={activeCar.docs.license} />
            </div>

            <div className="mt-auto bg-white p-5 rounded-[2rem] flex items-center justify-between border border-black/5 shadow-sm">
              <div className="flex items-center gap-4">
                <Calendar size={20} className="text-black/20" />
                <div>
                  <p className="text-[11px] font-black text-black/20 uppercase leading-none">
                    Next Service
                  </p>
                  <p className="text-sm font-bold text-black mt-1.5">
                    12 Nov 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function StatItem({ label, value, icon }: any) {
  return (
    <div className="bg-white p-6 rounded-[2.5rem] border border-black/[0.04] flex flex-col items-center text-center shadow-sm">
      <div className="text-black/10 mb-3">{icon}</div>
      <p className="text-[11px] font-black uppercase text-black/30 tracking-widest mb-1">
        {label}
      </p>
      <p className="text-sm font-bold text-black">{value}</p>
    </div>
  );
}

function PaperRow({ label, status }: { label: string; status: string }) {
  const isBad =
    status === "Expired" || status === "Flagged" || status === "None";
  const isSoon = status === "Soon" || status === "In Progress";

  return (
    <div
      className={`flex items-center justify-between px-5 py-5 rounded-[1.8rem] border transition-all
      ${isBad ? "bg-red-50 border-red-100 shadow-[inset_0_0_10px_rgba(239,68,68,0.05)]" : isSoon ? "bg-amber-50 border-amber-100" : "bg-white border-black/[0.03]"}`}
    >
      <span className="text-[15px] font-bold text-black/80">{label}</span>
      <div className="flex items-center gap-3">
        <span
          className={`text-[11px] font-black uppercase tracking-widest ${isBad ? "text-red-600" : isSoon ? "text-amber-600" : "text-black/20"}`}
        >
          {status}
        </span>
        <div
          className={`w-2.5 h-2.5 rounded-full ${isBad ? "bg-red-500 shadow-[0_0_6px_rgba(239,68,68,0.5)]" : isSoon ? "bg-amber-500" : "bg-emerald-500"}`}
        />
      </div>
    </div>
  );
}
