import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import {
    GraduationCap,
    Menu,
    X,
    Sparkles,
  } from 'lucide-react';

function Navbar() {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    
    const menuItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'programs', label: 'Programs' },
        { id: 'admissions', label: 'Admissions' },
        { id: 'news', label: 'News & Events' },
        { id: 'contact', label: 'Contact' },
    ];

    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setScrolled(scrollPosition > 50);
      };
      
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
      setActiveSection(sectionId);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMenuOpen(false);
    };

    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });
  
    const fadeInUp = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    };

    const navVariants = {
      hidden: { opacity: 0, y: -20 },
      visible: { opacity: 1, y: 0 },
    };

    const menuItemVariants = {
      hidden: { opacity: 0, x: -20 },
      visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: {
          delay: i * 0.1,
        },
      }),
    };

  return (
    <motion.nav 
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-cyber-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 group"
          >
            <div className="relative">
              <GraduationCap className="h-8 w-8 text-neon-blue group-hover:text-neon-purple transition-colors duration-300" />
              <motion.div 
                className="absolute inset-0 bg-neon-blue rounded-full opacity-20"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
            <div className="relative">
              <span className="text-2xl font-bold text-white font-future">My College</span>
              <Sparkles className="h-4 w-4 text-neon-pink absolute -top-1 -right-4" />
            </div>
          </motion.button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item, i) => (
              <motion.button
                key={item.id}
                custom={i}
                variants={menuItemVariants}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ 
                  scale: 1.05,
                  textShadow: "0 0 8px rgb(0, 247, 255)"
                }}
                className={`relative font-future ${
                  activeSection === item.id 
                    ? 'text-neon-blue font-semibold' 
                    : 'text-white hover:text-neon-blue transition-colors'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div 
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-neon-blue"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-white hover:text-neon-blue transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-card mx-4 mb-4 overflow-hidden"
          >
            <div className="px-4 py-2">
              {menuItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-3 font-future ${
                    activeSection === item.id 
                      ? 'text-neon-blue font-semibold' 
                      : 'text-white hover:text-neon-blue'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar