import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const CinematicReel = ({
  frames,
  activeIndex,
  autoplay = true,
  interval = 3200,
  className = '',
  imageClassName = '',
  overlayClassName = '',
  alt = '',
  loading = 'lazy'
}) => {
  const [internalIndex, setInternalIndex] = useState(0);
  const index = typeof activeIndex === 'number' ? activeIndex : internalIndex;

  useEffect(() => {
    if (!autoplay || typeof activeIndex === 'number' || frames.length <= 1) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setInternalIndex((current) => (current + 1) % frames.length);
    }, interval);

    return () => window.clearInterval(timer);
  }, [activeIndex, autoplay, frames.length, interval]);

  const safeFrame = frames[index % frames.length];

  return (
    <div className={className}>
      <AnimatePresence mode="wait">
        <motion.img
          key={safeFrame.src}
          src={safeFrame.src}
          alt={alt || safeFrame.alt}
          className={imageClassName}
          loading={loading}
          decoding="async"
          initial={{ opacity: 0, scale: 1.12 }}
          animate={{ opacity: 1, scale: 1.02 }}
          exit={{ opacity: 0, scale: 1.18 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
        />
      </AnimatePresence>
      {overlayClassName ? <div className={overlayClassName}></div> : null}
    </div>
  );
};

export default CinematicReel;
