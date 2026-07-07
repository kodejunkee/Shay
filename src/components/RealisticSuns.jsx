import { motion } from 'framer-motion';

// --- 1. Optical Lens Flare Sun ---
export function SunLensFlare() {
  return (
    <div style={{ position: 'relative', width: '200px', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {/* Main outer glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3, delay: 3 }}
        style={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(255, 209, 102, 0.4) 0%, rgba(255, 140, 66, 0.1) 40%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />
      
      {/* Horizontal light streak */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 2, delay: 3.5, ease: "easeOut" }}
        style={{
          position: 'absolute',
          width: '600px',
          height: '4px',
          background: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.8), rgba(255, 215, 0, 0.8), transparent)',
          filter: 'blur(2px)',
          transform: 'rotate(-15deg)',
        }}
      />

      {/* Vertical light streak */}
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        whileInView={{ opacity: 0.6, scaleY: 1 }}
        transition={{ duration: 2, delay: 3.8, ease: "easeOut" }}
        style={{
          position: 'absolute',
          width: '2px',
          height: '300px',
          background: 'linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.6), rgba(255, 215, 0, 0.6), transparent)',
          filter: 'blur(1px)',
          transform: 'rotate(-15deg)',
        }}
      />

      {/* Intense Core */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 3.2 }}
        style={{
          position: 'absolute',
          width: '60px',
          height: '60px',
          background: '#FFFFFF',
          borderRadius: '50%',
          boxShadow: '0 0 40px 10px #FFFFFF, 0 0 80px 30px #FFD166, 0 0 120px 60px #FF8C42',
        }}
      />
      
      {/* Lens Flare Artifacts */}
      <motion.div
        initial={{ opacity: 0, x: 0, y: 0 }}
        whileInView={{ opacity: 0.4, x: -80, y: 50 }}
        transition={{ duration: 2, delay: 4 }}
        style={{
          position: 'absolute',
          width: '40px',
          height: '40px',
          border: '1px solid rgba(255, 209, 102, 0.3)',
          borderRadius: '50%',
        }}
      />
      <motion.div
        initial={{ opacity: 0, x: 0, y: 0 }}
        whileInView={{ opacity: 0.2, x: 120, y: -70 }}
        transition={{ duration: 2, delay: 4.2 }}
        style={{
          position: 'absolute',
          width: '80px',
          height: '80px',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 60%)',
          borderRadius: '50%',
        }}
      />
    </div>
  );
}

// --- 2. Pulsing Solar Corona ---
export function SunCorona() {
  return (
    <div style={{ position: 'relative', width: '150px', height: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 3 }}
        style={{
          width: '100px',
          height: '100px',
          background: 'radial-gradient(circle at 30% 30%, #FFFFFF 0%, #FFD166 40%, #FF8C42 80%)',
          borderRadius: '50%',
          boxShadow: 'inset -10px -10px 20px rgba(0,0,0,0.2), 0 0 30px #FFD166, 0 0 60px #FF8C42, 0 0 100px rgba(255, 140, 66, 0.5)',
        }}
        animate={{
          boxShadow: [
            'inset -10px -10px 20px rgba(0,0,0,0.2), 0 0 30px #FFD166, 0 0 60px #FF8C42, 0 0 100px rgba(255, 140, 66, 0.5)',
            'inset -10px -10px 20px rgba(0,0,0,0.2), 0 0 40px #FFFFFF, 0 0 80px #FFD166, 0 0 140px rgba(255, 140, 66, 0.8)',
            'inset -10px -10px 20px rgba(0,0,0,0.2), 0 0 30px #FFD166, 0 0 60px #FF8C42, 0 0 100px rgba(255, 140, 66, 0.5)',
          ]
        }}
        // The pulsing animation starts after the initial reveal
        transition={{
          boxShadow: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }
        }}
      />
    </div>
  );
}

// --- 3. Solar Plasma (3D / Advanced CSS Simulation) ---
// Since we don't have Three.js installed, we will build a hyper-realistic CSS plasma star
// using layered animated SVG turbulence filters and moving gradients.
export function SunPlasma() {
  return (
    <div style={{ position: 'relative', width: '200px', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      
      {/* Hidden SVG Filter for Plasma Noise */}
      <svg width="0" height="0">
        <filter id="plasma-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="3" result="noise" />
          <feColorMatrix type="matrix" values="1 0 0 0 0  0 0.5 0 0 0  0 0 0 0 0  0 0 0 3 -1" in="noise" result="coloredNoise" />
          <feComposite operator="in" in="coloredNoise" in2="SourceGraphic" result="composite" />
          <feBlend mode="screen" in="composite" in2="SourceGraphic" />
        </filter>
      </svg>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3, delay: 3 }}
        style={{
          position: 'absolute',
          width: '140px',
          height: '140px',
          borderRadius: '50%',
          background: '#ff2a00',
          boxShadow: '0 0 40px #ff2a00, 0 0 80px #ff7a00, 0 0 120px #ffb300',
        }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            background: 'radial-gradient(circle at 40% 40%, #ffb300 0%, #ff7a00 50%, #ff2a00 100%)',
            filter: 'url(#plasma-noise)',
            opacity: 0.9,
          }}
        />
      </motion.div>
    </div>
  );
}
