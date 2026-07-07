import { useState } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion } from "framer-motion";

// --- 1. Floating Golden Fireflies ---
export function EffectFireflies() {
  return (
    <ParticlesProvider init={loadSlim}>
      <Particles
        id="tsparticles-fireflies"
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          interactivity: { events: { onHover: { enable: false } } },
          particles: {
            color: { value: ["#FFD166", "#FFB703", "#FF9F1C"] }, // Range of bright golds
            move: {
              direction: "top",
              enable: true,
              outModes: { default: "out" },
              random: true,
              speed: 0.8,
              straight: false,
            },
            number: { density: { enable: true, area: 800 }, value: 30 },
            opacity: {
              value: { min: 0.2, max: 0.8 },
              animation: { enable: true, speed: 1, sync: false },
            },
            shape: { type: "circle" },
            size: { value: { min: 2, max: 5 } },
          },
          detectRetina: true,
        }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          pointerEvents: "none",
          filter: "drop-shadow(0 0 6px rgba(255, 209, 102, 0.8)) drop-shadow(0 0 12px rgba(255, 183, 3, 0.6))",
        }}
      />
    </ParticlesProvider>
  );
}

// Removed unused animations based on user selection
