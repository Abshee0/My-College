import React from 'react'
import { useNavigate } from 'react-router-dom';
import {programs} from '../data/programs'
import { motion } from 'framer-motion';
import {
    ChevronRight,
    Award,
    BookOpen,
    Building2,
  } from 'lucide-react';

function Programs() {
  const navigate = useNavigate();

  return (
    <div>
        <section id="programs" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Our Programs
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-xl shadow-lg bg-white"
              >
                <div className="relative h-48">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <program.icon className="absolute bottom-4 left-4 h-8 w-8 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <motion.button
                    onClick={() => navigate(`/program/${program.id}`)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-blue-600 font-semibold flex items-center space-x-2"
                  >
                    <span>Learn More</span>
                    <ChevronRight className="h-4 w-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Programs