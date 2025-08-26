import React from 'react';
import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from './ProductCard';

const HotDealsSection: React.FC = () => {
  const hotDeals = products.filter(product => product.isHotDeal);

  return (
    <section className="py-12 bg-gradient-to-br from-gray-900 via-red-900/20 to-orange-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center space-x-2 mb-4">
            <Flame className="h-8 w-8 text-red-500 animate-pulse" />
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-500 to-yellow-500">
              🔥 Hot Deals Today! 🔥
            </h2>
            <Flame className="h-8 w-8 text-red-500 animate-pulse" />
          </div>
          <p className="text-gray-300 text-lg">
            Limited time offers with amazing discounts!
          </p>
          
          {/* Glowing border effect */}
          <div className="w-32 h-1 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 mx-auto mt-4 rounded-full animate-pulse" />
        </motion.div>

        {/* Hot Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotDeals.map((product, index) => (
            <div key={product.id} className="relative">
              {/* Glowing background for hot deals */}
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 rounded-xl blur opacity-30 animate-pulse" />
              <div className="relative">
                <ProductCard product={product} index={index} />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-300 mb-6 text-lg">
            Want your products featured in Hot Deals? 
          </p>
          <motion.a
            href="/advertise"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300"
          >
            Get Hot Deal Placement!
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HotDealsSection;