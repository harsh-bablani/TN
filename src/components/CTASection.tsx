import { useRef, useEffect } from 'react';
import { ArrowRight, Plane } from 'lucide-react';

interface CTASectionProps {
  onNavigate: (page: string) => void;
}

export default function CTASection({ onNavigate }: CTASectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.section-animate').forEach((el) => el.classList.add('visible'));
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-brand-bg overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <div className="section-animate">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-gold to-brand-yellow mb-8 shadow-xl animate-float mx-auto">
            <Plane size={28} className="text-brand-dark-blue" />
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-brand-dark-blue leading-tight mb-6">
            Start Your Journey
            <br />
            <span className="text-gradient-gold italic">Today</span>
          </h2>

          <p className="font-body text-gray-500 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Join thousands of travelers who trust TRIP NOISE for seamless, luxurious, and
            noise-free travel experiences around the globe.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="btn-gold px-12 py-5 rounded-2xl text-lg font-body font-bold tracking-wide shadow-2xl flex items-center gap-3 group"
            >
              Book Now
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => {
                onNavigate('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-12 py-5 rounded-2xl text-lg font-body font-semibold text-brand-blue border-2 border-brand-blue/20 hover:border-brand-blue hover:bg-brand-blue/5 transition-all duration-300"
            >
              Our Story
            </button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm font-body text-gray-400">
            {['No hidden fees', 'Free cancellation', '24/7 support', 'Best price guarantee'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
