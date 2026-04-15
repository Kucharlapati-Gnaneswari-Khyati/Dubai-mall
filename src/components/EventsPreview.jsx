import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MonitorPlay, Zap } from 'lucide-react';
import CinematicReel from './CinematicReel';
import './EventsPreview.css';

const diningImg = 'https://images.unsplash.com/photo-1742002661612-771125d0c050?auto=format&fit=crop&w=1600&q=80';
const skylineImg = 'https://images.unsplash.com/photo-1735320864781-4671fecd6468?auto=format&fit=crop&w=1600&q=80';
const retailImg = 'https://images.unsplash.com/photo-1758448501002-8c7bb7a7d9ff?auto=format&fit=crop&w=1600&q=80';
const eventImg = 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=1600&q=80';
const entranceImg = 'https://images.unsplash.com/photo-1753729349067-f317d8a80b9f?auto=format&fit=crop&w=1600&q=80';
const aquariumImg = 'https://images.unsplash.com/photo-1722590216145-e3c6c4d82b58?auto=format&fit=crop&w=1600&q=80';

const cases = [
  {
    id: 'launch-platform',
    title: 'Brand Launch Platform',
    eyebrow: 'Activation format',
    icon: <Zap size={24} />,
    summary: 'Use the property as a stage for product reveals, headline activations, and high-visibility brand theatre.',
    details: 'The mix of tourism, dwell time, and social capture makes large-scale launches feel amplified before, during, and after the event itself.',
    metrics: ['High-footfall visibility', 'Social capture', 'Premium adjacency'],
    image: eventImg,
    frames: [eventImg, skylineImg, entranceImg]
  },
  {
    id: 'seasonal-programming',
    title: 'Seasonal Programming',
    eyebrow: 'Calendar engine',
    icon: <Calendar size={24} />,
    summary: 'Year-round moments keep the property commercially fresh and give sponsors repeated reasons to enter the environment.',
    details: 'Festive periods, cultural moments, and destination-wide campaigns create recurring inventory for partners and producers.',
    metrics: ['Repeat partnership windows', 'Audience spikes', 'Programming flexibility'],
    image: retailImg,
    frames: [retailImg, diningImg, skylineImg]
  },
  {
    id: 'venue-modules',
    title: 'Venue Modules',
    eyebrow: 'Bookable formats',
    icon: <MonitorPlay size={24} />,
    summary: 'Position the mall not just as a building, but as a portfolio of event-ready environments for launches, showcases, and live programming.',
    details: 'This module can expand into performing arts, exposition, and venue-specific sub-decks without changing the core architecture.',
    metrics: ['Concert-ready potential', 'Expo-compatible', 'Expandable sales flow'],
    image: aquariumImg,
    frames: [aquariumImg, diningImg, entranceImg]
  }
];

const EventsPreview = () => {
  const [activeCase, setActiveCase] = useState(cases[0]);

  return (
    <section className="events-cinematic-section" id="events">
      <div className="container events-layout">
        <motion.div
          className="events-copy"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.75 }}
        >
          <span className="section-subtitle">Events & Platform</span>
          <h2 className="section-title">A global platform for launches, sponsorships, and venue-led programming.</h2>
          
        </motion.div>

        <div className="events-player-grid">
          <motion.article
            className="events-player"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="events-player-media">
              <CinematicReel
                key={activeCase.id}
                frames={activeCase.frames.map((frame, index) => ({
                  src: frame,
                  alt: `${activeCase.title} frame ${index + 1}`
                }))}
                className="events-main-reel"
                imageClassName="events-main-video"
                alt={activeCase.title}
              />
              <div className="events-player-overlay"></div>
            </div>

            <div className="events-player-content">
              <div className="events-player-meta">
                <span>{activeCase.eyebrow}</span>
                <div className="events-player-icon">{activeCase.icon}</div>
              </div>
              <h3>{activeCase.title}</h3>
              <p>{activeCase.summary}</p>
              <p className="events-player-detail">{activeCase.details}</p>
              <div className="events-player-metrics">
                {activeCase.metrics.map((metric) => (
                  <span key={metric}>{metric}</span>
                ))}
              </div>
            </div>
          </motion.article>

          <div className="events-rail">
            {cases.map((item, index) => (
              <motion.button
                key={item.id}
                type="button"
                className={`events-rail-card ${activeCase.id === item.id ? 'is-active' : ''}`}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setActiveCase(item)}
                onFocus={() => setActiveCase(item)}
                onClick={() => setActiveCase(item)}
              >
                <CinematicReel
                  frames={item.frames.map((frame, frameIndex) => ({
                    src: frame,
                    alt: `${item.title} preview ${frameIndex + 1}`
                  }))}
                  className="events-rail-reel"
                  imageClassName="events-rail-video"
                  alt={item.title}
                />
                <div className="events-rail-overlay"></div>
                <div className="events-rail-content">
                  <div className="events-rail-icon">{item.icon}</div>
                  <span>{item.eyebrow}</span>
                  <h4>{item.title}</h4>
                  <p>{item.summary}</p>
                  <div className="events-rail-cta">
                    <span>Open module</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsPreview;
