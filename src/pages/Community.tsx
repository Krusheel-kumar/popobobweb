import { motion } from 'framer-motion';

export function Community() {
  return (
    <div className="bg-rich-black pt-32 pb-32 text-warm-cream overflow-hidden">
      <section className="max-w-[90rem] mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-heading text-soft-ivory mb-6">Visit Us</h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            Locations and store details will be added soon. We can't wait to serve you!
          </p>
        </motion.div>
      </section>
    </div>
  );
}
