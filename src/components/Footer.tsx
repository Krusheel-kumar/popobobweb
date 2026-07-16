import React from 'react';
import { NavLink } from 'react-router-dom';
import logoImg from '../assets/Horizontal Wordmark with Emblem.png';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-rich-black text-warm-cream py-16 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-2">
            <div className="mb-8">
              <img 
                src={logoImg} 
                alt="POP O'BOB Logo" 
                className="h-12 md:h-16 w-auto object-contain opacity-100"
              />
            </div>
            <p className="text-white/50 max-w-sm mb-8 leading-relaxed text-sm md:text-base">
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

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs tracking-widest uppercase text-white/30 gap-8 md:gap-0">
          <div className="flex items-center gap-4">
            <img 
              src={logoImg} 
              alt="POP O'BOB Logo" 
              className="h-6 w-auto object-contain opacity-30"
            />
            <p>&copy; {new Date().getFullYear()} POP O'BOB.</p>
          </div>
          
          <div className="flex gap-6 items-center flex-wrap justify-center">
            <a href="https://instagram.com/popobob" target="_blank" rel="noopener noreferrer" className="hover:text-luxury-gold transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.203 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              Instagram
            </a>
            <a href="https://facebook.com/popobob" target="_blank" rel="noopener noreferrer" className="hover:text-luxury-gold transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.597 1.323-1.325V1.325C24 .597 23.403 0 22.675 0z"/></svg>
              Facebook
            </a>
            <a href="https://wa.me/message/popobob" target="_blank" rel="noopener noreferrer" className="hover:text-luxury-gold transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
            <a href="https://youtube.com/popobob" target="_blank" rel="noopener noreferrer" className="hover:text-luxury-gold transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
