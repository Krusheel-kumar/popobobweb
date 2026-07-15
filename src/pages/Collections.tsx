import { motion } from 'framer-motion';

const collections = [
  {
    title: "First Sip",
    subtitle: "For people trying Bubble Tea for the first time.",
    items: [
      { name: "Authentic Boba Tea", story: "The original classic that started it all. Simple, pure, and perfect.", img: "authentic.png" },
      { name: "Mango Boba Tea", story: "Sweet. Fruity. A vibrant burst of tropical summer.", img: "mangoboba.png" },
      { name: "Brown Sugar Boba Tea", story: "Rich caramel notes. Fresh milk. Slow-cooked syrup.", img: "brownsugar.png" },
    ]
  },
  {
    title: "Comfort Cups",
    subtitle: "Warm. Creamy. Familiar.",
    items: [
      { name: "Taro Boba Tea", story: "Earthy vanilla notes. Velvety smooth and deeply comforting.", img: "taro.png" },
      { name: "Chocolate Boba Tea", story: "Rich, decadent chocolate perfectly paired with chewy pearls.", img: "chocolateboba.png" },
      { name: "Ferrero Rocher Boba Tea", story: "A luxurious blend of hazelnut and chocolate. Pure indulgence.", img: "ferrerorocherboba.png" },
    ]
  },
  {
    title: "Late Night Energy",
    subtitle: "Coffee. Chocolate. Matcha.",
    items: [
      { name: "Hazelnut Boba Tea", story: "Nutty, aromatic, and perfectly balanced for an evening boost.", img: "hazelnutboba.png" },
      { name: "Mocha Boba Tea", story: "The perfect collision of rich chocolate and bold espresso.", img: "mochaboba.png" },
      { name: "Desi Coffee", story: "A strong, familiar kick of local coffee flavors reimagined.", img: "desicoffeeboba.png" },
    ]
  }
];

export function Collections() {
  return (
    <div className="bg-warm-cream py-24 lg:py-32 text-rich-black overflow-hidden relative">
      
      {/* Background ambient luxury pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40 z-0">
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.05)_0%,_transparent_70%)] mix-blend-multiply" />
      </div>

      <div className="max-w-[80rem] mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center flex flex-col items-center"
        >
          <span className="text-luxury-gold text-xs font-bold tracking-widest uppercase mb-4 block">
            Curated For You
          </span>
          <h1 className="text-5xl md:text-7xl font-heading text-rich-black mb-6 font-bold tracking-tight drop-shadow-sm">
            Our Collections
          </h1>
          <p className="text-lg md:text-xl text-warm-dark-gray max-w-2xl mx-auto font-medium">
            Not just flavors. We curate drinks based on moments, moods, and memories.
          </p>
        </motion.div>

        <div className="flex flex-col gap-24">
          {collections.map((collection, idx) => (
            <div key={idx} className="flex flex-col gap-8 relative">
              
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 px-2">
                <div>
                  <h2 className="text-3xl md:text-4xl font-heading text-rich-black font-bold">{collection.title}</h2>
                  <p className="text-luxury-gold font-medium tracking-wide mt-2 text-sm uppercase">{collection.subtitle}</p>
                </div>
                
                {/* Visual scroll indicator line */}
                <div className="hidden md:flex items-center gap-2 text-warm-dark-gray/50 text-xs font-bold tracking-widest uppercase">
                  <span>Scroll</span>
                  <span className="w-12 h-[1px] bg-warm-dark-gray/30 block" />
                </div>
              </div>

              {/* Horizontal Scroll Row */}
              <div className="flex gap-6 overflow-x-auto pb-12 pt-4 px-2 snap-x snap-mandatory hide-scrollbar">
                {collection.items.map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="min-w-[85vw] md:min-w-[24rem] snap-start relative group flex flex-col gap-6 cursor-pointer"
                  >
                    
                    {/* Unified Premium Card */}
                    <div className="w-full bg-white/70 backdrop-blur-sm rounded-[2.5rem] p-4 border border-white shadow-xl shadow-rich-black/5 group-hover:shadow-2xl group-hover:shadow-luxury-gold/10 transition-all duration-500 relative">
                      
                      {/* Image Container */}
                      <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-warm-cream/50 relative mb-6">
                        <img 
                          src={`/assets/${item.img}`} 
                          alt={item.name} 
                          onError={(e) => {
                             (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1558857563-b37102e95ee5?q=80&w=600&auto=format&fit=crop';
                          }}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s] ease-out" 
                        />
                        
                        {/* Inner shadow */}
                        <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[2rem] pointer-events-none" />

                        {/* Hover Overlay Button */}
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                          <span className="bg-white text-rich-black text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                            Discover
                          </span>
                        </div>
                      </div>
                      
                      {/* Text Content */}
                      <div className="px-3 pb-4">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="w-6 h-[2px] bg-luxury-gold rounded-full" />
                          <span className="text-[10px] text-luxury-gold font-bold tracking-widest uppercase">Signature</span>
                        </div>
                        <h3 className="text-2xl font-heading text-rich-black font-bold mb-3 group-hover:text-luxury-gold transition-colors duration-300">
                          {item.name}
                        </h3>
                        <p className="text-warm-dark-gray text-sm leading-relaxed line-clamp-2 font-medium">
                          {item.story}
                        </p>
                      </div>
                      
                    </div>
                    
                  </motion.div>
                ))}
              </div>
              
              {/* Divider between collections */}
              {idx < collections.length - 1 && (
                <div className="w-full h-[1px] bg-rich-black/5 mt-4" />
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Hide default scrollbar but allow horizontal scroll */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
