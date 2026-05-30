"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const LINES = [
  "systems thinker / story chaser",
  "agent builder / philosophy reader",
  "data analyst / sword nerd",
  "embedded dev / anime archivist",
  "FL Studio sessions / production pipelines",
  "logic circuits / narrative arcs",
];

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLParagraphElement>(null);
  const arrowRef = useRef<HTMLSpanElement>(null);

  const [lineIndex, setLineIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  // GSAP entrance
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        nameRef.current,
        { opacity: 0, y: 32, filter: "blur(10px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.4, ease: "power3.out", delay: 0.3 }
      );
      gsap.fromTo(
        lineRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, delay: 1.2 }
      );
      gsap.fromTo(
        arrowRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6, delay: 2.0 }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  // Typewriter
  useEffect(() => {
    const current = LINES[lineIndex];
    let t: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex < current.length) {
      t = setTimeout(() => {
        setDisplayText(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 44);
    } else if (!isDeleting && charIndex === current.length) {
      t = setTimeout(() => setIsDeleting(true), 2400);
    } else if (isDeleting && charIndex > 0) {
      t = setTimeout(() => {
        setDisplayText(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 20);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setLineIndex((i) => (i + 1) % LINES.length);
    }

    return () => clearTimeout(t);
  }, [charIndex, isDeleting, lineIndex]);

  return (
    <section
      ref={containerRef}
      aria-label="Introduction"
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "0 2rem",
      }}
    >
      {/* Faint grid background */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(rgba(200,184,154,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(200,184,154,0.03) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "720px" }}>
        {/* Label */}
        <span
          style={{
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: "0.7rem",
            color: "var(--accent)",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            opacity: 0.6,
            marginBottom: "2rem",
            display: "block",
          }}
        >
          transmission / 001
        </span>

        {/* Name */}
        <h1
          ref={nameRef}
          style={{
            opacity: 0,
            fontSize: "clamp(4rem, 12vw, 9rem)",
            fontWeight: 600,
            letterSpacing: "-0.03em",
            lineHeight: 1,
            color: "var(--fg)",
            marginBottom: "2.5rem",
          }}
        >
          Subha
        </h1>

        {/* Cycling line */}
        <p
          ref={lineRef}
          aria-live="polite"
          style={{
            opacity: 0,
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: "clamp(0.85rem, 2vw, 1.05rem)",
            color: "var(--accent)",
            letterSpacing: "0.04em",
            minHeight: "1.6em",
          }}
        >
          {displayText}
          <span className="cursor-blink" aria-hidden="true" />
        </p>
      </div>

      {/* Scroll arrow */}
      <span
        ref={arrowRef}
        className="pulse-arrow"
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "3rem",
          left: "2rem",
          fontFamily: "var(--font-geist-mono), monospace",
          fontSize: "0.75rem",
          color: "var(--accent)",
          opacity: 0,
          userSelect: "none",
        }}
      >
        ↓
      </span>
    </section>
  );
}
