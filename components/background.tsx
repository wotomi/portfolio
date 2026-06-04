"use client";

import { useEffect, useRef } from "react";

// ─────────────────────────────────────────────────────────────
//  Approach:
//  1. Each blob = one smooth radial gradient fill (perfectly smooth,
//     no banding) drawn onto an offscreen canvas, then composited.
//  2. 5 crisp contour stroke rings drawn on top of each blob
//     to give the topology / elevation-line effect.
//  3. Organic morph via Catmull-Rom spline with slow per-vertex wobble.
//  4. Pure black bg, dark teal + dark purple only — dark theme.
// ─────────────────────────────────────────────────────────────

// ── Helpers ──────────────────────────────────────────────────

function lcg(seed: number): () => number {
  let s = seed >>> 0;
  return () => {
    s = (Math.imul(1664525, s) + 1013904223) >>> 0;
    return s / 0x100000000;
  };
}

/** Build organic blob control points — N vertices around a circle,
 *  each with an independent amplitude and speed for sinusoidal wobble. */
function makeBlob(n: number, seed: number) {
  const rng = lcg(seed);
  const amps   = Array.from({ length: n }, () => 0.08 + rng() * 0.22);
  const speeds = Array.from({ length: n }, () => 0.10 + rng() * 0.20);
  const phases = Array.from({ length: n }, () => rng() * Math.PI * 2);
  return { n, amps, speeds, phases };
}

/** Evaluate the blob outline at time t, returning pixel [x,y] points. */
function evalBlob(
  blob: ReturnType<typeof makeBlob>,
  cx: number, cy: number, r: number,
  scale: number,          // 1.0 = full, <1 = inner contour ring
  t: number
): [number, number][] {
  const pts: [number, number][] = [];
  for (let i = 0; i < blob.n; i++) {
    const baseAngle = (i / blob.n) * Math.PI * 2;
    const wobble = blob.amps[i] * Math.sin(t * blob.speeds[i] + blob.phases[i]);
    const rad = r * scale * (1 + wobble);
    pts.push([cx + Math.cos(baseAngle) * rad, cy + Math.sin(baseAngle) * rad]);
  }
  return pts;
}

/** Catmull-Rom smooth closed path from points. */
function tracePath(ctx: CanvasRenderingContext2D, pts: [number, number][]) {
  const n = pts.length;
  ctx.beginPath();
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i - 1 + n) % n];
    const p1 = pts[i];
    const p2 = pts[(i + 1) % n];
    const p3 = pts[(i + 2) % n];
    const cp1x = p1[0] + (p2[0] - p0[0]) / 6;
    const cp1y = p1[1] + (p2[1] - p0[1]) / 6;
    const cp2x = p2[0] - (p3[0] - p1[0]) / 6;
    const cp2y = p2[1] - (p3[1] - p1[1]) / 6;
    if (i === 0) ctx.moveTo(p1[0], p1[1]);
    ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, p2[0], p2[1]);
  }
  ctx.closePath();
}

// ── Blob definitions ─────────────────────────────────────────
// Only 2 blobs, dark-theme colors, large scale

interface BlobConfig {
  cx: number;    // 0–1 normalised
  cy: number;
  r: number;     // fraction of Math.min(w,h)
  color: string; // peak color at center (hex)
  speed: number;
  phase: number;
  seed: number;
  /** How many contour stroke rings to draw (keep low: 4–6) */
  rings: number;
}

const BLOBS: BlobConfig[] = [
  {
    // Dark teal — upper-left, very large
    cx: 0.15,
    cy: 0.35,
    r: 0.52,
    color: "#0e4a4a",   // dark teal, not bright — fits dark theme
    speed: 0.12,
    phase: 0,
    seed: 1,
    rings: 5,
  },
  {
    // Dark purple — lower-right, large
    cx: 0.80,
    cy: 0.70,
    r: 0.45,
    color: "#2d1060",   // dark violet
    speed: 0.10,
    phase: 2.4,
    seed: 2,
    rings: 5,
  },
];

// Pre-build blob morph data once
const BLOB_DATA = BLOBS.map((b) => makeBlob(14, b.seed));

// ── Draw one blob ─────────────────────────────────────────────

function drawBlob(
  ctx: CanvasRenderingContext2D,
  cfg: BlobConfig,
  blob: ReturnType<typeof makeBlob>,
  w: number,
  h: number,
  t: number
) {
  const cx = cfg.cx * w;
  const cy = cfg.cy * h;
  const r  = cfg.r * Math.min(w, h);
  const bt = t * cfg.speed + cfg.phase;

  // ── 1. Smooth radial gradient fill ──────────────────────
  // Parse hex color for gradient stops
  const hr = parseInt(cfg.color.slice(1, 3), 16);
  const hg = parseInt(cfg.color.slice(3, 5), 16);
  const hb = parseInt(cfg.color.slice(5, 7), 16);

  // Outer pts (full radius) define the clipping shape
  const outerPts = evalBlob(blob, cx, cy, r, 1.0, bt);

  // Use a large radial gradient that covers the blob area.
  // We clip to the blob shape so it stays organic.
  ctx.save();
  tracePath(ctx, outerPts);
  ctx.clip();

  // Gradient from center (full color) to edge (transparent black)
  const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r * 1.05);
  grad.addColorStop(0.00, `rgba(${hr},${hg},${hb},0.90)`);
  grad.addColorStop(0.30, `rgba(${hr},${hg},${hb},0.70)`);
  grad.addColorStop(0.60, `rgba(${hr},${hg},${hb},0.35)`);
  grad.addColorStop(0.85, `rgba(${hr},${hg},${hb},0.10)`);
  grad.addColorStop(1.00, `rgba(0,0,0,0)`);

  ctx.fillStyle = grad;
  ctx.fillRect(cx - r * 1.2, cy - r * 1.2, r * 2.4, r * 2.4);
  ctx.restore();

  // ── 2. Contour stroke rings ──────────────────────────────
  // Draw cfg.rings rings from ~90% down to ~25% of radius.
  // Each ring is a slightly different organic shape (the wobble
  // evolves differently per scale) and stroked — not filled.
  for (let ri = 0; ri < cfg.rings; ri++) {
    // scale goes from outer to inner: 0.90 → 0.25
    const scale = 0.90 - (ri / (cfg.rings - 1)) * 0.65;

    // Brightness of the ring stroke — inner rings slightly brighter
    const brightness = 0.12 + (ri / (cfg.rings - 1)) * 0.22;
    const alpha      = 0.18 + (ri / (cfg.rings - 1)) * 0.20;

    const ringPts = evalBlob(blob, cx, cy, r, scale, bt);

    tracePath(ctx, ringPts);
    ctx.strokeStyle = `rgba(${hr},${hg},${hb},${alpha})`;
    // Innermost ring slightly thicker, outer thinner
    ctx.lineWidth = 0.5 + (ri / (cfg.rings - 1)) * 1.0;
    ctx.stroke();
  }
}

// ── Main component ────────────────────────────────────────────

export function GlobalBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef    = useRef<number>(0);
  const t0Ref     = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const tick = (ts: number) => {
      if (!t0Ref.current) t0Ref.current = ts;
      const t = (ts - t0Ref.current) / 1000;

      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < BLOBS.length; i++) {
        drawBlob(ctx, BLOBS[i], BLOB_DATA[i], canvas.width, canvas.height, t);
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
