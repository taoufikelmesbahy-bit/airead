/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  Wrench, 
  Cpu, 
  Disc, 
  Droplets, 
  Activity, 
  Zap, 
  Wind, 
  Gauge, 
  ChevronRight, 
  Star, 
  MapPin, 
  Phone, 
  Clock, 
  MessageCircle,
  Menu,
  X,
  ArrowRight,
  Car,
  Mail
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';

// --- Components ---

const Navbar = ({ onNavigate }: { onNavigate: (page: 'home' | 'about' | 'privacy' | 'legal' | 'cookies') => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services', type: 'scroll' },
    { name: 'About Us', href: '#about', type: 'page' },
    { name: 'Gallery', href: '#gallery', type: 'scroll' },
    { name: 'Reviews', href: '#reviews', type: 'scroll' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-8'}`}>
      <div className="container mx-auto px-6">
        <div className={`glass-dark rounded-full px-8 py-4 flex items-center justify-between transition-all duration-500 ${isScrolled ? 'shadow-2xl shadow-brand-orange/10' : ''}`}>
          <div 
            className="flex items-center gap-2 group cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <div className="w-10 h-10 bg-brand-orange rounded-lg flex items-center justify-center rotate-3 group-hover:rotate-12 transition-transform">
              <Zap className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-display font-bold tracking-tighter">
              CARS<span className="text-brand-orange">ONE</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => {
                  if (link.type === 'page') {
                    e.preventDefault();
                    onNavigate('about');
                  }
                }}
                className="text-sm font-medium text-white/70 hover:text-brand-orange transition-colors uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a href="#contact" className="bg-brand-orange hover:bg-brand-red text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-brand-orange/20 inline-block">
              BOOK SERVICE
            </a>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full px-6 pt-4 md:hidden"
          >
            <div className="glass-dark rounded-3xl p-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-xl font-display font-bold text-white"
                  onClick={(e) => {
                    if (link.type === 'page') {
                      e.preventDefault();
                      onNavigate('about');
                    }
                    setMobileMenuOpen(false);
                  }}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                className="bg-brand-orange text-white w-full py-4 rounded-2xl font-bold text-center block"
                onClick={() => setMobileMenuOpen(false)}
              >
                BOOK SERVICE
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Video/Image Background */}
      <div 
        className="absolute inset-0 z-0 bg-zinc-900 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=2000')`
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>

      <motion.div 
        style={{ opacity }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="container mx-auto px-6 relative z-20 text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-brand-orange/30 text-brand-orange text-xs font-bold tracking-[0.2em] uppercase mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
          </span>
          Next Generation Auto Repair
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter leading-[0.9] mb-8">
          PRECISION<br />
          <span className="text-gradient">PERFORMANCE</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Experience the future of automotive care. Our master technicians combine 
          cutting-edge diagnostics with artisanal craftsmanship to keep your machine at its peak.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="#contact" className="group relative bg-brand-orange text-white px-10 py-5 rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-brand-orange/40 inline-block">
            <span className="relative z-10 flex items-center gap-2">
              BOOK SERVICE <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-red to-brand-orange opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
          
          <a href="#services" className="glass px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all inline-block">
            VIEW SERVICES
          </a>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold">Scroll to explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-brand-orange to-transparent" />
      </motion.div>
    </section>
  );
};

const TrustSection = () => {
  const stats = [
    { label: 'Years Experience', value: '15+', icon: <Clock className="w-6 h-6" /> },
    { label: 'Cars Repaired', value: '12k+', icon: <Activity className="w-6 h-6" /> },
    { label: 'Happy Clients', value: '99%', icon: <Star className="w-6 h-6" /> },
    { label: 'Master Techs', value: '08', icon: <Wrench className="w-6 h-6" /> },
  ];

  return (
    <section id="about" className="py-24 bg-matte-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-orange/20 group-hover:border-brand-orange/50 transition-all duration-500">
                <div className="text-brand-orange">{stat.icon}</div>
              </div>
              <div className="text-4xl md:text-5xl font-display font-bold mb-2">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest text-white/40 font-bold">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    { title: 'Engine Repair', desc: 'Complete overhaul and precision tuning for maximum power.', icon: <Wrench /> },
    { title: 'Diagnostics', desc: 'Advanced computer analysis to identify hidden issues.', icon: <Cpu /> },
    { title: 'Brake Service', desc: 'High-performance braking systems for ultimate safety.', icon: <Disc /> },
    { title: 'Oil Change', desc: 'Premium synthetic lubricants to protect your engine.', icon: <Droplets /> },
    { title: 'Suspension', desc: 'Precision handling and comfort for any road surface.', icon: <Activity /> },
    { title: 'Electrical Systems', desc: 'Expert troubleshooting for modern vehicle electronics.', icon: <Zap /> },
    { title: 'Air Conditioning', desc: 'Climate control maintenance for perfect cabin comfort.', icon: <Wind /> },
    { title: 'Performance Tuning', desc: 'ECU remapping and hardware upgrades for enthusiasts.', icon: <Gauge /> },
  ];

  return (
    <section id="services" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-brand-orange uppercase tracking-[0.3em] mb-4">Our Expertise</h2>
            <h3 className="text-5xl md:text-7xl font-display font-bold tracking-tighter">
              ELITE AUTOMOTIVE<br />
              <span className="text-white/30">SOLUTIONS</span>
            </h3>
          </div>
          <p className="text-white/50 max-w-md leading-relaxed">
            We provide a comprehensive range of services using the latest technology 
            and highest quality parts to ensure your vehicle performs at its best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-[2rem] group cursor-pointer hover:border-brand-orange/30 transition-all duration-500"
            >
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-500">
                {React.cloneElement(service.icon as React.ReactElement, { className: "w-6 h-6" })}
              </div>
              <h4 className="text-2xl font-display font-bold mb-4 group-hover:text-brand-orange transition-colors">{service.title}</h4>
              <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/70 transition-colors">
                {service.desc}
              </p>
              <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                Learn More <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BrandsSection = () => {
  const brands = [
    { name: 'BMW', logo: 'https://cdn.simpleicons.org/bmw/white' },
    { name: 'Mercedes', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg' },
    { name: 'Audi', logo: 'https://cdn.simpleicons.org/audi/white' },
    { name: 'Porsche', logo: 'https://cdn.simpleicons.org/porsche/white' },
    { name: 'Tesla', logo: 'https://cdn.simpleicons.org/tesla/white' },
    { name: 'Ferrari', logo: 'https://cdn.simpleicons.org/ferrari/white' },
    { name: 'Lamborghini', logo: 'https://cdn.simpleicons.org/lamborghini/white' },
    { name: 'Aston Martin', logo: 'https://cdn.simpleicons.org/astonmartin/white' }
  ];
  
  return (
    <section className="py-24 border-y border-white/5 overflow-hidden bg-white/[0.02]">
      <div className="flex items-center gap-16 animate-marquee whitespace-nowrap">
        {[...brands, ...brands].map((brand, i) => (
          <div key={i} className="flex items-center gap-6 group cursor-default">
            <div className="w-20 h-20 glass rounded-2xl flex items-center justify-center p-5 group-hover:border-brand-orange/30 transition-all duration-500 group-hover:scale-110">
              <img 
                src={brand.logo} 
                alt={brand.name} 
                className={`w-full h-full object-contain opacity-30 group-hover:opacity-100 transition-all duration-500 brightness-0 invert`}
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-4xl md:text-6xl font-display font-bold text-white/10 group-hover:text-white/40 transition-colors uppercase tracking-tighter">
              {brand.name}
            </span>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

const GallerySection = () => {
  const images = [
    "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800",
  ];

  return (
    <section className="py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-brand-orange uppercase tracking-[0.3em] mb-4">Our Workshop</h2>
          <h3 className="text-5xl md:text-7xl font-display font-bold tracking-tighter">WHERE MAGIC HAPPENS</h3>
        </div>

        <div id="gallery" className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 scroll-mt-32">
          {images.map((src, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group overflow-hidden rounded-3xl"
            >
              <img 
                src={src} 
                alt="Gallery" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500">
                  <Zap className="text-brand-orange w-6 h-6" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ReviewsSection = () => {
  const reviews = [
    { name: 'Alex Thompson', role: 'Porsche Owner', text: 'The attention to detail at Carsone is unmatched. They treated my 911 like it was their own. Best performance tuning in the city.', rating: 5 },
    { name: 'Sarah Jenkins', role: 'Tesla Model S', text: 'Finally a workshop that understands EVs. Fast, professional, and the digital diagnostics report was incredibly detailed.', rating: 5 },
    { name: 'Michael Chen', role: 'BMW Enthusiast', text: 'I only trust Carsone with my engine work. Their master technicians are true artisans. The car feels brand new after every visit.', rating: 5 },
  ];

  return (
    <section className="py-32 bg-graphite/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-sm font-bold text-brand-orange uppercase tracking-[0.3em] mb-4">Testimonials</h2>
            <h3 className="text-5xl font-display font-bold tracking-tighter mb-8 leading-tight">
              WHAT OUR<br />
              <span className="text-white/30">DRIVERS SAY</span>
            </h3>
            <p className="text-white/50 mb-8 leading-relaxed">
              We pride ourselves on building long-term relationships with our clients through 
              transparency, quality, and exceptional service.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-matte-black bg-brand-orange flex items-center justify-center text-xs font-bold">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-sm font-bold text-white/70">
                <span className="text-white">500+</span> Happy Clients
              </div>
            </div>
          </div>

          <div id="reviews" className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 scroll-mt-32">
            {reviews.map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-[2.5rem] flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" />
                    ))}
                  </div>
                  <p className="text-lg text-white/80 italic mb-8 leading-relaxed">"{review.text}"</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10" />
                  <div>
                    <div className="font-bold text-white">{review.name}</div>
                    <div className="text-xs text-brand-orange font-bold uppercase tracking-widest">{review.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const BookingSection = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-red/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="glass-dark rounded-[3rem] p-8 md:p-16 lg:p-24 overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-brand-orange uppercase tracking-[0.3em] mb-4">Get Started</h2>
              <h3 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-8">
                BOOK YOUR<br />
                <span className="text-white/30">APPOINTMENT</span>
              </h3>
              <p className="text-white/50 mb-12 max-w-md leading-relaxed">
                Ready to experience the Carsone difference? Fill out the form and our service 
                advisors will contact you within 60 minutes to confirm your slot.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-brand-orange">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 uppercase font-bold tracking-widest">Call Us Directly</div>
                    <div className="text-xl font-display font-bold">+34698167235</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-brand-orange">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 uppercase font-bold tracking-widest">Visit Workshop</div>
                    <div className="text-xl font-display font-bold">madrid , españa</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-brand-orange">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 uppercase font-bold tracking-widest">Email Us</div>
                    <div className="text-xl font-display font-bold">info@airead.site</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass p-8 md:p-12 rounded-[2.5rem]">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-2">Full Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-orange transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-2">Phone Number</label>
                    <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-orange transition-colors" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-2">Vehicle Model</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-orange transition-colors" placeholder="e.g. Porsche 911 GT3" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-2">Service Required</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-orange transition-colors appearance-none">
                    <option className="bg-matte-black">General Maintenance</option>
                    <option className="bg-matte-black">Engine Diagnostics</option>
                    <option className="bg-matte-black">Performance Tuning</option>
                    <option className="bg-matte-black">Brake Service</option>
                  </select>
                </div>
                <button className="w-full bg-brand-orange hover:bg-brand-red text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-brand-orange/20 transition-all active:scale-[0.98]">
                  CONFIRM BOOKING
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutPage = ({ onBack }: { onBack: () => void, key?: string }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pt-32 pb-24 min-h-screen bg-matte-black text-white"
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-brand-orange mb-12 hover:gap-3 transition-all font-bold uppercase tracking-widest text-sm group"
        >
          <ArrowRight className="rotate-180 w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
        </button>

        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-12">
          ABOUT US <span className="text-brand-orange uppercase">CARSONE</span>
        </h1>

        <div className="space-y-8 text-lg text-white/70 leading-relaxed font-light">
          <p className="text-xl text-white font-medium">
            Welcome to CARSONE, your trusted destination for professional car repair and maintenance. Our goal is to provide reliable, high-quality automotive services that keep your vehicle running safely and efficiently.
          </p>

          <p>
            At CARSONE, we understand how important your car is to your daily life. That’s why our team of experienced mechanics works with precision, modern diagnostic tools, and a strong commitment to quality. Whether your vehicle needs routine maintenance, diagnostics, brake service, or more advanced repairs, we make sure every job is done with care and professionalism.
          </p>

          <p>
            Our mission is simple: to deliver honest, efficient, and high-quality automotive services that drivers can depend on. We believe that trust, transparency, and customer satisfaction are the foundations of every successful repair.
          </p>

          <div className="py-12">
            <h2 className="text-3xl font-display font-bold text-white mb-8 tracking-tight">Why Choose CARSONE</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Skilled and experienced mechanics",
                "Modern diagnostic equipment",
                "Fast and reliable service",
                "Transparent and fair pricing",
                "Customer-focused support"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 glass p-6 rounded-2xl border-white/5">
                  <div className="w-8 h-8 bg-brand-orange/20 rounded-lg flex items-center justify-center text-brand-orange">
                    <Zap className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-white">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p>
            At CARSONE, we aim to build long-term relationships with our customers by providing dependable service and expert care for every vehicle that comes through our workshop.
          </p>

          <div className="pt-12 border-t border-white/10">
            <h2 className="text-3xl font-display font-bold text-white mb-8 tracking-tight">Contact Us</h2>
            <p className="mb-8">If you have any questions or would like to schedule a service, feel free to contact us.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-brand-orange">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-white/40 uppercase font-bold tracking-widest">Email</div>
                  <div className="text-xl font-display font-bold">info@airead.site</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-brand-orange">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-white/40 uppercase font-bold tracking-widest">Phone</div>
                  <div className="text-xl font-display font-bold">+34698167235</div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-16 text-center">
            <p className="text-2xl font-display font-bold text-white italic">
              Carsone — Reliable Automotive Service You Can Trust. 🚗🔧
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const PrivacyPolicyPage = ({ onBack }: { onBack: () => void, key?: string }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pt-32 pb-24 min-h-screen bg-matte-black text-white"
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-brand-orange mb-12 hover:gap-3 transition-all font-bold uppercase tracking-widest text-sm group"
        >
          <ArrowRight className="rotate-180 w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
        </button>

        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-4">
          PRIVACY <span className="text-brand-orange uppercase">Policy</span>
        </h1>
        <p className="text-white/40 mb-12 uppercase tracking-widest text-sm font-bold">Last Updated: March 16, 2026</p>

        <div className="space-y-12 text-lg text-white/70 leading-relaxed font-light">
          <p className="text-xl text-white font-medium">
            Welcome to CARSONE. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you visit our website or use our services.
          </p>

          <section className="space-y-6">
            <h2 className="text-3xl font-display font-bold text-white tracking-tight">1. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <div className="space-y-4">
              <h3 className="text-white font-bold uppercase tracking-widest text-sm">Personal Information</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Vehicle information (when booking a service)</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-white font-bold uppercase tracking-widest text-sm">Automatically Collected Information</h3>
              <p>This information helps us improve our website and provide better services to our customers.</p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-display font-bold text-white tracking-tight">2. How We Use Your Information</h2>
            <p>CARSONE may use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Respond to inquiries and customer support requests</li>
              <li>Schedule and manage service appointments</li>
            </ul>
            <p>We only collect the information necessary to provide our services effectively.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-display font-bold text-white tracking-tight">3. Sharing Your Information</h2>
            <p>CARSONE does not sell, trade, or rent your personal information to third parties.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-display font-bold text-white tracking-tight">4. Data Security</h2>
            <p>We take appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no method of data transmission over the internet can be guaranteed 100% secure.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-display font-bold text-white tracking-tight">5. Cookies</h2>
            <p>Our website may use cookies to improve user experience. Cookies help us understand how visitors use our site and allow us to optimize performance.</p>
            <p>You can choose to disable cookies through your browser settings.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-display font-bold text-white tracking-tight">6. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites. CARSONE is not responsible for the privacy practices or content of those external websites.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-display font-bold text-white tracking-tight">7. Your Privacy Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access the personal information we hold about you</li>
              <li>Request corrections to your data</li>
              <li>Request deletion of your personal data</li>
            </ul>
            <p>To make any request regarding your data, please contact us using the details below.</p>
          </section>

          <section className="space-y-6 pt-12 border-t border-white/10">
            <h2 className="text-3xl font-display font-bold text-white tracking-tight">8. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or how your information is handled, please contact us:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-brand-orange">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-white/40 uppercase font-bold tracking-widest">Email</div>
                  <div className="text-xl font-display font-bold">info@airead.site</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-brand-orange">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-white/40 uppercase font-bold tracking-widest">Phone</div>
                  <div className="text-xl font-display font-bold">+34698167235</div>
                </div>
              </div>
            </div>
          </section>

          <p className="pt-12 text-center text-white/40 text-sm">
            By using our website, you agree to the terms of this Privacy Policy. CARSONE may update this policy from time to time, and any changes will be posted on this page.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const LegalNoticePage = ({ onBack }: { onBack: () => void, key?: string }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pt-32 pb-24 min-h-screen bg-matte-black text-white"
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-brand-orange mb-12 hover:gap-3 transition-all font-bold uppercase tracking-widest text-sm group"
        >
          <ArrowRight className="rotate-180 w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
        </button>

        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-4">
          AVISO <span className="text-brand-orange uppercase">Legal</span>
        </h1>
        <p className="text-white/40 mb-12 uppercase tracking-widest text-sm font-bold">Última actualización: 16 de marzo de 2026</p>

        <div className="space-y-12 text-lg text-white/70 leading-relaxed font-light">
          <p className="text-xl text-white font-medium">
            En cumplimiento con el deber de información establecido en la Ley 34/2002 de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se facilitan a continuación los datos identificativos del titular del sitio web.
          </p>

          <section className="space-y-6">
            <h2 className="text-3xl font-display font-bold text-white tracking-tight">1. Datos identificativos</h2>
            <div className="glass p-8 rounded-2xl space-y-4 border-white/5">
              <p><span className="text-brand-orange font-bold uppercase tracking-widest text-xs block mb-1">Titular</span> CARSONE</p>
              <p><span className="text-brand-orange font-bold uppercase tracking-widest text-xs block mb-1">Dirección</span> MADRID, España</p>
              <p><span className="text-brand-orange font-bold uppercase tracking-widest text-xs block mb-1">Teléfono</span> +34698167235</p>
              <p><span className="text-brand-orange font-bold uppercase tracking-widest text-xs block mb-1">Correo electrónico</span> info@airead.site</p>
            </div>
            <p>El presente sitio web tiene como finalidad ofrecer información sobre los servicios de mecánica a domicilio ofrecidos por CARSONE.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-display font-bold text-white tracking-tight">2. Condiciones de uso</h2>
            <p>El acceso y uso del sitio web atribuye la condición de usuario e implica la aceptación plena y sin reservas de todas las disposiciones incluidas en este Aviso Legal.</p>
            <p>El usuario se compromete a utilizar el sitio web de conformidad con la ley, la buena fe, el orden público y el presente Aviso Legal.</p>
            <p>Queda prohibido el uso del sitio web con fines ilícitos o que puedan causar perjuicios a CARSONE o a terceros.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-display font-bold text-white tracking-tight">3. Propiedad intelectual e industrial</h2>
            <p>Todos los contenidos del sitio web, incluyendo textos, imágenes, logotipos, diseños, estructura, código fuente y demás elementos, están protegidos por la normativa de propiedad intelectual e industrial.</p>
            <p>Queda prohibida su reproducción, distribución o modificación sin la autorización previa y expresa del titular del sitio web.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-display font-bold text-white tracking-tight">4. Responsabilidad</h2>
            <p>CARSONE no se responsabiliza de los daños o perjuicios derivados del uso de la información contenida en este sitio web ni de posibles errores u omisiones en los contenidos.</p>
            <p>Asimismo, CARSONE no garantiza la disponibilidad permanente del sitio web ni se hace responsable de posibles interrupciones del servicio.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-display font-bold text-white tracking-tight">5. Enlaces externos</h2>
            <p>Este sitio web puede contener enlaces a sitios web de terceros. CARSONE no se responsabiliza del contenido, políticas o prácticas de dichos sitios externos.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-display font-bold text-white tracking-tight">6. Protección de datos personales</h2>
            <p>Los datos personales que el usuario facilite a través del sitio web serán tratados de conformidad con lo establecido en el General Data Protection Regulation y la Ley Orgánica de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).</p>
            <p>Para más información sobre el tratamiento de los datos personales, el usuario puede consultar la correspondiente Política de Privacidad del sitio web.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-display font-bold text-white tracking-tight">7. Legislación aplicable y jurisdicción</h2>
            <p>La relación entre CARSONE and el usuario se regirá por la normativa vigente en Spain.</p>
            <p>Para la resolución de cualquier controversia que pudiera surgir en relación con el acceso o uso del sitio web, las partes se someterán a los juzgados y tribunales de Málaga, salvo que la legislación aplicable disponga otra cosa.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-display font-bold text-white tracking-tight">8. Resolución de conflictos en línea</h2>
            <p>De acuerdo con la normativa europea de protección al consumidor, los usuarios tienen la posibilidad de acudir a la plataforma de resolución de litigios en línea facilitada por la European Commission.</p>
            <p>La plataforma está disponible en el siguiente enlace: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">https://ec.europa.eu/consumers/odr/</a></p>
          </section>

          <section className="space-y-6 pt-12 border-t border-white/10">
            <h2 className="text-3xl font-display font-bold text-white tracking-tight">Información de contacto</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-brand-orange">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-white/40 uppercase font-bold tracking-widest">Email</div>
                  <div className="text-xl font-display font-bold">info@airead.site</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-brand-orange">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-white/40 uppercase font-bold tracking-widest">Teléfono</div>
                  <div className="text-xl font-display font-bold">+34698167235</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

const CookiesPage = ({ onBack }: { onBack: () => void, key?: string }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pt-32 pb-24 min-h-screen bg-matte-black text-white"
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-brand-orange mb-12 hover:gap-3 transition-all font-bold uppercase tracking-widest text-sm group"
        >
          <ArrowRight className="rotate-180 w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
        </button>

        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-4">
          POLÍTICA DE <span className="text-brand-orange uppercase">Cookies</span>
        </h1>
        <p className="text-white/40 mb-12 uppercase tracking-widest text-sm font-bold">Última actualización: 16 de marzo de 2026</p>

        <div className="space-y-12 text-lg text-white/70 leading-relaxed font-light">
          <section className="space-y-6">
            <h2 className="text-3xl font-display font-bold text-white tracking-tight">¿Qué son las cookies?</h2>
            <p>Las cookies son pequeños archivos de texto que se almacenan en el dispositivo del usuario cuando visita un sitio web. Su finalidad es recordar información sobre la visita del usuario para mejorar la experiencia de navegación.</p>
            <p>El sitio web de CARSONE utiliza cookies propias y de terceros con el objetivo de mejorar la navegación del usuario, analizar el uso del sitio web y ofrecer contenidos adaptados a los intereses de los usuarios.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-display font-bold text-white tracking-tight">¿Qué tipos de cookies utilizamos?</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Cookies técnicas</h3>
                <p>Son aquellas necesarias para el funcionamiento básico del sitio web y permiten la navegación y el uso de sus diferentes opciones o servicios.</p>
              </div>
              <div>
                <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Cookies de análisis</h3>
                <p>Estas cookies permiten analizar el comportamiento de los usuarios en el sitio web con el fin de mejorar el funcionamiento del mismo.</p>
              </div>
              <div>
                <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Cookies de personalización</h3>
                <p>Permiten recordar información para que el usuario acceda al servicio con determinadas características que pueden diferenciar su experiencia de la de otros usuarios.</p>
              </div>
              <div>
                <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Cookies de terceros</h3>
                <p>Este sitio web puede utilizar servicios de terceros que recopilarán información con fines estadísticos y de uso del sitio web.</p>
                <p className="mt-2">Entre ellos pueden incluirse herramientas como:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Google Analytics para el análisis del tráfico web.</li>
                  <li>Integraciones de WhatsApp para facilitar el contacto con los usuarios.</li>
                </ul>
                <p className="mt-2 text-sm text-white/40 italic">Estas herramientas pueden utilizar cookies para recopilar información anónima sobre el uso del sitio web.</p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-display font-bold text-white tracking-tight">¿Cómo gestionar o desactivar las cookies?</h2>
            <p>El usuario puede permitir, bloquear o eliminar las cookies instaladas en su dispositivo mediante la configuración de las opciones del navegador utilizado.</p>
            <p>A continuación se proporcionan enlaces con información sobre cómo gestionar las cookies en los navegadores más utilizados:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {['Google Chrome', 'Mozilla Firefox', 'Safari', 'Microsoft Edge'].map(browser => (
                <li key={browser} className="glass p-4 rounded-xl border-white/5 flex items-center justify-between group cursor-pointer hover:border-brand-orange/30 transition-all">
                  <span className="font-medium">{browser}</span>
                  <ArrowRight className="w-4 h-4 text-brand-orange group-hover:translate-x-1 transition-transform" />
                </li>
              ))}
            </ul>
            <p className="text-brand-orange font-medium italic">La desactivación de cookies puede afectar al funcionamiento correcto del sitio web.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-display font-bold text-white tracking-tight">Aceptación de la política de cookies</h2>
            <p>Al acceder a este sitio web, el usuario verá un aviso o banner de cookies. Al continuar navegando o aceptar el aviso, el usuario consiente el uso de cookies conforme a esta política.</p>
            <p>El usuario puede modificar su consentimiento en cualquier momento a través de la configuración de su navegador.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-display font-bold text-white tracking-tight">Cambios en la política de cookies</h2>
            <p>CARSONE se reserva el derecho a modificar la presente política de cookies para adaptarla a cambios legislativos o técnicos. Se recomienda a los usuarios revisar esta página periódicamente.</p>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

const Footer = ({ onNavigate }: { onNavigate: (page: 'home' | 'about' | 'privacy' | 'legal' | 'cookies') => void }) => {
  return (
    <footer className="pt-24 pb-12 bg-matte-black border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-8">
            <div 
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => onNavigate('home')}
            >
              <div className="w-10 h-10 bg-brand-orange rounded-lg flex items-center justify-center rotate-3">
                <Zap className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-display font-bold tracking-tighter">
                CARS<span className="text-brand-orange">ONE</span>
              </span>
            </div>
            <p className="text-white/40 leading-relaxed">
              Setting the standard for automotive excellence since 2023. 
              Precision diagnostics and professional car care for the modern driver.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-display font-bold mb-8 uppercase tracking-widest">MENU</h4>
            <ul className="space-y-4">
              {[
                { name: 'Services', id: '#services', type: 'scroll' },
                { name: 'Our Team', id: '#about', type: 'page' },
                { name: 'Workshop Gallery', id: '#gallery', type: 'scroll' },
                { name: 'Reviews', id: '#reviews', type: 'scroll' },
                { name: 'Contact', id: '#contact', type: 'scroll' }
              ].map(link => (
                <li key={link.name}>
                  <a 
                    href={link.id} 
                    onClick={(e) => {
                      if (link.type === 'page') {
                        e.preventDefault();
                        onNavigate('about');
                      }
                    }}
                    className="text-white/40 hover:text-brand-orange transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-display font-bold mb-8 uppercase tracking-widest">Opening Hours</h4>
            <ul className="space-y-4">
              <li className="flex justify-between text-white/40">
                <span>Monday - Friday</span>
                <span className="text-white">08:00 - 19:00</span>
              </li>
              <li className="flex justify-between text-white/40">
                <span>Saturday</span>
                <span className="text-white">09:00 - 16:00</span>
              </li>
              <li className="flex justify-between text-white/40">
                <span>Sunday</span>
                <span className="text-brand-orange font-bold uppercase text-[10px]">Closed</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-display font-bold mb-8 uppercase tracking-widest">Newsletter</h4>
            <p className="text-white/40 mb-6 text-sm">Subscribe for performance tips and exclusive offers.</p>
            <div className="relative">
              <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-orange" placeholder="Email Address" />
              <button className="absolute right-2 top-2 bottom-2 bg-brand-orange text-white px-4 rounded-lg">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/20">
          <div>© 2023 CARSONE Precision. All rights reserved.</div>
          <div className="flex items-center gap-8">
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); onNavigate('legal'); }}
              className="hover:text-white transition-colors"
            >
              Legal Notice
            </a>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); onNavigate('privacy'); }}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); onNavigate('cookies'); }}
              className="hover:text-white transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  return (
    <motion.a 
      href="#"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/40 cursor-pointer"
    >
      <MessageCircle className="w-8 h-8" />
    </motion.a>
  );
};

// --- Main App ---

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'privacy' | 'legal' | 'cookies'>('home');

  const handleNavigate = (page: 'home' | 'about' | 'privacy' | 'legal' | 'cookies') => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen selection:bg-brand-orange selection:text-white">
      <Navbar onNavigate={handleNavigate} />
      <main>
        <AnimatePresence mode="wait">
          {currentPage === 'home' ? (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Hero />
              <TrustSection />
              <ServicesSection />
              <BrandsSection />
              <GallerySection />
              <ReviewsSection />
              <BookingSection />
            </motion.div>
          ) : currentPage === 'about' ? (
            <AboutPage key="about" onBack={() => handleNavigate('home')} />
          ) : currentPage === 'privacy' ? (
            <PrivacyPolicyPage key="privacy" onBack={() => handleNavigate('home')} />
          ) : currentPage === 'legal' ? (
            <LegalNoticePage key="legal" onBack={() => handleNavigate('home')} />
          ) : (
            <CookiesPage key="cookies" onBack={() => handleNavigate('home')} />
          )}
        </AnimatePresence>
      </main>
      <Footer onNavigate={handleNavigate} />
      <WhatsAppButton />
    </div>
  );
}
