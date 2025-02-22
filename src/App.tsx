import React from 'react';
import { Heart, Users, Target, Calendar, MessageCircle, Mail, Instagram, Twitter, Linkedin, ArrowRight, PlayCircle, Star } from 'lucide-react';

import Hero from './components/Hero';
import WhatWeDo from './components/whatWeDo';
import VesionMession from './components/VesionMession';
import UpComingEvents from './components/upcomingEvents'; 
import History from './components/History';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero/>

      {/* What We Do */}
      <WhatWeDo/>

      {/* Vision and Mission */}
      <VesionMession/>

      {/* Upcoming Events */}
      <UpComingEvents/>

      {/* History */}
      <History />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <CTA/>

      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default App;