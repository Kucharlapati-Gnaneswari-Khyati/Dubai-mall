import React from 'react';
import Hero from './components/Hero';
import Scale from './components/Scale';
import Demographics from './components/Demographics';
import Retail from './components/Retail';
import Attractions from './components/Attractions';
import Dining from './components/Dining';
import EventsPreview from './components/EventsPreview';
import Navigation from './components/Navigation';
import FooterCTA from './components/FooterCTA';

import './App.css'; 
import './index.css';

function App() {
  return (
    <div className="app-container">
      <Navigation />
      <Hero />
      <Scale />
      <Demographics />
      <Retail />
      <Attractions />
      <Dining />
      <EventsPreview />
      <FooterCTA />
    </div>
  );
}

export default App;
