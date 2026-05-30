"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PRINCIPLES = [
  {
    title: "Systems Over Solutions",
    body: "I don't build features. I build architectures that evolve. Every line of code is a decision about what comes next.",
  },
  {
    title: "Constraints Are Generative",
    body: "64KB of RAM. 10ms latency budget. These aren't limitations — they're forcing functions for clarity.",
  },
  {
    title: "Narrative Drives Design",
    body: "From Vagabond to version control — mastery is iterative. The best systems tell a story about how they were made.",
  },
  {
    title: "Disagreement Surfaces Truth",
    body: "Adversarial agents. Code reviews. Debate. Consensus is comfortable. Friction reveals what's actually right.",
  },
];

export default function PhilosophySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
          },
        }
      );

      const items = gridRef.current?.querySelectorAll(".principle-item");
      if (items) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 75%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section"
      style={{
        minHeight: "100vh",
        paddingTop: "8rem",
        paddingBottom: "8rem",
        background: "linear-gradient(180deg, #000000 0%, #0a0a0a 100%)",
      }}
      aria-labelledby="philosophy-heading"
    >
      {/* Heading */}
      <div
        ref={headingRef}
        style={{
          opacity: 0,
          textAlign: "center",
          marginBottom: "5rem",
        }}
      >
        <span
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.3em",
            color: "var(--accent)",
            fontWeight: 600,
            display: "block",
            marginBottom: "1rem",
          }}
        >
          PHILOSOPHY
        </span>
        <h2
          id="philosophy-heading"
          className="cinematic-text"
          style={{
            fontSize: "clamp(2rem, 5vw, 4rem)",
            marginBottom: "1.5rem",
          }}
        >
          How I Think About Work
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            color: "#888",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          These aren't platitudes. They're the principles that guide every
          decision, every line of code, every system I build.
        </p>
      </div>

      {/* Grid */}
      <div
        ref={gridRef}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
          gap: "2rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {PRINCIPLES.map((principle, i) => (
          <div
            key={i}
            className="principle-item card-glow"
            style={{
              opacity: 0,
              background: "rgba(255, 255, 255, 0.02)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              padding: "2.5rem",
              borderRadius: "4px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Number */}
            <div
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                fontSize: "2.5rem",
                fontWeight: 900,
                color: "rgba(0, 217, 255, 0.05)",
                lineHeight: 1,
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </div>

            {/* Title */}
            <h3
              style={{
                fontSize: "1.4rem",
                fontWeight: 700,
                color: "var(--accent)",
                marginBottom: "1rem",
                letterSpacing: "-0.01em",
              }}
            >
              {principle.title}
            </h3>

            {/* Body */}
            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.7,
                color: "#aaaaaa",
              }}
            >
              {principle.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
