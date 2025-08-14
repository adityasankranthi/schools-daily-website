// components/Tefenoza.tsx
"use client";
import { ShieldCheck, Wand2, Compass } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const Tefenoza = () => {
  return (
    <section id="tefenoza" className="py-20 sm:py-32 bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div>
            <h2 className="text-base font-semibold leading-7 text-indigo-400">Tefenoza</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              A Marketplace for Student Artists
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Give student artists a professional storefront. Tefenoza supports creators with easy listing, fair fees, and powerful tools to grow their audience.
            </p>
            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
              <div className="relative pl-9 group">
                <dt className="inline font-semibold text-white">
                  <Wand2 className="absolute left-1 top-1 h-5 w-5 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                  Zero-Code Listings
                </dt>
                <dd className="inline ml-2 text-gray-400">Create verified profiles and upload artwork details in minutes.</dd>
              </div>
              <div className="relative pl-9 group">
                <dt className="inline font-semibold text-white">
                  <ShieldCheck className="absolute left-1 top-1 h-5 w-5 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                  Secure Checkout
                </dt>
                <dd className="inline ml-2 text-gray-400">Manage orders and deliveries with built-in tools and secure payments.</dd>
              </div>
              <div className="relative pl-9 group">
                <dt className="inline font-semibold text-white">
                  <Compass className="absolute left-1 top-1 h-5 w-5 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                  Campus Discovery
                </dt>
                <dd className="inline ml-2 text-gray-400">Promote your artwork to campus audiences and beyond.</dd>
              </div>
            </dl>
          </div>

          {/* Right Column: Animated & Clickable Mockup */}
          <a
            href="https://tefenoza.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit the Tefenoza website (opens in a new tab)"
          >
            <motion.div
              className="flex items-center justify-center p-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} // Adds a nice pop on hover
            >
              <Image
                src="/tefenoza.svg"
                alt="Tefenoza platform mockup on a tablet"
                width={400}
                height={200}
                className="rounded-xl shadow-2xl shadow-indigo-500/50"
              />
            </motion.div>
          </a>
        </div>
      </div>
    </section>
  );
};