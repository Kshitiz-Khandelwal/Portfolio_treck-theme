"use client";

import React, { useEffect, useRef } from "react";

export function BackgroundEffects() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    // Particle nodes for interconnected network matrix
    const count = Math.min(Math.floor((width * height) / 14000), 75);
    const nodes = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      radius: Math.random() * 2 + 1,
      baseAlpha: Math.random() * 0.5 + 0.2,
      phase: Math.random() * Math.PI * 2,
      color: Math.random() > 0.5 ? "#E25543" : Math.random() > 0.25 ? "#5B8C69" : "#D48C38",
    }));

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.015;

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // 1. Draw glowing ambient mouse halo
      const radialGradient = ctx.createRadialGradient(mouse.x, mouse.y, 10, mouse.x, mouse.y, 250);
      radialGradient.addColorStop(0, "rgba(226, 85, 67, 0.08)");
      radialGradient.addColorStop(0.5, "rgba(91, 140, 105, 0.04)");
      radialGradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = radialGradient;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 250, 0, Math.PI * 2);
      ctx.fill();

      // 2. Draw dynamic kinetic connection web between nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.2;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(245, 225, 205, ${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      // 3. Update & render node particles with gentle sine wave float
      nodes.forEach((n) => {
        n.x += n.vx + Math.sin(time + n.phase) * 0.2;
        n.y += n.vy + Math.cos(time + n.phase) * 0.2;

        if (n.x < 0) n.x = width;
        if (n.x > width) n.x = 0;
        if (n.y < 0) n.y = height;
        if (n.y > height) n.y = 0;

        // Interaction distance to mouse
        const mdx = mouse.x - n.x;
        const mdy = mouse.y - n.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

        let currentRadius = n.radius;
        if (mdist < 140) {
          currentRadius += (140 - mdist) * 0.03;
          // Connect node to mouse cursor
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(226, 85, 67, ${(1 - mdist / 140) * 0.25})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(n.x, n.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.globalAlpha = n.baseAlpha + Math.sin(time * 2 + n.phase) * 0.2;
        ctx.shadowColor = n.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Interactive Glowing Mesh Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-85" />

      {/* Dynamic Ambient Glowing Gradient Orbs */}
      <div
        className="absolute top-10 left-1/4 w-[600px] h-[500px] bg-[#E25543]/12 rounded-full blur-[140px] animate-pulse"
        style={{ animationDuration: "8s" }}
      />
      <div
        className="absolute top-1/2 right-10 w-[550px] h-[550px] bg-[#5B8C69]/12 rounded-full blur-[160px] animate-pulse"
        style={{ animationDuration: "12s" }}
      />
      <div
        className="absolute bottom-10 left-10 w-[600px] h-[450px] bg-[#D48C38]/10 rounded-full blur-[150px] animate-pulse"
        style={{ animationDuration: "10s" }}
      />
    </div>
  );
}
