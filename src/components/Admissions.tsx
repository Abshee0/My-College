import React from 'react'
import ApplyNowBtn from './ApplyNowBtn'
import { motion } from 'framer-motion';
import {
    ChevronRight,
    Zap,
    FileCheck,
    UserCheck,
    GraduationCap,
    Sparkles
  } from 'lucide-react';

function Admissions() {
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

  const steps = [
    { 
      icon: FileCheck, 
      title: "Submit Application", 
      description: "Complete the online application form with all required documents",
      color: "blue"
    },
    { 
      icon: UserCheck, 
      title: "Document Verification", 
      description: "Submit certified copies of academic certificates and identification",
      color: "purple"
    },
    { 
      icon: Sparkles, 
      title: "Interview", 
      description: "Attend an interview with the program coordinator",
      color: "pink"
    },
    { 
      icon: GraduationCap, 
      title: "Enrollment", 
      description: "Complete enrollment and begin your academic journey",
      color: "blue"
    }
  ];

  return (
    <div>
        <section id="admissions" className="py-20 relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <svg className="absolute top-0 right-0 h-full w-1/2 opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="grid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--neon-blue)" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="var(--neon-purple)" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grid-gradient)" />
              
              {/* Grid lines */}
              {[...Array(10)].map((_, i) => (
                <line 
                  key={`h-${i}`}
                  x1="0" 
                  y1={i * 10} 
                  x2="100" 
                  y2={i * 10} 
                  stroke="var(--neon-blue)" 
                  strokeWidth="0.1" 
                />
              ))}
              {[...Array(10)].map((_, i) => (
                <line 
                  key={`v-${i}`}
                  x1={i * 10} 
                  y1="0" 
                  x2={i * 10} 
                  y2="100" 
                  stroke="var(--neon-blue)" 
                  strokeWidth="0.1" 
                />
              ))}
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
                <span className="text-gradient">Admissions</span>
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
                className="space-y-6"
              >
                <motion.h3 
                  variants={itemVariants}
                  className="text-2xl font-semibold mb-4 font-future text-white flex items-center"
                >
                  <Zap className="h-6 w-6 text-neon-blue mr-2" />
                  How to Apply
                </motion.h3>
                
                <motion.div 
                  variants={containerVariants}
                  className="space-y-6"
                >
                  {steps.map((step, index) => (
                    <motion.div 
                      key={index}
                      variants={itemVariants}
                      custom={index}
                      className="flex items-start space-x-4 glass-card p-4 rounded-xl hover-glow"
                      whileHover={{ x: 5 }}
                    >
                      <div className={`flex-shrink-0 w-10 h-10 bg-neon-${step.color}/20 rounded-full flex items-center justify-center border border-neon-${step.color}/50`}>
                        <step.icon className={`text-neon-${step.color} h-5 w-5`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white font-future">{step.title}</h4>
                        <p className="text-gray-300 font-future text-sm">{step.description}</p>
                      </div>
                      <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 h-full">
                        <motion.div 
                          className={`w-1 h-0 bg-neon-${step.color}`}
                          initial={{ height: 0 }}
                          whileInView={{ height: '80%' }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
                
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8"
                >
                  <ApplyNowBtn />
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
                  <FileCheck className="h-6 w-6 text-neon-purple mr-2" />
                  Requirements
                </motion.h3>
                
                <div className="space-y-4">
                  {[
                    {
                      title: "Academic Requirements",
                      items: [
                        "High school completion certificate",
                        "Minimum GPA of 2.0 or equivalent",
                        "English language proficiency"
                      ],
                      color: "blue"
                    },
                    {
                      title: "Required Documents",
                      items: [
                        "Completed application form",
                        "Academic transcripts",
                        "Valid ID card/Passport copy",
                        "Passport size photographs"
                      ],
                      color: "purple"
                    },
                    {
                      title: "Additional Requirements",
                      items: [
                        "Statement of purpose",
                        "Two letters of recommendation",
                        "Portfolio (for specific programs)"
                      ],
                      color: "pink"
                    }
                  ].map((category, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.2 }}
                      className="glass-card p-4 rounded-lg hover-glow"
                    >
                      <h4 className={`font-semibold mb-2 text-neon-${category.color} font-future flex items-center`}>
                        <motion.div 
                          animate={{ 
                            scale: [1, 1.2, 1],
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.5
                          }}
                          className={`w-2 h-2 rounded-full bg-neon-${category.color} mr-2`}
                        />
                        {category.title}
                      </h4>
                      <ul className="space-y-2">
                        {category.items.map((item, j) => (
                          <motion.li 
                            key={j}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + i * 0.2 + j * 0.1 }}
                            className="flex items-center text-gray-300 font-future text-sm"
                          >
                            <ChevronRight className={`h-4 w-4 text-neon-${category.color} mr-2 flex-shrink-0`} />
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Admissions