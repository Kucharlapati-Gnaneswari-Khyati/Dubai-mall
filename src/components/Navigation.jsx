import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import './Navigation.css';

const Navigation = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setActiveSection(targetId.replace('#', ''));
    if (targetId === '') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const links = [
    { name: 'Why This Property', id: 'scale' },
    { name: 'Fashion Avenue', id: 'retail' },
    { name: 'Attractions', id: 'attractions' },
    { name: 'Events', id: 'events' }
  ];

  return (
    <motion.nav
      className="nav-hud"
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <div className="nav-container">
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={activeSection === link.id ? 'active' : ''}
                onClick={(e) => handleNavClick(e, `#${link.id}`)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-action">
          <a
            href="#contact"
            className={`nav-btn ${activeSection === 'contact' ? 'active-btn' : ''}`}
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            Open Deal Flow
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
