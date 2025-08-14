// components/About.tsx
"use client";
import { motion, Variants } from 'framer-motion';
import { Users, Lock, Handshake } from 'lucide-react';
import React from 'react'; // Import React for React.ReactNode

// Define a specific type for the component's props
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

// Use the new FeatureCardProps type instead of 'any'
const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => (
  <motion.div
    className="group relative overflow-hidden flex flex-col items-center text-center p-8 bg-gray-900 rounded-lg border border-gray-800"
    custom={index}
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
  >
    <div className="absolute -inset-px rounded-lg bg-gradient-to-r from-indigo-500 to-teal-500 opacity-0 transition-opacity duration-300 group-hover:opacity-70"></div>
    <div className="relative z-10">
      <div className="p-3 bg-indigo-500/10 rounded-full inline-block">
        {icon}
      </div>
      <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-base text-gray-400">{description}</p>
    </div>
  </motion.div>
);

export const About = () => {
  const features = [
    { icon: <Users className="h-8 w-8 text-indigo-400" />, title: "Student-Friendly Interface", description: "We focus on intuitive design with measurable outcomes that students genuinely enjoy using." },
    { icon: <Lock className="h-8 w-8 text-indigo-400" />, title: "Privacy-Conscious Development", description: "As a FERPA-aware team, we build all our products with the highest standards of security and compliance." },
    { icon: <Handshake className="h-8 w-8 text-indigo-400" />, title: "Collaborative Partnerships", description: "We look forward to collaborating with universities, student groups, and local partners to build better tools together." }
  ];

  return (
    <section id="about" className="py-20 sm:py-32 bg-gray-950">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Redefining the Student Experience</h2>
        <p className="mt-6 text-lg leading-8 text-gray-300 max-w-3xl mx-auto">
          We are a Wisconsin-based LLC focused on building practical, student-friendly products. Our mission is to empower student creators and streamline campus communication.
        </p>
      </div>
      <div className="container mx-auto mt-16 max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} {...feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};