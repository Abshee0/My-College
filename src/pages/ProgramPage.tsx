import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { programs } from '../data/programs';
import ApplyNowBtn from '../components/ApplyNowBtn'
import { ChevronLeft, Clock, Users, Calendar, Award, Sparkles, Zap, Brain } from 'lucide-react';
import { useScrollTop } from '../hooks/useScrollTop';

function ProgramPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const program = programs.find(p => p.id === id);
  useScrollTop();

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cyber-black">
        <div className="text-center glass-card p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-4 text-white font-future">Program not found</h2>
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 15px rgba(0, 247, 255, 0.8)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/')}
            className="text-neon-blue hover:text-neon-purple font-future"
          >
            Return to home
          </motion.button>
        </div>
      </div>
    );
  }

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

  const careerOpportunities = [
    "Industry Professional",
    "Research and Development",
    "Consulting",
    "Project Management",
    "Entrepreneurship"
  ];

  return (
    <div className="pt-20 bg-cyber-black">
      {/* Hero Section */}
      <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            initial={{ scale: 1.2, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full"
          >
            <img
              src={program.image}
              alt={program.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-cyber-black/70 to-transparent" />
        
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
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
        
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => navigate('/')}
              className="text-white mb-8 flex items-center space-x-2 hover:text-neon-blue transition-colors font-future"
            >
              <ChevronLeft className="h-5 w-5" />
              <span>Back to Programs</span>
            </motion.button>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <div className="flex items-center mb-4">
                <motion.div 
                  animate={{ 
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-2 h-2 rounded-full bg-neon-blue mr-3"
                />
                <span className="text-neon-blue font-future tracking-wider">PROGRAM DETAILS</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white font-future mb-4 leading-tight">
                {program.title}
              </h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-300 max-w-2xl font-future"
              >
                {program.description}
              </motion.p>
            </motion.div>
          </div>
        </div>
        
        {/* Floating elements */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-10 right-10 hidden md:block"
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
            className="bg-neon-purple/20 backdrop-blur-sm p-4 rounded-lg border border-neon-purple/30"
          >
            <div className="flex items-center space-x-2">
              <Sparkles className="h-5 w-5 text-neon-purple" />
              <span className="text-white font-future">Future-ready curriculum</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="py-16 relative">
        <div className="absolute inset-0 bg-cyber-grid bg-cyber-grid opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {[
              { icon: Clock, title: "Duration", content: "4 Years Full-time", color: "blue" },
              { icon: Users, title: "Class Size", content: "25 Students per Class", color: "purple" },
              { icon: Calendar, title: "Start Dates", content: "January and July", color: "pink" }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 0 15px rgba(0, 247, 255, 0.5)"
                }}
                className="glass-card p-6 rounded-xl hover-glow"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-neon-${item.color}/20 rounded-full flex items-center justify-center border border-neon-${item.color}/50 mr-4`}>
                    <item.icon className={`h-6 w-6 text-neon-${item.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold font-future text-white">{item.title}</h3>
                </div>
                <p className="text-gray-300 font-future">{item.content}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="absolute -top-10 -left-10 w-20 h-20 bg-neon-blue/10 rounded-full blur-xl"
              />
              
              <h2 className="text-3xl font-bold mb-6 font-future text-white flex items-center">
                <Brain className="h-7 w-7 text-neon-blue mr-3" />
                Program Overview
              </h2>
              
              <div className="prose max-w-none">
                <p className="text-gray-300 mb-4 font-future">
                  Our comprehensive program is designed to provide students with both theoretical knowledge and practical skills needed to succeed in their chosen field. Through a combination of lectures, hands-on projects, and industry partnerships, students will develop the expertise required for a successful career.
                </p>
                <p className="text-gray-300 mb-4 font-future">
                  The curriculum is regularly updated to reflect the latest industry trends and technological advancements, ensuring that our graduates are well-prepared for the challenges of the modern workplace.
                </p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="mt-8 glass-card p-6 rounded-xl border border-neon-blue/30"
                >
                  <h3 className="text-xl font-semibold mb-3 font-future text-white flex items-center">
                    <Zap className="h-5 w-5 text-neon-blue mr-2" />
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Immersive learning environment",
                      "AI-enhanced personalized education",
                      "Industry-partnered projects",
                      "Cutting-edge virtual laboratories",
                      "Global networking opportunities"
                    ].map((feature, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="flex items-center text-gray-300 font-future"
                      >
                        <motion.div 
                          animate={{ 
                            scale: [1, 1.2, 1],
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.5
                          }}
                          className="w-2 h-2 rounded-full bg-neon-blue mr-3"
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="absolute -top-10 -right-10 w-20 h-20 bg-neon-purple/10 rounded-full blur-xl"
              />
              
              <h2 className="text-3xl font-bold mb-6 font-future text-white flex items-center">
                <Award className="h-7 w-7 text-neon-purple mr-3" />
                Career Opportunities
              </h2>
              
              <div className="space-y-4">
                {careerOpportunities.map((career, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="glass-card p-4 rounded-xl hover-glow"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-neon-purple/20 rounded-full flex items-center justify-center border border-neon-purple/50">
                        <Award className="h-5 w-5 text-neon-purple" />
                      </div>
                      <span className="text-white font-future">{career}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="mt-10 glass-card p-6 rounded-xl border border-neon-pink/30"
              >
                <h3 className="text-xl font-semibold mb-3 font-future text-white flex items-center">
                  <Sparkles className="h-5 w-5 text-neon-pink mr-2" />
                  Industry Connections
                </h3>
                <p className="text-gray-300 font-future mb-4">
                  Our program maintains strong connections with leading industry partners, providing students with internship opportunities, guest lectures, and real-world projects.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["TechCorp", "GlobalSystems", "FutureWorks", "InnovateLabs"].map((partner, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.9 + i * 0.1 }}
                      className="bg-white/5 px-3 py-1 rounded-full border border-white/10 text-white font-future text-sm"
                    >
                      {partner}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <ApplyNowBtn />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ProgramPage;