'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    q: 'How does the subscription work?',
    a: 'You pick a plan (Basic, Premium, or Elite), pay monthly, and get a fixed number of salon visits included. Walk into any SERAIQ partner salon, show your QR code, and your service is covered — no cash needed at the counter.',
  },
  {
    q: 'Can I use my subscription at any partner salon?',
    a: 'Yes. Once you subscribe, you can book at any SERAIQ-certified partner salon in your city. Your AI hair profile travels with you — every stylist sees your preferences before you sit down.',
  },
  {
    q: 'What happens if I don\'t use my visits in a month?',
    a: 'Unused visits reset at the start of each billing cycle. They do not carry forward, so we recommend booking before your cycle ends.',
  },
  {
    q: 'Is there a contract or lock-in period?',
    a: 'No lock-in at all. You can cancel anytime from your profile. Your subscription stays active until the end of the billing period you already paid for.',
  },
  {
    q: 'How is SERAIQ different from just booking a salon online?',
    a: 'Regular booking apps are just directories. SERAIQ builds your AI beauty profile over time — your hair type, texture, past styles, concerns — and shares it with your stylist before every visit. Plus you get subscription pricing, which is always cheaper than walk-in rates.',
  },
  {
    q: 'I own a salon. How do I join as a partner?',
    a: 'WhatsApp us directly at +91 75671 94202 or click "Apply as Salon Partner" above. We onboard you within 48 hours — no upfront cost, no setup fee.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D1F] via-[#0f0f22] to-[#0D0D1F]" />

      <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 text-gold text-xs font-bold tracking-wider uppercase mb-6">
            FAQs
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Questions?{' '}
            <span className="text-gold-gradient">Answered.</span>
          </h2>
          <p className="text-white/50 text-lg">Everything you need to know before you subscribe.</p>
        </motion.div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="glass rounded-2xl border border-white/8 hover:border-gold/20 transition-colors duration-300 overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-white font-semibold text-sm leading-relaxed">{faq.q}</span>
                <span className="shrink-0 w-7 h-7 rounded-full border border-white/15 flex items-center justify-center text-gold">
                  {open === i ? <Minus size={14} /> : <Plus size={14} />}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p className="px-6 pb-5 text-white/50 text-sm leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
