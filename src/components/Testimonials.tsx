import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'DAVID GASPER JAN\'GANDU',
    destination: 'Thailand Adventure',
    text: 'My Thailand trip was absolutely incredible! The beaches were pristine, the food was amazing, and the cultural experiences were unforgettable. TRIP NOISE planned everything perfectly.',
    rating: 5,
    travelType: 'Solo Adventure',
  },
  {
    name: 'MSHENGA SALIM BAKARI',
    destination: 'Dubai Luxury',
    text: 'Dubai exceeded all my expectations! From the Burj Khalifa to the desert safari, every moment was magical. The hotels and tours were top-class. Best vacation ever!',
    rating: 5,
    travelType: 'Luxury Travel',
  },
  {
    name: 'AWADH SALUM JUMA',
    destination: 'Singapore Explorer',
    text: 'Singapore was a dream come true! The Gardens by the Bay, Marina Bay Sands, and the street food were amazing. Everything was so well organized and hassle-free.',
    rating: 5,
    travelType: 'Family Trip',
  },
  {
    name: 'JAMAL SALEH ALLY',
    destination: 'Maldives Paradise',
    text: 'The Maldives was pure paradise! Crystal clear waters, overwater bungalows, and incredible snorkeling. TRIP NOISE made our honeymoon absolutely perfect.',
    rating: 5,
    travelType: 'Honeymoon',
  },
  {
    name: 'AHMEDI SHAHA JUMA',
    destination: 'Thailand Adventure',
    text: 'Amazing Thailand experience! The temples, beaches, and street food were incredible. TRIP NOISE made everything so smooth and enjoyable.',
    rating: 5,
    travelType: 'Adventure Travel',
  },
  {
    name: 'RAZAKI JUMA MBEGELENDI',
    destination: 'Dubai Luxury',
    text: 'Dubai was absolutely stunning! The luxury hotels, shopping, and desert safari were beyond amazing. Perfectly planned trip!',
    rating: 5,
    travelType: 'Luxury Travel',
  },
  {
    name: 'ATHUMANI IDDY SALUMU',
    destination: 'Singapore Explorer',
    text: 'Singapore was fantastic! The city is so clean and beautiful. Universal Studios and Gardens by the Bay were highlights.',
    rating: 5,
    travelType: 'Family Trip',
  },
  {
    name: 'SHARIF KHAMIS WILSON',
    destination: 'Maldives Paradise',
    text: 'The Maldives was like heaven on earth! Crystal clear waters, amazing resorts, and perfect weather. TRIP NOISE arranged everything perfectly.',
    rating: 5,
    travelType: 'Romantic Getaway',
  },
  {
    name: 'GIDION PAULO JOHN',
    destination: 'Thailand Adventure',
    text: 'Thailand exceeded my expectations! Phi Phi islands, Bangkok nightlife, and amazing food tours. Everything was well organized.',
    rating: 5,
    travelType: 'Solo Adventure',
  },
  {
    name: 'ALLY SADIKI KIPANDE',
    destination: 'Dubai Luxury',
    text: 'Dubai luxury experience was top-notch! Burj Khalifa, Dubai Mall, and desert safari were incredible. Highly recommended!',
    rating: 5,
    travelType: 'Luxury Travel',
  },
  {
    name: 'LAURENT HAJI SULEIMANI',
    destination: 'Singapore Explorer',
    text: 'Singapore family trip was amazing! Kids loved Universal Studios and the Night Safari. Very well planned itinerary.',
    rating: 5,
    travelType: 'Family Trip',
  },
  {
    name: 'ADOLF HAMIS ALLY',
    destination: 'Maldives Paradise',
    text: 'Maldives honeymoon was perfect! Overwater villa, spa treatments, and sunset dinners. TRIP NOISE made it special.',
    rating: 5,
    travelType: 'Honeymoon',
  },
  {
    name: 'NKWABI JOSEPH NKWABI',
    destination: 'Thailand Adventure',
    text: 'Thailand adventure was amazing! Beautiful beaches, great food, and wonderful cultural experiences. TRIP NOISE organized everything perfectly.',
    rating: 5,
    travelType: 'Adventure Travel',
  },
  {
    name: 'BASHIRI SALUM KIBAILA',
    destination: 'Dubai Luxury',
    text: 'Dubai luxury trip was incredible! Amazing hotels, shopping, and desert safari. Everything was perfectly planned by TRIP NOISE.',
    rating: 5,
    travelType: 'Luxury Travel',
  },
  {
    name: 'ATHUMANI JUMANNE NYAMLANI',
    destination: 'Singapore Explorer',
    text: 'Singapore was amazing! Clean city, beautiful attractions, and great food. TRIP NOISE made our family trip unforgettable.',
    rating: 5,
    travelType: 'Family Trip',
  },
  {
    name: 'CURTIS DARREL REID',
    destination: 'Maldives Paradise',
    text: 'The Maldives was paradise! Crystal clear waters, luxury resorts, and perfect beaches. TRIP NOISE arranged the perfect getaway.',
    rating: 5,
    travelType: 'Romantic Getaway',
  },
  {
    name: 'EDZAI SARAMUNDA',
    destination: 'Thailand Adventure',
    text: 'Thailand trip was fantastic! Great temples, beautiful beaches, and amazing street food. TRIP NOISE planned everything perfectly.',
    rating: 5,
    travelType: 'Solo Adventure',
  },
  {
    name: 'TWAHA ABDALLAH MKALE',
    destination: 'Dubai Luxury',
    text: 'Dubai luxury experience was outstanding! Burj Khalifa, shopping, and desert safari were incredible. Highly recommend TRIP NOISE!',
    rating: 5,
    travelType: 'Luxury Travel',
  },
  {
    name: 'RICHARD SIMON YOMBA',
    destination: 'Singapore Explorer',
    text: 'Singapore family trip was wonderful! Universal Studios and Gardens by the Bay were highlights. Everything was well organized.',
    rating: 5,
    travelType: 'Family Trip',
  },
  {
    name: 'JOEL GEORGE BALISIDYA',
    destination: 'Maldives Paradise',
    text: 'Maldives honeymoon was perfect! Overwater villa, spa treatments, and amazing beaches. TRIP NOISE made it special.',
    rating: 5,
    travelType: 'Honeymoon',
  },
  {
    name: 'COSMAS CHRISTOPHER KOMBA',
    destination: 'Thailand Adventure',
    text: 'Thailand adventure was incredible! Beautiful islands, great culture, and amazing food. TRIP NOISE organized everything perfectly.',
    rating: 5,
    travelType: 'Adventure Travel',
  },
  {
    name: 'ISMAIL JUMA ILUNGA',
    destination: 'Dubai Luxury',
    text: 'Dubai luxury trip was amazing! World-class hotels, shopping, and desert safari. TRIP NOISE made everything seamless.',
    rating: 5,
    travelType: 'Luxury Travel',
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
            <div className="text-center">
              <div className="mb-8">
                <div className="font-display font-bold text-white text-2xl mb-2">{t.name}</div>
                <div className="inline-flex items-center gap-1.5 bg-brand-gold/20 px-4 py-2 rounded-full text-brand-gold text-sm font-body font-semibold mb-4">
                  <span className="w-2 h-2 rounded-full bg-brand-gold" />
                  {t.destination}
                </div>
                <div className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full text-white/70 text-xs font-body">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                  {t.travelType}
                </div>
              </div>

              <div className="flex justify-center mb-6">
                <Quote size={40} className="text-brand-gold/30" />
              </div>
              
              <p className="font-body text-white/85 text-lg sm:text-xl leading-relaxed italic max-w-3xl mx-auto mb-6">
                "{t.text}"
              </p>

              <div className="flex items-center justify-center gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-brand-gold text-lg">★</span>
                ))}
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
