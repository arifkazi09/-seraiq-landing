import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — SERAIQ',
  description: 'How SERAIQ collects, uses, and protects your personal data.',
};

export default function PrivacyPolicy() {
  const year = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-[#0D0D1F] text-white">
      <div className="max-w-3xl mx-auto px-6 py-20">
        {/* Back link */}
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-gold transition-colors mb-12"
        >
          ← Back to SERAIQ
        </a>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #C9A84C, #E8C96C)' }}>
              <span className="text-[#1A1A2E] font-black text-sm">S</span>
            </div>
            <span className="text-xl font-black">
              <span className="text-white">SER</span>
              <span style={{ background: 'linear-gradient(135deg, #C9A84C, #E8C96C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>AIQ</span>
            </span>
          </div>
          <h1 className="text-4xl font-black text-white mb-3">Privacy Policy</h1>
          <p className="text-white/40 text-sm">Last updated: April 2026</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-10 text-white/70 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Who We Are</h2>
            <p>
              SERAIQ Technologies Pvt. Ltd. (&quot;SERAIQ&quot;, &quot;we&quot;, &quot;us&quot;) operates the SERAIQ salon subscription platform,
              including the website at seraiq.com and the SERAIQ mobile applications. This Privacy Policy explains how we
              collect, use, store, and protect your personal data when you use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Data We Collect</h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li><strong className="text-white">Contact information</strong> — your name and WhatsApp phone number (used for OTP login and communication)</li>
              <li><strong className="text-white">Hair profile data</strong> — hair type, texture, length, and preferences you voluntarily provide</li>
              <li><strong className="text-white">Booking data</strong> — salon appointments, services booked, and visit history</li>
              <li><strong className="text-white">Subscription data</strong> — plan selected, payment status (we do not store card details — Razorpay handles payments)</li>
              <li><strong className="text-white">Device & usage data</strong> — app version, device type, and basic usage analytics</li>
              <li><strong className="text-white">Analytics data</strong> — we use privacy-friendly analytics to understand how users navigate the platform. No personally identifiable data is shared with analytics providers.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. How We Use Your Data</h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>To authenticate you securely via WhatsApp OTP</li>
              <li>To provide AI-powered hair recommendations personalised to your profile</li>
              <li>To manage your salon bookings and subscription</li>
              <li>To send appointment reminders and service updates via WhatsApp</li>
              <li>To improve our platform and fix bugs</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Data Sharing</h2>
            <p>
              We do not sell your personal data. We share data only with:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2 mt-3">
              <li><strong className="text-white">Partner salons</strong> — your booking details and style preferences so they can serve you</li>
              <li><strong className="text-white">Razorpay</strong> — for secure payment processing</li>
              <li><strong className="text-white">WATI</strong> — for WhatsApp OTP and notification delivery</li>
              <li><strong className="text-white">Supabase</strong> — our secure cloud database provider</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Data Retention</h2>
            <p>
              We retain your data for as long as your account is active. If you delete your account, your personal data is
              removed within 30 days, except where we are legally required to retain records (e.g., payment records for tax purposes).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 mt-3">
              <li>Access the data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your account and data</li>
              <li>Opt out of marketing messages at any time</li>
            </ul>
            <p className="mt-3">These rights are provided in accordance with India&apos;s Digital Personal Data Protection Act, 2023.</p>
            <p className="mt-3">
              To exercise any of these rights, contact us at{' '}
              <a href="mailto:arif@seraiq.com" className="text-gold hover:underline">arif@seraiq.com</a>{' '}
              or WhatsApp us at{' '}
              <a href="https://wa.me/917567194202" className="text-gold hover:underline" target="_blank" rel="noopener noreferrer">+91 75671 94202</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Security</h2>
            <p>
              We use industry-standard security measures including JWT authentication, HTTPS-only communication, and
              Supabase Row Level Security (RLS) to protect your data. We never log or expose your phone number in our systems.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Updates to This Policy</h2>
            <p>
              We may update this policy from time to time. We will notify you of significant changes via WhatsApp or
              in-app notification. Continued use of SERAIQ after changes means you accept the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">9. Contact</h2>
            <p>
              Questions about this policy? Reach us at{' '}
              <a href="mailto:arif@seraiq.com" className="text-gold hover:underline">arif@seraiq.com</a>{' '}
              or via WhatsApp at{' '}
              <a href="https://wa.me/917567194202" className="text-gold hover:underline" target="_blank" rel="noopener noreferrer">+91 75671 94202</a>.
            </p>
          </section>
        </div>

        {/* Footer line */}
        <div className="mt-16 pt-8 border-t border-white/8 text-center text-white/25 text-xs">
          © {year} SERAIQ Technologies Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </main>
  );
}
