import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Target } from 'lucide-react';

function VisionMission() {
  return (
    <section className="relative py-20 bg-[var(--section-bg)] overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[var(--primary-color)]"
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
            {i % 2 === 0 ? <Compass size={48} /> : <Target size={48} />}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="mb-8 inline-block"
          >
            <div className="w-20 h-20 rounded-2xl bg-[var(--primary-color)] text-white flex items-center justify-center mx-auto mb-6">
              <Compass className="w-10 h-10" />
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-color)] mb-6 leading-tight">
            Shaping Futures Through{' '}
            <span className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent">
              Human Connection
            </span>
          </h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div className="p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-[var(--border-color)]">
              <h3 className="text-2xl font-semibold text-[var(--text-color)] mb-4 flex items-center justify-center gap-2">
                <Target className="w-6 h-6 text-[var(--primary-color)]" />
                Our Vision
              </h3>
              <p className="text-[var(--text-muted)] text-lg">
                A world where human skills drive personal and professional success
              </p>
            </div>

            <div className="p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-[var(--border-color)]">
              <h3 className="text-2xl font-semibold text-[var(--text-color)] mb-4 flex items-center justify-center gap-2">
                <Compass className="w-6 h-6 text-[var(--primary-color)]" />
                Our Mission
              </h3>
              <p className="text-[var(--text-muted)] text-lg">
                Cultivate essential human capabilities through community-driven learning
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default VisionMission;