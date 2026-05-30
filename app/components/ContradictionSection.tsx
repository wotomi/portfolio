"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PAIRS = [
  {
    a: "Logic",
    b: "Chaos",
    story:
      "Every system I build starts with a diagram and ends with something that surprised me. The chaos isn't a bug — it's where the interesting decisions live. Guts and structure, always in tension.",
  },
  {
    a: "Code",
    b: "Canvas",
    story:
      "I produce in FL Studio the same way I architect agents — layering, pruning, listening for what doesn't fit. Both are about shaping something invisible into something felt.",
  },
  {
    a: "Berserk",
    b: "Business Analysis",
    story:
      "Guts doesn't have a roadmap. He has a direction and a sword. Most of my best work started the same way — a clear problem, no clean solution, and the willingness to stay in it.",
  },
  {
    a: "Embedded",
    b: "Emergent",
    story:
      "Writing firmware taught me that constraints are generative. When you have 64KB of RAM and a hard deadline, you stop theorizing and start deciding. That discipline carries into every layer of the stack.",
  },
  {
    a: "Signal",
    b: "Noise",
    story:
      "Data analysis is mostly archaeology. You're not finding answers — you're removing everything that isn't the answer. The signal was always there. You just have to be patient enough to hear it.",
  },
  {
    a: "Vagabond",
    b: "Version Control",
    story:
      "Musashi spent years mastering the sword before he understood what mastery meant. I think about that when I'm refactoring code I wrote six months ago. The commits are the practice log.",
  },
];

export default function ContradictionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [openPair, setOpenPair] = useState<number | null>(null);

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

      const items = gridRef.current?.querySelectorAll<HTMLElement>(".pair-item");
      if (items?.length) {
        gsap.fromTo(
          items,
          { opacity: 0, scale: 0.96 },
          {
            opacity: 1, scale: 1, duration: 0.5, stagger: 0.07, ease: "power2.out",
            scrollTrigger: { trigger: gridRef.current, start: "top 80%" },
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
      aria-labelledby="contradiction-heading"
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
          transmission / 003
        </span>
        <h2
          id="contradiction-heading"
          style={{
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            fontWeight: 600,
            color: "var(--fg)",
            letterSpacing: "-0.02em",
            marginBottom: "0.5rem",
          }}
        >
          The Contradiction
        </h2>
        <p
          style={{
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: "0.8rem",
            color: "var(--muted)",
          }}
        >
          click to expand
        </p>
      </div>

      {/* Grid */}
      <div
        ref={gridRef}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
          gap: "1px",
          background: "var(--border)",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {PAIRS.map((pair, i) => (
          <div
            key={i}
            className="pair-item"
            onClick={() => setOpenPair(openPair === i ? null : i)}
            role="button"
            tabIndex={0}
            aria-expanded={openPair === i}
            onKeyDown={(e) =>
              e.key === "Enter" && setOpenPair(openPair === i ? null : i)
            }
            style={{
              opacity: 0,
              padding: "2rem",
              cursor: "pointer",
              background: "var(--bg)",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "#111")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "var(--bg)")
            }
          >
            {/* Pair label */}
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "0.5rem",
                marginBottom: "1rem",
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
                  fontWeight: 600,
                  color: "var(--fg)",
                }}
              >
                {pair.a}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: "0.7rem",
                  color: "var(--muted)",
                }}
              >
                /
              </span>
              <span
                style={{
                  fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
                  fontWeight: 600,
                  color: "var(--accent)",
                }}
              >
                {pair.b}
              </span>
            </div>

            {/* Toggle hint */}
            <span
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "0.7rem",
                color: "var(--muted)",
                display: "block",
              }}
            >
              {openPair === i ? "↑" : "→"}
            </span>

            {/* Story */}
            <div className={`expand-content${openPair === i ? " open" : ""}`}>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "#a0a0a0",
                  lineHeight: 1.7,
                  marginTop: "1rem",
                  paddingTop: "1rem",
                  borderTop: "1px solid var(--border)",
                }}
              >
                {pair.story}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
