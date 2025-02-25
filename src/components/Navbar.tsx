import React from 'react'
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import {
    GraduationCap,
    Menu,
    X,
  } from 'lucide-react';

function Navbar() {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [activeSection, setActiveSection] = React.useState('home');
    const menuItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'programs', label: 'Programs' },
        { id: 'admissions', label: 'Admissions' },
        { id: 'news', label: 'News & Events' },
        { id: 'contact', label: 'Contact' },
      ];

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

  return (
    <div>
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => navigate('/')}
              className="flex items-center space-x-2"
            >
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-800">My College</span>
            </motion.button>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {menuItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  whileHover={{ scale: 1.05 }}
                  className={`text-gray-600 hover:text-blue-600 transition-colors ${
                    activeSection === item.id ? 'text-blue-600 font-semibold' : ''
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white"
          >
            <div className="px-4 py-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-2 text-gray-600 hover:text-blue-600 ${
                    activeSection === item.id ? 'text-blue-600 font-semibold' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </div>
  )
}

export default Navbar
