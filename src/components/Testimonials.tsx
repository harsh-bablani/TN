import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CEO, TechVentures Inc.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    text: 'TRIP NOISE transformed our corporate travel program completely. The precision and luxury they bring to every trip is unmatched. Our team travels in comfort and arrives ready to work.',
    rating: 5,
    location: 'New York → Tokyo',
  },
  {
    name: 'James Okafor',
    role: 'Sports Director, Elite Athletics',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
    text: "Managing travel for 40+ athletes used to be a nightmare. TRIP NOISE handled everything flawlessly — logistics, hotels, transfers. I can't imagine working with anyone else.",
    rating: 5,
    location: 'Lagos → Dubai',
  },
  {
    name: 'Dr. Priya Sharma',
    role: 'Dean, International Studies',
    avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150',
    text: 'Our university exchange programs have been seamlessly organized by TRIP NOISE for three consecutive years. Safe, reliable, and always on time. Highly recommended.',
    rating: 5,
    location: 'Mumbai → London',
  },
  {
    name: 'Marcus Chen',
    role: 'Event Producer, Luxe Events',
    avatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150',
    text: 'Coordinating VIP travel for major events requires absolute reliability. TRIP NOISE delivers every single time. Their attention to detail is extraordinary.',
    rating: 5,
    location: 'Singapore → Paris',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setIsAnimating(false);
    }, 300);
  };

  const prev = () => goTo((current - 1 + testimonials.length) % testimonials.length);
  const next = () => goTo((current + 1) % testimonials.length);

  useEffect(() => {
    timerRef.current = setTimeout(next, 5000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current]);

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

  const t = testimonials[current];

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-gradient-to-br from-brand-dark-blue to-brand-blue overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 section-animate">
          <span className="text-brand-yellow font-body font-semibold text-sm tracking-[0.3em] uppercase">
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-3">
            What Travelers Say
          </h2>
        </div>

        <div className="relative section-animate">
          <div
            className={`glass rounded-3xl p-8 sm:p-12 lg:p-16 transition-opacity duration-300 ${
              isAnimating ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-1 flex flex-col items-center lg:items-start gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-20 h-20 rounded-2xl object-cover border-2 border-brand-gold/40"
                />
                <div>
                  <div className="font-display font-bold text-white text-xl">{t.name}</div>
                  <div className="font-body text-white/60 text-sm mt-1">{t.role}</div>
                  <div className="flex items-center gap-1 mt-3">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <span key={i} className="text-brand-gold text-sm">★</span>
                    ))}
                  </div>
                  <div className="mt-3 inline-flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full text-white/70 text-xs font-body">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                    {t.location}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 flex flex-col justify-center">
                <Quote size={40} className="text-brand-gold/30 mb-4" />
                <p className="font-body text-white/85 text-lg sm:text-xl leading-relaxed italic">
                  "{t.text}"
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full glass border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-8 h-2.5 bg-brand-gold'
                      : 'w-2.5 h-2.5 bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full glass border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
