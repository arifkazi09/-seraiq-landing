'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Priya Sharma',
    role: 'Premium Member, Mumbai',
    avatar: 'PS',
    rating: 5,
    text: 'I\'ve been a Premium member for 4 months now. The AI recommendations are spot on — my stylist knows exactly what I want before I even explain.',
    color: '#C9A84C',
  },
  {
    name: 'Rahul Mehta',
    role: 'Elite Member, Bangalore',
    avatar: 'RM',
    rating: 5,
    text: 'Walked into 3 different partner salons last month. Every single one had my hair profile ready. This is what premium service should feel like.',
    color: '#B8952A',
  },
  {
    name: 'Anjali Patel',
    role: 'Basic Member, Ahmedabad',
    avatar: 'AP',
    rating: 5,
    text: 'For ₹599 a month I get a professional haircut at a salon I trust. No more overpaying at random places. SERAIQ changed how I think about grooming.',
    color: '#D4A44B',
  },
  {
    name: 'Karan Singh',
    role: 'Elite Member, Delhi',
    avatar: 'KS',
    rating: 5,
    text: 'The QR check-in is seamless. I walk in, show my code, and I\'m in the chair within 5 minutes. My dedicated manager actually remembers my preferences.',
    color: '#C9A84C',
  },
  {
    name: 'Meera Nair',
    role: 'Premium Member, Chennai',
    avatar: 'MN',
    rating: 5,
    text: 'I love that my hair journey is documented. When I show the stylist my profile history, they understand my hair challenges instantly. Life-changing.',
    color: '#E8C96C',
  },
  {
    name: 'Arjun Reddy',
    role: 'Premium Member, Hyderabad',
    avatar: 'AR',
    rating: 5,
    text: 'Tried SERAIQ on a friend\'s recommendation. Two months in, I\'ve saved more than the subscription cost compared to what I used to spend on walk-in visits.',
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
            Loved by{' '}
            <span className="text-gold-gradient">10,000+ members</span>
          </h2>
          <p className="text-white/50 text-lg">
            Real experiences from real SERAIQ subscribers across India.
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
