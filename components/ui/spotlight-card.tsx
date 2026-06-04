"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  enableScale?: boolean;
}

/**
 * Single-surface frosted glass card.
 * No outer wrapper + inner div. One element, one border, one blur.
 * The .glass CSS class provides:
 *   - backdrop-filter: blur(40px) saturate(140%)
 *   - rgba(18,18,24,0.55) fill
 *   - ::before grain noise texture
 *   - 1px rgba(255,255,255,0.10) border
 *   - inset top-edge highlight
 */
export function SpotlightCard({
  children,
  className,
  spotlightColor = "rgba(255, 255, 255, 0.07)",
  enableScale = false,
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={enableScale ? { scale: 1.02 } : {}}
      transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
      className={cn(
        "group relative rounded-2xl glass transition-all duration-500",
        className
      )}
    >
      {/* Mouse-follow spotlight — z-index 10 sits above the ::before grain */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] z-10"
        style={{
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.3s ease",
          background: `radial-gradient(380px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 55%)`,
        }}
      />
      {children}
    </motion.div>
  );
}
