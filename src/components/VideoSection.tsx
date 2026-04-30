import { useRef, useEffect } from 'react';
import { Play } from 'lucide-react';

export default function VideoSection() {
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
    <section ref={sectionRef} className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=1920"
      >
        <source
          src="https://videos.pexels.com/video-files/2169880/2169880-hd_1920_1080_25fps.mp4"
          type="video/mp4"
        />
        <source
          src="https://videos.pexels.com/video-files/3571264/3571264-hd_1920_1080_25fps.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark-blue/80 via-brand-dark-blue/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      <div className="relative z-10 h-full flex items-center px-6">
        <div className="max-w-3xl section-animate">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center animate-pulse-gold">
              <Play size={20} className="text-brand-gold fill-brand-gold ml-0.5" />
            </div>
            <span className="text-brand-yellow font-body text-sm font-semibold tracking-[0.25em] uppercase">
              The Journey
            </span>
          </div>

          <h2
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6"
            style={{ textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
          >
            Not just travel.
            <br />
            <span className="text-gradient-gold italic">It's an experience.</span>
          </h2>

          <p className="font-body text-white/75 text-lg leading-relaxed max-w-lg">
            Every destination has a story. We make sure yours is extraordinary —
            crafted with detail, delivered with care.
          </p>

          <div className="mt-8 flex gap-8">
            {[
              { number: '10K+', label: 'Trips Completed' },
              { number: '98%', label: 'Satisfaction Rate' },
              { number: '60+', label: 'Countries Covered' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl font-bold text-brand-gold">{stat.number}</div>
                <div className="font-body text-white/60 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
