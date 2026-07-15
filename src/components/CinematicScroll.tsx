import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';

export const CinematicScroll: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} className="bg-warm-cream py-24 lg:py-32 overflow-hidden relative">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-luxury-gold/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-[80rem] mx-auto px-6 md:px-12 w-full relative z-10">
        
        <div className="flex flex-col-reverse lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Premium Bento Image Container */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-rich-black/5 bg-white/50 backdrop-blur-md border border-white p-3 md:p-4 group">
              <div className="relative w-full h-[400px] md:h-[550px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden">
                <motion.img 
                  initial={{ scale: 1.05, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  src="/discovertheculture.png" 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1558857563-b37102e95ee5?q=80&w=400&auto=format&fit=crop';
                  }}
                  alt="POP O'BOB Culture" 
                  className="w-full h-full object-cover rounded-[1.5rem] md:rounded-[2rem] transform group-hover:scale-105 transition-transform duration-[2s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
                
                {/* Elegant overlay tag */}
                <div className="absolute bottom-6 left-6 z-20 bg-white/20 px-6 py-2 rounded-full border border-white/40 shadow-sm backdrop-blur-md">
                  <span className="text-white text-xs font-bold tracking-[0.2em] uppercase drop-shadow-sm">Since 2017</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Content Box */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-14"
            >
              {/* Tagline */}
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-[1px] bg-luxury-gold block" />
                <span className="text-luxury-gold text-xs font-bold tracking-widest uppercase">
                  Discover The Culture
                </span>
              </div>
              
              {/* Main Text */}
              <h2 className="text-5xl md:text-6xl lg:text-[5rem] font-heading text-rich-black leading-[1.05] mb-8 font-bold tracking-tight">
                More Than<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rich-black to-luxury-gold/80">Bubble Tea.</span>
              </h2>
              
              <div className="pl-6 border-l-2 border-luxury-gold/30">
                <p className="text-lg md:text-xl text-warm-dark-gray leading-relaxed max-w-md font-medium">
                  We've created a space in <span className="font-bold text-rich-black">Hyderabad</span> to pause, connect, and <span className="text-luxury-gold font-bold">discover something new</span>. Every cup reflects a culture built on craftsmanship.
                </p>
              </div>
            </motion.div>

            {/* The 3 Cards */}
            <div className="flex flex-col w-full relative max-w-lg">
              
              {[
                { 
                  title: "Crafted Around You", 
                  desc: <>Choose your tea, sweetness, and toppings to create a cup that's <span className="font-bold text-rich-black">uniquely yours</span>.</>,
                  number: "01"
                },
                { 
                  title: "Made for Everyday", 
                  desc: <>From study sessions to celebrations, every visit <span className="font-bold text-rich-black">becomes a memory</span>.</>,
                  number: "02"
                },
                { 
                  title: "Growing With You", 
                  desc: <>Every guest and shared smile <span className="font-bold text-rich-black">shapes our story</span>. The next chapter is yours.</>,
                  number: "03"
                }
              ].map((card, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                  className="group flex flex-col sm:flex-row sm:items-start gap-5 py-6 border-t border-rich-black/10 hover:pr-4 transition-all duration-300 cursor-default"
                >
                  <div className="flex items-center gap-4 sm:w-16 shrink-0 pt-1">
                    <span className="text-luxury-gold/50 font-bold text-xs tracking-widest group-hover:text-luxury-gold transition-colors duration-300">
                      {card.number}.
                    </span>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl md:text-2xl font-heading text-rich-black font-bold group-hover:text-luxury-gold transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-warm-dark-gray leading-relaxed text-sm md:text-base font-medium">
                      {card.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
              <div className="w-full h-[1px] bg-rich-black/10" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
