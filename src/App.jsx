import { useState, useEffect } from 'react';
import LoadingScene from './components/LoadingScene';
import InvitationScene from './components/InvitationScene';
import MainExperience from './components/MainExperience';
import MusicPlayer from './components/MusicPlayer';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [appState, setAppState] = useState('loading'); // loading, invitation, experience
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMusicVisible, setIsMusicVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAppState('invitation');
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenGift = () => {
    setAppState('experience');
    setIsPlaying(true);
    setIsMusicVisible(true);
  };
  useEffect(() => {
    if (appState === 'experience') {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }, [appState]);

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
      <AnimatePresence mode="wait">
        {appState === 'loading' && <LoadingScene key="loading" />}
        {appState === 'invitation' && <InvitationScene key="invitation" onOpenGift={handleOpenGift} />}
      </AnimatePresence>
      
      {appState === 'experience' && <MainExperience key="experience" />}
      
      {isMusicVisible && (
        <MusicPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      )}
    </div>
  );
}

export default App;
