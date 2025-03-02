import React from 'react'
import { motion } from 'framer-motion';
import {
    GraduationCap,
    Phone,
    Mail,
    MapPin,
    Sparkles,
    Zap,
    Globe,
    ChevronRight
  } from 'lucide-react';

function Footer() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [activeSection, setActiveSection] = React.useState('home');
    
    const scrollToSection = (sectionId: string) => {
        setActiveSection(sectionId);
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };
    
    const menuItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'programs', label: 'Programs' },
        { id: 'admissions', label: 'Admissions' },
        { id: 'news', label: 'News & Events' },
        { id: 'contact', label: 'Contact' },
    ];

    const programLinks = [
      { label: "Business Administration", href: "#" },
      { label: "Information Technology", href: "#" },
      { label: "Tourism & Hospitality", href: "#" },
      { label: "View All Programs", href: "#" }
    ];

    const contactInfo = [
      { icon: MapPin, content: "Male' City, Maldives" },
      { icon: Phone, content: "+960 332 0000" },
      { icon: Mail, content: "info@mycollege.edu.mv" }
    ];

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

  return (
    <div>
      <footer className="relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-cyber-grid bg-cyber-grid opacity-5"></div>
        
        <div className="bg-cyber-black py-12 relative z-10">
          <div className="container mx-auto px-4">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-4 gap-8"
            >
              <motion.div variants={itemVariants}>
                <div className="flex items-center space-x-2 mb-6">
                  <div className="relative">
                    <GraduationCap className="h-8 w-8 text-neon-blue" />
                    <motion.div 
                      className="absolute inset-0 bg-neon-blue rounded-full opacity-20"
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [0.2, 0.4, 0.2]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                  <span className="text-2xl font-bold text-white font-future">My College</span>
                </div>
                <p className="text-gray-400 font-future">
                  Empowering students with immersive learning and AI-enhanced education since 2025.
                </p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="flex space-x-3 mt-6"
                >
                  {[Sparkles, Zap, Globe].map((Icon, i) => (
                    <motion.a
                      key={i}
                      href="#"
                      whileHover={{ 
                        y: -5,
                        boxShadow: "0 0 15px rgba(0, 247, 255, 0.8)"
                      }}
                      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neon-blue hover:bg-neon-blue/20 transition-colors"
                    >
                      <Icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <h4 className="text-lg font-semibold mb-4 text-white font-future flex items-center">
                  <ChevronRight className="h-5 w-5 text-neon-blue mr-1" />
                  Quick Links
                </h4>
                <ul className="space-y-2">
                  {menuItems.map((item) => (
                    <motion.li 
                      key={item.id}
                      whileHover={{ x: 5 }}
                    >
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className="text-gray-400 hover:text-neon-blue transition-colors font-future flex items-center"
                      >
                        <motion.span 
                          animate={{ 
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className="w-1 h-1 bg-neon-blue rounded-full mr-2"
                        />
                        {item.label}
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <h4 className="text-lg font-semibold mb-4 text-white font-future flex items-center">
                  <ChevronRight className="h-5 w-5 text-neon-purple mr-1" />
                  Programs
                </h4>
                <ul className="space-y-2">
                  {programLinks.map((link, i) => (
                    <motion.li 
                      key={i}
                      whileHover={{ x: 5 }}
                    >
                      <a 
                        href={link.href} 
                        className="text-gray-400 hover:text-neon-purple transition-colors font-future flex items-center"
                      >
                        <motion.span 
                          animate={{ 
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.5
                          }}
                          className="w-1 h-1 bg-neon-purple rounded-full mr-2"
                        />
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <h4 className="text-lg font-semibold mb-4 text-white font-future flex items-center">
                  <ChevronRight className="h-5 w-5 text-neon-pink mr-1" />
                  Contact
                </h4>
                <ul className="space-y-2">
                  {contactInfo.map((item, i) => (
                    <motion.li 
                      key={i}
                      className="flex items-center space-x-2"
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                        <item.icon className="h-4 w-4 text-neon-pink" />
                      </div>
                      <span className="text-gray-400 font-future">{item.content}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400"
            >
              <div className="relative">
                <p className="font-future">&copy; {new Date().getFullYear()} My College. All rights reserved.</p>
                <motion.div 
                  className="absolute left-1/2 -top-4 transform -translate-x-1/2 w-24 h-px"
                  animate={{ 
                    background: ["linear-gradient(90deg, rgba(0,247,255,0) 0%, rgba(0,247,255,1) 50%, rgba(0,247,255,0) 100%)", 
                                "linear-gradient(90deg, rgba(0,247,255,0) 0%, rgba(188,19,254,1) 50%, rgba(0,247,255,0) 100%)",
                                "linear-gradient(90deg, rgba(0,247,255,0) 0%, rgba(0,247,255,1) 50%, rgba(0,247,255,0) 100%)"]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer