import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, KeyRound } from 'lucide-react';
import './FooterCTA.css';

const pathways = {
  leasing: {
    title: 'Retail Leasing',
    copy: 'Open a tailored conversation around flagship, luxury, contemporary, or pop-up opportunities across the destination.',
    checkpoints: ['Category-specific pitch path', 'Footfall and adjacency story', 'Commercial follow-up']
  },
  sponsorship: {
    title: 'Sponsorship',
    copy: 'Start a partnership discussion around destination-wide visibility, naming opportunities, and activation-led brand theatre.',
    checkpoints: ['Inventory alignment', 'Audience rationale', 'Activation concepts']
  },
  events: {
    title: 'Events & Venues',
    copy: 'Explore concerts, launches, conventions, and venue-specific opportunities built around the property’s scale and programming potential.',
    checkpoints: ['Bookable environments', 'Production potential', 'Venue module follow-up']
  }
};

const FooterCTA = () => {
  const [submitted, setSubmitted] = useState(false);
  const [pathway, setPathway] = useState('leasing');

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const activePathway = pathways[pathway];

  return (
    <section className="section concierge-section" id="contact">
      <div className="container concierge-layout">
        <motion.div
          className="concierge-copy"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Choose your path.</h2>
          

          <div className="concierge-pathways">
            {Object.entries(pathways).map(([key, item]) => (
              <button
                key={key}
                type="button"
                className={`concierge-path ${pathway === key ? 'is-active' : ''}`}
                onClick={() => setPathway(key)}
              >
                <span>{item.title}</span>
                <ArrowUpRight size={16} />
              </button>
            ))}
          </div>
          <br/>
          <div className="concierge-brief glass-panel">
            <div className="concierge-brief-head">
              <KeyRound size={18} />
              <span>{activePathway.title}</span>
            </div>
            <p>{activePathway.copy}</p>
            <div className="concierge-checkpoints">
              {activePathway.checkpoints.map((checkpoint) => (
                <div key={checkpoint} className="concierge-checkpoint">
                  <Check size={16} />
                  <span>{checkpoint}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="concierge-portal glass-panel"
          initial={{ opacity: 0, y: 32, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {submitted ? (
            <div className="success-message">
              <span className="section-subtitle">Request Logged</span>
              <h3>Commercial follow-up initiated.</h3>
              <p>
                The selected pathway has been captured for a tailored response.
              </p>
            </div>
          ) : (
            <form className="concierge-form" onSubmit={handleSubmit}>
              <div className="portal-header">
                <span className="section-subtitle">Deal Intake</span>
                <h3>Request a tailored proposal path.</h3>
              </div>

              <div className="form-group">
                <label htmlFor="interest">Opportunity Type</label>
                <select id="interest" value={pathway} onChange={(event) => setPathway(event.target.value)}>
                  <option value="leasing">Retail Leasing</option>
                  <option value="sponsorship">Sponsorship</option>
                  <option value="events">Events & Venues</option>
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Contact Name</label>
                  <input id="name" type="text" placeholder="Alex Morgan" required />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input id="company" type="text" placeholder="Maison Example" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Business Email</label>
                  <input id="email" type="email" placeholder="alex@example.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="market">Category or Use Case</label>
                  <input id="market" type="text" placeholder="Luxury retail, brand launch, expo format" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="notes">Commercial Objective</label>
                <textarea id="notes" rows="5" placeholder="Describe the footprint, campaign, venue, or event ambition you want to explore." required></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Request Follow-Up
              </button>
            </form>
          )}
        </motion.div>
      </div>

      <footer className="footer">
        <p>&copy; 2026 Dubai Mall. Commercial overview.</p>
      </footer>
    </section>
  );
};

export default FooterCTA;
