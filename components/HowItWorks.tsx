'use client';

import { motion } from 'framer-motion';
import { Smartphone, CalendarCheck, QrCode } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    icon: <Smartphone size={28} className="text-gold" />,
    title: 'Download & Subscribe',
    description: 'Pick your plan — Basic, Premium, or Elite. Download the SERAIQ app in 60 seconds and unlock a world of premium salons.',
    detail: 'From ₹599/month',
  },
  {
    step: '02',
    icon: <CalendarCheck size={28} className="text-gold" />,
    title: 'Book Your Appointment',
    description: 'Browse partner salons near you, pick your preferred stylist, and book your slot in 3 taps. No phone calls, no waiting.',
    detail: '30-second booking',
  },
  {
    step: '03',
    icon: <QrCode size={28} className="text-gold" />,
    title: 'Walk In & Get Styled',
    description: 'Show your unique QR code at the salon entrance. Your stylist already knows your hair profile. Sit back and enjoy the experience.',
    detail: 'Seamless check-in',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 relative">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gold/4 rounded-full blur-[100px]" />
      </div>

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
            Simple Process
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-5">
            Get started in{' '}
            <span className="text-gold-gradient">3 steps</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            From download to your first appointment — the entire experience is designed to be effortless.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-14 left-1/2 -translate-x-1/2 w-[65%] h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

          <div className="grid lg:grid-cols-3 gap-8">
            {STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="relative group"
              >
                {/* Step number */}
                <div className="relative flex justify-center lg:justify-start mb-8">
                  <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30 flex items-center justify-center group-hover:from-gold/30 group-hover:border-gold/50 transition-all duration-300 gold-glow-hover">
                    {step.icon}
                    <span className="absolute -top-2.5 -right-2.5 text-[10px] font-black text-navy bg-gold w-6 h-6 rounded-full flex items-center justify-center">
                      {step.step}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center lg:text-left">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold-light transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-white/50 text-base leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <div className="inline-flex items-center gap-2 text-gold text-sm font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    {step.detail}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
