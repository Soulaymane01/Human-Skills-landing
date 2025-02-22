import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Mail, Instagram, Twitter, Linkedin, ArrowRight } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-[var(--footer-bg)] text-[var(--text-color)] py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8 lg:gap-12"
        >
          {/* Brand Column */}
          <div className="space-y-4">
            <motion.div whileHover={{ scale: 1.1 }} className="inline-block">
              <Heart className="w-8 h-8 text-[var(--primary-color)]" />
            </motion.div>
            <p className="text-white">
              Fostering essential human skills through meaningful connections
            </p>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:contact@humanskills.club"
                className="flex items-center gap-2 text-white hover:text-[var(--primary-color)] transition-colors"
              >
                <Mail className="w-5 h-5" />
                contact@humanskills.club
              </a>
            </div>
          </div>

          {/* Social Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Connect</h3>
            <div className="flex gap-6">
              {[
                { icon: Instagram, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Linkedin, href: '#' },
              ].map(({ icon: Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  className="text-white hover:text-[var(--primary-color)] transition-colors"
                  whileHover={{ y: -2 }}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-lg bg-[var(--input-bg)] text-[var(--text-color)] placeholder-[var(--text-muted)] focus:ring-2 focus:ring-[var(--primary-color)] outline-none transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-[var(--primary-color)] text-white px-6 py-3 rounded-lg font-medium hover:bg-[var(--primary-dark)] transition-colors flex items-center justify-center gap-2"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className=" text-white border-t  mt-12 pt-8 text-center >"
        >
          <p>© {new Date().getFullYear()} Human Skills Club. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;