'use client';

import { motion } from 'framer-motion';

const LINKS = {
  Product: ['Features', 'Pricing', 'AI Analysis', 'Salon Map', 'Magic Mirror'],
  Company: ['About Us', 'Blog', 'Careers', 'Press Kit', 'Contact'],
  Partners: ['Salon Partners', 'StylePro Program', 'Partner Dashboard', 'Apply Now'],
  Connect: ['Instagram', 'Twitter / X', 'LinkedIn', 'WhatsApp', 'support@seraiq.in'],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/6">
      <div className="absolute inset-0 bg-[#080810]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-1 space-y-5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gold-gradient flex items-center justify-center">
                <span className="text-navy font-black text-sm">S</span>
              </div>
              <span className="text-xl font-black">
                <span className="text-white">SER</span>
                <span className="text-gold-gradient">AIQ</span>
              </span>
            </div>
            <p className="text-white/35 text-sm leading-relaxed max-w-[180px]">
              India&apos;s first AI-powered salon subscription platform.
            </p>
            <div className="flex gap-3">
              {['IG', 'TW', 'LI', 'YT'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-gold/40 hover:text-gold text-[10px] font-bold transition-all duration-300"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([heading, links]) => (
            <div key={heading} className="space-y-4">
              <h4 className="text-white text-sm font-bold tracking-wide">{heading}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/35 text-sm hover:text-gold transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/6 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/25 text-xs">
            © {year} SERAIQ Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a key={item} href="#" className="text-white/25 text-xs hover:text-gold/70 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
