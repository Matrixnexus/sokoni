import React from 'react';
import { motion } from 'framer-motion';
import { Megaphone, Zap } from 'lucide-react';

const AdvertiseCallout: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-900/30 via-purple-900/30 to-pink-900/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-500" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Main Glowing Section */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl blur opacity-30 animate-pulse" />
            
            <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-purple-500/30">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <Megaphone className="h-16 w-16 text-purple-400 animate-pulse" />
                  <div className="absolute -inset-2 bg-purple-500/30 rounded-full blur animate-pulse" />
                </div>
              </div>

              {/* Main Text */}
              <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 mb-6">
                Ready to advertise your products on Sokoni Arena?
              </h2>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl md:text-2xl text-gray-300 mb-8 font-medium"
              >
                Now simplified!
              </motion.p>

              {/* Benefits */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl mb-2">🚀</div>
                  <p className="text-gray-300">Boost Your Sales</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">👥</div>
                  <p className="text-gray-300">Reach More Customers</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">⚡</div>
                  <p className="text-gray-300">Lightning Fast Setup</p>
                </div>
              </div>

              {/* CTA Button */}
              <motion.a
                href="/advertise"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white font-bold py-4 px-8 rounded-full text-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 group"
              >
                <Zap className="mr-3 h-6 w-6 group-hover:animate-pulse" />
                Start Advertising Now!
                <span className="ml-3 text-2xl">✨</span>
              </motion.a>

              {/* Additional Info */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-6 text-gray-400 text-sm"
              >
                Join thousands of successful sellers on Kenya's most dynamic marketplace
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvertiseCallout;