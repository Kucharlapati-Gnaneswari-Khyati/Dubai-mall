import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import './Scale.css';

const StatChip = ({ value, label, suffix = '', prefix = '', decimals = 0, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) {
      return undefined;
    }

    const duration = 1800;
    const startTime = performance.now();
    let animationFrame;

    const tick = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setDisplayValue(value * eased);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(tick);
      }
    };

    animationFrame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value]);

  const formatted = decimals > 0 ? displayValue.toFixed(decimals) : Math.round(displayValue).toLocaleString();

  return (
    <motion.div
      ref={ref}
      className="stats-bar-item"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay }}
    >
      <span className="stats-bar-value">
        {prefix}
        {formatted}
        {suffix}
      </span>
      <span className="stats-bar-label">{label}</span>
    </motion.div>
  );
};

const Scale = () => {
  return (
    <section className="section scale-section" id="scale">
      <div className="container">
        <motion.div
          className="scale-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-subtitle">Why This Property</h2>
          <h3 className="section-title">A destination that operates more like a commercial ecosystem than a mall.</h3>
          <p className="section-desc">
Beyond a building. A global platform. We deliver the scale, the dwell time, and the destination energy that a standalone venue simply cannot replicate.          </p>
        </motion.div>

        <motion.div
          className="stats-bar glass-panel"
          initial={{ opacity: 0, y: 30, scale: 1.02 }}
          whileInView={{ opacity: 1, y: 0, scale: 1.05 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
        >
          <StatChip value={111} suffix="M+" label="Annual Visitors" delay={0.1} />
          <StatChip value={12} suffix="M" label="Square Feet" delay={0.2} />
          <StatChip value={1200} suffix="+" label="Retail Tenants" delay={0.3} />
          <StatChip value={200} suffix="+" label="Dining Outlets" delay={0.4} />
          <StatChip value={300} suffix="K+" label="Daily Impressions" delay={0.5} />
        </motion.div>
      </div>
    </section>
  );
};

export default Scale;
