import React from 'react';
import { motion } from 'framer-motion';

export const NextChapter: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] bg-warm-cream text-rich-black flex flex-col items-center justify-center overflow-hidden py-32 z-20">
      
      {/* Background illumination that bridges from the dark timeline to the bright future */}
      <div className="absolute inset-0 bg-gradient-to-t from-warm-cream via-soft-ivory to-rich-black/5 pointer-events-none" />

      {/* The golden connector line fading into the horizon */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-32 bg-gradient-to-b from-luxury-gold to-transparent opacity-80" />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        <span className="text-luxury-gold tracking-[0.3em] uppercase text-sm font-bold mb-8 block">
          Beyond {new Date().getFullYear()}
        </span>
        
        <h1 className="text-6xl md:text-8xl font-heading text-rich-black mb-12">
          The Next Chapter
        </h1>
        
        <div className="text-xl md:text-2xl text-warm-dark-gray font-light leading-relaxed space-y-6 max-w-3xl mx-auto mb-16 text-balance">
          <p>
            Our story isn't finished. 
          </p>
          <p>
            Every customer, every shared conversation, and every first sip becomes part of what comes next.
          </p>
          <p className="italic">
            Whether today becomes your first cup or your hundredth, thank you for spending time inside our world. We'd love for you to become part of the next chapter of POP O'BOB.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="w-full sm:w-auto px-10 py-5 bg-rich-black text-warm-cream rounded-full text-lg font-medium hover:bg-luxury-gold hover:text-rich-black transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1">
            Become Part Of Our Story
          </button>
          <button className="w-full sm:w-auto px-10 py-5 border-2 border-rich-black text-rich-black rounded-full text-lg font-medium hover:bg-rich-black hover:text-warm-cream transition-all duration-300">
            Visit POP O'BOB
          </button>
        </div>

      </motion.div>
      
      {/* Ambient particles for the bright future */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-40">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-luxury-gold blur-[2px]"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: 0.1
            }}
            animate={{
              y: ["-10%", "-50%", "-100%"],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: Math.random() * 5 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>
    </section>
  );
};
