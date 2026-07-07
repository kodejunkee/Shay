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
              speed: 0.6,
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

// --- 2. Breathing Aurora Gradients ---
export function EffectAurora() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 1, overflow: 'hidden', pointerEvents: 'none' }}>
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: ['-10%', '10%', '-10%'],
          y: ['-10%', '10%', '-10%'],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: 'absolute',
          top: '-20%',
          left: '-20%',
          width: '140%',
          height: '140%',
          background: 'radial-gradient(circle at center, rgba(75,46,131,0.6) 0%, transparent 60%)',
          filter: 'blur(100px)',
        }}
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
          x: ['10%', '-10%', '10%'],
          y: ['10%', '-10%', '10%'],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: 'absolute',
          top: '20%',
          right: '-20%',
          width: '120%',
          height: '120%',
          background: 'radial-gradient(circle at center, rgba(255,140,66,0.2) 0%, transparent 60%)',
          filter: 'blur(100px)',
        }}
      />
    </div>
  );
}

// --- 3. Interactive Stardust ---
export function EffectStardust() {
  return (
    <ParticlesProvider init={loadSlim}>
      <Particles
        id="tsparticles-stardust"
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          particles: {
            color: { value: "#ffffff" },
            links: { enable: false },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: true,
              speed: 0.2,
              straight: false,
            },
            number: { density: { enable: true, area: 800 }, value: 100 },
            opacity: { value: { min: 0.1, max: 0.5 } },
            shape: { type: "circle" },
            size: { value: { min: 0.5, max: 1.5 } },
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
          pointerEvents: "auto", // Needs auto for hover repulse to work
        }}
      />
    </ParticlesProvider>
  );
}

// --- 4. Cinematic Light Leaks ---
export function EffectLightLeaks() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 1, overflow: 'hidden', pointerEvents: 'none' }}>
      {/* Golden beam sweeping from left to right */}
      <motion.div
        animate={{
          x: ['-200%', '200%'],
          opacity: [0, 0.3, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '50vw',
          height: '100vh',
          background: 'linear-gradient(to right, transparent, rgba(255,209,102,0.4), transparent)',
          transform: 'skewX(-20deg)',
          filter: 'blur(50px)',
        }}
      />
      
      {/* Warm orange beam sweeping diagonally */}
      <motion.div
        animate={{
          y: ['-200%', '200%'],
          opacity: [0, 0.2, 0],
        }}
        transition={{ duration: 15, delay: 5, repeat: Infinity, ease: "linear" }}
        style={{
          position: 'absolute',
          top: 0,
          left: '30%',
          width: '60vw',
          height: '100vh',
          background: 'linear-gradient(to bottom, transparent, rgba(255,140,66,0.3), transparent)',
          transform: 'skewY(-30deg)',
          filter: 'blur(80px)',
        }}
      />
    </div>
  );
}
