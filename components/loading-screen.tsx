"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      setProgress(currentStep / steps);

      if (currentStep >= steps) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 300);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Lightweight animated topology-style blobs matching home page */}
      <div className="absolute inset-0">
        {/* Dark teal blob - top left */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.6, 0.75, 0.6],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-[10%] -left-[5%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px]"
          style={{
            background: "radial-gradient(ellipse at 40% 40%, rgba(14,74,74,0.35) 0%, rgba(14,74,74,0.15) 35%, transparent 70%)",
            filter: "blur(60px)"
          }}
        />

        {/* Dark purple blob - bottom right */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute -bottom-[10%] -right-[5%] w-[45vw] h-[45vw] max-w-[550px] max-h-[550px]"
          style={{
            background: "radial-gradient(ellipse at 55% 55%, rgba(45,16,96,0.30) 0%, rgba(45,16,96,0.12) 40%, transparent 70%)",
            filter: "blur(70px)"
          }}
        />
      </div>

      {/* 0 → 1 animation - 0 stays, arrow slides, 1 blurs in */}
      <div className="relative z-10 flex items-center justify-center gap-8 sm:gap-12 md:gap-16 px-4">
        {/* "0" appears and stays */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
          className="relative"
        >
          <span
            className="font-bold bg-gradient-to-br from-white via-gray-100 to-gray-400 bg-clip-text text-transparent select-none"
            style={{
              fontSize: "clamp(6rem, 20vw, 16rem)",
              lineHeight: 0.9,
              letterSpacing: "-0.05em"
            }}
          >
            0
          </span>
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 blur-2xl bg-violet-500/20 -z-10"
          />
        </motion.div>

        {/* Arrow slides in horizontally from left */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{
            opacity: progress > 0.3 ? 1 : 0,
            x: progress > 0.3 ? 0 : -100
          }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
          className="relative flex-shrink-0"
        >
          <span
            className="text-emerald-400 select-none"
            style={{
              fontSize: "clamp(3rem, 10vw, 8rem)",
              lineHeight: 1,
            }}
          >
            →
          </span>
          <motion.div
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute inset-0 blur-xl bg-emerald-500/30 -z-10"
          />
        </motion.div>

        {/* "1" comes from blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: progress > 0.6 ? 1 : 0,
          }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
          className="relative"
          style={{
            filter: progress > 0.6 ? `blur(${Math.max(0, (1 - progress) * 40)}px)` : 'blur(40px)'
          }}
        >
          <span
            className="font-bold bg-gradient-to-br from-white via-gray-100 to-gray-400 bg-clip-text text-transparent select-none"
            style={{
              fontSize: "clamp(6rem, 20vw, 16rem)",
              lineHeight: 0.9,
              letterSpacing: "-0.05em"
            }}
          >
            1
          </span>
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            className="absolute inset-0 blur-2xl bg-amber-500/20 -z-10"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
