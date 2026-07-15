import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import logoImg from '../assets/Horizontal Wordmark with Emblem.png';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-rich-black text-warm-cream pt-32 pb-12 overflow-hidden relative">
      <div className="max-w-4xl mx-auto px-6 text-center mb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-sm font-medium tracking-[0.3em] uppercase text-luxury-gold mb-8">
            Before You Go...
          </h2>
          <p className="text-3xl md:text-5xl font-heading text-soft-ivory leading-relaxed mb-16 text-balance">
            Whether today becomes your first cup<br className="hidden md:block"/>
            or your hundredth,<br className="hidden md:block"/>
            thank you for spending a little time<br className="hidden md:block"/>
            inside our world.
          </p>
          <p className="text-xl text-warm-dark-gray italic mb-16">
            We'll save you a seat.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="https://order.popobob.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-luxury-gold text-rich-black rounded-full font-medium hover:bg-soft-ivory transition-colors duration-300"
            >
              Order Now
            </a>
            <NavLink to="/community" className="px-10 py-4 border border-warm-cream/30 rounded-full font-medium hover:border-luxury-gold transition-colors duration-300">
              Visit Store
            </NavLink>
            <NavLink to="/community" className="px-10 py-4 text-warm-cream/70 hover:text-luxury-gold transition-colors duration-300 underline underline-offset-8">
              Join POP Club
            </NavLink>
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-white/10 pt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-2">
            <div className="mb-6">
              <img 
                src={logoImg} 
                alt="POP O'BOB Logo" 
                className="h-12 w-auto object-contain brightness-0 invert opacity-90"
              />
            </div>
            <p className="text-white/50 max-w-sm mb-8 leading-relaxed text-sm">
              Crafting premium bubble tea experiences since 2017. 
              The digital flagship of POP O'BOB.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase mb-6 text-white">Explore</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><NavLink to="/story" className="hover:text-luxury-gold transition-colors">Our Story</NavLink></li>
              <li><NavLink to="/culture" className="hover:text-luxury-gold transition-colors">Bubble Tea Culture</NavLink></li>
              <li><NavLink to="/collections" className="hover:text-luxury-gold transition-colors">Collections</NavLink></li>
              <li><NavLink to="/community" className="hover:text-luxury-gold transition-colors">Community</NavLink></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase mb-6 text-white">Join The Club</h4>
            <p className="text-white/60 text-sm mb-4">Subscribe for secret menu drops and exclusive offers.</p>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white/5 border border-white/10 rounded-full px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-luxury-gold transition-colors"
              />
              <button className="w-full bg-white text-rich-black font-medium rounded-full px-4 py-3 text-sm hover:bg-luxury-gold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs tracking-widest uppercase text-white/30">
          <p>&copy; {new Date().getFullYear()} POP O'BOB. All rights reserved.</p>
          <div className="flex gap-6 mt-6 md:mt-0 items-center">
            <a href="https://instagram.com/popobob" target="_blank" rel="noopener noreferrer" className="hover:text-luxury-gold transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.203 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              Instagram
            </a>
            <a href="https://tiktok.com/@popobob" target="_blank" rel="noopener noreferrer" className="hover:text-luxury-gold transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.28 6.28 0 005.4 15.63a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.44-.03z"/></svg>
              TikTok
            </a>
            <a href="https://twitter.com/popobob" target="_blank" rel="noopener noreferrer" className="hover:text-luxury-gold transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
