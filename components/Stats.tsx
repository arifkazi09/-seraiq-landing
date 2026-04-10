'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const STATS = [
  { value: 20, suffix: '+', label: 'Partner Salons', sub: 'across Gujarat' },
  { value: 500, suffix: '+', label: 'Early Members', sub: 'and growing fast' },
  { value: 4.8, suffix: '★', label: 'Avg Rating', sub: 'from member feedback' },
  { value: 96, suffix: '%', label: 'Satisfaction', sub: 'rate reported' },
];

function CountUp({ target, suffix, duration = 2 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const isFloat = target % 1 !== 0;

    const tick = (now: number) => {
      const elapsed = (now - start) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = target * eased;
      setCount(isFloat ? parseFloat(current.toFixed(1)) : Math.floor(current));
      if (progress < 1) requestAnimationFrame(tick);
      else setCount(target);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration]);

  const display = target >= 1000
    ? (count >= 1000 ? `${(count / 1000).toFixed(0)}K` : count.toString())
    : count % 1 !== 0 ? count.toFixed(1) : count.toString();

  return <span ref={ref}>{display}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D1F] via-[#0f0f22] to-[#0D0D1F]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative group"
            >
              <div className="glass rounded-2xl p-6 lg:p-8 text-center gold-glow-hover transition-all duration-300 hover:-translate-y-1">
                {/* Glow dot */}
                <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-gold/50 group-hover:bg-gold transition-colors" />

                <div className="text-4xl lg:text-5xl font-black text-gold-gradient mb-2">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white font-semibold text-sm mb-1">{stat.label}</div>
                <div className="text-white/40 text-xs">{stat.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
