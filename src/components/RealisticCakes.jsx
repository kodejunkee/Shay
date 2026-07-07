import { motion } from 'framer-motion';

// --- 1. The Minimalist Neon/Line-Art Cake (SVG + Framer Motion) ---
export function CakeNeonSVG() {
  return (
    <div style={{ position: 'relative', width: '120px', height: '120px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <svg width="100%" height="100%" viewBox="0 0 100 100" style={{ filter: 'drop-shadow(0 0 8px rgba(255,209,102,0.6))' }}>
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
          initial={{ height: 0, y: 30, opacity: 0 }}
          animate={{ height: 15, y: 15, opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        />
        
        {/* Flame */}
        <motion.path 
          d="M 50 2 C 54 8 54 13 50 14 C 46 13 46 8 50 2 Z"
          fill="var(--color-neon-orange)"
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
          style={{ filter: 'drop-shadow(0 0 5px var(--color-neon-orange)) drop-shadow(0 0 10px #ff2a00)' }}
        />
      </svg>
    </div>
  );
}

// --- 2. The Pure CSS Cake (Stylized & Abstract) ---
export function CakeCSS() {
  return (
    <div style={{ position: 'relative', width: '150px', height: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center' }}>
      {/* Flame */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: [0.9, 1.1, 1],
          opacity: [0.8, 1, 0.9]
        }}
        transition={{
          scale: { duration: 0.2, delay: 1.5 },
          default: { duration: 0.5, repeat: Infinity, repeatType: 'mirror' }
        }}
        style={{
          width: '16px',
          height: '16px',
          background: 'radial-gradient(circle at 30% 70%, #fff, #FFD166, #ff7a00)',
          borderRadius: '50% 0 50% 50%',
          transform: 'rotate(45deg)',
          marginBottom: '2px',
          boxShadow: '0 0 15px #FFD166, 0 0 30px #ff7a00',
          zIndex: 3
        }}
      />
      
      {/* Candle */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: '30px', opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        style={{
          width: '12px',
          background: 'linear-gradient(to right, #eee, #ddd)',
          borderRadius: '2px 2px 0 0',
          zIndex: 2
        }}
      />
      
      {/* Top Tier */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{
          width: '80px',
          height: '30px',
          background: 'linear-gradient(135deg, rgba(255,209,102,0.8), rgba(255,140,66,0.8))',
          borderRadius: '10px 10px 0 0',
          position: 'relative',
          zIndex: 1,
          boxShadow: 'inset 0 4px 10px rgba(255,255,255,0.4), 0 -5px 15px rgba(255,209,102,0.3)'
        }}
      >
        {/* Frosting drips */}
        <div style={{ position: 'absolute', bottom: '-5px', left: '10px', width: '15px', height: '15px', background: 'rgba(255,209,102,0.9)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: '-8px', left: '35px', width: '12px', height: '20px', background: 'rgba(255,209,102,0.9)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: '-4px', left: '60px', width: '10px', height: '10px', background: 'rgba(255,209,102,0.9)', borderRadius: '50%' }} />
      </motion.div>
      
      {/* Base Tier */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          width: '120px',
          height: '40px',
          background: 'linear-gradient(135deg, rgba(255,183,3,0.9), rgba(255,140,66,0.9))',
          borderRadius: '10px',
          position: 'relative',
          zIndex: 0,
          boxShadow: 'inset 0 4px 10px rgba(255,255,255,0.3), 0 10px 30px rgba(255,140,66,0.2)'
        }}
      />
    </div>
  );
}

// --- 3. An AI-Generated 3D Render (Photorealistic) ---
export function Cake3DRender() {
  return (
    <div style={{ position: 'relative', width: '200px', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 2, ease: "easeOut" }}
        style={{
          width: '100%',
          height: '100%',
          backgroundImage: 'url(./luxurious_birthday_cake.jpg)',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          mixBlendMode: 'screen', // This removes the dark background of the image to blend it with our scene
          filter: 'drop-shadow(0 0 20px rgba(255, 209, 102, 0.4))'
        }}
      />
    </div>
  );
}
