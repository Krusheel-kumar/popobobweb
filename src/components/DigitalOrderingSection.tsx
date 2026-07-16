import React from 'react';
import { motion } from 'framer-motion';

export const DigitalOrderingSection: React.FC = () => {
  const features = [
    {
      num: "01",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-luxury-gold">
          <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
          <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
          <line x1="6" y1="2" x2="6" y2="4" />
          <line x1="10" y1="2" x2="10" y2="4" />
          <line x1="14" y1="2" x2="14" y2="4" />
        </svg>
      ),
      title: "Freshly Brewed",
      desc: "Real tea, brewed fresh every day. Paired perfectly with our signature chewy boba."
    },
    {
      num: "02",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-luxury-gold">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
          <line x1="12" y1="18" x2="12.01" y2="18"/>
        </svg>
      ),
      title: "Customize Your Drink",
      desc: "Choose your sweetness, ice level, and favorite toppings right from your phone."
    },
    {
      num: "03",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-luxury-gold">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      title: "Skip the Line",
      desc: "Order ahead and skip the wait. Your drink will be ready when you arrive."
    },
    {
      num: "04",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-luxury-gold">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      ),
      title: "Earn Rewards",
      desc: "Earn points with every sip. Get free drinks, early access to new flavors, and special offers."
    }
  ];

  return (
    <section id="order-online" className="py-24 lg:py-32 bg-warm-cream relative overflow-hidden">
      
      {/* Background ambient luxury pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30 z-0">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.05)_0%,_transparent_70%)] mix-blend-multiply" />
      </div>

      <div className="max-w-[80rem] mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Impactful Text & CTA */}
        <div className="w-full lg:w-1/3 flex flex-col justify-center text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 mb-6 justify-center lg:justify-start w-full">
              <span className="w-8 h-[1px] bg-luxury-gold block" />
              <span className="text-luxury-gold text-xs font-bold tracking-widest uppercase">
                Digital Flagship
              </span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-rich-black mb-8 leading-[1.1] tracking-tight">
              Order. <br />
              Sip. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rich-black via-luxury-gold to-rich-black">Earn.</span>
            </h2>
            
            <p className="text-warm-dark-gray text-lg font-medium mb-12 leading-relaxed">
              Get POP O'BOB at the tap of a button. Order ahead to skip the line and earn rewards with every drink.
            </p>

            <a 
              href="https://order.popobob.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center px-10 py-5 rounded-full bg-rich-black text-white font-bold tracking-widest uppercase text-sm hover:bg-luxury-gold hover:shadow-xl hover:shadow-luxury-gold/20 transition-all duration-300 w-full lg:w-auto"
            >
              Start Your Order
            </a>
          </motion.div>
        </div>

        {/* Right Side: Premium Typography Grid */}
        <div className="w-full lg:w-3/5 lg:ml-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative bg-white rounded-[1.5rem] p-6 shadow-lg shadow-rich-black/5 hover:shadow-xl hover:shadow-luxury-gold/10 hover:-translate-y-1 transition-all duration-500 overflow-hidden border border-black/5"
              >
                {/* Scaled-down Watermark Number */}
                <div className="absolute -top-4 -right-4 text-[6rem] font-heading font-bold text-warm-cream/50 z-0 group-hover:text-luxury-gold/5 transition-colors duration-500 pointer-events-none select-none">
                  {feature.num}
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-warm-cream flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500 border border-luxury-gold/10 shadow-sm">
                    {/* Render icon a bit smaller by cloning it with new size, or since it uses svg with w-32 h-32 classes inside... wait, the icons use width="32" height="32". 
                        I should shrink the wrapper and the icon will overflow or I can just use a smaller wrapper. Let's use scale transform to easily shrink the SVG since it's hardcoded. */}
                    <div className="transform scale-[0.7]">
                      {feature.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-bold font-heading text-rich-black mb-2">
                    {feature.title}
                  </h3>
                  
                  <p className="text-warm-dark-gray text-sm leading-relaxed font-medium">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
