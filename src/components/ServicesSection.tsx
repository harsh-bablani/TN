import { useRef, useEffect } from 'react';
import { Globe, MapPin, Compass, DollarSign, Users, Headphones, Shield, Users2, Plane, Hotel, Calendar, FileText, Car } from 'lucide-react';

const services = [
    {
    icon: MapPin,
    title: 'Customized Itineraries',
    description: 'Personalized travel plans tailored to your preferences, interests, and budget.',
    color: '#0D3B82',
  },
  {
    icon: Compass,
    title: 'Adventure Travel',
    description: 'Thrilling experiences for adventure seekers, from trekking to water sports and beyond.',
    color: '#1E5AA8',
  },
    {
    icon: Users,
    title: 'Local Experiences',
    description: 'Authentic cultural immersion with local guides and exclusive access to hidden gems.',
    color: '#1E5AA8',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock assistance throughout your journey for peace of mind.',
    color: '#0D3B82',
  },
  {
    icon: Shield,
    title: 'Travel Insurance',
    description: 'Comprehensive coverage options for a worry-free travel experience.',
    color: '#1E5AA8',
  },
  {
    icon: Users2,
    title: 'Group Bookings',
    description: 'Special arrangements and discounts for family reunions, corporate retreats, and group travel.',
    color: '#0D3B82',
  },
  {
    icon: Plane,
    title: 'Flight Booking',
    description: 'Seamless flight booking services with competitive prices and global coverage.',
    color: '#1E5AA8',
  },
  {
    icon: Hotel,
    title: 'Hotel Accommodation',
    description: 'Handpicked hotels offering comfort, convenience, and great value at every destination.',
    color: '#0D3B82',
  },
  {
    icon: Calendar,
    title: 'Holiday Packages',
    description: 'All-inclusive holiday packages designed for relaxation, adventure, and cultural exploration.',
    color: '#1E5AA8',
  },
  {
    icon: FileText,
    title: 'Visa Assistance',
    description: 'Expert support in securing travel visas for all your international journeys.',
    color: '#0D3B82',
  },
  {
    icon: Car,
    title: 'Car Rental',
    description: 'Convenient and reliable car rental services at your destination.',
    color: '#1E5AA8',
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.section-animate').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
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
    <section id="services" ref={sectionRef} className="py-24 px-6 bg-brand-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 section-animate">
          <span className="text-brand-blue font-body font-semibold text-sm tracking-[0.3em] uppercase">
            What We Offer
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-dark-blue mt-3 mb-4">
            Our Services
          </h2>
          <p className="text-gray-500 font-body max-w-2xl mx-auto text-base leading-relaxed">
            Smart travel solutions for every need — from corporate boardrooms to mountain trails,
            we deliver seamless, world-class experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card section-animate bg-white rounded-2xl p-8 card-hover border border-gray-100 cursor-default"
            >
              <div className="service-icon-wrap mb-6">
                <service.icon size={26} className="text-brand-blue" strokeWidth={1.8} />
              </div>
              <h3 className="font-display text-xl font-bold text-brand-dark-blue mb-3">
                {service.title}
              </h3>
              <p className="font-body text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>
              <div className="mt-6 flex items-center gap-2 text-brand-blue font-body font-semibold text-sm">
                <span>Learn more</span>
                <div className="w-5 h-0.5 bg-brand-gold rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
