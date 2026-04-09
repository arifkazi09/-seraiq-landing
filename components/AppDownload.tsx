'use client';

import { motion } from 'framer-motion';
import { Smartphone, Star } from 'lucide-react';

export default function AppDownload() {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A2E] via-[#14142a] to-[#0D0D1F]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-96 h-96 bg-gold/8 rounded-full blur-[100px]" />
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-900/30 rounded-full blur-[100px]" />

      {/* Grid lines */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Icon */}
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center shadow-2xl shadow-gold/30 animate-float">
              <span className="text-navy font-black text-3xl">S</span>
            </div>
          </div>

          {/* Headline */}
          <div>
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-5 leading-tight">
              Ready to transform
              <br />
              <span className="text-gold-gradient">your salon experience?</span>
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Join thousands of Indians who&apos;ve already upgraded their grooming routine.
              Download free. Start your 7-day trial today.
            </p>
          </div>

          {/* Rating */}
          <div className="flex items-center justify-center gap-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-gold text-gold" />
              ))}
            </div>
            <span className="text-white/60 text-sm">4.9 · 2,400+ reviews</span>
          </div>

          {/* Store buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Play Store */}
            <a
              href="#"
              className="group flex items-center gap-4 glass rounded-2xl px-6 py-4 border border-white/15 hover:border-gold/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/10 min-w-[200px]"
            >
              <div className="text-3xl">▶</div>
              <div className="text-left">
                <p className="text-white/50 text-[10px] uppercase tracking-wider">Get it on</p>
                <p className="text-white font-bold text-lg leading-tight">Google Play</p>
              </div>
            </a>

            {/* App Store */}
            <a
              href="#"
              className="group flex items-center gap-4 glass rounded-2xl px-6 py-4 border border-white/15 hover:border-gold/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/10 min-w-[200px]"
            >
              <div className="text-3xl">🍎</div>
              <div className="text-left">
                <p className="text-white/50 text-[10px] uppercase tracking-wider">Download on the</p>
                <p className="text-white font-bold text-lg leading-tight">App Store</p>
              </div>
            </a>
          </div>

          {/* Subtext */}
          <p className="text-white/30 text-sm">
            Available for Android & iOS · Free download · Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}
