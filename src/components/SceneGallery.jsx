import { motion } from 'framer-motion';

const photos = [
  { src: '/assets/photos/photo1.jpg', caption: 'One of my favorite smiles.' },
  { src: '/assets/photos/photo2.jpg', caption: 'A little reminder of how beautiful you are.' },
  { src: '/assets/photos/photo3.jpg', caption: 'Your light touches everyone around you.' },
  { src: '/assets/photos/photo4.jpg', caption: 'Effortless grace in every moment.' },
  { src: '/assets/photos/photo5.jpg', caption: 'Simply you, and that is everything.' }
];

export default function SceneGallery() {
  return (
    <section style={{ width: '100%', padding: '10rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12rem' }}>
      {photos.map((photo, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 100, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
          style={{ 
            width: '100%', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            padding: '2rem' 
          }}
        >
          <div style={{ position: 'relative', width: '100%', maxWidth: '600px', aspectRatio: '3/4', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.6)' }}>
            <img src={photo.src} alt={`Gallery ${index}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: false }}
            style={{ marginTop: '3rem', fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', fontStyle: 'italic', color: 'rgba(255,255,255,0.9)', letterSpacing: '0.05em', textAlign: 'center' }}
          >
            {photo.caption}
          </motion.p>
        </motion.div>
      ))}
    </section>
  );
}
