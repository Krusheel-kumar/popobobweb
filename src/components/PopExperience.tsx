import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  { id: 1, title: 'Choose Tea Base', desc: 'Premium Black, Jasmine Green, or Oolong.' },
  { id: 2, title: 'Select Flavor', desc: 'From classic milk to fresh fruit infusions.' },
  { id: 3, title: 'Adjust Sugar', desc: 'Perfectly customized to your taste (0% - 100%).' },
  { id: 4, title: 'Select Ice Level', desc: 'Hot, Less Ice, or Standard.' },
  { id: 5, title: 'Add Toppings', desc: 'Boba, Pudding, Jelly, or Cheese Foam.' },
  { id: 6, title: 'Freshly Crafted', desc: 'Shaken, sealed, and handed to you with a smile.' },
];

export const PopExperience: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="experience" className="py-32 bg-soft-beige">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-rich-black mb-6">The POP Experience</h2>
          <p className="text-lg text-dark-gray max-w-2xl mx-auto">Your drink, your rules. Discover how every cup is customized to perfection.</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Interactive Steps */}
          <div className="w-full lg:w-1/2 space-y-6">
            {steps.map((step, idx) => (
              <div 
                key={step.id}
                onMouseEnter={() => setActiveStep(idx)}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-500 ${
                  activeStep === idx 
                    ? 'bg-white shadow-xl shadow-luxury-gold/10 border border-luxury-gold/30 scale-105' 
                    : 'bg-transparent hover:bg-white/50 border border-transparent'
                }`}
              >
                <div className="flex items-center gap-6">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-heading font-bold text-xl transition-colors duration-500 ${
                    activeStep === idx ? 'bg-luxury-gold text-rich-black' : 'bg-warm-cream text-dark-gray'
                  }`}>
                    {step.id}
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold font-heading mb-1 transition-colors duration-500 ${
                      activeStep === idx ? 'text-rich-black' : 'text-dark-gray'
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`text-sm transition-colors duration-500 ${
                      activeStep === idx ? 'text-dark-gray' : 'text-dark-gray/60'
                    }`}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Visual Display */}
          <div className="w-full lg:w-1/2 h-[500px] bg-warm-cream rounded-[2.5rem] relative overflow-hidden flex items-center justify-center shadow-inner border border-white/50">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-center p-8"
              >
                <h4 className="text-4xl font-heading font-bold text-rich-black mb-4">{steps[activeStep].title}</h4>
                <div className="w-24 h-1 bg-luxury-gold mx-auto mb-6 rounded-full" />
                <p className="text-xl text-dark-gray">{steps[activeStep].desc}</p>
              </motion.div>
            </AnimatePresence>

            {/* Decorative circles */}
            <div className="absolute top-10 left-10 w-32 h-32 rounded-full border border-luxury-gold/20 animate-[spin_10s_linear_infinite]" />
            <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full border border-luxury-gold/20 animate-[spin_15s_linear_infinite_reverse]" />
          </div>

        </div>
      </div>
    </section>
  );
};
