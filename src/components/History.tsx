import React from 'react';
import { motion } from 'framer-motion';
import { History as HistoryIcon, Star, Users } from 'lucide-react';

const timelineData = [
  {
    season: 'Spring 2022',
    title: 'The Beginning',
    content: 'Founded with just 12 members, focused on "Building Foundations" through basic communication and empathy exercises.',
    stats: { members: 12, sessions: 4 }
  },
  {
    season: 'Fall 2022',
    title: 'Growth & Connection',
    content: 'Expanded to 30 members and introduced "Deep Listening" as our seasonal theme.',
    stats: { members: 30, sessions: 12 }
  },
  {
    season: 'Spring 2023',
    title: 'Leadership & Facilitation',
    content: 'Launched member-led workshop series on "Emotional Intelligence in Leadership".',
    stats: { members: 50, sessions: 16 }
  },
  {
    season: 'Fall 2023',
    title: 'Community Impact',
    content: 'Introduced "Skills in Action" projects for real community challenges.',
    stats: { members: 75, sessions: 20 }
  },
  {
    season: 'Spring 2024',
    title: 'Global Connection',
    content: 'Exploring "Cross-Cultural Communication" with international partnerships.',
    stats: { members: '100+', sessions: 24 }
  }
];

function History() {
  return (
    <section className="relative py-20 bg-[var(--section-bg)]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <HistoryIcon className="w-12 h-12 text-[var(--primary-color)] mb-6 mx-auto" />
          <h2 className="text-4xl font-bold text-[var(--text-color)]">Our Journey</h2>
          <p className="text-[var(--text-muted)] mt-4 max-w-2xl mx-auto">
            Since our founding in 2022, we've grown from a small group into a thriving community.
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[var(--primary-light)] origin-top"
          />

          <div className="space-y-24">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.season}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline marker */}
                <div className="flex items-center justify-center mb-8">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="bg-[var(--primary-color)] text-white rounded-full p-3 shadow-lg"
                  >
                    <Star className="w-6 h-6" />
                  </motion.div>
                </div>

                {/* Content card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto relative transition-all hover:shadow-xl"
                >
                  <h3 className="text-2xl font-bold text-[var(--primary-color)] mb-4">
                    {item.season}: {item.title}
                  </h3>
                  <p className="text-[var(--text-muted)] mb-6">{item.content}</p>
                  <div className="flex items-center gap-4 text-sm text-[var(--text-muted)]">
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {item.stats.members} Members
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      {item.stats.sessions} Sessions
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default History;