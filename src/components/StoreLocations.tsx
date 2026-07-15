import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, ArrowRight } from 'lucide-react';

const stores = [
  {
    id: 1,
    name: 'Flagship Studio',
    address: '123 Premium Boulevard, Downtown',
    hours: '10:00 AM - 11:00 PM',
    phone: '+1 (555) 123-4567',
    status: 'Open Now'
  },
  {
    id: 2,
    name: 'Westside Reserve',
    address: '456 Heritage Avenue, Westside',
    hours: '11:00 AM - 10:00 PM',
    phone: '+1 (555) 987-6543',
    status: 'Closing Soon'
  }
];

export const StoreLocations: React.FC = () => {
  return (
    <section id="stores" className="py-32 bg-warm-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-rich-black mb-4">Visit Us</h2>
            <p className="text-lg text-dark-gray max-w-md">Experience the craft in person. Find your nearest POP O'BOB premium store.</p>
          </motion.div>
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden md:flex items-center gap-2 text-luxury-gold font-medium hover:text-rich-black transition-colors duration-300"
          >
            View All Locations <ArrowRight size={20} />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {stores.map((store, idx) => (
            <motion.div
              key={store.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white rounded-3xl p-8 border border-soft-beige shadow-sm hover:shadow-2xl hover:border-luxury-gold/30 transition-all duration-500 group"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold font-heading text-rich-black mb-2">{store.name}</h3>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                    store.status === 'Open Now' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                  }`}>
                    {store.status}
                  </span>
                </div>
                <div className="w-12 h-12 bg-soft-beige rounded-full flex items-center justify-center text-luxury-gold group-hover:bg-luxury-gold group-hover:text-white transition-colors duration-300">
                  <MapPin size={24} />
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 text-dark-gray">
                  <MapPin size={20} className="mt-0.5 text-luxury-gold opacity-70" />
                  <p>{store.address}</p>
                </div>
                <div className="flex items-start gap-3 text-dark-gray">
                  <Clock size={20} className="mt-0.5 text-luxury-gold opacity-70" />
                  <p>{store.hours}</p>
                </div>
                <div className="flex items-start gap-3 text-dark-gray">
                  <Phone size={20} className="mt-0.5 text-luxury-gold opacity-70" />
                  <p>{store.phone}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 bg-rich-black text-warm-cream py-3 rounded-xl font-medium hover:bg-luxury-gold hover:text-rich-black transition-colors duration-300">
                  Order Ahead
                </button>
                <button className="flex-1 bg-soft-beige text-rich-black py-3 rounded-xl font-medium hover:bg-dark-gray hover:text-white transition-colors duration-300">
                  Get Directions
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
