import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Stats from '@/components/Stats';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import ForPartners from '@/components/ForPartners';
import Testimonials from '@/components/Testimonials';
import AppDownload from '@/components/AppDownload';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <Stats />
      <HowItWorks />
      <Features />
      <Pricing />
      <FAQ />
      <ForPartners />
      <Testimonials />
      <AppDownload />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
