"use client";

import React from "react";
import {
  LayoutDashboard,
  Ticket,
  ShieldAlert,
  CarFront,
  FileStack,
  Gavel,
  LogOut,
  ChevronRight,
} from "lucide-react";
import { Michroma } from "next/font/google";

const michroma = Michroma({ subsets: ["latin"], weight: ["400"] });

interface NavProps {
  activeTab: string;
  setActiveTab: (id: string) => void;
}

export default function Navigation({ activeTab, setActiveTab }: NavProps) {
  const menuItems = [
    { id: "home", label: "Home", icon: <LayoutDashboard size={18} /> },
    { id: "tickets", label: "History", icon: <Ticket size={18} /> },
    {
      id: "sos",
      label: "SOS",
      icon: <ShieldAlert size={22} />,
      isUrgent: true,
    },
    { id: "garage", label: "Fleet", icon: <CarFront size={18} /> },
    { id: "papers", label: "Vault", icon: <FileStack size={18} /> },
  ];

  return (
    <>
      {/* --- DESKTOP SIDEBAR --- */}
      <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-black/[0.04] h-screen p-6 sticky top-0 z-50">
        {/* REFINED LOGO AREA */}
        <div className="mb-12 px-2">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center rotate-3 shadow-lg shadow-[#00AA00]/10">
                <span
                  className={`${michroma.className} text-white text-[10px] -rotate-3`}
                >
                  R
                </span>
              </div>
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#00AA00] rounded-full border-2 border-white animate-pulse" />
            </div>
            <div className="flex flex-col">
              <h2
                className={`${michroma.className} text-[10px] tracking-[0.2em] uppercase font-bold text-black leading-none`}
              >
                TICKET <span className="text-[#00AA00]">R</span>
              </h2>
              <span className="text-[7px] uppercase tracking-widest text-black/30 mt-1 font-black">
                Secure Node v4.0
              </span>
            </div>
          </div>
        </div>

        <nav className="flex-grow space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-200 group ${
                activeTab === item.id
                  ? "bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-black/[0.03] text-black"
                  : "text-black/30 hover:bg-black/[0.01]"
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={
                    activeTab === item.id
                      ? "text-[#00AA00]"
                      : "group-hover:text-black"
                  }
                >
                  {React.cloneElement(
                    item.icon as React.ReactElement<{ strokeWidth?: number }>,
                    { strokeWidth: 2.5 },
                  )}
                </span>
                <span
                  className={`${michroma.className} text-[8px] uppercase tracking-[0.1em]`}
                >
                  {item.label}
                </span>
              </div>
              <ChevronRight
                size={10}
                className={
                  activeTab === item.id
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-1"
                }
              />
            </button>
          ))}
        </nav>

        <button className="flex items-center gap-3 px-4 py-3 text-black/20 hover:text-red-500 transition-all text-[8px] font-black uppercase tracking-widest">
          <LogOut size={14} /> Logout
        </button>
      </aside>

      {/* --- SLIM TACTICAL MOBILE DOCK --- */}
      <nav className="lg:hidden fixed bottom-4 left-0 right-0 z-[100] px-4 pointer-events-none">
        <div className="max-w-[340px] mx-auto flex items-center justify-around bg-white/95 backdrop-blur-md border border-black/[0.05] shadow-[0_10px_30px_rgba(0,0,0,0.1)] rounded-2xl px-1 py-1 pointer-events-auto">
          {menuItems.map((item) => {
            const isActive = activeTab === item.id;

            if (item.isUrgent) {
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative -top-4 flex items-center justify-center w-12 h-12 rounded-xl border-4 border-[#FBF9F6] shadow-md transition-all active:scale-90 ${
                    isActive
                      ? "bg-[#00AA00] text-white"
                      : "bg-white text-[#00AA00]"
                  }`}
                >
                  {React.cloneElement(
                    item.icon as React.ReactElement<{ strokeWidth?: number }>,
                    { strokeWidth: 3 },
                  )}
                </button>
              );
            }

            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex flex-col items-center justify-center w-12 py-2 transition-all duration-300 ${isActive ? "text-[#00AA00]" : "text-black/20"}`}
              >
                {React.cloneElement(
                  item.icon as React.ReactElement<{ strokeWidth?: number }>,
                  {
                    strokeWidth: isActive ? 2.5 : 2,
                  },
                )}
                <span
                  className={`${michroma.className} text-[6px] uppercase mt-1 tracking-tighter transition-all ${isActive ? "opacity-100" : "opacity-0 h-0"}`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
