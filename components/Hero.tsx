'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, ArrowRight, Star, Zap, Shield } from 'lucide-react';

const FLOATING_BADGES = [
  { icon: <Zap size={14} className="text-gold" />, text: 'AI Powered', delay: 0, x: '-10%', y: '15%' },
  { icon: <Star size={14} className="text-gold" />, text: '4.9★ Rated', delay: 0.3, x: '105%', y: '25%' },
  { icon: <Shield size={14} className="text-gold" />, text: 'Elite Member', delay: 0.6, x: '108%', y: '65%' },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const yPhone = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#0D0D1F]" />

      {/* Radial gold glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gold/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-[300px] h-[300px] bg-indigo-900/30 rounded-full blur-[80px] pointer-events-none" />

      {/* Grid lines overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(201,168,76,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left: Text content */}
          <motion.div style={{ y: yText, opacity }} className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-gold/30 text-sm font-medium text-gold"
            >
              <Sparkles size={14} />
              India&apos;s First AI-Powered Salon Subscription
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight">
                <span className="text-white">Your Salon.</span>
                <br />
                <span className="text-white">Your Style.</span>
                <br />
                <span className="text-shimmer">Perfected by AI.</span>
              </h1>
            </motion.div>

            {/* Slogan */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-base italic text-gold/80 tracking-wide -mt-4"
            >
              Your Beauty Story, Remembered by AI.
            </motion.p>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-white/60 max-w-xl leading-relaxed mx-auto lg:mx-0"
            >
              Book premium salons, get AI beauty recommendations, and track your style journey —
              all with one affordable subscription. Cancel anytime.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#pricing"
                className="group relative inline-flex items-center justify-center gap-2 text-navy font-bold text-base px-8 py-4 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-xl hover:shadow-gold/30 animate-pulse-gold"
                style={{ background: 'linear-gradient(135deg, #C9A84C, #E8C96C)' }}
              >
                Start Free Trial
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#how-it-works"
                className="group inline-flex items-center justify-center gap-2 text-white font-semibold text-base px-8 py-4 rounded-full border border-white/20 hover:border-gold/50 hover:text-gold transition-all duration-300 hover:bg-gold/5"
              >
                See How It Works
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex items-center gap-6 justify-center lg:justify-start pt-2"
            >
              <div className="flex -space-x-2">
                {['#E8B86D', '#D4A44B', '#C9A84C', '#B8952A', '#A07820'].map((color, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-[#0D0D1F] flex items-center justify-center text-xs font-bold text-white"
                    style={{ backgroundColor: color }}
                  >
                    {['A', 'R', 'S', 'K', 'M'][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-xs text-white/50">
                  <span className="text-white font-semibold">10,000+</span> happy members
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Phone Mockup */}
          <motion.div
            style={{ y: yPhone }}
            className="relative flex justify-center lg:justify-end"
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
              className="relative animate-float"
            >
              {/* Phone frame */}
              <div className="relative w-[280px] h-[580px] rounded-[44px] bg-gradient-to-b from-[#1a1a2e] to-[#0d0d1f] border-[6px] border-[#2a2a4a] shadow-2xl overflow-hidden"
                style={{ boxShadow: '0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05), inset 0 0 30px rgba(201,168,76,0.05)' }}
              >
                {/* Status bar */}
                <div className="flex justify-between items-center px-6 pt-4 pb-2">
                  <span className="text-white/80 text-xs font-semibold">9:41</span>
                  <div className="w-20 h-5 rounded-full bg-[#0d0d1f] border border-[#2a2a4a]" />
                  <div className="flex gap-1 items-center">
                    <div className="w-4 h-2.5 rounded-sm bg-gold/80" />
                  </div>
                </div>

                {/* App header */}
                <div className="px-5 pt-3 pb-4">
                  <p className="text-white/50 text-xs">Good morning,</p>
                  <div className="flex justify-between items-center mt-0.5">
                    <p className="text-white font-bold text-lg">Arif ✦</p>
                    <div className="px-2.5 py-1 rounded-full text-xs font-bold text-navy"
                      style={{ background: 'linear-gradient(135deg, #C9A84C, #E8C96C)' }}>
                      Elite
                    </div>
                  </div>
                </div>

                {/* Upcoming booking card */}
                <div className="mx-4 p-4 rounded-2xl mb-3"
                  style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05))', border: '1px solid rgba(201,168,76,0.25)' }}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="text-white font-semibold text-sm">Style Studio Mumbai</p>
                      <p className="text-white/50 text-xs mt-0.5">Raj Sharma · Tomorrow, 2:00 PM</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                      <Sparkles size={14} className="text-gold" />
                    </div>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <div className="flex-1 text-center py-1.5 rounded-xl bg-gold text-navy text-xs font-bold">View QR</div>
                    <div className="flex-1 text-center py-1.5 rounded-xl border border-white/20 text-white/70 text-xs">Reschedule</div>
                  </div>
                </div>

                {/* AI Tip */}
                <div className="mx-4 p-3 rounded-xl mb-3" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="flex items-center gap-2 mb-1.5">
                    <Zap size={10} className="text-gold" />
                    <span className="text-gold text-[10px] font-bold tracking-wider uppercase">AI Tip for You</span>
                  </div>
                  <p className="text-white/70 text-xs leading-relaxed">Your wavy hair needs a trim every 6-8 weeks to prevent split ends.</p>
                </div>

                {/* Quick actions */}
                <div className="mx-4 grid grid-cols-2 gap-2">
                  {['Book Now', 'Magic Mirror', 'My Bookings', 'Shop'].map((action, i) => (
                    <div key={i} className="p-3 rounded-xl text-center" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <p className="text-white/70 text-[10px] font-medium">{action}</p>
                    </div>
                  ))}
                </div>

                {/* Bottom tab bar */}
                <div className="absolute bottom-0 left-0 right-0 px-6 pb-4 pt-3 flex justify-around"
                  style={{ background: 'rgba(13,13,31,0.95)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  {['🏠', '🔍', '✨', '🛍️', '👤'].map((icon, i) => (
                    <div key={i} className={`text-base ${i === 0 ? 'opacity-100' : 'opacity-40'}`}>{icon}</div>
                  ))}
                </div>
              </div>

              {/* Floating glow */}
              <div className="absolute -inset-4 rounded-[52px] bg-gold/5 blur-2xl -z-10" />
            </motion.div>

            {/* Floating badges */}
            {FLOATING_BADGES.map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + badge.delay }}
                className="absolute glass-dark px-3 py-2 rounded-xl flex items-center gap-2 animate-float-slow shadow-xl"
                style={{
                  left: badge.x,
                  top: badge.y,
                  animationDelay: `${badge.delay}s`,
                }}
              >
                {badge.icon}
                <span className="text-white text-xs font-semibold whitespace-nowrap">{badge.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0D0D1F] to-transparent pointer-events-none" />
    </section>
  );
}
