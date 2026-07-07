import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function SceneHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const yText = useTransform(scrollYProgress, [0, 0.5], ["0%", "50%"]);

  return (
    <div ref={ref} className="section-container" style={{ perspective: '1000px' }}>
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          y: yBg,
          backgroundImage: `url(${import.meta.env.BASE_URL}assets/photos/hero.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.5,
          zIndex: 0
        }}
      />
      {/* Light Rays */}
      <div 
        style={{
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: 'radial-gradient(circle at 50% 0%, rgba(255,209,102,0.15) 0%, transparent 60%)',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />
      
      <motion.div 
        style={{ zIndex: 2, y: yText, opacity: opacityText, textAlign: 'center' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 2, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-gradient-gold glow-gold"
          style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', letterSpacing: '0.05em' }}
        >
          Happy birthday, Shay.
        </motion.h1>
      </motion.div>

      {/* Custom Scroll Indicator */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '8%',
          left: '50%',
          x: '-50%',
          zIndex: 2,
          opacity: opacityText,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 2.5 }}
      >
        <span style={{ fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '5px' }}>
          Scroll
        </span>
        
        {/* Animated Chevrons */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {[0, 1, 2].map((i) => (
            <motion.svg 
              key={i}
              width="24" 
              height="14" 
              viewBox="0 0 24 14" 
              style={{
                filter: 'drop-shadow(0 0 8px var(--color-warm-gold))',
                marginTop: i > 0 ? '-6px' : '0' // Overlap them slightly like the GIF
              }}
              animate={{ 
                opacity: [0.1, 1, 0.1]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2, // Stagger the light up effect
                ease: "easeInOut"
              }}
            >
              <path 
                d="M 2 2 L 12 10 L 22 2" 
                fill="transparent" 
                stroke="var(--color-warm-gold)" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
            </motion.svg>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
