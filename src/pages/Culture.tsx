import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  { id: 1, title: "Pierce the Lid", desc: "The satisfying 'pop' is the sound of your journey beginning.", icon: "🎯" },
  { id: 2, title: "The First Sip", desc: "Don't mix yet. Taste the pure tea or fresh milk at the top.", icon: "🍵" },
  { id: 3, title: "Chew the Pearls", desc: "Draw up the warm, sweet boba from the bottom.", icon: "🧋" },
  { id: 4, title: "Mix & Blend", desc: "Stir it up to combine the temperature, texture, and flavor.", icon: "🌪️" },
  { id: 5, title: "Make It Yours", desc: "Next time, adjust the ice and sweetness to find your perfect balance.", icon: "✨" }
];

export function Culture() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="bg-warm-cream min-h-screen pt-32 pb-24 text-rich-black overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h3 className="text-sm font-medium tracking-[0.2em] text-luxury-gold uppercase mb-6">The Ritual</h3>
          <h1 className="text-5xl md:text-7xl font-heading text-rich-black mb-6 text-balance">
            How to drink<br/>Bubble Tea
          </h1>
          <p className="text-xl text-warm-dark-gray max-w-2xl mx-auto">
            Yes, there is a right way. And it makes all the difference.
          </p>
        </motion.div>

        {/* Interactive Steps Section */}
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          
          {/* Visual Cup Area (Left) */}
          <div className="w-full md:w-1/2 flex justify-center">
            <motion.div 
              className="relative w-64 h-96 bg-white/40 rounded-t-sm rounded-b-3xl border-4 border-white/80 shadow-xl overflow-hidden flex flex-col justify-end"
              animate={{ 
                rotate: activeStep === 4 ? [0, -5, 5, -5, 5, 0] : 0 
              }}
              transition={{ duration: 0.5, repeat: activeStep === 4 ? Infinity : 0 }}
            >
              {/* Fake Boba Pearls at bottom */}
              <div className="absolute bottom-0 w-full h-1/4 flex flex-wrap justify-center gap-1 p-2 opacity-80 z-20">
                {Array.from({length: 30}).map((_, i) => (
                  <motion.div 
                    key={i} 
                    className="w-4 h-4 bg-rich-black rounded-full shadow-inner"
                    animate={{
                      y: activeStep >= 3 ? [0, -20, 0] : 0,
                    }}
                    transition={{
                      duration: 2 + Math.random(),
                      repeat: Infinity,
                      delay: Math.random()
                    }}
                  />
                ))}
              </div>

              {/* Liquid Level */}
              <motion.div 
                className="w-full bg-gradient-to-b from-[#E6C28F] to-[#C99C6A] z-10 origin-bottom"
                initial={{ height: "90%" }}
                animate={{ 
                  height: activeStep >= 2 ? "70%" : "90%",
                  scaleY: activeStep === 4 ? [1, 1.05, 1] : 1
                }}
                transition={{ duration: 1 }}
              >
                {/* Straw piercing animation */}
                <AnimatePresence>
                  {activeStep >= 1 && (
                    <motion.div 
                      initial={{ y: -300 }}
                      animate={{ y: 0 }}
                      className="absolute top-0 right-12 w-3 h-[120%] bg-white/60 shadow-lg transform rotate-[-5deg] z-30 rounded-full"
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          </div>

          {/* Steps Control (Right) */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`text-left p-6 rounded-2xl transition-all duration-300 ${
                  activeStep === step.id 
                    ? 'bg-soft-ivory shadow-lg border border-rich-black/10 scale-[1.02]' 
                    : 'hover:bg-soft-ivory/50 opacity-70 hover:opacity-100'
                }`}
              >
                <div className="flex items-center gap-4 mb-2">
                  <span className={`text-2xl ${activeStep === step.id ? 'opacity-100' : 'opacity-50'}`}>
                    {step.icon}
                  </span>
                  <h4 className="text-xl font-heading text-rich-black">
                    <span className="text-luxury-gold mr-3">{step.id}.</span>
                    {step.title}
                  </h4>
                </div>
                <AnimatePresence>
                  {activeStep === step.id && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-warm-dark-gray ml-12"
                    >
                      {step.desc}
                    </motion.p>
                  )}
                </AnimatePresence>
              </button>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
}
