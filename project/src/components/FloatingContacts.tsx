import React from 'react';
import { MessageCircle, Phone, Mail } from 'lucide-react';
import { ownerContact } from '../data/products';

const FloatingContacts: React.FC = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in Sokoni Arena marketplace. Can you help me?");
    window.open(`https://wa.me/${ownerContact.whatsapp.replace('+', '')}?text=${message}`, '_blank');
  };

  const handleCall = () => {
    window.open(`tel:${ownerContact.phone}`, '_self');
  };

  const handleEmail = () => {
    const subject = encodeURIComponent("Inquiry about Sokoni Arena");
    const body = encodeURIComponent("Hi,\n\nI'm interested in learning more about Sokoni Arena marketplace.\n\nBest regards");
    window.open(`mailto:${ownerContact.email}?subject=${subject}&body=${body}`, '_self');
  };

  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col space-y-3">
      <button
        onClick={handleWhatsApp}
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 group relative"
      >
        <MessageCircle size={24} />
        <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          WhatsApp
        </span>
      </button>
      
      <button
        onClick={handleCall}
        className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 group relative"
      >
        <Phone size={24} />
        <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Call
        </span>
      </button>
      
      <button
        onClick={handleEmail}
        className="bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 group relative"
      >
        <Mail size={24} />
        <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Email
        </span>
      </button>
    </div>
  );
};

export default FloatingContacts;