import React from 'react'
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Sparkles,
  Zap
} from 'lucide-react';

function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        damping: 12
      }
    }
  };

  const contactItems = [
    { icon: MapPin, title: "Address", content: "Majeedhee Magu, Male' City, Maldives", color: "blue" },
    { icon: Phone, title: "Phone", content: "+960 332 0000", color: "purple" },
    { icon: Mail, title: "Email", content: "info@mycollege.edu.mv", color: "pink" },
    { icon: Clock, title: "Office Hours", content: "Sunday - Thursday: 8:00 AM - 4:00 PM", color: "blue" }
  ];

  return (
    <div>
      <section id="contact" className="py-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute bottom-0 left-0 h-full w-1/2 opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <radialGradient id="contactGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="var(--neon-purple)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="var(--neon-purple)" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="50" cy="50" r="40" fill="url(#contactGradient)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold font-future text-white mb-4"
            >
              Contact <span className="text-gradient">Us</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-6 rounded-full"
            />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {contactItems.map((item, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  custom={index}
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-4 glass-card p-4 rounded-xl hover-glow"
                >
                  <div className={`flex-shrink-0 w-12 h-12 bg-neon-${item.color}/20 rounded-full flex items-center justify-center border border-neon-${item.color}/50`}>
                    <item.icon className={`h-6 w-6 text-neon-${item.color}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-white font-future">{item.title}</h3>
                    <p className="text-gray-300 font-future">{item.content}</p>
                  </div>
                </motion.div>
              ))}
              
              {/* Floating elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-10 left-10 hidden md:block"
              >
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="bg-neon-blue/20 backdrop-blur-sm p-3 rounded-full border border-neon-blue/30"
                >
                  <Sparkles className="h-6 w-6 text-neon-blue" />
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-xl neon-border"
            >
              <motion.h3 
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-semibold mb-6 font-future text-white flex items-center"
              >
                <Zap className="h-6 w-6 text-neon-purple mr-2" />
                Send us a Message
              </motion.h3>
              
              <form className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1 font-future">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/50 text-white font-future"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1 font-future">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/50 text-white font-future"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1 font-future">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/50 text-white font-future"
                  ></textarea>
                </motion.div>
                
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 15px rgba(0, 247, 255, 0.8)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-neon-blue to-neon-purple text-white px-8 py-3 rounded-lg font-future flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send className="h-4 w-4" />
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