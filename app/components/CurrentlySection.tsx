"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CURRENTLY = [
  {
    category: "reading",
    items: [
      { label: "Vagabond Vol. 37", note: "Inoue's brushwork is unreasonable." },
      { label: "The Pragmatic Programmer", note: "Re-read. Still hits." },
      { label: "Thinking, Fast and Slow", note: "System 1 is the enemy." },
    ],
  },
  {
    category: "building",
    items: [
      {
        label: "Multi-agent reasoning framework",
        note: "Agents that disagree productively.",
      },
      {
        label: "FL Studio project — untitled",
        note: "Somewhere between lo-fi and something else.",
      },
      { label: "This site", note: "Obviously." },
    ],
  },
  {
    category: "wrestling with",
    items: [
      {
        label: "When to abstract vs. when to repeat",
        note: "The eternal question.",
      },
      {
        label: "Attention mechanisms, intuitively",
        note: "The math is clear. The intuition isn't.",
      },
      {
        label: "How Musashi would approach sprint planning",
        note: "Probably not Jira.",
      },
    ],
  },
];

export default function CurrentlySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const colsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, x: -24 },
        {
          opacity: 1, x: 0, duration: 0.8, ease: "power2.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 85%" },
        }
      );

      const cols = colsRef.current?.querySelectorAll<HTMLElement>(".curr-col");
      if (cols?.length) {
        gsap.fromTo(
          cols,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: "power2.out",
            scrollTrigger: { trigger: colsRef.current, start: "top 80%" },
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ padding: "8rem 2rem", borderTop: "1px solid var(--border)" }}
      aria-labelledby="currently-heading"
    >
      {/* Heading */}
      <div ref={headingRef} style={{ opacity: 0, marginBottom: "4rem", maxWidth: "1200px", margin: "0 auto 4rem" }}>
        <span
          style={{
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: "0.7rem",
            color: "var(--accent)",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            opacity: 0.6,
            display: "block",
            marginBottom: "0.75rem",
          }}
        >
          transmission / 004
        </span>
        <h2
          id="currently-heading"
          style={{
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            fontWeight: 600,
            color: "var(--fg)",
            letterSpacing: "-0.02em",
            marginBottom: "0.5rem",
          }}
        >
          Currently
        </h2>
        <p
          style={{
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: "0.8rem",
            color: "var(--muted)",
          }}
        >
          a living document
        </p>
      </div>

      {/* Columns */}
      <div
        ref={colsRef}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",
          gap: "3rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {CURRENTLY.map((col) => (
          <div key={col.category} className="curr-col" style={{ opacity: 0 }}>
            <span
              style={{
                display: "block",
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "0.65rem",
                color: "var(--accent)",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                opacity: 0.6,
                marginBottom: "1.5rem",
              }}
            >
              {col.category}
            </span>

            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {col.items.map((item, i) => (
                <li key={i}>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      color: "var(--fg)",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-geist-mono), monospace",
                      fontSize: "0.72rem",
                      color: "var(--muted)",
                      lineHeight: 1.5,
                    }}
                  >
                    {item.note}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
