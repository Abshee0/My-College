import React from 'react'
import { motion } from 'framer-motion';
import { ChevronRight, Sparkles, Zap } from 'lucide-react';
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

    const textVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: {
                staggerChildren: 0.08
            }
        }
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        }
    };

    const title = "Welcome to My College";
    const titleArray = title.split("");

    return (
        <div>
            <section id="home" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
                {/* Background grid effect */}
                <div className="absolute inset-0 bg-cyber-grid opacity-20"></div>
                
                {/* Animated particles */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 rounded-full bg-neon-blue"
                            initial={{ 
                                x: Math.random() * window.innerWidth, 
                                y: Math.random() * window.innerHeight,
                                opacity: Math.random() * 0.5 + 0.3
                            }}
                            animate={{ 
                                y: [null, Math.random() * window.innerHeight],
                                opacity: [null, Math.random() * 0.5 + 0.3]
                            }}
                            transition={{ 
                                duration: Math.random() * 10 + 10,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            style={{ 
                                width: `${Math.random() * 3 + 1}px`,
                                height: `${Math.random() * 3 + 1}px`
                            }}
                        />
                    ))}
                </div>
                
                <div className="container mx-auto px-4 py-20 z-10">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-10 md:mb-0">
                            <motion.div
                                variants={textVariants}
                                initial="hidden"
                                animate="visible"
                                className="mb-6"
                            >
                                <div className="flex items-center mb-2">
                                    <Sparkles className="h-5 w-5 text-neon-pink mr-2" />
                                    <span className="text-neon-blue font-future tracking-wider">FUTURE OF EDUCATION</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold text-white font-future mb-2 flex flex-wrap">
                                    {titleArray.map((letter, index) => (
                                        <motion.span
                                            key={index}
                                            variants={letterVariants}
                                            className={letter === " " ? "mr-3" : ""}
                                            style={{ 
                                                display: "inline-block",
                                                textShadow: "0 0 10px rgba(0, 247, 255, 0.5)"
                                            }}
                                        >
                                            {letter}
                                        </motion.span>
                                    ))}
                                </h1>
                            </motion.div>
                            <motion.p
                                className="text-xl text-gray-300 mb-8 font-future"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8, duration: 0.6 }}
                            >
                                Empowering students with immersive learning and AI-enhanced education since 2025
                            </motion.p>
                            <motion.button
                                onClick={() => scrollToSection('admissions')}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1, duration: 0.6 }}
                                whileHover={{ 
                                    scale: 1.05,
                                    boxShadow: "0 0 15px rgba(0, 247, 255, 0.8)"
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="neon-border bg-transparent text-neon-blue px-8 py-3 rounded-full flex items-center space-x-2 font-future transition-all duration-300"
                            >
                                <Zap className="h-5 w-5" />
                                <span>Apply Now</span>
                                <ChevronRight className="h-5 w-5" />
                            </motion.button>
                        </div>
                        <div className="md:w-1/2 relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
                                animate={{ 
                                    opacity: 1, 
                                    scale: 1,
                                    rotateY: 0
                                }}
                                transition={{ 
                                    delay: 0.6,
                                    duration: 0.8,
                                    type: "spring"
                                }}
                                className="relative hologram-effect"
                            >
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 blur-md transform -rotate-3"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                    alt="My College Campus"
                                    className="rounded-2xl shadow-xl relative z-10 border border-white/10"
                                />
                                <motion.div 
                                    className="absolute inset-0 rounded-2xl border-2 border-neon-blue/50"
                                    animate={{ 
                                        boxShadow: ["0 0 0px rgba(0, 247, 255, 0)", "0 0 20px rgba(0, 247, 255, 0.5)", "0 0 0px rgba(0, 247, 255, 0)"]
                                    }}
                                    transition={{ 
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                            </motion.div>
                            
                            {/* Floating elements */}
                            <motion.div
                                className="absolute z-10 -top-5 -right-5 bg-neon-purple/20 backdrop-blur-sm p-3 rounded-lg border border-neon-purple/30 text-white font-future"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.2 }}
                                style={{ 
                                    boxShadow: "0 0 15px rgba(188, 19, 254, 0.3)"
                                }}
                            >
                                <motion.div
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{ 
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <div className="flex items-center">
                                        <Sparkles className="h-4 w-4 text-neon-purple mr-2" />
                                        <span className="text-sm">Holographic Campus Tours</span>
                                    </div>
                                </motion.div>
                            </motion.div>
                            
                            <motion.div
                                className="absolute z-10 -bottom-5 -left-5 bg-neon-blue/20 backdrop-blur-sm p-3 rounded-lg border border-neon-blue/30 text-white font-future"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.4 }}
                                style={{ 
                                    boxShadow: "0 0 15px rgba(0, 247, 255, 0.3)"
                                }}
                            >
                                <motion.div
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{ 
                                        duration: 2.5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 0.5
                                    }}
                                >
                                    <div className="flex items-center">
                                        <Zap className="h-4 w-4 text-neon-blue mr-2" />
                                        <span className="text-sm">AI-Enhanced Learning</span>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero