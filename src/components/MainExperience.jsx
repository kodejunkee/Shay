import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import SceneHero from './SceneHero';
import SceneCards from './SceneCards';
import SceneGallery from './SceneGallery';
import SceneLetter from './SceneLetter';
import SceneWishes from './SceneWishes';
import SceneEnding from './SceneEnding';

export default function MainExperience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <motion.div 
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      style={{
        width: '100%',
        position: 'relative'
      }}
    >
      {/* Background container that can morph based on scroll */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'linear-gradient(to bottom, var(--color-rich-black), var(--color-midnight-purple))',
          zIndex: -1
        }}
      />
      
      <SceneHero />
      <SceneCards />
      <SceneGallery />
      <SceneLetter />
      <SceneWishes />
      <SceneEnding />
      
    </motion.div>
  );
}
