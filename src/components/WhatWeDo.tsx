import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, MessageCircle } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Weekly Discussions',
    description: 'Interactive sessions focused on developing essential human skills',
  },
  {
    icon: Target,
    title: 'Skill Development',
    description: 'Practical exercises to enhance empathy and communication',
  },
  {
    icon: MessageCircle,
    title: 'Safe Space',
    description: 'A supportive environment for personal growth',
  },
];

function WhatWeDo() {
  return (
    <section className="py-20 bg-[var(--section-bg)]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[var(--text-color)] mb-4">
            What We Do
          </h2>
          <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto">
            Transforming human potential through collaborative learning experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.2 }}
              className="group p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-[var(--border-color)] hover:border-[var(--primary-color)] transition-all"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-[var(--primary-light)] group-hover:bg-[var(--primary-color)] transition-colors flex items-center justify-center">
                <feature.icon className="w-10 h-10 text-[var(--primary-color)] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-semibold text-[var(--text-color)] mb-4">
                {feature.title}
              </h3>
              <p className="text-[var(--text-muted)] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;