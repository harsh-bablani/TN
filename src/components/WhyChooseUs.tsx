import { useRef, useEffect } from 'react';
import { Brain, Headphones, Star, DollarSign, Network, CheckCircle } from 'lucide-react';

const reasons = [
  {
    icon: Brain,
    title: 'Smart Planning',
    description: 'AI-assisted itinerary design tailored to your preferences, schedule, and budget.',
  },
  {
    icon: Headphones,
    title: 'Real-Time Support',
    description: '24/7 dedicated travel concierge available at every step of your journey.',
  },
  {
    icon: Star,
    title: 'Luxury Experience',
    description: 'Curated premium stays, executive transfers, and elite services at every destination.',
  },
  {
    icon: DollarSign,
    title: 'Cost Efficiency',
    description: 'Best-value travel packages with no compromises on quality or comfort.',
  },
  {
    icon: Network,
    title: 'Partner Travel',
    description: 'Partnerships with 500+ partners across 60+ countries for seamless worldwide travel.',
  },
  {
    icon: CheckCircle,
    title: 'Trusted & Reliable',
    description: 'Thousands of satisfied travelers. Certified, insured, and globally recognized.',
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.section-animate, .slide-animate-left, .slide-animate-right').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120);
            });
          }
        });
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="slide-animate-left">
            <span className="text-brand-blue font-body font-semibold text-sm tracking-[0.3em] uppercase">
              Why Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-dark-blue mt-3 mb-6 leading-tight">
              Why Choose
              <br />
              <span className="text-gradient-gold">TRIP NOISE?</span>
            </h2>
            <p className="font-body text-gray-500 text-base leading-relaxed mb-8">
              We don't just book trips — we engineer experiences. From the first click to your
              final destination, every moment is orchestrated with precision and care.
            </p>

            <div className="flex flex-wrap gap-4">
              {['500+ Partners', '60+ Countries', '10K+ Travelers', '4.9★ Rating'].map((stat) => (
                <div
                  key={stat}
                  className="px-5 py-3 bg-brand-bg rounded-xl border border-brand-blue/10 text-brand-dark-blue font-body font-semibold text-sm"
                >
                  {stat}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 slide-animate-right">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-brand-bg hover:bg-gradient-to-br hover:from-brand-blue hover:to-brand-dark-blue transition-all duration-400 border border-transparent hover:border-brand-blue/20 cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-white/20 flex items-center justify-center mb-4 transition-colors shadow-sm">
                  <reason.icon size={22} className="text-brand-blue group-hover:text-brand-yellow transition-colors" strokeWidth={1.8} />
                </div>
                <h3 className="font-display font-bold text-brand-dark-blue group-hover:text-white text-base mb-2 transition-colors">
                  {reason.title}
                </h3>
                <p className="font-body text-gray-500 group-hover:text-white/75 text-sm leading-relaxed transition-colors">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
