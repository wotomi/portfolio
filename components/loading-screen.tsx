"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Animate counter from 0 to 1
    const duration = 2000; // 2 seconds
    const steps = 100;
    const increment = 1 / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      setCount(currentStep * increment);

      if (currentStep >= steps) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 500);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "#000000" }}
    >
      {/* Subtle grain on loading screen too */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E")`, backgroundSize: "256px 256px", opacity: 0.04, mixBlendMode: "overlay" as const }} />

      {/* Animated circles */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute w-96 h-96 rounded-full bg-primary/10 blur-3xl"
      />

      {/* Content */}
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Counter */}
          <div className="flex items-center justify-center gap-6">
            <motion.span
              key={Math.floor(count * 10) / 10}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent"
            >
              {count.toFixed(2)}
            </motion.span>
          </div>

          {/* Arrow */}
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-4xl text-primary"
          >
            →
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-2"
          >
            <p className="text-2xl md:text-3xl font-bold text-foreground">
              0 to 1
            </p>
            <p className="text-base md:text-lg text-muted-foreground">
              Building products from scratch
            </p>
          </motion.div>

          {/* Progress bar */}
          <div className="w-64 h-1 bg-secondary rounded-full overflow-hidden mx-auto">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: `${count * 100}%` }}
              className="h-full bg-gradient-to-r from-primary to-accent"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
