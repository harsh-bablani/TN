import { useRef, useEffect } from 'react';
import { Target, Eye, Heart, Globe, Award, Users, Briefcase, GraduationCap, Trophy, Landmark, Calendar } from 'lucide-react';

function useAnimateSection() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.section-animate, .slide-animate-left, .slide-animate-right').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return ref;
}

const services = [
  { icon: Briefcase, label: 'Corporate Travel' },
  { icon: Calendar, label: 'Event Travel' },
  { icon: Globe, label: 'Tourism Packages' },
  { icon: Landmark, label: 'Government Travel' },
];

const values = [
  {
    icon: Heart,
    title: 'Passion for Travel',
    description: 'Every trip we plan is infused with genuine passion for creating meaningful, memorable experiences.',
  },
  {
    icon: Award,
    title: 'Excellence First',
    description: 'We set the highest standards in service quality, reliability, and traveler satisfaction.',
  },
  {
    icon: Users,
    title: 'People-Centric',
    description: 'Our travelers are at the center of everything. Personal attention, real care, zero compromise.',
  },
  {
    icon: Globe,
    title: 'Global Mindset',
    description: 'With partners across 60+ countries, we bring the world closer to you.',
  },
];

export default function About() {
  const heroRef = useAnimateSection();
  const storyRef = useAnimateSection();
  const mvRef = useAnimateSection();
  const teamRef = useAnimateSection();
  const valuesRef = useAnimateSection();
  const servicesRef = useAnimateSection();

  return (
    <main className="bg-brand-bg">
      <section
        ref={heroRef}
        className="relative pt-32 md:pt-48 pb-20 md:pb-28 px-6 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0D3B82 0%, #1E5AA8 60%, #0D3B82 100%)',
        }}
      >
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1920")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0D3B82cc, #1E5AA8cc)' }} />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="section-animate">
            <span className="inline-flex items-center gap-2 text-brand-yellow font-body text-sm font-semibold tracking-[0.3em] uppercase mb-6">
              <span className="w-6 h-0.5 bg-brand-gold rounded-full" />
              About Us
              <span className="w-6 h-0.5 bg-brand-gold rounded-full" />
            </span>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">
              The Story Behind
              <br />
              <span className="text-gradient-gold italic">TRIP NOISE</span>
            </h1>
            <p className="font-body text-white/75 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Born from a vision to make every journey seamless, luxurious, and deeply personal.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-brand-bg to-transparent" />
      </section>

      <section ref={storyRef} className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="slide-animate-left">
              <span className="text-brand-blue font-body font-semibold text-sm tracking-[0.3em] uppercase">
                Our Story
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-dark-blue mt-3 mb-6 leading-tight">
                Where Luxury Meets
                <br />
                <span className="text-gradient-gold">Purpose</span>
              </h2>
              <div className="space-y-4 font-body text-gray-600 text-base leading-relaxed">
                <p>
                  TRIP NOISE was founded on a simple but powerful belief: travel should never be stressful.
                  In a world full of noise — overwhelming choices, unreliable services, and chaotic logistics —
                  we created an oasis of calm, precision, and luxury.
                </p>
                <p>
                  What started as a boutique corporate travel agency has grown into a globally recognized
                  travel management company, serving thousands of individuals, corporations, institutions,
                  and government bodies across the world.
                </p>
                <p>
                  Our team of seasoned travel professionals, tech-driven planners, and hospitality experts
                  work in harmony to ensure every trip is not just a journey — but an unforgettable experience.
                </p>
              </div>
            </div>

            <div className="slide-animate-right grid grid-cols-1 sm:grid-cols-2 gap-5">
              <img
                src="https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Travel destination"
                className="rounded-2xl h-48 w-full object-cover"
              />
              <img
                src="https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Luxury travel"
                className="rounded-2xl h-48 w-full object-cover mt-8"
              />
              <img
                src="https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Mountain journey"
                className="rounded-2xl h-48 w-full object-cover -mt-8"
              />
              <img
                src="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Scenic road"
                className="rounded-2xl h-48 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section ref={teamRef} className="relative py-32 px-6 bg-gradient-to-br from-brand-dark-blue via-brand-dark-blue/95 to-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-gold/5 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20 section-animate">
            <div className="inline-flex items-center gap-3 glass px-6 py-3 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
              <span className="text-brand-gold font-body font-semibold text-sm tracking-[0.25em] uppercase">Leadership</span>
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Meet Our <span className="text-gradient-gold">Visionaries</span>
            </h2>
            <p className="text-white/80 max-w-3xl mx-auto text-xl font-light leading-relaxed">
              The brilliant minds behind TRIP NOISE, combining decades of expertise with innovative thinking to redefine travel excellence
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Top Row: Neeraj and Rajesh */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
              {/* Neeraj Vatwani */}
              <div className="section-animate">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-brand-gold/20 to-brand-yellow/20 rounded-3xl blur-xl group-hover:from-brand-gold/30 group-hover:to-brand-yellow/30 transition-all duration-500 opacity-75" />
                  <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-brand-gold/20">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="relative flex-shrink-0">
                        <div className="absolute -inset-2 bg-gradient-to-r from-brand-gold to-brand-yellow rounded-lg blur-lg opacity-50" />
                        <div className="relative w-48 rounded-lg overflow-hidden border-4 border-white/20">
                          <img
                            src="/Neeraj.jpg"
                            alt="Neeraj Vatwani"
                            className="w-full h-auto block group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      </div>

                      <div className="flex-1 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brand-gold to-brand-yellow rounded-full mb-4">
                          <span className="text-brand-dark-blue font-body font-bold text-xs tracking-wider uppercase">CEO & PARTNER</span>
                        </div>
                        <h3 className="font-display text-3xl font-bold text-white mb-4">
                          Neeraj Vatwani
                        </h3>
                        <p className="text-white/80 font-light leading-relaxed mb-6">
                          Drawing on 10+ years of experience across African and Gulf markets, Neeraj offers a unique global perspective shaped by deep regional understanding and strategic business leadership. His vision for innovation and operational excellence continues to guide TRIP NOISE toward sustainable international growth.
                        </p>
                        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                          {['Strategic Vision', 'Operational Excellence', 'Innovation', 'Global Leadership'].map((skill) => (
                            <span key={skill} className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs text-white/90">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rajesh Nankani */}
              <div className="section-animate">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-brand-gold/20 to-brand-yellow/20 rounded-3xl blur-xl group-hover:from-brand-gold/30 group-hover:to-brand-yellow/30 transition-all duration-500 opacity-75" />
                  <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-brand-gold/20 min-h-[380px] lg:max-w-[800px]">
                    <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                      <div className="relative flex-shrink-0">
                        <div className="absolute -inset-2 bg-gradient-to-r from-brand-gold to-brand-yellow rounded-lg blur-lg opacity-50" />
                        <div className="relative w-48 rounded-lg overflow-hidden border-4 border-white/20">
                          <img
                            src="/RN.jpeg"
                            alt="Rajesh Nankani"
                            className="w-full h-auto block group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      </div>

                      <div className="flex-1 text-center md:text-right">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brand-gold to-brand-yellow rounded-full mb-4">
                          <span className="text-brand-dark-blue font-body font-bold text-xs tracking-wider uppercase">MANAGING DIRECTOR & PARTNER</span>
                        </div>
                        <h3 className="font-display text-3xl font-bold text-white mb-4">
                          Rajesh Nankani
                        </h3>
                        <p className="text-white/80 font-light leading-relaxed mb-6">
                          Rajesh Nankani is a seasoned travel industry professional with over 8 years of experience in sales, business development and leadership. Having progressed from Sales Executive to leadership roles including Country Manager and Regional Manager, he has developed strong expertise in global travel markets and customer engagement.
                        </p>
                        <div className="flex flex-wrap gap-2 justify-center md:justify-end">
                          {['Business Growth', 'Client Relations', 'Global Expansion', 'Service Excellence'].map((skill) => (
                            <span key={skill} className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs text-white/90">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row: Manish centered */}
            <div className="flex justify-center">
              <div className="w-full max-w-2xl section-animate">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-brand-gold/20 to-brand-yellow/20 rounded-3xl blur-xl group-hover:from-brand-gold/30 group-hover:to-brand-yellow/30 transition-all duration-500 opacity-75" />
                  <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-brand-gold/20">
                    <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                      <div className="relative flex-shrink-0">
                        <div className="absolute -inset-2 bg-gradient-to-r from-brand-gold to-brand-yellow rounded-lg blur-lg opacity-50" />
                        <div className="relative w-48 rounded-lg overflow-hidden border-4 border-white/20">
                          <img
                            src="/Manish.png"
                            alt="Manish Motiyani"
                            className="w-full h-auto block group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      </div>

                      <div className="flex-1 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brand-gold to-brand-yellow rounded-full mb-4">
                          <span className="text-brand-dark-blue font-body font-bold text-xs tracking-wider uppercase">COO & PARTNER</span>
                        </div>
                        <h3 className="font-display text-3xl font-bold text-white mb-4">
                          Manish Motiyani
                        </h3>
                        <p className="text-white/80 font-light leading-relaxed mb-6">
                          Drawing on 5+ years of experience across African and Gulf markets, Manish offers a unique global perspective shaped by deep regional understanding and strategic business leadership. His vision for innovation and operational excellence continues to guide TRIP NOISE toward sustainable international growth.
                        </p>
                        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                          {['Operations Management', 'Strategic Partnerships', 'Customer Experience', 'Business Growth'].map((skill) => (
                            <span key={skill} className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs text-white/90">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center section-animate">
            <div className="inline-flex items-center gap-8 text-white/60">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-brand-gold rounded-full" />
                <span className="text-sm">15+ Years Combined Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-brand-gold rounded-full" />
                <span className="text-sm">Global Travel Expertise</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-brand-gold rounded-full" />
                <span className="text-sm">Innovation-Driven Leadership</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={mvRef} className="py-24 px-6 bg-brand-bg">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="section-animate bg-white rounded-3xl p-10 border border-gray-100 card-hover">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-dark-blue flex items-center justify-center mb-6 shadow-lg">
                <Target size={24} className="text-white" />
              </div>
              <h3 className="font-display text-2xl font-bold text-brand-dark-blue mb-4">Our Mission</h3>
              <p className="font-body text-gray-500 leading-relaxed">
                To deliver seamless, smart, and luxurious travel experiences that eliminate complexity
                and maximize joy. We exist to make every traveler feel valued, secure, and inspired —
                whether they're crossing a city or crossing continents.
              </p>
            </div>

            <div className="section-animate bg-gradient-to-br from-brand-blue to-brand-dark-blue rounded-3xl p-10 card-hover">
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                <Eye size={24} className="text-brand-gold" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="font-body text-white/75 leading-relaxed">
                To redefine travel globally — becoming the world's most trusted and innovative travel
                management company. We envision a future where every journey is perfectly engineered,
                every traveler is completely satisfied, and every destination feels like home.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section ref={valuesRef} className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 section-animate">
            <span className="text-brand-blue font-body font-semibold text-sm tracking-[0.3em] uppercase">
              What Drives Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-dark-blue mt-3">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="section-animate text-center p-8 rounded-2xl bg-brand-bg hover:bg-white border border-transparent hover:border-brand-blue/10 card-hover transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-dark-blue flex items-center justify-center mb-5 mx-auto shadow-md">
                  <value.icon size={24} className="text-white" />
                </div>
                <h3 className="font-display text-lg font-bold text-brand-dark-blue mb-3">
                  {value.title}
                </h3>
                <p className="font-body text-gray-500 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={servicesRef} className="py-24 px-6 bg-brand-bg">
        <div className="max-w-7xl mx-auto text-center">
          <div className="section-animate mb-16">
            <span className="text-brand-blue font-body font-semibold text-sm tracking-[0.3em] uppercase">
              What We Do
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-dark-blue mt-3">
              Our Services at a Glance
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-2xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="section-animate group p-6 rounded-2xl bg-white hover:bg-brand-dark-blue card-hover border border-gray-100 transition-all duration-400 cursor-default">
                <service.icon
                  size={28}
                  className="text-brand-blue group-hover:text-brand-gold mx-auto mb-3 transition-colors"
                  strokeWidth={1.8}
                />
                <p className="font-body font-semibold text-brand-dark-blue group-hover:text-white text-sm transition-colors">
                  {service.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-r from-brand-dark-blue to-brand-blue">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '10K+', label: 'Happy Travelers' },
              { number: '60+', label: 'Countries' },
              { number: '500+', label: 'Partners' },
              { number: '8+', label: 'Years Experience' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-4xl font-bold text-brand-gold mb-2">{stat.number}</div>
                <div className="font-body text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
