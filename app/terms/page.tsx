import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — SERAIQ',
  description: 'Terms and conditions for using the SERAIQ salon subscription platform.',
};

export default function TermsOfService() {
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
          <h1 className="text-4xl font-black text-white mb-3">Terms of Service</h1>
          <p className="text-white/40 text-sm">Last updated: April 2025</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-10 text-white/70 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Acceptance of Terms</h2>
            <p>
              By creating an account or using any SERAIQ service, you agree to these Terms of Service. If you do not
              agree, please do not use our platform. These terms apply to all users including subscribers, salon partners,
              and StylePro ambassadors.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. The SERAIQ Service</h2>
            <p>
              SERAIQ is a subscription-based platform that connects users to partner salons across Gujarat, India.
              Subscribers pay a monthly fee in exchange for salon services, AI-powered hair recommendations,
              priority booking, and related features as described in their chosen plan.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Subscription Plans & Billing</h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li><strong className="text-white">Basic</strong> — ₹599/month: 1 haircut, 3 saved styles</li>
              <li><strong className="text-white">Premium</strong> — ₹1,199/month: 2 services, 10 saved styles, priority booking</li>
              <li><strong className="text-white">Elite</strong> — ₹2,499/month: unlimited services, unlimited styles, dedicated manager</li>
            </ul>
            <p className="mt-3">
              Subscriptions are billed monthly via Razorpay. You may cancel at any time — your access continues until
              the end of the current billing period. No refunds are issued for partial months.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Cancellation & Pausing</h2>
            <p>
              You may cancel or pause your subscription at any time from the app. Cancellation takes effect at the end
              of your current billing cycle. Pausing is available for subscribers travelling or temporarily unavailable,
              for up to 30 days per year.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Booking & Service Policy</h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Bookings must be made through the SERAIQ app</li>
              <li>Cancellations must be made at least 2 hours before the appointment</li>
              <li>Late cancellations or no-shows may result in the session being counted as used</li>
              <li>Services are redeemable only at SERAIQ partner salons</li>
              <li>Unused monthly sessions do not carry over to the next month</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 mt-3">
              <li>Share your QR code or account with others</li>
              <li>Attempt to abuse the subscription by booking beyond your plan limits</li>
              <li>Harass or mistreat salon staff</li>
              <li>Provide false information when creating your account</li>
              <li>Attempt to reverse-engineer or tamper with the SERAIQ platform</li>
            </ul>
            <p className="mt-3">Violation of these terms may result in immediate account suspension without refund.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Partner Salons & StylePros</h2>
            <p>
              Salon partners and StylePro ambassadors agree to separate partnership agreements provided during onboarding.
              SERAIQ reserves the right to remove partners from the network for quality or compliance violations.
              StylePro commission payouts are processed monthly, subject to verification.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Limitation of Liability</h2>
            <p>
              SERAIQ is a technology platform connecting subscribers to independent salon partners. We are not responsible
              for the quality of services provided by partner salons. In the event of a service dispute, please contact
              us and we will work to resolve it fairly. Our liability is limited to the value of the subscription month
              in which the issue occurred.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">9. Intellectual Property</h2>
            <p>
              All SERAIQ branding, AI models, and platform code are the exclusive property of SERAIQ Technologies Pvt. Ltd.
              You may not copy, reproduce, or use our intellectual property without written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">10. Changes to Terms</h2>
            <p>
              We may update these terms periodically. We will notify you of material changes via WhatsApp or in-app
              notification. Continued use of SERAIQ after the effective date means you accept the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">11. Governing Law</h2>
            <p>
              These terms are governed by the laws of India. Any disputes will be subject to the jurisdiction of courts
              in Ahmedabad, Gujarat, India.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">12. Contact</h2>
            <p>
              Questions about these terms? Contact us at{' '}
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
