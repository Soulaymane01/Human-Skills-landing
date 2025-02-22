import React from 'react';
import { motion } from "framer-motion"
import { Heart, Users, ArrowRight, Instagram, Twitter, Linkedin, ChevronDown } from 'lucide-react';

function Hero() {
  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with gradient overlay */}
      <div 
        className="absolute inset-0 bg-gray-900 z-0"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.8)),
                          url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary-color)/30] to-[var(--secondary-color)/90]" />
      </div>

      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Text container with glass-morphism effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mx-4 border border-white/10 shadow-xl"
        >
          {/* Logo with animation */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="mb-8"
          >
            <img 
              src="/human Skills logo.png"
              alt="Human Skills Club Logo" 
              className="mx-auto w-24 h-24 object-contain drop-shadow-lg"
            />
          </motion.div>

          {/* Main heading with stagger animation */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Unleash Your <span className="text-[var(--accent-light)]">Potential</span> with<br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent"
            >
              Human Skills Club
            </motion.span>
          </motion.h1>

          {/* Subtext with semi-transparent background */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10 p-4 rounded-lg bg-black/30"
          >
            Join a vibrant community dedicated to mastering essential human skills through 
            authentic connections, collaborative learning, and personal growth experiences.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-[var(--primary-color)] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[var(--primary-dark)] transition-all shadow-lg hover:shadow-[var(--primary-light)] inline-flex items-center gap-2"
          >
            Join Our Community
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 flex justify-center gap-6"
        >
          {[
            { icon: Instagram, href: '#' },
            { icon: Twitter, href: '#' },
            { icon: Linkedin, href: '#' },
          ].map(({ icon: Icon, href }, index) => (
            <a
              key={index}
              href={href}
              className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors text-white"
              aria-label={`Follow us on ${Icon.name}`}
            >
              <Icon className="w-6 h-6" />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown className="text-white w-10 h-10" />
      </motion.div>
    </header>
  );
}

export default Hero;