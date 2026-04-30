import { useRef, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function SignatureSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.section-animate, .slide-animate-left, .slide-animate-right').forEach((el) => {
              el.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="signature" ref={sectionRef} className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 section-animate">
          <span className="text-brand-blue font-body font-semibold text-sm tracking-[0.3em] uppercase">
            Our Identity
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-dark-blue mt-3">
            The TRIP NOISE Signature
          </h2>
          <p className="text-gray-500 font-body mt-4 max-w-lg mx-auto">
            Two pillars of an extraordinary travel experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <div className="signature-card rounded-3xl h-[520px] lg:h-[600px] slide-animate-left">
            <video
              className="absolute inset-0 w-full h-full rounded-3xl"
              autoPlay
              muted
              loop
              playsInline
              poster="https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=800"
            >
              <source
                src="https://videos.pexels.com/video-files/2169880/2169880-hd_1280_720_25fps.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

            <div className="absolute inset-0 rounded-3xl p-8 flex flex-col justify-between">
              <div className="font-display text-[120px] lg:text-[160px] font-bold text-white/10 leading-none select-none">
                T
              </div>
              <div>
                <div className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full mb-4 text-brand-yellow text-xs font-semibold tracking-widest uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                  Signature
                </div>
                <h3 className="font-display text-4xl lg:text-5xl font-bold text-white mb-3">
                  Travel
                </h3>
                <p className="font-body text-white/75 text-base leading-relaxed max-w-sm">
                  Curated journeys across roads, skies, and destinations. Every mile crafted for you.
                </p>
                <button className="mt-6 flex items-center gap-2 text-brand-gold font-body font-semibold text-sm group">
                  Discover More
                  <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          <div className="signature-card rounded-3xl h-[520px] lg:h-[600px] slide-animate-right">
            <video
              className="absolute inset-0 w-full h-full rounded-3xl"
              autoPlay
              muted
              loop
              playsInline
              poster="https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800"
            >
              <source
                src="https://videos.pexels.com/video-files/1448735/1448735-hd_1920_1080_24fps.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-brand-dark-blue/90 via-brand-dark-blue/40 to-brand-blue/20" />

            <div className="absolute inset-0 rounded-3xl p-8 flex flex-col justify-between">
              <div className="font-display text-[120px] lg:text-[160px] font-bold text-white/10 leading-none select-none text-right">
                N
              </div>
              <div>
                <div className="inline-flex items-center gap-2 bg-brand-gold/20 border border-brand-gold/40 px-4 py-1.5 rounded-full mb-4 text-brand-yellow text-xs font-semibold tracking-widest uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                  Experience
                </div>
                <h3 className="font-display text-4xl lg:text-5xl font-bold text-white mb-3">
                  Noise-Free<br />Experience
                </h3>
                <p className="font-body text-white/75 text-base leading-relaxed max-w-sm">
                  Calm, peaceful, and seamless. We handle every detail so you travel without stress.
                </p>
                <button className="mt-6 flex items-center gap-2 text-brand-gold font-body font-semibold text-sm group">
                  Learn More
                  <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
