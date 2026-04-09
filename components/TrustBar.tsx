'use client';

const SALONS = [
  'Style Studio Mumbai', 'The Barber Lab', 'Luxe Hair Lounge', 'Ahmedabad Cuts',
  'Bangalore Bliss Salon', 'Delhi Crown Cuts', 'Pune Style Hub', 'Hyderabad Hair House',
  'Chennai Chic Salon', 'Kolkata Kuts', 'Jaipur Jewel Salon', 'Surat Style Studio',
];

// Duplicate for seamless loop
const ITEMS = [...SALONS, ...SALONS];

export default function TrustBar() {
  return (
    <section className="py-12 border-y border-white/5 overflow-hidden relative">
      <div className="text-center mb-8">
        <p className="text-white/30 text-sm font-medium tracking-widest uppercase">
          Trusted by 100+ premium partner salons across India
        </p>
      </div>

      {/* Scrolling marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #0D0D1F, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #0D0D1F, transparent)' }} />

        <div className="flex animate-marquee whitespace-nowrap">
          {ITEMS.map((salon, i) => (
            <div key={i} className="flex items-center gap-8 px-8 shrink-0">
              <span className="text-gold/60 text-lg">✦</span>
              <span className="text-white/40 text-sm font-medium">{salon}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
