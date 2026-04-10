'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function AppDownload() {
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.length < 10) return;
    setLoading(true);
    // Simulate submission — replace with real API call when ready
    await new Promise(r => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A2E] via-[#14142a] to-[#0D0D1F]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-96 h-96 bg-gold/8 rounded-full blur-[100px]" />
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-900/30 rounded-full blur-[100px]" />

      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-2xl mx-auto px-6 lg:px-8 text-center">
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
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
              Be the first to
              <br />
              <span className="text-gold-gradient">experience SERAIQ</span>
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              App launching soon across Gujarat. Join the waitlist and get early access + 1 free month.
            </p>
          </div>

          {/* Waitlist form */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="tel"
                value={phone}
                onChange={e => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                placeholder="Your WhatsApp number"
                className="flex-1 px-5 py-4 rounded-full bg-white/8 border border-white/15 text-white placeholder-white/30 focus:outline-none focus:border-gold/50 text-sm"
              />
              <button
                type="submit"
                disabled={loading || phone.length < 10}
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-full font-bold text-navy text-sm transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ background: 'linear-gradient(135deg, #C9A84C, #E8C96C)' }}
              >
                {loading ? 'Joining...' : (
                  <>Join Waitlist <ArrowRight size={15} /></>
                )}
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 text-green-400 font-semibold"
            >
              <CheckCircle size={22} />
              You&apos;re on the list! We&apos;ll WhatsApp you when we launch.
            </motion.div>
          )}

          <p className="text-white/25 text-xs">No spam. Just your early access invite.</p>
        </motion.div>
      </div>
    </section>
  );
}
