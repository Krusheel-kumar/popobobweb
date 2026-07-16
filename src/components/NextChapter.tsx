import React from 'react';
import { motion } from 'framer-motion';

export const NextChapter: React.FC = () => {
  return (
    <section className="relative bg-warm-cream text-rich-black py-24 lg:py-32 overflow-hidden flex flex-col items-center justify-center z-20 min-h-[70vh]">
      
      {/* Background glow for luxury feel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-luxury-gold/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative vertical line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-luxury-gold/60 to-transparent opacity-80" />

      <div className="max-w-[70rem] mx-auto px-6 relative z-10 flex flex-col items-center text-center mt-12">
        
        {/* Eyebrow */}
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-luxury-gold font-bold text-xs md:text-sm uppercase tracking-[0.4em] mb-8 md:mb-10"
        >
          Before You Go...
        </motion.span>

        {/* Main Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.2] text-rich-black max-w-[55rem] mx-auto tracking-tight mb-10 md:mb-12"
        >
          <span className="block mb-2">Whether today becomes your first cup</span>
          <span className="block mb-2">or your hundredth,</span>
          <span className="block text-rich-black/80 font-medium text-3xl md:text-4xl lg:text-5xl mt-6">thank you for spending a little time</span>
          <span className="block text-rich-black/80 font-medium text-3xl md:text-4xl lg:text-5xl">inside our world.</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-warm-dark-gray italic text-xl md:text-2xl mb-14 md:mb-16 font-light"
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
            className="w-full sm:w-auto px-12 py-5 bg-rich-black text-warm-cream rounded-full font-bold text-sm uppercase tracking-widest hover:bg-luxury-gold hover:text-rich-black transition-all duration-300 shadow-xl hover:-translate-y-1"
          >
            Order Now
          </a>
          
          <a 
            href="#collections" 
            className="w-full sm:w-auto px-12 py-5 bg-transparent border border-rich-black/20 text-rich-black rounded-full font-bold text-sm uppercase tracking-widest hover:border-rich-black hover:bg-rich-black/5 transition-all duration-300"
          >
            Visit Store
          </a>
          
          <a 
            href="#community" 
            className="w-full sm:w-auto px-6 py-5 text-rich-black/60 hover:text-luxury-gold text-sm font-bold uppercase tracking-widest transition-colors duration-300 underline underline-offset-8 decoration-rich-black/20 hover:decoration-luxury-gold"
          >
            Join POP Club
          </a>
        </motion.div>

      </div>
    </section>
  );
};
