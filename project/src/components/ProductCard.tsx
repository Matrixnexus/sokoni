import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Mail } from 'lucide-react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const handleContact = (type: 'whatsapp' | 'call' | 'email') => {
    switch (type) {
      case 'whatsapp':
        const message = encodeURIComponent(`Hi! I'm interested in your ${product.name} listed on Sokoni Arena.`);
        window.open(`https://wa.me/${product.seller.whatsapp.replace('+', '')}?text=${message}`, '_blank');
        break;
      case 'call':
        window.open(`tel:${product.seller.phone}`, '_self');
        break;
      case 'email':
        const subject = encodeURIComponent(`Inquiry about ${product.name}`);
        const body = encodeURIComponent(`Hi ${product.seller.name},\n\nI'm interested in your ${product.name} listed on Sokoni Arena.\n\nBest regards`);
        window.open(`mailto:${product.seller.email}?subject=${subject}&body=${body}`, '_self');
        break;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group ${
        product.isHotDeal ? 'ring-2 ring-red-500 ring-opacity-50' : ''
      }`}
    >
      {/* Hot Deal Badge */}
      {product.isHotDeal && (
        <div className="absolute top-2 left-2 z-10">
          <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
            🔥 Hot Deal
          </div>
        </div>
      )}

      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.originalPrice && (
          <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-sm font-bold">
            Save KSh {(product.originalPrice - product.price).toLocaleString()}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
            product.condition === 'new' ? 'bg-green-500/20 text-green-400' :
            product.condition === 'used' ? 'bg-yellow-500/20 text-yellow-400' :
            'bg-blue-500/20 text-blue-400'
          }`}>
            {product.condition.toUpperCase()}
          </span>
          <div className="flex items-center text-gray-400 text-sm">
            <MapPin size={14} className="mr-1" />
            {product.location}
          </div>
        </div>

        <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
          {product.name}
        </h3>

        <p className="text-gray-400 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-2xl font-bold text-green-400">
              KSh {product.price.toLocaleString()}
            </div>
            {product.originalPrice && (
              <div className="text-sm text-gray-500 line-through">
                KSh {product.originalPrice.toLocaleString()}
              </div>
            )}
          </div>
        </div>

        {/* Seller Info */}
        <div className="border-t border-gray-700 pt-3">
          <p className="text-gray-400 text-sm mb-2">Seller: {product.seller.name}</p>
          
          {/* Contact Buttons */}
          <div className="flex space-x-2">
            <button
              onClick={() => handleContact('whatsapp')}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center justify-center"
            >
              <MessageCircle size={16} className="mr-1" />
              WhatsApp
            </button>
            <button
              onClick={() => handleContact('call')}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors duration-300"
            >
              <Phone size={16} />
            </button>
            <button
              onClick={() => handleContact('email')}
              className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors duration-300"
            >
              <Mail size={16} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;