import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, Quote, Users, Linkedin } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    quote: "The Human Skills Club transformed how I approach team communication and conflict resolution.",
    videoId: "1",
    companyLogo: "/logos/company-1.svg"
  },
  {
    name: "Michael Chen",
    role: "UX Designer",
    quote: "Learning emotional intelligence here has been career-changing. Best investment in myself!",
    videoId: "2",
    companyLogo: "/logos/company-2.svg"
  },
  {
    name: "Priya Patel",
    role: "Software Engineer",
    quote: "The supportive community helped me develop leadership skills I never knew I had.",
    videoId: "3",
    companyLogo: "/logos/company-3.svg"
  }
];

function Testimonials() {
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
            <Quote size={48} />
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
            Voices of Transformation
          </h2>
          <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto">
            Discover how our community members are redefining success through human skills
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-r from-[var(--primary-light)] to-[var(--primary-color)/10]">
                {/* Video thumbnail */}
                <img
                  src={`https://source.unsplash.com/random/800x450?sig=${index}`}
                  alt=""
                  className="w-full h-full object-cover mix-blend-multiply opacity-90"
                />
                
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-[var(--primary-color)/80] to-transparent">
                  <PlayCircle className="w-16 h-16 text-white/90 group-hover:text-white group-hover:scale-110 transition-all" />
                </div>

                {/* Company logo */}
                <img
                  src={testimonial.companyLogo}
                  alt="Company logo"
                  className="absolute top-4 right-4 w-12 h-12 object-contain opacity-90"
                />
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-semibold text-[var(--text-color)]">
                  {testimonial.name}
                </h3>
                <p className="text-[var(--text-muted)] mb-3">{testimonial.role}</p>
                <div className="flex items-start gap-2">
                  <Quote className="w-5 h-5 text-[var(--primary-color)] flex-shrink-0 mt-1" />
                  <p className="text-[var(--text-muted)] italic">
                    "{testimonial.quote}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;