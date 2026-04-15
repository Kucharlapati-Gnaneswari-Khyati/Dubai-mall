import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Attractions.css';

const attractionCards = [
  {
    category: 'Aquarium',
    title: 'Anchor attractions extend dwell time and broaden the visitor mix.',
    description: 'The aquarium gives the property a globally recognisable signature, creating the kind of footfall and social capture that strengthens retail adjacency and sponsorship value.',
    meta: ['Tourism magnet', 'Sponsorship-ready environment'],
    image: 'https://images.unsplash.com/photo-1722590216145-e3c6c4d82b58?auto=format&fit=crop&w=1800&q=80'
  },
  {
    category: 'Ice Rink',
    title: 'Entertainment keeps the destination active beyond pure shopping intent.',
    description: 'The rink introduces programming potential, group traffic, and repeat visitation that help the property behave like an all-day platform rather than a transactional center.',
    meta: ['Repeat visits', 'Event programming potential'],
    image: 'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?auto=format&fit=crop&w=1800&q=80'
  },
  {
    category: 'Cinema & Family',
    title: 'Family entertainment expands the commercial funnel across demographics.',
    description: 'Indoor experiences create an easier case for food, beverage, retail conversion, and longer average visit duration across multiple audience segments.',
    meta: ['Cross-category spend', 'Broader audience reach'],
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1800&q=80'
  },
  {
    category: 'Platform Effect',
    title: 'Attractions transform the mall from a retail address into a destination platform.',
    description: 'That distinction matters commercially because it increases frequency, deepens engagement, and gives brands more ways to enter the environment through stores, sponsorships, and live experiences.',
    meta: ['Retail uplift', 'Partnership leverage'],
    image: 'https://images.unsplash.com/photo-1758448501002-8c7bb7a7d9ff?auto=format&fit=crop&w=1800&q=80'
  }
];

const Attractions = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end']
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-75%']);
  const introOpacity = useTransform(scrollYProgress, [0, 0.12, 0.2], [1, 1, 0.35]);

  return (
    <section className="attractions-horizontal-section" id="attractions" ref={sectionRef}>
      <div className="attractions-sticky-shell">
        

        <motion.div className="attractions-track" style={{ x }}>
          {attractionCards.map((card) => (
            <article
              key={card.category}
              className="attractions-panel"
              style={{ backgroundImage: `linear-gradient(180deg, rgba(4, 4, 4, 0.12), rgba(4, 4, 4, 0.88)), url(${card.image})` }}
            >
              <div className="attractions-panel-content">
                <span className="attractions-panel-kicker">{card.category}</span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <div className="attractions-panel-meta">
                  {card.meta.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <div className="attractions-panel-link">
                  <span>View commercial impact</span>
                  <ArrowRight size={18} />
                </div>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Attractions;
