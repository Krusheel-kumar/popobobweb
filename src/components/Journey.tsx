import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const milestones = [
  { year: '2017', title: 'The Genesis', desc: 'A singular vision was born. We opened our first boutique store with one uncompromising mission: to craft the perfect cup of bubble tea.' },
  { year: '2019', title: 'The Signature Cult', desc: 'Introduced our legendary Brown Sugar Pearl Milk. It didn’t just set a new standard—it started a cultural movement.' },
  { year: '2022', title: 'Architects of Expansion', desc: 'Grew our presence to prestigious new locations, carefully designing each space to be a sanctuary of modern lifestyle.' },
  { year: '2024', title: 'Digital Elegance', desc: 'Launched our seamless digital ecosystem and app, seamlessly blending traditional craftsmanship with avant-garde technology.' },
  { year: '2026', title: 'The Global Standard', desc: 'Celebrating 9 years of unrivaled excellence. We remain, as always, deeply obsessed with perfection.' },
];

export const Journey: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.85], ["0%", "100%"]);
  const orbPosition = useTransform(scrollYProgress, [0.1, 0.85], ["0%", "100%"]);

  return (
    <section id="journey" ref={containerRef} className="py-32 bg-soft-beige relative overflow-hidden">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-32 flex flex-col items-center"
        >
          <span className="text-luxury-gold uppercase tracking-[0.3em] text-sm font-semibold mb-4">Our Heritage</span>
          <h2 className="text-5xl md:text-7xl font-heading font-bold text-rich-black mb-8">The 9-Year Journey.</h2>
          <p className="text-xl text-dark-gray/80 max-w-3xl mx-auto font-light leading-relaxed">
            From our very first cup to our millionth, every step forward has been guided by an unwavering commitment to premium ingredients, authentic craftsmanship, and you.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Base Inactive Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-dark-gray/10 -translate-x-1/2 rounded-full" />
          
          {/* Animated Glowing Fill Line */}
          <motion.div 
            className="absolute left-6 md:left-1/2 top-0 w-[4px] bg-gradient-to-b from-luxury-gold to-brand-accent -translate-x-1/2 origin-top rounded-full shadow-[0_0_15px_rgba(247,201,72,0.5)]"
            style={{ height: lineHeight }}
          />

          {/* Scrolling "Lightning Orb" Element */}
          <motion.div
            className="absolute left-6 md:left-1/2 w-3 h-16 bg-white rounded-full -translate-x-1/2 z-20 shadow-[0_0_30px_10px_rgba(247,201,72,0.8)]"
            style={{ 
              top: orbPosition,
              filter: "blur(1px)" 
            }}
          />

          <div className="space-y-32 relative z-30">
            {milestones.map((milestone, idx) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`relative flex flex-col md:flex-row items-center gap-12 md:gap-24 group ${
                  idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Year Marker (Glows when scrolled into view) */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-soft-beige border-[4px] border-luxury-gold shadow-[0_0_20px_rgba(247,201,72,0.4)] group-hover:scale-125 group-hover:shadow-[0_0_40px_rgba(247,201,72,0.8)] group-hover:bg-luxury-gold transition-all duration-500" />

                <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <div className="p-8 rounded-[2rem] bg-white/40 backdrop-blur-sm border border-white/60 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-15px_rgba(247,201,72,0.2)] hover:-translate-y-2 transition-all duration-500">
                    <h3 className="text-6xl md:text-7xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-br from-luxury-gold to-brand-accent mb-4 opacity-90">{milestone.year}</h3>
                    <h4 className="text-2xl md:text-3xl font-bold text-rich-black mb-4">{milestone.title}</h4>
                    <p className="text-dark-gray/80 leading-relaxed text-lg font-light">{milestone.desc}</p>
                  </div>
                </div>
                
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
