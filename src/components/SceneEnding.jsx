import { motion } from 'framer-motion';
import { SunLensFlare } from './RealisticSuns';

export default function SceneEnding() {
  const particles = Array.from({ length: 40 });

  return (
    <div className="section-container" style={{ backgroundColor: 'var(--color-rich-black)', justifyContent: 'center' }}>
      
      <div style={{ position: 'relative', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '2rem' }}>
        {/* Particles Gathering */}
        {particles.map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0, 
              x: (Math.random() - 0.5) * 600, 
              y: (Math.random() - 0.5) * 600,
              scale: 0.5
            }}
            whileInView={{ 
              opacity: [0, 1, 0],
              x: 0,
              y: 0,
              scale: 1
            }}
            transition={{ 
              duration: 3, 
              delay: 0.5 + Math.random() * 1.5,
              ease: "easeInOut"
            }}
            viewport={{ once: true }}
            style={{
              position: 'absolute',
              width: '4px',
              height: '4px',
              backgroundColor: 'var(--color-warm-gold)',
              borderRadius: '50%',
              boxShadow: '0 0 10px var(--color-warm-gold)'
            }}
          />
        ))}

        <SunLensFlare />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 5.5 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center' }}
      >
        <p style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--color-soft-white)', marginBottom: '1rem', letterSpacing: '0.05em' }}>
          Happy 20th Birthday,<br/>
          <span className="text-gradient-gold">Sunshine.</span>
        </p>
        
        <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.1em', marginTop: '3rem' }}>
          Thank you for simply being you.
        </p>

        <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.3)', marginTop: '4rem', fontStyle: 'italic', letterSpacing: '0.2em' }}>
          — Josh
        </p>
      </motion.div>
    </div>
  );
}
