import vVideo from '../v.mp4';
import v1Video from '../v1.mp4';

export default function TNCards() {
  return (
    <section className="relative py-20">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
        }}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* T Card */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl h-96 md:h-[500px]">
              <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={vVideo} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              
              {/* T Letter */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <span className="text-8xl md:text-9xl font-bold text-white/90 font-display tracking-wider drop-shadow-2xl transform group-hover:scale-110 transition-transform duration-500">
                    T
                  </span>
                  <div className="absolute -inset-4 bg-gradient-to-r from-brand-gold/20 to-brand-yellow/20 rounded-full blur-xl group-hover:from-brand-gold/30 group-hover:to-brand-yellow/30 transition-all duration-500" />
                </div>
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            {/* Description */}
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Trip</h3>
              <p className="text-white/70 font-light">Journey beyond boundaries</p>
            </div>
          </div>

          {/* N Card */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl h-96 md:h-[500px]">
              <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={v1Video} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              
              {/* N Letter */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <span className="text-8xl md:text-9xl font-bold text-white/90 font-display tracking-wider drop-shadow-2xl transform group-hover:scale-110 transition-transform duration-500">
                    N
                  </span>
                  <div className="absolute -inset-4 bg-gradient-to-r from-brand-gold/20 to-brand-yellow/20 rounded-full blur-xl group-hover:from-brand-gold/30 group-hover:to-brand-yellow/30 transition-all duration-500" />
                </div>
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            {/* Description */}
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Noise</h3>
              <p className="text-white/70 font-light">Silence the ordinary</p>
            </div>
          </div>
        </div>
        
        {/* TN Together Section */}
        <div className="mt-20 text-center relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 bg-gradient-to-r from-brand-gold/10 to-brand-yellow/10 rounded-full blur-3xl" />
          </div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-6 bg-gradient-to-r from-brand-dark-blue/50 to-brand-dark-blue/30 backdrop-blur-xl border border-brand-gold/20 px-10 py-6 rounded-2xl shadow-2xl">
              <span className="text-5xl font-bold text-brand-gold font-display drop-shadow-lg animate-pulse">T</span>
              <span className="text-3xl text-white/80 font-light">&</span>
              <span className="text-5xl font-bold text-brand-gold font-display drop-shadow-lg animate-pulse">N</span>
            </div>
            <h2 className="mt-8 text-4xl md:text-5xl font-bold text-white font-display leading-tight">
              Trip <span className="text-gradient-gold">Noise</span>
            </h2>
            <div className="mt-6 max-w-3xl mx-auto">
              <p className="text-white/80 font-light text-xl leading-relaxed">
                Where Travel meets Noise
              </p>
              <p className="text-brand-gold font-medium text-lg mt-2 tracking-wide">
                creating extraordinary journeys that speak volumes without saying a word
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
