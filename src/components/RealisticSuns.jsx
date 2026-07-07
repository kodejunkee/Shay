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

// Removed unused suns based on user selection
