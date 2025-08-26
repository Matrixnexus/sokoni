import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, MessageCircle, Phone, Mail } from 'lucide-react';
import { bigEventAds } from '../data/products';

const BigEventAds: React.FC = () => {
  const handleContact = (contact: any, type: 'whatsapp' | 'call' | 'email') => {
    switch (type) {
      case 'whatsapp':
        const message = encodeURIComponent("Hi! I'm interested in your event advertised on Sokoni Arena.");
        window.open(`https://wa.me/${contact.whatsapp.replace('+', '')}?text=${message}`, '_blank');
        break;
      case 'call':
        window.open(`tel:${contact.phone}`, '_self');
        break;
      case 'email':
        const subject = encodeURIComponent("Event Inquiry from Sokoni Arena");
        const body = encodeURIComponent("Hi,\n\nI'm interested in your event advertised on Sokoni Arena.\n\nBest regards");
        window.open(`mailto:${contact.email}?subject=${subject}&body=${body}`, '_self');
        break;
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-indigo-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 mb-4">
            🚀 Special Events & Services
          </h2>
          <p className="text-gray-300 text-lg">
            Don't miss these amazing events and exclusive services!
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto mt-4 rounded-full animate-pulse" />
        </motion.div>

        {/* Events Grid */}
        <div className="space-y-8">
          {bigEventAds.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Glowing background */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-xl blur opacity-30 animate-pulse" />
              
              <div className="relative bg-gray-800 rounded-xl overflow-hidden shadow-2xl">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Event Image */}
                  <div className="relative">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                    {/* Special Event Badge */}
                    <div className="absolute top-4 left-4">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full font-bold text-sm animate-pulse">
                        🚀 Special Event!
                      </div>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {event.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                      {event.description}
                    </p>

                    {/* Event Info */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-gray-300">
                        <Calendar className="h-5 w-5 text-purple-400 mr-3" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <MapPin className="h-5 w-5 text-purple-400 mr-3" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    {/* Contact Section */}
                    <div className="border-t border-gray-700 pt-6">
                      <p className="text-gray-400 mb-4">Contact: {event.contact.name}</p>
                      
                      <div className="flex space-x-3">
                        <button
                          onClick={() => handleContact(event.contact, 'whatsapp')}
                          className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center group"
                        >
                          <MessageCircle size={18} className="mr-2 group-hover:animate-pulse" />
                          WhatsApp
                        </button>
                        <button
                          onClick={() => handleContact(event.contact, 'call')}
                          className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 group"
                        >
                          <Phone size={18} className="group-hover:animate-pulse" />
                        </button>
                        <button
                          onClick={() => handleContact(event.contact, 'email')}
                          className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 group"
                        >
                          <Mail size={18} className="group-hover:animate-pulse" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BigEventAds;