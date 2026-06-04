"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { createAvatar } from "@dicebear/core";
import { adventurer } from "@dicebear/collection";
import { useMemo } from "react";

export function Hero() {
  // Generate Apple Memoji-style avatar
  const avatar = useMemo(() => {
    const svg = createAvatar(adventurer, {
      seed: "Subhadip",
      size: 320,
      backgroundColor: ["transparent"],
      hairColor: ["000000"], // Black hair
      hair: ["short07"], // Messy/textured style with good coverage
    }).toString();

    return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center py-24 px-4 overflow-hidden">
      {/* Subtle vignette to ground the section without competing with the global background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-background/30 pointer-events-none" />

      <div className="container max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1.1fr,1fr] gap-20 items-center">
          {/* Left side - Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center lg:justify-start order-2 lg:order-1"
          >
            <div className="relative">
              {/* Avatar Container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 rounded-full blur-3xl animate-pulse" />

                {/* Avatar */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="relative w-full h-full rounded-full bg-gradient-to-br from-primary/10 via-background to-accent/10 border-2 border-primary/30 overflow-hidden backdrop-blur-sm p-6"
                >
                  <img
                    src={avatar}
                    alt="Avatar"
                    className="w-full h-full object-contain"
                  />
                </motion.div>

                {/* Orbiting elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary/50" />
                </motion.div>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent/50" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.2 }}
            className="space-y-8 order-1 lg:order-2"
          >
            {/* Status line - moved to top */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            >
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border-2 border-primary/20 bg-primary/5 backdrop-blur-xl text-sm font-medium">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary shadow-lg shadow-primary/50"></span>
                </span>
                <span className="text-foreground">
                  Currently: Business Analyst @ Enverus • AI Tutor @ xAI
                </span>
              </div>
            </motion.div>

            {/* Name with tighter tracking */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            >
              <h1 className="text-6xl md:text-7xl lg:text-[7rem] font-bold tracking-[-0.02em] leading-[0.95]">
                <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                  Subhadip
                </span>
              </h1>
            </motion.div>

            {/* Headline with optical line-height */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.01em] leading-[1.15]"
            >
              Building Intelligent Systems{" "}
              <span className="block mt-2 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                From Embedded Devices to AI Agents
              </span>
            </motion.h2>

            {/* Subheadline with max-width for readability */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-[600px]"
            >
              Business Analyst, AI Engineer, and Builder exploring the intersection
              of software, data, and artificial intelligence.
            </motion.p>

            {/* CTAs with nested icon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              className="flex flex-wrap gap-4 pt-6"
            >
              <Button
                size="lg"
                className="group relative"
                onClick={() =>
                  document
                    .getElementById("work")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View My Work
                {/* Nested trailing icon circle */}
                <span className="ml-2 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 group-hover:bg-white/20">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
