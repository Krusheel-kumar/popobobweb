import React from 'react';
import { motion } from 'framer-motion';

interface AchievementCardProps {
  label: string;
  statistic: string;
}

export const AchievementCard: React.FC<AchievementCardProps> = ({ label, statistic }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="glass-dark p-8 rounded-2xl border-l-4 border-l-luxury-gold inline-block"
    >
      <div className="text-4xl md:text-5xl font-heading text-luxury-gold mb-2 tracking-tight">
        {statistic}
      </div>
      <div className="text-sm uppercase tracking-widest text-warm-cream/60 font-medium">
        {label}
      </div>
    </motion.div>
  );
};
