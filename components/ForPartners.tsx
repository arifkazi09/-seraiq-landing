'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, BarChart3, Wallet, MapPin, Award } from 'lucide-react';

const SALON_BENEFITS = [
  { icon: <TrendingUp size={16} />, text: 'Guaranteed monthly revenue from subscribers' },
  { icon: <Users size={16} />, text: 'Access to 10,000+ pre-qualified customers' },
  { icon: <BarChart3 size={16} />, text: 'Real-time analytics dashboard' },
  { icon: <Award size={16} />, text: 'SERAIQ Certified Partner badge & promotion' },
];

const STYLEPRO_BENEFITS = [
  { icon: <Wallet size={16} />, text: '₹500 commission per subscriber you convert' },
  { icon: <MapPin size={16} />, text: 'Walk-in customers to subscription in minutes' },
  { icon: <BarChart3 size={16} />, text: 'Track your earnings in real-time' },
  { icon: <Award size={16} />, text: 'Build your personal brand as a SERAIQ Pro' },
];

export default function ForPartners() {
  return (
    <section id="partners" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0D0D1F]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/3 blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 text-gold text-xs font-bold tracking-wider uppercase mb-6">
            Partner Program
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-5">
            Grow with{' '}
            <span className="text-gold-gradient">SERAIQ</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Whether you own a salon or want to earn as a StylePro ambassador — SERAIQ has an opportunity for you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Salon Owners */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="relative group glass rounded-2xl p-8 border border-gold/15 hover:border-gold/35 transition-all duration-300 hover:-translate-y-1 gold-glow-hover overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 rounded-full blur-2xl pointer-events-none" />

            <div className="mb-6">
              <div className="w-12 h-12 rounded-xl bg-gold/15 border border-gold/30 flex items-center justify-center mb-4 group-hover:bg-gold/25 transition-colors">
                <TrendingUp size={22} className="text-gold" />
              </div>
              <h3 className="text-2xl font-black text-white mb-2">Salon Owners</h3>
              <p className="text-white/50 text-base leading-relaxed">
                Join our partner network and get a steady stream of pre-subscribed, committed customers.
                No more empty chairs. No more slow months.
              </p>
            </div>

            <div className="space-y-3 mb-8">
              {SALON_BENEFITS.map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-gold/10 flex items-center justify-center shrink-0 text-gold">
                    {benefit.icon}
                  </div>
                  <span className="text-white/70 text-sm">{benefit.text}</span>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 text-navy font-bold text-sm px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gold/20"
              style={{ background: 'linear-gradient(135deg, #C9A84C, #E8C96C)' }}
            >
              Apply as Salon Partner
              <span>→</span>
            </a>
          </motion.div>

          {/* StylePros */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative group rounded-2xl p-8 border border-white/8 hover:border-gold/25 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(26,26,46,0.8), rgba(15,15,35,0.8))' }}
          >
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-900/20 rounded-full blur-2xl pointer-events-none" />

            <div className="mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center mb-4 group-hover:bg-gold/15 group-hover:border-gold/30 transition-all">
                <Users size={22} className="text-white/60 group-hover:text-gold transition-colors" />
              </div>
              <h3 className="text-2xl font-black text-white mb-2">StylePro Ambassadors</h3>
              <p className="text-white/50 text-base leading-relaxed">
                Earn commissions by converting walk-in salon customers into SERAIQ subscribers.
                Your charm + our platform = unlimited earning potential.
              </p>
            </div>

            <div className="space-y-3 mb-8">
              {STYLEPRO_BENEFITS.map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white/6 flex items-center justify-center shrink-0 text-white/50 group-hover:text-gold group-hover:bg-gold/10 transition-all">
                    {benefit.icon}
                  </div>
                  <span className="text-white/60 text-sm">{benefit.text}</span>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 text-white font-bold text-sm px-6 py-3 rounded-full border border-white/20 hover:border-gold/50 hover:text-gold transition-all duration-300 hover:scale-105"
            >
              Become a StylePro
              <span>→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
