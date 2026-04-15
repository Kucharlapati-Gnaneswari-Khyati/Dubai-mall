import React, { useRef, useState } from 'react';
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { Crown, Diamond, Sparkles } from 'lucide-react';
import CinematicReel from './CinematicReel';
import './Retail.css';

const narrativeBeats = [
  {
    time: 0.08,
    label: 'Arrival',
    title: 'Fashion Avenue sets the tone from the first step.',
    desc: 'Grand storefronts, polished interiors, and a calm, elevated pace define the arrival.'
  },
  {
    time: 0.42,
    label: 'Flagships',
    title: 'International houses sit beside sought-after contemporary labels.',
    desc: 'The experience balances landmark boutiques with a broad mix of luxury, beauty, and accessories.'
  },
  {
    time: 0.8,
    label: 'Services',
    title: 'Lounges, concierge touches, and dining complete the commercial mix.',
    desc: 'The environment is designed to increase dwell time, support premium service, and justify stronger brand investment.'
  }
];

const retailTiles = [
  {
    id: 'arrival',
    icon: <Crown size={22} />,
    title: 'Designer Arrival',
    stat: 'Flagship edit',
    description: 'A refined first look at luxury labels, premium storefronts, and signature interior detail.',
    image: 'https://images.unsplash.com/photo-1758448501002-8c7bb7a7d9ff?auto=format&fit=crop&w=1400&q=80'
  },
  {
    id: 'avenue',
    icon: <Diamond size={22} />,
    title: 'Fashion Avenue',
    stat: 'Luxury promenade',
    description: 'Wide walkways, layered lighting, and landmark boutiques create a strong sense of place.',
    image: 'https://images.unsplash.com/photo-1753029111752-f12018752cd3?auto=format&fit=crop&w=1400&q=80'
  },
  {
    id: 'service',
    icon: <Sparkles size={22} />,
    title: 'Elevated Service',
    stat: 'Guest comfort',
    description: 'Premium amenities and nearby dining make the luxury district easy to enjoy for longer.',
    image: 'https://images.unsplash.com/photo-1742002661612-771125d0c050?auto=format&fit=crop&w=1400&q=80'
  }
];

const retailFrames = [
  {
    src: 'https://images.unsplash.com/photo-1758448501002-8c7bb7a7d9ff?auto=format&fit=crop&w=1800&q=80',
    alt: 'Luxury retail avenue'
  },
  {
    src: 'https://images.unsplash.com/photo-1753029111752-f12018752cd3?auto=format&fit=crop&w=1800&q=80',
    alt: 'Dubai skyline glow'
  },
  {
    src: 'https://images.unsplash.com/photo-1753729349067-f317d8a80b9f?auto=format&fit=crop&w=1800&q=80',
    alt: 'Luxury restaurant frontage'
  },
  {
    src: 'https://images.unsplash.com/photo-1742002661612-771125d0c050?auto=format&fit=crop&w=1800&q=80',
    alt: 'Evening lounge experience'
  }
];

const RetailBeat = ({ beat, progress }) => {
  const opacity = useTransform(
    progress,
    [Math.max(beat.time - 0.14, 0), beat.time, Math.min(beat.time + 0.16, 1)],
    [0.28, 1, 0.4]
  );
  const y = useTransform(progress, [Math.max(beat.time - 0.14, 0), beat.time], [26, 0]);

  return (
    <motion.article className="retail-beat" style={{ opacity, y }}>
      <span>{beat.label}</span>
      <h3>{beat.title}</h3>
      <p>{beat.desc}</p>
    </motion.article>
  );
};

const Retail = () => {
  const sectionRef = useRef(null);
  const [activeTile, setActiveTile] = useState(retailTiles[0].id);
  const [scrubIndex, setScrubIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end']
  });

  const reveal = useTransform(scrollYProgress, [0, 0.35, 1], ['14%', '0%', '-8%']);
  const mask = useTransform(scrollYProgress, [0, 0.25, 0.6, 1], ['inset(18% 14% 18% 14% round 32px)', 'inset(0% 0% 0% 0% round 0px)', 'inset(0% 0% 0% 0% round 0px)', 'inset(12% 8% 12% 8% round 32px)']);
  const panelOpacity = useTransform(scrollYProgress, [0.1, 0.28], [0.35, 1]);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const nextIndex = Math.min(retailFrames.length - 1, Math.max(0, Math.floor(latest * retailFrames.length)));
    setScrubIndex(nextIndex);
  });

  return (
    <section className="retail-cinematic-section" ref={sectionRef} id="retail">
      <div className="retail-sticky-frame">
        <div className="retail-stage">
          <motion.div className="retail-video-shell" style={{ y: reveal, clipPath: mask }}>
            <CinematicReel
              frames={retailFrames}
              activeIndex={scrubIndex}
              autoplay={false}
              className="retail-scrub-media"
              imageClassName="retail-scrub-video"
              alt="Fashion Avenue cinematic reveal"
            />
            <div className="retail-video-overlay"></div>
          </motion.div>

          <motion.div className="retail-story-panel" style={{ opacity: panelOpacity }}>
            <span className="retail-story-kicker">Fashion Avenue</span>
            <h2 className="retail-story-title">A luxury district </h2>
            <p className="retail-story-copy">
              Designed to feel calm, grand, and unmistakably Dubai.Discover the mall&apos;s most elevated shopping address, where international fashion, beauty, and hospitality come together in one polished promenade.
            </p>

            
          </motion.div>
        </div>
      </div>

      <div className="retail-preview-band container">
        <div className="retail-preview-header">
          <h3>Inside Fashion Avenue</h3>
          <p>Browse signature moments from the luxury experience.</p>
        </div>

        <div className="retail-preview-grid">
          {retailTiles.map((tile) => (
            <article
              key={tile.id}
              className={`retail-preview-tile ${activeTile === tile.id ? 'is-active' : ''}`}
              onMouseEnter={() => setActiveTile(tile.id)}
              onFocus={() => setActiveTile(tile.id)}
              tabIndex={0}
            >
              <img
                src={tile.image}
                alt={tile.title}
                className="retail-preview-video"
              />
              <div className="retail-preview-overlay"></div>
              <div className="retail-preview-content">
                <div className="retail-preview-icon">{tile.icon}</div>
                <span className="retail-preview-stat">{tile.stat}</span>
                <h4>{tile.title}</h4>
                <p>{tile.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Retail;
