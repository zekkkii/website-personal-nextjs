"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const greetings = ["Hola", "Hello", "Hallo"];

export default function AnimatedHello() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-20 w-full flex items-center justify-center text-white text-4xl md:text-5xl font-bold space-x-3">
      {/* Animación de saludo */}
      <div className="w-[130px] h-[60px] flex items-center justify-center relative">
        <AnimatePresence mode="wait">
          <motion.span
            key={greetings[index]}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="inline-block"
          >
            {greetings[index]}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="whitespace-nowrap"> I&apos;m Ezequiel</span>
      <span className="ml-1">👋</span>
    </div>
  );
}
