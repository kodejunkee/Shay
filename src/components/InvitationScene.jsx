import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

export default function InvitationScene({ onOpenGift }) {
  const [step, setStep] = useState(0);

  const sentences = [
    "This page belongs to someone special.",
    "It was made for one person.",
    "And today...",
    "That person is you."
  ];

  useEffect(() => {
    if (step < sentences.length) {
      const timer = setTimeout(() => {
        setStep(step + 1);
      }, 3500); // each sentence stays for a bit
      return () => clearTimeout(timer);
    }
  }, [step]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)', transition: { duration: 2 } }}
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'var(--color-rich-black)',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 90,
        textAlign: 'center',
        padding: '2rem'
      }}
    >
      <div style={{ position: 'relative', zIndex: 2, height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {step < sentences.length ? (
          <motion.p
            key={step}
            initial={{ opacity: 0, y: 10, filter: 'blur(5px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -10, filter: 'blur(5px)' }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              width: '100%',
              fontSize: '1.5rem',
              fontWeight: 300,
              color: 'var(--color-soft-white)'
            }}
          >
            {sentences[step]}
          </motion.p>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: 'easeOut' }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '3rem'
            }}
          >
            <h1
              className="text-gradient-aurora"
              style={{
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                letterSpacing: '0.05em',
                lineHeight: 1.2
              }}
            >
              Happy Birthday, Sharon. 🎂
            </h1>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255,209,102,0.3)' }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenGift}
              className="glass-panel"
              style={{
                padding: '1.2rem 2.5rem',
                fontSize: '1.1rem',
                borderRadius: '30px',
                border: '1px solid rgba(255,209,102,0.4)',
                color: 'var(--color-warm-gold)',
                cursor: 'pointer',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                background: 'rgba(255,209,102,0.05)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 0 20px rgba(255,209,102,0.15)',
                transition: 'all 0.3s ease'
              }}
            >
              <Sparkles size={18} /> Continue
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* Subtle background glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '70vw',
          height: '70vw',
          background: 'radial-gradient(circle, var(--color-midnight-purple) 0%, transparent 60%)',
          filter: 'blur(80px)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />
    </motion.div>
  );
}
