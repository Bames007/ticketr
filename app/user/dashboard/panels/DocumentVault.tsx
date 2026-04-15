"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Michroma, Abel } from "next/font/google";
import {
  FileText,
  ShieldAlert,
  Eye,
  EyeOff,
  RefreshCcw,
  Download,
  UploadCloud,
  Calendar,
  CheckCircle2,
  ChevronRight,
  UserCircle,
  Info,
  X,
  ShieldCheck,
} from "lucide-react";

const michroma = Michroma({ subsets: ["latin"], weight: ["400"] });
const abel = Abel({ subsets: ["latin"], weight: ["400"] });

const INITIAL_RECORDS = [
  {
    id: "dl-1",
    category: "Personal",
    name: "Driver's License",
    expiry: "2026-04-26",
    status: "Critical",
    icon: <UserCircle />,
    owner: "Main User",
    price: 15500,
  },
  {
    id: "vl-1",
    category: "Vehicle",
    name: "Vehicle License",
    expiry: "2026-08-12",
    status: "Valid",
    icon: <FileText />,
    owner: "Range Rover",
    price: 45000,
  },
  {
    id: "rw-1",
    category: "Vehicle",
    name: "Road Worthiness",
    expiry: "2026-04-10",
    status: "Expired",
    icon: <ShieldAlert />,
    owner: "Tesla Model S",
    price: 14500,
  },
  {
    id: "in-1",
    category: "Vehicle",
    name: "3rd Party Insurance",
    expiry: "2026-05-01",
    status: "Warning",
    icon: <CheckCircle2 />,
    owner: "Mercedes G63",
    price: 15000,
  },
];

export default function AuditVault() {
  const [records] = useState(INITIAL_RECORDS);
  const [revealedId, setRevealedId] = useState<string | null>(null);
  const [selectedRecord, setSelectedRecord] = useState<any>(null);
  const [filter, setFilter] = useState("All");

  const getDaysLeft = (date: string) => {
    const diff = new Date(date).getTime() - new Date().getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  };

  return (
    <div
      className={`w-full max-w-7xl mx-auto p-4 md:p-10 pb-44 ${abel.className}`}
    >
      {/* HEADER SECTION */}
      <header className="mb-12 flex justify-between items-start">
        <div>
          <h2
            className={`${michroma.className} text-[10px] tracking-[0.5em] text-black/30 uppercase mb-2`}
          >
            Compliance Control
          </h2>
          <p
            className={`${michroma.className} text-4xl font-black text-black leading-none`}
          >
            VAULT
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-black text-white px-6 py-4 rounded-2xl flex items-center gap-3 shadow-2xl active:shadow-sm transition-all"
        >
          <UploadCloud size={20} />
          <span className="text-[11px] font-black uppercase tracking-widest hidden md:block">
            Upload Record
          </span>
        </motion.button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* SIDEBAR NAVIGATION (DESKTOP) / FILTER (MOBILE) */}
        <aside className="lg:col-span-3 space-y-6">
          <div className="bg-white/50 backdrop-blur-xl border border-black/5 rounded-[2.5rem] p-6">
            <p
              className={`${michroma.className} text-[9px] text-black/20 uppercase tracking-widest mb-6`}
            >
              Filters
            </p>
            <nav className="space-y-2">
              {["All", "Vehicle", "Personal"].map((item) => (
                <button
                  key={item}
                  onClick={() => setFilter(item)}
                  className={`w-full text-left px-5 py-4 rounded-2xl text-sm font-bold transition-all
                    ${filter === item ? "bg-black text-white shadow-xl" : "hover:bg-black/5 text-black/40"}`}
                >
                  {item} Records
                </button>
              ))}
            </nav>
          </div>

          {/* QUICK SUMMARY CARD */}
          <div className="bg-red-500 rounded-[2.5rem] p-8 text-white shadow-2xl shadow-red-200">
            <ShieldAlert size={32} className="mb-4 opacity-50" />
            <p className="text-3xl font-black mb-1">02</p>
            <p className="text-[10px] font-black uppercase tracking-widest opacity-80 leading-tight">
              Critical Expiries Detected
            </p>
          </div>
        </aside>

        {/* DOCUMENT LIST */}
        <main className="lg:col-span-9 space-y-4">
          {records
            .filter((r) => filter === "All" || r.category === filter)
            .map((doc) => {
              const daysLeft = getDaysLeft(doc.expiry);
              const isCritical = daysLeft < 15;

              return (
                <motion.div
                  key={doc.id}
                  layout
                  className="bg-white rounded-[2.5rem] p-6 border border-black/5 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group"
                >
                  {isCritical && (
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-red-500" />
                  )}

                  <div className="flex items-center gap-6 w-full">
                    <div
                      className={`w-16 h-16 rounded-[1.5rem] flex items-center justify-center text-2xl
                    ${isCritical ? "bg-red-50 text-red-500" : "bg-slate-50 text-black/40"}`}
                    >
                      {doc.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-[10px] font-black text-black/20 uppercase tracking-widest">
                          {doc.owner}
                        </p>
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${isCritical ? "bg-red-500 animate-pulse" : "bg-emerald-500"}`}
                        />
                      </div>
                      <h4 className="text-xl font-bold text-black tracking-tight">
                        {doc.name}
                      </h4>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="text-sm font-bold text-black/40 flex items-center gap-1">
                          <Calendar size={14} />{" "}
                          {new Date(doc.expiry).toLocaleDateString()}
                        </span>
                        {daysLeft < 0 ? (
                          <span className="text-[10px] font-black text-red-500 uppercase">
                            Overdue
                          </span>
                        ) : (
                          <span className="text-[10px] font-black text-black/60 uppercase">
                            {daysLeft} Days Left
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 w-full md:w-auto">
                    <button
                      onClick={() => setRevealedId(doc.id)}
                      className="flex-1 md:flex-none h-14 px-6 rounded-2xl bg-slate-50 text-black/60 font-bold text-sm hover:bg-black hover:text-white transition-all flex items-center justify-center gap-2"
                    >
                      <Eye size={18} /> View
                    </button>
                    <button
                      onClick={() => setSelectedRecord(doc)}
                      className="flex-1 md:flex-none h-14 px-6 rounded-2xl bg-black text-white font-bold text-sm shadow-lg hover:shadow-none transition-all flex items-center justify-center gap-2"
                    >
                      <RefreshCcw size={16} /> Renew
                    </button>
                  </div>
                </motion.div>
              );
            })}
        </main>
      </div>

      {/* REVEAL DOCUMENT MODAL (Fix for Desktop Extension) */}
      <AnimatePresence>
        {revealedId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white w-full max-w-4xl rounded-[3rem] overflow-hidden shadow-2xl relative"
            >
              <div className="p-8 border-b border-black/5 flex justify-between items-center bg-slate-50">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-black text-white rounded-xl">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h3 className={`${michroma.className} text-sm font-black`}>
                      Secure Document Viewer
                    </h3>
                    <p className="text-[10px] font-bold text-black/30 uppercase tracking-widest">
                      Encrypted FRSC Proxy Connect
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setRevealedId(null)}
                  className="w-12 h-12 rounded-full hover:bg-black/5 flex items-center justify-center transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-10">
                <div className="aspect-[16/10] w-full bg-slate-100 rounded-[2rem] border-2 border-dashed border-black/10 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center z-10 p-10">
                    <FileText
                      size={64}
                      className="mx-auto mb-4 text-black/10"
                    />
                    <p
                      className={`${michroma.className} text-xs font-black uppercase tracking-widest text-black/40`}
                    >
                      Document Digital Copy
                    </p>
                    <p className="text-sm font-mono mt-2 text-black/20 italic">
                      REF-ID: {revealedId.toUpperCase()}-VAULT-2026
                    </p>
                  </div>
                  {/* Visual "Security Scan" line animation */}
                  <motion.div
                    animate={{ top: ["0%", "100%", "0%"] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent z-20"
                  />
                </div>
                <div className="mt-8 flex justify-center gap-4">
                  <button className="px-8 py-4 bg-black text-white rounded-xl font-bold text-sm flex items-center gap-2 uppercase tracking-widest">
                    <Download size={18} /> Download PDF
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* RENEWAL MODAL (Bottom Sheet Style) */}
      <AnimatePresence>
        {selectedRecord && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-4"
            onClick={() => setSelectedRecord(null)}
          >
            <motion.div
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              exit={{ y: 200 }}
              className="bg-white w-full max-w-lg rounded-[3.5rem] p-10 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-12 h-1.5 bg-black/10 rounded-full mx-auto mb-8 md:hidden" />

              <div className="text-center mb-10">
                <div className="w-20 h-20 bg-slate-50 rounded-[2rem] flex items-center justify-center mx-auto mb-4 text-black/20">
                  <RefreshCcw size={32} />
                </div>
                <h3 className={`${michroma.className} text-xl font-black`}>
                  Renew Document
                </h3>
                <p className="text-sm font-bold text-black/40 mt-1 uppercase tracking-widest">
                  {selectedRecord.name}
                </p>
              </div>

              <div className="space-y-4 mb-10">
                <div className="flex justify-between items-center p-6 bg-slate-50 rounded-2xl">
                  <div className="flex items-center gap-3 text-black/40">
                    <Info size={18} />
                    <span className="text-xs font-black uppercase tracking-widest">
                      Govt. Fee
                    </span>
                  </div>
                  <span className="text-xl font-black text-black">
                    ₦{selectedRecord.price.toLocaleString()}
                  </span>
                </div>
              </div>

              <button className="w-full py-6 bg-black text-white rounded-[2rem] font-black uppercase text-[11px] tracking-[0.4em] flex items-center justify-center gap-4 active:scale-95 transition-all shadow-2xl">
                Pay with Wallet <RefreshCcw size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
