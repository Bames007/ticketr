"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "./components/SideBar"; // Your slim light/green nav
import HomePanel from "./panels/HomePanel"; // The "Drive-In" Toyota panel
import Header from "./components/Header"; // Your top bar
import TicketsPanel from "./panels/TicketsPanel";
import SOSPanel from "./panels/SOS";
import FleetPanel from "./panels/FleetPanel";
import AuditVault from "./panels/DocumentVault";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("home");

  // Logic to switch between different sections
  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <HomePanel />;
      case "tickets":
        return <TicketsPanel />;
      case "sos":
        return <SOSPanel />;
      case "garage":
        return <FleetPanel />;
      case "papers":
        return <AuditVault />;
      default:
        return <HomePanel />;
    }
  };

  return (
    <div className="flex min-h-screen bg-[#FBF9F6] text-black overflow-hidden">
      {/* 1. SIDE NAVIGATION (Desktop Sidebar + Mobile Dock) */}
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* 2. MAIN CONTENT AREA */}
      <main className="flex-grow flex flex-col min-w-0 relative h-screen">
        {/* Fixed Header at the top */}
        <Header activeTab={activeTab} />

        {/* Scrollable Container for the Panels */}
        <div className="flex-grow overflow-y-auto overflow-x-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab} // Unique key ensures animation triggers on tab change
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="w-full"
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Shadow Overlay at the bottom for smooth fade behind mobile dock */}
        <div className="lg:hidden absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FBF9F6] to-transparent pointer-events-none z-10" />
      </main>
    </div>
  );
}
