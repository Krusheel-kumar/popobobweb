import React from 'react';
import { motion } from 'framer-motion';

export const Rewards: React.FC = () => {
  return (
    <section id="rewards" className="py-32 bg-rich-black text-warm-cream relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-luxury-gold/10 via-transparent to-transparent -translate-y-1/2 translate-x-1/3" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center gap-16">
        
        <div className="w-full md:w-1/2">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-heading font-bold mb-6 text-balance"
          >
            Join the <br/><span className="text-luxury-gold">POP Club</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-white/70 mb-8 max-w-md"
          >
            Unlock exclusive rewards, earn Boba Points on every purchase, and get early access to our seasonal signature drinks. Your loyalty, elegantly rewarded.
          </motion.p>
          
          <motion.ul 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4 mb-12"
          >
            {['Earn Boba Points on every order', 'Exclusive Birthday Rewards', 'Early access to new menus', 'Members-only events & tastings'].map((item, idx) => (
              <li key={idx} className="flex items-center space-x-3 text-white/80">
                <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
                <span>{item}</span>
              </li>
            ))}
          </motion.ul>

          <motion.button 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-luxury-gold text-rich-black px-8 py-4 rounded-full text-base font-medium hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(247,201,72,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
          >
            Become a Member
          </motion.button>
        </div>

        {/* Premium Membership Card */}
        <div className="w-full md:w-1/2 flex justify-center perspective-[1000px]">
          <motion.div 
            initial={{ rotateY: 20, rotateX: 10, opacity: 0 }}
            whileInView={{ rotateY: -10, rotateX: 5, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            whileHover={{ rotateY: 0, rotateX: 0, scale: 1.05 }}
            className="w-full max-w-sm aspect-[1.6] rounded-2xl relative overflow-hidden p-6 flex flex-col justify-between shadow-2xl shadow-luxury-gold/20"
            style={{
              background: 'linear-gradient(135deg, #222222 0%, #111111 100%)',
              border: '1px solid rgba(247, 201, 72, 0.3)'
            }}
          >
            {/* Holographic overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-luxury-gold/5 via-transparent to-white/10 mix-blend-overlay pointer-events-none" />
            
            <div className="flex justify-between items-start relative z-10">
              <div className="text-xl font-heading font-bold tracking-widest text-luxury-gold">POP O'BOB</div>
              <div className="uppercase tracking-widest text-xs font-medium text-white/50">Club Member</div>
            </div>

            <div className="relative z-10">
              <div className="text-white/40 font-mono text-sm tracking-[0.2em] mb-2">**** **** **** 2015</div>
              <div className="flex justify-between items-end">
                <div className="uppercase font-medium text-white/80 tracking-widest">Jane Doe</div>
                <div className="text-luxury-gold font-bold font-heading text-2xl">Gold</div>
              </div>
            </div>
            
            {/* Card Chip Decoration */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 border border-luxury-gold/30 rounded-md opacity-50 overflow-hidden">
              <div className="w-full h-px bg-luxury-gold/30 absolute top-1/2" />
              <div className="w-px h-full bg-luxury-gold/30 absolute left-1/2" />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
