import { motion } from 'motion/react';
import { Phone } from 'lucide-react';

export function CTASection() {
  return (
    <section id="estimate" className="py-20 bg-gradient-to-br from-[#1F3C88] to-[#152a5e] text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Ready for Spotless Windows?</h2>
            <p className="text-xl text-blue-100 mb-6">Get your estimate today</p>
            <a href="tel:+18474694068" className="inline-flex items-center gap-2 text-2xl font-semibold hover:text-blue-200 transition-colors">
              <Phone className="w-6 h-6" />
              (847) 469-4068
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            <iframe 
              src="https://whirlywash.jobbersites.com"
              className="w-full h-[800px] border-0"
              title="Request Your Free Estimate"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}