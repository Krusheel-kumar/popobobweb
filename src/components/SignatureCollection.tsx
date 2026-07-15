import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import brownSugar from '../assets/brownsugartrending.png';
import matcha from '../assets/matchatrending.png';
import mango from '../assets/mangotrending.png';
import taro from '../assets/taro.png';
import ferrero from '../assets/ferrerorocherboba.png';
import biscoff from '../assets/lotusbiscoffboba.png';

const signatures = [
  {
    id: 1,
    name: 'Brown Sugar Pearl',
    desc: 'Our iconic signature. Warm, slow-cooked pearls swirled with premium milk.',
    image: brownSugar,
    color: 'from-[#F7C948]/20 to-[#2A1B16]/20',
    glow: 'rgba(247,201,72,0.4)',
    tag: 'The Original'
  },
  {
    id: 2,
    name: 'Kyoto Matcha Latte',
    desc: 'Ceremonial grade matcha whisked to perfection over ice.',
    image: matcha,
    color: 'from-[#8CB369]/20 to-[#4A5D23]/20',
    glow: 'rgba(140,179,105,0.4)',
    tag: 'Authentic'
  },
  {
    id: 3,
    name: 'Mango Pomelo Sago',
    desc: 'Fresh mango puree, coconut milk, and chewy sago pearls.',
    image: mango,
    color: 'from-[#F4A261]/20 to-[#E76F51]/20',
    glow: 'rgba(244,162,97,0.4)',
    tag: 'Seasonal'
  },
  {
    id: 4,
    name: 'Taro Fantasy',
    desc: 'Real taro root blended for a creamy, earthy, and sweet experience.',
    image: taro,
    color: 'from-[#B5838D]/20 to-[#6D597A]/20',
    glow: 'rgba(181,131,141,0.4)',
    tag: 'Fan Favorite'
  },
  {
    id: 5,
    name: 'Ferrero Rocher Craft',
    desc: 'Rich hazelnut cocoa, crushed gold wafers, and premium chocolate boba.',
    image: ferrero,
    color: 'from-[#D4AF37]/20 to-[#4A2511]/20',
    glow: 'rgba(212,175,55,0.4)',
    tag: 'Premium'
  },
  {
    id: 6,
    name: 'Lotus Biscoff Dream',
    desc: 'Caramelized biscuit spread blended into a velvety milkshake base.',
    image: biscoff,
    color: 'from-[#E36414]/20 to-[#8A2500]/20',
    glow: 'rgba(227,100,20,0.4)',
    tag: 'Indulgent'
  }
];

export const SignatureCollection: React.FC = () => {
  return (
    <section id="signature" className="py-24 md:py-32 bg-rich-black relative">
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-luxury-gold via-rich-black to-rich-black pointer-events-none" />
      
      <div className="max-w-[85rem] mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 md:mb-24 flex flex-col items-center"
        >
          <span className="text-luxury-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4">Our Masterpieces</span>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">Signature Collection.</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto font-light">Crafted with precision, loved by millions. Discover the visionary drinks that defined our 9-year journey.</p>
        </motion.div>

        {/* Compact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {signatures.map((drink, index) => (
            <DrinkCard key={drink.id} drink={drink} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const DrinkCard = ({ drink, index }: { drink: any, index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-[380px] md:h-[420px] rounded-[2rem] overflow-hidden cursor-pointer"
    >
      {/* Background Colors */}
      <div className="absolute inset-0 bg-rich-black/50 z-0" />
      <div className={`absolute inset-0 bg-gradient-to-br ${drink.color} opacity-40 group-hover:opacity-100 transition-opacity duration-700 z-10`} />
      
      {/* Card Border */}
      <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2rem] z-20 pointer-events-none" />

      {/* Decorative Tag */}
      <div className="absolute top-5 left-5 z-40 transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1">
        <span className="px-3 py-1 rounded-full border border-white/20 text-[10px] md:text-xs font-semibold tracking-widest uppercase text-white/90 bg-white/10 backdrop-blur-md">
          {drink.tag}
        </span>
      </div>

      {/* Perfectly Fitted Image Area */}
      <div className="absolute top-0 left-0 w-full h-[65%] flex items-center justify-center p-6 z-30">
        <div 
          className="relative w-full h-full flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
          style={{ transform: isHovered ? 'scale(1.1) rotate(3deg) translateY(-5px)' : 'scale(1) rotate(0deg) translateY(0)' }}
        >
          {/* Subtle Glow behind image */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full blur-2xl transition-all duration-700"
            style={{ 
              backgroundColor: drink.glow,
              opacity: isHovered ? 1 : 0.3,
              transform: isHovered ? 'scale(1.5)' : 'scale(1)'
            }}
          />
          <img 
            src={drink.image} 
            alt={drink.name} 
            className="relative h-full w-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)] z-40"
          />
        </div>
      </div>

      {/* Bottom Content Area */}
      <div className="absolute bottom-0 left-0 w-full h-[35%] bg-black/40 backdrop-blur-md border-t border-white/10 p-5 md:p-6 z-40 flex flex-col justify-center transition-all duration-500 group-hover:bg-black/60 group-hover:h-[45%]">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl md:text-2xl font-bold font-heading text-white group-hover:text-luxury-gold transition-colors duration-300">
            {drink.name}
          </h3>
          <span className="text-luxury-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </div>
        
        <div className="overflow-hidden">
          <AnimatePresence>
            {isHovered && (
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className="text-white/70 text-xs md:text-sm leading-relaxed font-light mt-1"
              >
                {drink.desc}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};
