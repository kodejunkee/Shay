import { motion } from 'framer-motion';

export default function SceneWishes() {
  const wishes = [
    "May this new year bring you as much happiness as you bring to everyone around you.",
    "May your dreams find you.",
    "May your smile never lose its light."
  ];

  return (
    <div className="section-container" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Aurora Background */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(75, 46, 131, 0.4), rgba(255, 140, 66, 0.2), transparent)',
          filter: 'blur(100px)',
          zIndex: 0,
          animation: 'aurora 10s infinite alternate ease-in-out'
        }}
      />
      
      <div style={{ zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15vh', padding: '10rem 2rem' }}>
        {wishes.map((wish, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.5, delay: 0.3 }}
            viewport={{ once: true, margin: "-20%" }}
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              textAlign: 'center',
              maxWidth: '800px',
              lineHeight: 1.6,
              color: 'var(--color-soft-white)'
            }}
          >
            {wish}
          </motion.p>
        ))}
      </div>
    </div>
  );
}
