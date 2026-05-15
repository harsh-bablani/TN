import { useEffect, useRef } from 'react';
import { Globe, MapPin, Compass, DollarSign, Users, Headphones, Shield, Users2, Plane, Hotel, Calendar, FileText, Car, ArrowRight, Star } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'International Tours',
    description: 'Explore the world with our carefully curated international tour packages to exotic destinations.',
    features: ['Multiple destinations', 'Expert guides', 'Cultural experiences', 'All-inclusive packages'],
    color: '#1E5AA8',
  },
  {
    icon: MapPin,
    title: 'Customized Itineraries',
    description: 'Personalized travel plans tailored to your preferences, interests, and budget.',
    features: ['Personalized planning', 'Flexible scheduling', 'Budget optimization', 'Unique experiences'],
    color: '#0D3B82',
  },
  {
    icon: Compass,
    title: 'Adventure Travel',
    description: 'Thrilling experiences for adventure seekers, from trekking to water sports and beyond.',
    features: ['Extreme sports', 'Wildlife safaris', 'Mountain trekking', 'Water adventures'],
    color: '#1E5AA8',
  },
  {
    icon: DollarSign,
    title: 'Affordable Packages',
    description: 'Budget-friendly options without compromising on quality or experiences.',
    features: ['Best price guarantee', 'Group discounts', 'Seasonal offers', 'Early bird specials'],
    color: '#0D3B82',
  },
  {
    icon: Users,
    title: 'Local Experiences',
    description: 'Authentic cultural immersion with local guides and exclusive access to hidden gems.',
    features: ['Local guides', 'Cultural workshops', 'Hidden gems', 'Authentic cuisine'],
    color: '#1E5AA8',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock assistance throughout your journey for peace of mind.',
    features: ['24/7 hotline', 'Emergency support', 'Travel assistance', 'Multi-language support'],
    color: '#0D3B82',
  },
  {
    icon: Shield,
    title: 'Travel Insurance',
    description: 'Comprehensive coverage options for a worry-free travel experience.',
    features: ['Medical coverage', 'Trip protection', 'Baggage insurance', 'Emergency evacuation'],
    color: '#1E5AA8',
  },
  {
    icon: Users2,
    title: 'Group Bookings',
    description: 'Special arrangements and discounts for family reunions, corporate retreats, and group travel.',
    features: ['Group discounts', 'Custom planning', 'Coordinated logistics', 'Special accommodations'],
    color: '#0D3B82',
  },
  {
    icon: Plane,
    title: 'Flight Booking',
    description: 'Seamless flight booking services with competitive prices and global coverage.',
    features: ['Best prices', 'Multiple airlines', 'Flexible dates', 'Seat selection'],
    color: '#1E5AA8',
  },
  {
    icon: Hotel,
    title: 'Hotel Accommodation',
    description: 'Handpicked hotels offering comfort, convenience, and great value at every destination.',
    features: ['Premium hotels', 'Budget options', 'Special rates', 'Verified properties'],
    color: '#0D3B82',
  },
  {
    icon: Calendar,
    title: 'Holiday Packages',
    description: 'All-inclusive holiday packages designed for relaxation, adventure, and cultural exploration.',
    features: ['Seasonal packages', 'Festival tours', 'Beach holidays', 'Mountain retreats'],
    color: '#1E5AA8',
  },
  {
    icon: FileText,
    title: 'Visa Assistance',
    description: 'Expert support in securing travel visas for all your international journeys.',
    features: ['Document preparation', 'Application assistance', 'Fast processing', 'Expert consultation'],
    color: '#0D3B82',
  },
  {
    icon: Car,
    title: 'Car Rental',
    description: 'Convenient and reliable car rental services at your destination.',
    features: ['Airport pickup', 'Various vehicles', 'GPS navigation', 'Insurance included'],
    color: '#1E5AA8',
  },
];

export default function Services() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg">
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 md:pt-48 pb-20 md:pb-28 px-6 bg-gradient-to-br from-brand-dark-blue to-brand-dark-blue/80 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 glass px-5 py-2 rounded-full mb-8 text-brand-gold text-xs font-body font-semibold tracking-[0.25em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
            Premium Travel Services
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Our <span className="text-gradient-gold">Services</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
            Discover our comprehensive range of travel services designed to make your journey unforgettable. 
            From international tours to local experiences, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-dark-blue mb-4">
              Complete Travel Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Everything you need for the perfect travel experience, all in one place
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              >
                <div className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-dark-blue to-brand-blue rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon size={32} className="text-white" strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="font-display text-2xl font-bold text-brand-dark-blue mb-4 group-hover:text-brand-blue transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-brand-gold rounded-full flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="mt-6 flex items-center gap-2 text-brand-dark-blue font-semibold hover:text-brand-gold transition-colors duration-300">
                    <span>Learn More</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-brand-dark-blue to-brand-blue text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Star className="text-brand-gold" size={32} />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            Let us help you plan the perfect trip with our expert travel services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-gold px-8 py-4 rounded-2xl text-base font-body font-bold tracking-wide shadow-2xl">
              Get Started
            </button>
            <button className="btn-outline px-8 py-4 rounded-2xl text-base font-body tracking-wide border-white text-white hover:bg-white hover:text-brand-dark-blue transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
