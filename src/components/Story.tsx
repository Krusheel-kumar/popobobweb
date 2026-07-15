import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import authenticImage from '../assets/authentic.png';

export const Story: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const yCard = useTransform(scrollYProgress, [0, 1], ["5%", "-15%"]);

  return (
    <section ref={containerRef} className="py-24 md:py-32 lg:py-48 bg-rich-black text-warm-cream relative overflow-hidden">
      {/* Sophisticated Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-full h-full -translate-y-1/2 opacity-[0.07] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-luxury-gold via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

      <div className="max-w-[90rem] mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center justify-center">
          
          {/* Editorial Image Wrapper */}
          <motion.div 
            style={{ y: yImage }}
            className="w-full lg:w-7/12 relative z-10"
          >
            <div className="relative aspect-[3/4] md:aspect-square lg:aspect-[4/5] w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden group shadow-2xl">
              <div className="absolute inset-0 bg-rich-black/20 group-hover:bg-transparent transition-colors duration-1000 z-10" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2rem] md:rounded-[3rem] z-20 pointer-events-none" />
              
              <img 
                src={authenticImage} 
                alt="Authentic Craftsmanship" 
                className="w-full h-full object-cover filter contrast-[1.05] saturate-[1.1] scale-100 group-hover:scale-105 transition-transform duration-[2000ms] ease-out"
              />
              
              {/* Vertical Decorative Text */}
              <div className="absolute top-12 left-8 z-30 transform -rotate-90 origin-top-left hidden md:block opacity-50 mix-blend-overlay">
                <span className="text-luxury-gold uppercase tracking-[0.5em] text-xs font-semibold whitespace-nowrap">The Boba Standard</span>
              </div>
            </div>
          </motion.div>

          {/* Overlapping Frosted Glass Content Card */}
          <motion.div 
            style={{ y: yCard }}
            className="w-full lg:w-6/12 relative z-20 -mt-16 md:-mt-24 lg:mt-0 lg:-ml-32"
          >
            <div className="bg-rich-black/70 backdrop-blur-2xl p-8 md:p-12 lg:p-20 rounded-[2rem] md:rounded-[3rem] border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.8)] relative overflow-hidden group">
              
              {/* Subtle Card Glow on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-luxury-gold/5 via-transparent to-transparent transition-opacity duration-1000 pointer-events-none" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex items-center space-x-4 mb-6 md:mb-8"
              >
                <span className="h-[2px] w-8 md:w-12 bg-luxury-gold"></span>
                <span className="text-luxury-gold uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold">2017 — 2026</span>
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight text-white mb-6 md:mb-8"
              >
                A Decade of <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-luxury-gold to-white bg-[length:200%_auto] animate-gradient font-black">Obsession.</span>
              </motion.h2>

              <div className="space-y-6 md:space-y-8">
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-base md:text-lg lg:text-xl text-white/70 leading-relaxed font-light"
                >
                  From a singular vision in 2017 to a cultural phenomenon in 2026, POP O'BOB has evolved beyond a mere beverage—it has become a hallmark of the modern lifestyle.
                </motion.p>
                
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-base md:text-lg lg:text-xl text-white/70 leading-relaxed font-light"
                >
                  Every pearl is a testament to our relentless craftsmanship. We source only the rarest, high-altitude tea leaves, extracting their pure essence through a painstakingly precise brewing process. Our signature boba is slow-cooked to the exact millisecond, achieving a texture that effortlessly defies the ordinary.
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="pt-6 border-t border-white/10"
                >
                  <p className="text-xl md:text-2xl font-heading text-luxury-gold leading-relaxed font-medium italic">
                    "We do not chase trends. We set the standard."
                  </p>
                </motion.div>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="pt-10 md:pt-12"
              >
                <button className="group flex items-center space-x-4 md:space-x-6 text-white hover:text-luxury-gold transition-colors duration-500">
                  <span className="font-semibold tracking-[0.2em] uppercase text-xs md:text-sm">Experience The Legacy</span>
                  <span className="h-10 w-10 md:h-12 md:w-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-luxury-gold group-hover:bg-luxury-gold/10 transition-all duration-500">
                    <svg className="w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-1.5 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </button>
              </motion.div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
