"use client";
import { useEffect, useRef } from "react";

const COLORS = {
  grid: "rgba(148, 163, 184, 0.07)",
  contour: "rgba(148, 163, 184, 0.16)",
  sounding: "rgba(148, 163, 184, 0.32)",
  course: "#ec4899",
};

const random = (seed) => () => {
  seed = (seed * 16807) % 2147483647;
  return (seed - 1) / 2147483646;
};

const draw = (canvas, anchor) => {
  const ctx = canvas.getContext("2d");
  const w = canvas.clientWidth;
  const h = canvas.clientHeight;
  if (!ctx || !w || !h) return;

  const dpr = window.devicePixelRatio || 1;
  canvas.width = Math.round(w * dpr);
  canvas.height = Math.round(h * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, w, h);
  const rnd = random(51203);

  const box = canvas.getBoundingClientRect();
  const a = anchor?.getBoundingClientRect();
  const cx = a ? a.left - box.left + a.width / 2 : w * 0.75;
  const cy = a ? a.top - box.top + a.height / 2 : h * 0.5;
  const island = a ? a.width / 2 : Math.min(w, h) * 0.2;
  const wide = window.matchMedia("(min-width: 1024px)").matches;

  ctx.strokeStyle = COLORS.grid;
  ctx.lineWidth = 1;
  for (let x = 60; x < w; x += 120) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
  }
  for (let y = 60; y < h; y += 120) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
  }

  const shoals = [
    [cx, cy, island * 2.6],
    [w * 0.08, h * 1.05, Math.min(w, h) * 0.55],
  ];
  ctx.strokeStyle = COLORS.contour;
  ctx.lineWidth = 1.2;
  shoals.forEach(([sx, sy, size], si) => {
    const amp = [];
    const phase = [];
    for (let k = 0; k < 5; k++) {
      amp.push(0.04 + (rnd() * 0.09) / (k + 1));
      phase.push(rnd() * Math.PI * 2);
    }
    const inner = si === 0 ? island * 1.08 : 0;
    for (let level = 1; level <= 7; level++) {
      const radius = inner + (size - inner) * (level / 7);
      ctx.beginPath();
      for (let i = 0; i <= 180; i++) {
        const t = (i / 180) * Math.PI * 2;
        let m = 1;
        for (let k = 0; k < 5; k++) m += amp[k] * Math.sin((k + 2) * t + phase[k] + level * 0.35);
        const px = sx + Math.cos(t) * radius * m * 1.2;
        const py = sy + Math.sin(t) * radius * m * 0.85;
        if (i) ctx.lineTo(px, py);
        else ctx.moveTo(px, py);
      }
      ctx.closePath();
      ctx.stroke();
    }
  });

  const fx = cx - island * 0.92;
  const fy = cy + island * 0.62;

  ctx.fillStyle = COLORS.sounding;
  ctx.font = "italic 12px Georgia, 'Times New Roman', serif";
  for (let s = 0; s < (wide ? 30 : 14); s++) {
    const sx = rnd() * w;
    const sy = 16 + rnd() * (h - 32);
    const depth = String(Math.round(4 + rnd() * 38));
    const nearIsland = Math.hypot(sx - cx, sy - cy) < island * 1.3;
    const nearFix = sx > fx - 150 && sx < fx + 30 && sy > fy - 30 && sy < fy + 45;
    if (nearIsland || nearFix) continue;
    ctx.fillText(depth, sx, sy);
  }
  ctx.strokeStyle = COLORS.course;
  ctx.lineWidth = 1.5;
  ctx.setLineDash([7, 6]);
  ctx.beginPath();
  ctx.moveTo(wide ? w * 0.05 : -10, h - 12);
  ctx.lineTo(fx - island * 0.6, fy + island * 0.15);
  ctx.lineTo(fx, fy);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.lineWidth = 2;
  ctx.beginPath(); ctx.arc(fx, fy, 12, 0, Math.PI * 2); ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(fx - 20, fy); ctx.lineTo(fx + 20, fy);
  ctx.moveTo(fx, fy - 20); ctx.lineTo(fx, fy + 20);
  ctx.stroke();
  ctx.fillStyle = COLORS.course;
  ctx.beginPath(); ctx.arc(fx, fy, 3, 0, Math.PI * 2); ctx.fill();

  if (wide) {
    ctx.font = "500 12px ui-monospace, Consolas, monospace";
    ctx.textAlign = "right";
    ctx.fillText("51°20′N 12°22′E", fx - 18, fy + 30);
  }
};

const HeroChart = ({ anchorRef }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let frame = 0;
    const redraw = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => draw(canvas, anchorRef?.current));
    };
    const observer = new ResizeObserver(redraw);
    observer.observe(canvas);
    if (anchorRef?.current) observer.observe(anchorRef.current);

    let dprQuery;
    const watchDpr = () => {
      dprQuery?.removeEventListener("change", onDprChange);
      dprQuery = window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`);
      dprQuery.addEventListener("change", onDprChange);
    };
    const onDprChange = () => {
      watchDpr();
      redraw();
    };
    watchDpr();

    redraw();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      dprQuery?.removeEventListener("change", onDprChange);
    };
  }, [anchorRef]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_100%)]"
    />
  );
};

export default HeroChart;
