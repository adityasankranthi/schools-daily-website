// components/Sembuzz.tsx
"use client";
import { Bell, BarChart2, MailX } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// A single feature item component for cleaner code
const FeatureItem = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="flex gap-4 items-start">
      <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-white">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-1 text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export const Sembuzz = () => {
  return (
    <section id="sembuzz" className="py-20 sm:py-32 bg-gray-800 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Right Column: Animated Sembuzz App Mockup */}
          <motion.div
            className="flex items-center justify-center md:order-last"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/sembuzz.svg"
              alt="Sembuzz app mockup on a smartphone"
              width={400}
              height={200}
              className="rounded-xl shadow-2xl shadow-indigo-500/50 transition-transform transform hover:scale-105"
            />
          </motion.div>
          
          {/* Left Column: Text Content */}
          <div className="md:order-first">
            <h2 className="text-base font-semibold leading-7 text-teal-400">Sembuzz</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Campus Updates & Events
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              A customizable app for universities to centralize announcements and events with clean, short-form updates that students actually read.
            </p>
            
            <div className="mt-10 flex flex-col gap-8">
              <FeatureItem
                icon={<BarChart2 className="h-6 w-6 text-teal-500" />}
                title="Higher Engagement"
                description="Increase event attendance and student participation with categories, club follows, and calendar sync."
              />
              <FeatureItem
                icon={<MailX className="h-6 w-6 text-teal-500" />}
                title="Less Email Clutter"
                description="Reduce inbox fatigue with targeted push notifications and better message targeting."
              />
              <FeatureItem
                icon={<Bell className="h-6 w-6 text-teal-500" />}
                title="Actionable Insights"
                description="Use the analytics dashboard to improve student programming and boost retention."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};