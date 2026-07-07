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
    </div>
  );
}
