import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Clock } from 'lucide-react';

const events = [
  {
    title: "Leadership Workshop",
    description: "Interactive session on developing essential leadership skills",
    date: "March 15, 2024",
    time: "6:00 PM",
    icon: Users,
  },
  {
    title: "Emotional Intelligence Talk",
    description: "Master workplace dynamics through emotional awareness",
    date: "March 22, 2024",
    time: "6:00 PM",
    icon: Clock,
  },
];

function UpComingEvents() {
  return (
    <section className="relative py-20 bg-[var(--section-bg)] overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[var(--primary-color)]"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1, 0],
              opacity: [0, 0.2, 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <Calendar size={48} />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[var(--text-color)] mb-4">
            Upcoming Events
          </h2>
          <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto">
            Join our transformative sessions and elevate your human skills
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-sm hover:shadow-lg transition-all border border-[var(--border-color)] hover:border-[var(--primary-color)]"
            >
              <div className="absolute top-4 right-4 text-[var(--primary-light)] group-hover:text-[var(--primary-color)] transition-colors">
                <event.icon className="w-10 h-10" />
              </div>
              
              <h3 className="text-2xl font-semibold text-[var(--text-color)] mb-4 pr-12">
                {event.title}
              </h3>
              <p className="text-[var(--text-muted)] mb-6">
                {event.description}
              </p>
              
              <div className="flex items-center gap-4 text-[var(--primary-color)]">
                <Calendar className="w-5 h-5" />
                <span className="font-medium">{event.date}</span>
                <span className="mx-2">•</span>
                <Clock className="w-5 h-5" />
                <span className="font-medium">{event.time}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UpComingEvents;