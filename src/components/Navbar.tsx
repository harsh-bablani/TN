import { useState, useEffect } from 'react';
import { Menu, X, Plane } from 'lucide-react';
import Logo from '../Logo.png';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', page: 'home' },
    { label: 'Services', page: 'services' },
    { label: 'Packages', page: 'packages', special: true },
    { label: 'Blogs', page: 'blogs', special: true },
    { label: 'About', page: 'about' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNav = (page: string) => {
    onNavigate(page);
    setMenuOpen(false);
    // Immediate scroll to top, then smooth scroll
    window.scrollTo(0, 0);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-0.1875 bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-200'
          : 'py-0.3125 bg-white/90 backdrop-blur-md border-b border-gray-100'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => handleNav('home')}
          className="flex items-center gap-3 group"
        >
          <img 
            src={Logo} 
            alt="Trip Noise Logo" 
            className="h-[120px] w-auto object-contain group-hover:scale-105 transition-transform duration-300 filter drop-shadow-lg"
          />
        </button>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.page}>
              <button
                onClick={() => handleNav(link.page)}
                className={`relative px-5 py-2.5 font-body font-medium text-sm tracking-wide transition-all duration-300 rounded-lg ${
                  link.special
                    ? currentPage === link.page
                      ? 'bg-gradient-to-r from-brand-gold to-brand-yellow text-brand-dark-blue font-bold shadow-lg transform scale-105'
                      : 'bg-gradient-to-r from-brand-gold/20 to-brand-yellow/20 text-brand-dark-blue font-semibold hover:from-brand-gold/30 hover:to-brand-yellow/30 hover:shadow-md'
                    : currentPage === link.page
                      ? 'text-brand-dark-blue font-semibold'
                      : 'text-gray-700 hover:text-brand-dark-blue'
                }`}
              >
                {link.label}
                {currentPage === link.page && (
                  <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full ${
                    link.special ? 'bg-brand-dark-blue' : 'bg-brand-dark-blue'
                  }`} />
                )}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handleNav('contact')}
              className="btn-gold ml-4 px-6 py-2.5 rounded-xl text-sm font-body font-bold tracking-wide"
            >
              Book Now
            </button>
          </li>
        </ul>

        <button
          className="md:hidden text-gray-700 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-200 px-6 py-6 flex flex-col gap-3">
          {navLinks.map((link) => (
            <button
              key={link.page}
              onClick={() => handleNav(link.page)}
              className={`text-left py-3 font-body font-medium text-base border-b border-gray-100 transition-colors ${
                link.special
                  ? currentPage === link.page
                    ? 'bg-gradient-to-r from-brand-gold/20 to-brand-yellow/20 text-brand-dark-blue font-bold px-4 rounded-lg'
                    : 'text-brand-dark-blue font-semibold hover:bg-gradient-to-r hover:from-brand-gold/10 hover:to-brand-yellow/10 px-4 rounded-lg'
                  : currentPage === link.page
                    ? 'text-brand-dark-blue font-semibold'
                    : 'text-gray-700'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('contact')}
            className="btn-gold mt-2 py-3 rounded-xl text-sm font-body font-bold text-center"
          >
            Book Now
          </button>
        </div>
      )}
    </header>
  );
}
