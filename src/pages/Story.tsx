import { motion } from 'framer-motion';



export function Story() {
  return (
    <div className="bg-warm-cream min-h-screen pt-32 pb-24 text-rich-black overflow-hidden">
      
      {/* 1. Founder Story Section */}
      <section className="max-w-[90rem] mx-auto px-6 md:px-12 mb-32">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-sm font-medium tracking-[0.2em] text-luxury-gold uppercase mb-6">Our Origins</h3>
              <h1 className="text-5xl md:text-7xl font-heading text-rich-black leading-tight mb-8">
                The People Behind<br/>POP O'BOB
              </h1>
              <div className="space-y-6 text-lg text-warm-dark-gray leading-relaxed max-w-lg">
                <p>
                  It never started as a business plan. It started as an obsession.
                </p>
                <p>
                  Years ago, we realized that the bubble tea we grew up loving was getting lost in translation. Menus were becoming endless, ingredients were becoming artificial, and the experience was feeling rushed.
                </p>
                <p>
                  We wanted to build something different. A space where tea was respected, where every pearl was slow-cooked, and where you didn't just grab a drink—you experienced a culture.
                </p>
                <div className="pt-6 border-l-2 border-luxury-gold/30 pl-6 mt-8">
                  <p className="font-heading italic text-2xl text-rich-black leading-relaxed">
                    "We don't sell drinks. We craft small moments of joy."
                  </p>
                  <div className="mt-6">
                    <p className="text-sm font-bold tracking-[0.2em] text-rich-black uppercase">
                      — Shiva Abhinav Amaraneni
                    </p>
                    <p className="text-xs tracking-[0.2em] text-luxury-gold uppercase mt-1.5 font-medium">
                      Founder, POP O'BOB
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full max-w-[500px] aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border border-white/50 bg-white/30 p-3 relative group"
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-luxury-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />
              
              <img 
                src="/assets/peoplebehind.png" 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop';
                }}
                alt="The People Behind POP O'BOB" 
                className="w-full h-full object-cover rounded-[2.5rem] filter saturate-[1.05] group-hover:scale-105 transition-transform duration-1000"
              />
            </motion.div>
          </div>
        </div>
      </section>


      
    </div>
  );
}
