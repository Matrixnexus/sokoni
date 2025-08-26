import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WelcomeScreen from '../components/WelcomeScreen';
import HotDealsSection from '../components/HotDealsSection';
import BigEventAds from '../components/BigEventAds';
import AdvertiseCallout from '../components/AdvertiseCallout';
import CategoryGrid from '../components/CategoryGrid';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home: React.FC = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  const featuredProducts = products.filter(product => product.isFeatured && !product.isHotDeal).slice(0, 6);

  useEffect(() => {
    // Automatically hide welcome screen after 4 seconds as fallback
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showWelcome && (
          <WelcomeScreen onComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showWelcome ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gray-900"
      >
        {/* Hot Deals Section - First thing users see */}
        <HotDealsSection />

        {/* Big Event Ads */}
        <BigEventAds />

        {/* Advertise Callout */}
        <AdvertiseCallout />

        {/* Category Grid */}
        <CategoryGrid />

        {/* Featured Products */}
        <section className="py-16 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 mb-4">
                Featured Products
              </h2>
              <p className="text-gray-300 text-lg">
                Hand-picked quality products from trusted sellers
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default Home;