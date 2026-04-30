import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (page: string) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden flex items-center justify-center">
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark-blue/70 via-brand-dark-blue/50 to-brand-dark-blue/70" />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div
          className="inline-flex items-center gap-2 glass px-5 py-2 rounded-full mb-8 text-brand-yellow text-xs font-body font-semibold tracking-[0.25em] uppercase"
          style={{ animationDelay: '0.2s' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
          Premium Travel Experience
        </div>

        <h1
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] mb-6"
          style={{ textShadow: '0 4px 30px rgba(0,0,0,0.4)' }}
        >
          Unleash
          <br />
          <span className="text-gradient-gold italic">Silent Trails</span>
        </h1>

        <p className="font-body text-lg sm:text-xl text-white/80 max-w-xl mx-auto mb-10 font-light leading-relaxed">
          Experience travel with precision, luxury, and peace.
          <br className="hidden sm:block" />
          Your journey. Redefined.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => {
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-gold px-10 py-4 rounded-2xl text-base font-body font-bold tracking-wide shadow-2xl"
          >
            Explore Trips
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="btn-outline px-10 py-4 rounded-2xl text-base font-body tracking-wide"
          >
            Book Now
          </button>
        </div>
      </div>

      <a
        href="#signature"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-brand-gold transition-colors animate-float"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById('signature')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <ChevronDown size={32} strokeWidth={1.5} />
      </a>

          </section>
  );
}
