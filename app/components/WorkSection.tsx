"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    id: "01",
    hook: "A business that needed a brain.",
    subhook: "Built one.",
    tags: ["AI Agent", "Python", "LLM"],
    detail:
      "Designed and deployed a multi-step AI agent that automated business intelligence workflows — ingesting unstructured data, reasoning over it, and surfacing decisions. Reduced manual analysis time by 70%.",
    tech: "Python · LangChain · OpenAI · FastAPI",
  },
  {
    id: "02",
    hook: "Sensor data. Milliseconds. No margin.",
    subhook: "Shipped it anyway.",
    tags: ["Embedded", "C", "Real-time"],
    detail:
      "Built firmware for a real-time sensor pipeline on constrained hardware. Interrupt-driven architecture, zero dynamic allocation, deterministic timing. The kind of code that has to be right the first time.",
    tech: "C · RTOS · STM32 · SPI/I2C",
  },
  {
    id: "03",
    hook: "A thousand rows of noise.",
    subhook: "Found the signal.",
    tags: ["Data Analysis", "Python", "Viz"],
    detail:
      "Took a messy operational dataset and turned it into a story. Built a pipeline from raw CSV to interactive dashboard — cleaning, transforming, modeling, visualizing. The insight was already there. Just needed excavating.",
    tech: "Python · Pandas · Plotly · SQL",
  },
  {
    id: "04",
    hook: "What if the agent could argue back?",
    subhook: "It can now.",
    tags: ["AI", "Agents", "Reasoning"],
    detail:
      "Experimented with adversarial agent architectures — two LLM instances in structured debate, with a judge model arbitrating. Explored how disagreement surfaces better reasoning than consensus.",
    tech: "Python · OpenAI · Structured Outputs",
  },
];

export default function WorkSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [openCard, setOpenCard] = useState<string | null>(null);

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

      const cards = gridRef.current?.querySelectorAll<HTMLElement>(".work-card");
      if (cards?.length) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power2.out",
            scrollTrigger: { trigger: gridRef.current, start: "top 80%" },
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const toggle = (id: string) =>
    setOpenCard((prev) => (prev === id ? null : id));

  return (
    <section
      ref={sectionRef}
      style={{ padding: "8rem 2rem" }}
      aria-labelledby="work-heading"
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
          transmission / 002
        </span>
        <h2
          id="work-heading"
          style={{
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            fontWeight: 600,
            color: "var(--fg)",
            letterSpacing: "-0.02em",
            marginBottom: "0.5rem",
          }}
        >
          The Work
        </h2>
        <p
          style={{
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: "0.8rem",
            color: "var(--muted)",
          }}
        >
          shown, not told
        </p>
      </div>

      {/* Grid */}
      <div
        ref={gridRef}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
          gap: "1px",
          background: "var(--border)",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {PROJECTS.map((p) => (
          <article
            key={p.id}
            className="project-card work-card"
            onClick={() => toggle(p.id)}
            role="button"
            tabIndex={0}
            aria-expanded={openCard === p.id}
            onKeyDown={(e) => e.key === "Enter" && toggle(p.id)}
            style={{
              opacity: 0,
              padding: "2.5rem",
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
            {/* Number */}
            <span
              style={{
                display: "block",
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "0.7rem",
                color: "var(--muted)",
                letterSpacing: "0.2em",
                marginBottom: "1.5rem",
              }}
            >
              {p.id}
            </span>

            {/* Hook */}
            <p
              style={{
                fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)",
                fontWeight: 600,
                color: "var(--fg)",
                lineHeight: 1.3,
                marginBottom: "0.25rem",
              }}
            >
              {p.hook}
            </p>
            <p
              style={{
                fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)",
                fontWeight: 600,
                color: "var(--accent)",
                lineHeight: 1.3,
                marginBottom: "1.5rem",
              }}
            >
              {p.subhook}
            </p>

            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" }}>
              {p.tags.map((t) => (
                <span
                  key={t}
                  style={{
                    fontFamily: "var(--font-geist-mono), monospace",
                    fontSize: "0.65rem",
                    color: "var(--muted)",
                    border: "1px solid var(--border)",
                    padding: "0.2rem 0.5rem",
                    letterSpacing: "0.05em",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Toggle hint */}
            <span
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "0.7rem",
                color: "var(--muted)",
              }}
            >
              {openCard === p.id ? "↑ close" : "→ read"}
            </span>

            {/* Expanded detail */}
            <div className={`expand-content${openCard === p.id ? " open" : ""}`}>
              <div
                style={{
                  paddingTop: "1.5rem",
                  marginTop: "1.5rem",
                  borderTop: "1px solid var(--border)",
                }}
              >
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#a0a0a0",
                    lineHeight: 1.7,
                    marginBottom: "1rem",
                  }}
                >
                  {p.detail}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-geist-mono), monospace",
                    fontSize: "0.7rem",
                    color: "var(--accent)",
                    opacity: 0.6,
                  }}
                >
                  {p.tech}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
