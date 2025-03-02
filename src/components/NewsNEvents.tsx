import React from 'react'
import { motion } from 'framer-motion';
import {
    ChevronRight,
    Calendar,
    Sparkles,
    Zap
  } from 'lucide-react';

function NewsNEvents() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        damping: 12
      }
    })
  };

  const newsItems = [
    {
      title: "New Partnership with International Universities",
      date: "March 15, 2035",
      category: "News",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      color: "blue"
    },
    {
      title: "Annual Career Fair 2035",
      date: "April 5, 2035",
      category: "Event",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      color: "purple"
    },
    {
      title: "New Scholarship Programs Announced",
      date: "March 28, 2035",
      category: "News",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      color: "pink"
    }
  ];

  return (
    <div>
      <section id="news" className="py-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-cyber-grid bg-cyber-grid opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold font-future text-white mb-4"
            >
              News & <span className="text-gradient">Events</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-6 rounded-full"
            />
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {newsItems.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="glass-card rounded-xl overflow-hidden hover-glow"
              >
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-cyber-black/50 to-transparent"></div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ x: -100 }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.2 }}
                    className={`absolute top-4 left-4 bg-neon-${item.color}/30 backdrop-blur-sm px-3 py-1 rounded-full border border-neon-${item.color}/50 flex items-center space-x-1`}
                  >
                    {item.category === "Event" ? 
                      <Calendar className={`h-3 w-3 text-neon-${item.color}`} /> : 
                      <Zap className={`h-3 w-3 text-neon-${item.color}`} />
                    }
                    <span className="text-white text-xs font-future">{item.category}</span>
                  </motion.div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <motion.div 
                      animate={{ 
                        scale: [1, 1.2, 1],
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                      className={`w-2 h-2 rounded-full bg-neon-${item.color} mr-2`}
                    />
                    <p className="text-gray-400 text-sm font-future">{item.date}</p>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-white font-future">{item.title}</h3>
                  
                  <motion.button
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`text-neon-${item.color} font-semibold flex items-center space-x-2 font-future group`}
                  >
                    <span className="group-hover:underline">Read More</span>
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
                
                {/* Animated border effect */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{ 
                    boxShadow: [`inset 0 0 0px rgba(var(--neon-${item.color}), 0)`, `inset 0 0 10px rgba(var(--neon-${item.color}), 0.3)`, `inset 0 0 0px rgba(var(--neon-${item.color}), 0)`]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
          
          {/* Floating elements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="absolute -bottom-10 left-10 hidden md:block"
          >
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="bg-neon-purple/20 backdrop-blur-sm p-4 rounded-lg border border-neon-purple/30"
            >
              <div className="flex items-center space-x-2">
                <Sparkles className="h-5 w-5 text-neon-purple" />
                <span className="text-white font-future">Stay updated</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default NewsNEvents