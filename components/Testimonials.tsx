'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Zaid Shaikh',
    role: 'Basic Member, Ahmedabad',
    avatar: 'ZS',
    rating: 5,
    text: 'For ₹599 a month I get a proper haircut at Smart Salon without worrying about walk-in wait times. The QR code check-in is super smooth.',
    color: '#C9A84C',
  },
  {
    name: 'Farhan Mirza',
    role: 'Premium Member, Ahmedabad',
    avatar: 'FM',
    rating: 5,
    text: 'I uploaded my hair photos once during signup. Now every stylist at every SERAIQ salon opens the app and already knows exactly what I want — length, style, what went wrong last time. Never explained my hair again in 4 months.',
    color: '#B8952A',
  },
  {
    name: 'Riya Desai',
    role: 'Basic Member, Ahmedabad',
    avatar: 'RD',
    rating: 5,
    text: 'Finally a salon app that makes sense. Book, show QR, done. No cash, no confusion. SERAIQ is exactly what I needed.',
    color: '#D4A44B',
  },
  {
    name: 'Yusuf Patel',
    role: 'Premium Member, Ahmedabad',
    avatar: 'YP',
    rating: 5,
    text: 'Recommended SERAIQ to 3 friends already. The subscription pays for itself within 2 visits. Smart way to handle your grooming.',
    color: '#C9A84C',
  },
  {
    name: 'Nisha Vohra',
    role: 'Basic Member, Ahmedabad',
    avatar: 'NV',
    rating: 5,
    text: 'I was skeptical at first but the first booking experience won me over. Professional, on time, and the stylist had my preferences ready.',
    color: '#E8C96C',
  },
  {
    name: 'Arif K.',
    role: 'Salon Owner, Smart Salon',
    avatar: 'AK',
    rating: 5,
    text: 'As a salon partner, SERAIQ brings in organized, pre-profiled customers. No more no-shows, no more explaining services from scratch every time.',
    color: '#B8952A',
  },
];

// Duplicate for seamless loop
const ROW1 = [...TESTIMONIALS, ...TESTIMONIALS];
const ROW2 = [...TESTIMONIALS.slice(3), ...TESTIMONIALS.slice(0, 3), ...TESTIMONIALS.slice(3), ...TESTIMONIALS.slice(0, 3)];

function TestimonialCard({ t }: { t: typeof TESTIMONIALS[0] }) {
  return (
    <div className="shrink-0 w-[320px] glass rounded-2xl p-6 border border-white/8 hover:border-gold/25 transition-all duration-300 mx-3">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(t.rating)].map((_, i) => (
          <Star key={i} size={13} className="fill-gold text-gold" />
        ))}
      </div>

      {/* Text */}
      <p className="text-white/65 text-sm leading-relaxed mb-5">
        &ldquo;{t.text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-black text-navy shrink-0"
          style={{ background: `linear-gradient(135deg, ${t.color}, #E8C96C)` }}
        >
          {t.avatar}
        </div>
        <div>
          <p className="text-white text-sm font-semibold">{t.name}</p>
          <p className="text-white/40 text-xs">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 px-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 text-gold text-xs font-bold tracking-wider uppercase mb-6">
            Member Stories
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-5">
            What our{' '}
            <span className="text-gold-gradient">early members say</span>
          </h2>
          <p className="text-white/50 text-lg">
            Real experiences from SERAIQ subscribers and salon partners in Ahmedabad.
          </p>
        </motion.div>

        {/* Row 1 — left to right */}
        <div className="relative mb-4 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #0D0D1F, transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #0D0D1F, transparent)' }} />
          <div className="flex animate-marquee py-2">
            {ROW1.map((t, i) => <TestimonialCard key={i} t={t} />)}
          </div>
        </div>

        {/* Row 2 — right to left */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #0D0D1F, transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #0D0D1F, transparent)' }} />
          <div className="flex animate-marquee-reverse py-2">
            {ROW2.map((t, i) => <TestimonialCard key={i} t={t} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
