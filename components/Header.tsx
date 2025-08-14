// components/Header.tsx
import { motion } from 'framer-motion';
import Image from 'next/image';

export const Header = () => {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-40 p-4 bg-gray-950/50 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 2.5 }}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group cursor-pointer">
          <Image
            src="/logo.svg"
            alt="Header Logo"
            width={36}
            height={36}
            className="h-20 w-auto"
          />
          <span className="hidden sm:inline text-xl font-bold text-white tracking-wide">
            Schools Daily MediaLabs
          </span>
        </a>
        <nav className="flex items-center gap-x-4 md:gap-x-6">
          <a href="#about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">About</a>
          <a href="#sembuzz" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Sembuzz</a>
          <a href="#tefenoza" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Tefenoza</a>
          <a href="#contact" className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-500 transition-colors">Contact</a>
        </nav>
      </div>
    </motion.header>
  );
};