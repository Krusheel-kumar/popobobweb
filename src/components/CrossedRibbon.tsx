import React from 'react';
import { motion } from 'framer-motion';

const REPEAT_COUNT = 20;

const RibbonItem = () => (
  <div className="flex flex-col items-center justify-center leading-[0.9] italic font-sans mx-8 md:mx-12 text-rich-black">
    <div className="flex items-baseline gap-1.5">
      <span className="text-[18px] md:text-[24px] font-medium tracking-tight">the</span>
      <span className="text-[18px] md:text-[24px] font-black tracking-tight">boba</span>
    </div>
    <span className="text-[18px] md:text-[24px] font-medium tracking-tight mt-0.5">standard.</span>
  </div>
);

export const CrossedRibbon: React.FC = () => {
  return (
    <>
      <style>{`
        @keyframes ribbon-scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ribbon-left {
          animation: ribbon-scroll-left 40s linear infinite;
        }
        /* Hide scrollbar just in case */
        .ribbon-container {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .ribbon-container::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* 
        Clean Minimalist Marquee
      */}
      <motion.div 
        className="relative w-full z-40 flex items-center justify-center pointer-events-none my-6 lg:my-10"
        animate={{ y: [-2, 2, -2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div 
          className="relative w-full h-[64px] md:h-[96px] flex items-center overflow-hidden pointer-events-auto group ribbon-container py-2"
        >
          {/* Scrolling Text (Moves Left) */}
          <div className="animate-ribbon-left group-hover:[animation-play-state:paused] flex items-center z-10 w-fit">
            <div className="flex items-center">
              {Array(REPEAT_COUNT).fill(0).map((_, i) => (
                <RibbonItem key={i} />
              ))}
            </div>
            <div className="flex items-center" aria-hidden="true">
              {Array(REPEAT_COUNT).fill(0).map((_, i) => (
                <RibbonItem key={`dup-${i}`} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};
