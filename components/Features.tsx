'use client';

import { motion } from 'framer-motion';
import { Brain, Clock, QrCode, BookOpen, Users, RefreshCw, Sparkles, BookMarked } from 'lucide-react';

const FEATURES = [
  {
    icon: <Brain size={24} />,
    title: 'AI Hair Analysis',
    description: 'Build your SERAIQ Passport — upload photos of your preferred style from all angles, save what you love and what to avoid, add your hair type and concerns. Every stylist at every SERAIQ salon sees your full profile before touching your hair.',
    badge: 'AI-Powered',
    highlight: true,
  },
  {
    icon: <BookMarked size={24} />,
    title: 'Your SERAIQ Passport',
    description: 'Save photos of your preferred hairstyle from front, sides, and back. Add notes on what went wrong before. Log your hair type, skin concerns, and product allergies. One profile — works at every SERAIQ salon everywhere.',
    badge: 'Core Feature',
    highlight: false,
  },
  {
    icon: <Clock size={24} />,
    title: 'Priority Booking',
    description: 'Skip the queue with guaranteed time slots. Plus and Elite members get first access to the best stylists in the city — book up to 7 days in advance.',
    badge: null,
    highlight: false,
  },
  {
    icon: <QrCode size={24} />,
    title: 'QR Check-In',
    description: 'Your digital membership QR lets you walk in seamlessly. The salon sees your full SERAIQ Passport — hair type, style photos, last visit notes — before you sit down.',
    badge: null,
    highlight: false,
  },
  {
    icon: <BookOpen size={24} />,
    title: 'Style History',
    description: 'Every visit is logged — date, salon, services, what you loved, what to change. Your style history travels with you to any SERAIQ salon in any city. Moving from Ahmedabad to Dubai? Your profile comes with you.',
    badge: null,
    highlight: false,
  },
  {
    icon: <Users size={24} />,
    title: 'SERAIQ Certified Salons',
    description: 'Every partner salon passes a mandatory quality audit before onboarding. We check hygiene, infrastructure, stylist skill, and service standards. No shortcuts. No compromises. If they don\'t meet SERAIQ standards, they don\'t join our network.',
    badge: 'Certified',
    highlight: false,
  },
  {
    icon: <RefreshCw size={24} />,
    title: 'Full Flexibility',
    description: 'Pause your subscription during travel. Upgrade, downgrade, or cancel anytime — no penalties, no drama.',
    badge: null,
    highlight: false,
  },
  {
    icon: <Sparkles size={24} />,
    title: 'Magic Mirror',
    description: 'After every SERAIQ visit, the Magic Mirror automatically updates your SERAIQ Passport with your new look — photos captured, profile refreshed, no manual uploads needed. Coming soon to all Gold+ partner salons.',
    badge: 'Coming Soon',
    highlight: false,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-28 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D1F] via-[#0e0e20] to-[#0D0D1F]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 text-gold text-xs font-bold tracking-wider uppercase mb-6">
            Why SERAIQ
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-5">
            Everything your hair{' '}
            <span className="text-gold-gradient">deserves</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            From AI-powered recommendations to seamless salon check-in — every feature is designed to make you look your best.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`relative group p-6 rounded-2xl border transition-all duration-300 cursor-default ${
                feature.highlight
                  ? 'bg-gradient-to-br from-gold/10 via-gold/5 to-transparent border-gold/30 hover:border-gold/50'
                  : 'glass border-white/8 hover:border-gold/20'
              }`}
            >
              {/* Highlight glow */}
              {feature.highlight && (
                <div className="absolute inset-0 rounded-2xl bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                feature.highlight
                  ? 'bg-gold/20 text-gold group-hover:bg-gold/30'
                  : 'bg-white/5 text-white/60 group-hover:bg-gold/15 group-hover:text-gold'
              }`}>
                {feature.icon}
              </div>

              {/* Badge */}
              {feature.badge && (
                <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gold/15 border border-gold/30 text-gold text-[10px] font-bold tracking-wider uppercase mb-3">
                  ✦ {feature.badge}
                </div>
              )}

              <h3 className="text-white font-bold text-lg mb-2 group-hover:text-gold-light transition-colors">
                {feature.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
