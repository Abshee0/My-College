import React from 'react'
import { motion } from 'framer-motion';
import {
    ChevronRight,
  } from 'lucide-react';

function NewsNEvents() {
  return (
    <div>
      <section id="news" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            News & Events
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "New Partnership with International Universities",
                date: "March 15, 2024",
                category: "News",
                image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Annual Career Fair 2024",
                date: "April 5, 2024",
                category: "Event",
                image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "New Scholarship Programs Announced",
                date: "March 28, 2024",
                category: "News",
                image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {item.category}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-500 text-sm mb-2">{item.date}</p>
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-blue-600 font-semibold flex items-center space-x-2"
                  >
                    <span>Read More</span>
                    <ChevronRight className="h-4 w-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default NewsNEvents
