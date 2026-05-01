import { Plane, Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-dark-blue text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <button onClick={() => handleNav('home')} className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-gold to-brand-yellow flex items-center justify-center">
                <Plane size={20} className="text-brand-dark-blue" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-white text-lg tracking-widest">TRIP NOISE</span>
                <span className="text-brand-gold text-[9px] font-body tracking-[0.2em] uppercase">Unleash Silent Trails</span>
              </div>
            </button>
            <p className="font-body text-white/60 text-sm leading-relaxed mb-6">
              Redefining travel with precision, luxury, and seamless experiences for every kind of traveler.
            </p>
            <div className="flex gap-3">
              {[Instagram, Linkedin, Facebook].map((Icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-brand-gold hover:text-brand-dark-blue flex items-center justify-center transition-all duration-300 text-white/60"
                >
                  <Icon size={16} />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', page: 'home' },
                { label: 'About Us', page: 'about' },
                { label: 'Contact', page: 'contact' },
              ].map((item) => (
                <li key={item.page}>
                  <button
                    onClick={() => handleNav(item.page)}
                    className="font-body text-white/60 text-sm hover:text-brand-gold transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-5">Services</h4>
            <ul className="space-y-3">
              {['Corporate Travel', 'Event Travel', 'Tourism Packages', 'Government Travel'].map((service) => (
                <li key={service}>
                  <span className="font-body text-white/60 text-sm hover:text-brand-gold transition-colors cursor-default">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/60">
                <MapPin size={16} className="mt-0.5 shrink-0 text-brand-gold" />
                <span className="font-body text-sm">First floor Petroda House Great East Road, Lusaka, Zambia</span>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Phone size={16} className="shrink-0 text-brand-gold" />
                <a href="tel:+260771278844" className="font-body text-sm hover:text-white transition-colors">
                  +260 771 278 844
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Mail size={16} className="shrink-0 text-brand-gold" />
                <a href="mailto:sales.lun@tripnoise.com" className="font-body text-sm hover:text-white transition-colors">
                  sales.lun@tripnoise.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-white/40 text-sm">
            © 2025 TRIP NOISE. All rights reserved.
          </p>
          <p className="font-body text-white/40 text-sm">
            Unleash Silent Trails — Travel Redefined
          </p>
        </div>
      </div>
    </footer>
  );
}
