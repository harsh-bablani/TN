import { ChevronDown, Compass, Calendar, ShieldCheck, Headphones, Camera, Gem } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (page: string) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="relative w-full h-[100dvh] min-h-[600px] md:h-screen md:min-h-[700px] overflow-hidden flex items-center">
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-[75%_center] md:bg-center bg-no-repeat transition-all duration-700"
        style={{
          backgroundImage: "url('/Hero.png')"
        }}
      />
      
      <div className="absolute inset-0 bg-black/40 md:bg-black/30" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-12 lg:px-20 py-8 md:py-12">
        <div className="max-w-xl">
          <div
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 md:px-4.5 md:py-2 rounded-full mb-6 text-white text-[10px] md:text-[11px] font-body font-semibold tracking-[0.2em] md:tracking-[0.25em] uppercase"
            style={{ animationDelay: '0.2s' }}
          >
            <Compass size={13} className="text-white/80" />
            Premium Travel Experience
          </div>

          <h1
            className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6"
            style={{ textShadow: '0 4px 20px rgba(0,0,0,0.4)' }}
          >
            Unleash
            <br />
            <span className="text-brand-gold italic">Silent Trails</span>
          </h1>

          <div className="w-14 md:w-20 h-1 bg-brand-gold/50 mb-6 md:mb-8 rounded-full" />

          <p className="font-body text-base md:text-xl text-white/90 max-w-sm md:max-w-lg mb-10 font-light leading-relaxed">
            Experience travel with precision, luxury, and peace.
            Your journey. Redefined.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 items-stretch sm:items-start">
            <button
              onClick={() => onNavigate('packages')}
              className="group bg-brand-gold hover:bg-brand-yellow text-brand-dark-blue px-8 py-3.5 md:px-9 md:py-4 rounded-xl text-sm md:text-base font-body font-bold tracking-wide shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
            >
              <Compass size={19} className="group-hover:rotate-45 transition-transform duration-500" />
              Explore Trips
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="group border-2 border-white/30 hover:border-white bg-white/10 backdrop-blur-md text-white px-8 py-3.5 md:px-9 md:py-4 rounded-xl text-sm md:text-base font-body font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-3"
            >
              <Calendar size={19} />
              Book Now
            </button>
          </div>
        </div>
      </div>


    </section>
  );
}
