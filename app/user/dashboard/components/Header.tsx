"use client";

import React from "react";
import { Bell, User } from "lucide-react";
import { Michroma } from "next/font/google";

const michroma = Michroma({ subsets: ["latin"], weight: ["400"] });

export default function Header({ activeTab }: { activeTab: string }) {
  return (
    <header className="h-20 md:h-24 flex-shrink-0 bg-white/40 backdrop-blur-md border-b border-black/[0.04] px-6 md:px-10 flex items-center justify-between z-40">
      <div className="flex flex-col">
        <h2
          className={`${michroma.className} text-[9px] uppercase tracking-[0.3em] text-[#008000] mb-1`}
        >
          Terminal
        </h2>
        <h3 className="text-[10px] font-black uppercase tracking-widest text-black/20">
          / {activeTab}
        </h3>
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        <button className="relative p-2.5 bg-white border border-black/5 rounded-xl text-black/40 hover:text-black transition-all">
          <Bell size={18} />
          <span className="absolute top-3 right-3 w-1.5 h-1.5 bg-[#008000] rounded-full" />
        </button>
        <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-black flex items-center justify-center text-white shadow-lg">
          <User size={18} />
        </div>
      </div>
    </header>
  );
}
