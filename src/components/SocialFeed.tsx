import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../assets/brownsugartrending.png';
import img2 from '../assets/matchatrending.png';
import img3 from '../assets/mangotrending.png';
import img4 from '../assets/taro.png';
import img5 from '../discovertheculture.png';
import img6 from '../assets/ferrerorocherboba.png';

const socialPosts = [
  { id: 1, img: img1, likes: '2.4k', type: 'image' },
  { id: 2, img: img2, likes: '1.8k', type: 'image' },
  { id: 3, img: img3, likes: '3.1k', type: 'image' },
  { id: 4, img: img4, likes: '4.5k', type: 'video' },
  { id: 5, img: img5, likes: '1.2k', type: 'image', span: true },
  { id: 6, img: img6, likes: '5.9k', type: 'image' },
];

export const SocialFeed: React.FC = () => {
  return (
    <section className="py-24 bg-warm-cream relative overflow-hidden">
      <div className="max-w-[85rem] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-luxury-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
              Join The Community
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-rich-black mb-4">
              #LifeIsTooShortForOrdinary
            </h2>
            <p className="text-lg text-rich-black/70 font-light">
              Follow us on Instagram for daily inspiration, secret menu drops, and the culture that shapes our craft.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a 
              href="https://instagram.com/popobob" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-rich-black text-white rounded-full hover:bg-luxury-gold hover:text-rich-black transition-colors duration-300 font-medium group"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.203 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              Follow @popobob
            </a>
          </motion.div>
        </div>

        {/* Masonry/Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {socialPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-2xl cursor-pointer ${post.span ? 'md:col-span-2 md:row-span-2' : ''}`}
            >
              <img 
                src={post.img} 
                alt={`Instagram Post ${post.id}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="flex items-center gap-2 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                  <span className="font-bold text-lg">{post.likes}</span>
                </div>
              </div>

              {/* Video Icon if applicable */}
              {post.type === 'video' && (
                <div className="absolute top-4 right-4 text-white drop-shadow-md">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
