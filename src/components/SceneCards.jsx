import { motion } from 'framer-motion';
import { useState } from 'react';
import { cardsData } from '../data/cardsData';

function Card({ card, index }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      style={{
        width: '100%',
        maxWidth: '320px',
        height: '240px',
        perspective: '1000px',
        cursor: 'pointer',
      }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Front */}
        <div
          className="glass-panel"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '16px',
            padding: '2rem',
            textAlign: 'center'
          }}
        >
          <h3 style={{ fontSize: '1.5rem', color: 'var(--color-warm-gold)' }}>✨ {card.title}</h3>
        </div>
        
        {/* Back */}
        <div
          className="glass-panel-heavy"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '16px',
            padding: '2rem',
            textAlign: 'center',
            transform: 'rotateY(180deg)'
          }}
        >
          <p style={{ fontSize: '1rem', fontStyle: 'italic', color: 'var(--color-soft-white)' }}>
            "{card.text}"
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function SceneCards() {
  return (
    <div className="section-container" style={{ padding: '8rem 2rem', minHeight: 'auto' }}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
          textAlign: 'center',
          marginBottom: '5rem',
          maxWidth: '800px'
        }}
      >
        Some Things That Make You... <span className="text-gradient-gold">You</span>
      </motion.h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2.5rem',
        width: '100%',
        maxWidth: '1100px',
        justifyItems: 'center'
      }}>
        {cardsData.map((card, idx) => (
          <Card key={idx} card={card} index={idx} />
        ))}
      </div>
    </div>
  );
}
