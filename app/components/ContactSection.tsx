"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0, duration: 1, ease: "power2.out",
          scrollTrigger: { trigger: contentRef.current, start: "top 85%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ padding: "8rem 2rem", borderTop: "1px solid var(--border)" }}
      aria-labelledby="contact-heading"
    >
      <div ref={contentRef} style={{ opacity: 0, maxWidth: "1200px", margin: "0 auto" }}>
        <span
          style={{
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: "0.7rem",
            color: "var(--accent)",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            opacity: 0.6,
            display: "block",
            marginBottom: "3rem",
          }}
        >
          transmission / 005
        </span>

        <p
          id="contact-heading"
          style={{
            fontSize: "clamp(1.4rem, 3vw, 2rem)",
            fontWeight: 600,
            color: "var(--fg)",
            letterSpacing: "-0.02em",
            marginBottom: "0.75rem",
          }}
        >
          If something resonated —
        </p>

        <a
          href="mailto:subha@example.com"
          style={{
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: "0.95rem",
            color: "var(--accent)",
            textDecoration: "underline",
            textUnderlineOffset: "4px",
            textDecorationColor: "var(--muted)",
            transition: "color 0.2s, text-decoration-color 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = "var(--fg)";
            (e.currentTarget as HTMLAnchorElement).style.textDecorationColor = "var(--accent)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)";
            (e.currentTarget as HTMLAnchorElement).style.textDecorationColor = "var(--muted)";
          }}
          aria-label="Send email to Subha"
        >
          subha@example.com
        </a>

        {/* Footer */}
        <div
          style={{
            marginTop: "6rem",
            paddingTop: "2rem",
            borderTop: "1px solid var(--border)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "0.7rem",
            color: "var(--muted)",
            letterSpacing: "0.1em",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-geist-mono), monospace",
            }}
          >
            Subha · {new Date().getFullYear()}
          </span>
          <span
            style={{
              fontFamily: "var(--font-geist-mono), monospace",
            }}
          >
            end of transmission
          </span>
        </div>
      </div>
    </section>
  );
}
