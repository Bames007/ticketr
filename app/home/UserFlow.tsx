"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Michroma, Abel } from "next/font/google";
import {
  UserPlus,
  Fingerprint,
  FileUp,
  Search,
  ShieldCheck,
  CreditCard,
  Map,
  CheckCircle,
  UserCheck,
} from "lucide-react";

const michroma = Michroma({ subsets: ["latin"], weight: ["400"] });
const abel = Abel({ subsets: ["latin"], weight: ["400"] });

const STEPS = [
  {
    title: "Create Account",
    desc: "Sign up with your basic details to initialize your digital presence.",
    icon: <UserPlus size={24} />,
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200",
  },
  {
    title: "Verify Identity",
    desc: "Link your NIN to ensure your account matches national records.",
    icon: <Fingerprint size={24} />,
    img: "https://images.unsplash.com/photo-1542641532-6a4c78e5f701?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Upload Papers",
    desc: "Snap photos of your License, Insurance, and Registration.",
    icon: <FileUp size={24} />,
    img: "https://images.unsplash.com/photo-1743385779313-ac03bb0f997b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "AI Scanning",
    desc: "Our system automatically reads the data from your documents.",
    icon: <Search size={24} />,
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200",
  },
  {
    title: "Agency Link",
    desc: "Your data is securely shared with the Nigerian Police, FRSC, VIO and other road agencies.",
    icon: <ShieldCheck size={24} />,
    img: "https://images.unsplash.com/photo-1663824580144-9c2a1f257b15?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Payment",
    desc: "Complete a one-time secure payment for your digital shield.",
    icon: <CreditCard size={24} />,
    img: "https://images.unsplash.com/photo-1556742111-a301076d9d18?q=80&w=1200",
  },
  {
    title: "State Activation",
    desc: "Select the Nigerian states where you need active coverage.",
    icon: <Map size={24} />,
    img: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1200",
  },
  {
    title: "Review",
    desc: "Our team does a final check to prevent any verification errors.",
    icon: <CheckCircle size={24} />,
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200",
  },
  {
    title: "Account Ready",
    desc: "Access your dashboard and present your digital ID anywhere.",
    icon: <UserCheck size={24} />,
    img: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1200",
  },
];

export default function UserExperiences() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // For Mobile horizontal scroll tracking
  const handleScroll = () => {
    if (containerRef.current && window.innerWidth < 1024) {
      const { scrollLeft, offsetWidth } = containerRef.current;
      const index = Math.round(scrollLeft / (offsetWidth * 0.85));
      setActiveIndex(Math.min(index, STEPS.length - 1));
    }
  };

  return (
    <section className="bg-[#FBF9F6] py-20 lg:py-40">
      <div className="container mx-auto px-6 mb-16 lg:mb-24 text-center lg:text-left">
        <h2
          className={`${michroma.className} text-3xl md:text-6xl text-[#1A1A1A] uppercase tracking-tighter`}
        >
          The <span className="text-[#008000]">9-Step</span> Journey
        </h2>
        <p
          className={`${abel.className} text-[#1A1A1A]/60 text-lg md:text-xl mt-4 max-w-xl lg:mx-0 mx-auto`}
        >
          A seamless transition from physical paperwork to a secure digital
          shield.
        </p>
      </div>

      {/* --- DESKTOP DISPLAY (Sticky Reveal) --- */}
      <div className="hidden lg:block container mx-auto px-6">
        <div className="grid grid-cols-12 gap-20">
          {/* Left: Sticky Info */}
          <div className="col-span-5 sticky top-40 h-fit">
            {STEPS.map((step, idx) => (
              <motion.div
                key={idx}
                animate={{
                  opacity: activeIndex === idx ? 1 : 0.1,
                  x: activeIndex === idx ? 0 : -20,
                }}
                className={`${activeIndex === idx ? "block" : "hidden"} space-y-6`}
              >
                <span
                  className={`${michroma.className} text-[#008000] text-sm tracking-[0.4em] font-bold`}
                >
                  PHASE 0{idx + 1}
                </span>
                <h3
                  className={`${michroma.className} text-5xl text-[#1A1A1A] uppercase leading-tight`}
                >
                  {step.title}
                </h3>
                <p
                  className={`${abel.className} text-2xl text-[#1A1A1A]/70 leading-relaxed`}
                >
                  {step.desc}
                </p>
                <div className="w-16 h-16 rounded-2xl bg-[#008000] text-white flex items-center justify-center shadow-2xl">
                  {step.icon}
                </div>
              </motion.div>
            ))}

            {/* Progress dots for Desktop */}
            <div className="mt-20 flex gap-3">
              {STEPS.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 transition-all duration-500 rounded-full ${activeIndex === i ? "w-12 bg-[#008000]" : "w-4 bg-black/10"}`}
                />
              ))}
            </div>
          </div>

          {/* Right: Scrolling Images */}
          <div className="col-span-7 space-y-40 pb-[50vh]">
            {STEPS.map((step, idx) => (
              <motion.div
                key={idx}
                onViewportEnter={() => setActiveIndex(idx)}
                viewport={{ margin: "-45% 0px -45% 0px" }}
                className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)]"
              >
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* --- MOBILE DISPLAY (The horizontal scroll you love) --- */}
      <div className="lg:hidden">
        <div
          ref={containerRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar px-[6%] gap-5 pb-10"
        >
          {STEPS.map((step, idx) => (
            <div key={idx} className="flex-shrink-0 w-[85vw] snap-center">
              <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden bg-white shadow-2xl">
                <img
                  src={step.img}
                  className="absolute inset-0 w-full h-full object-cover"
                  alt=""
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <span
                    className={`${michroma.className} text-[10px] text-[#008000] tracking-[0.3em] mb-2`}
                  >
                    STEP 0{idx + 1}
                  </span>
                  <h3
                    className={`${michroma.className} text-xl text-white uppercase mb-2`}
                  >
                    {step.title}
                  </h3>
                  <p className={`${abel.className} text-white/60 text-base`}>
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Indicators (Mobile Only) */}
        <div className="flex justify-center items-center gap-2 mt-4">
          {STEPS.map((_, idx) => (
            <motion.div
              key={idx}
              animate={{
                width: activeIndex === idx ? 40 : 8,
                backgroundColor: activeIndex === idx ? "#008000" : "#D1D1D1",
              }}
              className="h-2 rounded-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
