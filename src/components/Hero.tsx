import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroVideo from '../assets/herovideonew.mp4';
import { NavLink } from 'react-router-dom';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Floating particles configuration
  const particles = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5
  }));

  return (
    <section 
      id="hero" 
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-rich-black"
    >
      {/* Background Parallax Video with Dark Overlay */}
      <motion.div 
        style={{ y: yImage, opacity }}
        className="absolute inset-0 z-0"
      >
        <video 
          src={heroVideo}
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover object-center filter saturate-[1.1] contrast-[1.1]"
        />
        {/* Soft lighting overlay and ambient glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-rich-black/40 via-transparent to-rich-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-luxury-gold/20 via-transparent to-transparent opacity-60" />
      </motion.div>

      {/* Floating Particles (representing subtle tea magic/pearls) */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-warm-cream/20 blur-[1px]"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div 
        style={{ y: yText, opacity }}
        className="relative z-20 w-full max-w-5xl px-6 flex flex-col items-center text-center mt-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-luxury-gold text-sm md:text-base font-bold tracking-[0.4em] uppercase mb-6 block drop-shadow-lg">
            The Boba Standard
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading text-soft-ivory leading-[1.05] mb-8 text-balance drop-shadow-2xl font-bold">
            Made For <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold to-soft-ivory">Good Times.</span>
          </h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-2xl text-warm-cream max-w-2xl font-light leading-relaxed mb-12 drop-shadow-lg"
        >
          The conversations. The laughter. The memories.<br />
          <span className="text-luxury-gold font-medium mt-2 block tracking-wide">It all starts here.</span>
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a 
            href="https://order.popobob.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-luxury-gold text-rich-black rounded-full text-sm font-medium overflow-hidden hover:scale-105 transition-transform duration-500"
          >
            <span className="relative z-10 flex items-center gap-2">
              Order Online
            </span>
            <div className="absolute inset-0 bg-soft-ivory transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
          </a>
          
          <NavLink 
            to="/culture"
            className="group relative px-8 py-4 border border-warm-cream/30 text-soft-ivory rounded-full text-sm font-medium overflow-hidden hover:border-luxury-gold transition-colors duration-500"
          >
            <span className="relative z-10 group-hover:text-luxury-gold transition-colors duration-500">
              Find Your Perfect Cup
            </span>
            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 bg-luxury-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </NavLink>
        </motion.div>
      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
      >
        <span className="text-xs uppercase tracking-widest text-warm-cream/50">Scroll</span>
        <div className="w-[1px] h-12 bg-warm-cream/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-luxury-gold"
          />
        </div>
      </motion.div>
    </section>
  );
};
