'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, Crown, Heart } from 'lucide-react';

type Plan = {
  id: string;
  name: string;
  price: number;
  tagline: string;
  badge?: string;
  walkInValue: string;
  features: string[];
  highlight: boolean;
  cta: string;
};

const MEN_PLANS: Plan[] = [
  {
    id: 'groom-basic',
    name: 'Groom Basic',
    price: 799,
    tagline: 'Complete grooming, monthly',
    walkInValue: '~₹500 walk-in value',
    features: [
      '1 Haircut & Styling',
      '1 Beard Trim & Shaping',
      '1 Head Massage (20 min)',
      '1 Basic Cleanup',
      'AI SERAIQ Passport',
      'QR Check-in',
      'Standard booking priority',
      '10% off all add-ons',
    ],
    highlight: false,
    cta: 'Start Groom Basic',
  },
  {
    id: 'groom-plus',
    name: 'Groom Plus',
    price: 1299,
    tagline: 'The full grooming package',
    badge: 'MOST POPULAR',
    walkInValue: '~₹1,800 walk-in value',
    features: [
      '1 Premium Haircut',
      '1 Beard Design',
      '1 Basic Facial',
      '1 Head Massage (30 min)',
      '1 Back/Shoulder Massage (15 min)',
      '1 Eyebrow Threading + Ear Wax',
      'Priority booking (48hr advance)',
      'AI SERAIQ Passport',
      'QR Check-in',
      '15% off all add-ons',
    ],
    highlight: true,
    cta: 'Start Groom Plus',
  },
  {
    id: 'groom-elite',
    name: 'Groom Elite',
    price: 2499,
    tagline: 'Two visits. Total VIP.',
    badge: '2 Visits Per Month',
    walkInValue: '~₹4,500 walk-in value',
    features: [
      'Visit 1: Premium Haircut + Hair Spa',
      'Visit 1: Advanced Facial / De-tan',
      'Visit 1: Head Massage (30 min)',
      'Visit 2: Beard Design + Hot Towel Shave',
      'Visit 2: Back/Shoulder Massage (30 min)',
      'VIP 24hr advance booking',
      '20% off all add-ons',
      '1 personalised product/month',
      'AI SERAIQ Passport',
    ],
    highlight: false,
    cta: 'Go Elite',
  },
];

const WOMEN_PLANS: Plan[] = [
  {
    id: 'beauty-basic',
    name: 'Beauty Basic',
    price: 999,
    tagline: 'Monthly beauty essentials',
    walkInValue: '~₹1,200 walk-in value',
    features: [
      '1 Haircut & Styling',
      '1 Eyebrow + Lip Threading',
      '1 Basic Facial',
      '1 Classic Manicure',
      'AI SERAIQ Passport',
      'QR Check-in',
      'Standard booking priority',
      '10% off all add-ons',
    ],
    highlight: false,
    cta: 'Start Beauty Basic',
  },
  {
    id: 'beauty-plus',
    name: 'Beauty Plus',
    price: 1799,
    tagline: 'Full beauty, every month',
    badge: 'MOST POPULAR',
    walkInValue: '~₹3,200 walk-in value',
    features: [
      '1 Premium Haircut & Blowdry',
      '2 Threading sessions',
      '1 Advanced Facial',
      '1 Pedicure',
      '1 Gel Manicure',
      '1 Waxing (any area)',
      'Priority booking (48hr advance)',
      'AI Hair & Skin Passport',
      '15% off all add-ons',
    ],
    highlight: true,
    cta: 'Start Beauty Plus',
  },
  {
    id: 'beauty-elite',
    name: 'Beauty Elite',
    price: 3299,
    tagline: 'Two visits. Pure luxury.',
    badge: '2 Visits Per Month',
    walkInValue: '~₹6,800 walk-in value',
    features: [
      'Visit 1: Premium Haircut + Blowdry',
      'Visit 1: Advanced Facial + Hair Spa',
      'Visit 1: Full Body Waxing + Threading',
      'Visit 2: Threading top-up',
      'Visit 2: Gel Manicure + Spa Pedicure',
      'Visit 2: Swedish Massage (45 min)',
      'VIP 24hr advance booking',
      '20% off all add-ons',
      '1 personalised product/month',
    ],
    highlight: false,
    cta: 'Go Elite',
  },
];

const TABS = [
  { id: 'men', label: "Men's Grooming", plans: MEN_PLANS },
  { id: 'women', label: "Women's Beauty", plans: WOMEN_PLANS },
];

function PlanCard({ plan, delay }: { plan: Plan; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`relative rounded-2xl p-7 transition-all duration-300 hover:-translate-y-2 flex flex-col ${
        plan.highlight
          ? 'bg-gradient-to-b from-gold/15 via-gold/8 to-transparent border-2 border-gold/50 shadow-2xl shadow-gold/10'
          : 'glass border border-white/10 hover:border-gold/25'
      }`}
    >
      {/* Badge */}
      {plan.badge && (
        <div
          className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-black whitespace-nowrap"
          style={
            plan.highlight
              ? { background: 'linear-gradient(135deg, #C9A84C, #E8C96C)', color: '#1A1A2E' }
              : { background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.4)', color: '#C9A84C' }
          }
        >
          {plan.highlight && <Sparkles size={11} />}
          {plan.badge}
        </div>
      )}

      {/* Plan name */}
      <div className="mb-5">
        <h3 className={`text-xl font-black mb-1 ${plan.highlight ? 'text-gold' : 'text-white'}`}>
          {plan.name}
        </h3>
        <p className="text-white/40 text-sm">{plan.tagline}</p>
      </div>

      {/* Price */}
      <div className="mb-2">
        <div className="flex items-end gap-1">
          <span className="text-white/50 text-lg font-medium self-start mt-2">₹</span>
          <span className={`text-5xl font-black ${plan.highlight ? 'text-gold-gradient' : 'text-white'}`}>
            {plan.price.toLocaleString('en-IN')}
          </span>
          <span className="text-white/40 text-sm mb-2">/mo</span>
        </div>
        <p className="text-white/30 text-xs mt-1">{plan.walkInValue}</p>
      </div>

      {/* CTA */}
      <a
        href={`https://app.seraiq.com/signup?plan=${plan.id}`}
        className={`block w-full text-center py-3.5 rounded-full text-sm font-bold transition-all duration-300 mt-5 mb-6 hover:scale-105 active:scale-95 ${
          plan.highlight
            ? 'text-navy shadow-lg hover:shadow-gold/30'
            : 'text-white border border-white/20 hover:border-gold/50 hover:text-gold'
        }`}
        style={plan.highlight ? { background: 'linear-gradient(135deg, #C9A84C, #E8C96C)' } : {}}
      >
        {plan.cta}
      </a>

      {/* Features */}
      <div className="space-y-2.5 flex-1">
        {plan.features.map((feature, j) => (
          <div key={j} className="flex items-start gap-3">
            <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
              plan.highlight ? 'bg-gold/20' : 'bg-white/8'
            }`}>
              <Check size={10} className={plan.highlight ? 'text-gold' : 'text-white/60'} />
            </div>
            <span className={`text-sm leading-relaxed ${plan.highlight ? 'text-white/80' : 'text-white/50'}`}>
              {feature}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Pricing() {
  const [activeTab, setActiveTab] = useState(0);
  const currentPlans = TABS[activeTab].plans;

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
            Choose your{' '}
            <span className="text-gold-gradient">perfect plan.</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto mb-10">
            Every plan includes a 7-day free trial. No credit card required to start.
          </p>

          {/* Tabs */}
          <div className="inline-flex items-center gap-1 glass rounded-full px-2 py-2 flex-wrap justify-center">
            {TABS.map((tab, i) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(i)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === i ? 'text-navy shadow-lg' : 'text-white/50 hover:text-white'
                }`}
                style={activeTab === i ? { background: 'linear-gradient(135deg, #C9A84C, #E8C96C)' } : {}}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Plan cards */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {currentPlans.map((plan, i) => (
            <PlanCard key={`${activeTab}-${plan.id}`} plan={plan} delay={i * 0.1} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-white/30 text-sm mt-10"
        >
          All plans include a 7-day free trial. No credit card required to start. Annual plans available inside the app.
        </motion.p>
      </div>
    </section>
  );
}
