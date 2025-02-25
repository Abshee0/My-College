import React from 'react'
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

function Hero() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [activeSection, setActiveSection] = React.useState('home');

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
      });
    
      const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      };

    const scrollToSection = (sectionId: string) => {
        setActiveSection(sectionId);
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
      };
  return (
    <div>
        <section id="home" className="pt-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <motion.h1
                className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Welcome to My College
              </motion.h1>
              <motion.p
                className="text-xl text-gray-600 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Empowering students with quality education and practical skills since 1999
              </motion.p>
              <motion.button
                onClick={() => scrollToSection('admissions')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-3 rounded-full flex items-center space-x-2 hover:bg-blue-700 transition-colors"
              >
                <span>Apply Now</span>
                <ChevronRight className="h-5 w-5" />
              </motion.button>
            </div>
            <div className="md:w-1/2">
              <motion.img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="My College Campus"
                className="rounded-lg shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
              />
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default Hero
