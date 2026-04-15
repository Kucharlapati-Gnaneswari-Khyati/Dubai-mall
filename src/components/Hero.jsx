import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, PlayCircle } from 'lucide-react';
import CinematicReel from './CinematicReel';
import './Hero.css';

const heroFrames = [
  {
    src: 'https://images.unsplash.com/photo-1735320864781-4671fecd6468?auto=format&fit=crop&w=1800&q=80',
    alt: 'Dubai skyline at night'
  },
  {
    src: 'https://images.unsplash.com/photo-1758448501002-8c7bb7a7d9ff?auto=format&fit=crop&w=1800&q=80',
    alt: 'Luxury shopping mall interior'
  },
  {
    src: 'https://images.unsplash.com/photo-1742002661612-771125d0c050?auto=format&fit=crop&w=1800&q=80',
    alt: 'Rooftop restaurant lounge at night'
  },
  {
    src: 'https://images.unsplash.com/photo-1722590216145-e3c6c4d82b58?auto=format&fit=crop&w=1800&q=80',
    alt: 'Aquarium tunnel experience'
  }
];

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 180]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const contentY = useTransform(scrollY, [0, 500], [0, 80]);
  const eyebrowOpacity = useTransform(scrollY, [0, 300], [1, 0.45]);

  return (
    <section className="hero-section" id="experience">
      <div className="hero-background">
        <motion.div style={{ y, scale: 1.08 }} className="hero-reel-shell">
          <CinematicReel
            frames={heroFrames}
            className="hero-reel"
            imageClassName="hero-video"
            alt="Dubai Mall cinematic montage"
            loading="eager"
          />
        </motion.div>
        <div className="hero-overlay"></div>
        <div className="hero-vignette"></div>
      </div>
      
      <motion.div 
        className="hero-content container flex-center"
        style={{ y: contentY }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
      >
        <div className="hero-text-wrapper">
          <motion.h4 
            className="hero-subtitle text-accent"
            style={{ opacity: eyebrowOpacity }}
            initial={{ opacity: 0, letterSpacing: '0px' }}
            animate={{ opacity: 1, letterSpacing: '8px' }}
            transition={{ duration: 1.5, delay: 0.8 }}
          >
            The World&apos;s Most Visited Retail Destination
          </motion.h4>
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            DUBAI MALL
          </motion.h1>
          
          <motion.div
            className="hero-highlights"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            <div className="hero-highlight">
              <span className="hero-highlight-label">Leasing</span>
              <strong>Flagship, luxury, mid-tier, and pop-up opportunities at unmatched scale</strong>
            </div>
            <div className="hero-highlight">
              <span className="hero-highlight-label">Sponsorship</span>
              <strong>High-dwell environments for activations, naming rights, and brand theatre</strong>
            </div>
            <div className="hero-highlight">
              <span className="hero-highlight-label">Events</span>
              <strong>Concerts, launches, showcases, and venue-led programming under one roof</strong>
            </div>
          </motion.div>
          
        </div>
      </motion.div>
<br/>
      <motion.div 
        className="scroll-indicator"
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span>Discover</span>
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;
