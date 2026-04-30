import { useEffect } from 'react';
import { MapPin, Clock, Users, Star, Calendar, Heart, ArrowRight, Sparkles } from 'lucide-react';

const packages = [
  {
    id: 1,
    destination: "Dubai",
    title: "Luxury Dubai Experience",
    description: "Experience the ultimate luxury in the city of gold. From world-class shopping to breathtaking architecture, Dubai offers an unforgettable blend of modern opulence and traditional charm.",
    duration: "5 Days / 4 Nights",
    highlights: [
      "Burj Khalifa & Dubai Mall",
      "Desert Safari Experience",
      "Dubai Marina Cruise",
      "Gold Souk Shopping",
      "Helicopter City Tour"
    ],
    image: "https://images.unsplash.com/photo-1512453972445-04ea9d1125ad?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4.9,
    reviews: 324,
    category: "Luxury",
    bestFor: "Couples, Families"
  },
  {
    id: 2,
    destination: "Singapore",
    title: "Garden City Adventure",
    description: "Discover the perfect blend of nature and innovation in Singapore. From the iconic Gardens by the Bay to vibrant cultural districts, experience Asia's most modern city-state.",
    duration: "4 Days / 3 Nights",
    highlights: [
      "Gardens by the Bay",
      "Universal Studios Singapore",
      "Sentosa Island Tour",
      "Chinatown & Little India",
      "Marina Bay Sands SkyPark"
    ],
    image: "https://images.unsplash.com/photo-1528702748837-1a314b5a8659?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4.8,
    reviews: 256,
    category: "Adventure",
    bestFor: "Families, Solo Travelers"
  },
  {
    id: 3,
    destination: "Thailand",
    title: "Tropical Thailand Paradise",
    description: "Immerse yourself in the land of smiles. From pristine beaches to ancient temples, Thailand offers a perfect mix of relaxation, adventure, and cultural exploration.",
    duration: "7 Days / 6 Nights",
    highlights: [
      "Bangkok Temple Tours",
      "Phuket Beach Paradise",
      "Phi Phi Island Hopping",
      "Thai Cooking Class",
      "Elephant Sanctuary Visit"
    ],
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.9,
    reviews: 412,
    category: "Beach",
    bestFor: "Couples, Adventure Seekers"
  },
  {
    id: 4,
    destination: "Maldives",
    title: "Maldives Island Escape",
    description: "Escape to paradise with crystal-clear waters, pristine beaches, and luxurious overwater villas. The Maldives offers the ultimate tropical getaway for relaxation and romance.",
    duration: "5 Days / 4 Nights",
    highlights: [
      "Overwater Villa Stay",
      "Snorkeling & Diving",
      "Dolphin Watching",
      "Spa & Wellness Treatments",
      "Sunset Fishing Trip"
    ],
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5.0,
    reviews: 189,
    category: "Romance",
    bestFor: "Couples, Honeymooners"
  },
  {
    id: 5,
    destination: "Harare",
    title: "Zimbabwe Cultural Journey",
    description: "Experience the rich culture and natural beauty of Zimbabwe. From vibrant city life to stunning landscapes, discover the heart of Southern Africa.",
    duration: "6 Days / 5 Nights",
    highlights: [
      "Harare City Tour",
      "Victoria Falls Excursion",
      "National Parks Safari",
      "Traditional Village Visit",
      "Local Craft Markets"
    ],
    image: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.7,
    reviews: 98,
    category: "Cultural",
    bestFor: "Adventure Travelers, Culture Enthusiasts"
  }
];

export default function Packages() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-brand-dark-blue to-brand-dark-blue/80 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 glass px-5 py-2 rounded-full mb-8 text-brand-gold text-xs font-body font-semibold tracking-[0.25em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
            Exclusive Travel Packages
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Our <span className="text-gradient-gold">Packages</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
            Handpicked travel experiences to the world's most amazing destinations. 
            From luxury escapes to cultural adventures, find your perfect journey.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-dark-blue mb-4">
              Featured Destinations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Explore our carefully curated packages to the world's most sought-after destinations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.destination}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  
                  {/* Floating Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-brand-gold text-white px-4 py-2 rounded-full text-sm font-bold font-body shadow-lg">
                      {pkg.category}
                    </div>
                  </div>
                  
                  {/* Destination Name */}
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center gap-2 text-white">
                      <MapPin size={20} className="text-brand-gold" />
                      <span className="text-2xl font-bold font-display">{pkg.destination}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  {/* Title and Description */}
                  <h3 className="font-display text-2xl font-bold text-brand-dark-blue mb-3 group-hover:text-brand-blue transition-colors duration-300">
                    {pkg.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {pkg.description}
                  </p>
                  
                  {/* Package Details */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock size={16} className="text-brand-gold" />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={16} className="text-brand-gold" />
                      <span>{pkg.bestFor}</span>
                    </div>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < Math.floor(pkg.rating) ? "text-brand-gold fill-current" : "text-gray-300"}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-brand-dark-blue">{pkg.rating}</span>
                    <span className="text-sm text-gray-500">({pkg.reviews} reviews)</span>
                  </div>
                  
                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-brand-dark-blue mb-3 flex items-center gap-2">
                      <Sparkles size={16} className="text-brand-gold" />
                      Package Highlights
                    </h4>
                    <div className="space-y-2">
                      {pkg.highlights.slice(0, 3).map((highlight, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-brand-gold rounded-full flex-shrink-0" />
                          <span className="text-sm text-gray-600">{highlight}</span>
                        </div>
                      ))}
                      {pkg.highlights.length > 3 && (
                        <span className="text-sm text-brand-gold font-medium">
                          +{pkg.highlights.length - 3} more highlights
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 bg-brand-dark-blue text-white px-6 py-3 rounded-xl font-body font-bold hover:bg-brand-blue transition-colors duration-300 flex items-center justify-center gap-2">
                      <span>View Details</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                    <button className="p-3 border border-gray-200 rounded-xl text-gray-600 hover:text-brand-gold hover:border-brand-gold transition-colors duration-300">
                      <Heart size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-brand-gold to-brand-yellow text-brand-dark-blue">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            We specialize in creating custom travel packages tailored to your dreams. 
            Let our experts design the perfect journey just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-brand-dark-blue text-white px-8 py-4 rounded-2xl text-base font-body font-bold tracking-wide shadow-2xl hover:bg-brand-blue transition-colors duration-300">
              Create Custom Package
            </button>
            <button className="bg-white text-brand-dark-blue px-8 py-4 rounded-2xl text-base font-body font-bold tracking-wide border-2 border-brand-dark-blue hover:bg-brand-dark-blue hover:text-white transition-all duration-300">
              Contact Expert
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
