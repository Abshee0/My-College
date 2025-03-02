import React from 'react'
import { useNavigate } from 'react-router-dom';
import {programs} from '../data/programs'
import { motion } from 'framer-motion';
import {
    ChevronRight,
    Award,
    BookOpen,
    Building2,
    Sparkles,
  } from 'lucide-react';

function Programs() {
  const navigate = useNavigate();

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

  return (
    <div>
        <section id="programs" className="py-20 relative overflow-hidden">
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
                Our <span className="text-gradient">Programs</span>
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-6 rounded-full"
              />
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-gray-300 max-w-2xl mx-auto font-future"
              >
                Discover our cutting-edge programs designed for the future workforce
              </motion.p>
            </motion.div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {programs.map((program, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  className="group relative overflow-hidden rounded-xl glass-card hover-glow"
                >
                  <div className="relative h-48">
                    <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-cyber-black/50 to-transparent z-10"></div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-full h-full"
                    >
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div className="absolute top-4 right-4 z-20">
                      <motion.div
                        initial={{ opacity: 0.6 }}
                        whileHover={{ opacity: 1 }}
                        className="bg-neon-purple/30 backdrop-blur-sm p-2 rounded-full border border-neon-purple/50"
                      >
                        <program.icon className="h-5 w-5 text-neon-purple" />
                      </motion.div>
                    </div>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-neon-blue to-neon-purple"
                    />
                  </div>
                  <div className="p-6 relative z-20">
                    <h3 className="text-xl font-semibold mb-2 font-future text-white group-hover:text-neon-blue transition-colors">{program.title}</h3>
                    <p className="text-gray-300 mb-4 font-future">{program.description}</p>
                    <motion.button
                      onClick={() => navigate(`/program/${program.id}`)}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-neon-blue font-semibold flex items-center space-x-2 font-future group"
                    >
                      <span className="group-hover:underline">Learn More</span>
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                  
                  {/* Animated border effect */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    animate={{ 
                      boxShadow: ["inset 0 0 0px rgba(0, 247, 255, 0)", "inset 0 0 10px rgba(0, 247, 255, 0.3)", "inset 0 0 0px rgba(0, 247, 255, 0)"]
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
              className="absolute -bottom-10 right-10 hidden md:block"
            >
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="bg-neon-blue/20 backdrop-blur-sm p-4 rounded-lg border border-neon-blue/30"
              >
                <div className="flex items-center space-x-2">
                  <Sparkles className="h-5 w-5 text-neon-blue" />
                  <span className="text-white font-future">Future-ready skills</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
    </div>
  )
}

export default Programs