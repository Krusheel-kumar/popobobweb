import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const milestones = [
  { year: "2017", title: "The Beginning", desc: "Started as a small pop-up, driven by an obsession with authentic flavors.", badge: "The Origin", img: "/src/assets/story2017.png", align: "left" },
  { year: "2019", title: "First Believers", desc: "Word spread. We introduced our signature menu, crafted to perfection and met with overwhelming love.", badge: "50K+ Cups", img: "/src/assets/story2019.png", align: "right" },
  { year: "2021", title: "Growing Together", desc: "Expanded our menu and spaces, creating a true community hub in Hyderabad.", badge: "Growing Community", img: "/src/assets/story 2021.png", align: "left" },
  { year: "2023", title: "Beyond the Cup", desc: "Introduced local fusions and limited edition collections. The menu became a canvas.", badge: "100K+ Community", img: "/src/assets/story2023.png", align: "right" },
  { year: "2026", title: "Always Evolving", desc: "Redefining the premium bubble tea experience. Sleeker spaces, bolder flavors.", badge: "New Flagship", img: "/src/assets/story2026.png", align: "left" },
  { year: "Today", title: "The Next Chapter", desc: "We are just getting started. Every cup served is a new story waiting to be told.", badge: "Infinite Possibilities", img: "/src/discovertheculture.png", align: "right" },
];

// Y percentages for the 6 nodes and ending
const nodeY = [10, 24, 38, 52, 66, 80];

export const JourneyTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll within this massive container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  // Smooth the scroll progress for a buttery 60FPS path draw
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Desktop Path: narrow sweep (40 to 60) for wide screens
  const desktopPathData = `
    M 50,0 
    C 50,5 40,5 40,10 
    C 40,17 60,17 60,24 
    C 60,31 40,31 40,38 
    C 40,45 60,45 60,52 
    C 60,59 40,59 40,66 
    C 40,73 60,73 60,80 
    C 60,88 50,88 50,94
    L 50,100
  `;

  // Mobile Path: extremely wide sweep (15 to 85) so the line isn't hidden behind the cards
  const mobilePathData = `
    M 50,0 
    C 50,5 15,5 15,10 
    C 15,17 85,17 85,24 
    C 85,31 15,31 15,38 
    C 15,45 85,45 85,52 
    C 85,59 15,59 15,66 
    C 15,73 85,73 85,80 
    C 85,88 50,88 50,94
    L 50,100
  `;

  return (
    <div className="bg-warm-cream w-full relative">
      
      {/* ================= SECTION HEADING ================= */}
      <div className="w-full flex justify-center pt-24 md:pt-32 pb-8 md:pb-16 relative z-30 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          <span className="text-luxury-gold text-sm md:text-base font-bold tracking-[0.4em] uppercase mb-4 block drop-shadow-md">
            Our Legacy
          </span>
          <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-heading text-rich-black leading-[1.1] font-thin tracking-wide drop-shadow-sm">
            The Journey of <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rich-black to-luxury-gold">POP O'BOB.</span>
          </h2>
        </motion.div>
      </div>

      {/* ================= UNIFIED TIMELINE (S-Curve for All Screens) ================= */}
      <section ref={containerRef} className="relative w-full h-[3500px] md:h-[4000px] overflow-hidden text-rich-black">
        
        {/* Floating Gold Particles (CSS visual effect) */}
        <div className="absolute inset-0 pointer-events-none opacity-50 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.05)_0%,_transparent_70%)] bg-[length:100px_100px]" />

        <div className="max-w-[80rem] mx-auto w-full h-full relative px-0 md:px-12">
          
          {/* ================= SVG S-CURVE CONNECTOR ================= */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full overflow-visible">
              <defs>
                <filter id="gold-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Inactive / Future Path (Light beige) */}
              {/* Render Desktop Path */}
              <path 
                d={desktopPathData} 
                fill="none" 
                stroke="rgba(212,175,55,0.15)" 
                vectorEffect="non-scaling-stroke"
                strokeWidth="2" 
                className="hidden md:block"
              />
              {/* Render Mobile Path */}
              <path 
                d={mobilePathData} 
                fill="none" 
                stroke="rgba(212,175,55,0.15)" 
                vectorEffect="non-scaling-stroke"
                strokeWidth="2" 
                className="block md:hidden"
              />

              {/* Active / Drawn Path (Luxury Gold with Glow) */}
              <motion.path 
                d={desktopPathData} 
                fill="none" 
                stroke="#D4AF37" 
                vectorEffect="non-scaling-stroke"
                strokeWidth="3" 
                filter="url(#gold-glow)"
                style={{ pathLength: smoothProgress }} 
                className="hidden md:block"
              />
              <motion.path 
                d={mobilePathData} 
                fill="none" 
                stroke="#D4AF37" 
                vectorEffect="non-scaling-stroke"
                strokeWidth="3" 
                filter="url(#gold-glow)"
                style={{ pathLength: smoothProgress }} 
                className="block md:hidden"
              />
            </svg>
          </div>

          {/* ================= MILESTONE HTML NODES ================= */}
          {milestones.map((ms, i) => {
            const isLeft = ms.align === "left";
            
            // X coordinates for the nodes depending on the screen size
            const desktopNodeX = isLeft ? 40 : 60;
            const mobileNodeX = isLeft ? 15 : 85; 
            
            return (
              <div 
                key={i} 
                className="absolute w-full flex items-center pointer-events-none z-10"
                style={{ 
                  top: `${nodeY[i]}%`, 
                  transform: 'translateY(-50%)' 
                }}
              >
                
                {/* Responsive Container for Card Alignment */}
                <div className="w-full h-full relative">
                  
                  {/* Visual SVG Node Dot Overlay - Desktop */}
                  <motion.div 
                    initial={{ scale: 0.8, backgroundColor: "rgba(255,255,255,1)" }}
                    whileInView={{ scale: 1.2, backgroundColor: "#D4AF37" }}
                    viewport={{ once: false, margin: "-200px" }}
                    transition={{ duration: 0.5 }}
                    className="hidden md:block absolute w-5 h-5 rounded-full border-4 border-warm-cream shadow-[0_0_15px_rgba(212,175,55,0.6)] z-20"
                    style={{ 
                      left: `${desktopNodeX}%`, 
                      top: '50%',
                      transform: 'translate(-50%, -50%)'
                    }}
                  />
                  
                  {/* Visual SVG Node Dot Overlay - Mobile */}
                  <motion.div 
                    initial={{ scale: 0.8, backgroundColor: "rgba(255,255,255,1)" }}
                    whileInView={{ scale: 1.2, backgroundColor: "#D4AF37" }}
                    viewport={{ once: false, margin: "-200px" }}
                    transition={{ duration: 0.5 }}
                    className="block md:hidden absolute w-4 h-4 rounded-full border-4 border-warm-cream shadow-[0_0_10px_rgba(212,175,55,0.6)] z-20"
                    style={{ 
                      left: `${mobileNodeX}%`, 
                      top: '50%',
                      transform: 'translate(-50%, -50%)'
                    }}
                  />

                  {/* Bulletproof Card Content - Staggered on Mobile to avoid overlapping the line */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, margin: "-10%" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`absolute top-1/2 -translate-y-1/2 pointer-events-auto flex flex-col gap-4 md:gap-8 items-center md:items-end w-[70vw] md:w-[400px] bg-white/80 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-4 md:p-0 rounded-[2rem] md:rounded-none border border-white/50 md:border-none shadow-xl md:shadow-none shadow-rich-black/5 z-30 ${
                      isLeft ? 'left-[22%] md:left-auto md:right-[65%] text-left md:text-right' : 'right-[22%] md:right-auto md:left-[65%] text-left'
                    }`}
                  >
                    
                    {/* Image Box */}
                    <div className="w-full h-[250px] md:w-80 md:h-96 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-none md:shadow-2xl shadow-rich-black/10 border-none md:border md:border-white/50 bg-white/30 md:p-2">
                      <img 
                        src={ms.img} 
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1558857563-b37102e95ee5?q=80&w=400&auto=format&fit=crop';
                        }}
                        alt={ms.title} 
                        className="w-full h-full object-cover rounded-[1rem] md:rounded-xl filter saturate-[1.1]" 
                      />
                    </div>

                    {/* Text Box */}
                    <div className="flex flex-col items-center md:items-start w-full">
                      <h2 className="text-4xl md:text-7xl font-heading text-luxury-gold mb-2 font-bold drop-shadow-sm">
                        {ms.year}
                      </h2>
                      <h3 className="text-2xl md:text-5xl font-heading text-rich-black mb-3 md:mb-4">
                        {ms.title}
                      </h3>
                      <p className="text-warm-dark-gray leading-relaxed text-sm md:text-lg font-medium md:font-light md:max-w-[320px]">
                        {ms.desc}
                      </p>
                    </div>

                    {/* Achievement Badge */}
                    <div className="inline-flex items-center justify-center px-4 py-2 md:px-5 md:py-2.5 rounded-full border border-luxury-gold/30 bg-luxury-gold/5 text-luxury-gold text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-sm mt-2 md:mt-0">
                      {ms.badge}
                    </div>

                  </motion.div>
                </div>
              </div>
            );
          })}

          {/* ================= ENDING BLOCK ================= */}
          <div 
            className="absolute w-full flex justify-center items-center pointer-events-none z-10 px-4"
            style={{ top: '94%', transform: 'translateY(-50%)' }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-10%" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center pointer-events-auto w-full max-w-2xl px-6 bg-warm-cream/90 backdrop-blur-md py-8 md:py-10 rounded-[2rem] md:rounded-[3rem] border border-white/50 shadow-2xl shadow-luxury-gold/5"
            >
              <h3 className="text-[10px] md:text-sm font-bold tracking-[0.3em] text-luxury-gold uppercase mb-4 md:mb-6">
                The Next Chapter
              </h3>
              <h2 className="text-3xl md:text-6xl font-heading text-rich-black mb-6 md:mb-8 leading-tight">
                Nine years later, every cup continues the story.
              </h2>
              <p className="text-sm md:text-xl text-warm-dark-gray italic mb-8 md:mb-12">
                Maybe the next chapter starts with yours.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
                <a href="#home" className="inline-flex justify-center items-center px-6 py-4 md:px-8 md:py-4 rounded-full bg-rich-black text-warm-cream font-medium tracking-widest uppercase text-[10px] md:text-sm hover:bg-luxury-gold transition-colors duration-500 shadow-lg hover:shadow-luxury-gold/30">
                  Visit POP O'BOB
                </a>
                <a href="#menu" className="inline-flex justify-center items-center px-6 py-4 md:px-8 md:py-4 rounded-full border border-rich-black text-rich-black font-medium tracking-widest uppercase text-[10px] md:text-sm hover:bg-rich-black hover:text-warm-cream transition-colors duration-500">
                  Order Your First Cup
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
