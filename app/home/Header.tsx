"use client";

import React, { useState, useEffect } from "react";
import { Michroma } from "next/font/google";
import { Menu, X, Activity } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const michroma = Michroma({ subsets: ["latin"], weight: ["400"] });

interface HeaderProps {
  onOpenModal: () => void;
}

export default function Header({ onOpenModal }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // UPDATED NAVIGATION LINKS
  const navLinks = [
    { name: "Registry", href: "#registry" },
    { name: "Services", href: "#services" },
    { name: "Utilities", href: "#utilities" },
    { name: "Experience", href: "#experience" },
    { name: "Support", href: "#support" },
  ];

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const TacticalLogo = ({ size = "sm" }: { size?: "sm" | "lg" }) => (
    <div
      className={`relative group ${size === "lg" ? "w-32 h-12" : "w-24 h-10"}`}
    >
      <div
        className={`absolute inset-0 bg-[#008000]/20 rounded-full transition-all duration-700 
        ${size === "lg" ? "blur-3xl group-hover:bg-[#008000]/30" : "blur-2xl opacity-0 group-hover:opacity-100"}`}
      />
      <div className="relative w-full h-full">
        <Image
          src="/logo.png"
          alt="Ticket R"
          fill
          className="object-contain object-left transition-transform duration-700 group-hover:scale-105"
          priority
          // Add this line:
          sizes="(max-width: 768px) 100px, 150px"
        />
        <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-[#008000] opacity-30" />
        <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-[#008000] opacity-30" />
      </div>
    </div>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled
          ? "bg-[#FBF9F6]/95 backdrop-blur-xl h-20 border-b border-[#1A1A1A]/10 shadow-sm"
          : "bg-transparent h-28"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="cursor-pointer"
        >
          <TacticalLogo size="sm" />
        </div>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden md:flex items-center gap-12">
          <nav className="flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.4em] text-[#1A1A1A]/40">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#008000] transition-all relative group py-2"
              >
                <span className="group-hover:tracking-[0.6em] transition-all duration-500">
                  {link.name}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#008000] transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <button
            onClick={onOpenModal}
            className="bg-[#1A1A1A] text-white px-10 py-4 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#008000] transition-all duration-500 shadow-[8px_8px_0px_rgba(0,128,0,0.2)] active:translate-y-1 active:shadow-none"
          >
            Start Now
          </button>
        </div>

        <button
          className="md:hidden w-12 h-12 flex items-center justify-center bg-[#1A1A1A] text-white shadow-[4px_4px_0px_#008000] relative z-[110]"
          onClick={toggleMenu}
        >
          <AnimatePresence mode="wait">
            {isMobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X size={20} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
              >
                <Menu size={20} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/60 backdrop-blur-md md:hidden z-[101]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="fixed top-0 right-0 h-screen w-[92%] max-w-md bg-[#FBF9F6] md:hidden z-[105] shadow-2xl flex flex-col"
            >
              <div className="p-12 flex flex-col items-start justify-center border-b border-[#1A1A1A]/5 bg-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#008000]" />
                <TacticalLogo size="lg" />
              </div>
              <div className="flex-grow p-12 overflow-y-auto">
                <nav className="flex flex-col gap-10">
                  <p className="text-[9px] font-black uppercase tracking-[0.5em] text-[#1A1A1A]/30">
                    Main Directory
                  </p>
                  {navLinks.map((link, idx) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        transition: { delay: idx * 0.1 },
                      }}
                      onClick={toggleMenu}
                      className={`${michroma.className} text-2xl uppercase text-[#1A1A1A] hover:text-[#008000] flex items-center justify-between group`}
                    >
                      {link.name}
                      <Activity
                        size={16}
                        className="opacity-0 group-hover:opacity-100 transition-all text-[#008000]"
                      />
                    </motion.a>
                  ))}
                </nav>
              </div>
              <div className="p-10 bg-white border-t border-[#1A1A1A]/5">
                <button
                  onClick={() => {
                    toggleMenu();
                    onOpenModal();
                  }}
                  className="w-full bg-[#1A1A1A] text-white py-6 text-xs font-black uppercase tracking-[0.3em] shadow-[10px_10px_0px_#008000] active:shadow-none active:translate-y-1 transition-all"
                >
                  Join Now
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
