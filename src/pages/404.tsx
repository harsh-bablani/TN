import { useEffect } from 'react';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-dark-blue via-brand-dark-blue/95 to-black flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-10" />
      
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <div className="mb-8">
          <div className="text-8xl md:text-9xl font-bold text-gradient-gold font-display leading-none">
            404
          </div>
        </div>
        
        <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Page Not Found
        </h1>
        
        <p className="text-white/80 text-lg md:text-xl mb-12 leading-relaxed max-w-lg mx-auto">
          Oops! The page you're looking for seems to have vanished into thin air. 
          Let's get you back to exploring amazing destinations.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => window.location.href = '/'}
            className="flex items-center gap-3 btn-gold px-8 py-4 rounded-2xl text-base font-body font-bold tracking-wide shadow-2xl"
          >
            <Home size={20} />
            <span>Back to Home</span>
          </button>
          
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-2xl text-base font-body font-semibold text-white hover:bg-white/20 transition-all duration-300"
          >
            <ArrowLeft size={20} />
            <span>Go Back</span>
          </button>
        </div>
        
        <div className="mt-16">
          <div className="inline-flex items-center gap-6 text-white/60">
            <div className="flex items-center gap-2">
              <Search size={16} />
              <span className="text-sm">Looking for something?</span>
            </div>
            <button
              onClick={() => window.location.href = '/packages'}
              className="text-brand-gold hover:text-white transition-colors duration-300 font-medium text-sm"
            >
              Browse Packages →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
