"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Minus,
  Phone,
  MapPin,
  Mail,
  Globe,
  MessageSquare,
  Building2,
  ArrowRight,
} from "lucide-react";
import { Michroma, Abel } from "next/font/google";

const michroma = Michroma({ subsets: ["latin"], weight: ["400"] });
const abel = Abel({ subsets: ["latin"], weight: ["400"] });

const FAQS = [
  {
    question: "What happens if an officer refuses to scan my digital card?",
    answer:
      "Every Ticket R card comes with a unique Verification ID. If an officer cannot scan the QR, they can call our 24/7 verification line or input the ID on our web portal to confirm your status instantly.",
  },
  {
    question: "Is this legal and recognized by the government?",
    answer:
      "Ticket R acts as a digital vault for your existing, state-issued documents. We don't replace the law; we digitize your compliance so you can prove your legality without friction.",
  },
  {
    question: "What if my phone battery dies while I'm at a checkpoint?",
    answer:
      "We recommend printing a high-quality physical copy of your Ticket R QR card to keep in your glove box. It works exactly like the digital version and can be scanned by any official.",
  },
  {
    question: "How does the 'Theft Recovery' actually work?",
    answer:
      "Once you flag your car as 'Stolen' on your dashboard, our system broadcasts your vehicle details to all active patrol units and checkpoints using our protocol, making it nearly impossible to move the car across state lines.",
  },
];

export default function SupportAndContact() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className={`py-24 bg-[#FBF9F6] ${abel.className}`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Support Header */}
        <div className="mb-20 border-b border-[#1A1A1A]/10 pb-12">
          <div className="flex items-center gap-3 mb-6">
            <MessageSquare className="text-[#008000]" size={20} />
            <span className="text-[#1A1A1A] font-black uppercase tracking-[0.4em] text-[10px]">
              Support & Infrastructure
            </span>
          </div>
          <h2
            className={`${michroma.className} text-4xl md:text-6xl text-[#1A1A1A] uppercase tracking-tighter leading-none`}
          >
            Got <span className="text-[#008000]">Questions?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* FAQ Column */}
          <div className="lg:col-span-7">
            <div className="space-y-4">
              {FAQS.map((faq, i) => (
                <div key={i} className="border-b border-[#1A1A1A]/10">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex justify-between items-center py-6 text-left group"
                  >
                    <span
                      className={`${michroma.className} text-sm md:text-base uppercase text-[#1A1A1A] group-hover:text-[#008000] transition-colors`}
                    >
                      {faq.question}
                    </span>
                    {openFaq === i ? <Minus size={18} /> : <Plus size={18} />}
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-8 text-[#1A1A1A]/60 text-lg leading-relaxed max-w-2xl">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-5">
            <div className="bg-[#1A1A1A] p-10 text-white shadow-[20px_20px_0px_#008000] relative overflow-hidden">
              <Building2
                className="absolute -right-4 -bottom-4 text-white/5"
                size={200}
              />

              <div className="relative z-10 space-y-12">
                <div>
                  <h3
                    className={`${michroma.className} text-2xl uppercase mb-2`}
                  >
                    Headquarters
                  </h3>
                  <p className="text-white/50 text-xs uppercase tracking-widest">
                    Federal Capital Territory
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-[#008000] shrink-0" size={20} />
                    <p className="text-lg">
                      Abuja HQ, Central Business District, FCT, Nigeria
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <Phone className="text-[#008000] shrink-0" size={20} />
                    <p className={`${michroma.className} text-lg`}>
                      0812 772 8084
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <Mail className="text-[#008000] shrink-0" size={20} />
                    <p className="text-lg">support@ticketr.com</p>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/10">
                  <p className="text-white/40 text-[10px] uppercase tracking-widest mb-6">
                    Social Handshake
                  </p>
                  <div className="flex gap-6">
                    {["X", "LinkedIn", "Instagram"].map((social) => (
                      <a
                        key={social}
                        href="#"
                        className="text-white hover:text-[#008000] transition-colors uppercase text-xs font-bold tracking-widest"
                      >
                        {social}
                      </a>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-[#008000] py-5 flex items-center justify-center gap-3 group hover:bg-white hover:text-black transition-all">
                  <span className="uppercase font-black text-xs tracking-widest">
                    Send a Message
                  </span>
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-2 transition-transform"
                  />
                </button>
              </div>
            </div>

            {/* Status Footer */}
            <div className="mt-8 flex justify-between items-center px-2">
              <div className="flex items-center gap-2">
                <Globe size={14} className="text-[#1A1A1A]/20" />
                <span className="text-[9px] uppercase font-black tracking-widest text-[#1A1A1A]/30">
                  Global Verification Network
                </span>
              </div>
              <span className="text-[9px] uppercase font-black tracking-widest text-[#008000]">
                Live in 36 States
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
