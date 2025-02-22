import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Sparkles } from 'lucide-react';

function CTA() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)]">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute --text-color/20"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1, 0],
              opacity: [0, 0.3, 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: 12 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <Sparkles size={48} />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="mb-8 inline-block"
          >
            <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-8">
              <Users className="w-10 h-10 --text-color" />
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold --text-color mb-6 leading-tight">
            Join <span className="text-[var(--accent-color)]">1,000+</span> Members<br/>
            Transforming Their Lives
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg --text-color/90 max-w-2xl mx-auto mb-10"
          >
            Start your journey today in our supportive community focused on meaningful growth and authentic connections.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-white text-[var(--primary-color)] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl hover:shadow-[var(--primary-light)] inline-flex items-center gap-3"
          >
            Get Started Today
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex items-center justify-center gap-2 --text-color/80 text-sm"
          >
            <Users className="w-5 h-5" />
            <span>New members joining daily</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTA;