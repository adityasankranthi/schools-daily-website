// app/page.tsx
"use client";

import { useState, useEffect } from 'react';

// Import all page section components
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Tefenoza } from "@/components/Tefenoza";
import { Sembuzz } from "@/components/Sembuzz";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Loader } from '@/components/Loader';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This timer should be slightly longer than the typing animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 3 seconds total

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* The Loader will control its own fade-out via CSS */}
      <Loader isVisible={isLoading} />

      {/* The Main Content will fade in when loading is complete */}
      {!isLoading && (
        <div>
          <Header />
          <main className="bg-gray-950">
            <Hero />
            <About />
            <Sembuzz />
            <Tefenoza />
            <Contact />
            <Footer />
          </main>
        </div>
      )}
    </>
  );
}