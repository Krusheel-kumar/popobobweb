import React from 'react';
import { motion } from 'framer-motion';

// Mocking some instagram style images using the assets we have
import img1 from '../assets/hongkong.png';
import img2 from '../assets/desicoffeeboba.png';
import img3 from '../assets/ferrerorocherboba.png';

const posts = [
  { id: 1, image: img1, user: '@bobalover', likes: '1.2k' },
  { id: 2, image: img2, user: '@sweettooth_daily', likes: '890' },
  { id: 3, image: img3, user: '@caffeine_addict', likes: '2.4k' },
];

export const Community: React.FC = () => {
  return (
    <section id="community" className="py-32 bg-soft-beige">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-heading font-bold text-rich-black mb-6"
          >
            The POP Community
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-dark-gray max-w-2xl mx-auto"
          >
            Join thousands of others sharing their perfect moments. Tag #PopOBob to be featured in our gallery.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group relative rounded-2xl overflow-hidden aspect-square bg-warm-cream shadow-sm hover:shadow-xl transition-shadow duration-500 cursor-pointer"
            >
              <img 
                src={post.image} 
                alt="Community Post" 
                className="w-full h-full object-cover p-8 group-hover:scale-110 transition-transform duration-700"
              />
              
              <div className="absolute inset-0 bg-rich-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-white font-medium mb-1">{post.user}</div>
                  <div className="text-luxury-gold text-sm font-bold flex items-center gap-1">
                    <span>♥</span> {post.likes}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <button className="bg-transparent border border-rich-black text-rich-black px-8 py-3 rounded-full hover:bg-rich-black hover:text-warm-cream transition-colors duration-300">
            Follow our Instagram
          </button>
        </motion.div>
      </div>
    </section>
  );
};
