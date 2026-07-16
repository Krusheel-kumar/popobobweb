import React from 'react';
import { motion } from 'framer-motion';

export const OutroCTA: React.FC = () => {
  return (
    <section className="relative bg-[#0a0a0a] text-warm-cream py-24 lg:py-32 overflow-hidden flex flex-col items-center justify-center border-b border-white/5">
      
      {/* Background glow for luxury feel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-luxury-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[70rem] mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Eyebrow */}
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-luxury-gold font-bold text-xs md:text-sm uppercase tracking-[0.3em] mb-8 md:mb-12"
        >
          Before You Go...
        </motion.span>

        {/* Main Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-heading text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.3] text-[#fdfaf6] max-w-[50rem] mx-auto tracking-tight mb-12 md:mb-16"
        >
          Whether today becomes your first cup or your hundredth,
          <br className="hidden md:block" />
          <span className="text-[#fdfaf6]/90 mt-2 block">thank you for spending a little time inside our world.</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-warm-cream/50 italic text-lg md:text-xl mb-12 md:mb-16 font-light"
        >
          We'll save you a seat.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 w-full sm:w-auto"
        >
          <a 
            href="https://order.popobob.com" 
            target="_blank" 
            rel="noreferrer"
            className="w-full sm:w-auto px-10 py-4 bg-luxury-gold text-rich-black rounded-full font-bold text-sm uppercase tracking-widest hover:bg-[#e6be65] transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:-translate-y-1"
          >
            Order Now
          </a>
          
          <a 
            href="#locations" 
            className="w-full sm:w-auto px-10 py-4 bg-transparent border border-white/20 text-warm-cream rounded-full font-bold text-sm uppercase tracking-widest hover:border-luxury-gold hover:text-luxury-gold transition-all duration-300"
          >
            Visit Store
          </a>
          
          <a 
            href="#club" 
            className="w-full sm:w-auto px-6 py-4 text-warm-cream/70 hover:text-luxury-gold text-sm font-semibold uppercase tracking-widest transition-colors duration-300 underline underline-offset-8 decoration-white/20 hover:decoration-luxury-gold"
          >
            Join POP Club
          </a>
        </motion.div>

      </div>
    </section>
  );
};
