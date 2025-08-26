import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, Phone, CreditCard, CheckCircle, Zap } from 'lucide-react';
import { ownerContact } from '../data/products';

const Advertise: React.FC = () => {
  const handleContact = (type: 'whatsapp' | 'email' | 'call') => {
    const productTemplate = `Product Advertisement Submission for Sokoni Arena

Please provide the following details:

📷 PRODUCT IMAGE:
[Attach high-quality product image]

📝 PRODUCT DESCRIPTION:
Product Name: 
Category: 
Price: KSh 
Original Price (if discounted): KSh 

📋 PRODUCT DETAILS:
Condition: [New/Used/Refurbished]
Location: 
Description: 

👤 SELLER DETAILS:
Name/Business Name: 
Phone Number: 
WhatsApp Number: 
Email Address: 

📋 ADDITIONAL NOTES:
[Any special features, warranty, delivery info, etc.]

🔥 HOT DEALS PLACEMENT:
[ ] I want premium Hot Deals placement (Additional fee applies)

Thank you for choosing Sokoni Arena!`;

    switch (type) {
      case 'whatsapp':
        const message = encodeURIComponent(productTemplate);
        window.open(`https://wa.me/${ownerContact.whatsapp.replace('+', '')}?text=${message}`, '_blank');
        break;
      case 'email':
        const subject = encodeURIComponent('Product Advertisement Submission - Sokoni Arena');
        const body = encodeURIComponent(productTemplate);
        window.open(`mailto:${ownerContact.email}?subject=${subject}&body=${body}`, '_self');
        break;
      case 'call':
        window.open(`tel:${ownerContact.phone}`, '_self');
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="relative inline-block mb-6">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              Advertise With Us
            </h1>
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 opacity-20 blur-lg rounded-lg animate-pulse" />
          </div>
          <p className="text-xl text-gray-300 mb-4">
            Get your products featured on Kenya's most dynamic marketplace!
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 mx-auto rounded-full animate-pulse" />
        </motion.div>

        {/* Requirements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-800 rounded-xl p-8 mb-8 border border-purple-500/30"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <CheckCircle className="h-6 w-6 text-green-400 mr-3" />
            Required Information
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-purple-400 mb-4">Product Details</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>High-quality product image (JPG, PNG)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Product name and detailed description</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Product condition (New, Used, Refurbished)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Product price</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Product location</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-pink-400 mb-4">Seller Information</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Seller name or business name</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>WhatsApp number</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Phone number</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Email address</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>Any additional notes</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Hot Deals Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-br from-red-900/30 via-orange-900/30 to-yellow-900/30 rounded-xl p-8 mb-8 border border-red-500/30 relative overflow-hidden"
        >
          <div className="absolute top-4 right-4">
            <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full font-bold text-sm animate-pulse">
              🔥 Premium Placement
            </div>
          </div>
          
          <div className="relative">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Zap className="h-6 w-6 text-yellow-400 mr-3 animate-pulse" />
              Hot Deals Premium Placement
            </h2>
            
            <p className="text-gray-300 mb-6 text-lg">
              Want your product featured in our exclusive Hot Deals section with glowing borders and priority placement?
            </p>
            
            <div className="bg-gray-800/50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-red-400 mb-4 flex items-center">
                <CreditCard className="h-5 w-5 mr-2" />
                Payment for Hot Deals Placement
              </h3>
              
              <div className="space-y-3 text-gray-300">
                <p><strong>M-Pesa Payment Options:</strong></p>
                <div className="bg-gray-900/50 rounded p-4">
                  <p>🏪 <strong>Till Number:</strong> {ownerContact.mpesaTill}</p>
                  <p>📱 <strong>Phone Number:</strong> {ownerContact.mpesaPhone}</p>
                </div>
                <p className="text-yellow-400 font-medium">
                  📞 Contact us after payment for verification and immediate placement!
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="text-2xl mb-2">🚀</div>
                <p className="text-gray-300">Priority Visibility</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="text-2xl mb-2">✨</div>
                <p className="text-gray-300">Glowing Effects</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="text-2xl mb-2">📈</div>
                <p className="text-gray-300">More Sales</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-8">Choose Your Preferred Contact Method</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* WhatsApp */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleContact('whatsapp')}
              className="bg-gradient-to-br from-green-600 to-green-700 text-white p-6 rounded-xl shadow-lg hover:shadow-green-500/25 transition-all duration-300 group"
            >
              <MessageCircle size={48} className="mx-auto mb-4 group-hover:animate-pulse" />
              <h3 className="text-xl font-bold mb-2">Send via WhatsApp</h3>
              <p className="text-green-100 mb-4">
                Quick and easy submission with pre-filled template
              </p>
              <div className="bg-green-500/20 rounded-lg p-3">
                <p className="text-sm">{ownerContact.whatsapp}</p>
              </div>
            </motion.button>

            {/* Email */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleContact('email')}
              className="bg-gradient-to-br from-purple-600 to-purple-700 text-white p-6 rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 group"
            >
              <Mail size={48} className="mx-auto mb-4 group-hover:animate-pulse" />
              <h3 className="text-xl font-bold mb-2">Send via Email</h3>
              <p className="text-purple-100 mb-4">
                Detailed submission with attachments support
              </p>
              <div className="bg-purple-500/20 rounded-lg p-3">
                <p className="text-sm break-all">{ownerContact.email}</p>
              </div>
            </motion.button>

            {/* Call */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleContact('call')}
              className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6 rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group"
            >
              <Phone size={48} className="mx-auto mb-4 group-hover:animate-pulse" />
              <h3 className="text-xl font-bold mb-2">Call Direct</h3>
              <p className="text-blue-100 mb-4">
                Speak directly with our team for instant help
              </p>
              <div className="bg-blue-500/20 rounded-lg p-3">
                <p className="text-sm">{ownerContact.phone}</p>
              </div>
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 p-6 bg-gray-800 rounded-xl border border-blue-500/30"
          >
            <p className="text-gray-300 text-lg">
              ⚡ <strong>Fast Response Guarantee:</strong> We respond to all submissions within 2 hours during business hours!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Advertise;