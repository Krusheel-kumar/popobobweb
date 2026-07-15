import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Zap, Truck, Sparkles } from 'lucide-react';

const techFeatures = [
  { icon: <Smartphone size={32} />, title: 'QR Ordering', desc: 'Scan, select, and skip the line entirely.' },
  { icon: <Zap size={32} />, title: 'Fast Pickup', desc: 'Real-time order tracking for the perfect pickup timing.' },
  { icon: <Truck size={32} />, title: 'Delivery Integration', desc: 'Available on Swiggy and Zomato for your convenience.' },
  { icon: <Sparkles size={32} />, title: 'AI Recommendation', desc: 'Personalized drink suggestions based on your taste.' },
];

export const Technology: React.FC = () => {
  return (
    <section className="py-32 bg-warm-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-heading font-bold text-rich-black mb-6 leading-tight"
            >
              Technology Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold to-brand-accent">Tradition</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-dark-gray mb-12"
            >
              While our craftsmanship remains rooted in authentic traditions, our ordering experience is built for the modern lifestyle. Fast, seamless, and deeply personalized.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {techFeatures.map((feat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + (idx * 0.1) }}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-soft-beige hover:shadow-xl hover:border-luxury-gold/50 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-soft-beige rounded-full flex items-center justify-center text-luxury-gold mb-6 group-hover:scale-110 group-hover:bg-luxury-gold group-hover:text-white transition-all duration-300">
                    {feat.icon}
                  </div>
                  <h3 className="text-xl font-bold text-rich-black mb-2">{feat.title}</h3>
                  <p className="text-sm text-dark-gray">{feat.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative w-full aspect-square rounded-[3rem] bg-gradient-to-tr from-soft-beige to-white p-8 shadow-2xl flex items-center justify-center border border-luxury-gold/10 overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-luxury-gold/10 via-transparent to-transparent" />
              {/* Abstract phone/app mockup visualization */}
              <div className="relative w-2/3 h-5/6 bg-white rounded-[2.5rem] shadow-2xl border-8 border-rich-black overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-rich-black rounded-b-xl z-20" />
                <div className="w-full h-1/3 bg-luxury-gold/20 flex items-end p-6">
                  <div className="text-2xl font-heading font-bold text-rich-black">POP O'BOB</div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="w-full h-24 bg-soft-beige rounded-xl animate-pulse" />
                  <div className="flex gap-4">
                    <div className="w-1/2 h-20 bg-soft-beige rounded-xl animate-pulse delay-75" />
                    <div className="w-1/2 h-20 bg-soft-beige rounded-xl animate-pulse delay-150" />
                  </div>
                  <div className="w-full h-12 bg-luxury-gold rounded-full mt-8 shadow-lg shadow-luxury-gold/30 flex items-center justify-center">
                    <div className="w-1/2 h-4 bg-white/50 rounded-full" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};
