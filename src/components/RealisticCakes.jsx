import { motion } from 'framer-motion';

// --- Sparkle and Sprinkle helpers ---
function Sparkle({ cx, cy, s, delay }) {
  const pathData = `M ${cx} ${cy - s} Q ${cx} ${cy} ${cx + s} ${cy} Q ${cx} ${cy} ${cx} ${cy + s} Q ${cx} ${cy} ${cx - s} ${cy} Q ${cx} ${cy} ${cx} ${cy - s} Z`;
  return (
    <motion.path
      d={pathData}
      fill="var(--color-warm-gold)"
      stroke="none"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: [0.8, 1.2, 0.8],
        opacity: [0.3, 1, 0.3]
      }}
      transition={{
        scale: { duration: 2, repeat: Infinity, delay: delay },
        opacity: { duration: 2, repeat: Infinity, delay: delay }
      }}
      style={{ filter: 'drop-shadow(0 0 4px var(--color-warm-gold))' }}
    />
  );
}

function SprinkleDot({ cx, cy, r, delay }) {
  return (
    <motion.circle
      cx={cx}
      cy={cy}
      r={r}
      fill="var(--color-soft-white)"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: [0.8, 1.2, 0.8],
        opacity: [0.2, 0.8, 0.2]
      }}
      transition={{
        scale: { duration: 2.5, repeat: Infinity, delay: delay },
        opacity: { duration: 2.5, repeat: Infinity, delay: delay }
      }}
    />
  );
}

// --- Locked-In Cake Component (Base + Sparkles + Base Wave Pattern) ---
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
            scale: { duration: 0.1, delay: 3.5 },
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

        {/* --- DECORATIONS: Sparkles & Sprinkles (Option 1) --- */}
        <Sparkle cx={12} cy={25} s={3.5} delay={4.0} />
        <Sparkle cx={88} cy={35} s={4.5} delay={4.3} />
        <Sparkle cx={78} cy={12} s={2.5} delay={4.6} />
        <SprinkleDot cx={18} cy={48} r={1.2} delay={4.1} />
        <SprinkleDot cx={84} cy={60} r={1.2} delay={4.4} />
        <SprinkleDot cx={28} cy={16} r={1.0} delay={4.7} />

        {/* --- DECORATIONS: Base Pattern (Option 3) --- */}
        <motion.path 
          d="M 12 65 Q 20 60 30 65 Q 40 70 50 65 Q 60 60 70 65 Q 80 70 88 65" 
          fill="none" 
          stroke="var(--color-warm-gold)" 
          strokeWidth="1.2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 2.1 }}
        />
        <motion.path 
          d="M 12 72 Q 20 67 30 72 Q 40 77 50 72 Q 60 67 70 72 Q 80 77 88 72" 
          fill="none" 
          stroke="var(--color-warm-gold)" 
          strokeWidth="1.2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 2.4 }}
        />
      </svg>
    </div>
  );
}
