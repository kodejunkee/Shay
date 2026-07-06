import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const letterContent = `Happy Birthday, Shay.

I sat here for quite a while, trying to write the perfect birthday message for you. I wanted to find words that could somehow capture just how wonderful you are.

But the longer I thought, the more I realized something.

There aren't enough words.

No sentence could ever fully describe the warmth you bring into the lives of the people around you, or the quiet way your smile can brighten even the dullest days.

You are kind. Beautiful. Intelligent. Gentle. Thoughtful. Funny. Strong. And somehow, despite all of that, you're still one of the sweetest people I've ever had the privilege of knowing.

Your laughter has a way of making everything feel lighter. Your smile carries a warmth that's impossible to ignore. Your heart is beautiful in ways that words could never truly explain.

Even after writing all of this, it still doesn't feel like enough.

So instead of trying to fit everything I wanted to say into one birthday message, I decided to do something a little different.

I dedicated this small corner of the internet to you.

A place created for one purpose alone: to celebrate you.

Not because today is your birthday, but because the world became a little brighter the day you were born.

As you step into this new chapter, I hope it brings you endless reasons to smile, unforgettable memories, countless opportunities, and all the happiness your heart can hold.

May this year be kind to you. May your dreams continue to grow. May you never lose the light that makes you, you.

And no matter where life takes you, I hope you always remember just how incredibly special you are.

Happy 20th Birthday, Sunshine.

I hope today reminds you of what so many people already know—

The world is a better place with you in it.

Enjoy every moment of your day. You deserve it.`;

function TypewriterText({ text }) {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.substring(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 40); // typing speed
    
    return () => clearInterval(interval);
  }, [text]);

  return (
    <div style={{ whiteSpace: 'pre-wrap', lineHeight: 1.8, fontSize: '1.1rem', color: 'var(--color-rich-black)' }}>
      {displayedText}
    </div>
  );
}

export default function SceneLetter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="section-container" style={{ padding: '6rem 2rem', background: 'linear-gradient(to bottom, transparent, rgba(75, 46, 131, 0.4))' }}>
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="envelope"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.2, filter: 'blur(10px)' }}
            transition={{ duration: 1 }}
            viewport={{ once: true, margin: "-200px" }}
            style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            onClick={() => setIsOpen(true)}
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              style={{
                width: '320px',
                height: '220px',
                backgroundColor: '#EBEBEB',
                borderRadius: '8px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Envelope flap shadow */}
              <div style={{
                position: 'absolute', top: 0, left: 0, width: '0', height: '0',
                borderLeft: '160px solid transparent',
                borderRight: '160px solid transparent',
                borderTop: '110px solid #DCDCDC',
                zIndex: 1
              }} />
              
              {/* Wax Seal */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                style={{
                  width: '56px',
                  height: '56px',
                  backgroundColor: '#9B111E',
                  borderRadius: '50%',
                  zIndex: 2,
                  boxShadow: 'inset 0 0 10px rgba(0,0,0,0.6), 0 4px 10px rgba(0,0,0,0.4)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: '#FFD700',
                  fontSize: '28px',
                  fontFamily: 'var(--font-heading)',
                  marginTop: '-20px'
                }}
              >
                S
              </motion.div>
            </motion.div>
            <p style={{ marginTop: '2rem', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Tap to open</p>
          </motion.div>
        ) : (
          <motion.div
            key="letter"
            initial={{ opacity: 0, y: 100, rotateX: 15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            style={{
              width: '100%',
              maxWidth: '700px',
              backgroundColor: '#FAFAFA',
              padding: 'clamp(2rem, 5vw, 4rem)',
              borderRadius: '4px',
              boxShadow: '0 30px 60px rgba(0,0,0,0.6)',
              transformPerspective: 1000
            }}
          >
            <TypewriterText text={letterContent} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
