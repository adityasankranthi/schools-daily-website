// components/SiteContent.tsx
"use client";

import { motion } from 'framer-motion';

// Import all the sections of your page
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Tefenoza } from "@/components/Tefenoza";
import { Sembuzz } from "@/components/Sembuzz";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const SiteContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <Header />
      <main className="bg-gray-950">
        <Hero />
        <About />
        <Tefenoza />
        <Sembuzz />
        <Contact />
        <Footer />
      </main>
    </motion.div>
  );
};