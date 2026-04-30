import { useEffect } from 'react';
import { Calendar, User, Clock, ArrowRight, Heart, MessageCircle, Share2 } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Hidden Gems in Southeast Asia",
    excerpt: "Discover the most breathtaking destinations that most travelers miss. From secluded beaches to ancient temples, explore the authentic beauty of Southeast Asia.",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Destinations",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likes: 234,
    comments: 45
  },
  {
    id: 2,
    title: "Ultimate Guide to Luxury Travel on a Budget",
    excerpt: "Who says luxury has to break the bank? Learn insider tips and tricks to experience five-star travel without the five-star price tag.",
    author: "Michael Chen",
    date: "March 12, 2024",
    readTime: "6 min read",
    category: "Travel Tips",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likes: 189,
    comments: 32
  },
  {
    id: 3,
    title: "Adventure Awaits: Best Thrill-Seeking Destinations",
    excerpt: "From skydiving in Dubai to scuba diving in the Great Barrier Reef, discover the world's most adrenaline-pumping experiences.",
    author: "Alex Rivera",
    date: "March 10, 2024",
    readTime: "10 min read",
    category: "Adventure",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likes: 312,
    comments: 67
  },
  {
    id: 4,
    title: "Cultural Immersion: Living Like a Local",
    excerpt: "Move beyond tourist traps and experience authentic local culture. Learn how to connect with destinations on a deeper, more meaningful level.",
    author: "Emma Thompson",
    date: "March 8, 2024",
    readTime: "7 min read",
    category: "Culture",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likes: 156,
    comments: 28
  },
  {
    id: 5,
    title: "Solo Travel Safety: Everything You Need to Know",
    excerpt: "Essential safety tips and precautions for solo travelers. Stay safe while exploring the world independently and confidently.",
    author: "David Park",
    date: "March 5, 2024",
    readTime: "9 min read",
    category: "Safety",
    image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likes: 423,
    comments: 89
  },
  {
    id: 6,
    title: "Foodie Paradise: Culinary Tours Around the World",
    excerpt: "Embark on a gastronomic journey across continents. From street food to fine dining, discover the world's most delicious destinations.",
    author: "Marco Rossi",
    date: "March 3, 2024",
    readTime: "12 min read",
    category: "Food & Travel",
    image: "https://images.unsplash.com/photo-1504674900247-0877df81cc5b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likes: 278,
    comments: 54
  }
];

const categories = ["All", "Destinations", "Travel Tips", "Adventure", "Culture", "Safety", "Food & Travel"];

export default function Blogs() {
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
            Travel Stories & Insights
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Our <span className="text-gradient-gold">Blog</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
            Discover travel inspiration, expert tips, and captivating stories from around the globe. 
            Your gateway to wanderlust and adventure.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full text-sm font-body font-medium transition-all duration-300 ${
                  category === "All"
                    ? "bg-brand-dark-blue text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-brand-dark-blue hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-brand-gold text-white text-xs font-body font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="font-display text-xl font-bold text-brand-dark-blue mb-3 group-hover:text-brand-blue transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-1 text-gray-500 hover:text-red-500 transition-colors duration-300">
                        <Heart size={16} />
                        <span className="text-sm">{post.likes}</span>
                      </button>
                      <button className="flex items-center gap-1 text-gray-500 hover:text-brand-blue transition-colors duration-300">
                        <MessageCircle size={16} />
                        <span className="text-sm">{post.comments}</span>
                      </button>
                      <button className="text-gray-500 hover:text-brand-blue transition-colors duration-300">
                        <Share2 size={16} />
                      </button>
                    </div>
                    
                    <button className="flex items-center gap-2 text-brand-dark-blue font-semibold hover:text-brand-gold transition-colors duration-300">
                      <span>Read More</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-brand-dark-blue to-brand-blue text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl font-bold mb-4">
            Stay Updated with Travel Tips
          </h2>
          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            Get the latest travel insights, destination guides, and exclusive offers delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-gold"
            />
            <button className="btn-gold px-8 py-3 rounded-full text-base font-body font-bold tracking-wide shadow-2xl">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
