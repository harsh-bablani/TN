import HeroSection from '../components/HeroSection';
import TNCards from '../components/TNCards';
import SignatureSection from '../components/SignatureSection';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUs from '../components/WhyChooseUs';
import VideoSection from '../components/VideoSection';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <main>
      <HeroSection onNavigate={onNavigate} />
      <TNCards />
      <SignatureSection />
      <ServicesSection />
      <WhyChooseUs />
      <VideoSection />
      <Testimonials />
      <CTASection onNavigate={onNavigate} />
    </main>
  );
}
