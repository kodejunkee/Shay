import { motion } from 'framer-motion';

// --- 1. The Minimalist Neon/Line-Art Cake (SVG + Framer Motion) ---
export function CakeNeonSVG() {
  return (
    <div style={{ position: 'relative', width: '120px', height: '120px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <svg width="100%" height="100%" viewBox="0 0 100 100" style={{ filter: 'drop-shadow(0 0 8px rgba(255,209,102,0.6))', overflow: 'visible' }}>
        {/* Base Layer */}
        <motion.path 
          d="M 15 80 L 85 80 Q 90 80 90 75 L 90 60 Q 90 55 85 55 L 15 55 Q 10 55 10 60 L 10 75 Q 10 80 15 80 Z" 
          fill="transparent" 
          stroke="var(--color-warm-gold)" 
          strokeWidth="2" 
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        {/* Top Layer */}
        <motion.path 
          d="M 25 55 L 75 55 Q 80 55 80 50 L 80 35 Q 80 30 75 30 L 25 30 Q 20 30 20 35 L 20 50 Q 20 55 25 55 Z" 
          fill="transparent" 
          stroke="var(--color-warm-gold)" 
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
        />
        
        {/* Frosting Drips */}
        <motion.path
          d="M 20 30 Q 25 45 30 30 Q 35 40 40 30 Q 45 45 50 30 Q 55 35 60 30 Q 65 45 70 30 Q 75 40 80 30"
          fill="transparent"
          stroke="var(--color-warm-gold)"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        />

        {/* Candle */}
        <motion.rect 
          x="47" y="15" width="6" height="15" rx="1" 
          fill="transparent" 
          stroke="var(--color-soft-white)" 
          strokeWidth="1.5" 
          initial={{ scaleY: 0, opacity: 0, originY: 1 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        />
        
        {/* Flame */}
        <motion.path 
          d="M 50 2 C 54 8 54 13 50 14 C 46 13 46 8 50 2 Z"
          fill="#ff7a00"
          initial={{ scale: 0, opacity: 0, transformOrigin: 'center bottom' }}
          animate={{ 
            scale: [0.8, 1.1, 0.9, 1.2, 0.8],
            opacity: [0.8, 1, 0.7, 1, 0.8] 
          }}
          transition={{ 
            scale: { duration: 0.1, delay: 3.5 }, // Initial pop
            default: {
              duration: 2, 
              repeat: Infinity, 
              repeatType: 'mirror', 
              ease: "easeInOut",
              delay: 3.6
            }
          }}
          style={{ filter: 'drop-shadow(0 0 5px #ff7a00) drop-shadow(0 0 10px #ff2a00)' }}
        />
      </svg>
    </div>
  );
}


