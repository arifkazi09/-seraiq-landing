'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

const PLANS = [
  {
    id: 'basic',
    name: 'Basic',
    monthlyPrice: 599,
    yearlyPrice: 499,
    tagline: 'Perfect for getting started',
    features: [
      '1 haircut per month',
      '3 saved style looks',
      'AI hair profile',
      'Book at any partner salon',
      'QR code check-in',
      'Standard booking priority',
    ],
    highlight: false,
    cta: 'Start with Basic',
  },
  {
    id: 'premium',
    name: 'Premium',
    monthlyPrice: 1199,
    yearlyPrice: 999,
    tagline: 'Most popular choice',
    features: [
      '2 services per month',
      '10 saved style looks',
      'Full AI hair analysis',
      'Book at any partner salon',
      'QR code check-in',
      'Priority booking slots',
      'Stylist notes & history',
    ],
    highlight: true,
    cta: 'Start with Premium',
  },
  {
    id: 'elite',
    name: 'Elite',
    monthlyPrice: 2499,
    yearlyPrice: 1999,
    tagline: 'For the connoisseur',
    features: [
      'Unlimited services',
      'Unlimited style looks',
      'Advanced AI analysis',
      'Book at any partner salon',
      'QR code check-in',
      'Dedicated personal manager',
      'Early access to features',
      'VIP stylist matching',
    ],
    highlight: false,
    cta: 'Go Elite',
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-28 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D1F] via-[#0f0f23] to-[#0D0D1F]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 text-gold text-xs font-bold tracking-wider uppercase mb-6">
            Simple Pricing
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-5">
            One price.{' '}
            <span className="text-gold-gradient">Unlimited style.</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto mb-8">
            No hidden fees. No surprise charges. Cancel anytime.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 glass rounded-full px-2 py-2">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                !annual ? 'bg-gold text-navy shadow-lg' : 'text-white/50 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                annual ? 'bg-gold text-navy shadow-lg' : 'text-white/50 hover:text-white'
              }`}
            >
              Annual
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${annual ? 'bg-navy/20 text-navy' : 'bg-gold/20 text-gold'}`}>
                Save 17%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Plan cards */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {PLANS.map((plan, i) => {
            const price = annual ? plan.yearlyPrice : plan.monthlyPrice;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className={`relative rounded-2xl p-7 transition-all duration-300 hover:-translate-y-2 ${
                  plan.highlight
                    ? 'bg-gradient-to-b from-gold/15 via-gold/8 to-transparent border-2 border-gold/50 shadow-2xl shadow-gold/10'
                    : 'glass border border-white/10 hover:border-gold/25'
                }`}
              >
                {/* Popular badge */}
                {plan.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 rounded-full text-navy text-xs font-black"
                    style={{ background: 'linear-gradient(135deg, #C9A84C, #E8C96C)' }}>
                    <Sparkles size={11} />
                    MOST POPULAR
                  </div>
                )}

                {/* Plan name */}
                <div className="mb-6">
                  <h3 className={`text-xl font-black mb-1 ${plan.highlight ? 'text-gold' : 'text-white'}`}>
                    {plan.name}
                  </h3>
                  <p className="text-white/40 text-sm">{plan.tagline}</p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-end gap-1">
                    <span className="text-white/50 text-lg font-medium self-start mt-2">₹</span>
                    <motion.span
                      key={price}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`text-5xl font-black ${plan.highlight ? 'text-gold-gradient' : 'text-white'}`}
                    >
                      {price.toLocaleString('en-IN')}
                    </motion.span>
                    <span className="text-white/40 text-sm mb-2">/mo</span>
                  </div>
                  {annual && (
                    <p className="text-green-400 text-xs font-medium mt-1">
                      Save ₹{((plan.monthlyPrice - plan.yearlyPrice) * 12).toLocaleString('en-IN')}/year
                    </p>
                  )}
                </div>

                {/* CTA */}
                <a
                  href="#"
                  className={`block w-full text-center py-3.5 rounded-full text-sm font-bold transition-all duration-300 mb-7 hover:scale-105 active:scale-95 ${
                    plan.highlight
                      ? 'text-navy shadow-lg hover:shadow-gold/30'
                      : 'text-white border border-white/20 hover:border-gold/50 hover:text-gold'
                  }`}
                  style={plan.highlight ? { background: 'linear-gradient(135deg, #C9A84C, #E8C96C)' } : {}}
                >
                  {plan.cta}
                </a>

                {/* Features */}
                <div className="space-y-3">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                        plan.highlight ? 'bg-gold/20' : 'bg-white/8'
                      }`}>
                        <Check size={10} className={plan.highlight ? 'text-gold' : 'text-white/60'} />
                      </div>
                      <span className={`text-sm ${plan.highlight ? 'text-white/80' : 'text-white/50'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-white/30 text-sm mt-10"
        >
          All plans include a 7-day free trial. No credit card required to start.
        </motion.p>
      </div>
    </section>
  );
}
