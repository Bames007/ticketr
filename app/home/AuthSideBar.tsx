"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  User,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Lock,
  ShieldCheck,
  Loader2,
} from "lucide-react";
import { Michroma, Abel } from "next/font/google";

// Firebase Imports
import { auth, db } from "../lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";

const michroma = Michroma({ subsets: ["latin"], weight: ["400"] });
const abel = Abel({ subsets: ["latin"], weight: ["400"] });

const NIGERIAN_STATES = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "FCT - Abuja",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
];

export default function AuthSidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    state: "",
  });

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password,
      );
      const user = userCredential.user;
      await set(ref(db, "users/" + user.uid), {
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        state: formData.state,
        createdAt: Date.now(),
        role: "user",
      });
      alert("Protocol Initialized: Access Granted");
      onClose();
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className={`fixed right-0 top-0 h-full w-full sm:max-w-[480px] bg-white z-[101] shadow-2xl flex flex-col ${abel.className}`}
          >
            {/* Header - Scaled for Mobile */}
            <div className="flex justify-between items-center px-6 py-8 md:px-8 md:py-10 border-b border-gray-100">
              <div className="relative w-14 h-14 md:w-16 md:h-16">
                <div className="absolute inset-0 bg-[#008000]/10 blur-2xl rounded-full" />
                <Image
                  src="/logo.png"
                  alt="Protocol Logo"
                  fill
                  className="object-contain relative z-10"
                  priority
                />
              </div>
              <button
                onClick={onClose}
                className="p-3 hover:bg-gray-100 rounded-full transition-colors group"
              >
                <X
                  size={24}
                  className="text-black group-hover:rotate-90 transition-transform"
                />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="flex-grow overflow-y-auto custom-scrollbar px-6 py-8 md:px-10">
              <div className="mb-10">
                <h2
                  className={`${michroma.className} text-2xl md:text-3xl text-black leading-tight mb-3 uppercase tracking-tighter`}
                >
                  Initialize <span className="text-[#008000]">Shield</span>
                </h2>
                <p className="text-black/70 text-base md:text-lg leading-relaxed">
                  Establish your digital footprint on the Ticket R network.
                </p>
              </div>

              <form className="space-y-6 md:space-y-8" onSubmit={handleSignUp}>
                <div className="space-y-5">
                  {/* Reusable Input Logic */}
                  {[
                    {
                      id: "fullName",
                      label: "Full Name",
                      icon: User,
                      type: "text",
                      placeholder: "e.g. Olasubomi Adebayo",
                    },
                    {
                      id: "email",
                      label: "Digital Address",
                      icon: Mail,
                      type: "email",
                      placeholder: "verify@ticketr.ng",
                    },
                    {
                      id: "password",
                      label: "Security Key",
                      icon: Lock,
                      type: "password",
                      placeholder: "••••••••••••",
                    },
                    {
                      id: "phone",
                      label: "Phone Number",
                      icon: Phone,
                      type: "tel",
                      placeholder: "+234",
                    },
                  ].map((field) => (
                    <div key={field.id} className="group space-y-2">
                      <label className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.2em] text-black/60 group-focus-within:text-[#008000] transition-colors">
                        {field.label}
                      </label>
                      <div className="relative">
                        <field.icon
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-black/30 group-focus-within:text-[#008000] transition-colors"
                          size={18}
                        />
                        <input
                          required
                          type={field.type}
                          placeholder={field.placeholder}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              [field.id]: e.target.value,
                            })
                          }
                          className="w-full bg-[#FBF9F6] border-b-2 border-transparent rounded-t-lg py-4 md:py-5 pl-12 pr-4 focus:bg-white focus:border-[#008000] transition-all outline-none text-black font-medium text-base md:text-lg placeholder:text-black/20"
                        />
                      </div>
                    </div>
                  ))}

                  {/* Residence Select */}
                  <div className="group space-y-2">
                    <label className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.2em] text-black/60 group-focus-within:text-[#008000] transition-colors">
                      Primary Residence
                    </label>
                    <div className="relative">
                      <MapPin
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-black/30 group-focus-within:text-[#008000]"
                        size={18}
                      />
                      <select
                        required
                        onChange={(e) =>
                          setFormData({ ...formData, state: e.target.value })
                        }
                        className="w-full bg-[#FBF9F6] border-b-2 border-transparent rounded-t-lg py-4 md:py-5 pl-12 pr-12 focus:bg-white focus:border-[#008000] transition-all outline-none appearance-none cursor-pointer text-black font-medium text-base md:text-lg"
                      >
                        <option value="">Select Resident State</option>
                        {NIGERIAN_STATES.map((state) => (
                          <option key={state} value={state}>
                            {state}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-black/30 pointer-events-none"
                        size={18}
                      />
                    </div>
                  </div>
                </div>

                <button
                  disabled={loading}
                  type="submit"
                  className="relative w-full overflow-hidden bg-black text-white py-5 md:py-6 rounded-xl font-bold uppercase tracking-[0.2em] transition-all hover:shadow-lg active:scale-[0.98] disabled:opacity-50"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3 text-sm md:text-base">
                    {loading ? (
                      <Loader2 className="animate-spin" size={20} />
                    ) : (
                      "Initialize Protocol"
                    )}
                    {!loading && <ShieldCheck size={20} />}
                  </span>
                </button>
              </form>
            </div>

            {/* Sticky Footer */}
            <div className="p-6 md:p-8 bg-[#FBF9F6] border-t border-gray-100 flex items-center justify-between mt-auto">
              <p className="text-[9px] md:text-[11px] text-black/60 uppercase font-black tracking-[0.2em]">
                Secure Encryption Active
              </p>
              <div className="flex gap-1.5">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 bg-[#008000] rounded-full animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
