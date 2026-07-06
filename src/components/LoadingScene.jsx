import { motion } from 'framer-motion';

export default function LoadingScene() {
  return (
    <motion.div
      exit={{ opacity: 0, transition: { duration: 1.5, ease: 'easeInOut' } }}
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'var(--color-rich-black)',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 100,
      }}
    >
      <motion.p
        initial={{ opacity: 0, filter: 'blur(10px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
        className="text-gradient-gold"
        style={{
          fontSize: '1.2rem',
          letterSpacing: '0.1em',
          fontWeight: 300,
          textAlign: 'center'
        }}
      >
        ✨ Preparing something special...
      </motion.p>
    </motion.div>
  );
}
