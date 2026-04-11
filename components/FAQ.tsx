'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    q: 'How does the subscription work?',
    a: 'Choose a plan for Men\'s Grooming, Women\'s Beauty, or Wellness. Each plan includes a specific bundle of services delivered in one appointment per month (Elite plans include 2 appointments). Book your slot up to 7 days in advance, walk in with your QR code, and your stylist already has your full SERAIQ Passport ready — no explaining needed.',
  },
  {
    q: 'Can I use my subscription at any partner salon?',
    a: 'Yes — at any SERAIQ Certified partner salon in your city. Your SERAIQ Passport travels with you, so any SERAIQ stylist anywhere already knows your preferences. We\'re currently live in Ahmedabad and expanding to Surat, Vadodara, and Rajkot.',
  },
  {
    q: 'What happens if I don\'t use my visits in a month?',
    a: 'Unused monthly appointments don\'t roll over. We send you a WhatsApp reminder on the 20th of each month if your bundle is unused. Book early so you never miss out on what you\'ve paid for.',
  },
  {
    q: 'Is there a contract or lock-in period?',
    a: 'No contract. Cancel anytime from the app with no questions and no penalties. Your access continues until the end of your current billing cycle.',
  },
  {
    q: 'How is SERAIQ different from just booking a salon?',
    a: 'When you book a random salon, you explain your hair from scratch every single time. With SERAIQ, your SERAIQ Passport saves your photos, preferences, hair type, skin concerns, and visit history. Every stylist at every SERAIQ salon already knows you before your appointment begins. That\'s the difference — not just booking, but being known.',
  },
  {
    q: 'I own a salon. How do I join as a partner?',
    a: 'WhatsApp us at +91 75671 94202. We conduct a free quality audit of your salon first — every partner must meet SERAIQ\'s hygiene, infrastructure, and service standards. Onboarding takes 48 hours after audit approval. Zero joining fee for our first 100 Founding Partners.',
  },
  {
    q: 'What is the SERAIQ Passport?',
    a: 'Your SERAIQ Passport is your personal beauty profile on SERAIQ. Upload photos of your preferred hairstyle from all angles, save notes on what you love and what to avoid, log your hair type, skin type, and concerns. Every SERAIQ stylist sees this profile before your appointment. It builds automatically over time — every visit adds to your beauty story.',
  },
  {
    q: 'Can I use SERAIQ if I move cities or travel abroad?',
    a: 'Yes. Your SERAIQ Passport works at any SERAIQ partner salon in India. As we expand globally — starting with UAE in 2028 — your profile travels with you internationally too. One subscription, your beauty story everywhere.',
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
