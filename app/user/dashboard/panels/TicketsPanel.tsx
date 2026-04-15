"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { Michroma, Abel } from "next/font/google";
import {
  MapPin,
  Clock,
  ShieldAlert,
  CreditCard,
  ChevronRight,
  X,
  Navigation,
  Info,
  CheckCircle2,
  RotateCcw,
  Gavel,
} from "lucide-react";

const michroma = Michroma({ subsets: ["latin"], weight: ["400"] });
const abel = Abel({ subsets: ["latin"], weight: ["400"] });

const INITIAL_TICKETS = Array.from({ length: 10 }).map((_, i) => ({
  id: `VIO-${88291 + i}-NG`,
  status: i === 0 ? "active" : "paid",
  amount: i === 0 ? "₦25,500" : "₦5,000",
  infraction: i % 2 === 0 ? "Excessive Speed" : "Reckless Driving",
  location: i % 2 === 0 ? "Lekki Phase 1" : "Maitama District",
  time: "14:20",
  officer: "Sgt. Abraham",
  badge: "VIO-9921",
  lat: 6.4589 + i * 0.01,
  long: 3.6015 + i * 0.01,
}));

export default function TicketsPanel() {
  const [tickets, setTickets] = useState(INITIAL_TICKETS);
  const [activeTicket, setActiveTicket] = useState<any>(null);
  const [sheetState, setSheetState] = useState<"mid" | "full">("mid");

  const swipeLeft = () => setTickets((prev) => prev.slice(1));
  const currentCount = INITIAL_TICKETS.length - tickets.length + 1;

  return (
    <div
      className={`w-full max-w-5xl mx-auto p-2 md:p-4 pt-4 md:pt-8 pb-20 ${abel.className}`}
    >
      {/* Header - Tightened Padding */}
      <div className="flex justify-between items-end mb-6 px-2">
        <div>
          <h2
            className={`${michroma.className} text-[9px] tracking-[0.4em] text-black/20 uppercase`}
          >
            Infraction Registry
          </h2>
          <p
            className={`${michroma.className} text-2xl font-black text-black leading-tight`}
          >
            Violation Stack
          </p>
        </div>
        <div className="bg-black/5 px-4 py-2 rounded-2xl text-right">
          <p className="text-[8px] font-black text-black/20 uppercase tracking-widest">
            Unit Index
          </p>
          <p className="text-sm font-bold font-mono text-black">
            {tickets.length > 0
              ? `${currentCount}/${INITIAL_TICKETS.length}`
              : "0/0"}
          </p>
        </div>
      </div>

      {/* TINDER STACK - Optimized sizing */}
      <div className="relative w-full h-[480px] md:h-[550px] flex items-center justify-center">
        <AnimatePresence>
          {tickets.length > 0 ? (
            tickets
              .slice(0, 3)
              .reverse()
              .map((ticket, index, arr) => (
                <TinderTicket
                  key={ticket.id}
                  ticket={ticket}
                  isFront={index === arr.length - 1}
                  onSwipe={swipeLeft}
                  onTap={() => setActiveTicket(ticket)}
                />
              ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#00AA00]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={32} className="text-[#00AA00]" />
              </div>
              <p
                className={`${michroma.className} text-black text-xs tracking-widest uppercase`}
              >
                Registry Clear
              </p>
              <button
                onClick={() => setTickets(INITIAL_TICKETS)}
                className="mt-4 flex items-center gap-2 mx-auto text-black/40 font-black text-[9px] tracking-widest"
              >
                <RotateCcw size={12} /> RE-SYNC DATA
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* FULL SCREEN DRAG PANEL */}
      <AnimatePresence>
        {activeTicket && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-white flex flex-col"
          >
            <div className="h-[45%] w-full relative">
              <div className="absolute inset-0 bg-[#f3f4f6] bg-[url('https://api.maptiler.com/maps/streets-v2/static/3.6015,6.4589,14/1000x1000.png?key=YOUR_KEY')] bg-cover bg-center" />
              <div className="absolute inset-0 bg-black/10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-10 h-10 bg-red-600/20 rounded-full animate-ping absolute -inset-0" />
                <div className="w-4 h-4 bg-red-600 rounded-full border-2 border-white shadow-2xl" />
              </div>

              <div className="absolute top-6 inset-x-4 flex justify-between">
                <button
                  onClick={() => setActiveTicket(null)}
                  className="w-11 h-11 bg-white rounded-xl shadow-xl flex items-center justify-center border border-black/5"
                >
                  <X size={20} />
                </button>
                <button className="w-11 h-11 bg-black text-white rounded-xl shadow-xl flex items-center justify-center">
                  <Navigation size={18} />
                </button>
              </div>
            </div>

            <motion.div
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              onDragEnd={(_, info) => {
                if (info.offset.y > 80) setSheetState("mid");
                if (info.offset.y < -80) setSheetState("full");
                if (info.offset.y > 250) setActiveTicket(null);
              }}
              animate={{ height: sheetState === "full" ? "90vh" : "58vh" }}
              className="absolute bottom-0 inset-x-0 bg-[#FBF9F6] rounded-t-[3rem] shadow-2xl border-t border-white overflow-hidden flex flex-col"
            >
              <div
                className="w-full flex flex-col items-center py-3 cursor-pointer"
                onClick={() =>
                  setSheetState(sheetState === "full" ? "mid" : "full")
                }
              >
                <div className="w-10 h-1 bg-black/10 rounded-full mb-1" />
                <p className="text-[7px] font-black opacity-20 uppercase tracking-[0.4em]">
                  Expand Report
                </p>
              </div>

              <div className="p-6 h-full overflow-y-auto pb-28">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3
                      className={`${michroma.className} text-xl font-black uppercase leading-tight`}
                    >
                      {activeTicket.infraction}
                    </h3>
                    <p className="text-black/40 font-bold flex items-center gap-1.5 text-xs mt-1">
                      <MapPin size={12} /> {activeTicket.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] font-black text-black/20 uppercase mb-0.5">
                      Penal Fine
                    </p>
                    <p className="text-2xl font-black text-red-600">
                      {activeTicket.amount}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  <StatBox
                    label="Enforcer"
                    value={activeTicket.officer}
                    icon={<Gavel size={12} />}
                  />
                  <StatBox
                    label="Time Log"
                    value={activeTicket.time}
                    icon={<Clock size={12} />}
                  />
                  <StatBox
                    label="Credential"
                    value={activeTicket.badge}
                    icon={<ShieldAlert size={12} />}
                  />
                  <StatBox
                    label="Station"
                    value="ZONE-4"
                    icon={<Info size={12} />}
                  />
                </div>

                <div className="bg-white p-5 rounded-[2rem] border border-black/5 mb-6">
                  <p className="text-[9px] font-black text-black/20 uppercase tracking-widest mb-1.5">
                    Official Narrative
                  </p>
                  <p className="text-[13px] text-black/60 italic leading-relaxed">
                    Infraction identified via mobile radar. The subject vehicle
                    was apprehended within the 2km corridor. This digital ticket
                    serves as primary evidence for the {activeTicket.infraction}
                    .
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <button className="w-full py-5 bg-black text-white rounded-[1.5rem] font-black uppercase text-[10px] tracking-[0.4em] flex items-center justify-center gap-3 shadow-xl active:scale-95 transition-all">
                    <CreditCard size={16} /> Process Settlement
                  </button>
                  <button className="w-full py-5 bg-white border border-black/10 text-black/30 rounded-[1.5rem] font-black uppercase text-[10px] tracking-[0.4em]">
                    Appeal Violation
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function TinderTicket({ ticket, isFront, onSwipe, onTap }: any) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-15, 15]);
  const opacity = useTransform(x, [-200, -150, 0, 150, 200], [0, 1, 1, 1, 0]);

  return (
    <motion.div
      style={{ x, rotate, opacity, position: "absolute" }}
      drag={isFront ? "x" : false}
      onDragEnd={(_, info) => {
        if (Math.abs(info.offset.x) > 100) onSwipe();
      }}
      initial={{ scale: 0.95, y: 15, opacity: 0 }}
      animate={{ scale: 1, y: 0, opacity: 1 }}
      exit={{
        x: x.get() < 0 ? -400 : 400,
        opacity: 0,
        transition: { duration: 0.3 },
      }}
      onClick={() => isFront && onTap()}
      className={`w-full max-w-[340px] md:max-w-[380px] aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-[4px] border-white relative
        ${!isFront ? "pointer-events-none blur-[0.5px] brightness-95 opacity-40" : "cursor-pointer"}
      `}
    >
      <div className="absolute inset-0 bg-slate-100 bg-[url('https://api.maptiler.com/maps/streets-v2/static/3.6015,6.4589,14/600x800.png?key=GET_KEY')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

      <div className="absolute top-5 left-5 right-5 flex justify-between items-start">
        <div className="bg-black/80 backdrop-blur-md px-3 py-1 rounded-lg border border-white/20">
          <p className="text-[8px] font-black text-white uppercase tracking-widest">
            {ticket.id}
          </p>
        </div>
        <div className="w-9 h-9 bg-red-600 rounded-xl flex items-center justify-center text-white shadow-lg">
          <ShieldAlert size={18} />
        </div>
      </div>

      <div className="absolute bottom-5 inset-x-5">
        <div className="bg-white/95 backdrop-blur-md rounded-[2rem] p-4 shadow-xl border border-white/50">
          <div className="flex justify-between items-end">
            <div>
              <h3
                className={`${michroma.className} text-base font-black text-black leading-none`}
              >
                {ticket.infraction}
              </h3>
              <p className="text-[10px] font-bold text-black/40 mt-1 flex items-center gap-1">
                <MapPin size={10} /> {ticket.location}
              </p>
            </div>
            <p className="text-lg font-black text-red-600 tracking-tighter">
              {ticket.amount}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function StatBox({ label, value, icon }: any) {
  return (
    <div className="bg-white p-3.5 rounded-2xl border border-black/[0.03] flex items-center gap-2.5">
      <div className="text-black/10">{icon}</div>
      <div>
        <p className="text-[7px] font-black uppercase text-black/20 tracking-widest leading-none mb-0.5">
          {label}
        </p>
        <p className="text-[11px] font-bold text-black leading-none">{value}</p>
      </div>
    </div>
  );
}
