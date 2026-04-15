import React from 'react';
import { motion } from 'framer-motion';
import { Users, Globe, Clock, Banknote } from 'lucide-react';
import './Demographics.css';

const Demographics = () => {
  const stats = [
    { id: 1, icon: <Users size={32} />, value: '105M+', label: 'Annual Visitors' },
    { id: 2, icon: <Globe size={32} />, value: 'Top 5', label: 'Global Tourist Destination' },
    { id: 3, icon: <Clock size={32} />, value: '3.5 Hrs', label: 'Average Dwell Time' },
    { id: 4, icon: <Banknote size={32} />, value: '#1', label: 'Retail Spend in Region' }
  ];

  const demographicsData = [
    { label: 'Gen Z (18-24)', percentage: 25 },
    { label: 'Millennials (25-34)', percentage: 40 },
    { label: 'Gen X (35-50)', percentage: 25 },
    { label: 'Boomers (50+)', percentage: 10 }
  ];

  return (
    <section className="section demographics-section" id="demographics">
      <div className="container">
        <motion.div 
          className="demo-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-subtitle">Audience Power</h2>
          <h3 className="section-title">The audience profile behind leasing, partnership, and event demand.</h3>
          <p className="section-desc">The property brings together regional spend, global tourism, and long-form dwell time, giving every storefront, sponsorship, and live event a stronger commercial case.</p>
        </motion.div>

        <div className="stats-grid">
          {stats.map((stat, i) => (
            <motion.div 
              key={stat.id}
              className="stat-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="stat-icon text-accent">{stat.icon}</div>
              <h4 className="stat-value">{stat.value}</h4>
              <span className="stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="chart-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h4 className="chart-title">Audience Mix</h4>
          <div className="bar-chart">
            {demographicsData.map((data, i) => (
              <div className="bar-row" key={i}>
                <div className="bar-label">{data.label}</div>
                <div className="bar-track">
                  <motion.div 
                    className="bar-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${data.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                  >
                    <span className="bar-value">{data.percentage}%</span>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Demographics;
