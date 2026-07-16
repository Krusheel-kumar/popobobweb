import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/Horizontal Wordmark with Emblem.png';

export const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('#home');

  useEffect(() => {
    // Intersection Observer for active hash to prevent layout thrashing
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );
    
    const sections = ['home', 'story', 'timeline', 'culture', 'collections', 'community'];
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { name: 'Home', path: '#home' },
    { name: 'Our Story', path: '#story' },
    { name: 'Journey', path: '#timeline' },
    { name: 'Culture', path: '#culture' },
    { name: 'Collections', path: '#collections' },
    { name: 'Community', path: '#community' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 left-0 right-0 z-50 transition-all duration-300 py-6 bg-transparent"
      >
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#home" className="flex items-center">
            <img 
              src={logoImg} 
              alt="POP O'BOB Logo" 
              className="h-16 md:h-24 w-auto object-contain hover:scale-[1.02] transition-transform duration-500"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = activeHash === link.path;
              return (
                <a
                  key={link.name}
                  href={link.path}
                  className={`text-sm font-medium transition-colors duration-300 relative group ${
                    isActive ? 'text-luxury-gold' : 'text-rich-black hover:text-luxury-gold'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-luxury-gold transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </a>
              );
            })}
            <a 
              href="https://order.popobob.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-rich-black text-warm-cream px-6 py-2.5 rounded-full text-sm font-medium hover:bg-luxury-gold hover:text-rich-black transition-all duration-300 transform hover:scale-105 inline-block text-center"
            >
              Order Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-rich-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-warm-cream/95 backdrop-blur-xl pt-24 px-6 flex flex-col items-center"
          >
            <div className="flex flex-col space-y-6 items-center w-full">
              {navLinks.map((link) => {
                const isActive = activeHash === link.path;
                return (
                  <a
                    key={link.name}
                    href={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-2xl font-heading ${
                      isActive ? 'text-luxury-gold' : 'text-rich-black'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <a 
                href="https://order.popobob.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full max-w-xs bg-luxury-gold text-rich-black py-4 rounded-full text-lg font-medium shadow-xl text-center inline-block"
              >
                Order Now
              </a>
              
              {/* Mobile Social Links */}
              <div className="flex gap-6 mt-12 pt-8 border-t border-rich-black/10 w-full max-w-xs justify-center">
                <a href="https://instagram.com/popobob" target="_blank" rel="noopener noreferrer" className="text-rich-black hover:text-luxury-gold transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.203 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="https://tiktok.com/@popobob" target="_blank" rel="noopener noreferrer" className="text-rich-black hover:text-luxury-gold transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.28 6.28 0 005.4 15.63a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.44-.03z"/></svg>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

