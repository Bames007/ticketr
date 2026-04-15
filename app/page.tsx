"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "./home/LoadingScreen";
import TicketRHero from "./home/Hero";
import TicketRReasons from "./home/TicketRReasons";
import AuthSidebar from "./home/AuthSideBar";
import ProtocolFlow from "./home/ProtocolFlow";
import UserExperiences from "./home/UserExperience";
import Services from "./home/Services";
import PremiumUtilities from "./home/PremiumServices";
import SupportAndContact from "./home/Support";
import Footer from "./home/Footer";
import Header from "./home/Header";
import UserFlow from "./home/UserFlow";

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set timer for 5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      <div className="flex flex-col min-h-screen bg-[#FBF9F6] selection:bg-[#008000]/20">
        <Header onOpenModal={() => setModalOpen(true)} />

        <main className="flex-grow pt-20">
          <TicketRHero onOpenModal={() => setModalOpen(true)} />

          <section id="registry">
            <TicketRReasons onOpenModal={() => setModalOpen(true)} />
          </section>

          <AuthSidebar
            isOpen={isModalOpen}
            onClose={() => setModalOpen(false)}
          />

          <section id="services">
            <Services />
          </section>

          <section id="utilities">
            <PremiumUtilities />
          </section>
          <UserFlow />

          <ProtocolFlow />

          <section id="experience">
            <UserExperiences />
          </section>

          <section id="support">
            <SupportAndContact />
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
