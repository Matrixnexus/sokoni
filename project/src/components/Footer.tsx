import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, MessageCircle, Phone, Mail } from 'lucide-react';
import { ownerContact } from '../data/products';

const Footer: React.FC = () => {
  const handleContact = (type: 'whatsapp' | 'call' | 'email') => {
    switch (type) {
      case 'whatsapp':
        const message = encodeURIComponent("Hi! I have a question about Sokoni Arena.");
        window.open(`https://wa.me/${ownerContact.whatsapp.replace('+', '')}?text=${message}`, '_blank');
        break;
      case 'call':
        window.open(`tel:${ownerContact.phone}`, '_self');
        break;
      case 'email':
        const subject = encodeURIComponent("Inquiry about Sokoni Arena");
        const body = encodeURIComponent("Hi,\n\nI have a question about Sokoni Arena.\n\nBest regards");
        window.open(`mailto:${ownerContact.email}?subject=${subject}&body=${body}`, '_self');
        break;
    }
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <Zap className="h-8 w-8 text-purple-400" />
                <div className="absolute -inset-1 bg-purple-500/30 blur rounded-full" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Sokoni Arena
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Kenya's most dynamic and attractive marketplace. Buy, sell, and discover amazing deals in a beautiful, futuristic shopping experience.
            </p>
            
            {/* Contact Buttons */}
            <div className="flex space-x-4">
              <button
                onClick={() => handleContact('whatsapp')}
                className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg transition-colors duration-300"
                title="WhatsApp"
              >
                <MessageCircle size={20} />
              </button>
              <button
                onClick={() => handleContact('call')}
                className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-colors duration-300"
                title="Call"
              >
                <Phone size={20} />
              </button>
              <button
                onClick={() => handleContact('email')}
                className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-lg transition-colors duration-300"
                title="Email"
              >
                <Mail size={20} />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-400 hover:text-white transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/advertise" className="text-gray-400 hover:text-white transition-colors">
                  Advertise With Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Phone: {ownerContact.phone}</li>
              <li>WhatsApp: {ownerContact.whatsapp}</li>
              <li>Email: {ownerContact.email}</li>
              <li>M-Pesa Till: {ownerContact.mpesaTill}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
              <p>&copy; 2024 Sokoni Arena. All rights reserved.</p>
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <p>Made by <span className="text-purple-400 font-semibold">The Matrix Nexus CoreTech</span></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;