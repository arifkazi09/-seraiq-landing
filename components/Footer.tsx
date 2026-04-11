'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/6">
      <div className="absolute inset-0 bg-[#080810]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
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
            {/* Social links — only real ones */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/seraiq.in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-gold/40 hover:text-gold text-[10px] font-bold transition-all duration-300"
              >
                IG
              </a>
              <a
                href="https://www.linkedin.com/company/seraiq"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-gold/40 hover:text-gold text-[10px] font-bold transition-all duration-300"
              >
                LI
              </a>
              <a
                href="https://wa.me/917567194202"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-gold/40 hover:text-gold text-[10px] font-bold transition-all duration-300"
              >
                WA
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-bold tracking-wide">Product</h4>
            <ul className="space-y-2.5">
              <li><a href="#features" className="text-white/35 text-sm hover:text-gold transition-colors duration-200">Features</a></li>
              <li><a href="#features" className="text-white/35 text-sm hover:text-gold transition-colors duration-200">SERAIQ Passport</a></li>
              <li><a href="#pricing" className="text-white/35 text-sm hover:text-gold transition-colors duration-200">Pricing</a></li>
              <li><a href="#how-it-works" className="text-white/35 text-sm hover:text-gold transition-colors duration-200">How It Works</a></li>
              <li><a href="https://app.seraiq.com/signup" className="text-white/35 text-sm hover:text-gold transition-colors duration-200">Get Started</a></li>
            </ul>
          </div>

          {/* Partners */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-bold tracking-wide">Partners</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="https://wa.me/917567194202?text=Hi%20SERAIQ%2C%20I%20want%20to%20apply%20as%20a%20Salon%20Partner" target="_blank" rel="noopener noreferrer" className="text-white/35 text-sm hover:text-gold transition-colors duration-200">
                  Salon Partners
                </a>
              </li>
              <li>
                <a href="https://wa.me/917567194202?text=Hi%20SERAIQ%2C%20I%20want%20to%20become%20a%20StylePro%20Ambassador" target="_blank" rel="noopener noreferrer" className="text-white/35 text-sm hover:text-gold transition-colors duration-200">
                  StylePro Program
                </a>
              </li>
              <li><a href="#partners" className="text-white/35 text-sm hover:text-gold transition-colors duration-200">Partner Benefits</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-bold tracking-wide">Contact</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="mailto:arif@seraiq.com" className="text-white/35 text-sm hover:text-gold transition-colors duration-200">
                  arif@seraiq.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/917567194202" target="_blank" rel="noopener noreferrer" className="text-white/35 text-sm hover:text-gold transition-colors duration-200">
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/seraiq.in" target="_blank" rel="noopener noreferrer" className="text-white/35 text-sm hover:text-gold transition-colors duration-200">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/6 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/25 text-xs">
            © {year} SERAIQ Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/privacy" className="text-white/25 text-xs hover:text-gold/70 transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-white/25 text-xs hover:text-gold/70 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
