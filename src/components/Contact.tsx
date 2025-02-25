import React from 'react'
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  } from 'lucide-react';

function Contact() {
  return (
    <div>
        <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Contact Us
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-gray-600">Majeedhee Magu, Male' City, Maldives</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-gray-600">+960 332 0000</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">info@mycollege.edu.mv</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Office Hours</h3>
                  <p className="text-gray-600">Sunday - Thursday: 8:00 AM - 4:00 PM</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl"
            >
              <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default Contact

