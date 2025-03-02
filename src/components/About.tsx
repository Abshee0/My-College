import React from 'react'
import { motion } from 'framer-motion';
import { Brain, Cpu, Globe, Zap } from 'lucide-react';

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({ 
      opacity: 1, 
      scale: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        damping: 8
      }
    })
  };

  return (
    <div>
        <section id="about" className="py-20 relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <svg className="absolute top-0 left-0 w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <radialGradient id="circleGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" stopColor="var(--neon-blue)" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="var(--neon-blue)" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="10" cy="10" r="20" fill="url(#circleGradient)" />
              <circle cx="90" cy="90" r="20" fill="url(#circleGradient)" />
              <circle cx="80" cy="20" r="15" fill="url(#circleGradient)" />
              <circle cx="20" cy="80" r="15" fill="url(#circleGradient)" />
            </svg>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-center mb-4 font-future text-white"
            >
              About <span className="text-gradient">My College</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-12 rounded-full"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <motion.p variants={itemVariants} className="text-lg text-gray-300 font-future">
                  My College, established in 1999, is one of the pioneer institutions in the Maldives offering quality higher education. Our mission is to provide accessible, affordable, and quality education to students from all walks of life.
                </motion.p>
                <motion.p variants={itemVariants} className="text-lg text-gray-300 font-future">
                  We are committed to academic excellence and practical skill development, preparing our students for successful careers in their chosen fields.
                </motion.p>
                
                <motion.div 
                  variants={containerVariants}
                  className="grid grid-cols-2 gap-4"
                >
                  {[
                    { icon: Globe, value: "2000+", label: "Graduates", color: "blue" },
                    { icon: Brain, value: "50+", label: "Programs", color: "purple" },
                    { icon: Cpu, value: "100+", label: "Expert Faculty", color: "pink" },
                    { icon: Zap, value: "20+", label: "Years Experience", color: "blue" }
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      custom={i}
                      variants={statVariants}
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 0 15px var(--neon-blue)"
                      }}
                      className="glass-card p-4 rounded-lg hover-glow"
                    >
                      <div className="flex items-center mb-2">
                        <stat.icon className={`h-5 w-5 text-neon-${stat.color} mr-2`} />
                        <motion.h3 
                          className={`font-semibold text-neon-${stat.color} font-future`}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                        >
                          {stat.value}
                        </motion.h3>
                      </div>
                      <p className="text-gray-300 font-future">{stat.label}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20, rotateY: 30 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  type: "spring",
                  damping: 20,
                  stiffness: 100
                }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-xl blur-md transform rotate-3"></div>
                <div className="relative z-10 overflow-hidden rounded-xl neon-border">
                  <img
                    src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="College Life"
                    className="rounded-xl shadow-lg hologram-effect"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-black/70 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                      className="glass-card p-4 rounded-lg"
                    >
                      <h3 className="text-neon-blue font-future text-lg mb-1">Immersive Learning</h3>
                      <p className="text-white text-sm">Experience education like never before with our cutting-edge immersive technologies</p>
                    </motion.div>
                  </div>
                </div>
                
                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="absolute -top-5 -right-5 bg-neon-purple/30 backdrop-blur-sm p-3 rounded-full border border-neon-purple/50"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Brain className="h-8 w-8 text-neon-purple" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default About