import React from 'react';
import { motion } from 'framer-motion';
// @ts-ignore
import shakeImg from '../assets/bobashakes.png';

export const BobaShakeSpotlight: React.FC = () => {
  return (
    <section className="relative w-full py-24 lg:py-32 overflow-hidden bg-warm-cream text-rich-black flex flex-col items-center">
      
      {/* Background ambient luxury pattern/glow */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,_rgba(212,175,55,0.08)_0%,_transparent_70%)] mix-blend-multiply" />
      </div>

      <div className="max-w-[80rem] mx-auto px-6 md:px-12 w-full relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          
          {/* Left Side: Content Box */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              
              {/* NEW Badge */}
              <div className="inline-flex items-center gap-3 mb-8">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-luxury-gold opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-luxury-gold"></span>
                </span>
                <span className="text-luxury-gold text-xs font-bold tracking-[0.4em] uppercase border border-luxury-gold/30 px-5 py-2 rounded-full bg-white/60 shadow-sm backdrop-blur-md">
                  New Arrival
                </span>
              </div>
              
              <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-heading font-bold leading-[1.05] mb-6 tracking-tight drop-shadow-sm">
                Meet the <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rich-black via-luxury-gold to-rich-black">Boba Shake.</span>
              </h2>
              
              <p className="text-lg md:text-xl text-warm-dark-gray font-medium max-w-lg leading-relaxed mb-10">
                We took our obsessively crafted premium boba and blended it into the ultimate thick, creamy, and indulgent shake experience. The standard, completely reimagined.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <a 
                  href="#digital-ordering" 
                  className="inline-flex justify-center items-center px-10 py-4 rounded-full bg-rich-black text-warm-cream font-bold tracking-[0.2em] uppercase text-sm hover:bg-luxury-gold hover:text-white hover:scale-105 transition-all duration-300 shadow-xl shadow-rich-black/10"
                >
                  Order It First
                </a>
                <a 
                  href="#menu" 
                  className="inline-flex justify-center items-center px-10 py-4 rounded-full border border-rich-black/20 text-rich-black font-bold tracking-[0.2em] uppercase text-sm hover:bg-rich-black/5 transition-colors duration-300"
                >
                  View Details
                </a>
              </div>

            </motion.div>
          </div>

          {/* Right Side: Constrained Premium Image Box */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-lg relative rounded-[2rem] overflow-hidden shadow-2xl shadow-rich-black/5 bg-white/50 backdrop-blur-md border border-white p-3 group"
            >
              <div className="w-full rounded-[1.5rem] overflow-hidden bg-white/50">
                <img 
                  src={shakeImg} 
                  alt="The New Boba Shake" 
                  className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-[2s] ease-out"
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
