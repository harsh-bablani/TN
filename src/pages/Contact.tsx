import { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const refs = [heroRef, formRef];
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
    refs.forEach((r) => { if (r.current) observer.observe(r.current); });
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Create WhatsApp message with form data
    const message = `Hi TRIP NOISE! I want to plan a trip.

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Message: ${form.message}

Please contact me to discuss my travel plans.`;
    
    // Redirect to WhatsApp
    const whatsappUrl = `https://wa.me/260574576045?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    setLoading(false);
    setSubmitted(true);
  };

  const whatsappUrl = `https://wa.me/260574576045?text=${encodeURIComponent('Hi TRIP NOISE, I want to plan a trip')}`;

  return (
    <main className="bg-brand-bg">
      <section
        ref={heroRef}
        className="relative pt-32 pb-24 px-6 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0D3B82 0%, #1E5AA8 100%)' }}
      >
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=1920")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-brand-dark-blue/60" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="section-animate">
            <span className="inline-flex items-center gap-2 text-brand-yellow font-body text-sm font-semibold tracking-[0.3em] uppercase mb-6">
              <span className="w-6 h-0.5 bg-brand-gold rounded-full" />
              Get In Touch
              <span className="w-6 h-0.5 bg-brand-gold rounded-full" />
            </span>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mb-5">
              Let's Plan Your
              <br />
              <span className="text-gradient-gold italic">Dream Journey</span>
            </h1>
            <p className="font-body text-white/75 text-lg max-w-xl mx-auto">
              Reach out to our travel experts. We'll craft a personalized experience for you.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-brand-bg to-transparent" />
      </section>

      <section ref={formRef} className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2 space-y-6 slide-animate-left">
              <div>
                <h2 className="font-display text-3xl font-bold text-brand-dark-blue mb-3">
                  Contact Information
                </h2>
                <p className="font-body text-gray-500 text-sm leading-relaxed">
                  Our team is available 24/7 to assist you with any travel query.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: MapPin,
                    label: 'Address',
                    value: '123 Travel Plaza, Business Bay\nDubai, UAE',
                  },
                  {
                    icon: Phone,
                    label: 'Phone',
                    value: '+260 57 45 760 45',
                    href: 'tel:+260574576045',
                  },
                  {
                    icon: Mail,
                    label: 'Email',
                    value: 'hello@tripnoise.com',
                    href: 'mailto:hello@tripnoise.com',
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 card-hover">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-blue to-brand-dark-blue flex items-center justify-center shrink-0 shadow-md">
                      <item.icon size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="font-body font-semibold text-brand-dark-blue text-sm mb-1">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-body text-gray-500 text-sm hover:text-brand-blue transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-body text-gray-500 text-sm whitespace-pre-line">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl overflow-hidden border border-gray-200 h-56">
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=55.27%2C25.17%2C55.32%2C25.22&layer=mapnik"
                  className="w-full h-full border-0"
                  title="TRIP NOISE Location"
                />
              </div>
            </div>

            <div className="lg:col-span-3 slide-animate-right">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-xl shadow-brand-blue/5">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-6 animate-bounce">
                      <CheckCircle size={40} className="text-green-500" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-brand-dark-blue mb-3">
                      Message Sent!
                    </h3>
                    <p className="font-body text-gray-500 max-w-sm">
                      Thank you for reaching out. Our team will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-8 btn-gold px-8 py-3 rounded-xl font-body font-semibold text-sm"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="font-display text-2xl font-bold text-brand-dark-blue mb-2">
                      Plan Your Trip
                    </h3>
                    <p className="font-body text-gray-400 text-sm mb-8">
                      Fill out the form and our experts will craft your perfect journey.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="font-body text-sm font-medium text-brand-dark-blue mb-2 block">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            placeholder="John Smith"
                            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-brand-bg font-body text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all"
                          />
                        </div>
                        <div>
                          <label className="font-body text-sm font-medium text-brand-dark-blue mb-2 block">
                            Email *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            placeholder="john@example.com"
                            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-brand-bg font-body text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="font-body text-sm font-medium text-brand-dark-blue mb-2 block">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+971 50 000 0000"
                          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-brand-bg font-body text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all"
                        />
                      </div>

                      <div>
                        <label className="font-body text-sm font-medium text-brand-dark-blue mb-2 block">
                          Your Message *
                        </label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="Tell us about your dream trip — destination, dates, number of travelers..."
                          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-brand-bg font-body text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-gold w-full py-4 rounded-xl font-body font-bold text-base flex items-center justify-center gap-3 disabled:opacity-70"
                      >
                        {loading ? (
                          <>
                            <span className="w-5 h-5 rounded-full border-2 border-brand-dark-blue border-t-transparent animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send size={18} />
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-[#20b858] transition-all duration-300 animate-pulse-gold"
        style={{ boxShadow: '0 4px 24px rgba(37, 211, 102, 0.4)' }}
        title="Chat on WhatsApp"
      >
        <WhatsAppIcon />
      </a>
    </main>
  );
}
