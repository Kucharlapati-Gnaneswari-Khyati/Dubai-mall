import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Wine, Utensils, Star } from 'lucide-react';
import diningImg from '../assets/luxury_dining_terrace_1775916491990.webp';
import './MediaSection.css';

const Dining = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section className="media-section" id="dining" ref={containerRef}>
      <motion.div 
        className="media-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-subtitle">Gastronomic Excellence</h2>
        <h3 className="section-title">Dining & Lifestyle</h3>
        <p className="section-desc">
          Dining is not support inventory here. It is a core driver of dwell time, evening trade, and cross-category spend across the property.
        </p>
        
        <ul className="media-feature-list">
          <li>
            <Star className="media-feature-icon" size={20} />
            <span>View-led venues strengthen premium positioning and evening demand.</span>
          </li>
          <li>
            <Wine className="media-feature-icon" size={20} />
            <span>Fine dining and elevated casual formats expand daypart coverage.</span>
          </li>
          <li>
            <Utensils className="media-feature-icon" size={20} />
            <span>Food, entertainment, and retail work together to lift overall spend.</span>
          </li>
        </ul>
      </motion.div>
      
      <div className="media-visual">
        <motion.img 
          src={diningImg} 
          alt="Luxury Dining Terrace"
          loading="lazy"
          decoding="async"
          style={{ y }}
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1.05 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
};

export default Dining;
