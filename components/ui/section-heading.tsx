"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  subtitle?: string;
}

export function SectionHeading({ children, className, subtitle }: SectionHeadingProps) {
  return (
    <div className="space-y-4">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative inline-block"
      >
        <h2
          className={cn(
            "text-3xl md:text-4xl font-bold tracking-tight relative",
            "bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent",
            "after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent",
            "after:translate-x-[-200%] after:animate-[shine_3s_ease-in-out_infinite]",
            "after:bg-clip-text",
            className
          )}
        >
          {children}
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/50 rounded-full mt-4" />
      </motion.div>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
